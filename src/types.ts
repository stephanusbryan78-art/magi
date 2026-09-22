export type SkinType = 'Oily' | 'Dry' | 'Combination' | 'Normal' | 'Sensitive' | 'All Skin Types';

export type SkinConcern = 
  | 'Barrier Repair'
  | 'Acne & Blemishes'
  | 'Dehydration & Dryness'
  | 'Hyperpigmentation & Dullness'
  | 'Redness & Sensitivity'
  | 'Pore Texture & Oil Control'
  | 'Fine Lines & Elasticity';

export type ProductCategory = 'Moisturizer' | 'Cleanser' | 'Serum & Treatment' | 'Sunscreen' | 'Toner & Essence' | 'Barrier Balm';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  subtitle: string;
  targetSkinTypes: SkinType[];
  primaryConcerns: SkinConcern[];
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  approxPriceUSD: number;
  ratingScore?: number; // MAGI Editorial Evaluation (1-10)
  keyActives: string[];
  texture: string;
  fragranceFree: boolean;
  whoItIsFor: string;
  whatItSolves: string;
  pros: string[];
  limitations: string[];
  routineStep: 'Cleanser' | 'Prep / Toner' | 'Serum / Treatment' | 'Moisturizer' | 'Barrier Seal' | 'Sun Protection';
  routineTiming: 'AM' | 'PM' | 'Both AM & PM';
  imageUrl: string;
  affiliateUrl: string;
  retailerName: string;
  isEditorialPick?: boolean;
  editorialBadge?: string;
  volume: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReferenceSource {
  title: string;
  publication: string;
  year: number;
  url?: string;
  doi?: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  content: string[]; // paragraphs or markdown
  highlightNote?: string;
  recommendedProductIds?: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Skincare' | 'Face Care' | 'Body Care' | 'Beauty Basics';
  subcategory: string;
  featuredImageUrl: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMin: number;
  author: Author;
  factCheckedBy: string;
  primaryConcern: SkinConcern;
  seoMetaDescription: string;
  
  // GEO & generative search extraction
  answerFirstSummary: string;
  keyTakeaways: string[];
  
  sections: ArticleSection[];
  
  // Embedded interactive elements
  comparisonProductIds?: string[];
  routineTips?: {
    am: string[];
    pm: string[];
  };
  faqs: FAQItem[];
  references: ReferenceSource[];
  relatedArticleIds: string[];
}

export interface CategoryMeta {
  id: 'skincare' | 'face-care' | 'body-care' | 'beauty-basics';
  name: string;
  tagline: string;
  description: string;
  featuredActives: string[];
  heroImage: string;
}

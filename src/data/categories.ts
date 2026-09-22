import { CategoryMeta } from '../types';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'skincare',
    name: 'Skincare',
    tagline: 'Formulation Science & Cellular Health',
    description: 'Evidence-based deep dives on active ingredients, clinical research, epidermal physiology, and product efficacy for intelligent daily care.',
    featuredActives: ['Ceramides', 'Niacinamide', 'Squalane', 'Centella Asiatica', 'Salicylic Acid', 'Retinoids'],
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'face-care',
    name: 'Face Care',
    tagline: 'Targeted Topicals, Cleansers & Barrier Creams',
    description: 'Deconstructing face moisturizers, gentle cleansers, hydrating fluids, and daily protective shields tailored to specific facial skin types.',
    featuredActives: ['Lipid Complexes', 'Panthenol B5', 'Glycerin & Beta-Glucan', 'Zinc PCA', 'Urea'],
    heroImage: 'https://images.unsplash.com/photo-1608248597359-052445b2e047?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'body-care',
    name: 'Body Care',
    tagline: 'Keratosis Pilaris, Body Barriers & Texture',
    description: 'Extending facial-grade cosmetic science below the neck: treating body barrier breakdown, rough skin texture, and daily hydration.',
    featuredActives: ['Lactic Acid', 'Salicylic Acid 2%', 'Colloidal Oatmeal', 'Niacinamide Body Emulsions'],
    heroImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'beauty-basics',
    name: 'Beauty Basics',
    tagline: 'Fundamentals, Routines & Ingredient Literacy',
    description: 'Essential guides breaking down confusing marketing claims, cosmetic labelling standards, how to patch-test, and building 3-step routines.',
    featuredActives: ['pH Balance', 'Emulsion Types', 'Ingredient Concentration Literacy', 'SPF Protection Factors'],
    heroImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80'
  }
];

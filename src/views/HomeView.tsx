import React from 'react';
import { ArrowRight, Sparkles, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Article, Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { SkinConcernQuiz } from '../components/SkinConcernQuiz';
import { CATEGORIES } from '../data/categories';

interface Props {
  featuredArticle: Article;
  articles: Article[];
  products: Product[];
  onSelectArticle: (article: Article) => void;
  onSelectProduct: (product: Product) => void;
  onNavigate: (view: string) => void;
  onOpenAffiliate: (product: Product) => void;
  comparedProductIds: string[];
  onToggleCompare: (product: Product) => void;
}

export const HomeView: React.FC<Props> = ({
  featuredArticle,
  articles,
  products,
  onSelectArticle,
  onSelectProduct,
  onNavigate,
  onOpenAffiliate,
  comparedProductIds,
  onToggleCompare
}) => {
  const editorialPicks = products.filter(p => p.isEditorialPick).slice(0, 4);
  const secondaryArticles = articles.filter(a => a.id !== featuredArticle.id).slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. Hero Statement & Editorial Mission */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F3EFE6] text-[#874C42] border border-[#E8E5DF] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#874C42]"></span>
            <span>MAGI 2.0 • Skincare &amp; Face Care Platform</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#171513] tracking-tight leading-[1.08] mb-6">
            Objective clarity for modern skincare.
          </h1>

          <p className="text-base sm:text-xl text-[#736F6A] font-normal leading-relaxed max-w-2xl mb-8">
            A digital beauty publication helping discerning consumers deconstruct formulations, compare active ingredients, and evaluate products with clinical rigor.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <button
              onClick={() => onNavigate('guides')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#171513] text-[#FAF9F5] font-medium rounded-lg hover:bg-[#2A2724] transition-colors shadow-xs"
            >
              <span>Explore Editorial Guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#171513] border border-[#E8E5DF] font-medium rounded-lg hover:bg-[#F3EFE6] transition-colors"
            >
              <span>Product Comparison Matrix</span>
            </button>
            <button
              onClick={() => onNavigate('standards')}
              className="inline-flex items-center gap-1.5 px-4 py-3 text-[#736F6A] hover:text-[#171513] font-medium transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-[#874C42]" />
              <span>Editorial Independence Charter</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Featured Lead Investigation Story */}
      <section id="lead-investigation">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E8E5DF]">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#874C42] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Lead Investigation
          </span>
          <span className="text-xs text-[#736F6A]">
            {featuredArticle.readingTimeMin} min read • Updated {featuredArticle.updatedAt}
          </span>
        </div>

        <div 
          onClick={() => onSelectArticle(featuredArticle)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#E8E5DF] rounded-2xl p-6 sm:p-10 shadow-xs hover:border-[#171513] transition-all cursor-pointer group"
        >
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#874C42]">
              {featuredArticle.subcategory}
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-[#171513] group-hover:text-[#874C42] transition-colors leading-tight font-normal">
              {featuredArticle.title}
            </h2>
            <p className="text-sm sm:text-base text-[#736F6A] leading-relaxed">
              {featuredArticle.subtitle}
            </p>

            {/* Answer-first summary preview */}
            <div className="p-4 bg-[#FAF9F5] border border-[#E8E5DF] rounded-xl text-xs text-[#2A2724] leading-relaxed">
              <span className="font-semibold text-[#171513] block mb-1">
                Executive Takeaway:
              </span>
              <p className="line-clamp-3 text-[#736F6A]">
                {featuredArticle.answerFirstSummary}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2.5">
                <img
                  src={featuredArticle.author.avatarUrl}
                  alt={featuredArticle.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-xs">
                  <span className="font-medium text-[#171513] block">{featuredArticle.author.name}</span>
                  <span className="text-[#736F6A] text-[11px]">{featuredArticle.author.role}</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171513] group-hover:translate-x-1 transition-transform">
                Read Deep-Dive <ArrowRight className="w-3.5 h-3.5 text-[#874C42]" />
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-4/3 rounded-xl overflow-hidden bg-[#F3EFE6] border border-[#E8E5DF]">
            <img
              src={featuredArticle.featuredImageUrl}
              alt={featuredArticle.title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. Secondary Trending Deep-Dives */}
      <section>
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E8E5DF]">
          <h3 className="font-editorial text-2xl font-normal text-[#171513]">
            Formulation &amp; Ingredient Deep Dives
          </h3>
          <button
            onClick={() => onNavigate('guides')}
            className="text-xs uppercase tracking-wider font-semibold text-[#874C42] hover:text-[#171513] flex items-center gap-1"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white border border-[#E8E5DF] rounded-xl overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-16/10 w-full overflow-hidden bg-[#F3EFE6] border-b border-[#E8E5DF]">
                  <img
                    src={article.featuredImageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#874C42] block mb-1">
                    {article.subcategory}
                  </span>
                  <h4 className="font-editorial text-xl font-normal text-[#171513] group-hover:text-[#874C42] transition-colors leading-snug mb-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-[#736F6A] line-clamp-2 leading-relaxed">
                    {article.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-transparent flex items-center justify-between text-xs text-[#736F6A]">
                <span>{article.readingTimeMin} min read</span>
                <span className="font-medium text-[#171513] group-hover:text-[#874C42] flex items-center gap-1">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Interactive Diagnostic Tool (Moving problem to solution) */}
      <SkinConcernQuiz
        products={products}
        articles={articles}
        onSelectProduct={onSelectProduct}
        onSelectArticle={onSelectArticle}
        onOpenAffiliate={onOpenAffiliate}
      />

      {/* 5. Editorial Product Recommendations / Benchmark Picks */}
      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-[#E8E5DF]">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#874C42]">
              Vetted Formulations
            </span>
            <h3 className="font-editorial text-2xl font-normal text-[#171513]">
              MAGI Editorial Recommendations
            </h3>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs uppercase tracking-wider font-semibold text-[#874C42] hover:text-[#171513] flex items-center gap-1"
          >
            <span>Compare Full Product Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorialPicks.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenAffiliate={onOpenAffiliate}
              isCompared={comparedProductIds.includes(product.id)}
              onToggleCompare={onToggleCompare}
              showFullDetails={false}
            />
          ))}
        </div>
      </section>

      {/* 6. Editorial Category Verticals */}
      <section>
        <div className="mb-6 pb-3 border-b border-[#E8E5DF]">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#874C42]">
            Information Architecture
          </span>
          <h3 className="font-editorial text-2xl font-normal text-[#171513]">
            Browse by Content Vertical
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigate(cat.id === 'skincare' ? 'skincare' : cat.id === 'face-care' ? 'face-care' : 'guides')}
              className="bg-white border border-[#E8E5DF] rounded-xl p-5 hover:border-[#171513] transition-all cursor-pointer group flex flex-col justify-between h-full"
            >
              <div>
                <div className="aspect-16/10 rounded-lg overflow-hidden bg-[#F3EFE6] mb-4">
                  <img
                    src={cat.heroImage}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-editorial text-xl text-[#171513] group-hover:text-[#874C42] transition-colors mb-1">
                  {cat.name}
                </h4>
                <p className="text-xs text-[#874C42] font-medium mb-2">
                  {cat.tagline}
                </p>
                <p className="text-xs text-[#736F6A] leading-relaxed line-clamp-2 mb-4">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8E5DF] flex items-center justify-between text-xs text-[#171513] font-medium">
                <span>View Content Hub</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#874C42] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. The 4-Pillar MAGI Trust Charter Banner */}
      <section className="bg-[#FAF9F5] border border-[#E8E5DF] rounded-2xl p-8 sm:p-12">
        <div className="max-w-3xl mb-8">
          <span className="text-xs uppercase tracking-widest text-[#874C42] font-semibold">
            PRD Section 18 • Trust &amp; Standards
          </span>
          <h3 className="font-editorial text-3xl font-normal text-[#171513] mt-1 mb-3">
            How We Evaluate: The 4-Tier Information Architecture
          </h3>
          <p className="text-sm text-[#736F6A] leading-relaxed">
            In an era of sponsored influencers and algorithmic content farms, MAGI maintains rigid semantic barriers between scientific fact, editorial critique, product recommendation, and commercial links.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-white border border-[#E8E5DF] rounded-xl space-y-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F3EFE6] text-[#171513] uppercase tracking-wider">
              Pillar 01
            </span>
            <h5 className="font-editorial text-lg text-[#171513]">Scientific Fact</h5>
            <p className="text-xs text-[#736F6A] leading-relaxed">
              Grounded exclusively in peer-reviewed dermatology literature, clinical trial disclosures, and chemical registries.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#E8E5DF] rounded-xl space-y-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F3EFE6] text-[#171513] uppercase tracking-wider">
              Pillar 02
            </span>
            <h5 className="font-editorial text-lg text-[#171513]">Editorial Interpretation</h5>
            <p className="text-xs text-[#736F6A] leading-relaxed">
              Our chemists and research editors analyze cosmetic vehicles, active percentages, and real-world formulation balance.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#E8E5DF] rounded-xl space-y-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F3EFE6] text-[#171513] uppercase tracking-wider">
              Pillar 03
            </span>
            <h5 className="font-editorial text-lg text-[#171513]">Product Recommendation</h5>
            <p className="text-xs text-[#736F6A] leading-relaxed">
              Clear identification of who a product is for, real limitations, and when you should avoid purchasing it.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#E8E5DF] rounded-xl space-y-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F3EFE6] text-[#171513] uppercase tracking-wider">
              Pillar 04
            </span>
            <h5 className="font-editorial text-lg text-[#171513]">Affiliate Transparency</h5>
            <p className="text-xs text-[#736F6A] leading-relaxed">
              Verified retailer outbound links (e.g. Accesstrade) that sustain our independent testing without sponsored influence.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E8E5DF] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#736F6A]">
            <CheckCircle2 className="w-4 h-4 text-[#4E6B56]" />
            <span>Zero paid placements • Zero fabricated ratings • 100% transparent active disclosures</span>
          </div>
          <button
            onClick={() => onNavigate('standards')}
            className="text-xs font-semibold text-[#171513] hover:text-[#874C42] underline"
          >
            Read Our Full Editorial Charter &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};

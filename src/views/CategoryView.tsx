import React from 'react';
import { ArrowRight, BookOpen, Sparkles, Filter } from 'lucide-react';
import { Article, Product, CategoryMeta } from '../types';
import { ProductCard } from '../components/ProductCard';

interface Props {
  category: CategoryMeta;
  articles: Article[];
  products: Product[];
  onSelectArticle: (article: Article) => void;
  onSelectProduct: (product: Product) => void;
  onOpenAffiliate: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  comparedProductIds: string[];
}

export const CategoryView: React.FC<Props> = ({
  category,
  articles,
  products,
  onSelectArticle,
  onSelectProduct,
  onOpenAffiliate,
  onToggleCompare,
  comparedProductIds
}) => {
  return (
    <div className="space-y-12 pb-16 pt-4">
      {/* Category Hero */}
      <section className="bg-white border border-[#E8E5DF] rounded-2xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#874C42] block">
              Editorial Vertical
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-[#171513] tracking-tight">
              {category.name}
            </h1>
            <p className="text-base text-[#874C42] font-medium">
              {category.tagline}
            </p>
            <p className="text-sm sm:text-base text-[#736F6A] leading-relaxed max-w-2xl">
              {category.description}
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#171513] block mb-2">
                Primary Actives &amp; Chemistry Focus:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {category.featuredActives.map((act) => (
                  <span
                    key={act}
                    className="px-2.5 py-1 rounded-md text-xs bg-[#FAF9F5] border border-[#E8E5DF] text-[#2A2724]"
                  >
                    {act}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 aspect-4/3 rounded-xl overflow-hidden bg-[#F3EFE6] border border-[#E8E5DF]">
            <img
              src={category.heroImage}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Articles in this Vertical */}
      <section>
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E8E5DF]">
          <h2 className="font-editorial text-2xl font-normal text-[#171513] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#874C42]" />
            <span>Articles &amp; Formulation Guides ({articles.length})</span>
          </h2>
        </div>

        {articles.length === 0 ? (
          <p className="text-sm text-[#736F6A]">More editorial guides for this vertical are in peer review.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((art) => (
              <div
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="bg-white border border-[#E8E5DF] rounded-xl overflow-hidden hover:border-[#171513] transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-16/9 bg-[#F3EFE6] overflow-hidden border-b border-[#E8E5DF]">
                    <img
                      src={art.featuredImageUrl}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#874C42] block mb-1">
                      {art.subcategory}
                    </span>
                    <h3 className="font-editorial text-xl font-normal text-[#171513] group-hover:text-[#874C42] transition-colors leading-snug mb-2">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#736F6A] line-clamp-2 leading-relaxed">
                      {art.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs text-[#736F6A]">
                  <span>{art.readingTimeMin} min read</span>
                  <span className="font-semibold text-[#171513] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Investigation &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Relevant Evaluated Products in this Vertical */}
      {products.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E8E5DF]">
            <h2 className="font-editorial text-2xl font-normal text-[#171513] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#874C42]" />
              <span>Vetted Formulations in {category.name} ({products.length})</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onOpenAffiliate={onOpenAffiliate}
                isCompared={comparedProductIds.includes(p.id)}
                onToggleCompare={onToggleCompare}
                showFullDetails={false}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

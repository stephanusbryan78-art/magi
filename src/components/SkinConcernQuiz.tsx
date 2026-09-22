import React, { useState } from 'react';
import { ArrowRight, Sparkles, RotateCcw, Check, BookOpen } from 'lucide-react';
import { SkinConcern, SkinType, Product, Article } from '../types';

interface Props {
  products: Product[];
  articles: Article[];
  onSelectProduct: (product: Product) => void;
  onSelectArticle: (article: Article) => void;
  onOpenAffiliate: (product: Product) => void;
}

export const SkinConcernQuiz: React.FC<Props> = ({
  products,
  articles,
  onSelectProduct,
  onSelectArticle,
  onOpenAffiliate
}) => {
  const [selectedConcern, setSelectedConcern] = useState<SkinConcern | null>('Barrier Repair');
  const [selectedSkinType, setSelectedSkinType] = useState<SkinType>('Combination');

  const concerns: { id: SkinConcern; title: string; subtitle: string }[] = [
    { id: 'Barrier Repair', title: 'Barrier Compromise', subtitle: 'Stinging, tight, peeling, redness from actives' },
    { id: 'Pore Texture & Oil Control', title: 'Oily & Congested', subtitle: 'Midday shine, enlarged pores, blackheads' },
    { id: 'Acne & Blemishes', title: 'Blemish-Prone', subtitle: 'Active spots, inflammatory bumps, clogged follicles' },
    { id: 'Redness & Sensitivity', title: 'Redness & Sensitivity', subtitle: 'Flushed cheeks, reactive skin, irritation' },
    { id: 'Dehydration & Dryness', title: 'Dehydration', subtitle: 'Rough surface texture, dullness, tight feeling' },
  ];

  const skinTypes: SkinType[] = ['Oily', 'Combination', 'Normal', 'Dry', 'Sensitive'];

  // Filter matched products based on concern & skin type
  const matchedProducts = products.filter(p => {
    const concernMatch = selectedConcern ? p.primaryConcerns.includes(selectedConcern) : true;
    const typeMatch = p.targetSkinTypes.includes(selectedSkinType) || p.targetSkinTypes.includes('All Skin Types');
    return concernMatch && typeMatch;
  }).slice(0, 3);

  // Fallback to top products for concern if none matched both
  const displayProducts = matchedProducts.length > 0 
    ? matchedProducts 
    : products.filter(p => selectedConcern && p.primaryConcerns.includes(selectedConcern)).slice(0, 3);

  // Matched relevant guide
  const matchedGuide = articles.find(a => selectedConcern && a.primaryConcern === selectedConcern) || articles[0];

  return (
    <section 
      id="skincare-problem-solver"
      className="bg-[#FAF9F5] border border-[#E8E5DF] rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden"
    >
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F3EFE6] text-[#874C42] border border-[#E8E5DF] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Diagnostic Finder
        </div>
        <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#171513] leading-snug">
          Identify the Root Biological Problem, Then Discover the Solution
        </h3>
        <p className="text-xs sm:text-sm text-[#736F6A] mt-2 leading-relaxed">
          Skip generic beauty routines. Select your current primary skin concern and your natural baseline skin type to reveal research-backed topicals and our formulation deep-dive.
        </p>
      </div>

      {/* Step 1: Primary Concern Selector */}
      <div className="mb-6">
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#171513] mb-3">
          Step 1 • What is your skin currently struggling with?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {concerns.map((c) => {
            const isSelected = selectedConcern === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedConcern(c.id)}
                className={`p-3.5 text-left rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-[#171513] text-[#FAF9F5] border-[#171513] shadow-xs'
                    : 'bg-white text-[#2A2724] border-[#E8E5DF] hover:border-[#171513]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-editorial text-sm font-medium">{c.title}</span>
                  {isSelected && <Check className="w-4 h-4 text-[#874C42]" />}
                </div>
                <p className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? 'text-[#E8E5DF]/70' : 'text-[#736F6A]'}`}>
                  {c.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Skin Type Selector */}
      <div className="mb-8">
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#171513] mb-3">
          Step 2 • Your Baseline Skin Type
        </label>
        <div className="flex flex-wrap gap-2">
          {skinTypes.map((type) => {
            const isSelected = selectedSkinType === type;
            return (
              <button
                key={type}
                onClick={() => setSelectedSkinType(type)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-[#874C42] text-white shadow-xs'
                    : 'bg-white text-[#2A2724] border border-[#E8E5DF] hover:border-[#171513]'
                }`}
              >
                {type} Skin
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Box */}
      <div className="pt-6 border-t border-[#E8E5DF]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#874C42]">
              MAGI Formulation Protocol
            </span>
            <h4 className="font-editorial text-xl text-[#171513]">
              Curated for {selectedConcern} ({selectedSkinType} Skin)
            </h4>
          </div>

          {matchedGuide && (
            <button
              onClick={() => onSelectArticle(matchedGuide)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171513] hover:text-[#874C42] transition-colors"
            >
              <BookOpen className="w-4 h-4 text-[#874C42]" />
              <span>Read Full Guide: &ldquo;{matchedGuide.title.slice(0, 38)}...&rdquo;</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Display Curated Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayProducts.map((p) => (
            <div 
              key={p.id}
              className="bg-white border border-[#E8E5DF] rounded-xl p-4 flex flex-col justify-between hover:shadow-xs transition-shadow"
            >
              <div>
                <div className="aspect-16/10 rounded-lg overflow-hidden bg-[#F3EFE6] mb-3">
                  <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] uppercase font-semibold text-[#874C42] block">
                  {p.brand} • {p.routineStep}
                </span>
                <h5 className="font-editorial text-base text-[#171513] leading-snug mt-0.5 mb-1">
                  {p.name}
                </h5>
                <p className="text-[11px] text-[#736F6A] line-clamp-2 leading-relaxed mb-3">
                  {p.whatItSolves}
                </p>
                <div className="text-[11px] font-medium text-[#171513]">
                  ${p.approxPriceUSD} <span className="text-[#736F6A] font-normal">({p.volume})</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8E5DF] flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProduct(p)}
                  className="text-xs text-[#736F6A] hover:text-[#171513] font-medium"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenAffiliate(p)}
                  className="px-3 py-1.5 bg-[#171513] hover:bg-[#2A2724] text-[#FAF9F5] text-xs font-medium rounded-lg transition-colors"
                >
                  Buy via Partner
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

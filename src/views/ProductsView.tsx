import React, { useState } from 'react';
import { Columns3, Filter, RotateCcw, Search, Sparkles } from 'lucide-react';
import { Product, SkinConcern, SkinType, ProductCategory } from '../types';
import { ProductCard } from '../components/ProductCard';
import { ComparisonTable } from '../components/ComparisonTable';

interface Props {
  products: Product[];
  onOpenAffiliate: (product: Product) => void;
  comparedProductIds: string[];
  onToggleCompare: (product: Product) => void;
  onClearCompare: () => void;
}

export const ProductsView: React.FC<Props> = ({
  products,
  onOpenAffiliate,
  comparedProductIds,
  onToggleCompare,
  onClearCompare
}) => {
  const [selectedConcern, setSelectedConcern] = useState<SkinConcern | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [selectedSkinType, setSelectedSkinType] = useState<SkinType | 'All'>('All');
  const [fragranceFreeOnly, setFragranceFreeOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showComparisonMatrix, setShowComparisonMatrix] = useState<boolean>(false);

  const concerns: (SkinConcern | 'All')[] = [
    'All',
    'Barrier Repair',
    'Acne & Blemishes',
    'Dehydration & Dryness',
    'Pore Texture & Oil Control',
    'Redness & Sensitivity',
    'Hyperpigmentation & Dullness'
  ];

  const categories: (ProductCategory | 'All')[] = [
    'All',
    'Moisturizer',
    'Serum & Treatment',
    'Barrier Balm',
    'Sunscreen',
    'Prep / Toner' as any
  ];

  const skinTypes: (SkinType | 'All')[] = [
    'All',
    'Sensitive',
    'Oily',
    'Combination',
    'Dry',
    'Normal'
  ];

  // Filtering
  const filteredProducts = products.filter((p) => {
    if (selectedConcern !== 'All' && !p.primaryConcerns.includes(selectedConcern as SkinConcern)) {
      return false;
    }
    if (selectedCategory !== 'All' && p.category !== selectedCategory) {
      return false;
    }
    if (selectedSkinType !== 'All' && !p.targetSkinTypes.includes(selectedSkinType as SkinType) && !p.targetSkinTypes.includes('All Skin Types')) {
      return false;
    }
    if (fragranceFreeOnly && !p.fragranceFree) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchBrand = p.brand.toLowerCase().includes(q);
      const matchActives = p.keyActives.some(a => a.toLowerCase().includes(q));
      if (!matchName && !matchBrand && !matchActives) return false;
    }
    return true;
  });

  const comparedProducts = comparedProductIds
    .map(id => products.find(p => p.id === id))
    .filter((p): p is Product => p !== undefined);

  const resetFilters = () => {
    setSelectedConcern('All');
    setSelectedCategory('All');
    setSelectedSkinType('All');
    setFragranceFreeOnly(false);
    setSearchQuery('');
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F3EFE6] text-[#874C42] border border-[#E8E5DF] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Product Discovery &amp; Formulation Lab
        </div>
        <h1 className="font-editorial text-3xl sm:text-5xl font-normal text-[#171513] tracking-tight">
          Evaluated Skincare Directory
        </h1>
        <p className="text-sm sm:text-base text-[#736F6A] mt-2 leading-relaxed">
          Every topical is vetted for formulation stability, active concentration transparency, and cosmetic elegance. No sponsored rankings. Compare any items side-by-side.
        </p>
      </div>

      {/* Comparison Drawer / Matrix Toggle Bar */}
      {comparedProductIds.length > 0 && (
        <div className="p-4 bg-white border-2 border-[#171513] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-2">
            <Columns3 className="w-5 h-5 text-[#874C42]" />
            <span className="font-editorial text-base text-[#171513]">
              {comparedProductIds.length} Product{comparedProductIds.length > 1 ? 's' : ''} Ready for Comparison
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClearCompare}
              className="px-3 py-1.5 text-xs text-[#736F6A] hover:text-[#171513]"
            >
              Clear Selection
            </button>
            <button
              onClick={() => setShowComparisonMatrix(!showComparisonMatrix)}
              className="px-4 py-2 bg-[#171513] hover:bg-[#2A2724] text-[#FAF9F5] text-xs font-medium rounded-lg transition-colors shadow-2xs"
            >
              {showComparisonMatrix ? 'Hide Side-by-Side Matrix' : 'View Side-by-Side Matrix'}
            </button>
          </div>
        </div>
      )}

      {/* Full Comparison Matrix View (Expandable) */}
      {showComparisonMatrix && comparedProducts.length > 0 && (
        <div className="p-6 bg-[#FAF9F5] border border-[#E8E5DF] rounded-2xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-editorial text-2xl text-[#171513]">
                Side-by-Side Formulation Analysis
              </h3>
              <p className="text-xs text-[#736F6A]">
                Evaluating differences in active concentrations, occlusivity, and pricing.
              </p>
            </div>
            <button
              onClick={() => setShowComparisonMatrix(false)}
              className="text-xs text-[#736F6A] hover:text-[#171513] font-medium"
            >
              Close Table &times;
            </button>
          </div>

          <ComparisonTable
            products={comparedProducts}
            onOpenAffiliate={onOpenAffiliate}
            onRemoveProduct={(id) => {
              const p = products.find(x => x.id === id);
              if (p) onToggleCompare(p);
            }}
          />
        </div>
      )}

      {/* Filter & Search Bar */}
      <div className="bg-white border border-[#E8E5DF] rounded-xl p-5 shadow-2xs space-y-4">
        {/* Search input + Reset */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-[#736F6A] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, brands, or active ingredients..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF9F5] border border-[#E8E5DF] rounded-lg focus:outline-hidden focus:border-[#171513] text-[#171513]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <label className="flex items-center gap-2 text-xs text-[#2A2724] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={fragranceFreeOnly}
                onChange={(e) => setFragranceFreeOnly(e.target.checked)}
                className="rounded border-[#E8E5DF] text-[#171513] focus:ring-0"
              />
              <span>Fragrance-Free Only</span>
            </label>

            {(selectedConcern !== 'All' || selectedCategory !== 'All' || selectedSkinType !== 'All' || fragranceFreeOnly || searchQuery) && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-xs text-[#874C42] hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Concern filter pills */}
        <div>
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#736F6A] block mb-2">
            Target Skin Concern:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {concerns.map((concern) => (
              <button
                key={concern}
                onClick={() => setSelectedConcern(concern)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedConcern === concern
                    ? 'bg-[#171513] text-white shadow-2xs'
                    : 'bg-[#FAF9F5] text-[#2A2724] border border-[#E8E5DF] hover:border-[#171513]'
                }`}
              >
                {concern}
              </button>
            ))}
          </div>
        </div>

        {/* Category & Skin Type dropdown filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E8E5DF]">
          <div>
            <label className="text-[11px] uppercase tracking-wider font-semibold text-[#736F6A] block mb-1">
              Product Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="w-full text-xs bg-[#FAF9F5] border border-[#E8E5DF] rounded-lg px-3 py-2 text-[#171513] focus:outline-hidden"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[11px] uppercase tracking-wider font-semibold text-[#736F6A] block mb-1">
              Skin Type Compatibility:
            </label>
            <select
              value={selectedSkinType}
              onChange={(e) => setSelectedSkinType(e.target.value as any)}
              className="w-full text-xs bg-[#FAF9F5] border border-[#E8E5DF] rounded-lg px-3 py-2 text-[#171513] focus:outline-hidden"
            >
              {skinTypes.map((type) => (
                <option key={type} value={type}>{type} Skin</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-[#736F6A]">
        <span>Showing <strong className="text-[#171513]">{filteredProducts.length}</strong> evaluated formulations</span>
        <span>Tip: Click &ldquo;Compare&rdquo; on any product card to see side-by-side analysis</span>
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center bg-white border border-[#E8E5DF] rounded-xl text-sm text-[#736F6A] space-y-3">
          <p>No products match your current filter combination.</p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-[#171513] text-[#FAF9F5] rounded-lg text-xs font-medium"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenAffiliate={onOpenAffiliate}
              isCompared={comparedProductIds.includes(product.id)}
              onToggleCompare={onToggleCompare}
              showFullDetails={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

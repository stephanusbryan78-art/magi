import React from 'react';
import { ExternalLink, Check, Plus, AlertCircle, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface Props {
  product: Product;
  onOpenAffiliate: (product: Product) => void;
  isCompared?: boolean;
  onToggleCompare?: (product: Product) => void;
  showFullDetails?: boolean;
}

export const ProductCard: React.FC<Props> = ({
  product,
  onOpenAffiliate,
  isCompared = false,
  onToggleCompare,
  showFullDetails = true
}) => {
  return (
    <article 
      id={`product-card-${product.id}`}
      className="bg-white border border-[#E8E5DF] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col h-full group"
    >
      {/* Product Image & Badges */}
      <div className="relative aspect-4/3 w-full bg-[#F3EFE6] overflow-hidden border-b border-[#E8E5DF]">
        <img
          src={product.imageUrl}
          alt={`${product.brand} ${product.name} bottle and texture`}
          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
          loading="lazy"
        />

        {/* Editorial Badge */}
        {product.editorialBadge && (
          <div className="absolute top-3 left-3 bg-[#171513]/90 text-[#FAF9F5] text-xs font-medium px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#E8E5DF]" />
            <span>{product.editorialBadge}</span>
          </div>
        )}

        {/* Compare Toggle Button */}
        {onToggleCompare && (
          <button
            id={`toggle-compare-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(product);
            }}
            className={`absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 shadow-xs ${
              isCompared 
                ? 'bg-[#171513] text-[#FAF9F5] ring-1 ring-white/20' 
                : 'bg-white/90 text-[#2A2724] hover:bg-white backdrop-blur-xs border border-[#E8E5DF]'
            }`}
            title="Add to side-by-side comparison"
          >
            {isCompared ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Selected</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 text-[#736F6A]" />
                <span>Compare</span>
              </>
            )}
          </button>
        )}

        {/* Price & Category Chip */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
          <span className="bg-white/95 text-[#2A2724] px-2 py-0.5 rounded border border-[#E8E5DF] font-medium backdrop-blur-xs">
            {product.category}
          </span>
          <span className="bg-white/95 text-[#171513] px-2 py-0.5 rounded border border-[#E8E5DF] font-semibold backdrop-blur-xs">
            ${product.approxPriceUSD} <span className="text-[#736F6A] font-normal text-[11px]">({product.priceRange})</span>
          </span>
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Name */}
          <div className="text-xs uppercase tracking-wider font-semibold text-[#874C42] mb-1">
            {product.brand}
          </div>
          <h4 className="font-editorial text-xl font-normal text-[#171513] leading-snug mb-1">
            {product.name}
          </h4>
          <p className="text-xs text-[#736F6A] mb-3">
            {product.subtitle} • {product.volume}
          </p>

          {/* Target Skin Types */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {product.targetSkinTypes.map((type) => (
              <span 
                key={type} 
                className="text-[11px] px-2 py-0.5 rounded-full bg-[#F3EFE6] text-[#2A2724] font-medium"
              >
                {type}
              </span>
            ))}
            {product.fragranceFree && (
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#FAF9F5] border border-[#E8E5DF] text-[#736F6A]">
                Fragrance-Free
              </span>
            )}
          </div>

          {/* Key Actives */}
          <div className="mb-4">
            <span className="text-[11px] uppercase tracking-wider text-[#736F6A] font-semibold block mb-1">
              Key Actives & Formulation
            </span>
            <div className="flex flex-wrap gap-1">
              {product.keyActives.map((active, idx) => (
                <span key={idx} className="text-xs text-[#2A2724] bg-[#FAF9F5] border border-[#E8E5DF] px-2 py-0.5 rounded">
                  {active}
                </span>
              ))}
            </div>
          </div>

          {showFullDetails && (
            <>
              {/* Who it's for */}
              <div className="mb-3 p-3 bg-[#FAF9F5] border border-[#E8E5DF] rounded-lg text-xs leading-relaxed">
                <span className="font-semibold text-[#171513] block mb-0.5">Who this is for:</span>
                <p className="text-[#2A2724]">{product.whoItIsFor}</p>
              </div>

              {/* Pros & Limitations */}
              <div className="space-y-2 mb-4 text-xs">
                <div>
                  <span className="font-semibold text-[#171513] flex items-center gap-1 mb-1">
                    <Check className="w-3.5 h-3.5 text-[#4E6B56]" />
                    Editorial Strengths:
                  </span>
                  <ul className="list-disc list-inside space-y-0.5 text-[#736F6A] pl-1">
                    {product.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>

                {product.limitations.length > 0 && (
                  <div>
                    <span className="font-semibold text-[#171513] flex items-center gap-1 mb-1">
                      <AlertCircle className="w-3.5 h-3.5 text-[#874C42]" />
                      Limitations & Watch-outs:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-[#736F6A] pl-1">
                      {product.limitations.map((lim, i) => (
                        <li key={i}>{lim}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Card Footer / Action */}
        <div className="pt-3 border-t border-[#E8E5DF] mt-2 flex items-center justify-between gap-3">
          <div className="text-[11px] text-[#736F6A] truncate">
            Step: <strong className="text-[#171513] font-medium">{product.routineStep}</strong> ({product.routineTiming})
          </div>
          <button
            id={`view-retailer-${product.id}`}
            onClick={() => onOpenAffiliate(product)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#171513] hover:bg-[#2A2724] text-[#FAF9F5] text-xs font-medium rounded-lg transition-colors shadow-2xs whitespace-nowrap"
          >
            <span>View Retailer</span>
            <ExternalLink className="w-3 h-3 text-[#FAF9F5]" />
          </button>
        </div>
      </div>
    </article>
  );
};

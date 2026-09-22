import React from 'react';
import { Columns3, X, ArrowRight, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface Props {
  selectedProducts: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
  onViewComparison: () => void;
}

export const ComparisonDrawer: React.FC<Props> = ({
  selectedProducts,
  onRemove,
  onClear,
  onViewComparison
}) => {
  if (selectedProducts.length === 0) return null;

  return (
    <div 
      id="comparison-floating-drawer"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl bg-[#171513] text-[#FAF9F5] rounded-xl shadow-2xl p-4 border border-[#2A2724] animate-in slide-in-from-bottom-6 duration-200"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="p-2 bg-[#2A2724] rounded-lg text-[#FAF9F5] hidden sm:block">
            <Columns3 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-editorial text-base text-[#FAF9F5]">Product Comparison</span>
              <span className="px-2 py-0.5 text-xs bg-[#2A2724] rounded-full text-[#E8E5DF]">
                {selectedProducts.length}/3
              </span>
            </div>
            <p className="text-xs text-[#E8E5DF]/70">
              {selectedProducts.length === 1 
                ? 'Select 1 or 2 more products to evaluate formulations' 
                : 'Ready for formulation side-by-side analysis'}
            </p>
          </div>
        </div>

        {/* Selected Product Thumbnails */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
          {selectedProducts.map((p) => (
            <div 
              key={p.id} 
              className="flex items-center gap-1.5 bg-[#2A2724] px-2.5 py-1 rounded-lg text-xs border border-white/10 shrink-0"
            >
              <img 
                src={p.imageUrl} 
                alt={p.name} 
                className="w-5 h-5 rounded object-cover" 
              />
              <span className="max-w-[100px] truncate text-[#FAF9F5] font-medium">{p.name}</span>
              <button
                onClick={() => onRemove(p.id)}
                className="text-[#E8E5DF]/70 hover:text-white ml-0.5"
                title={`Remove ${p.name}`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={onClear}
            className="p-2 text-[#E8E5DF]/60 hover:text-white transition-colors"
            title="Clear all selected"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            id="open-comparison-matrix-button"
            onClick={onViewComparison}
            disabled={selectedProducts.length < 1}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#FAF9F5] text-[#171513] text-xs font-semibold rounded-lg hover:bg-white transition-colors disabled:opacity-50 shadow-xs"
          >
            <span>Compare Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

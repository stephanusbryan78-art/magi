import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Sparkles, ArrowRight, Tag } from 'lucide-react';
import { Article, Product, SkinConcern } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  products: Product[];
  onSelectArticle: (article: Article) => void;
  onSelectProduct: (product: Product) => void;
  onSelectConcern: (concern: SkinConcern) => void;
}

export const SearchModal: React.FC<Props> = ({
  isOpen,
  onClose,
  articles,
  products,
  onSelectArticle,
  onSelectProduct,
  onSelectConcern
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredArticles = normalizedQuery
    ? articles.filter(a =>
        a.title.toLowerCase().includes(normalizedQuery) ||
        a.subtitle.toLowerCase().includes(normalizedQuery) ||
        a.primaryConcern.toLowerCase().includes(normalizedQuery) ||
        a.answerFirstSummary.toLowerCase().includes(normalizedQuery)
      )
    : articles.slice(0, 3);

  const filteredProducts = normalizedQuery
    ? products.filter(p =>
        p.name.toLowerCase().includes(normalizedQuery) ||
        p.brand.toLowerCase().includes(normalizedQuery) ||
        p.keyActives.some(act => act.toLowerCase().includes(normalizedQuery)) ||
        p.category.toLowerCase().includes(normalizedQuery) ||
        p.targetSkinTypes.some(t => t.toLowerCase().includes(normalizedQuery))
      )
    : products.slice(0, 4);

  const popularSearches: SkinConcern[] = [
    'Barrier Repair',
    'Pore Texture & Oil Control',
    'Acne & Blemishes',
    'Redness & Sensitivity',
    'Hyperpigmentation & Dullness'
  ];

  return (
    <div 
      id="search-modal-overlay"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-16 bg-black/60 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div 
        id="search-modal-container"
        className="w-full max-w-2xl bg-[#FAF9F5] border border-[#E8E5DF] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E8E5DF] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#736F6A] shrink-0" />
          <input
            ref={inputRef}
            id="site-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skincare science, ingredients, products, or concerns..."
            className="w-full bg-transparent text-[#171513] placeholder-[#736F6A] text-base focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#736F6A] hover:text-[#171513] p-1 text-xs"
              title="Clear search"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[#736F6A] hover:text-[#171513] p-1 rounded-md"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Topics / Filter Pills */}
        <div className="px-4 py-2.5 bg-[#F3EFE6] border-b border-[#E8E5DF] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#736F6A] font-medium whitespace-nowrap flex items-center gap-1">
            <Tag className="w-3 h-3 text-[#874C42]" />
            Topics:
          </span>
          {popularSearches.map((concern) => (
            <button
              key={concern}
              onClick={() => {
                onSelectConcern(concern);
                onClose();
              }}
              className="px-2.5 py-1 rounded-full bg-white text-[#2A2724] border border-[#E8E5DF] hover:bg-[#171513] hover:text-white transition-colors whitespace-nowrap"
            >
              {concern}
            </button>
          ))}
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-6">
          {/* Articles Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#736F6A] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#874C42]" />
                Editorial Guides ({filteredArticles.length})
              </span>
            </div>

            {filteredArticles.length === 0 ? (
              <p className="text-xs text-[#736F6A] py-2">No matching editorial guides found.</p>
            ) : (
              <div className="space-y-2">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="p-3 bg-white border border-[#E8E5DF] hover:border-[#171513] rounded-lg cursor-pointer transition-all flex items-start justify-between gap-3 group"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-[#874C42] block mb-0.5">
                        {article.subcategory}
                      </span>
                      <h4 className="font-editorial text-base text-[#171513] group-hover:text-[#874C42] transition-colors leading-snug">
                        {article.title}
                      </h4>
                      <p className="text-xs text-[#736F6A] line-clamp-1 mt-1">
                        {article.answerFirstSummary}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#736F6A] group-hover:text-[#171513] shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Products Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#736F6A] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#874C42]" />
                Evaluated Products ({filteredProducts.length})
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <p className="text-xs text-[#736F6A] py-2">No matching products found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="p-2.5 bg-white border border-[#E8E5DF] hover:border-[#171513] rounded-lg cursor-pointer transition-all flex items-center gap-3 group"
                  >
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-12 h-12 object-cover rounded-md bg-[#F3EFE6] shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] text-[#874C42] font-semibold block uppercase truncate">
                        {prod.brand}
                      </span>
                      <h5 className="font-editorial text-sm text-[#171513] truncate font-normal">
                        {prod.name}
                      </h5>
                      <span className="text-[11px] text-[#736F6A] block">
                        ${prod.approxPriceUSD} • {prod.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

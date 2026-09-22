import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AffiliateDisclaimerModal } from './components/AffiliateDisclaimerModal';
import { ComparisonDrawer } from './components/ComparisonDrawer';
import { ComparisonTable } from './components/ComparisonTable';
import { HomeView } from './views/HomeView';
import { ArticleView } from './views/ArticleView';
import { ProductsView } from './views/ProductsView';
import { EditorialStandardsView } from './views/EditorialStandardsView';
import { CategoryView } from './views/CategoryView';
import { ARTICLES } from './data/articles';
import { PRODUCTS } from './data/products';
import { CATEGORIES } from './data/categories';
import { Article, Product, SkinConcern } from './types';
import { BookOpen, Sparkles, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeArticle, setActiveArticle] = useState<Article | null>(ARTICLES[0]);
  const [affiliateProduct, setAffiliateProduct] = useState<Product | null>(null);
  const [isAffiliateModalOpen, setIsAffiliateModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [comparedProductIds, setComparedProductIds] = useState<string[]>([]);
  const [isFullComparisonOpen, setIsFullComparisonOpen] = useState(false);

  // Global keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update dynamic Schema.org JSON-LD whenever active article or view changes
  useEffect(() => {
    let scriptTag = document.getElementById('magi-dynamic-ld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'magi-dynamic-ld';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    if (currentView === 'article' && activeArticle) {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': activeArticle.title,
        'description': activeArticle.seoMetaDescription,
        'image': activeArticle.featuredImageUrl,
        'datePublished': activeArticle.publishedAt,
        'dateModified': activeArticle.updatedAt,
        'author': {
          '@type': 'Person',
          'name': activeArticle.author.name,
          'jobTitle': activeArticle.author.role
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'MAGI Beauty & Skincare',
          'url': 'https://magibeauty.com'
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://magibeauty.com/guides/${activeArticle.slug}`
        }
      };
      scriptTag.textContent = JSON.stringify(articleSchema);
    } else {
      const generalSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'MAGI Beauty & Skincare',
        'url': 'https://magibeauty.com',
        'description': 'A modern beauty editorial platform helping you discover, evaluate, and compare skincare products with objective clarity.'
      };
      scriptTag.textContent = JSON.stringify(generalSchema);
    }
  }, [currentView, activeArticle]);

  // Navigate & scroll to top
  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (article: Article) => {
    setActiveArticle(article);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    // Navigate to products and pre-filter or compare
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAffiliate = (product: Product) => {
    setAffiliateProduct(product);
    setIsAffiliateModalOpen(true);
  };

  const handleToggleCompare = (product: Product) => {
    setComparedProductIds(prev => {
      if (prev.includes(product.id)) {
        return prev.filter(id => id !== product.id);
      }
      if (prev.length >= 3) {
        // limit to 3 for clean side-by-side comparison
        return [prev[1], prev[2], product.id];
      }
      return [...prev, product.id];
    });
  };

  const handleRemoveCompare = (productId: string) => {
    setComparedProductIds(prev => prev.filter(id => id !== productId));
  };

  const handleClearCompare = () => {
    setComparedProductIds([]);
  };

  const selectedComparedProducts = comparedProductIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter((p): p is Product => p !== undefined);

  // Filter products for category views
  const skincareCategoryMeta = CATEGORIES.find(c => c.id === 'skincare') || CATEGORIES[0];
  const faceCareCategoryMeta = CATEGORIES.find(c => c.id === 'face-care') || CATEGORIES[1];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#171513] selection:bg-[#E8E5DF]">
      {/* Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        comparisonCount={comparedProductIds.length}
        onOpenComparisonModal={() => setIsFullComparisonOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {currentView === 'home' && (
          <HomeView
            featuredArticle={ARTICLES[0]}
            articles={ARTICLES}
            products={PRODUCTS}
            onSelectArticle={handleSelectArticle}
            onSelectProduct={handleSelectProduct}
            onNavigate={handleNavigate}
            onOpenAffiliate={handleOpenAffiliate}
            comparedProductIds={comparedProductIds}
            onToggleCompare={handleToggleCompare}
          />
        )}

        {currentView === 'article' && activeArticle && (
          <ArticleView
            article={activeArticle}
            allProducts={PRODUCTS}
            allArticles={ARTICLES}
            onBack={() => handleNavigate('home')}
            onSelectArticle={handleSelectArticle}
            onOpenAffiliate={handleOpenAffiliate}
            onToggleCompare={handleToggleCompare}
            comparedProductIds={comparedProductIds}
          />
        )}

        {currentView === 'products' && (
          <ProductsView
            products={PRODUCTS}
            onOpenAffiliate={handleOpenAffiliate}
            comparedProductIds={comparedProductIds}
            onToggleCompare={handleToggleCompare}
            onClearCompare={handleClearCompare}
          />
        )}

        {currentView === 'standards' && (
          <EditorialStandardsView />
        )}

        {currentView === 'skincare' && (
          <CategoryView
            category={skincareCategoryMeta}
            articles={ARTICLES.filter(a => a.category === 'Skincare')}
            products={PRODUCTS.filter(p => p.primaryConcerns.includes('Barrier Repair') || p.category === 'Serum & Treatment')}
            onSelectArticle={handleSelectArticle}
            onSelectProduct={handleSelectProduct}
            onOpenAffiliate={handleOpenAffiliate}
            onToggleCompare={handleToggleCompare}
            comparedProductIds={comparedProductIds}
          />
        )}

        {currentView === 'face-care' && (
          <CategoryView
            category={faceCareCategoryMeta}
            articles={ARTICLES.filter(a => a.category === 'Face Care' || a.subcategory.includes('Face Care'))}
            products={PRODUCTS.filter(p => p.category === 'Moisturizer' || p.category === 'Barrier Balm' || p.category === 'Sunscreen')}
            onSelectArticle={handleSelectArticle}
            onSelectProduct={handleSelectProduct}
            onOpenAffiliate={handleOpenAffiliate}
            onToggleCompare={handleToggleCompare}
            comparedProductIds={comparedProductIds}
          />
        )}

        {currentView === 'guides' && (
          <div className="space-y-8 pb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F3EFE6] text-[#874C42] border border-[#E8E5DF] mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                MAGI Editorial Archives
              </div>
              <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-[#171513] tracking-tight">
                Skincare Science &amp; Formulation Guides
              </h1>
              <p className="text-sm sm:text-base text-[#736F6A] mt-2 leading-relaxed">
                Peer-reviewed investigations into active percentages, skin biology, lipid restoration, and cosmetic chemist analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ARTICLES.map((art) => (
                <div
                  key={art.id}
                  onClick={() => handleSelectArticle(art)}
                  className="bg-white border border-[#E8E5DF] rounded-2xl overflow-hidden hover:border-[#171513] transition-all cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="aspect-16/9 bg-[#F3EFE6] overflow-hidden border-b border-[#E8E5DF]">
                      <img
                        src={art.featuredImageUrl}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-[#736F6A] mb-2">
                        <span className="text-[11px] uppercase font-semibold text-[#874C42]">
                          {art.subcategory}
                        </span>
                        <span>{art.readingTimeMin} min read</span>
                      </div>
                      <h3 className="font-editorial text-2xl font-normal text-[#171513] group-hover:text-[#874C42] transition-colors leading-snug mb-3">
                        {art.title}
                      </h3>
                      <p className="text-xs text-[#736F6A] line-clamp-3 leading-relaxed mb-4">
                        {art.subtitle}
                      </p>
                      <div className="p-3 bg-[#FAF9F5] border border-[#E8E5DF] rounded-lg text-xs text-[#2A2724] line-clamp-2">
                        <strong>Takeaway: </strong>{art.answerFirstSummary}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex items-center justify-between text-xs text-[#736F6A] border-t border-transparent">
                    <span className="flex items-center gap-1.5 font-medium text-[#171513]">
                      By {art.author.name}
                    </span>
                    <span className="font-semibold text-[#171513] group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[#874C42]">
                      Read Investigation &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Floating Comparison Drawer (when items selected) */}
      <ComparisonDrawer
        selectedProducts={selectedComparedProducts}
        onRemove={handleRemoveCompare}
        onClear={handleClearCompare}
        onViewComparison={() => setIsFullComparisonOpen(true)}
      />

      {/* Full Modal Comparison Matrix View */}
      {isFullComparisonOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setIsFullComparisonOpen(false)}
        >
          <div 
            className="w-full max-w-5xl bg-[#FAF9F5] border border-[#E8E5DF] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E5DF] mb-6">
              <div>
                <span className="text-xs uppercase font-semibold text-[#874C42]">Side-by-Side</span>
                <h3 className="font-editorial text-2xl text-[#171513]">
                  Formulation Comparison Matrix
                </h3>
              </div>
              <button
                onClick={() => setIsFullComparisonOpen(false)}
                className="p-1.5 text-[#736F6A] hover:text-[#171513] rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ComparisonTable
              products={selectedComparedProducts}
              onOpenAffiliate={handleOpenAffiliate}
              onRemoveProduct={handleRemoveCompare}
            />
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES}
        products={PRODUCTS}
        onSelectArticle={handleSelectArticle}
        onSelectProduct={handleSelectProduct}
        onSelectConcern={(concern: SkinConcern) => {
          handleNavigate('products');
        }}
      />

      {/* Affiliate Outbound Transparency Modal */}
      <AffiliateDisclaimerModal
        product={affiliateProduct}
        isOpen={isAffiliateModalOpen}
        onClose={() => {
          setIsAffiliateModalOpen(false);
          setAffiliateProduct(null);
        }}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

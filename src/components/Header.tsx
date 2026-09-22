import React, { useState } from 'react';
import { Search, Menu, X, Columns3, ShieldCheck } from 'lucide-react';

interface Props {
  currentView: string;
  onNavigate: (view: string, params?: any) => void;
  onOpenSearch: () => void;
  comparisonCount: number;
  onOpenComparisonModal: () => void;
}

export const Header: React.FC<Props> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  comparisonCount,
  onOpenComparisonModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'face-care', label: 'Face Care' },
    { id: 'guides', label: 'Editorial Guides' },
    { id: 'products', label: 'Product Discovery' },
    { id: 'standards', label: 'Editorial Standards' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E8E5DF] transition-all">
      {/* Top Editorial Notice Bar */}
      <div className="bg-[#171513] text-[#FAF9F5] text-[11px] py-1 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#874C42]"></span>
        <span>Independent Skincare Research & Formulation Evaluations</span>
        <span className="text-[#E8E5DF]/50 hidden sm:inline">•</span>
        <span className="text-[#E8E5DF]/80 hidden sm:inline">Zero Sponsored Bias</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Logo */}
          <div 
            onClick={() => onNavigate('home')}
            className="cursor-pointer flex flex-col justify-center select-none"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-editorial text-2xl sm:text-3xl tracking-tight text-[#171513] font-normal">
                MAGI
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#874C42] border-l border-[#E8E5DF] pl-2 hidden xs:inline">
                Beauty &amp; Skincare
              </span>
            </div>
            <span className="text-[10px] text-[#736F6A] tracking-wider uppercase font-medium">
              Editorial Science Platform
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => onNavigate(link.id)}
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors relative py-1 ${
                    isActive 
                      ? 'text-[#171513]' 
                      : 'text-[#736F6A] hover:text-[#171513]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#171513] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Search, Comparison Counter, Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              id="header-search-button"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#736F6A] bg-white hover:text-[#171513] border border-[#E8E5DF] rounded-lg transition-colors shadow-2xs"
              title="Search articles and products (Press /)"
            >
              <Search className="w-3.5 h-3.5 text-[#171513]" />
              <span className="hidden sm:inline">Search Guide...</span>
              <kbd className="hidden md:inline-block text-[10px] bg-[#FAF9F5] border border-[#E8E5DF] px-1.5 rounded text-[#736F6A]">
                /
              </kbd>
            </button>

            {/* Comparison Counter */}
            {comparisonCount > 0 && (
              <button
                id="header-comparison-badge"
                onClick={onOpenComparisonModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171513] text-[#FAF9F5] text-xs font-medium rounded-lg hover:bg-[#2A2724] transition-colors shadow-xs"
              >
                <Columns3 className="w-3.5 h-3.5 text-[#E8E5DF]" />
                <span className="hidden sm:inline">Compare</span>
                <span className="px-1.5 py-0.2 bg-[#874C42] rounded-full text-[10px]">
                  {comparisonCount}
                </span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2A2724] hover:text-[#171513] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#FAF9F5] border-b border-[#E8E5DF] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-lg"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentView === link.id
                  ? 'bg-white text-[#171513] font-semibold border border-[#E8E5DF]'
                  : 'text-[#736F6A] hover:bg-[#F3EFE6] hover:text-[#171513]'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-3 border-t border-[#E8E5DF] flex items-center justify-between text-xs text-[#736F6A]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#874C42]" />
              MAGI Editorial Standard
            </span>
            <button
              onClick={() => {
                onNavigate('standards');
                setMobileMenuOpen(false);
              }}
              className="text-[#171513] underline font-medium"
            >
              Our Charter
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

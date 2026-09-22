import React from 'react';
import { ExternalLink, ShieldCheck, X } from 'lucide-react';
import { Product } from '../types';

interface Props {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const AffiliateDisclaimerModal: React.FC<Props> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const handleProceed = () => {
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      id="affiliate-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div 
        id="affiliate-modal-dialog" 
        className="w-full max-w-lg bg-[#FAF9F5] border border-[#E8E5DF] rounded-xl shadow-2xl p-6 sm:p-8 text-[#171513] relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-affiliate-modal-button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#736F6A] hover:text-[#171513] transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide uppercase bg-[#F3EFE6] text-[#874C42] border border-[#E8E5DF]">
            <ShieldCheck className="w-3.5 h-3.5" />
            MAGI Transparency Standard
          </span>
        </div>

        <h3 className="font-editorial text-2xl font-normal text-[#171513] mb-2">
          Affiliate & Retailer Transparency Notice
        </h3>

        <div className="text-sm text-[#736F6A] space-y-3 leading-relaxed mb-6">
          <p>
            You are navigating to an external verified retailer: <strong className="text-[#171513] font-medium">{product.retailerName}</strong> for <strong className="text-[#171513] font-medium">{product.brand} {product.name}</strong>.
          </p>
          <div className="p-3.5 bg-white border border-[#E8E5DF] rounded-lg text-xs leading-relaxed text-[#2A2724] space-y-2">
            <p>
              <strong>Editorial Independence:</strong> MAGI receives a modest affiliate commission (via networks like Accesstrade or direct retail partnerships) if you choose to purchase through this link, at no additional cost to you.
            </p>
            <p>
              <strong>Our Commitment:</strong> Commercial links never dictate which products we test or recommend. Every evaluation reflects our independent formulation analysis, ingredient vetting, and real-world trials.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2 border-t border-[#E8E5DF]">
          <button
            id="cancel-affiliate-navigation-button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-[#736F6A] hover:text-[#171513] transition-colors"
          >
            Stay on MAGI
          </button>
          <button
            id="confirm-affiliate-navigation-button"
            onClick={handleProceed}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium bg-[#171513] text-[#FAF9F5] hover:bg-[#2A2724] rounded-lg transition-colors shadow-xs"
          >
            Continue to {product.retailerName}
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

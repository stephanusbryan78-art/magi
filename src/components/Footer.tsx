import React, { useState } from 'react';
import { ShieldCheck, FileText, ExternalLink, Code2 } from 'lucide-react';

interface Props {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  const [showSitemapModal, setShowSitemapModal] = useState(false);

  return (
    <footer className="bg-[#171513] text-[#FAF9F5] border-t border-[#2A2724] mt-24">
      {/* Editorial Mission Strip */}
      <div className="border-b border-[#2A2724] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#874C42] font-semibold">
              01 • Independent Evaluation
            </span>
            <h4 className="font-editorial text-xl font-normal text-[#FAF9F5]">
              Formulation Over Hype
            </h4>
            <p className="text-xs text-[#E8E5DF]/70 leading-relaxed">
              We deconstruct skincare ingredients, clinical evidence, and lipid biology to help you understand whether a product is genuinely worth your money.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#874C42] font-semibold">
              02 • Clear Distinction
            </span>
            <h4 className="font-editorial text-xl font-normal text-[#FAF9F5]">
              Fact vs. Recommendation
            </h4>
            <p className="text-xs text-[#E8E5DF]/70 leading-relaxed">
              Every claim on MAGI is tagged as scientific fact, editorial interpretation, or consumer evaluation. We avoid unsubstantiated superlatives.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#874C42] font-semibold">
              03 • Affiliate Transparency
            </span>
            <h4 className="font-editorial text-xl font-normal text-[#FAF9F5]">
              Commercial Independence
            </h4>
            <p className="text-xs text-[#E8E5DF]/70 leading-relaxed">
              We partner with verified retail platforms (such as Accesstrade networks). Affiliate relationships never dictate editorial selection or negative evaluations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-editorial text-2xl text-[#FAF9F5]">MAGI</span>
              <span className="text-[10px] text-[#874C42] uppercase tracking-widest font-semibold">
                Skincare Platform
              </span>
            </div>
            <p className="text-xs text-[#E8E5DF]/70 leading-relaxed">
              The digital home for modern beauty and skincare research. Helping young consumers make smarter, research-backed product decisions.
            </p>
            <div className="text-xs text-[#E8E5DF]/50">
              Published from New York &amp; Singapore.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-xs uppercase tracking-wider font-semibold text-[#FAF9F5] mb-3">
              Editorial Verticals
            </h5>
            <ul className="space-y-2 text-xs text-[#E8E5DF]/80">
              <li>
                <button onClick={() => onNavigate('skincare')} className="hover:text-white transition-colors">
                  Skincare Science &amp; Actives
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('face-care')} className="hover:text-white transition-colors">
                  Face Care &amp; Barrier Creams
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('guides')} className="hover:text-white transition-colors">
                  Investigative Guides &amp; How-To
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">
                  Product Comparison Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* Standards & Transparency */}
          <div>
            <h5 className="text-xs uppercase tracking-wider font-semibold text-[#FAF9F5] mb-3">
              Governance &amp; Trust
            </h5>
            <ul className="space-y-2 text-xs text-[#E8E5DF]/80">
              <li>
                <button onClick={() => onNavigate('standards')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#874C42]" />
                  Editorial Standards Charter
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('standards')} className="hover:text-white transition-colors">
                  Health &amp; Skincare Claim Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('standards')} className="hover:text-white transition-colors">
                  Affiliate Disclosure (Accesstrade)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowSitemapModal(true)} 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#874C42]" />
                  SEO Sitemap &amp; Robots.txt
                </button>
              </li>
            </ul>
          </div>

          {/* Health Disclaimer */}
          <div>
            <h5 className="text-xs uppercase tracking-wider font-semibold text-[#FAF9F5] mb-3">
              Cosmetic Health Disclaimer
            </h5>
            <p className="text-[11px] text-[#E8E5DF]/60 leading-relaxed">
              MAGI is an independent editorial platform dedicated to cosmetic formulation research and product discovery. Content published here is for informational and educational purposes only and does not substitute for medical, dermatological, or clinical diagnosis.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#2A2724] flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8E5DF]/50 gap-4">
          <p>© {new Date().getFullYear()} MAGI Beauty &amp; Skincare. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('standards')} className="hover:text-[#FAF9F5]">
              Editorial Policy
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('standards')} className="hover:text-[#FAF9F5]">
              Privacy &amp; Affiliate Terms
            </button>
            <span>•</span>
            <button onClick={() => setShowSitemapModal(true)} className="hover:text-[#FAF9F5]">
              XML Sitemap
            </button>
          </div>
        </div>
      </div>

      {/* SEO Sitemap & Technical Modal */}
      {showSitemapModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          onClick={() => setShowSitemapModal(false)}
        >
          <div 
            className="w-full max-w-xl bg-[#FAF9F5] text-[#171513] border border-[#E8E5DF] rounded-xl p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E5DF]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#874C42]" />
                <h4 className="font-editorial text-lg text-[#171513]">Technical SEO Index &amp; Structure</h4>
              </div>
              <button 
                onClick={() => setShowSitemapModal(false)}
                className="text-xs text-[#736F6A] hover:text-black font-semibold"
              >
                Close
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs">
              <div>
                <span className="font-semibold block text-[#171513] mb-1">Robots.txt Specification:</span>
                <pre className="p-3 bg-[#F3EFE6] rounded border border-[#E8E5DF] font-mono text-[11px] overflow-x-auto text-[#2A2724]">
{`User-agent: *
Allow: /
Allow: /guides/
Allow: /products/
Allow: /skincare/
Allow: /face-care/
Disallow: /api/
Sitemap: https://magibeauty.com/sitemap.xml`}
                </pre>
              </div>

              <div>
                <span className="font-semibold block text-[#171513] mb-1">Indexable Canonical Routes (XML Sitemap):</span>
                <ul className="space-y-1 font-mono text-[11px] text-[#736F6A] bg-white p-3 rounded border border-[#E8E5DF]">
                  <li>https://magibeauty.com/</li>
                  <li>https://magibeauty.com/skincare</li>
                  <li>https://magibeauty.com/face-care</li>
                  <li>https://magibeauty.com/guides</li>
                  <li>https://magibeauty.com/guides/the-barrier-repair-matrix-ceramide-science</li>
                  <li>https://magibeauty.com/guides/best-face-moisturizers-for-oily-combination-skin</li>
                  <li>https://magibeauty.com/guides/what-does-niacinamide-do-percentages-guide</li>
                  <li>https://magibeauty.com/guides/centella-asiatica-cica-skincare-redness-analysis</li>
                  <li>https://magibeauty.com/products</li>
                  <li>https://magibeauty.com/standards</li>
                </ul>
              </div>

              <p className="text-[11px] text-[#736F6A]">
                Structured data includes Schema.org <code className="bg-[#E8E5DF] px-1 rounded">Organization</code>, <code className="bg-[#E8E5DF] px-1 rounded">Article</code>, <code className="bg-[#E8E5DF] px-1 rounded">Product</code>, and <code className="bg-[#E8E5DF] px-1 rounded">FAQPage</code> schemas for seamless search engine and generative AI (GEO) ingestion.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

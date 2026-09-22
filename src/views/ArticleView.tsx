import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  BookOpen, 
  ChevronRight, 
  ExternalLink,
  Share2,
  CheckCircle2,
  List,
  Sparkles,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { Article, Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { ComparisonTable } from '../components/ComparisonTable';

interface Props {
  article: Article;
  allProducts: Product[];
  allArticles: Article[];
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  onOpenAffiliate: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  comparedProductIds: string[];
}

export const ArticleView: React.FC<Props> = ({
  article,
  allProducts,
  allArticles,
  onBack,
  onSelectArticle,
  onOpenAffiliate,
  onToggleCompare,
  comparedProductIds
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Products referenced in article
  const comparisonProducts = (article.comparisonProductIds || [])
    .map(id => allProducts.find(p => p.id === id))
    .filter((p): p is Product => p !== undefined);

  // Related articles
  const relatedArticles = article.relatedArticleIds
    .map(id => allArticles.find(a => a.id === id))
    .filter((a): a is Article => a !== undefined);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <article className="max-w-4xl mx-auto pb-16 pt-4">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E8E5DF] text-xs">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[#736F6A] hover:text-[#171513] transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Articles</span>
        </button>

        <div className="flex items-center gap-2 text-[#736F6A]">
          <span className="hidden sm:inline">Share Analysis:</span>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#E8E5DF] rounded-md hover:bg-[#FAF9F5] text-[#171513] transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied!' : 'Copy Citation Link'}</span>
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-[#F3EFE6] text-[#874C42] border border-[#E8E5DF]">
            {article.subcategory}
          </span>
          <span className="text-[#736F6A] text-xs flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readingTimeMin} min read
          </span>
        </div>

        <h1 className="font-editorial text-3xl sm:text-5xl lg:text-5xl font-normal text-[#171513] leading-[1.15] tracking-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-[#736F6A] leading-relaxed">
          {article.subtitle}
        </p>

        {/* Author & Verification Bylines */}
        <div className="pt-4 border-t border-[#E8E5DF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatarUrl}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover border border-[#E8E5DF]"
            />
            <div>
              <div className="text-xs font-semibold text-[#171513] flex items-center gap-1.5">
                <span>{article.author.name}</span>
                <span className="text-[10px] text-[#736F6A] font-normal">• {article.author.role}</span>
              </div>
              <div className="text-[11px] text-[#736F6A]">
                {article.author.credentials}
              </div>
            </div>
          </div>

          <div className="text-xs text-[#736F6A] space-y-0.5 sm:text-right">
            <div className="flex items-center sm:justify-end gap-1 text-[#4E6B56] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Fact-Checked</span>
            </div>
            <div>
              Published: {article.publishedAt} • Updated: {article.updatedAt}
            </div>
          </div>
        </div>
      </header>

      {/* Featured Header Visual */}
      <div className="aspect-21/9 w-full rounded-2xl overflow-hidden bg-[#F3EFE6] border border-[#E8E5DF] mb-8">
        <img
          src={article.featuredImageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* GEO Requirement: Answer-First / Executive Summary Box */}
      <section 
        id="geo-answer-first"
        className="bg-white border-2 border-[#171513] rounded-2xl p-6 sm:p-8 mb-10 shadow-xs"
      >
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#874C42]" />
          <h2 className="text-xs uppercase tracking-widest font-bold text-[#171513]">
            MAGI Executive Answer (GEO &amp; Clinical Takeaway)
          </h2>
        </div>
        <p className="font-editorial text-lg sm:text-xl text-[#171513] leading-relaxed mb-4">
          {article.answerFirstSummary}
        </p>

        <div className="pt-4 border-t border-[#E8E5DF] space-y-2">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#736F6A] block">
            Core Scientific Takeaways:
          </span>
          <ul className="space-y-1.5 text-xs text-[#2A2724]">
            {article.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#874C42] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Table of Contents */}
      <nav className="p-5 bg-[#F3EFE6] border border-[#E8E5DF] rounded-xl mb-10 text-xs">
        <div className="flex items-center gap-2 text-[#171513] font-semibold uppercase tracking-wider mb-2">
          <List className="w-4 h-4 text-[#874C42]" />
          <span>In This Investigation</span>
        </div>
        <ol className="space-y-1.5 text-[#2A2724]">
          {article.sections.map((sec, idx) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className="hover:text-[#874C42] transition-colors flex items-center gap-1.5"
              >
                <span className="text-[#736F6A] font-mono">0{idx + 1}.</span>
                <span>{sec.heading}</span>
              </a>
            </li>
          ))}
          {comparisonProducts.length > 0 && (
            <li>
              <a href="#comparison-matrix" className="hover:text-[#874C42] transition-colors flex items-center gap-1.5">
                <span className="text-[#736F6A] font-mono">0{article.sections.length + 1}.</span>
                <span>Side-by-Side Formulation Comparison Matrix</span>
              </a>
            </li>
          )}
          {article.routineTips && (
            <li>
              <a href="#routine-protocol" className="hover:text-[#874C42] transition-colors flex items-center gap-1.5">
                <span className="text-[#736F6A] font-mono">0{article.sections.length + 2}.</span>
                <span>Structured AM/PM Routine Protocol</span>
              </a>
            </li>
          )}
          <li>
            <a href="#frequently-asked-questions" className="hover:text-[#874C42] transition-colors flex items-center gap-1.5">
              <span className="text-[#736F6A] font-mono">0{article.sections.length + 3}.</span>
              <span>Scientific FAQ &amp; Troubleshooting</span>
            </a>
          </li>
        </ol>
      </nav>

      {/* Core Article Content Sections */}
      <div className="space-y-12 mb-14 text-sm sm:text-base leading-relaxed text-[#2A2724]">
        {article.sections.map((sec) => {
          const recProducts = (sec.recommendedProductIds || [])
            .map(id => allProducts.find(p => p.id === id))
            .filter((p): p is Product => p !== undefined);

          return (
            <section key={sec.id} id={sec.id} className="scroll-mt-24 space-y-4">
              <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#171513] pt-4 border-t border-[#E8E5DF]">
                {sec.heading}
              </h2>

              {sec.content.map((p, pIdx) => (
                <p key={pIdx} className="text-[#2A2724] leading-relaxed">
                  {p}
                </p>
              ))}

              {sec.highlightNote && (
                <div className="p-4 bg-[#FAF9F5] border-l-4 border-[#874C42] rounded-r-lg text-xs sm:text-sm text-[#171513] italic my-4">
                  {sec.highlightNote}
                </div>
              )}

              {/* In-Article Embedded Product Recommendations */}
              {recProducts.length > 0 && (
                <div className="mt-8 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#874C42] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Evaluated Topicals for this Step
                    </span>
                    <span className="text-xs text-[#736F6A]">
                      Independent Testing Vetted
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recProducts.map((prod) => (
                      <ProductCard
                        key={prod.id}
                        product={prod}
                        onOpenAffiliate={onOpenAffiliate}
                        isCompared={comparedProductIds.includes(prod.id)}
                        onToggleCompare={onToggleCompare}
                        showFullDetails={true}
                      />
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Embedded Product Comparison Matrix */}
      {comparisonProducts.length > 0 && (
        <section id="comparison-matrix" className="mb-14 scroll-mt-24">
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#874C42]">
              Side-by-Side Evaluation
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#171513]">
              Formulation Comparison Matrix
            </h3>
            <p className="text-xs sm:text-sm text-[#736F6A] mt-1">
              Comparing active lipid density, texture slip, and limitations for products evaluated in this guide.
            </p>
          </div>

          <ComparisonTable
            products={comparisonProducts}
            onOpenAffiliate={onOpenAffiliate}
          />
        </section>
      )}

      {/* Structured AM/PM Routine Protocol */}
      {article.routineTips && (
        <section id="routine-protocol" className="mb-14 scroll-mt-24 bg-white border border-[#E8E5DF] rounded-2xl p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#874C42]">
              Practical Application
            </span>
            <h3 className="font-editorial text-2xl text-[#171513]">
              The Recommended Application Sequence
            </h3>
            <p className="text-xs text-[#736F6A] mt-1">
              Timing and layering order to maximize penetration without causing pilling or irritation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AM */}
            <div className="p-4 bg-[#FAF9F5] border border-[#E8E5DF] rounded-xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#171513] block border-b border-[#E8E5DF] pb-2">
                Morning Routine (AM Protocol)
              </span>
              <ol className="space-y-2 text-xs text-[#2A2724]">
                {article.routineTips.am.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono text-[#874C42] font-semibold">0{i + 1}.</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* PM */}
            <div className="p-4 bg-[#FAF9F5] border border-[#E8E5DF] rounded-xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#171513] block border-b border-[#E8E5DF] pb-2">
                Evening Routine (PM Protocol)
              </span>
              <ol className="space-y-2 text-xs text-[#2A2724]">
                {article.routineTips.pm.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono text-[#874C42] font-semibold">0{i + 1}.</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* Frequently Asked Questions (GEO extraction ready) */}
      <section id="frequently-asked-questions" className="mb-14 scroll-mt-24">
        <div className="mb-4">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#874C42] flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Reader Inquiries
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#171513]">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {article.faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-[#E8E5DF] rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-editorial text-base sm:text-lg text-[#171513] font-normal hover:text-[#874C42]"
                >
                  <span>{faq.question}</span>
                  <ChevronRight className={`w-4 h-4 text-[#736F6A] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-90 text-[#171513]' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-[#736F6A] leading-relaxed border-t border-[#FAF9F5] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Scientific Literature References */}
      <section className="mb-14 p-6 bg-[#FAF9F5] border border-[#E8E5DF] rounded-xl">
        <div className="flex items-center gap-2 mb-3">
          <FileCheck className="w-4 h-4 text-[#874C42]" />
          <h4 className="text-xs uppercase tracking-wider font-bold text-[#171513]">
            Scientific Sources &amp; Literature Cited
          </h4>
        </div>
        <p className="text-xs text-[#736F6A] mb-3">
          In adherence to MAGI’s Editorial Trust Charter, all medical and biochemical claims are grounded in peer-reviewed clinical studies.
        </p>
        <ul className="space-y-2 text-xs text-[#2A2724]">
          {article.references.map((ref, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="font-mono text-[#736F6A]">[{idx + 1}]</span>
              <div>
                <span className="font-medium text-[#171513]">&ldquo;{ref.title}&rdquo;</span> — <em>{ref.publication}</em> ({ref.year}).
                {ref.doi && <span className="text-[#736F6A] block text-[11px]">DOI: {ref.doi}</span>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Related Topical Articles */}
      {relatedArticles.length > 0 && (
        <section className="pt-8 border-t border-[#E8E5DF]">
          <h3 className="font-editorial text-2xl text-[#171513] mb-6">
            Continue Reading from this Topic Cluster
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectArticle(rel);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-5 bg-white border border-[#E8E5DF] hover:border-[#171513] rounded-xl cursor-pointer transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#874C42] block mb-1">
                    {rel.subcategory}
                  </span>
                  <h4 className="font-editorial text-lg text-[#171513] group-hover:text-[#874C42] transition-colors leading-snug mb-2 font-normal">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#736F6A] line-clamp-2 leading-relaxed">
                    {rel.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E5DF] flex items-center justify-between text-xs text-[#171513] font-medium">
                  <span>{rel.readingTimeMin} min read</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#874C42]">
                    Read Investigation &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

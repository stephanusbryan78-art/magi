import React from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, FileText, ExternalLink, HeartHandshake } from 'lucide-react';

export const EditorialStandardsView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-12 pb-16 pt-4">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F3EFE6] text-[#874C42] border border-[#E8E5DF]">
          <ShieldCheck className="w-3.5 h-3.5" />
          MAGI Editorial Trust Charter
        </div>

        <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-[#171513] tracking-tight leading-[1.1]">
          Our Standards, Methodology &amp; Disclosures
        </h1>

        <p className="text-base sm:text-lg text-[#736F6A] leading-relaxed">
          The foundation of MAGI is reader trust. Here is exactly how we evaluate skincare products, cite scientific literature, and monetize through affiliate partnerships without compromising editorial objectivity.
        </p>
      </div>

      {/* Section 1: Evolution of MAGI */}
      <section className="bg-white border border-[#E8E5DF] rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="font-editorial text-2xl font-normal text-[#171513]">
          1. The Rebuild: Why MAGI Evolved
        </h2>
        <p className="text-sm text-[#2A2724] leading-relaxed">
          MAGI originally launched as an artisanal fragrance brand centered around personality and scent identity. However, as beauty commerce transformed, young consumers faced a critical vacuum in the digital skincare space: an overwhelming flood of sponsored social content, influencer hype, and misleading percentage claims, paired with virtually zero independent, formulation-level editorial critique.
        </p>
        <p className="text-sm text-[#2A2724] leading-relaxed">
          MAGI 2.0 was rebuilt from the ground up as a dedicated beauty and skincare editorial platform. Our core objective is simple: <strong>to help you understand whether a product is actually worth your money before you purchase it.</strong>
        </p>
      </section>

      {/* Section 2: The 4-Tier Information Architecture */}
      <section className="space-y-6">
        <div>
          <h2 className="font-editorial text-2xl font-normal text-[#171513]">
            2. The 4-Tier Information Architecture
          </h2>
          <p className="text-xs sm:text-sm text-[#736F6A] mt-1">
            Every piece of content on MAGI strictly delineates between four distinct categories:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 bg-white border border-[#E8E5DF] rounded-xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4E6B56]"></span>
              <h3 className="font-editorial text-lg text-[#171513]">Scientific Fact</h3>
            </div>
            <p className="text-xs text-[#736F6A] leading-relaxed">
              Biochemical mechanisms and clinical trial outcomes sourced exclusively from peer-reviewed dermatology publications (such as the <em>Journal of Investigative Dermatology</em> and <em>British Journal of Dermatology</em>).
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E8E5DF] rounded-xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#874C42]"></span>
              <h3 className="font-editorial text-lg text-[#171513]">Editorial Interpretation</h3>
            </div>
            <p className="text-xs text-[#736F6A] leading-relaxed">
              Our formulation chemists and editors analyze cosmetic vehicle textures, emulsion stability, ingredient delivery mechanisms, and cosmetic elegance under real-world conditions.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E8E5DF] rounded-xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2A2724]"></span>
              <h3 className="font-editorial text-lg text-[#171513]">Editorial Recommendation</h3>
            </div>
            <p className="text-xs text-[#736F6A] leading-relaxed">
              Our honest verdict on who a product is suited for, its physiological skin fit, and just as critically, its limitations and why certain skin types should avoid it.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E8E5DF] rounded-xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B45309]"></span>
              <h3 className="font-editorial text-lg text-[#171513]">Affiliate Content</h3>
            </div>
            <p className="text-xs text-[#736F6A] leading-relaxed">
              Transparent commercial outbound links that direct users to verified retailer partners. These links are explicitly disclosed and never modify our testing conclusions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Health & Skincare Claim Policy */}
      <section className="bg-white border border-[#E8E5DF] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-[#874C42]">
          <AlertTriangle className="w-5 h-5" />
          <h2 className="font-editorial text-2xl font-normal text-[#171513]">
            3. Health &amp; Skincare Claim Policy
          </h2>
        </div>

        <p className="text-sm text-[#2A2724] leading-relaxed">
          MAGI is a cosmetic research and consumer discovery platform, not a medical clinic or healthcare provider. We abide by strict cosmetic regulatory and ethical guardrails:
        </p>

        <ul className="space-y-2.5 text-xs text-[#2A2724]">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4E6B56] shrink-0 mt-0.5" />
            <span><strong>No Medical Diagnosis:</strong> We do not diagnose cutaneous diseases, prescribe pharmaceutical compounds, or replace the clinical guidance of a board-certified dermatologist.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4E6B56] shrink-0 mt-0.5" />
            <span><strong>No Unsupported &ldquo;Cure&rdquo; Claims:</strong> Cosmetic topicals cannot legally or biologically claim to &ldquo;cure&rdquo; conditions like rosacea, eczema, or cystic acne. We describe cosmetic modulation of barrier comfort and surface texture.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4E6B56] shrink-0 mt-0.5" />
            <span><strong>No Fabricated Expert Endorsements:</strong> We never generate fictitious doctor quotes, fake 5-star consumer tallies, or manufactured awards. Every author on MAGI writes under verified professional credentials.</span>
          </li>
        </ul>
      </section>

      {/* Section 4: Affiliate Monetization (Accesstrade / Retail Networks) */}
      <section className="bg-[#FAF9F5] border border-[#E8E5DF] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-[#171513]">
          <HeartHandshake className="w-5 h-5 text-[#874C42]" />
          <h2 className="font-editorial text-2xl font-normal text-[#171513]">
            4. Affiliate Monetization &amp; Retailer Relationships
          </h2>
        </div>

        <p className="text-sm text-[#2A2724] leading-relaxed">
          To maintain financial viability and provide free access to all our in-depth research, MAGI participates in affiliate marketing networks, including platforms such as <strong>Accesstrade</strong> and verified brand retailer affiliate programs.
        </p>

        <div className="p-4 bg-white border border-[#E8E5DF] rounded-xl text-xs space-y-2 text-[#736F6A]">
          <p>
            When you click a link on MAGI to check product availability or make a purchase at a verified merchant (such as Sephora, Ulta, Cult Beauty, or official brand storefronts), we may earn a modest referral commission at zero extra cost to you.
          </p>
          <p className="font-medium text-[#171513]">
            Our Core Guarantee: Brands cannot pay to change our evaluation, purchase top placement on comparison matrices, or remove disclosed product limitations. If a product pills, stings, or underperforms its price point, we say so plainly.
          </p>
        </div>
      </section>
    </div>
  );
};

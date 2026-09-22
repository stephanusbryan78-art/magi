import React from 'react';
import { ExternalLink, Check, AlertCircle } from 'lucide-react';
import { Product } from '../types';

interface Props {
  products: Product[];
  onOpenAffiliate: (product: Product) => void;
  onRemoveProduct?: (productId: string) => void;
}

export const ComparisonTable: React.FC<Props> = ({
  products,
  onOpenAffiliate,
  onRemoveProduct
}) => {
  if (products.length === 0) {
    return (
      <div className="p-8 text-center bg-white border border-[#E8E5DF] rounded-xl text-[#736F6A]">
        Select at least 2 products using the &quot;Compare&quot; button to view an objective side-by-side formulation matrix.
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto border border-[#E8E5DF] rounded-xl bg-white shadow-xs">
      <table className="w-full text-left text-sm border-collapse min-w-[720px]">
        <thead>
          <tr className="bg-[#FAF9F5] border-b border-[#E8E5DF] text-[#736F6A] text-xs uppercase tracking-wider font-semibold">
            <th className="p-4 w-44">Parameter</th>
            {products.map((p) => (
              <th key={p.id} className="p-4 min-w-[200px]">
                <div className="flex items-center justify-between">
                  <span className="text-[#874C42]">{p.brand}</span>
                  {onRemoveProduct && (
                    <button
                      onClick={() => onRemoveProduct(p.id)}
                      className="text-xs text-[#736F6A] hover:text-[#171513] normal-case"
                      title="Remove from comparison"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="font-editorial text-base text-[#171513] font-normal normal-case mt-0.5">
                  {p.name}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E5DF]">
          {/* Category & Step */}
          <tr>
            <td className="p-4 font-medium text-[#171513] bg-[#FAF9F5]/40 text-xs">
              Category & Routine
            </td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-xs text-[#2A2724]">
                <span className="font-medium text-[#171513]">{p.category}</span>
                <span className="block text-[#736F6A] mt-0.5">
                  Step: {p.routineStep} ({p.routineTiming})
                </span>
              </td>
            ))}
          </tr>

          {/* Best For / Skin Types */}
          <tr>
            <td className="p-4 font-medium text-[#171513] bg-[#FAF9F5]/40 text-xs">
              Best Target Skin
            </td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-xs">
                <div className="flex flex-wrap gap-1">
                  {p.targetSkinTypes.map((type) => (
                    <span key={type} className="px-1.5 py-0.5 bg-[#F3EFE6] text-[#2A2724] rounded text-[11px]">
                      {type}
                    </span>
                  ))}
                </div>
              </td>
            ))}
          </tr>

          {/* Key Actives */}
          <tr>
            <td className="p-4 font-medium text-[#171513] bg-[#FAF9F5]/40 text-xs">
              Key Actives & Science
            </td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-xs text-[#2A2724]">
                <ul className="space-y-1">
                  {p.keyActives.map((active, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="text-[#874C42]">•</span>
                      <span>{active}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* Texture & Feel */}
          <tr>
            <td className="p-4 font-medium text-[#171513] bg-[#FAF9F5]/40 text-xs">
              Texture & Scent
            </td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-xs text-[#2A2724]">
                <p className="mb-1">{p.texture}</p>
                <span className="inline-block px-1.5 py-0.5 text-[10px] bg-[#FAF9F5] border border-[#E8E5DF] rounded text-[#736F6A]">
                  {p.fragranceFree ? '100% Fragrance-Free' : 'Contains Natural Botanical Extracts'}
                </span>
              </td>
            ))}
          </tr>

          {/* Primary Solution */}
          <tr>
            <td className="p-4 font-medium text-[#171513] bg-[#FAF9F5]/40 text-xs">
              Core Formulation Role
            </td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-xs text-[#2A2724] leading-relaxed">
                {p.whatItSolves}
              </td>
            ))}
          </tr>

          {/* Editorial Strengths */}
          <tr>
            <td className="p-4 font-medium text-[#171513] bg-[#FAF9F5]/40 text-xs">
              Editorial Strengths
            </td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-xs text-[#2A2724]">
                <ul className="space-y-1">
                  {p.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-1 text-[#4E6B56]">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span className="text-[#2A2724]">{pro}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* Key Limitations */}
          <tr>
            <td className="p-4 font-medium text-[#171513] bg-[#FAF9F5]/40 text-xs">
              Watch-outs / Limitations
            </td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-xs text-[#736F6A]">
                <ul className="space-y-1">
                  {p.limitations.map((lim, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <AlertCircle className="w-3.5 h-3.5 text-[#874C42] shrink-0 mt-0.5" />
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* Pricing */}
          <tr>
            <td className="p-4 font-medium text-[#171513] bg-[#FAF9F5]/40 text-xs">
              Price & Size
            </td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-xs font-medium text-[#171513]">
                ${p.approxPriceUSD} USD <span className="text-[#736F6A] font-normal">({p.volume})</span>
              </td>
            ))}
          </tr>

          {/* Action Row */}
          <tr>
            <td className="p-4 bg-[#FAF9F5]/40"></td>
            {products.map((p) => (
              <td key={p.id} className="p-4">
                <button
                  id={`compare-row-cta-${p.id}`}
                  onClick={() => onOpenAffiliate(p)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#171513] hover:bg-[#2A2724] text-[#FAF9F5] text-xs font-medium rounded-lg transition-colors shadow-xs"
                >
                  <span>Check Availability</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

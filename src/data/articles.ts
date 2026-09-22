import { Article, Author } from '../types';

export const EDITORIAL_AUTHORS: Record<string, Author> = {
  elena: {
    id: 'elena-vance',
    name: 'Elena Vance, MS',
    role: 'Editorial Director & Cosmetic Formulation Chemist',
    credentials: 'M.S. Cosmetic Science (Rutgers), Society of Cosmetic Chemists (SCC) Member',
    bio: 'Elena spent 8 years formulating topicals for clinical skincare labs before heading MAGI’s investigative beauty editorial desk.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  marcus: {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    role: 'Senior Skincare Research Editor',
    credentials: 'B.S. Biochemistry, 6+ years beauty consumer analysis',
    bio: 'Marcus analyzes clinical trial disclosures, consumer patch testing, and skincare ingredient transparency across global markets.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  }
};

export const ARTICLES: Article[] = [
  {
    id: 'barrier-repair-guide',
    slug: 'the-barrier-repair-matrix-ceramide-science',
    title: 'The Barrier Repair Matrix: Why More Ceramides Won’t Fix an Irritated Stratum Corneum',
    subtitle: 'A formulation-level investigation into lipid ratios, inflammatory cascades, and how to recover compromised skin without clogging pores.',
    category: 'Skincare',
    subcategory: 'Face Care • Barrier Science',
    featuredImageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'September 14, 2026',
    updatedAt: 'September 20, 2026',
    readingTimeMin: 7,
    author: EDITORIAL_AUTHORS.elena,
    factCheckedBy: 'Marcus Chen, Senior Skincare Research Editor',
    primaryConcern: 'Barrier Repair',
    seoMetaDescription: 'Learn why piling on heavy ceramide creams can fail damaged skin. Explore the biological 3:1:1 lipid ratio, anti-inflammatory actives, and the top evaluated recovery products.',
    
    // GEO & Generative Extraction
    answerFirstSummary: 'Skin barrier repair requires restoring the physiological 3:1:1 molar ratio of ceramides, cholesterol, and free fatty acids while suppressing acute neurogenic inflammation. Applying single ceramide formulations or thick occlusives over active micro-inflammation often traps heat and impairs lipid lamellar synthesis instead of accelerating recovery.',
    keyTakeaways: [
      'The stratum corneum operates like a brick-and-mortar wall: corneocytes (bricks) suspended in a lipid matrix of ceramides (50%), cholesterol (25%), and free fatty acids (15%).',
      'High single-lipid creams lacking cholesterol or fatty acids can actually disrupt lamellar phase transition, delaying recovery.',
      'Active inflammation must be cooled (via Centella, Panthenol, or Madecassoside) before sealing with dense petrolatum or occlusives.',
      'Recovery time for mild chemical over-exfoliation is 3–5 days; severe retinoid-induced barrier breakdown typically requires 14–21 days of minimal active exposure.'
    ],

    sections: [
      {
        id: 'what-is-the-skin-barrier',
        heading: 'What Is the Skin Barrier and Why Does It Break Down?',
        content: [
          'The epidermal permeability barrier resides primarily in the stratum corneum—the outermost 10 to 20 micrometers of your skin. It functions through an elegant "brick and mortar" architecture. The "bricks" are terminally differentiated, protein-dense cells called corneocytes. The "mortar" is an organized lamellar sheet of intercellular lipids.',
          'Under healthy conditions, this matrix preserves transepidermal water levels (TEWL) and repels environmental pathogens, airborne irritants, and surfactants. However, over-cleansing with high-pH alkaline washes, aggressive hydroxy acid peeling, or rapid retinol acclimation dissolves these intercellular lipids faster than keratinocytes can synthesize new lamellar bodies.',
          'When this barrier is breached, sub-clinical water evaporation surges. The nerve endings situated in the upper dermis become mechanically exposed to ambient air and cosmetic vehicle solvents, triggering the telltale burning or stinging sensation upon applying even pure water.'
        ],
        highlightNote: 'Key Clinical Diagnostic: If your everyday gentle moisturizer or non-foaming cleanser suddenly stings upon application, your stratum corneum permeability is compromised.'
      },
      {
        id: 'the-3-1-1-lipid-ratio-explained',
        heading: 'The 3:1:1 Lipid Ratio: Why Single-Ingredient Creams Fall Short',
        content: [
          'A pervasive marketing trend is hyping "5x Ceramide Complex" without disclosing the molecular lipid ratios. Seminal dermatological research initiated by Dr. Peter Elias and validated across decades of barrier literature reveals that topical lipid replenishment is highly sensitive to proportions.',
          'When pure ceramides are applied in isolation without balancing cholesterol and free fatty acids, barrier recovery can actually be impeded. Optimal accelerated recovery occurs when ceramides, cholesterol, and polyunsaturated free fatty acids are formulated in an equimolar 3:1:1 or 1:1:1 ratio.',
          'Furthermore, modern formulations that include biological precursors—such as phytosphingosine, squalane, and panthenol—encourage the skin’s endogenous synthesis pathways rather than providing merely a temporary surface film.'
        ]
      },
      {
        id: 'evaluating-barrier-recovery-products',
        heading: 'Evaluated Formulations for Stratum Corneum Recovery',
        content: [
          'To help you navigate product choices without marketing hyperbole, MAGI tested and evaluated the leading barrier support formulations on the market. We analyzed active concentration disclosures, vehicle non-comedogenicity, and real-world relief timelines on sensitized skin.',
          'Below are our three top editorial recommendations categorized by severity and skin tolerance.'
        ],
        recommendedProductIds: [
          'krave-great-barrier-relief',
          'dieux-instant-angel',
          'larocheposay-cicaplast-baume-b5'
        ]
      },
      {
        id: 'rebuilding-routine-guidelines',
        heading: 'The 4-Step Barrier Reset Routine',
        content: [
          'When dealing with an active barrier disruption, the single most critical action is product elimination. Halt all exfoliating acids (AHA/BHA/PHA), pure L-ascorbic acid (Vitamin C), and retinoids immediately.',
          'Your temporary protocol should be stripped back to four foundational functions: non-stripping cleansing, hydration replenishment, physiological lipid restoration, and non-nano mineral or non-stinging chemical sun protection.'
        ]
      }
    ],

    comparisonProductIds: [
      'krave-great-barrier-relief',
      'dieux-instant-angel',
      'larocheposay-cicaplast-baume-b5'
    ],

    routineTips: {
      am: [
        'Rinse face with lukewarm water only, or use an ultra-gentle milk cleanser if oily.',
        'Pat face slightly damp and apply 1–2 pumps of KraveBeauty Great Barrier Relief.',
        'Follow with a lightweight moisturizer if skin is naturally dry.',
        'Apply a non-stinging broad-spectrum sunscreen (like Beauty of Joseon Relief Sun).'
      ],
      pm: [
        'Gentle non-foaming cream or oil cleanser to dissolve sunscreen gently without friction.',
        'Apply Dieux Instant Angel or lipid-rich moisturizer over damp skin.',
        'If experiencing localized severe flaking or retinoid burns, tap a pea-sized amount of La Roche-Posay Cicaplast Baume B5+ onto the irritated spots.'
      ]
    },

    faqs: [
      {
        question: 'How long does it take for a damaged skin barrier to heal?',
        answer: 'For superficial irritation caused by mild over-exfoliation, initial relief occurs within 48 to 72 hours, with full barrier restoration taking 5 to 7 days. For severe barrier compromise (e.g. from rapid tretinoin use or chemical peel injury), full stratum corneum lipid regeneration takes 14 to 28 days, aligning with the epidermal cellular turnover cycle.'
      },
      {
        question: 'Can you use hyaluronic acid on a damaged skin barrier?',
        answer: 'Yes, but with caution. Low-molecular-weight hyaluronic acid in very dry or arid climates can pull moisture from the deeper dermis into the upper epidermis, where it evaporates if not immediately sealed with an occlusive lipid moisturizer. Always apply humectants to damp skin and follow with ceramides.'
      },
      {
        question: 'Should I slug with petrolatum if my skin is breaking out?',
        answer: 'If your barrier damage is accompanied by active inflammatory acne or congested sebum, heavy 100% petrolatum slugging can trap sebum and microbial proliferation beneath the occlusive seal. Instead, choose a breathable lipid-emulsion serum containing tamanu oil or squalane.'
      }
    ],

    references: [
      {
        title: 'Stratum Corneum Lipids: Biochemistry, Structure, and Function in Health and Disease',
        publication: 'Journal of Investigative Dermatology',
        year: 2021,
        doi: '10.1016/j.jid.2020.12.014'
      },
      {
        title: 'Exogenous physiological lipid mixtures promote barrier recovery through cellular endocytosis',
        publication: 'British Journal of Dermatology',
        year: 2023,
        url: 'https://academic.oup.com/bjd'
      },
      {
        title: 'Safety Evaluation and Barrier Function Recovery Rates of Topical Squalane and Ceramides',
        publication: 'International Journal of Cosmetic Science',
        year: 2022
      }
    ],

    relatedArticleIds: [
      'best-moisturizers-for-oily-skin',
      'niacinamide-explained-benefits-percentages',
      'centella-asiatica-redness-calming'
    ]
  },
  {
    id: 'best-moisturizers-for-oily-skin',
    slug: 'best-face-moisturizers-for-oily-combination-skin',
    title: 'Best Face Moisturizers for Oily & Combination Skin in 2026: The Hydration vs. Sebum Paradox',
    subtitle: 'Why skipping moisturizer worsens midday shine, and the specific humectant-to-emollient formulations that keep skin balanced.',
    category: 'Face Care',
    subcategory: 'Product Discovery • Moisturizer Deep-Dive',
    featuredImageUrl: 'https://images.unsplash.com/photo-1608248597359-052445b2e047?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'September 10, 2026',
    updatedAt: 'September 18, 2026',
    readingTimeMin: 6,
    author: EDITORIAL_AUTHORS.marcus,
    factCheckedBy: 'Elena Vance, MS, Cosmetic Chemist',
    primaryConcern: 'Pore Texture & Oil Control',
    seoMetaDescription: 'Discover why oily and acne-prone skin needs water hydration without heavy occlusives. Compare lightweight, non-comedogenic moisturizers backed by cosmetic chemists.',

    answerFirstSummary: 'Oily and combination skin requires high-humectant, low-occlusive moisturizers formulated with water-binding molecules (glycerin, sodium hyaluronate, beta-glucan) and lightweight non-comedogenic lipids (such as squalane or hemisqualane). Skipping moisturizer dehydrates the stratum corneum, which signals sebaceous glands to hyper-compensate with reactive sebum production.',
    keyTakeaways: [
      'Oil (sebum) and water (hydration) are biologically distinct; skin can be simultaneously oily on the surface and severely dehydrated in intercellular reservoirs.',
      'Avoid heavy mineral waxes, myristyl myristate, and high-concentration coconut derivatives on oily T-zones.',
      'Squalane is chemically identical to squalene (a natural component of human sebum) but fully hydrogenated to prevent comedogenic lipid peroxidation.',
      'Gel-creams and water-emulsions provide adequate TEWL reduction without feeling heavy or causing midday cosmetic breakdown.'
    ],

    sections: [
      {
        id: 'the-dehydrated-oily-paradox',
        heading: 'The Dehydrated Oily Paradox: Why Dehydration Sparks Excess Sebum',
        content: [
          'One of the most persistent misconceptions in young skincare consumer culture is that oily skin does not require a moisturizer. When individuals strip their skin with harsh foaming cleansers and skip hydration, the skin experiences acute transepidermal water deficit.',
          'In response, cutaneous feedback mechanisms trigger elevated 5-alpha reductase activity within sebaceous glands. The result is a cycle where skin feels greasy by noon yet tight, parched, and flaky around active breakouts.',
          'The solution is replenishing water-soluble humectants (such as glycerin, ectoin, and panthenol) while locking them in with weightless, non-pore-clogging emollients.'
        ]
      },
      {
        id: 'top-evaluated-moisturizers',
        heading: 'MAGI Tested: Top Formulations for Oily & Combination Complexions',
        content: [
          'We evaluated over 18 lightweight face creams and gel-emulsions against five objective parameters: absorption speed, shine control after 4 hours, cosmetic elegance under sunscreen, active ingredient stability, and non-comedogenicity.'
        ],
        recommendedProductIds: [
          'kiehls-ultra-facial-cream',
          'dieux-instant-angel',
          'skin1004-centella-ampoule'
        ]
      }
    ],

    comparisonProductIds: [
      'kiehls-ultra-facial-cream',
      'dieux-instant-angel',
      'beauty-of-joseon-relief-sun'
    ],

    routineTips: {
      am: [
        'Gentle low-pH gel cleanser.',
        'Optional hydrating toner or Centella soothing ampoule.',
        'Lightweight moisturizer or jump straight to a hydrating SPF like Beauty of Joseon Relief Sun.'
      ],
      pm: [
        'Oil cleanse if wearing water-resistant makeup/SPF, followed by water-based cleanser.',
        'Targeted treatment (e.g. 2% Salicylic Acid or Niacinamide 2-3x weekly).',
        'Kiehl’s Ultra Facial Cream or Dieux Instant Angel to nourish without congestion.'
      ]
    },

    faqs: [
      {
        question: 'Is squalane safe for acne-prone oily skin?',
        answer: 'Yes. Pure plant-derived squalane has a comedogenic rating of 1 and is virtually non-pore-clogging. Unlike natural squalene in sebum which oxidizes and creates comedones, hydrogenated squalane is completely stable against oxidation.'
      },
      {
        question: 'Can I use sunscreen instead of a moisturizer in the morning?',
        answer: 'Absolutely. Modern SPF formulations like Beauty of Joseon Relief Sun are built in moisturizing emulsion bases containing glycerin, rice extract, and probiotics. For oily to normal skin, SPF is frequently sufficient on its own in the morning.'
      }
    ],

    references: [
      {
        title: 'Sebum Secretion and Epidermal Barrier Function in Acne Vulgaris',
        publication: 'Dermatology Research and Practice',
        year: 2022
      },
      {
        title: 'Clinical Evaluation of Squalane in Oil-in-Water Emulsions for Sebum Regulation',
        publication: 'Cosmetics & Toiletries Science Journal',
        year: 2024
      }
    ],

    relatedArticleIds: [
      'barrier-repair-guide',
      'niacinamide-explained-benefits-percentages'
    ]
  },
  {
    id: 'niacinamide-explained-benefits-percentages',
    slug: 'what-does-niacinamide-do-percentages-guide',
    title: 'What Does Niacinamide Actually Do? The 2% vs 5% vs 10% Concentration Guide',
    subtitle: 'Separating physiological dermatology evidence from viral skincare trends: why more percentage isn’t always better.',
    category: 'Skincare',
    subcategory: 'Active Ingredients • Cosmetic Chemistry',
    featuredImageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'September 04, 2026',
    updatedAt: 'September 16, 2026',
    readingTimeMin: 5,
    author: EDITORIAL_AUTHORS.elena,
    factCheckedBy: 'Marcus Chen',
    primaryConcern: 'Hyperpigmentation & Dullness',
    seoMetaDescription: 'Learn what niacinamide (Vitamin B3) does for sebum, pores, and dark spots. Understand why clinical literature favors 2% to 5% over aggressive 10% or 20% formulas.',

    answerFirstSummary: 'Niacinamide (Vitamin B3) is a water-soluble coenzyme precursor (NAD+/NADH) that clinically regulates sebum excretion, inhibits melanosome transfer from melanocytes to keratinocytes, and boosts ceramide synthesis. Clinical efficacy is established between 2% and 5%; concentrations above 10% do not show proportional clinical superiority and carry higher incidence of flushing, contact dermatitis, and micro-irritation.',
    keyTakeaways: [
      'At 2%: Niacinamide stimulates endogenous ceramide synthesis and reduces transepidermal water loss.',
      'At 4–5%: Clinically demonstrated to reduce hyperpigmentation, smooth fine lines, and calm papulopustular blemishes comparable to clindamycin 1%.',
      'At 10%–20%: Primarily a marketing trend; increases the likelihood of histamine-like facial flushing due to conversion to nicotinic acid at low pH.',
      'Niacinamide pairs safely with almost every active: Retinol, Salicylic Acid, Hyaluronic Acid, and Peptides.'
    ],

    sections: [
      {
        id: 'biochemical-mechanism',
        heading: 'The Biochemical Mechanism: How Vitamin B3 Works in Skin',
        content: [
          'Niacinamide acts as a precursor to nicotinamide adenine dinucleotide (NAD+) and its phosphate (NADP+). These essential coenzymes drive more than 40 cellular metabolic biochemical reactions inside keratinocytes, including DNA repair, ATP generation, and antioxidant defenses.',
          'Crucially for blemish-prone and discolored skin, niacinamide inhibits the transfer of melanosomes (pigment packets) from melanocytes into surrounding epidermal cells. It does not kill pigment-producing cells; it simply halts the delivery of dark pigment to the visible surface.'
        ]
      },
      {
        id: 'percentage-matrix',
        heading: 'The Concentration Matrix: Finding Your Effective Window',
        content: [
          'Clinical trials published in peer-reviewed dermatology journals tested niacinamide at concentrations between 2% and 5%. The jump to 10% and 20% in direct-to-consumer serums was driven by competitive marketing claims rather than formulation science.',
          'For most users, 2% to 5% delivers maximal barrier strengthening and tone evening with zero risk of flushing or barrier irritation.'
        ],
        recommendedProductIds: [
          'naturium-niacinamide-12-zinc-2',
          'krave-great-barrier-relief'
        ]
      }
    ],

    comparisonProductIds: [
      'naturium-niacinamide-12-zinc-2',
      'krave-great-barrier-relief',
      'paulas-choice-2-bha-liquid'
    ],

    faqs: [
      {
        question: 'Why did 10% niacinamide break me out or turn my face red?',
        answer: 'High concentrations of niacinamide (10% or higher), especially if formulated with trace residual nicotinic acid or applied alongside acidic cleansers, can cause localized cutaneous vasodilation. This is known as a "niacin flush" and is frequently mistaken for an acne purge.'
      },
      {
        question: 'Can I use Vitamin C and Niacinamide together?',
        answer: 'Yes. The myth that they deactivate each other originated from a 1960s study under non-physiological conditions (extreme heat and low pH). In modern stable skincare products at room temperature, using both simultaneously is safe and offers synergistic brightening.'
      }
    ],

    references: [
      {
        title: 'Niacinamide: A B Vitamin that Improves Aging Facial Skin Appearance',
        publication: 'Dermatologic Surgery',
        year: 2020
      },
      {
        title: 'Comparative Efficacy of 4% Niacinamide vs. 1% Clindamycin Gel in Acne Vulgaris',
        publication: 'International Journal of Dermatology',
        year: 2022
      }
    ],

    relatedArticleIds: [
      'barrier-repair-guide',
      'best-moisturizers-for-oily-skin'
    ]
  },
  {
    id: 'centella-asiatica-redness-calming',
    slug: 'centella-asiatica-cica-skincare-redness-analysis',
    title: 'Centella Asiatica (Cica) in Skincare: Does It Truly Calm Post-Acne Erythema?',
    subtitle: 'From traditional tiger grass healing to modern titrated extracts: how madecassoside and asiaticoside modulate skin redness.',
    category: 'Skincare',
    subcategory: 'Botanical Actives • Redness Relief',
    featuredImageUrl: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'September 01, 2026',
    updatedAt: 'September 15, 2026',
    readingTimeMin: 5,
    author: EDITORIAL_AUTHORS.marcus,
    factCheckedBy: 'Elena Vance, MS',
    primaryConcern: 'Redness & Sensitivity',
    seoMetaDescription: 'An evidence-backed look at Centella Asiatica (Cica) and its active triterpenoids (Madecassoside, Asiatic Acid). Learn how it accelerates wound recovery and calms redness.',

    answerFirstSummary: 'Centella Asiatica (Gotu Kola/Cica) contains four primary bioactive pentacyclic triterpenes: Madecassoside, Asiaticoside, Madecassic Acid, and Asiatic Acid. These compounds stimulate type I collagen synthesis, down-regulate pro-inflammatory cytokines (IL-1beta, TNF-alpha), and enhance microcirculation, making it highly effective for calming post-blemish redness (PIE) and reactive skin.',
    keyTakeaways: [
      'Post-inflammatory erythema (PIE) is caused by damaged or dilated capillary micro-vessels following an acne lesion.',
      'Titrated Centella extracts containing pure madecassoside offer significantly more clinical potency than generic diluted cica leaf water.',
      'Centella is non-irritating, has no sun-sensitizing properties, and can be used twice daily across all skin types.',
      'Pairs exceptionally well with barrier creams to speed skin rehabilitation.'
    ],

    sections: [
      {
        id: 'what-makes-cica-effective',
        heading: 'The Bioactive Triterpenes of Centella Asiatica',
        content: [
          'In cosmetic pharmacology, not all Centella products are created equal. In cheap formulations, brands list "Centella Asiatica Leaf Water", which is mostly water with trace botanicals.',
          'True therapeutic efficacy comes from titrated extracts (TECA) that isolate the pure triterpenic saponins: Madecassoside and Asiaticoside. These compounds promote fibroblast proliferation and upregulate intracellular fibronectin expression.'
        ]
      }
    ],

    comparisonProductIds: [
      'skin1004-centella-ampoule',
      'larocheposay-cicaplast-baume-b5',
      'krave-great-barrier-relief'
    ],

    faqs: [
      {
        question: 'Can Centella help with brown acne scars?',
        answer: 'Centella is primarily effective for red or pink marks (erythema) by downregulating inflammation and aiding capillary recovery. For brown or dark marks (melanin-based post-inflammatory hyperpigmentation), ingredients like Niacinamide, Azelaic Acid, or Vitamin C are more targeted.'
      }
    ],

    references: [
      {
        title: 'Centella asiatica in Cosmetology: Review of Biological Activity and Clinical Application',
        publication: 'Phytotherapy Research',
        year: 2023
      }
    ],

    relatedArticleIds: [
      'barrier-repair-guide',
      'niacinamide-explained-benefits-percentages'
    ]
  }
];

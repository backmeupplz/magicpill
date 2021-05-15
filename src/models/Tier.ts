import { TArg } from 'classnames/tailwind'

enum Tier {
  bronze = 'bronze',
  silver = 'silver',
  gold = 'gold',
  platinum = 'platinum',
  diamond = 'diamond',
}

export interface TierDescription {
  title: string
  gradient: TArg[]
  benefits: {
    title: string
    source: string
  }[]
}

export const tiers: { [index: string]: TierDescription } = {
  [Tier.bronze]: {
    title: Tier.bronze,
    gradient: ['from-bronze-semifull', 'to-bronze-semitransparent'],
    benefits: [
      {
        title: 'Снижение риска ишемической болезни сердца на 84%',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483430',
      },
      {
        title: 'Снижение риска диабета II типа на 51%',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483430',
      },
      {
        title: 'Снижение риска колоректального рака на 35%',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2661797/ ',
      },
    ],
  },
  [Tier.silver]: {
    title: Tier.silver,
    gradient: ['from-silver-semifull', 'to-silver-semitransparent'],
    benefits: [
      {
        title: 'Снижение риска общей смертности на 21%',
        source: 'https://pubmed.ncbi.nlm.nih.gov/27557655',
      },
      {
        title:
          'Снижение риска смертности от сердечно-сосудистых заболеваний на 29%',
        source: 'https://pubmed.ncbi.nlm.nih.gov/27557655',
      },
      {
        title: 'Снижение риска диабета на 32%',
        source: 'https://pubmed.ncbi.nlm.nih.gov/27597529',
      },
      {
        title:
          'Снижение риска смерти от сердечно-сосудистых заболеваний на 15%',
        source: 'https://pubmed.ncbi.nlm.nih.gov/27597529',
      },
      {
        title: 'Снижение риска инсульта на 11%',
        source: 'https://pubmed.ncbi.nlm.nih.gov/27597529',
      },
      {
        title: 'Снижение риска рака груди на 11%',
        source: 'https://pubmed.ncbi.nlm.nih.gov/27597529',
      },
      {
        title: 'Снижение риска рака простаты на 19%',
        source: 'https://pubmed.ncbi.nlm.nih.gov/27597529',
      },
    ],
  },
  [Tier.gold]: {
    title: Tier.gold,
    gradient: ['from-gold-semifull', 'to-gold-semitransparent'],
    benefits: [
      {
        title: 'Снижение ИМТ на 2.5 кг/м^2',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
      },
      {
        title: 'Снижение риска рака на 16%',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3565018',
      },
      {
        title: 'Снижение риска диабета на 38%',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
      },
    ],
  },
  [Tier.platinum]: {
    title: Tier.platinum,
    gradient: ['from-platinum-semifull', 'to-platinum-semitransparent'],
    benefits: [
      {
        title: 'Снижение ИМТ на 3 кг/м^2',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
      },
      {
        title: 'Cнижение риска рака на 9%',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3565018',
      },
      {
        title: 'Снижение риска смерти от ишемической болезни сердца на 24%',
        source: 'https://pubmed.ncbi.nlm.nih.gov/10479225',
      },
      {
        title: 'Снижение риска диабета на 48%',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
      },
    ],
  },
  [Tier.diamond]: {
    title: Tier.diamond,
    gradient: ['from-diamond-semifull', 'to-diamond-semitransparent'],
    benefits: [
      {
        title: 'Снижение риска диабета на 74%',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
      },
      {
        title: 'Снижение риска рака на 15%',
        source: 'https://pubmed.ncbi.nlm.nih.gov/26853923',
      },
      {
        title: 'Снижение ИМТ на 5 кг/м^2',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
      },
      {
        title:
          'Снижение риска смерти от сердечно-сосудистых заболеваний на 20%',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6089671',
      },
      {
        title: 'Снижение общего воспаления на 46%',
        source: 'https://pubmed.ncbi.nlm.nih.gov/33303765',
      },
      {
        title: 'Снижение риска повышенного давления на 67%',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7692016',
      },
    ],
  },
}

export default Tier

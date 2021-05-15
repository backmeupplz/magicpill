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
  benefits: string[]
}

export const tiers: { [index: string]: TierDescription } = {
  [Tier.bronze]: {
    title: Tier.bronze,
    gradient: ['from-bronze-semifull', 'to-bronze-semitransparent'],
    benefits: [
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483430',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483430',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2661797',
    ],
  },
  [Tier.silver]: {
    title: Tier.silver,
    gradient: ['from-silver-semifull', 'to-silver-semitransparent'],
    benefits: [
      'https://pubmed.ncbi.nlm.nih.gov/27557655',
      'https://pubmed.ncbi.nlm.nih.gov/27557655',
      'https://pubmed.ncbi.nlm.nih.gov/27597529',
      'https://pubmed.ncbi.nlm.nih.gov/27597529',
      'https://pubmed.ncbi.nlm.nih.gov/27597529',
      'https://pubmed.ncbi.nlm.nih.gov/27597529',
      'https://pubmed.ncbi.nlm.nih.gov/27597529',
    ],
  },
  [Tier.gold]: {
    title: Tier.gold,
    gradient: ['from-gold-semifull', 'to-gold-semitransparent'],
    benefits: [
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3565018',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
    ],
  },
  [Tier.platinum]: {
    title: Tier.platinum,
    gradient: ['from-platinum-semifull', 'to-platinum-semitransparent'],
    benefits: [
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3565018',
      'https://pubmed.ncbi.nlm.nih.gov/10479225',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
    ],
  },
  [Tier.diamond]: {
    title: Tier.diamond,
    gradient: ['from-diamond-semifull', 'to-diamond-semitransparent'],
    benefits: [
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
      'https://pubmed.ncbi.nlm.nih.gov/26853923',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6089671',
      'https://pubmed.ncbi.nlm.nih.gov/33303765',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7692016',
    ],
  },
}

export default Tier

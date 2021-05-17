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
  price: string[]
  gradient: TArg[]
  benefits: string[]
}

export const tiers: { [index: string]: TierDescription } = {
  [Tier.bronze]: {
    title: Tier.bronze,
    price: ['bronzePrice1', 'processedMeat', 'bronzePrice2'],
    gradient: ['from-bronze-semifull', 'to-bronze-semitransparent'],
    benefits: [
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483430',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483430',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2661797',
    ],
  },
  [Tier.silver]: {
    title: Tier.silver,
    price: ['silverPrice1', 'redMeat', 'silverPrice2'],
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
    price: ['goldPrice1', 'unprocessedMeat', 'goldPrice2'],
    gradient: ['from-gold-semifull', 'to-gold-semitransparent'],
    benefits: [
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3565018',
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044',
    ],
  },
  [Tier.platinum]: {
    title: Tier.platinum,
    price: ['platinumPrice1', 'seafood', 'platinumPrice2'],
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
    price: ['diamondPrice'],
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

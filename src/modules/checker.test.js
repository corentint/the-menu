import { isBurgerValid, hasBunAround, isUsingSameBun } from './checker'
import { TYPES, CLASSIC_BUNS, ITEMS, DARK_BUNS } from '../constants/burger'

describe('isBurgerValid', () => {
  it('Valid burger', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]

    expect(isBurgerValid(burger)).toBe(true)
  })
  it('has bun around', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]

    expect(hasBunAround(burger)).toBe(true)
  })
  it('has bun around of different types', () => {
    const burger = [
      { type: TYPES.BUN, item: DARK_BUNS.DARK_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]

    expect(hasBunAround(burger)).toBe(true)
  })
  it('is using same bun with single bun', () => {
    const burger = [
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.BUN, item: DARK_BUNS.DARK_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
    ]

    expect(isUsingSameBun(burger)).toBe(true)
  })
})

describe('isBurgerNotValid', () => {
  it('does not have bun around', () => {
    const burger = [
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]

    expect(hasBunAround(burger)).toBe(false)
  })
  it('does not have any bun', () => {
    const burger = [
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
    ]

    expect(isUsingSameBun(burger)).toBe(false)
  })
  it('is 2 different buns', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP },
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.BUN, item: DARK_BUNS.DARK_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
    ]

    expect(isUsingSameBun(burger)).toBe(false)
  })
})

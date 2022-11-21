// Burger object
//
// { type: 'TYPE', item: 'ITEM' }
//
// Golden rules of a burger
//
// 1 - Bun on top and bottom
// 2 - Use the same type of bun
// 3 - The cheese should always be above the beef
// 4 - The lettuce should always be below a bun
// 5 - Never stack two buns on top of another
// 6 - Never use the same ingredient on top of another
//
// Optional rule
//
// 1 - Vegetarian (contains no beef or bacon)
//

import { TYPES, ITEMS, CLASSIC_BUNS, DARK_BUNS } from '../constants/burger'

export const isBurgerValid = burger => {
  return true
}

// { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
// { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
// { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
// { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
// { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }

export const hasBunAround = burger => {
  if (burger.length < 2) return false;

  let hasBottomBun = burger[0].type === TYPES.BUN && (
    burger[0].item === CLASSIC_BUNS.CLASSIC_BUN_BOTTOM 
    || burger[0].item === DARK_BUNS.DARK_BUN_BOTTOM);

  let hasTopBun = burger[burger.length - 1].type === TYPES.BUN && (
    burger[burger.length - 1].item === CLASSIC_BUNS.CLASSIC_BUN_TOP
    || burger[burger.length - 1].item === DARK_BUNS.DARK_BUN_TOP);
  return hasBottomBun && hasTopBun;
}

export const isUsingSameBun = burger => {
  let hasBun = burger.some(x => x.type === TYPES.BUN);

  if (!hasBun) return false;

  let buns = burger.filter(x => x.type === TYPES.BUN);

  let isClassicBun = buns[0].item.includes('CLASSIC');

  return buns.every(x => isClassicBun ? x.item.includes('CLASSIC') : x.item.includes('DARK'));
}

/**
 * @function easeOutCubic
 * Easing cubic function
 */
export const easeOutCubic = (x) => 1 - ((1 - x) ** 3);

/**
 * @function interpolate
 * Interpolates value from start point to target point using percentage param
*/
export const interpolate = (start, target, pct) => (start + (target - start) * pct);

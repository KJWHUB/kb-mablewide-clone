export function getCSSVariable(variableName: string): string {
  if (import.meta.client) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
  }
  return "";
}

/**
 * number to comma separated string
 * @param num
 * @returns comma separated string
 */
export function numberWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * delete mius sign
 * @param num
 * @returns number
 */
export function deleteMinusSign(num: number): number {
  return num < 0 ? num * -1 : num;
}

export function getCSSVariable(variableName: string): string {
  if (import.meta.client) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
  }
  return "";
}

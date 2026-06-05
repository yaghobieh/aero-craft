/* ============================== CSS Rendering Helpers ============================== */

export function renderCssProperties(props: Record<string, string>, important: boolean): string {
  return Object.entries(props)
    .map(([prop, value]) => {
      const v = important ? `${value} !important` : value;
      return `  ${prop}: ${v};`;
    })
    .join('\n');
}

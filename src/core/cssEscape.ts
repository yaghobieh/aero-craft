export function escapeCssClassIdent(name: string): string {
  const escaped = name.replace(/[^a-zA-Z0-9_-]/g, (ch) => `\\${ch}`);
  if (/^[0-9]/.test(escaped)) {
    const first = escaped.charCodeAt(0).toString(16);
    return `\\${first} ${escaped.slice(1)}`;
  }
  return escaped;
}

/** Prefix public-folder URLs when the site is served from /personal-site. */
export function publicPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}

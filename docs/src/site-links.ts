// Shared external links, so astro.config.mjs and Header.astro can't drift out of sync.
export const siteLinks = {
	store: { label: 'Sponsor', href: 'https://github.com/sponsors/mpesic84' },
	forums: { label: 'Discussions', href: 'https://github.com/mpesic84/winutil-app/discussions' },
} as const;

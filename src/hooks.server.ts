// hooks.server.ts
import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'

const securityHeaders = {
	'Cross-Origin-Opener-Policy': 'same-origin'
}

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	Object.entries(securityHeaders).forEach(
		([header, value]) => response.headers.set(header, value)
	);

	const lang = event.request.headers.get('accept-language')?.split(',')[0]
	if (lang) {
		locale.set(lang)
	}
	return response;
}
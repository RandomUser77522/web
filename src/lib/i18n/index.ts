// src/lib/i18n/index.ts
import { browser } from '$app/environment';
import { init, register, getLocaleFromNavigator } from 'svelte-i18n';
import { addMessages } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./locale/en.json'));
register('th', () => import('./locale/th.json'));
register('cn', () => import('./locale/cn.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale,
});
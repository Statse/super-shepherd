import en from './en.json';
import fi from './fi.json';
import sv from './sv.json';

const translations = {
  en,
  fi,
  sv
};

export type Locale = 'en' | 'fi' | 'sv';

export function getTranslations(locale: Locale = 'en') {
  return translations[locale] || translations.en;
}

export function getCurrentLocale(url: URL): Locale {
  const pathname = url.pathname;
  if (pathname.includes('/fi/') || pathname.endsWith('/fi')) {
    return 'fi';
  }
  if (pathname.includes('/sv/') || pathname.endsWith('/sv')) {
    return 'sv';
  }
  return 'en';
}

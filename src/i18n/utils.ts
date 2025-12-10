import en from './en.json';
import fi from './fi.json';

const translations = {
  en,
  fi
};

export type Locale = 'en' | 'fi';

export function getTranslations(locale: Locale = 'en') {
  return translations[locale] || translations.en;
}

export function getCurrentLocale(url: URL): Locale {
  const pathname = url.pathname;
  if (pathname.includes('/fi/') || pathname.endsWith('/fi')) {
    return 'fi';
  }
  return 'en';
}

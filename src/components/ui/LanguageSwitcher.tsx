// src/components/ui/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'bn' ? 'en' : 'bn';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
      title={i18n.language === 'bn' ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
    >
      <GlobeAltIcon className="w-5 h-5" />
      <span>{i18n.language === 'bn' ? 'English' : 'বাংলা'}</span>
    </button>
  );
}

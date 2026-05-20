import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-2 bg-[#F5EBDD] border border-[#e3d0b2] rounded-full p-1 w-fit shadow-sm">
      <button onClick={() => handleLanguageChange('en')} className={`px-6 py-2 rounded-full font-medium transition-colors ${i18n.language === 'en' ? 'bg-[#B07B2D] text-white' : 'text-[#3E3E3E] hover:bg-[#E8D1B5]/50'}`}>
        English
      </button>
      <button onClick={() => handleLanguageChange('ru')} className={`px-6 py-2 rounded-full font-medium transition-colors ${i18n.language === 'ru' ? 'bg-[#B07B2D] text-white' : 'text-[#3E3E3E] hover:bg-[#E8D1B5]/50'}`}>
        Русский
      </button>
      <button onClick={() => handleLanguageChange('tj')} className={`px-6 py-2 rounded-full font-medium transition-colors ${i18n.language === 'tj' ? 'bg-[#B07B2D] text-white' : 'text-[#3E3E3E] hover:bg-[#E8D1B5]/50'}`}>
        Тоҷикӣ
      </button>
    </div>
  );
};

export default LanguageSwitch;

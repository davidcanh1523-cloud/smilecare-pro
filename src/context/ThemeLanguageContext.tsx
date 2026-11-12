import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';
type Language = 'vi' | 'en';

interface ThemeLanguageContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Navigation
    'nav.features': 'Nghiệp Vụ & Tính Năng',
    'nav.beforeAfter': 'Ca Trước & Sau',
    'nav.survey': 'Khảo Sát Răng 60s',
    'nav.sterile': 'Chuẩn Vô Trùng Bộ Y Tế',
    'nav.sync': 'Đồng Bộ Sheets & Zalo',
    'nav.pricing': 'Bảng Giá Minh Bạch',
    'nav.orderBtn': 'Đặt Làm Bản Này / Nhận Báo Giá',
    'nav.hotline': 'Hotline Y Khoa: 1900 8989',

    // Hero
    'hero.badge': 'NHA KHOA KỸ THUẬT SỐ 4.0 • CHUẨN QUỐC TẾ 2026',
    'hero.title1': 'Nâng Tầm Nụ Cười',
    'hero.title2': 'Nha Khoa Thẩm Mỹ & Cấy Ghép Implant',
    'hero.subtitle': 'Giao diện phòng khám nha khoa chuẩn y khoa thế hệ mới. Tích hợp AI phân tích tình trạng răng, thư viện trước/sau tương tác, cam kết vô trùng chuẩn Bộ Y Tế và tự động đồng bộ CRM.',
    'hero.ctaSurvey': 'Khảo Sát Răng AI (60s)',
    'hero.ctaOrder': 'Đặt Làm Bản Này (Từ 2,5tr)',
    'hero.ctaDiscount': 'Lấy Giá Rẻ (-20%)',
    'hero.statPatients': '12.500+ Ca Phục Hình',
    'hero.statSuccess': '99.8% Thành Công',
    'hero.statSterile': '100% Vô Trùng Khép Kín',
    'hero.statWarranty': 'Bảo Hành Trọn Đời',
  },
  en: {
    // Navigation
    'nav.features': 'Core Modules',
    'nav.beforeAfter': 'Before & After',
    'nav.survey': '60s Dental Survey',
    'nav.sterile': 'Sterilization Standard',
    'nav.sync': 'CRM & Zalo Sync',
    'nav.pricing': 'Transparent Pricing',
    'nav.orderBtn': 'Order This Template / Get Quote',
    'nav.hotline': 'Medical Hotline: (+84) 1900 8989',

    // Hero
    'hero.badge': 'DIGITAL DENTISTRY 4.0 • INTERNATIONAL STANDARD 2026',
    'hero.title1': 'Sculpt Your Flawless Smile',
    'hero.title2': 'Cosmetic Dentistry & Swiss Dental Implant',
    'hero.subtitle': 'Next-gen medical-grade dental clinic landing page. Featuring AI smile diagnostics, interactive before/after split viewer, Ministry of Health sterile compliance, and real-time CRM sync.',
    'hero.ctaSurvey': 'Start AI Smile Survey (60s)',
    'hero.ctaOrder': 'Order This Template (From 2.5M)',
    'hero.ctaDiscount': 'Claim Discount (-20%)',
    'hero.statPatients': '12,500+ Restorations',
    'hero.statSuccess': '99.8% Success Rate',
    'hero.statSterile': '100% Class-B Sterile',
    'hero.statWarranty': 'Lifetime Implant Warranty',
  }
};

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export const ThemeLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const urlParam = new URLSearchParams(window.location.search).get('theme');
      if (urlParam === 'light' || urlParam === 'dark') return urlParam;
      const saved = localStorage.getItem('smilecare_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'light'; // Default to pristine, bright medical light theme like Nha Khoa Paris
  });

  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const urlParam = new URLSearchParams(window.location.search).get('lang');
      if (urlParam === 'vi' || urlParam === 'en') return urlParam;
      const saved = localStorage.getItem('smilecare_lang');
      if (saved === 'vi' || saved === 'en') return saved;
    }
    return 'vi';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('smilecare_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('smilecare_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLang(prev => (prev === 'vi' ? 'en' : 'vi'));
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <ThemeLanguageContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error('useThemeLanguage must be used within a ThemeLanguageProvider');
  }
  return context;
};

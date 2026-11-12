import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Phone, 
  Tag, 
  Smile, 
  ShieldCheck, 
  MapPin, 
  ChevronDown, 
  Stethoscope, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  Sparkle
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenDiscountModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, onOpenDiscountModal }) => {
  const { theme, toggleTheme, lang, toggleLang } = useThemeLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [branchDropdownOpen, setBranchDropdownOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('Hà Nội - 188 Bà Triệu');
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const branchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (branchRef.current && !branchRef.current.contains(e.target as Node)) {
        setBranchDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const clinicalServices = [
    {
      title: 'Bọc Răng Sứ & Dán Sứ Veneer Nano 5S',
      desc: 'Công nghệ Pháp, không mài nhỏ, bảo tồn tủy 100%, bảo hành 15 năm.',
      tag: 'Chuẩn Pháp ADF',
      href: '#before-after'
    },
    {
      title: 'Trồng Răng Implant 4S Tiêu Chuẩn Pháp',
      desc: 'Tích hợp xương nhanh gấp 2 lần, ăn nhai chắc chắn như răng thật, bảo hành trọn đời.',
      tag: 'Pháp - Thụy Sĩ',
      href: '#sterile-protocol'
    },
    {
      title: 'Niềng Răng Trong Suốt 3D Speed ClinCheck',
      desc: 'Khay niềng Invisalign biết trước kết quả mô phỏng 3D, rút ngắn 4 - 6 tháng.',
      tag: 'Mô phỏng 3D',
      href: '#smile-survey'
    },
    {
      title: 'Nhổ Răng Khôn Sóng Siêu Âm Piezotome',
      desc: 'Nhẹ nhàng không đau, không sưng nề, lành thương nhanh chỉ sau 24 giờ.',
      tag: 'Không Đau 100%',
      href: '#sterile-protocol'
    },
    {
      title: 'Tẩy Trắng Răng WhiteMax Tiêu Chuẩn Pháp',
      desc: 'Bật 3 - 5 tone men răng trắng sáng ngọc trai chỉ sau 45 phút, không ê buốt.',
      tag: 'Công Nghệ Pháp',
      href: '#before-after'
    }
  ];

  const branches = [
    { name: 'Hà Nội - Hoàn Kiếm', address: '188 Bà Triệu, P. Nguyễn Du, Q. Hai Bà Trưng' },
    { name: 'Hà Nội - Đống Đa', address: '110-112 Thái Thịnh, P. Ngã Tư Sở, Q. Đống Đa' },
    { name: 'TP.HCM - Quận 1', address: '86 Nguyễn Trãi, P. Bến Thành, Quận 1' },
    { name: 'TP.HCM - Quận 3', address: '84A Bà Huyện Thanh Quan, Phường 9, Quận 3' },
    { name: 'Đà Nẵng - Hải Châu', address: '261-263 Bạch Đằng, P. Thạch Thang, Q. Hải Châu' },
    { name: 'Hải Phòng - Lê Chân', address: '386 Tô Hiệu, P. Hồ Nam, Q. Lê Chân' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. COMPACT MICRO TOPBAR (Siêu Gọn, Cao Chỉ 28px) */}
      <div className="w-full text-[10px] font-medium border-b border-sky-100 bg-[#F0F7FF] text-slate-600 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex items-center justify-between gap-3">
          {/* Left: Certifications & Emergency Hotline */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-sky-800 font-bold">
              <span className="w-3.5 h-2.5 bg-gradient-to-r from-blue-700 via-white to-red-600 rounded-[2px] shadow-2xs inline-block"></span>
              <span>Chuẩn Nha Khoa Pháp ADF</span>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:flex items-center gap-1 text-emerald-700 font-semibold">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>Bộ Y Tế #08842/BYT</span>
            </span>
          </div>

          {/* Right: Branch Selector & Hotline & Utilities */}
          <div className="flex items-center gap-2.5 ml-auto">
            {/* Branch Selector Dropdown */}
            <div className="relative" ref={branchRef}>
              <button 
                onClick={() => setBranchDropdownOpen(!branchDropdownOpen)}
                className="flex items-center gap-1 px-2 py-0.5 rounded-md border border-sky-200 bg-white text-sky-800 text-[10px] font-medium hover:bg-sky-50 shadow-2xs cursor-pointer transition-colors"
              >
                <MapPin className="w-2.5 h-2.5 text-sky-600" />
                <span className="max-w-[120px] truncate">{selectedBranch}</span>
                <ChevronDown className="w-2.5 h-2.5 opacity-70" />
              </button>

              {branchDropdownOpen && (
                <div className="absolute right-0 mt-1 w-64 rounded-xl border border-sky-100 bg-white text-slate-800 p-1.5 shadow-xl z-50 animate-fadeIn">
                  <div className="px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-sky-700 border-b border-slate-100 mb-1">
                    15+ Cơ sở Nha Khoa Paris toàn quốc
                  </div>
                  <div className="max-h-52 overflow-y-auto space-y-0.5">
                    {branches.map((b, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedBranch(b.name);
                          setBranchDropdownOpen(false);
                        }}
                        className={`w-full text-left p-1.5 rounded-lg text-[11px] transition-colors cursor-pointer flex flex-col ${
                          selectedBranch.includes(b.name.split(' - ')[0])
                            ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{b.name}</span>
                          {selectedBranch.includes(b.name.split(' - ')[0]) && (
                            <CheckCircle2 className="w-3 h-3 text-sky-600" />
                          )}
                        </div>
                        <span className="text-[9px] text-slate-500 font-normal truncate">{b.address}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Hotline Link */}
            <a 
              href="tel:19006900" 
              className="flex items-center gap-1 font-mono font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <Phone className="w-2.5 h-2.5" />
              <span>1900 6900</span>
            </a>

            {/* Voucher Pill */}
            <button
              onClick={onOpenDiscountModal}
              className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 text-[9px] font-bold flex items-center gap-1 hover:bg-amber-200 cursor-pointer transition-all shadow-2xs"
            >
              <Tag className="w-2.5 h-2.5 text-amber-600" />
              <span>-20%</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="px-1.5 py-0.5 rounded border border-slate-200 bg-white text-slate-800 text-[9px] font-mono font-bold hover:bg-slate-100 transition-all cursor-pointer"
            >
              {lang === 'vi' ? 'VI' : 'EN'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-0.5 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
              title="Chuyển chế độ giao diện"
            >
              {theme === 'dark' ? <Sun className="w-2.5 h-2.5 text-amber-500" /> : <Moon className="w-2.5 h-2.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. COMPACT MAIN NAVIGATION BAR (Chiều Cao Thon Gọn, Sang Trọng) */}
      <div className={`w-full border-b backdrop-blur-md transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 border-sky-100 shadow-md py-2' 
          : 'bg-white border-slate-100 shadow-xs py-2.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand Gọn Gàng */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0052CC] via-[#0284C7] to-[#06B6D4] p-1.5 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Smile className="w-5 h-5 stroke-[2.5]" />
            </div>

            <div className="text-left leading-none">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-xl tracking-tight text-[#0052CC]">
                  SmileCare
                </span>
                <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-extrabold uppercase bg-red-600 text-white">
                  PARIS
                </span>
              </div>
              <div className="text-[9px] font-semibold text-sky-800 tracking-wider uppercase mt-1 hidden sm:block">
                VIỆN NHA KHOA THẨM MỸ TIÊU CHUẨN PHÁP
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links (5 Mục Trọng Tâm, Tinh Tế) */}
          <nav className="hidden lg:flex items-center space-x-5 text-xs font-bold text-slate-700">
            {/* Chuyên Khoa Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1 py-1 transition-colors cursor-pointer ${
                  servicesDropdownOpen ? 'text-[#0052CC]' : 'hover:text-[#0052CC]'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
                <span>Dịch Vụ Pháp</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#0052CC]' : 'text-slate-400'}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {servicesDropdownOpen && (
                <div 
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-96 rounded-2xl border border-sky-100 bg-white p-3.5 shadow-2xl z-50 animate-fadeIn text-left"
                >
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#0052CC] pb-2 border-b border-slate-100 mb-2 flex items-center justify-between">
                    <span>5 Đột Phá Thẩm Mỹ Răng Chuẩn Pháp</span>
                    <span className="text-[9px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">✓ ADF Paris</span>
                  </div>

                  <div className="space-y-1.5">
                    {clinicalServices.map((service, i) => (
                      <a
                        key={i}
                        href={service.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="p-2 rounded-xl transition-all flex items-start gap-2.5 group hover:bg-sky-50/80 border border-transparent hover:border-sky-100"
                      >
                        <div className="w-6 h-6 rounded-md bg-sky-100 text-[#0052CC] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-[#0052CC]">
                              {service.title}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                            {service.desc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                    <span className="text-slate-500">Bảo hành chính hãng trọn đời</span>
                    <a 
                      href="#pricing-matrix" 
                      onClick={() => setServicesDropdownOpen(false)}
                      className="font-bold text-[#0052CC] hover:underline flex items-center gap-0.5"
                    >
                      Bảng giá viện phí <ArrowRight className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#before-after" className="transition-colors hover:text-[#0052CC] py-1">
              Ca Lâm Sàng 4K
            </a>

            <a href="#smile-survey" className="transition-colors hover:text-[#0052CC] py-1 flex items-center gap-1">
              <span>Khảo Sát 60s</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </a>

            <a href="#sterile-protocol" className="transition-colors hover:text-[#0052CC] py-1">
              Chuẩn Vô Trùng
            </a>

            <a href="#pricing-matrix" className="transition-colors hover:text-[#0052CC] py-1">
              Bảng Giá Viện Phí
            </a>
          </nav>

          {/* Desktop Right CTA Action Deck (Gọn Gàng & Thanh Lịch) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Hotline Call Pill */}
            <a
              href="tel:19006900"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100 transition-all text-xs font-bold shadow-2xs"
            >
              <Phone className="w-3 h-3 text-red-600" />
              <span className="font-mono">1900 6900</span>
            </a>

            {/* Primary Order CTA Button */}
            <button
              onClick={onOpenOrderModal}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0284C7] hover:from-[#0040A8] hover:to-[#0369A1] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-all"
            >
              <Calendar className="w-3 h-3" />
              <span>Báo Giá (Từ 2,5tr)</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenOrderModal}
              className="px-2.5 py-1.5 rounded-lg bg-[#0052CC] text-white text-[10px] font-bold uppercase cursor-pointer"
            >
              Báo Giá 2,5tr
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 3. MOBILE COLLAPSIBLE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 animate-fadeIn shadow-lg">
            <div className="space-y-3 text-left text-xs">
              {/* Mobile Hotline Box */}
              <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-between">
                <div>
                  <div className="text-[9px] uppercase font-bold text-slate-500">Hotline Bác Sĩ Chuẩn Pháp</div>
                  <div className="text-sm font-black font-mono text-[#0052CC]">1900 6900</div>
                </div>
                <a 
                  href="tel:19006900" 
                  className="px-3 py-1 rounded-lg bg-red-600 text-white text-xs font-bold shadow-2xs"
                >
                  Gọi Ngay
                </a>
              </div>

              {/* Mobile Links */}
              <div className="space-y-1.5 font-bold text-slate-700">
                <a
                  href="#before-after"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 hover:text-[#0052CC]"
                >
                  • Dán Sứ Veneer Nano 5S
                </a>
                <a
                  href="#sterile-protocol"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 hover:text-[#0052CC]"
                >
                  • Cấy Ghép Implant 4S Pháp
                </a>
                <a
                  href="#smile-survey"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 hover:text-[#0052CC]"
                >
                  • Khảo Sát Răng 60s
                </a>
                <a
                  href="#pricing-matrix"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 hover:text-[#0052CC]"
                >
                  • Bảng Giá Viện Phí
                </a>
              </div>

              {/* Mobile CTA */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0284C7] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Đặt Làm Bản Này (Từ 2,5tr)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { 
  Sparkles, 
  Activity, 
  Tag, 
  CheckCircle2, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Sparkle,
  Award,
  Star,
  Layers,
  Heart
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenDiscountModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onOpenDiscountModal }) => {
  const { theme, lang } = useThemeLanguage();

  const [selectedToothZone, setSelectedToothZone] = useState<'incisors' | 'molars' | 'fullarch'>('incisors');
  const [selectedShade, setSelectedShade] = useState<'A3' | 'A1' | 'BL2' | 'BL1'>('BL1');

  const zoneDetails = {
    incisors: {
      nameVi: 'Khu Vực Răng Cửa (Răng 11, 21, 12, 22)',
      treatmentVi: 'Dán Sứ Veneer Nano 5S Tiêu Chuẩn Pháp (Độ Mỏng 0.2mm)',
      specVi: 'Bảo tồn 100% tủy răng gốc • Không mài nhỏ • Phát huỳnh quang tự nhiên dưới ánh sáng',
      durability: 'Độ cứng uốn: 550 MPa (Gấp 4 lần răng thật)',
      timeframe: 'Hoàn thành: 48 Giờ (Chỉ 2 buổi hẹn)',
      badge: 'Nụ Cười Chuẩn Tỷ Lệ Vàng DSD'
    },
    molars: {
      nameVi: 'Khu Vực Răng Hàm Nhai (Răng 16, 26, 36, 46)',
      treatmentVi: 'Cấy Ghép Implant 4S Tiêu Chuẩn Pháp (Trụ Anthogyr / Straumann)',
      specVi: 'Máng hướng dẫn phẫu thuật 3D không rạch vạt • Tích hợp xương trong 3 - 4 tuần',
      durability: 'Vật liệu: Titanium Grade 5 tinh khiết',
      timeframe: 'Bảo hành: Trọn đời định danh điện tử',
      badge: 'Phục Hồi Lực Nhai Tức Thì 24h'
    },
    fullarch: {
      nameVi: 'Khớp Cắn Toàn Hai Hàm (Hô, Móm, Khấp Khểnh)',
      treatmentVi: 'Niềng Răng Trong Suốt 3D Speed ClinCheck Hoa Kỳ',
      specVi: 'Khay niềng vô hình tháo lắp tự do • Xem trước kết quả mô phỏng nụ cười 3D',
      durability: 'Công nghệ: Mô phỏng 3D ClinCheck',
      timeframe: 'Lộ trình: Rút ngắn 4 - 6 tháng',
      badge: 'Mô Phỏng 3D ClinCheck'
    }
  };

  const shadeData = {
    A3: { label: 'Vita A3.5', tone: 'Men răng tự nhiên, ố vàng nhẹ do thời gian' },
    A1: { label: 'Vita A1', tone: 'Trắng sáng tự nhiên chuẩn người Á Đông' },
    BL2: { label: 'Bleach BL2', tone: 'Trắng tinh khiết chuẩn phong cách Paris' },
    BL1: { label: 'Bleach BL1', tone: 'Trắng ngọc trai kim cương cao cấp nhất' }
  };

  const currentZone = zoneDetails[selectedToothZone];

  return (
    <section className="relative pt-6 pb-16 lg:pt-8 lg:pb-20 overflow-hidden bg-[#F8FAFC]">
      {/* 🌟 1. ẢNH CHÌM ẢNH THẬT NHA KHOA (SUBMERGED REAL CLINICAL PHOTOGRAPHY BACKDROP) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Real Clinical Photo of Dental Patient / Clinic Atmosphere (Ảnh Thật Chìm Bên Phải) */}
        <img
          src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=85"
          alt="Dental Patient Real Treatment Atmosphere"
          className="absolute right-0 top-0 h-full w-full lg:w-[62%] object-cover object-right-top opacity-35 lg:opacity-45 filter saturate-110"
        />

        {/* Multi-tier Gradient Masks to Submerge the Photo Seamlessly into Porcelain White */}
        {/* Horizontal blend from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent w-full lg:w-[58%]"></div>
        
        {/* Soft radial feathered vignette */}
        <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full bg-gradient-to-l from-transparent via-[#F8FAFC]/20 to-[#F8FAFC]"></div>
        
        {/* Top fade from navbar */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent"></div>
        
        {/* Bottom fade into diagnostic section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent"></div>

        {/* Soft French Blue Ambient Light Glow */}
        <div className="absolute -top-24 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-sky-200/40 via-blue-100/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Medical Ribbon */}
        <div className="flex justify-center sm:justify-start mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider border border-sky-200 bg-white/95 backdrop-blur-md shadow-2xs text-sky-800">
            <span className="inline-flex items-center justify-center w-3.5 h-2.5 bg-gradient-to-r from-blue-700 via-white to-red-600 rounded-[2px] shadow-2xs"></span>
            <span>TIÊU CHUẨN NHA KHOA PHÁP • HIỆP HỘI NHA KHOA PHÁP (ADF)</span>
          </div>
        </div>

        {/* 🌟 2. HERO CONTENT GRID TRÊN NỀN ẢNH CHÌM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left pt-2 pb-14">
          {/* Left Column (7 cols): Headings, Check Badges & CTAs */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-3">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Kiến Tạo Nụ Cười <br />
                <span className="bg-gradient-to-r from-[#0052CC] via-[#0284C7] to-[#0D9488] bg-clip-text text-transparent">
                  Chuẩn Thần Thái Pháp
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-medium">
                Hệ thống viện nha khoa thẩm mỹ tiêu chuẩn Pháp hàng đầu: Bọc răng sứ & dán sứ Veneer Nano 5S bảo tồn 100% tủy răng, trồng răng Implant 4S tích hợp xương tức thì và niềng răng 3D Speed xem trước kết quả.
              </p>
            </div>

            {/* 4 Clinical Value Check Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-800 font-bold">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Không mài nhỏ • Bảo tồn 100% tủy</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#0052CC] shrink-0" />
                <span>Implant 4S ăn nhai tức thì 24h</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bảo hành chính hãng trọn đời</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#0052CC] shrink-0" />
                <span>Xem trước nụ cười 3D ClinCheck</span>
              </div>
            </div>

            {/* Action Buttons Cluster */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
              <a
                href="#smile-survey"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 active:scale-95 transition-all"
              >
                <Activity className="w-4 h-4" />
                <span>Khảo Sát Răng AI (60 Giây)</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-[#0052CC] to-[#0284C7] hover:from-[#0040A8] hover:to-[#0369A1] text-white cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-sky-600/30 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Đặt Làm Bản Này (Từ 2,5tr)</span>
              </button>

              <button
                onClick={onOpenDiscountModal}
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Tag className="w-3.5 h-3.5 text-amber-600" />
                <span>Giảm 20%</span>
              </button>
            </div>

            {/* Doctor Trust Social Proof */}
            <div className="pt-3 border-t border-slate-200/80 flex items-center gap-4 text-xs text-slate-700">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80" alt="Doctor 1" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80" alt="Doctor 2" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=120&q=80" alt="Doctor 3" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs" />
              </div>
              <div>
                <div className="font-bold text-slate-900 flex items-center gap-1">
                  <span className="flex text-amber-500">★★★★★</span>
                  <span>4.9/5 Đánh Giá Chuyên Môn</span>
                </div>
                <div className="text-[11px] text-slate-600">12.500+ Khách hàng kiến tạo nụ cười chuẩn Pháp</div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): FLOATING MEDICAL CARDS OVER THE SUBMERGED PHOTO */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* Floating Card 1: Diagnostic Highlights */}
            <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-sky-100 text-[#0052CC] border border-sky-200">
                  {currentZone.badge}
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Chuẩn Y Khoa ADF
                </span>
              </div>

              <div className="font-heading font-black text-base text-slate-900">
                {currentZone.treatmentVi}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {currentZone.specVi}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-amber-700 font-bold">{currentZone.durability}</span>
                <span className="font-bold text-[#0052CC]">{currentZone.timeframe}</span>
              </div>
            </div>

            {/* Floating Card 2: Interactive Vita Classical Shade Guide Bar */}
            <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xl space-y-2.5 text-xs text-left">
              <div className="flex items-center justify-between text-[11px] font-bold">
                <span className="text-slate-700 uppercase font-mono text-[10px]">
                  Thước So Màu Men Răng Vita Classical:
                </span>
                <span className="text-amber-700 font-mono text-[10px] font-bold">
                  Mức: {shadeData[selectedShade].label}
                </span>
              </div>

              {/* 4 Interactive Shade Pills */}
              <div className="grid grid-cols-4 gap-2">
                {(['A3', 'A1', 'BL2', 'BL1'] as const).map((key) => {
                  const isSelected = selectedShade === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedShade(key)}
                      className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0052CC] text-white border-[#0052CC] font-bold shadow-md scale-105'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 font-medium'
                      }`}
                    >
                      <div className="text-[11px] font-mono leading-none">{shadeData[key].label}</div>
                    </button>
                  );
                })}
              </div>

              <div className="text-[11px] text-slate-600 flex items-center justify-between pt-1 border-t border-slate-100">
                <span className="truncate font-medium">{shadeData[selectedShade].tone}</span>
                <span className="text-emerald-700 font-bold shrink-0">✓ BH 15 Năm</span>
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xs">
                <div className="text-lg font-heading font-black text-[#0052CC]">100% Vô Trùng</div>
                <div className="text-[10px] text-slate-500">Nồi hấp Autoclave Class B</div>
              </div>
              <div className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xs">
                <div className="text-lg font-heading font-black text-emerald-700">Trọn Đời</div>
                <div className="text-[10px] text-slate-500">Thẻ ID bảo hành điện tử</div>
              </div>
            </div>
          </div>
        </div>

        {/* 🌟 3. DIGITAL DENTAL ARCH SCANNER (Bản Chẩn Đoán Cung Răng Chi Tiết Bên Dưới) */}
        <div className="rounded-3xl border border-sky-100 bg-white p-6 sm:p-8 max-w-5xl mx-auto shadow-xl relative overflow-hidden text-left">
          {/* Cockpit Header Tape */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-5 border-b border-slate-100 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-sky-600 animate-ping"></div>
              <span className="font-mono font-bold uppercase tracking-wider text-[#0052CC]">
                TRẠM CHẨN ĐOÁN CUNG RĂNG 3D & CHỌN VÙNG PHỤC HÌNH
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1 text-emerald-700 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Bộ Y Tế Cấp Phép
              </span>
              <span>Độ lệch CAD/CAM: &plusmn;0.005mm</span>
            </div>
          </div>

          {/* 3 Zone Selector Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6">
            <button
              onClick={() => setSelectedToothZone('incisors')}
              className={`p-4 rounded-2xl border text-xs font-bold transition-all cursor-pointer text-left space-y-1.5 ${
                selectedToothZone === 'incisors'
                  ? 'bg-sky-50 border-[#0052CC] text-[#0052CC] shadow-md ring-1 ring-[#0052CC]'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">✨</span>
                <span className="text-[10px] font-bold text-sky-700 font-mono">Dán Sứ Nano 5S</span>
              </div>
              <div className="font-heading font-black text-sm text-slate-900">Răng Cửa (11, 21)</div>
              <div className="text-[11px] text-slate-500 font-normal">Độ mỏng 0.2mm, không mài nhỏ răng thật.</div>
            </button>

            <button
              onClick={() => setSelectedToothZone('molars')}
              className={`p-4 rounded-2xl border text-xs font-bold transition-all cursor-pointer text-left space-y-1.5 ${
                selectedToothZone === 'molars'
                  ? 'bg-sky-50 border-[#0052CC] text-[#0052CC] shadow-md ring-1 ring-[#0052CC]'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">🦷</span>
                <span className="text-[10px] font-bold text-sky-700 font-mono">Implant 4S Pháp</span>
              </div>
              <div className="font-heading font-black text-sm text-slate-900">Răng Hàm Nhai</div>
              <div className="text-[11px] text-slate-500 font-normal">Tích hợp xương tức thì, bảo hành trọn đời.</div>
            </button>

            <button
              onClick={() => setSelectedToothZone('fullarch')}
              className={`p-4 rounded-2xl border text-xs font-bold transition-all cursor-pointer text-left space-y-1.5 ${
                selectedToothZone === 'fullarch'
                  ? 'bg-sky-50 border-[#0052CC] text-[#0052CC] shadow-md ring-1 ring-[#0052CC]'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">📐</span>
                <span className="text-[10px] font-bold text-sky-700 font-mono">Niềng 3D Speed</span>
              </div>
              <div className="font-heading font-black text-sm text-slate-900">Toàn Hai Hàm</div>
              <div className="text-[11px] text-slate-500 font-normal">Xem trước nụ cười 3D, khay niềng vô hình.</div>
            </button>
          </div>

          {/* Active Diagnostic Details Strip */}
          <div className="mt-4 p-4 rounded-2xl border border-sky-100 bg-[#F0F7FF] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <div className="font-bold text-[#0052CC] text-sm">
                {currentZone.nameVi}: {currentZone.treatmentVi}
              </div>
              <div className="text-slate-600 text-[11px]">
                {currentZone.specVi} • <strong className="text-amber-700">{currentZone.durability}</strong>
              </div>
            </div>

            <button
              onClick={onOpenOrderModal}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0284C7] hover:from-[#0040A8] hover:to-[#0369A1] text-white font-bold uppercase tracking-wider text-xs shrink-0 cursor-pointer shadow-sm active:scale-95 transition-all"
            >
              Nhận Phác Đồ & Báo Giá →
            </button>
          </div>
        </div>

        {/* Clinical Accreditation Seals Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
          <div className="space-y-1">
            <div className="font-heading font-black text-base text-[#0052CC]">Hiệp Hội ADF Pháp</div>
            <div className="text-xs font-bold text-slate-800">Hiệp Hội Nha Khoa Pháp</div>
            <div className="text-[10px] text-slate-500">Chuyển giao công nghệ trực tiếp</div>
          </div>

          <div className="space-y-1">
            <div className="font-heading font-black text-base text-emerald-700">Bộ Y Tế Cấp Phép</div>
            <div className="text-xs font-bold text-slate-800">Giấy phép #08842/BYT</div>
            <div className="text-[10px] text-slate-500">100% Bác sĩ CKI, CKII viện RHM</div>
          </div>

          <div className="space-y-1">
            <div className="font-heading font-black text-base text-sky-700">Invisalign USA</div>
            <div className="text-xs font-bold text-slate-800">Diamond Apex Provider</div>
            <div className="text-[10px] text-slate-500">Top 1% chỉnh nha Đông Nam Á</div>
          </div>

          <div className="space-y-1">
            <div className="font-heading font-black text-base text-amber-700">Ivoclar Vivadent</div>
            <div className="text-xs font-bold text-slate-800">Sứ Emax Nano 5S</div>
            <div className="text-[10px] text-slate-500">Bảo tồn 100% tủy răng tự nhiên</div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  QrCode, 
  Clock, 
  Flame, 
  Zap, 
  FileCheck,
  BadgeCheck,
  Lock
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

export const SterilizationProtocol: React.FC = () => {
  const { lang } = useThemeLanguage();
  const [activeStep, setActiveStep] = useState(3);
  const [isQrVerified, setIsQrVerified] = useState(false);

  const steps = [
    {
      num: '01',
      titleVi: 'Phân Loại & Khử Khuẩn Enzym',
      titleEn: 'Enzymatic Decontamination',
      descVi: 'Ngâm dung dịch khử khuẩn Cidezyme chuyên dụng phân hủy toàn bộ protein và màng vi khuẩn.',
      descEn: 'Submerged in multi-enzyme medical disinfectant to break down 100% bio-films.',
      temp: '25°C • 15 Phút'
    },
    {
      num: '02',
      titleVi: 'Rửa Sóng Siêu Âm Ultrasonic',
      titleEn: 'Ultrasonic Cavitation Wash',
      descVi: 'Sóng siêu âm đa tần số làm sạch sâu từng kẽ mũi phẫu thuật và tay khoan siêu nhỏ.',
      descEn: 'High-frequency ultrasonic waves cleanse micro-crevices and surgical burs.',
      temp: '60°C • Sóng 40kHz'
    },
    {
      num: '03',
      titleVi: 'Đóng Gói Màng Ép Nhiệt Y Tế',
      titleEn: 'Sterile Barrier Packaging',
      descVi: 'Mỗi bệnh nhân 1 bộ dụng cụ riêng biệt kèm tem chỉ thị tiệt trùng đổi màu chuẩn quốc tế.',
      descEn: 'Individual patient pouches sealed with chemical color-change sterilization indicators.',
      temp: 'Ép nhiệt chân không'
    },
    {
      num: '04',
      titleVi: 'Hấp Áp Suất Autoclave Class B',
      titleEn: 'Autoclave Class B 134°C',
      descVi: 'Hệ thống nồi hấp tiệt trùng tiêu diệt 100% nha bào, virus viêm gan B và HIV dưới áp suất cao.',
      descEn: 'Pressurized fractional pre-vacuum destroys 100% spores, viruses, and pathogens.',
      temp: '134°C • 2.2 Bar'
    },
    {
      num: '05',
      titleVi: 'Lưu Trữ Tủ Vô Trùng Tia UV-C',
      titleEn: 'UV-C Clean Air Storage',
      descVi: 'Bảo quản dụng cụ trong tủ chiếu tia cực tím vô trùng liên tục 24/7 đến khi mở dùng.',
      descEn: 'Preserved under continuous germicidal UV-C light chambers until chairside unsealing.',
      temp: 'Khí sạch áp lực dương'
    },
    {
      num: '06',
      titleVi: 'Mở Niêm Phong Trước Mắt Khách',
      titleEn: 'Chairside Patient Unsealing',
      descVi: 'Khách hàng tự tay kiểm tra tem niêm phong và chỉ thị màu vô trùng trước khi bắt đầu điều trị.',
      descEn: 'Patients personally inspect intact sterile seals and color strips prior to treatment.',
      temp: '1 Khách = 1 Bộ riêng'
    }
  ];

  return (
    <section id="sterile-protocol" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider mb-4 border border-emerald-300 bg-emerald-50 text-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>TÍNH NĂNG CỐT LÕI 3 • CHUẨN VÔ TRÙNG PHÁP & BẢO HÀNH TRỌN ĐỜI</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">
            {lang === 'vi' ? 'Quy Trình Vô Trùng Khép Kín & Thẻ Bảo Hành Pháp' : 'Closed-Loop Sterilization & Lifetime French Warranty'}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            {lang === 'vi'
              ? 'An toàn tuyệt đối là ưu tiên số 1 tại SmileCare Paris. 100% ca điều trị tuân thủ quy chuẩn kiểm soát nhiễm khuẩn khắt khe của Bộ Y Tế và cấp thẻ bảo hành Implant chính hãng trọn đời.'
              : 'Strict biological safety protocol exceeding Ministry of Health regulations, backed by authentic global lifetime warranty tracking.'}
          </p>
        </div>

        {/* 6-Step Cycle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-w-6xl mx-auto">
          {steps.map((st, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer text-left relative overflow-hidden group ${
                activeStep === idx
                  ? 'border-emerald-500 bg-emerald-50/50 shadow-md ring-1 ring-emerald-400'
                  : 'border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`w-9 h-9 rounded-2xl flex items-center justify-center font-mono font-black text-sm ${
                  activeStep === idx 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {st.num}
                </span>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  {st.temp}
                </span>
              </div>

              <h3 className="font-heading font-black text-base mb-2 text-slate-900 group-hover:text-emerald-800 transition-colors">
                {lang === 'vi' ? st.titleVi : st.titleEn}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'vi' ? st.descVi : st.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Digital Warranty Card Simulation Plate */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 shadow-lg text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0052CC]">
                  THẺ BẢO HÀNH ĐIỆN TỬ ĐỊNH DANH TOÀN CẦU
                </span>
              </div>

              <h4 className="font-heading font-black text-xl sm:text-2xl text-slate-900">
                Cam Kết Bảo Hành Cấy Ghép Implant Trọn Đời
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                Mỗi trụ Implant và mão sứ tại SmileCare Paris đều có mã định danh QR Code độc lập, tra cứu trực tiếp trên hệ thống hãng sản xuất toàn cầu (Pháp, Thụy Sĩ, Hoa Kỳ).
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-[11px] font-mono text-slate-700">
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-400 block text-[9px]">TRỤ IMPLANT:</span>
                  <span className="font-bold text-[#0052CC]">Straumann / Anthogyr</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-400 block text-[9px]">SỨ VENEER:</span>
                  <span className="font-bold text-[#0052CC]">Emax Press Nano 5S</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-400 block text-[9px]">THỜI HẠN:</span>
                  <span className="font-bold text-emerald-700">Bảo Hành Trọn Đời</span>
                </div>
              </div>
            </div>

            {/* QR Mockup */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
              <div className="w-28 h-28 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-2 relative group cursor-pointer">
                <QrCode className="w-full h-full text-slate-800" />
                {isQrVerified && (
                  <div className="absolute inset-0 bg-emerald-600/90 text-white flex flex-col items-center justify-center rounded-xl p-2 text-[10px] font-bold animate-fadeIn">
                    <CheckCircle2 className="w-6 h-6 mb-1 text-white" />
                    <span>Xác Thực Chính Hãng 100%</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsQrVerified(!isQrVerified)}
                className="text-[11px] font-mono font-bold text-[#0052CC] hover:underline cursor-pointer"
              >
                {isQrVerified ? 'Xem lại mã QR' : 'Bấm quét thử mã xác thực'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

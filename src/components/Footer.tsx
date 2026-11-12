import React from 'react';
import { 
  Smile, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  ArrowUp,
  Tag,
  MessageCircle,
  Calendar
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface FooterProps {
  onOpenOrderModal: () => void;
  onOpenDiscountModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal, onOpenDiscountModal }) => {
  const { lang } = useThemeLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F0F7FF] text-slate-700 pt-16 pb-24 md:pb-12 border-t border-sky-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-sky-200/60">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0052CC] to-[#0284C7] p-2 flex items-center justify-center text-white shadow-sm">
                <Smile className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading font-black text-2xl tracking-tight text-[#0052CC]">
                  SmileCare
                </span>
                <span className="ml-2 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-red-600 text-white">
                  PARIS DENTAL
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Hệ thống viện nha khoa thẩm mỹ tiêu chuẩn Pháp hàng đầu tại Việt Nam. Tiên phong ứng dụng công nghệ Dán sứ Veneer Nano 5S, Trồng răng Implant 4S và Niềng răng 3D Speed không đau, bảo tồn răng gốc tối đa.
            </p>

            <div className="p-3.5 rounded-2xl bg-white border border-sky-200 text-xs text-slate-600 space-y-1 shadow-2xs">
              <div className="font-bold text-[#0052CC] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Giấy phép hoạt động khám chữa bệnh:</span>
              </div>
              <div>Số: <strong>08842/BYT - CCHN</strong> do Bộ Y Tế cấp phép.</div>
              <div>Chịu trách nhiệm chuyên môn: PGS.TS.BSCKII Trần Quang Dũng.</div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-slate-900">
              Dịch Vụ Nổi Bật
            </h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><a href="#before-after" className="hover:text-[#0052CC] transition-colors">Dán Sứ Veneer Nano 5S</a></li>
              <li><a href="#sterile-protocol" className="hover:text-[#0052CC] transition-colors">Cấy Ghép Implant 4S Pháp</a></li>
              <li><a href="#smile-survey" className="hover:text-[#0052CC] transition-colors">Niềng Răng 3D Speed</a></li>
              <li><a href="#before-after" className="hover:text-[#0052CC] transition-colors">Tẩy Trắng Răng WhiteMax</a></li>
              <li><a href="#pricing-matrix" className="hover:text-[#0052CC] transition-colors">Bảng Giá Viện Phí 2026</a></li>
            </ul>
          </div>

          {/* Branches (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-slate-900">
              Hệ Thống 15+ Cơ Sở
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>Hà Nội:</strong> 188 Bà Triệu & 110 Thái Thịnh</span>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>TP.HCM:</strong> 86 Nguyễn Trãi, Q.1 & 84A Bà Huyện Thanh Quan, Q.3</span>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>Đà Nẵng:</strong> 261-263 Bạch Đằng, Q. Hải Châu</span>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>Hải Phòng:</strong> 386 Tô Hiệu, Q. Lê Chân</span>
              </li>
            </ul>
          </div>

          {/* Hotline & Consultation CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-slate-900">
              Tổng Đài Tư Vấn 24/7
            </h4>
            <div className="p-4 rounded-2xl bg-white border border-sky-200 text-slate-800 space-y-2 shadow-sm">
              <div className="text-[10px] uppercase font-bold text-slate-500">Hotline Cấp Cứu Miễn Phí</div>
              <div className="font-mono font-black text-2xl text-[#0052CC]">1900 6900</div>
              <div className="text-[11px] text-slate-500">Khám tất cả các ngày trong tuần (8:00 - 18:30)</div>
            </div>

            <button
              onClick={onOpenOrderModal}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0284C7] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md hover:from-[#0040A8] hover:to-[#0369A1] transition-all"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Đặt Lịch Khám Ưu Tiên</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 SmileCare Paris Dental Hospital. Toàn bộ bản quyền được bảo hộ.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#0052CC] font-bold hover:underline cursor-pointer"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Sticky Mobile Conversion Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-sky-200 p-2.5 flex items-center gap-2 shadow-lg">
        <a
          href="tel:19006900"
          className="flex-1 py-2.5 rounded-xl border border-sky-200 bg-sky-50 text-sky-900 text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-red-600" />
          <span>Gọi 1900 6900</span>
        </a>

        <button
          onClick={onOpenOrderModal}
          className="flex-[1.5] py-2.5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0284C7] text-white text-xs font-bold uppercase flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Báo Giá Từ 2,5tr</span>
        </button>
      </div>
    </footer>
  );
};

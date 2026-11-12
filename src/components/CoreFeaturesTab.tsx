import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Gift, 
  Sparkles, 
  ExternalLink, 
  Code2, 
  Tag, 
  Clock, 
  ShieldCheck, 
  Activity, 
  Images, 
  Database,
  X,
  Stethoscope,
  Smile,
  Layers
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface CoreFeaturesTabProps {
  onOpenOrderModal: () => void;
  onOpenDiscountModal: () => void;
}

export const CoreFeaturesTab: React.FC<CoreFeaturesTabProps> = ({ 
  onOpenOrderModal, 
  onOpenDiscountModal 
}) => {
  const { theme, lang } = useThemeLanguage();
  const [activeTab, setActiveTab] = useState<'demo' | 'features' | 'architecture'>('features');

  return (
    <section id="core-tabs" className="py-12 sm:py-20 relative bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Modal-style Frame matching User's Uploaded Screenshot (In Bright White Medical Style) */}
        <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 border border-sky-100 bg-white shadow-xl transition-all duration-300">
          {/* Top Row Badges & Close Icon */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-sky-100 text-[#0052CC] border border-sky-200">
                LANDING • Y TẾ & THẨM MỸ PHÁP
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                24 - 48 giờ
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-amber-900 bg-amber-50 border border-amber-200 flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5 text-amber-600" />
                Tặng Domain + Server 1 Năm
              </span>
            </div>

            <button 
              className="p-2 rounded-full border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Close Preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Title & Subtitle */}
          <div className="text-left pt-6 pb-4 space-y-2">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              SmileCare Paris – Nha Khoa Thẩm Mỹ & Cấy Ghép Implant Tiêu Chuẩn Pháp
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
              Giao diện phòng khám nha khoa thẩm mỹ chuẩn Pháp, bảng giá minh bạch & phân tích tình trạng răng bằng công nghệ 3D
            </p>
          </div>

          {/* 3 Main Switcher Tabs */}
          <div className="flex items-center gap-8 border-b border-slate-100 mt-4 text-xs sm:text-sm font-bold tracking-wide">
            <button
              onClick={() => setActiveTab('demo')}
              className={`pb-3 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'demo'
                  ? 'border-b-2 border-[#0052CC] text-[#0052CC] font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Images className="w-4 h-4" />
              <span>Hình ảnh Demo & Trực quan (3)</span>
            </button>

            <button
              onClick={() => setActiveTab('features')}
              className={`pb-3 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'features'
                  ? 'border-b-2 border-[#0052CC] text-[#0052CC] font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Nghiệp vụ & Tính năng</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-3 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'architecture'
                  ? 'border-b-2 border-[#0052CC] text-[#0052CC] font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Kiến trúc & Bảo mật</span>
            </button>
          </div>

          {/* Tab 1: Demo & Visuals */}
          {activeTab === 'demo' && (
            <div className="pt-8 space-y-6 text-left animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-3 space-y-2">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80" alt="Clinic Interior" className="w-full h-full object-cover" />
                  </div>
                  <div className="font-heading font-bold text-xs text-slate-900">Không Gian Phòng Khám Tiêu Chuẩn Pháp</div>
                  <p className="text-[11px] text-slate-500">Môi trường điều trị vô trùng tuyệt đối, riêng tư 1:1 theo tiêu chuẩn y khoa châu Âu.</p>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-3 space-y-2">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" alt="CT Cone Beam" className="w-full h-full object-cover" />
                  </div>
                  <div className="font-heading font-bold text-xs text-slate-900">Máy Chụp CT Cone Beam 3D Thế Hệ Mới</div>
                  <p className="text-[11px] text-slate-500">Khảo sát cấu trúc xương hàm 3D sắc nét chỉ trong 5 giây, an toàn bức xạ tối đa.</p>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-3 space-y-2">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" alt="Smile Transformation" className="w-full h-full object-cover" />
                  </div>
                  <div className="font-heading font-bold text-xs text-slate-900">Labo Răng Sứ Độc Quyền Công Nghệ Nano 5S</div>
                  <p className="text-[11px] text-slate-500">Chế tác răng sứ chính xác micron, tạo hình rìa cắn tự nhiên và thấu quang tinh tế.</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Core Features (Primary Focus - Exact Match to Screenshot) */}
          {activeTab === 'features' && (
            <div className="pt-6 space-y-6 text-left animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                  Quy trình & Tính năng cốt lõi đã hoàn thiện:
                </h3>
                <span className="text-[11px] font-mono text-emerald-700 font-bold hidden sm:inline">
                  ✓ 100% Chuẩn Y Khoa Pháp
                </span>
              </div>

              {/* 4 Core Features Cards (2x2 Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Feature Card 1 */}
                <a 
                  href="#smile-survey"
                  className="p-5 rounded-2xl border border-sky-100 bg-[#F0F7FF] hover:border-sky-300 hover:bg-sky-50/80 transition-all cursor-pointer flex items-start gap-3.5 group shadow-xs"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-sky-200 flex items-center justify-center shrink-0 text-[#0052CC]">
                    <CheckCircle2 className="w-4 h-4 text-[#0052CC]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0052CC] leading-relaxed">
                      Bộ công cụ khảo sát tình trạng răng nhanh giúp sàng lọc nhu cầu khách trước khi tư vấn
                    </h4>
                    <p className="text-[11px] text-slate-600">
                      Sàng lọc thông minh theo triệu chứng răng, gợi ý phác đồ chuyên biệt và mức chi phí sơ bộ trong 60 giây.
                    </p>
                    <span className="inline-block text-[10px] text-[#0052CC] font-mono font-bold pt-1">
                      Trải nghiệm khảo sát AI ngay →
                    </span>
                  </div>
                </a>

                {/* Feature Card 2 */}
                <a 
                  href="#before-after"
                  className="p-5 rounded-2xl border border-sky-100 bg-[#F0F7FF] hover:border-sky-300 hover:bg-sky-50/80 transition-all cursor-pointer flex items-start gap-3.5 group shadow-xs"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-sky-200 flex items-center justify-center shrink-0 text-[#0052CC]">
                    <CheckCircle2 className="w-4 h-4 text-[#0052CC]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0052CC] leading-relaxed">
                      Thư viện ca lâm sàng Trước & Sau (Before/After) tương tác trượt ảnh trực quan
                    </h4>
                    <p className="text-[11px] text-slate-600">
                      Thanh trượt so sánh phân giải cao, minh chứng kết quả thực tế từ Dán sứ Veneer, Cấy ghép Implant đến Invisalign.
                    </p>
                    <span className="inline-block text-[10px] text-[#0052CC] font-mono font-bold pt-1">
                      Xem thư viện lâm sàng →
                    </span>
                  </div>
                </a>

                {/* Feature Card 3 */}
                <a 
                  href="#sterile-protocol"
                  className="p-5 rounded-2xl border border-sky-100 bg-[#F0F7FF] hover:border-sky-300 hover:bg-sky-50/80 transition-all cursor-pointer flex items-start gap-3.5 group shadow-xs"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-sky-200 flex items-center justify-center shrink-0 text-[#0052CC]">
                    <CheckCircle2 className="w-4 h-4 text-[#0052CC]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0052CC] leading-relaxed">
                      Cam kết vô trùng chuẩn Bộ Y Tế và bảo hành cấy ghép Implant trọn đời
                    </h4>
                    <p className="text-[11px] text-slate-600">
                      Quy trình tiệt trùng 6 bước khép kín Autoclave Class B, thẻ bảo hành điện tử chính hãng Pháp - Thụy Sĩ định danh toàn cầu.
                    </p>
                    <span className="inline-block text-[10px] text-[#0052CC] font-mono font-bold pt-1">
                      Kiểm tra quy trình vô trùng →
                    </span>
                  </div>
                </a>

                {/* Feature Card 4 */}
                <a 
                  href="#crm-sync"
                  className="p-5 rounded-2xl border border-sky-100 bg-[#F0F7FF] hover:border-sky-300 hover:bg-sky-50/80 transition-all cursor-pointer flex items-start gap-3.5 group shadow-xs"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-sky-200 flex items-center justify-center shrink-0 text-[#0052CC]">
                    <CheckCircle2 className="w-4 h-4 text-[#0052CC]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0052CC] leading-relaxed">
                      Đồng bộ thông tin đăng ký khám thẳng vào Google Sheets và nhóm Zalo bác sĩ trực
                    </h4>
                    <p className="text-[11px] text-slate-600">
                      Tự động hóa webhook gửi thông tin đặt lịch về Google Sheets CRM và bắn thông báo tức thì đến Zalo bác sĩ trong 3 giây.
                    </p>
                    <span className="inline-block text-[10px] text-[#0052CC] font-mono font-bold pt-1">
                      Mô phỏng đồng bộ Zalo →
                    </span>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Tab 3: Architecture & Security */}
          {activeTab === 'architecture' && (
            <div className="pt-6 space-y-4 text-left animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 space-y-1">
                  <div className="text-[#0052CC] font-mono font-bold text-xs uppercase">Bảo Mật Dữ Liệu Bệnh Án</div>
                  <p className="text-[11px] text-slate-600">Chuẩn mã hóa SSL/TLS 256-bit, tuân thủ tiêu chuẩn an toàn thông tin y tế HIPAA & ISO 27001.</p>
                </div>
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 space-y-1">
                  <div className="text-[#0052CC] font-mono font-bold text-xs uppercase">Tốc Độ Tải Siêu Tốc</div>
                  <p className="text-[11px] text-slate-600">Điểm Google PageSpeed 99/100, Core Web Vitals xanh toàn diện, tải trang dưới 0.3s.</p>
                </div>
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 space-y-1">
                  <div className="text-[#0052CC] font-mono font-bold text-xs uppercase">Tự Động Hóa CRM & Zalo</div>
                  <p className="text-[11px] text-slate-600">Kết nối API Google Sheets, Zalo OA ZNS, Telegram bot báo ca mổ không mất phí phụ trội.</p>
                </div>
              </div>
            </div>
          )}

          {/* Emerald Green Gift Box */}
          <div className="mt-8 rounded-2xl p-5 border border-emerald-200 bg-emerald-50 text-left relative overflow-hidden">
            <div className="flex items-center gap-2 text-emerald-800 font-heading font-black text-xs sm:text-sm tracking-wide mb-3">
              <Gift className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>GÓI QUÀ TẶNG KÈM THEO DỰ ÁN (MIỄN PHÍ 100%)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tặng Tên miền .com + Cloud Server 1 năm</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bảo hành 12 tháng bao trọn gói</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bàn giao 100% Full Source Code</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar (Chi phí trọn gói & CTAs) */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Price Box */}
            <div className="flex items-baseline gap-2 text-left self-start md:self-center">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                CHI PHÍ TRỌN GÓI:
              </span>
              <span className="font-heading font-black text-3xl sm:text-4xl text-[#0052CC] tracking-tight">
                Từ 2,5tr
              </span>
            </div>

            {/* Buttons Cluster */}
            <div className="flex items-center flex-wrap gap-2.5 w-full md:w-auto justify-end">
              <a
                href="#before-after"
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5 text-sky-600" />
                <span>Xem Live Demo</span>
              </a>

              <a
                href="#crm-sync"
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Code2 className="w-3.5 h-3.5 text-slate-600" />
                <span>Source Code</span>
              </a>

              <button
                onClick={onOpenDiscountModal}
                className="px-4 py-2.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100 text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
              >
                <Tag className="w-3.5 h-3.5 text-amber-600" />
                <span>Lấy Giá Rẻ (Giảm thêm 20%)</span>
              </button>

              <button
                onClick={onOpenOrderModal}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0284C7] hover:from-[#0040A8] hover:to-[#0369A1] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-sky-600/20 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Đặt Làm Bản Này / Nhận Báo Giá →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

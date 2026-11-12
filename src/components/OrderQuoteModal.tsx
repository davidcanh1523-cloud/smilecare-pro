import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Gift, 
  Phone, 
  User, 
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface OrderQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  hasDiscount?: boolean;
}

export const OrderQuoteModal: React.FC<OrderQuoteModalProps> = ({ 
  isOpen, 
  onClose,
  hasDiscount = false 
}) => {
  const { lang } = useThemeLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [clinicScale, setClinicScale] = useState('Phòng khám Nha Khoa Tiêu Chuẩn (2 - 5 ghế)');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSuccess(true);
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0052CC', '#0284C7', '#10B981']
      });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 text-slate-900 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header Badges */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-sky-100 text-[#0052CC] border border-sky-200">
                ⚡ Triển khai trong 24 - 48 giờ
              </span>
              {hasDiscount && (
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300">
                  -20% Voucher Áp Dụng
                </span>
              )}
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-2 text-left">
              Đặt Làm Bản Này / Nhận Báo Giá
            </h3>
            <p className="text-xs text-slate-600 mb-6 text-left">
              Sở hữu ngay landing page & hệ thống nha khoa thẩm mỹ tiêu chuẩn Pháp <strong>SmileCare Paris</strong> cho nha khoa của bạn với chi phí trọn gói chỉ <strong className="text-[#0052CC] font-mono text-sm">{hasDiscount ? '2.000.000 đ' : 'từ 2.500.000 đ'}</strong>.
            </p>

            {/* Gift Box Reminder */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs mb-6 space-y-1.5 text-left">
              <div className="font-bold flex items-center gap-1.5 uppercase text-[11px] text-emerald-800">
                <Gift className="w-4 h-4 text-emerald-600" />
                Quà tặng kèm theo dự án (Miễn phí 100%):
              </div>
              <div className="grid grid-cols-1 gap-1 text-[11px] text-slate-700">
                <span>✓ Tặng Tên miền .com + Cloud Server tốc độ cao 1 năm</span>
                <span>✓ Bảo hành trọn gói kỹ thuật 12 tháng</span>
                <span>✓ Bàn giao 100% Full Source Code độc lập</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Họ và tên của bạn *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Bác sĩ Nguyễn Hoàng Quân"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052CC]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Số điện thoại nhận tư vấn & bản demo *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052CC]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tên phòng khám nha khoa / Thẩm mỹ viện
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Ví dụ: Nha Khoa Paris Dental / Elite Dental"
                    value={clinicName}
                    onChange={(e) => setClinicName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052CC]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Quy mô cơ sở y tế
                </label>
                <select
                  value={clinicScale}
                  onChange={(e) => setClinicScale(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0052CC]"
                >
                  <option value="Phòng khám Nha Khoa Tiêu Chuẩn (2 - 5 ghế)">Phòng khám Nha Khoa Tiêu Chuẩn (2 - 5 ghế)</option>
                  <option value="Bệnh viện Răng Hàm Mặt Chuyên Sâu (> 10 ghế)">Bệnh viện Răng Hàm Mặt Chuyên Sâu (&gt; 10 ghế)</option>
                  <option value="Chuỗi Hệ Thống Nha Khoa Thẩm Mỹ Toàn Quốc">Chuỗi Hệ Thống Nha Khoa Thẩm Mỹ Toàn Quốc</option>
                  <option value="Bác sĩ Răng Hàm Mặt Mở Phòng Mạch Riêng">Bác sĩ Răng Hàm Mặt Mở Phòng Mạch Riêng</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0284C7] hover:from-[#0040A8] hover:to-[#0369A1] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95 transition-all mt-6"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Gửi Yêu Cầu & Kích Hoạt Triển Khai Ngay</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-heading font-black text-2xl text-slate-900">
                Tiếp Nhận Yêu Cầu Thành Công!
              </h3>
              <p className="text-xs text-slate-600">
                Kỹ sư trưởng dự án SmileCare Paris sẽ liên hệ với anh/chị <strong className="text-[#0052CC]">{name}</strong> ({phone}) trong vòng 15 phút để cấu hình tên miền và kích hoạt hệ thống.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1 text-left">
              <div>Thương hiệu: <span className="font-bold text-slate-900">{clinicName || 'SmileCare Paris Dental'}</span></div>
              <div>Quy mô: <span className="text-[#0052CC] font-semibold">{clinicScale}</span></div>
              <div>Mã yêu cầu: <span className="font-mono text-emerald-700 font-bold">#PARIS-{Math.floor(1000 + Math.random() * 9000)}</span></div>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#0052CC] text-white font-bold text-xs uppercase cursor-pointer hover:bg-[#0040A8]"
            >
              Đóng Cửa Sổ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

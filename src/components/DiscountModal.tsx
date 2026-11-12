import React, { useState } from 'react';
import { X, Tag, Sparkles, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyDiscount: () => void;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({
  isOpen,
  onClose,
  onApplyDiscount
}) => {
  const [copied, setCopied] = useState(false);
  const voucherCode = 'PARIS20';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopied(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0052CC', '#0284C7', '#10B981']
      });
    } catch {}
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 text-slate-900 relative shadow-2xl text-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 text-amber-600 flex items-center justify-center mx-auto mb-4">
          <Tag className="w-7 h-7" />
        </div>

        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0052CC] block mb-1">
          ƯU ĐÃI ĐỘC QUYỀN TIÊU CHUẨN PHÁP
        </span>

        <h3 className="font-heading font-black text-2xl text-slate-900 mb-2">
          Voucher Giảm Thêm 20% Chi Phí
        </h3>

        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          Áp dụng ngay cho phòng khám đặt làm mẫu landing page <strong>SmileCare Paris</strong> trong tuần này. Tiết kiệm ngay <strong className="text-[#0052CC]">500.000 đ</strong> (Chỉ còn 2.000.000 đ trọn gói).
        </p>

        {/* Voucher Code Box */}
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-dashed border-amber-400 mb-6 flex items-center justify-between">
          <div className="text-left">
            <span className="text-[10px] uppercase font-mono text-slate-500 block">Mã Giảm Giá</span>
            <span className="font-mono text-xl font-black text-amber-700 tracking-wider">
              {voucherCode}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Đã Sao Chép' : 'Sao Chép'}</span>
          </button>
        </div>

        <button
          onClick={() => {
            onClose();
            onApplyDiscount();
          }}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0284C7] hover:from-[#0040A8] hover:to-[#0369A1] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Áp Dụng Mã & Đặt Làm Bản Này →</span>
        </button>
      </div>
    </div>
  );
};

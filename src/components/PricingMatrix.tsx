import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Tag, 
  HelpCircle 
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface PricingItem {
  id: string;
  name: string;
  origin: string;
  warranty: string;
  price: string;
  originalPrice: string;
  isPopular?: boolean;
  features: string[];
}

export const PricingMatrix: React.FC<{ onOpenOrderModal: () => void }> = ({ onOpenOrderModal }) => {
  const { lang } = useThemeLanguage();
  const [category, setCategory] = useState<'implant' | 'veneer' | 'invisalign'>('veneer');

  const implantList: PricingItem[] = [
    {
      id: 'dentium',
      name: 'Implant Dentium SuperLine',
      origin: 'Hàn Quốc (Korea)',
      warranty: 'Bảo hành 10 năm',
      price: '14.500.000 đ',
      originalPrice: '18.000.000 đ',
      features: [
        'Trụ Titanium độ tinh khiết cao',
        'Tích hợp xương sau 6 - 8 tuần',
        'Miễn phí chụp phim CT Cone Beam 3D',
        'Bảo hành chính hãng 10 năm'
      ]
    },
    {
      id: 'anthogyr',
      name: 'Implant Anthogyr Axiom Tiêu Chuẩn Pháp',
      origin: 'Pháp (France)',
      warranty: 'Bảo hành TRỌN ĐỜI',
      price: '22.000.000 đ',
      originalPrice: '28.000.000 đ',
      isPopular: true,
      features: [
        'Trụ Implant bán chạy số 1 tại Pháp',
        'Tích hợp xương sinh học BCP siêu vi',
        'Cấy ghép tức thì chịu lực ăn nhai sau 24h',
        'Thẻ bảo hành định danh quốc tế trọn đời'
      ]
    },
    {
      id: 'straumann',
      name: 'Implant Straumann SLA Active',
      origin: 'Thụy Sĩ (Switzerland)',
      warranty: 'Bảo hành TRỌN ĐỜI TOÀN CẦU',
      price: '32.500.000 đ',
      originalPrice: '39.000.000 đ',
      features: [
        'Bề mặt ái nước SLActive siêu việt',
        'Rút ngắn thời gian lành thương chỉ 3 tuần',
        'Tốt nhất cho người cao tuổi & tiêu xương',
        'Bảo hành toàn cầu trên 100 quốc gia'
      ]
    }
  ];

  const veneerList: PricingItem[] = [
    {
      id: 'zirconia',
      name: 'Răng Sứ Toàn Sứ Zirconia DDBio',
      origin: 'Đức (Germany)',
      warranty: 'Bảo hành 10 năm',
      price: '3.500.000 đ / răng',
      originalPrice: '4.500.000 đ',
      features: [
        'Khung sườn sứ Zirconia chịu lực 1200 MPa',
        'Không đen viền nướu theo thời gian',
        'Ăn nhai cứng cáp bền bỉ',
        'Bảo hành chính hãng 10 năm'
      ]
    },
    {
      id: 'nano-5s',
      name: 'Dán Sứ Veneer Nano 5S Tiêu Chuẩn Pháp',
      origin: 'Pháp - Thụy Sĩ (Ivoclar Vivadent)',
      warranty: 'Bảo hành 15 năm',
      price: '6.500.000 đ / răng',
      originalPrice: '8.500.000 đ',
      isPopular: true,
      features: [
        'Độ mỏng siêu vi 0.2mm - Không mài nhỏ răng',
        'Bảo tồn 100% tủy răng thật khỏe mạnh',
        'Độ trong mờ và phát huỳnh quang tự nhiên',
        'Thiết kế nụ cười DSD chuẩn tỷ lệ vàng'
      ]
    },
    {
      id: 'diamond-crown',
      name: 'Răng Sứ Kim Cương HT Smile Diamond',
      origin: 'Hoa Kỳ (USA)',
      warranty: 'Bảo hành 15 năm',
      price: '8.000.000 đ / răng',
      originalPrice: '11.000.000 đ',
      features: [
        'Độ thấu quang tuyệt mỹ như ngọc trai thật',
        'Khả năng chịu lực uốn cực đại 1400 MPa',
        'Kháng bám màu cà phê, rượu vang 100%',
        'Thẻ bảo hành chính hãng định danh'
      ]
    }
  ];

  const invisalignList: PricingItem[] = [
    {
      id: 'express',
      name: 'Niềng Răng Invisalign Express (7 khay)',
      origin: 'Align Technology (Hoa Kỳ)',
      warranty: 'Bảo hành kết quả',
      price: '35.000.000 đ',
      originalPrice: '45.000.000 đ',
      features: [
        'Dành cho trường hợp răng thưa, lệch nhẹ',
        'Thời gian điều trị siêu tốc 3 - 5 tháng',
        'Khay niềng vô hình tháo lắp tự do',
        'Quét dấu răng 3D iTero 5D Element'
      ]
    },
    {
      id: 'comprehensive',
      name: 'Niềng Răng 3D Speed Comprehensive',
      origin: 'Align Technology (Hoa Kỳ)',
      warranty: 'Bảo hành trọn vẹn 5 năm',
      price: '85.000.000 đ',
      originalPrice: '110.000.000 đ',
      isPopular: true,
      features: [
        'Số lượng khay không giới hạn đến khi đẹp hoàn hảo',
        'Giải quyết triệt để hô, móm, khấp khểnh nặng',
        'Xem trước kết quả nụ cười qua ClinCheck 3D',
        'Tặng gói tẩy trắng răng công nghệ Pháp 3.5tr'
      ]
    }
  ];

  const currentList = category === 'implant' ? implantList : category === 'veneer' ? veneerList : invisalignList;

  return (
    <section id="pricing-matrix" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider mb-4 border border-sky-200 bg-sky-50 text-[#0052CC]">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>BẢNG GIÁ NIÊM YẾT MINH BẠCH 2026 • KHÔNG PHÁT SINH</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">
            {lang === 'vi' ? 'Bảng Giá Dịch Vụ Nha Khoa Thẩm Mỹ' : 'Transparent Dental Aesthetics Pricing'}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            {lang === 'vi'
              ? 'Chi phí trọn gói minh bạch, cam kết không phát sinh. Hỗ trợ trả góp lãi suất 0% liên kết 25 ngân hàng lớn.'
              : 'Transparent all-inclusive rates with zero hidden fees. 0% interest installment available across 25 major banks.'}
          </p>
        </div>

        {/* Category Switcher */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setCategory('veneer')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              category === 'veneer'
                ? 'bg-[#0052CC] text-white border-[#0052CC] shadow-md'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Răng Sứ & Veneer Nano 5S
          </button>

          <button
            onClick={() => setCategory('implant')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              category === 'implant'
                ? 'bg-[#0052CC] text-white border-[#0052CC] shadow-md'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Cấy Ghép Implant 4S
          </button>

          <button
            onClick={() => setCategory('invisalign')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              category === 'invisalign'
                ? 'bg-[#0052CC] text-white border-[#0052CC] shadow-md'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Niềng Răng 3D Speed
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {currentList.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 sm:p-8 border flex flex-col justify-between text-left transition-all relative overflow-hidden ${
                item.isPopular
                  ? 'border-[#0052CC] bg-[#F0F7FF] shadow-xl ring-2 ring-[#0052CC]/40 scale-105 z-10'
                  : 'border-slate-200 bg-white shadow-md hover:border-sky-300'
              }`}
            >
              {item.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0052CC] to-[#0284C7] text-white text-[10px] font-mono font-extrabold uppercase px-4 py-1 rounded-bl-xl shadow-xs">
                  Bác Sĩ Khuyên Dùng
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-sky-700 uppercase tracking-wider block">
                    Xuất xứ: {item.origin}
                  </span>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 mt-1">
                    {item.name}
                  </h3>
                  <span className="inline-block text-[11px] font-bold text-emerald-700 mt-1">
                    ✓ {item.warranty}
                  </span>
                </div>

                {/* Price Display */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-black text-2xl sm:text-3xl text-[#0052CC] tracking-tight">
                      {item.price}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 line-through">
                    Giá gốc: {item.originalPrice}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-[#0052CC] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={onOpenOrderModal}
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider cursor-pointer shadow-sm transition-all ${
                    item.isPopular
                      ? 'bg-gradient-to-r from-[#0052CC] to-[#0284C7] text-white hover:from-[#0040A8] hover:to-[#0369A1]'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  Đăng Ký Khám & Giữ Ưu Đãi
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Installment Note */}
        <div className="mt-12 p-4 rounded-2xl bg-sky-50 border border-sky-200 max-w-3xl mx-auto flex items-center justify-between flex-wrap gap-3 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Hỗ trợ trả góp 0% qua thẻ tín dụng: Chỉ từ <strong>499.000 đ/tháng</strong>, duyệt hồ sơ trong 5 phút.</span>
          </div>
          <button
            onClick={onOpenOrderModal}
            className="font-bold text-[#0052CC] hover:underline cursor-pointer"
          >
            Tư vấn trả góp →
          </button>
        </div>
      </div>
    </section>
  );
};

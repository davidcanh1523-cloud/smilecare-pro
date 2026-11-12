import React, { useState } from 'react';
import { 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  User, 
  Phone, 
  ShieldCheck, 
  ArrowRight,
  Smile,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface SurveyQuestion {
  id: string;
  questionVi: string;
  questionEn: string;
  options: {
    id: string;
    labelVi: string;
    labelEn: string;
    descVi: string;
    descEn: string;
    icon: string;
  }[];
}

const surveyData: SurveyQuestion[] = [
  {
    id: 'issue',
    questionVi: 'Vấn đề hiện tại khiến bạn quan tâm nhất về răng miệng?',
    questionEn: 'What is your primary dental concern right now?',
    options: [
      {
        id: 'missing-teeth',
        labelVi: 'Mất 1 hoặc nhiều răng',
        labelEn: 'Missing 1 or Multiple Teeth',
        descVi: 'Khó khăn khi ăn nhai, tiêu xương hàm, muốn cấy ghép Implant vĩnh viễn.',
        descEn: 'Difficulty chewing, bone loss, seeking lifetime dental implant restoration.',
        icon: '🦷'
      },
      {
        id: 'discolored',
        labelVi: 'Răng xỉn màu, ố vàng, hình thể xấu',
        labelEn: 'Discolored or Chipped Teeth',
        descVi: 'Nhiễm kháng sinh, mòn men, muốn bọc sứ Nano 5S hoặc dán sứ Veneer.',
        descEn: 'Tetracycline stain, enamel wear, seeking Nano 5S crowns or ultra-thin veneers.',
        icon: '✨'
      },
      {
        id: 'crooked',
        labelVi: 'Răng khấp khểnh, hô, móm, cắn hở',
        labelEn: 'Crowded, Misaligned, or Deep Bite',
        descVi: 'Sai khớp cắn, lệch đường cười, muốn niềng răng trong suốt 3D Speed.',
        descEn: 'Malocclusion, uneven smile arch, seeking invisible clear aligners.',
        icon: '📐'
      },
      {
        id: 'pain',
        labelVi: 'Răng sâu, đau nhức, viêm tủy, tụt nướu',
        labelEn: 'Toothache, Cavity, or Gum Recession',
        descVi: 'Cần điều trị nội nha êm ái, bọc bảo tồn răng thật tối đa chuẩn Pháp.',
        descEn: 'Requires painless endodontic therapy and tooth preservation.',
        icon: '🛡️'
      }
    ]
  },
  {
    id: 'urgency',
    questionVi: 'Thời gian bạn mong muốn hoàn thành nụ cười mới?',
    questionEn: 'What is your preferred treatment timeframe?',
    options: [
      {
        id: 'express',
        labelVi: 'Càng nhanh càng tốt (1 - 2 ngày)',
        labelEn: 'Express (1 - 2 Days)',
        descVi: 'Phục hình thẩm mỹ tức thì, kịp sự kiện hoặc công tác.',
        descEn: 'Immediate aesthetic restoration for upcoming travel or events.',
        icon: '⚡'
      },
      {
        id: 'standard',
        labelVi: 'Tiêu chuẩn y khoa (1 - 2 tuần)',
        labelEn: 'Medical Standard (1 - 2 Weeks)',
        descVi: 'Đảm bảo thời gian theo dõi mô nướu và tương thích sinh học hoàn hảo.',
        descEn: 'Allows optimal gingival tissue healing and biological integration.',
        icon: '📅'
      },
      {
        id: 'longterm',
        labelVi: 'Chỉnh nha theo lộ trình (6 - 18 tháng)',
        labelEn: 'Orthodontic Plan (6 - 18 Months)',
        descVi: 'Di chuyển chân răng sinh học tự nhiên, bảo tồn 100% răng gốc.',
        descEn: 'Natural biological tooth movement preserving 100% original roots.',
        icon: '🎯'
      }
    ]
  }
];

export const SmileDiagnosticSurvey: React.FC = () => {
  const { lang } = useThemeLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    issue: 'discolored',
    urgency: 'express'
  });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectOption = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    if (currentStep < surveyData.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0052CC', '#0284C7', '#10B981']
      });
    } catch {}
  };

  return (
    <section id="smile-survey" className="py-20 relative bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider mb-4 border border-sky-200 bg-sky-50 text-[#0052CC]">
            <Activity className="w-3.5 h-3.5 text-sky-600" />
            <span>TÍNH NĂNG CỐT LÕI 1 • BỘ CÔNG CỤ KHẢO SÁT RĂNG NHANH 60S</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">
            {lang === 'vi' ? 'Khảo Sát Tình Trạng Răng & Nhận Phác Đồ AI' : 'Instant 60s AI Smile & Dental Condition Assessment'}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            {lang === 'vi'
              ? 'Chỉ mất 60 giây trả lời 2 câu hỏi để hệ thống sàng lọc nhu cầu, phân tích tình trạng răng và gửi phác đồ chuyên khoa kèm dự toán chi phí minh bạch.'
              : 'Answer 2 quick diagnostic questions to pre-screen concerns, assess bone/enamel conditions, and receive customized clinical recommendations.'}
          </p>
        </div>

        {/* Survey Box */}
        <div className="rounded-3xl p-6 sm:p-10 border border-sky-100 bg-white shadow-xl max-w-4xl mx-auto">
          {!isSubmitted ? (
            <div className="space-y-8">
              {/* Progress Steps Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                    {currentStep + 1}/3
                  </span>
                  <div className="text-left">
                    <span className="text-[10px] font-mono uppercase text-[#0052CC] block font-extrabold">
                      BƯỚC {currentStep + 1}: {currentStep === 0 ? 'CHẨN ĐOÁN VẤN ĐỀ' : currentStep === 1 ? 'THỜI GIAN MONG MUỐN' : 'NHẬN KẾT QUẢ'}
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {currentStep < surveyData.length 
                        ? (lang === 'vi' ? surveyData[currentStep].questionVi : surveyData[currentStep].questionEn)
                        : (lang === 'vi' ? 'Nhập thông tin nhận phác đồ điều trị miễn phí' : 'Enter details to receive personalized treatment plan')}
                    </span>
                  </div>
                </div>

                <div className="flex gap-1.5">
                  {[0, 1, 2].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`w-8 h-2 rounded-full transition-all cursor-pointer ${
                        currentStep === idx 
                          ? 'bg-[#0052CC] w-12' 
                          : currentStep > idx 
                            ? 'bg-emerald-500' 
                            : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1 & 2 Options List */}
              {currentStep < surveyData.length && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {surveyData[currentStep].options.map((option) => {
                    const qId = surveyData[currentStep].id;
                    const isSelected = answers[qId] === option.id;
                    return (
                      <div
                        key={option.id}
                        onClick={() => handleSelectOption(qId, option.id)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer flex gap-4 text-left group ${
                          isSelected
                            ? 'border-[#0052CC] bg-sky-50 shadow-md ring-1 ring-[#0052CC] scale-[1.01]'
                            : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="text-3xl shrink-0 p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                          {option.icon}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-heading font-bold text-sm text-slate-900 group-hover:text-[#0052CC] transition-colors">
                              {lang === 'vi' ? option.labelVi : option.labelEn}
                            </h4>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-[#0052CC] shrink-0" />}
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {lang === 'vi' ? option.descVi : option.descEn}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Step 3: Information Input Form */}
              {currentStep === surveyData.length && (
                <form onSubmit={handleSubmit} className="space-y-5 text-left max-w-lg mx-auto">
                  <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-slate-700 space-y-1">
                    <div className="font-bold text-[#0052CC] flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      Phác đồ sơ bộ dành riêng cho bạn:
                    </div>
                    <div>• Tình trạng: <strong className="text-slate-900">Răng xỉn màu, cần thẩm mỹ răng sứ Nano 5S</strong></div>
                    <div>• Thời gian dự kiến: <strong className="text-emerald-700">Hoàn thiện trong 48 giờ (2 buổi)</strong></div>
                    <div>• Giảm thêm 20% chi phí khi đặt lịch qua AI hôm nay.</div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Họ và tên của bạn *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Ví dụ: Nguyễn Phương Thảo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Số điện thoại nhận kết quả & phác đồ (Zalo) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="Ví dụ: 0912 345 678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] shadow-2xs"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0284C7] hover:from-[#0040A8] hover:to-[#0369A1] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-sky-600/20 active:scale-95 transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>Xem Dự Toán Chi Phí & Nhận Phác Đồ Ngay</span>
                  </button>
                </form>
              )}

              {/* Bottom Step Nav */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-2xs"
                >
                  ← Quay lại
                </button>

                {currentStep < surveyData.length && (
                  <button
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="px-5 py-2 rounded-xl bg-[#0052CC] hover:bg-[#0040A8] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Tiếp tục</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results Display */
            <div className="py-8 space-y-6 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                  Phân Tích Nụ Cười Hoàn Tất!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Cảm ơn bạn <strong className="text-[#0052CC]">{name}</strong> ({phone}). Hệ thống AI đã phân tích tình trạng và gửi phác đồ chi tiết qua Zalo cho bạn.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F0F7FF] border border-sky-200 text-xs max-w-lg mx-auto text-left space-y-2 shadow-2xs">
                <div className="font-bold text-[#0052CC] uppercase text-[11px] flex items-center justify-between">
                  <span>Khuyến nghị phác đồ chuyên khoa Paris:</span>
                  <span className="text-emerald-700 font-mono font-bold">Mã HS: #PR-8892</span>
                </div>
                <div className="text-slate-800 font-semibold">• Phục hình Dán Sứ Veneer Nano 5S tiêu chuẩn Pháp (16 - 20 răng)</div>
                <div className="text-slate-600">• Bảo tồn 100% tủy răng tự nhiên, cam kết không mài nhỏ, không đau buốt.</div>
                <div className="text-slate-600">• Tặng kèm gói chụp phim CT Cone Beam 3D & mô phỏng nụ cười trị giá 2.500.000đ.</div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(0);
                }}
                className="px-6 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer shadow-xs"
              >
                Khảo sát lại từ đầu
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

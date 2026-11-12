import React, { useState } from 'react';
import { 
  Images, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  User, 
  MoveHorizontal
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface ClinicalCase {
  id: string;
  category: 'veneer' | 'implant' | 'invisalign' | 'whitening';
  titleVi: string;
  titleEn: string;
  patientVi: string;
  patientEn: string;
  beforeImg: string;
  afterImg: string;
  diagnosisVi: string;
  diagnosisEn: string;
  solutionVi: string;
  solutionEn: string;
  durationVi: string;
  durationEn: string;
  doctorVi: string;
  doctorEn: string;
  shadeChangeVi: string;
  shadeChangeEn: string;
}

const clinicalCases: ClinicalCase[] = [
  {
    id: 'case-veneer-1',
    category: 'veneer',
    titleVi: 'Phục Hình 16 Răng Sứ Veneer Nano 5S Chuẩn Tỷ Lệ Vàng Pháp',
    titleEn: '16 Ultra-Thin French Nano 5S Veneers with Digital Smile Design',
    patientVi: 'Chị Hoàng Lan (34 tuổi, Giám đốc truyền thông - Hà Nội)',
    patientEn: 'Ms. Hoang Lan (34, Media Director - Hanoi)',
    beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80',
    afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
    diagnosisVi: 'Răng xỉn màu do nhiễm kháng sinh Tetracycline độ 3, kẽ hở thưa răng cửa hàm trên, mòn cạnh cắn.',
    diagnosisEn: 'Severe Tetracycline discoloration, diastema between upper central incisors, incisal wear.',
    solutionVi: '16 Mặt dán sứ Veneer Nano 5S Tiêu chuẩn Pháp siêu mỏng 0.2mm, bảo tồn 100% tủy răng tự nhiên.',
    solutionEn: '16 French Nano 5S ultra-thin 0.2mm veneers, preserving 100% natural tooth pulp vitality.',
    durationVi: '2 buổi hẹn (Hoàn thành trong 48 giờ)',
    durationEn: '2 clinical appointments (Completed in 48 hours)',
    doctorVi: 'ThS. BS CKI Nguyễn Thị Thu Trang (Tu nghiệp Paris)',
    doctorEn: 'MSc. Dr. Nguyen Thi Thu Trang (Paris Fellow)',
    shadeChangeVi: 'Bật 6 tone từ A3.5 lên trắng trong tự nhiên BL1',
    shadeChangeEn: 'Lifted 6 shades from A3.5 to natural bleached BL1'
  },
  {
    id: 'case-implant-2',
    category: 'implant',
    titleVi: 'Cấy Ghép Implant 4S Phục Hồi Toàn Hàm All-on-4 Tiêu Chuẩn Pháp',
    titleEn: 'Full-Arch All-on-4 French 4S Dental Implant Restoration',
    patientVi: 'Bác Trần Đức Toàn (58 tuổi, Kiều bào Pháp - TP.HCM)',
    patientEn: 'Mr. Tran Duc Toan (58, French Overseas - HCMC)',
    beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    afterImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    diagnosisVi: 'Mất nhiều răng hàm dưới, tiêu xương diện rộng, không thể ăn nhai bình thường trong 5 năm.',
    diagnosisEn: 'Multiple missing mandibular teeth, severe alveolar bone resorption, unable to chew solids for 5 years.',
    solutionVi: 'Cấy 4 trụ Implant 4S máng định vị phẫu thuật 3D, gắn hàm tạm chịu lực tức thì sau 24h, bảo hành trọn đời.',
    solutionEn: '4 French 4S implants placed with 3D surgical guide, immediate loading temporary bridge in 24h.',
    durationVi: 'Phẫu thuật 45 phút • Lắp răng tức thì 24 giờ',
    durationEn: '45-minute surgery • Teeth in 24 hours',
    doctorVi: 'TS. BS CKII Trần Quang Dũng (Chuyên gia Implant 20 năm)',
    doctorEn: 'PhD. Dr. Tran Quang Dung (Senior Oral Surgeon)',
    shadeChangeVi: 'Khôi phục 100% lực nhai và thể tích xương mặt',
    shadeChangeEn: 'Restored 100% bite mastication and facial volume'
  },
  {
    id: 'case-invisalign-3',
    category: 'invisalign',
    titleVi: 'Niềng Răng Trong Suốt 3D Speed Điều Trị Khớp Cắn Sâu & Khấp Khểnh',
    titleEn: '3D Speed Clear Aligners Deep Bite & Crowding Correction',
    patientVi: 'Bạn Minh Anh (24 tuổi, Lập trình viên - Đà Nẵng)',
    patientEn: 'Ms. Minh Anh (24, Software Engineer - Da Nang)',
    beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80',
    afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
    diagnosisVi: 'Răng chen chúc hàm trên, cắn sâu 60%, lệch đường giữa mặt gây mất tự tin khi cười.',
    diagnosisEn: 'Severe upper arch crowding, 60% deep overbite, midline discrepancy.',
    solutionVi: 'Kế hoạch 28 khay niềng trong suốt 3D Speed ClinCheck, nhổ 0 răng gốc, rút ngắn 5 tháng.',
    solutionEn: '28-stage 3D Speed protocol, zero extractions, accelerated by 5 months.',
    durationVi: '14 tháng (Xem trước kết quả ClinCheck 3D)',
    durationEn: '14 months (Pre-visualized on 3D ClinCheck)',
    doctorVi: 'BS CKI Lê Hoàng Hải (Invisalign Diamond Apex Provider)',
    doctorEn: 'Dr. Le Hoang Hải (Invisalign Diamond Apex Provider)',
    shadeChangeVi: 'Khớp cắn chuẩn lồng múi loại 1, nụ cười chuẩn sao',
    shadeChangeEn: 'Achieved Class 1 ideal occlusion & Hollywood smile'
  }
];

export const BeforeAfterGallery: React.FC = () => {
  const { lang } = useThemeLanguage();
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const activeCase = clinicalCases[selectedCaseIndex];

  return (
    <section id="before-after" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider mb-4 border border-sky-200 bg-sky-50 text-[#0052CC]">
            <Images className="w-3.5 h-3.5 text-sky-600" />
            <span>TÍNH NĂNG CỐT LÕI 2 • THƯ VIỆN CA LÂM SÀNG TRƯỚC & SAU</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">
            {lang === 'vi' ? 'Minh Chứng Hiệu Quả Điều Trị Thực Tế' : 'Clinical Treatment Case Transformations'}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            {lang === 'vi'
              ? 'Tương tác kéo thanh trượt Before/After trực quan để so sánh hàm răng trước và sau khi được phục hình bằng công nghệ nha khoa kỹ thuật số.'
              : 'Drag the interactive split-slider to inspect genuine clinical restorations before and after digital dentistry interventions.'}
          </p>
        </div>

        {/* Case Selector Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10">
          {clinicalCases.map((c, index) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCaseIndex(index);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border flex items-center gap-2 ${
                selectedCaseIndex === index
                  ? 'bg-[#0052CC] text-white border-[#0052CC] shadow-md scale-105'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 shadow-2xs'
              }`}
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>{lang === 'vi' ? c.titleVi : c.titleEn}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Workspace */}
        <div className="rounded-3xl p-6 sm:p-10 border border-sky-100 bg-[#F8FAFC] shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Before/After Split Slider */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden select-none border border-slate-200 shadow-md">
                {/* AFTER Image (Bottom Layer) */}
                <img
                  src={activeCase.afterImg}
                  alt="After Treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-700 text-white border border-emerald-500 backdrop-blur-md z-10 shadow-sm">
                  SAU ĐIỀU TRỊ (AFTER)
                </span>

                {/* BEFORE Image (Top Clipped Layer) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeCase.beforeImg}
                    alt="Before Treatment"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-900/85 text-amber-300 border border-amber-500/40 backdrop-blur-md z-10 shadow-sm">
                    TRƯỚC ĐIỀU TRỊ (BEFORE)
                  </span>
                </div>

                {/* Divider Line & Drag Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize z-20 flex items-center justify-center"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#0052CC] text-white border-2 border-white flex items-center justify-center shadow-lg font-bold cursor-ew-resize">
                    <MoveHorizontal className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Invisible Range Input for Smooth Dragging */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                />
              </div>

              {/* Slider instruction */}
              <div className="pt-3 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>← Kéo sang trái để xem Trước</span>
                <span className="text-[#0052CC] font-bold">{sliderPosition}% / {100 - sliderPosition}%</span>
                <span>Kéo sang phải để xem Sau →</span>
              </div>
            </div>

            {/* Clinical Diagnostics Notes (Right Column) */}
            <div className="lg:col-span-5 text-left space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0052CC] block mb-1">
                  BỆNH ÁN LÂM SÀNG SỐ #{activeCase.id.toUpperCase()}
                </span>
                <h3 className="font-heading font-black text-xl sm:text-2xl leading-snug text-slate-900">
                  {lang === 'vi' ? activeCase.titleVi : activeCase.titleEn}
                </h3>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 text-xs shadow-2xs">
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <User className="w-3.5 h-3.5 text-[#0052CC]" />
                  <span>{lang === 'vi' ? activeCase.patientVi : activeCase.patientEn}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-mono font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'vi' ? activeCase.shadeChangeVi : activeCase.shadeChangeEn}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs leading-relaxed">
                <div>
                  <span className="text-slate-500 font-mono uppercase text-[11px] block font-bold">
                    Tình trạng chẩn đoán ban đầu:
                  </span>
                  <p className="text-slate-700 font-medium mt-0.5">
                    {lang === 'vi' ? activeCase.diagnosisVi : activeCase.diagnosisEn}
                  </p>
                </div>

                <div>
                  <span className="text-slate-500 font-mono uppercase text-[11px] block font-bold">
                    Phác đồ điều trị chuyên khoa:
                  </span>
                  <p className="text-slate-700 font-medium mt-0.5">
                    {lang === 'vi' ? activeCase.solutionVi : activeCase.solutionEn}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono uppercase block font-semibold">Thời gian:</span>
                    <span className="text-amber-700 font-bold">{lang === 'vi' ? activeCase.durationVi : activeCase.durationEn}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono uppercase block font-semibold">Bác sĩ phụ trách:</span>
                    <span className="text-[#0052CC] font-bold">{lang === 'vi' ? activeCase.doctorVi : activeCase.doctorEn}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#smile-survey"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0284C7] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md hover:from-[#0040A8] hover:to-[#0369A1] transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Khảo Sát Tình Trạng Răng Của Bạn →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

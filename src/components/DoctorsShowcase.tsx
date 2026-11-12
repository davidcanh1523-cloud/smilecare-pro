import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Stethoscope, 
  GraduationCap, 
  Calendar 
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface Doctor {
  name: string;
  roleVi: string;
  roleEn: string;
  exp: string;
  degreeVi: string;
  degreeEn: string;
  cases: string;
  img: string;
}

const doctors: Doctor[] = [
  {
    name: 'TS. BS CKII Trần Quang Dũng',
    roleVi: 'Giám Đốc Chuyên Môn Phẫu Thuật Implant',
    roleEn: 'Chief of Oral Implantology Surgery',
    exp: '20+ Năm Kinh Nghiệm',
    degreeVi: 'Tiến sĩ Răng Hàm Mặt, Tu nghiệp Cấy ghép Implant chuyên sâu tại Đại học Paris Descartes (Pháp).',
    degreeEn: 'PhD in Maxillofacial Surgery, Fellow in Oral Implantology at Paris Descartes University.',
    cases: '5.000+ Ca Implant thành công',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'ThS. BS CKI Nguyễn Thị Thu Trang',
    roleVi: 'Trưởng Khoa Thẩm Mỹ Nụ Cười & Dán Sứ DSD',
    roleEn: 'Head of Aesthetic Dentistry & Veneers',
    exp: '15+ Năm Kinh Nghiệm',
    degreeVi: 'Thạc sĩ Chuyên khoa Răng Hàm Mặt, Chứng chỉ Thiết kế nụ cười DSD Quốc tế, Thành viên Hiệp hội ADF Pháp.',
    degreeEn: 'MSc in Cosmetic Dentistry, Certified DSD Master, French Dental Association (ADF) Member.',
    cases: '4.200+ Nụ cười hoàn mỹ',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'BS CKI Lê Hoàng Hải',
    roleVi: 'Chuyên Gia Chỉnh Nha Trong Suốt Invisalign',
    roleEn: 'Invisalign Diamond Apex Specialist',
    exp: '12+ Năm Kinh Nghiệm',
    degreeVi: 'Bác sĩ Chuyên khoa I Chỉnh hình Răng Mặt, Diamond Apex Provider (Top 1% chuyên gia Invisalign Đông Nam Á).',
    degreeEn: 'Oral Orthodontics Specialist, Invisalign Diamond Apex Provider (Top 1% Southeast Asia).',
    cases: '2.800+ Ca chỉnh nha thành công',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80'
  }
];

export const DoctorsShowcase: React.FC = () => {
  const { lang } = useThemeLanguage();

  return (
    <section className="py-20 relative bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider mb-4 border border-sky-200 bg-sky-50 text-[#0052CC]">
            <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
            <span>HỘI ĐỒNG CHUYÊN MÔN TIÊU CHUẨN PHÁP • 100% BÁC SĨ CKI, CKII</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">
            {lang === 'vi' ? 'Đội Ngũ Bác Sĩ & Chuyên Gia Đầu Ngành' : 'Board of Certified Surgeons & Dental Masters'}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            {lang === 'vi'
              ? 'Trực tiếp thăm khám và điều trị bởi các chuyên gia tu nghiệp chuyên sâu tại Pháp, Thụy Sĩ và Hoa Kỳ, tận tâm đồng hành cùng nụ cười của bạn.'
              : 'Direct clinical treatments led by senior oral surgeons and fellows trained at top universities in France, Switzerland, and the USA.'}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-sky-100 bg-white shadow-xl overflow-hidden text-left hover:border-sky-300 transition-all group"
            >
              {/* Doctor Photo */}
              <div className="aspect-[4/3] overflow-hidden relative bg-slate-100">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-[#0052CC] border border-sky-200 shadow-sm backdrop-blur-md">
                  {doc.exp}
                </span>
              </div>

              {/* Bio Details */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="font-heading font-black text-lg text-slate-900 group-hover:text-[#0052CC] transition-colors">
                    {doc.name}
                  </h3>
                  <div className="text-xs font-bold text-sky-700 mt-0.5">
                    {lang === 'vi' ? doc.roleVi : doc.roleEn}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'vi' ? doc.degreeVi : doc.degreeEn}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {doc.cases}
                  </span>
                  <span className="text-amber-700 font-bold">Thành viên ADF</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

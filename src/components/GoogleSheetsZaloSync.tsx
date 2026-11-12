import React, { useState } from 'react';
import { 
  Zap, 
  CheckCircle2, 
  Smartphone, 
  Send, 
  RefreshCw, 
  Table, 
  ArrowRight,
  ShieldCheck,
  BellRing
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface SheetRow {
  time: string;
  id: string;
  name: string;
  phone: string;
  service: string;
  doctor: string;
  status: string;
}

export const GoogleSheetsZaloSync: React.FC = () => {
  const { lang } = useThemeLanguage();

  const [rows, setRows] = useState<SheetRow[]>([
    {
      time: '15:42',
      id: '#PR-4192',
      name: 'Trần Bảo Ngọc',
      phone: '0903 *** 128',
      service: 'Dán Sứ Nano 5S (16 Răng)',
      doctor: 'BS Thu Trang',
      status: 'Đã Tiếp Nhận'
    },
    {
      time: '14:15',
      id: '#PR-3882',
      name: 'Lê Hoàng Long',
      phone: '0988 *** 456',
      service: 'Implant 4S Tiêu Chuẩn Pháp',
      doctor: 'TS Quang Dũng',
      status: 'Đã Xếp Lịch'
    }
  ]);

  const [inputName, setInputName] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputService, setInputService] = useState('Dán Sứ Veneer Nano 5S');
  const [isSimulating, setIsSimulating] = useState(false);
  const [hasNewAlert, setHasNewAlert] = useState(false);

  const handleSimulateSync = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputName || !inputPhone) return;

    setIsSimulating(true);
    setHasNewAlert(false);

    setTimeout(() => {
      const newRow: SheetRow = {
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        id: `#PR-${Math.floor(1000 + Math.random() * 9000)}`,
        name: inputName,
        phone: inputPhone,
        service: inputService,
        doctor: 'BS Trực Paris',
        status: 'Mới Bắn Webhook'
      };

      setRows([newRow, ...rows]);
      setIsSimulating(false);
      setHasNewAlert(true);
    }, 800);
  };

  return (
    <section id="crm-sync" className="py-20 relative bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider mb-4 border border-sky-200 bg-sky-50 text-[#0052CC]">
            <Zap className="w-3.5 h-3.5 text-sky-600" />
            <span>TÍNH NĂNG CỐT LÕI 4 • ĐỒNG BỘ CRM & ZALO BÁC SĨ TRỰC</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">
            {lang === 'vi' ? 'Đồng Bộ Tức Thì Vào Google Sheets & Zalo Bác Sĩ' : 'Zero-Latency Real-Time Sync to Google Sheets & Doctor Zalo'}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            {lang === 'vi'
              ? 'Không bỏ sót bất kỳ khách hàng tiềm năng nào: Khi khách đặt hẹn trên web, webhook đẩy dữ liệu tự động vào Google Sheets CRM và bắn chuông báo Zalo tới bác sĩ phụ trách trong 3 giây.'
              : 'Automated webhook architecture appends every booking into Google Sheets and dispatches high-priority Zalo notifications to on-duty doctors within 3 seconds.'}
          </p>
        </div>

        {/* Live Simulation Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Form Trigger (Left 4 cols) */}
          <div className="lg:col-span-4 rounded-3xl p-6 border border-sky-100 bg-white shadow-xl text-left space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0052CC] border-b border-slate-100 pb-3">
              <Smartphone className="w-4 h-4 text-sky-600" />
              <span>Khách Hàng Điền Form Đặt Hẹn</span>
            </div>

            <form onSubmit={handleSimulateSync} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Tên khách hàng</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Phương Linh"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Số điện thoại</label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0918 222 333"
                  value={inputPhone}
                  onChange={(e) => setInputPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Dịch vụ quan tâm</label>
                <select
                  value={inputService}
                  onChange={(e) => setInputService(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#0052CC] text-xs cursor-pointer"
                >
                  <option value="Dán Sứ Veneer Nano 5S">Dán Sứ Veneer Nano 5S</option>
                  <option value="Cấy Ghép Implant 4S Pháp">Cấy Ghép Implant 4S Pháp</option>
                  <option value="Niềng Răng Trong Suốt 3D Speed">Niềng Răng Trong Suốt 3D Speed</option>
                  <option value="Nhổ Răng Khôn Piezotome">Nhổ Răng Khôn Piezotome</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSimulating}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0284C7] hover:from-[#0040A8] hover:to-[#0369A1] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-95 disabled:opacity-50 mt-2"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Đang Bắn Webhook (0.18s)...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Bấm Gửi Thử Để Xem Đồng Bộ</span>
                  </>
                )}
              </button>
            </form>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 space-y-1">
              <div className="font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cam kết kỹ thuật:</span>
              </div>
              <p>100% không đơ lag, đồng bộ chuẩn giao thức Webhook HTTPS trực tiếp tới Google App Script & Zalo ZNS.</p>
            </div>
          </div>

          {/* CRM Output Showcase (Right 8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Google Sheets Simulated Live Table */}
            <div className="rounded-3xl border border-sky-100 bg-white shadow-xl overflow-hidden text-left">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
                <div className="flex items-center gap-2 font-mono font-bold text-xs text-slate-800">
                  <Table className="w-4 h-4 text-emerald-600" />
                  <span>Google Sheets CRM – [SmileCare_Paris_Leads_2026]</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  • Trực tiếp (Live Sync)
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="text-[10px] font-mono uppercase bg-slate-100/70 text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Giờ</th>
                      <th className="py-2.5 px-3">Mã Hồ Sơ</th>
                      <th className="py-2.5 px-3">Khách Hàng</th>
                      <th className="py-2.5 px-3">Số Điện Thoại</th>
                      <th className="py-2.5 px-3">Dịch Vụ</th>
                      <th className="py-2.5 px-3">Trạng Thái</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                    {rows.map((r, i) => (
                      <tr key={i} className={`hover:bg-sky-50/50 transition-colors ${i === 0 && hasNewAlert ? 'bg-sky-50 animate-pulse font-bold' : ''}`}>
                        <td className="py-2 px-3 font-mono text-[11px] text-slate-500">{r.time}</td>
                        <td className="py-2 px-3 font-mono text-[11px] text-[#0052CC] font-bold">{r.id}</td>
                        <td className="py-2 px-3 text-slate-900 font-bold">{r.name}</td>
                        <td className="py-2 px-3 font-mono text-slate-600">{r.phone}</td>
                        <td className="py-2 px-3 text-sky-900">{r.service}</td>
                        <td className="py-2 px-3">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                            r.status.includes('Mới')
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-sky-100 text-sky-800'
                          }`}>
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Simulated Doctor Zalo Push Notification */}
            <div className={`p-4 rounded-2xl border transition-all text-left flex items-start gap-3.5 shadow-sm ${
              hasNewAlert
                ? 'bg-sky-50 border-sky-300 ring-2 ring-sky-300 scale-[1.01]'
                : 'bg-white border-slate-200'
            }`}>
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
                Zalo
              </div>
              <div className="flex-1 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <BellRing className="w-3.5 h-3.5 text-blue-600" />
                    [Nhóm Trực Cấp Cứu] BS Trực Phòng Khám Paris
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Vừa xong</span>
                </div>
                <p className="text-slate-600">
                  🔔 <strong>Khách hàng mới đặt lịch:</strong> {rows[0].name} ({rows[0].phone}) quan tâm dịch vụ <strong className="text-[#0052CC]">{rows[0].service}</strong>. Đã tự động tạo hồ sơ bệnh án #{rows[0].id}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

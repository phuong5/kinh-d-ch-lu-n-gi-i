import React from 'react';
import { X, BookOpen, Layers } from 'lucide-react';
import { TRIGRAMS } from '../data/trigrams';
import { TrigramKey } from '../data/types';

interface AboutIChingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ORDERED_TRIGRAMS: TrigramKey[] = ['Can', 'Khon', 'Chan', 'Ton', 'Kham', 'Ly', 'Can2', 'Doai'];

export const AboutIChingModal: React.FC<AboutIChingModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-800" />
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Cẩm Nang Dịch Lý & Ý Nghĩa 64 Quẻ Kinh Dịch
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-stone-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-2">
            <h4 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs flex items-center justify-center font-bold">1</span>
              Nguồn Gốc & Ý Nghĩa Của Kinh Dịch
            </h4>
            <p>
              <strong>Kinh Dịch (I Ching)</strong> là bộ kinh điển triết học cổ xưa bậc nhất của phương Đông, được coi là ngọn nguồn của văn hóa Á Đông. Kinh Dịch bắt đầu từ hình tượng vạch âm vạch dương do Phục Hy sáng tạo, được Chu Văn Vương đặt tên và viết Thoán từ cho 64 quẻ, Chu Công viết Hào từ, và Đức Khổng Tử làm Thập Dực (mười cánh chim giải nghĩa kinh điển).
            </p>
            <p>
              Chữ <strong>Dịch (易)</strong> mang ba hàm nghĩa cốt lõi:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li><strong>Biến dịch:</strong> Vạn vật trong vũ trụ không ngừng vận động, chuyển hóa biến đổi từ âm sang dương, từ bĩ sang thái.</li>
              <li><strong>Bất dịch:</strong> Đằng sau muôn vàn biến đổi bề ngoài là quy luật vĩnh hằng không bao giờ thay đổi của đất trời.</li>
              <li><strong>Giản dịch:</strong> Mọi hiện tượng phức tạp của vũ trụ đều có thể quy về những nguyên lý đơn giản, rõ ràng.</li>
            </ul>
          </section>

          {/* Section 2: Bát Quái */}
          <section className="space-y-3">
            <h4 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs flex items-center justify-center font-bold">2</span>
              Bát Quái (Tám Quẻ Đơn Cơ Bản)
            </h4>
            <p>
              Tám quẻ đơn (Bát Quái) đại diện cho tám yếu tố tự nhiên và các nhân vật trong một gia đình:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {ORDERED_TRIGRAMS.map((k) => {
                const trig = TRIGRAMS[k];
                return (
                  <div key={k} className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center space-y-1">
                    <div className="text-2xl leading-none">{trig.symbol}</div>
                    <div className="font-serif font-bold text-stone-900 text-sm">{trig.name}</div>
                    <div className="text-[11px] text-amber-800 font-semibold">{trig.natureName} · {trig.element}</div>
                    <div className="text-[11px] text-stone-500 line-clamp-2">{trig.meaning}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 3: 64 Quẻ */}
          <section className="space-y-2">
            <h4 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs flex items-center justify-center font-bold">3</span>
              Sự Phối Hợp Thành 64 Quẻ Trùng Quái
            </h4>
            <p>
              Bằng cách chồng 8 quẻ đơn lên nhau (8 x 8), ta được <strong>64 quẻ kép (Trùng quái)</strong>. Mỗi quẻ gồm 6 hào, đại diện cho 6 giai đoạn vận động của một sự việc từ lúc mới manh nha ở đáy (Sơ hào) đến lúc phát triển cực thịnh (Hào 5) và kết thúc chuyển hóa sang chu kỳ mới (Thượng hào).
            </p>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs leading-relaxed space-y-2">
              <div className="font-bold text-sm text-amber-950 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Mục Đích Của Việc Học Dịch & Bói Dịch
              </div>
              <p>
                Cổ nhân dạy: <em>"Thiện dịch giả bất bốc"</em> (Người giỏi Dịch không cần bói toán), bởi vì khi đã thấu hiểu quy luật biến dịch của trời đất và nhân tâm, người quân tử tự biết cách cư xử đúng lúc đúng chỗ, thấy suy biết thịnh, thấy hung biết lui, thuận theo lẽ phải để bảo toàn thân tâm và kiến tạo phúc lành dài lâu.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

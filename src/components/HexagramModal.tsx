import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Share2,
  Check,
  Briefcase,
  Coins,
  Heart,
  Activity,
  Compass,
  Lightbulb,
  Sparkles,
  BookOpen,
  GitBranch,
} from 'lucide-react';
import { Hexagram } from '../data/types';
import { HexagramGlyph } from './HexagramGlyph';
import { TRIGRAMS } from '../data/trigrams';
import {
  getHexagramById,
  getMutualHexagram,
  getOppositeHexagram,
  getInvertedHexagram,
  getChangedHexagram,
} from '../data/hexagrams';

interface HexagramModalProps {
  hexagram: Hexagram | null;
  onClose: () => void;
  onSelectHexagram: (hex: Hexagram) => void;
}

export const HexagramModal: React.FC<HexagramModalProps> = ({
  hexagram,
  onClose,
  onSelectHexagram,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'text' | 'aspects' | 'lines' | 'related'>('overview');
  const [selectedLine, setSelectedLine] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hexagram) {
        const prevId = hexagram.id === 1 ? 64 : hexagram.id - 1;
        const prev = getHexagramById(prevId);
        if (prev) onSelectHexagram(prev);
      }
      if (e.key === 'ArrowRight' && hexagram) {
        const nextId = hexagram.id === 64 ? 1 : hexagram.id + 1;
        const next = getHexagramById(nextId);
        if (next) onSelectHexagram(next);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hexagram, onClose, onSelectHexagram]);

  if (!hexagram) return null;

  const upper = TRIGRAMS[hexagram.upperTrigram];
  const lower = TRIGRAMS[hexagram.lowerTrigram];

  // Derived related hexagrams
  const mutualHex = getMutualHexagram(hexagram);
  const oppHex = getOppositeHexagram(hexagram);
  const invHex = getInvertedHexagram(hexagram);
  const changedHex = getChangedHexagram(hexagram, selectedLine);

  const prevHex = getHexagramById(hexagram.id === 1 ? 64 : hexagram.id - 1);
  const nextHex = getHexagramById(hexagram.id === 64 ? 1 : hexagram.id + 1);

  const handleCopy = () => {
    const text = `Quẻ ${hexagram.id}: ${hexagram.name} (${hexagram.altName})\nĐiềm: ${hexagram.omen} - ${hexagram.omenMeaning}\nKhái quát: ${hexagram.summary}\nThoán từ: ${hexagram.thoanTu.hanViet}\n${hexagram.thoanTu.dichNghia}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const natureBadgeColor = hexagram.nature.includes('Cát')
    ? 'text-emerald-800 bg-emerald-50 border-emerald-300'
    : hexagram.nature.includes('Hung')
    ? 'text-rose-800 bg-rose-50 border-rose-300'
    : 'text-stone-800 bg-stone-100 border-stone-300';

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-stone-50 rounded-2xl shadow-2xl border border-stone-300 flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="px-5 py-4 bg-white border-b border-stone-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100/80 border border-amber-300 flex items-center justify-center text-amber-900 font-serif font-bold text-xl">
              {hexagram.hanzi}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  QUẺ SỐ {hexagram.id}
                </span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${natureBadgeColor}`}>
                  {hexagram.nature}
                </span>
                <span className="text-xs text-stone-500 hidden sm:inline">
                  Hành {hexagram.element}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-tight mt-0.5">
                {hexagram.name}{' '}
                <span className="text-sm font-sans font-normal text-stone-500">
                  ({hexagram.altName})
                </span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              title="Sao chép tóm tắt quẻ"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Share2 className="w-5 h-5" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              title="Đóng (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trigram Banner & Omen ribbon */}
        <div className="px-6 py-3 bg-amber-900 text-amber-50 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm shrink-0">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="font-semibold text-amber-200">Cấu tạo quái:</span>
            <span>
              Thượng quái: <strong>{upper.name}</strong> ({upper.natureName} {upper.symbol})
            </span>
            <span className="text-amber-400">·</span>
            <span>
              Hạ quái: <strong>{lower.name}</strong> ({lower.natureName} {lower.symbol})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-300 font-medium">Điềm quẻ:</span>
            <span className="font-bold underline decoration-amber-400 underline-offset-2">
              {hexagram.omen}
            </span>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="px-6 border-b border-stone-200 bg-white flex items-center gap-1 sm:gap-2 overflow-x-auto shrink-0 py-2">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-amber-100 text-amber-900 font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Tổng Quan & Dịch Lý
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('aspects')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'aspects'
                ? 'bg-amber-100 text-amber-900 font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Luận Giải 5 Phương Diện
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('lines')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'lines'
                ? 'bg-amber-100 text-amber-900 font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Ý Nghĩa 6 Hào & Hào Động
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('text')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'text'
                ? 'bg-amber-100 text-amber-900 font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Thoán Từ & Đại Tượng
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('related')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'related'
                ? 'bg-amber-100 text-amber-900 font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Quẻ Hỗ, Thác, Tống
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Top Banner Feature: Glyph + Quick Summary */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-5 bg-white rounded-xl border border-stone-200">
                <div className="p-4 bg-stone-100/80 rounded-xl border border-stone-200 flex flex-col items-center justify-center shrink-0">
                  <HexagramGlyph lines={hexagram.lines} size="lg" />
                  <span className="text-[11px] font-mono text-stone-500 mt-2">
                    {hexagram.lines.join('')}
                  </span>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="text-xs uppercase tracking-wider text-amber-800 font-semibold">
                    ĐIỀM BÁO DÂN GIAN & KHÁI QUÁT
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    "{hexagram.omen}" — {hexagram.omenMeaning}
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {hexagram.summary}
                  </p>
                  {hexagram.trieuDoan && (
                    <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-lg text-xs sm:text-sm text-amber-900 italic font-serif">
                      <span className="font-semibold not-italic font-sans text-amber-950 block text-[11px] uppercase tracking-wide mb-1">
                        Thơ Triệu Đoán Cổ Truyền:
                      </span>
                      {hexagram.trieuDoan}
                    </div>
                  )}
                </div>
              </div>

              {/* Dịch Lý Phân Tích Chuyên Sâu */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-lg border-b border-stone-200 pb-2">
                  <BookOpen className="w-5 h-5 text-amber-800" />
                  Luận Giải Dịch Lý & Triết Lý Vận Thế
                </div>
                <p className="text-stone-800 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {hexagram.dichLy}
                </p>
              </div>

              {/* Lời Khuyên Hành Sự Nổi Bật */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 p-5 rounded-xl border border-amber-200 flex items-start gap-3.5">
                <Lightbulb className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-amber-950 text-base">
                    Đạo Xử Thế Của Người Quân Tử Theo Quẻ Này:
                  </h4>
                  <p className="text-amber-900 text-sm leading-relaxed">
                    {hexagram.aspects.advice}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ASPECTS */}
          {activeTab === 'aspects' && (
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">
                  Ứng Dụng Thực Tế Trong Các Mặt Đời Sống
                </h3>
                <p className="text-xs text-stone-500">
                  Luận giải chi tiết quẻ {hexagram.name} khi ứng dụng vào việc mưu sự, lập nghiệp, tiền tài, tình cảm và sức khỏe.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Công danh */}
                <div className="p-5 bg-white rounded-xl border border-stone-200 hover:border-amber-300 transition-colors space-y-2">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                    <Briefcase className="w-4 h-4" />
                    Công Danh, Sự Nghiệp & Thi Cử
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {hexagram.aspects.career}
                  </p>
                </div>

                {/* Tài lộc */}
                <div className="p-5 bg-white rounded-xl border border-stone-200 hover:border-amber-300 transition-colors space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                    <Coins className="w-4 h-4" />
                    Tài Vận, Tiền Bạc & Kinh Doanh
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {hexagram.aspects.wealth}
                  </p>
                </div>

                {/* Tình cảm */}
                <div className="p-5 bg-white rounded-xl border border-stone-200 hover:border-amber-300 transition-colors space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                    <Heart className="w-4 h-4" />
                    Tình Duyên, Hôn Nhân & Gia Đạo
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {hexagram.aspects.love}
                  </p>
                </div>

                {/* Sức khỏe */}
                <div className="p-5 bg-white rounded-xl border border-stone-200 hover:border-amber-300 transition-colors space-y-2">
                  <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
                    <Activity className="w-4 h-4" />
                    Sức Khỏe, Thân Thể & Bệnh Tật
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {hexagram.aspects.health}
                  </p>
                </div>
              </div>

              {/* Xuất hành */}
              <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-indigo-800 font-bold text-sm">
                  <Compass className="w-4 h-4" />
                  Xuất Hành, Giao Tiếp & Cầu Việc
                </div>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {hexagram.aspects.travel}
                </p>
              </div>

              {/* Lời khuyên */}
              <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
                  <Lightbulb className="w-4 h-4 text-amber-700" />
                  Lời Khuyên Hành Sự Cho Người Quân Tử
                </div>
                <p className="text-amber-900 text-sm leading-relaxed">
                  {hexagram.aspects.advice}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: SIX LINES & CHANGING LINE */}
          {activeTab === 'lines' && (
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-xl border border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">
                    Luận Giải Chi Tiết 6 Hào & Quẻ Biến Khi Hào Động
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Nhấp vào từng hào bên dưới để xem ý nghĩa cụ thể và xem ngay Quẻ Biến tương ứng.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg">
                  {[6, 5, 4, 3, 2, 1].map((pos) => (
                    <button
                      type="button"
                      key={pos}
                      onClick={() => setSelectedLine(pos)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        selectedLine === pos
                          ? 'bg-amber-800 text-white shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      Hào {pos}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual interactive comparison: Original vs Changing Line vs Resulting Hexagram */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Col 1: Original Hexagram with clickable lines */}
                <div className="p-4 bg-white rounded-xl border border-stone-200 flex flex-col items-center text-center">
                  <span className="text-xs font-semibold text-stone-500 mb-2 uppercase tracking-wide">
                    Quẻ Gốc: {hexagram.name}
                  </span>
                  <div className="py-2">
                    <HexagramGlyph
                      lines={hexagram.lines}
                      size="md"
                      activeLine={selectedLine}
                      interactive={true}
                      onLineClick={(pos) => setSelectedLine(pos)}
                    />
                  </div>
                  <span className="text-[11px] text-amber-800 mt-2 font-medium">
                    (Đang chọn Hào {selectedLine})
                  </span>
                </div>

                {/* Col 2: Active Line Interpretation */}
                <div className="md:col-span-2 p-5 bg-white rounded-xl border border-stone-200 space-y-3 flex flex-col justify-between">
                  {(() => {
                    const lineData = hexagram.sixLines.find((l) => l.position === selectedLine);
                    if (!lineData) return null;
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                          <span className="font-serif font-bold text-stone-900 text-base">
                            Hào vị {selectedLine}: {lineData.name} ({lineData.type})
                          </span>
                          <span className="text-xs bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full font-medium">
                            {lineData.type === 'Dương' ? 'Hào Cương Dương' : 'Hào Nhu Âm'}
                          </span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">
                            Lời Hào (Hào Từ):
                          </div>
                          <p className="text-stone-900 font-medium text-sm sm:text-base leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200/80">
                            {lineData.meaning}
                          </p>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
                            Lời Khuyên Hành Sự:
                          </div>
                          <p className="text-stone-700 text-sm leading-relaxed">
                            {lineData.advice}
                          </p>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Transformed Quẻ Biến Link */}
                  {changedHex && (
                    <div className="pt-3 border-t border-stone-200 flex items-center justify-between gap-3 bg-amber-50/60 p-3 rounded-lg border border-amber-200/80">
                      <div className="flex items-center gap-3">
                        <HexagramGlyph lines={changedHex.lines} size="sm" />
                        <div>
                          <div className="text-[11px] text-amber-800 font-medium">
                            Khi Hào {selectedLine} biến động sinh ra:
                          </div>
                          <div className="text-sm font-serif font-bold text-stone-900">
                            Quẻ {changedHex.id}: {changedHex.name} ({changedHex.nature})
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => onSelectHexagram(changedHex)}
                        className="px-3 py-1.5 text-xs font-semibold text-amber-900 bg-amber-200/80 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Xem Quẻ Biến →
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Full 6 lines list */}
              <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-100 overflow-hidden">
                <div className="px-5 py-3 bg-stone-100 font-serif font-bold text-sm text-stone-800">
                  Toàn Bộ 6 Hào Của Quẻ {hexagram.name} (Từ Dưới Lên Trên)
                </div>
                {[...hexagram.sixLines].reverse().map((line) => (
                  <div
                    key={line.position}
                    onClick={() => setSelectedLine(line.position)}
                    className={`p-4 transition-colors cursor-pointer flex items-start gap-4 ${
                      selectedLine === line.position ? 'bg-amber-50/70 border-l-4 border-amber-700' : 'hover:bg-stone-50'
                    }`}
                  >
                    <span className="w-8 h-8 rounded-full bg-stone-100 font-bold text-xs flex items-center justify-center shrink-0 font-mono text-stone-700">
                      H.{line.position}
                    </span>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-stone-900 text-sm">
                          {line.name} ({line.type})
                        </span>
                        <span className="text-xs text-amber-700 font-medium">
                          {selectedLine === line.position ? 'Đang chọn' : 'Bấm để xem quẻ biến'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700 font-medium">
                        {line.meaning}
                      </p>
                      <p className="text-xs text-stone-500">
                        {line.advice}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TEXTS */}
          {activeTab === 'text' && (
            <div className="space-y-6">
              {/* Thoán từ */}
              <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-lg border-b border-stone-200 pb-2">
                  <BookOpen className="w-5 h-5 text-amber-800" />
                  Thoán Từ (Lời Thoán Của Chu Văn Vương)
                </div>
                {hexagram.thoanTu.original && (
                  <div className="text-stone-500 text-xs font-mono font-medium tracking-widest">
                    NGUYÊN VĂN: {hexagram.thoanTu.original}
                  </div>
                )}
                <div className="p-3.5 bg-stone-100/80 rounded-lg text-amber-950 font-serif font-bold text-base sm:text-lg">
                  {hexagram.thoanTu.hanViet}
                </div>
                <div className="text-sm sm:text-base text-stone-800 leading-relaxed pt-1">
                  <strong>Dịch nghĩa:</strong> {hexagram.thoanTu.dichNghia}
                </div>
              </div>

              {/* Đại tượng truyện */}
              <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-lg border-b border-stone-200 pb-2">
                  <GitBranch className="w-5 h-5 text-amber-800" />
                  Đại Tượng Truyện (Lời Tượng Của Khổng Tử)
                </div>
                <div className="p-3.5 bg-stone-100/80 rounded-lg text-stone-900 font-serif font-bold text-base sm:text-lg">
                  {hexagram.daiTuong.hanViet}
                </div>
                <div className="text-sm sm:text-base text-stone-800 leading-relaxed pt-1">
                  <strong>Dịch nghĩa:</strong> {hexagram.daiTuong.dichNghia}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: RELATED HEXAGRAMS */}
          {activeTab === 'related' && (
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">
                  Tương Quan Dịch Lý: Quẻ Hỗ, Quẻ Thác, Quẻ Tống
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Trong Dịch học, mỗi quẻ luôn biến thiên và liên đới mật thiết với 4 quẻ tương quan: Quẻ Hỗ (nội tình tiềm ẩn bên trong), Quẻ Thác (mặt đối lập đảo cực), và Quẻ Tống (góc nhìn phản chiếu 180 độ).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Quẻ Hỗ */}
                {mutualHex ? (
                  <div
                    onClick={() => onSelectHexagram(mutualHex)}
                    className="p-5 bg-white rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono font-bold text-amber-800 uppercase tracking-wide">
                        QUẺ HỖ (Nội tình bên trong)
                      </span>
                      <div className="flex items-center gap-3 my-3">
                        <HexagramGlyph lines={mutualHex.lines} size="sm" />
                        <div>
                          <h4 className="font-serif font-bold text-stone-900 text-base">
                            #{mutualHex.id} {mutualHex.name}
                          </h4>
                          <span className="text-xs text-stone-500">
                            {mutualHex.nature} · {mutualHex.omen}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 line-clamp-3">
                        {mutualHex.summary}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-stone-100 text-xs font-semibold text-amber-800 flex items-center justify-between">
                      <span>Xem chi tiết</span>
                      <span>→</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 bg-stone-100 rounded-xl text-stone-400 text-xs">
                    Không có quẻ hỗ
                  </div>
                )}

                {/* Quẻ Thác */}
                {oppHex ? (
                  <div
                    onClick={() => onSelectHexagram(oppHex)}
                    className="p-5 bg-white rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono font-bold text-indigo-800 uppercase tracking-wide">
                        QUẺ THÁC (Mặt đối lập toàn diện)
                      </span>
                      <div className="flex items-center gap-3 my-3">
                        <HexagramGlyph lines={oppHex.lines} size="sm" />
                        <div>
                          <h4 className="font-serif font-bold text-stone-900 text-base">
                            #{oppHex.id} {oppHex.name}
                          </h4>
                          <span className="text-xs text-stone-500">
                            {oppHex.nature} · {oppHex.omen}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 line-clamp-3">
                        {oppHex.summary}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-stone-100 text-xs font-semibold text-amber-800 flex items-center justify-between">
                      <span>Xem chi tiết</span>
                      <span>→</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 bg-stone-100 rounded-xl text-stone-400 text-xs">
                    Không có quẻ thác
                  </div>
                )}

                {/* Quẻ Tống */}
                {invHex ? (
                  <div
                    onClick={() => onSelectHexagram(invHex)}
                    className="p-5 bg-white rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wide">
                        QUẺ TỐNG (Góc nhìn lật ngược 180°)
                      </span>
                      <div className="flex items-center gap-3 my-3">
                        <HexagramGlyph lines={invHex.lines} size="sm" />
                        <div>
                          <h4 className="font-serif font-bold text-stone-900 text-base">
                            #{invHex.id} {invHex.name}
                          </h4>
                          <span className="text-xs text-stone-500">
                            {invHex.nature} · {invHex.omen}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 line-clamp-3">
                        {invHex.summary}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-stone-100 text-xs font-semibold text-amber-800 flex items-center justify-between">
                      <span>Xem chi tiết</span>
                      <span>→</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 bg-stone-100 rounded-xl text-stone-400 text-xs">
                    Không có quẻ tống
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer Navigation (Prev / Next) */}
        <div className="px-6 py-3.5 bg-white border-t border-stone-200 flex items-center justify-between shrink-0">
          {prevHex ? (
            <button
              type="button"
              onClick={() => onSelectHexagram(prevHex)}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-stone-700 hover:text-amber-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>
                Quẻ #{prevHex.id}: {prevHex.name}
              </span>
            </button>
          ) : (
            <div />
          )}

          <span className="text-xs text-stone-400 hidden sm:inline">
            Dùng phím ← / → để chuyển quẻ
          </span>

          {nextHex ? (
            <button
              type="button"
              onClick={() => onSelectHexagram(nextHex)}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-stone-700 hover:text-amber-800 transition-colors cursor-pointer"
            >
              <span>
                Quẻ #{nextHex.id}: {nextHex.name}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

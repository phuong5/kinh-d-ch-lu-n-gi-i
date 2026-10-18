import React, { useState } from 'react';
import { X, ArrowRight, Compass } from 'lucide-react';
import { TrigramKey, Hexagram } from '../data/types';
import { TRIGRAMS } from '../data/trigrams';
import { getHexagramByTrigrams } from '../data/hexagrams';
import { HexagramGlyph } from './HexagramGlyph';

interface QuickLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectHexagram: (hex: Hexagram) => void;
}

const TRIGRAM_KEYS: TrigramKey[] = ['Can', 'Doai', 'Ly', 'Chan', 'Ton', 'Kham', 'Can2', 'Khon'];

export const QuickLookupModal: React.FC<QuickLookupModalProps> = ({
  isOpen,
  onClose,
  onSelectHexagram,
}) => {
  const [upperTrigram, setUpperTrigram] = useState<TrigramKey>('Can');
  const [lowerTrigram, setLowerTrigram] = useState<TrigramKey>('Can');

  if (!isOpen) return null;

  const hexagram = getHexagramByTrigrams(upperTrigram, lowerTrigram);
  const upper = TRIGRAMS[upperTrigram];
  const lower = TRIGRAMS[lowerTrigram];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-800" />
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Tra Cứu Quẻ Theo Thượng Quái & Hạ Quái
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

        <div className="p-6 space-y-6">
          <p className="text-sm text-stone-600">
            Kinh Dịch gồm 64 quẻ kép, mỗi quẻ được phối hợp bởi một quẻ đơn ở trên (Thượng quái / Ngoại quái) và một quẻ đơn ở dưới (Hạ quái / Nội quái). Chọn hai quái bên dưới để tìm ra quẻ tương ứng:
          </p>

          {/* Upper Trigram Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide block">
              1. Chọn Thượng Quái (Ngoại Quái - Ở Trên):
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {TRIGRAM_KEYS.map((k) => {
                const trig = TRIGRAMS[k];
                const isSelected = upperTrigram === k;
                return (
                  <button
                    type="button"
                    key={`upper-${k}`}
                    onClick={() => setUpperTrigram(k)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      isSelected
                        ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                        : 'bg-stone-50 text-stone-800 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <span className="text-lg leading-none">{trig.symbol}</span>
                    <span className="text-xs font-medium truncate w-full">{trig.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
            <div className="text-xs text-stone-500 font-sans">
              Đang chọn: <strong>{upper.name}</strong> ({upper.natureName}) — Hành {upper.element}
            </div>
          </div>

          {/* Lower Trigram Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide block">
              2. Chọn Hạ Quái (Nội Quái - Ở Dưới):
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {TRIGRAM_KEYS.map((k) => {
                const trig = TRIGRAMS[k];
                const isSelected = lowerTrigram === k;
                return (
                  <button
                    type="button"
                    key={`lower-${k}`}
                    onClick={() => setLowerTrigram(k)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      isSelected
                        ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                        : 'bg-stone-50 text-stone-800 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <span className="text-lg leading-none">{trig.symbol}</span>
                    <span className="text-xs font-medium truncate w-full">{trig.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
            <div className="text-xs text-stone-500 font-sans">
              Đang chọn: <strong>{lower.name}</strong> ({lower.natureName}) — Hành {lower.element}
            </div>
          </div>

          {/* Result Card */}
          {hexagram && (
            <div className="p-5 bg-gradient-to-r from-amber-50/80 to-stone-100 rounded-xl border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-lg border border-stone-200 shadow-xs">
                  <HexagramGlyph lines={hexagram.lines} size="sm" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-900">
                      QUẺ SỐ #{hexagram.id}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700">
                      {hexagram.nature}
                    </span>
                  </div>
                  <h4 className="text-lg font-serif font-bold text-stone-900 mt-0.5">
                    {hexagram.name} ({hexagram.altName})
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-1 mt-0.5">
                    Điềm: {hexagram.omen} — {hexagram.omenMeaning}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectHexagram(hexagram);
                }}
                className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>Xem Luận Giải Chi Tiết</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

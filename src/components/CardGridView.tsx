import React from 'react';
import { Hexagram } from '../data/types';
import { HexagramGlyph } from './HexagramGlyph';
import { TRIGRAMS } from '../data/trigrams';

interface CardGridViewProps {
  hexagrams: Hexagram[];
  onSelectHexagram: (hex: Hexagram) => void;
  selectedId?: number;
}

export const CardGridView: React.FC<CardGridViewProps> = ({
  hexagrams,
  onSelectHexagram,
  selectedId,
}) => {
  if (hexagrams.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-xl border border-stone-200 p-8">
        <p className="text-stone-500 text-base">Không tìm thấy quẻ nào phù hợp với bộ lọc hiện tại.</p>
        <p className="text-stone-400 text-sm mt-1">Vui lòng thử từ khóa khác hoặc xóa bớt tiêu chí lọc.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {hexagrams.map((hex) => {
        const isSelected = selectedId === hex.id;
        const upper = TRIGRAMS[hex.upperTrigram];
        const lower = TRIGRAMS[hex.lowerTrigram];

        const natureColor = hex.nature.includes('Cát')
          ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
          : hex.nature.includes('Hung')
          ? 'text-rose-700 bg-rose-50 border-rose-200'
          : 'text-stone-700 bg-stone-100 border-stone-200';

        return (
          <div
            key={hex.id}
            onClick={() => onSelectHexagram(hex)}
            className={`group bg-white rounded-xl p-4 border transition-all cursor-pointer hover:shadow-md hover:border-amber-400 flex flex-col justify-between ${
              isSelected ? 'ring-2 ring-amber-600 border-amber-500 shadow-md bg-amber-50/20' : 'border-stone-200 shadow-xs'
            }`}
          >
            <div>
              {/* Card Header: Number + Nature badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-stone-500">
                  QUẺ #{hex.id.toString().padStart(2, '0')}
                </span>
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${natureColor}`}>
                  {hex.nature}
                </span>
              </div>

              {/* Middle Row: Glyph + Names */}
              <div className="flex items-start gap-4 my-2">
                <div className="shrink-0 pt-0.5">
                  <HexagramGlyph lines={hex.lines} size="sm" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors truncate">
                    {hex.name}
                  </h3>
                  <div className="text-xs text-stone-500 mt-0.5 truncate">
                    {hex.altName}
                  </div>
                  <div className="text-xs text-stone-600 mt-1 flex items-center gap-1.5 font-sans">
                    <span className="text-stone-400">Thượng:</span>
                    <span>{upper.natureName}</span>
                    <span className="text-stone-300">·</span>
                    <span className="text-stone-400">Hạ:</span>
                    <span>{lower.natureName}</span>
                  </div>
                </div>
              </div>

              {/* Omen Quote */}
              <div className="mt-3 pt-2.5 border-t border-stone-100">
                <div className="text-xs font-semibold text-amber-800 truncate">
                  Điềm: {hex.omen}
                </div>
                <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                  {hex.omenMeaning}
                </p>
              </div>
            </div>

            {/* Bottom Actions Hint */}
            <div className="mt-3 pt-2 flex items-center justify-between text-[11px] text-stone-500 border-t border-stone-100/80">
              <span className="font-sans">Hành {hex.element}</span>
              <span className="text-amber-700 font-medium group-hover:translate-x-0.5 transition-transform">
                Xem luận giải →
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

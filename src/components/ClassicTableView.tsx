import React from 'react';
import { Hexagram } from '../data/types';
import { HexagramGlyph } from './HexagramGlyph';

interface ClassicTableViewProps {
  hexagrams: Hexagram[];
  onSelectHexagram: (hex: Hexagram) => void;
  selectedId?: number;
}

export const ClassicTableView: React.FC<ClassicTableViewProps> = ({
  hexagrams,
  onSelectHexagram,
  selectedId,
}) => {
  return (
    <div className="w-full bg-white rounded-xl border border-sky-300 shadow-sm overflow-hidden">
      {/* Table Banner Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-sky-50 via-sky-100/70 to-sky-50 border-b border-sky-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-stone-900 text-base sm:text-lg">
            Bảng 64 Quẻ Kinh Dịch Chuẩn Văn Vương (8x8)
          </span>
          <span className="text-xs text-sky-800 hidden sm:inline">
            (Nhấp vào từng quẻ để xem trọn vẹn luận giải chi tiết)
          </span>
        </div>
        <div className="text-xs text-stone-500 font-sans">
          Thứ tự quẻ 1 → 64
        </div>
      </div>

      {/* 8 Columns Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[840px] grid grid-cols-8 divide-x divide-y divide-sky-200 border-collapse bg-sky-50/40">
          {hexagrams.map((hex) => {
            const isSelected = selectedId === hex.id;
            return (
              <button
                type="button"
                key={hex.id}
                onClick={() => onSelectHexagram(hex)}
                className={`group flex flex-col items-center justify-between p-3.5 sm:p-4 text-center transition-all cursor-pointer hover:bg-sky-100/80 hover:shadow-inner focus:outline-none ${
                  isSelected ? 'bg-amber-100/90 ring-2 ring-amber-600 z-10' : 'bg-sky-50/50'
                }`}
                title={`Quẻ số ${hex.id}: ${hex.name} (${hex.omen}) - Nhấp để xem luận giải`}
              >
                {/* Number Header */}
                <div className="font-sans font-bold text-sm text-stone-900 group-hover:text-amber-800 mb-2">
                  {hex.id}
                </div>

                {/* Hexagram Drawn Lines */}
                <div className="my-1 py-1 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <HexagramGlyph lines={hex.lines} size="sm" />
                </div>

                {/* Hexagram Name Link */}
                <div className="mt-2 text-xs sm:text-sm font-semibold text-amber-800 group-hover:text-amber-900 group-hover:underline tracking-tight line-clamp-2 leading-snug">
                  {hex.name}
                </div>

                {/* Subtle Omen hint on hover */}
                <div className="mt-1 text-[11px] text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity truncate max-w-[95px]">
                  {hex.omen}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Table Footer note */}
      <div className="px-4 py-2.5 bg-stone-50 border-t border-sky-200 flex flex-wrap items-center justify-between text-xs text-stone-600 gap-2">
        <div className="flex items-center gap-4">
          <span>* Gồm 8 hàng x 8 cột = 64 quẻ dịch kép</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">Mỗi quẻ gồm Thượng quái (ngoại) và Hạ quái (nội)</span>
        </div>
        <div className="text-amber-800 font-medium">
          Nguồn Dịch lý & Mai Hoa chuẩn mực
        </div>
      </div>
    </div>
  );
};

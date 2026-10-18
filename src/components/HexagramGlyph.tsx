import React from 'react';

interface HexagramGlyphProps {
  lines: [number, number, number, number, number, number]; // index 0 is bottom (Hào 1), index 5 is top (Hào 6)
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  activeLine?: number; // 1-indexed (1 to 6)
  interactive?: boolean;
  onLineClick?: (lineIndex: number) => void;
  colorTheme?: 'dark' | 'amber' | 'blue';
}

export const HexagramGlyph: React.FC<HexagramGlyphProps> = ({
  lines,
  size = 'md',
  className = '',
  activeLine,
  interactive = false,
  onLineClick,
  colorTheme = 'dark',
}) => {
  // Config dimensions based on size
  const sizeConfig = {
    sm: { width: 'w-10', height: 'h-10', barH: 'h-1', gap: 'gap-1', text: 'text-[9px]' },
    md: { width: 'w-16', height: 'h-14', barH: 'h-1.5', gap: 'gap-1.5', text: 'text-xs' },
    lg: { width: 'w-24', height: 'h-20', barH: 'h-2', gap: 'gap-2', text: 'text-sm' },
    xl: { width: 'w-32', height: 'h-28', barH: 'h-3', gap: 'gap-2.5', text: 'text-base' },
  }[size];

  const barColor = {
    dark: 'bg-stone-900',
    amber: 'bg-amber-900',
    blue: 'bg-sky-900',
  }[colorTheme];

  // In I Ching, line 6 is on top, line 1 is at bottom.
  // lines array has lines[0] = Hào 1 (bottom), lines[5] = Hào 6 (top).
  // So we render from top (lines[5]) down to bottom (lines[0]).
  const reversedLines = [
    { pos: 6, isYang: lines[5] === 1 },
    { pos: 5, isYang: lines[4] === 1 },
    { pos: 4, isYang: lines[3] === 1 },
    { pos: 3, isYang: lines[2] === 1 },
    { pos: 2, isYang: lines[1] === 1 },
    { pos: 1, isYang: lines[0] === 1 },
  ];

  return (
    <div
      className={`flex flex-col justify-between ${sizeConfig.width} ${sizeConfig.height} ${sizeConfig.gap} ${className}`}
      aria-label="Hình tượng 6 hào quẻ Kinh Dịch"
    >
      {reversedLines.map(({ pos, isYang }) => {
        const isActive = activeLine === pos;
        return (
          <div
            key={pos}
            onClick={() => interactive && onLineClick && onLineClick(pos)}
            className={`w-full flex items-center justify-between ${sizeConfig.barH} rounded-[1px] transition-all ${
              interactive ? 'cursor-pointer hover:opacity-80' : ''
            } ${isActive ? 'ring-2 ring-amber-500 scale-105' : ''}`}
            title={`Hào ${pos}: ${isYang ? 'Hào Dương (—)' : 'Hào Âm (-- --)'}`}
          >
            {isYang ? (
              // Dương hào: Một vạch liền
              <div
                className={`w-full h-full rounded-[1px] ${
                  isActive ? 'bg-amber-600' : barColor
                }`}
              />
            ) : (
              // Âm hào: Hai đoạn đứt rời nhau có khoảng trống ở giữa
              <div className="w-full h-full flex justify-between items-center gap-[18%]">
                <div
                  className={`w-[41%] h-full rounded-[1px] ${
                    isActive ? 'bg-amber-600' : barColor
                  }`}
                />
                <div
                  className={`w-[41%] h-full rounded-[1px] ${
                    isActive ? 'bg-amber-600' : barColor
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

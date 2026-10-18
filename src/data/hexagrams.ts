import { HEXAGRAMS_1_16 } from './hexagrams1_16';
import { HEXAGRAMS_17_32 } from './hexagrams17_32';
import { HEXAGRAMS_33_48 } from './hexagrams33_48';
import { HEXAGRAMS_49_64 } from './hexagrams49_64';
import { Hexagram, TrigramKey } from './types';
import { TRIGRAMS } from './trigrams';

export const ALL_HEXAGRAMS: Hexagram[] = [
  ...HEXAGRAMS_1_16,
  ...HEXAGRAMS_17_32,
  ...HEXAGRAMS_33_48,
  ...HEXAGRAMS_49_64,
];

// Map lookup by ID
export const HEXAGRAM_MAP = new Map<number, Hexagram>();
ALL_HEXAGRAMS.forEach((hex) => {
  HEXAGRAM_MAP.set(hex.id, hex);
});

// Map lookup by 6 lines pattern (e.g. "1,1,1,1,1,1")
export const HEXAGRAM_LINES_MAP = new Map<string, Hexagram>();
ALL_HEXAGRAMS.forEach((hex) => {
  HEXAGRAM_LINES_MAP.set(hex.lines.join(','), hex);
});

export function getHexagramById(id: number): Hexagram | undefined {
  return HEXAGRAM_MAP.get(id);
}

export function getHexagramByLines(lines: [number, number, number, number, number, number]): Hexagram | undefined {
  return HEXAGRAM_LINES_MAP.get(lines.join(','));
}

/**
 * Quẻ Hỗ (Nuclear Hexagram):
 * Lấy hào 2, 3, 4 làm nội quái (hạ), lấy hào 3, 4, 5 làm ngoại quái (thượng).
 * Lưu ý: index trong mảng lines (0-indexed):
 * Hào 2 = lines[1], Hào 3 = lines[2], Hào 4 = lines[3] -> Nội quái
 * Hào 3 = lines[2], Hào 4 = lines[3], Hào 5 = lines[4] -> Ngoại quái
 */
export function getMutualHexagram(hex: Hexagram): Hexagram | undefined {
  const mutualLines: [number, number, number, number, number, number] = [
    hex.lines[1],
    hex.lines[2],
    hex.lines[3],
    hex.lines[2],
    hex.lines[3],
    hex.lines[4],
  ];
  return getHexagramByLines(mutualLines);
}

/**
 * Quẻ Thác (Opposite/Inverse Hexagram):
 * Đổi toàn bộ hào Dương thành Âm (1 -> 0), hào Âm thành Dương (0 -> 1).
 */
export function getOppositeHexagram(hex: Hexagram): Hexagram | undefined {
  const oppLines: [number, number, number, number, number, number] = hex.lines.map(
    (line) => (line === 1 ? 0 : 1)
  ) as [number, number, number, number, number, number];
  return getHexagramByLines(oppLines);
}

/**
 * Quẻ Tống (Inverted Hexagram):
 * Đảo ngược toàn bộ quẻ 180 độ (lật ngược quẻ từ trên xuống dưới).
 */
export function getInvertedHexagram(hex: Hexagram): Hexagram | undefined {
  const invLines: [number, number, number, number, number, number] = [...hex.lines].reverse() as [
    number,
    number,
    number,
    number,
    number,
    number
  ];
  return getHexagramByLines(invLines);
}

/**
 * Quẻ Biến khi một hào động (1 to 6)
 */
export function getChangedHexagram(hex: Hexagram, linePos: number): Hexagram | undefined {
  if (linePos < 1 || linePos > 6) return undefined;
  const idx = linePos - 1;
  const newLines = [...hex.lines] as [number, number, number, number, number, number];
  newLines[idx] = newLines[idx] === 1 ? 0 : 1;
  return getHexagramByLines(newLines);
}

/**
 * Tra cứu quẻ theo Thượng quái và Hạ quái
 */
export function getHexagramByTrigrams(upper: TrigramKey, lower: TrigramKey): Hexagram | undefined {
  const upperTrig = TRIGRAMS[upper];
  const lowerTrig = TRIGRAMS[lower];
  if (!upperTrig || !lowerTrig) return undefined;
  const lines: [number, number, number, number, number, number] = [
    ...lowerTrig.lines,
    ...upperTrig.lines,
  ];
  return getHexagramByLines(lines);
}

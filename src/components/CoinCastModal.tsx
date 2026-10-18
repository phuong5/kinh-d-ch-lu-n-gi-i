import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { Hexagram } from '../data/types';
import { getHexagramByLines, getChangedHexagram } from '../data/hexagrams';
import { HexagramGlyph } from './HexagramGlyph';

interface CoinCastModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectHexagram: (hex: Hexagram) => void;
}

interface CastLineResult {
  step: number;        // 1 to 6
  coins: [number, number, number]; // 3 = Ngửa (dương), 2 = Sấp (âm)
  sum: number;         // 6, 7, 8, 9
  isYang: boolean;     // 7, 9 are yang; 6, 8 are yin
  isChanging: boolean; // 6 (lão âm) and 9 (lão dương) are changing
  lineName: string;
}

export const CoinCastModal: React.FC<CoinCastModalProps> = ({
  isOpen,
  onClose,
  onSelectHexagram,
}) => {
  const [question, setQuestion] = useState<string>('');
  const [castResults, setCastResults] = useState<CastLineResult[]>([]);
  const [isTossing, setIsTossing] = useState<boolean>(false);
  const [currentCoins, setCurrentCoins] = useState<[number, number, number]>([3, 3, 3]);

  if (!isOpen) return null;

  // Toss 1 line (step 1 to 6)
  const handleTossLine = () => {
    if (castResults.length >= 6 || isTossing) return;

    setIsTossing(true);

    // Coin animation flicker
    let count = 0;
    const interval = setInterval(() => {
      const c1 = Math.random() > 0.5 ? 3 : 2;
      const c2 = Math.random() > 0.5 ? 3 : 2;
      const c3 = Math.random() > 0.5 ? 3 : 2;
      setCurrentCoins([c1, c2, c3]);
      count++;
      if (count > 6) {
        clearInterval(interval);
        // Final result
        const finalCoins: [number, number, number] = [
          Math.random() > 0.5 ? 3 : 2,
          Math.random() > 0.5 ? 3 : 2,
          Math.random() > 0.5 ? 3 : 2,
        ];
        setCurrentCoins(finalCoins);
        const sum = finalCoins[0] + finalCoins[1] + finalCoins[2];
        const isYang = sum === 7 || sum === 9;
        const isChanging = sum === 6 || sum === 9;

        let lineName = '';
        if (sum === 6) lineName = 'Lão Âm (Hào Âm Động biến Dương)';
        else if (sum === 7) lineName = 'Thiếu Dương (Hào Dương Tĩnh)';
        else if (sum === 8) lineName = 'Thiếu Âm (Hào Âm Tĩnh)';
        else if (sum === 9) lineName = 'Lão Dương (Hào Dương Động biến Âm)';

        const newLine: CastLineResult = {
          step: castResults.length + 1,
          coins: finalCoins,
          sum,
          isYang,
          isChanging,
          lineName,
        };

        setCastResults((prev) => [...prev, newLine]);
        setIsTossing(false);
      }
    }, 80);
  };

  // Instant toss all remaining
  const handleTossAll = () => {
    const results: CastLineResult[] = [];
    for (let i = 1; i <= 6; i++) {
      const c1 = Math.random() > 0.5 ? 3 : 2;
      const c2 = Math.random() > 0.5 ? 3 : 2;
      const c3 = Math.random() > 0.5 ? 3 : 2;
      const sum = c1 + c2 + c3;
      const isYang = sum === 7 || sum === 9;
      const isChanging = sum === 6 || sum === 9;

      let lineName = '';
      if (sum === 6) lineName = 'Lão Âm (Động)';
      else if (sum === 7) lineName = 'Thiếu Dương';
      else if (sum === 8) lineName = 'Thiếu Âm';
      else if (sum === 9) lineName = 'Lão Dương (Động)';

      results.push({
        step: i,
        coins: [c1, c2, c3],
        sum,
        isYang,
        isChanging,
        lineName,
      });
    }
    setCastResults(results);
  };

  const handleReset = () => {
    setCastResults([]);
    setIsTossing(false);
  };

  // Compute resulting Hexagram
  let primaryHexagram: Hexagram | undefined;
  let changingLinePos: number | undefined;
  let transformedHexagram: Hexagram | undefined;

  if (castResults.length === 6) {
    const lines: [number, number, number, number, number, number] = [
      castResults[0].isYang ? 1 : 0,
      castResults[1].isYang ? 1 : 0,
      castResults[2].isYang ? 1 : 0,
      castResults[3].isYang ? 1 : 0,
      castResults[4].isYang ? 1 : 0,
      castResults[5].isYang ? 1 : 0,
    ];
    primaryHexagram = getHexagramByLines(lines);

    // Check changing line (first changing line found)
    const chLine = castResults.find((r) => r.isChanging);
    if (chLine && primaryHexagram) {
      changingLinePos = chLine.step;
      transformedHexagram = getChangedHexagram(primaryHexagram, chLine.step);
    }
  }

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
        <div className="px-6 py-4 bg-amber-950 text-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <h3 className="font-serif font-bold text-lg">
              Gieo Quẻ Ba Đồng Tiền Cổ Truyền
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-amber-300 hover:text-white rounded-lg hover:bg-amber-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Question contemplation input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide block">
              Tâm Niệm Vấn Đề Cần Hỏi (Công việc, thi cử, tài lộc, tình cảm):
            </label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ví dụ: Định hướng công việc tháng tới, việc ký kết hợp đồng..."
              className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/50 focus:border-amber-700"
            />
            <p className="text-[11px] text-stone-500 italic">
              "Kinh Dịch vô tư vô vi, cảm nhi toại thông thiên hạ chi cố" — Giữ tâm tĩnh tại, chân thành hỏi việc.
            </p>
          </div>

          {/* Interactive Coin tossing area */}
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs text-stone-500 font-medium">Ba đồng tiền cổ (Gieo 6 lần từ Hào 1 lên Hào 6):</span>
              <div className="flex items-center gap-3">
                {currentCoins.map((val, idx) => (
                  <div
                    key={idx}
                    className={`w-12 h-12 rounded-full border-2 border-amber-700 bg-amber-200 shadow-md flex items-center justify-center font-bold text-xs text-amber-950 font-serif transition-transform duration-100 ${
                      isTossing ? 'animate-bounce' : ''
                    }`}
                  >
                    {val === 3 ? 'DƯƠNG' : 'ÂM'}
                  </div>
                ))}
              </div>
              <span className="text-xs text-amber-800 font-mono">
                Tổng: {currentCoins[0] + currentCoins[1] + currentCoins[2]} điểm (
                {currentCoins[0] + currentCoins[1] + currentCoins[2] === 7 ||
                currentCoins[0] + currentCoins[1] + currentCoins[2] === 9
                  ? 'Hào Dương'
                  : 'Hào Âm'}
                )
              </span>
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto">
              {castResults.length < 6 ? (
                <>
                  <button
                    type="button"
                    onClick={handleTossLine}
                    disabled={isTossing}
                    className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 disabled:opacity-50 text-white font-medium text-sm rounded-lg shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Gieo Lần {castResults.length + 1} (Hào {castResults.length + 1})</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleTossAll}
                    disabled={isTossing}
                    className="px-4 py-1.5 text-xs text-stone-600 hover:text-stone-900 bg-stone-200 hover:bg-stone-300 rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Gieo nhanh cả 6 hào
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Gieo lại từ đầu</span>
                </button>
              )}
            </div>
          </div>

          {/* Current progress lines */}
          <div className="space-y-1.5 bg-white p-4 rounded-xl border border-stone-200">
            <div className="text-xs font-semibold text-stone-600 mb-2 flex items-center justify-between">
              <span>Tiến trình 6 hào (từ hào 1 ở đáy lên hào 6 ở trên):</span>
              <span>Đã gieo: {castResults.length}/6 hào</span>
            </div>
            <div className="space-y-1">
              {[6, 5, 4, 3, 2, 1].map((pos) => {
                const res = castResults.find((r) => r.step === pos);
                return (
                  <div
                    key={pos}
                    className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-mono ${
                      res
                        ? res.isChanging
                          ? 'bg-amber-100/80 text-amber-950 font-bold'
                          : 'bg-stone-100 text-stone-800'
                        : 'bg-stone-50/50 text-stone-400 border border-dashed border-stone-200'
                    }`}
                  >
                    <span>Hào {pos}</span>
                    {res ? (
                      <div className="flex items-center gap-3">
                        <span className="font-sans font-medium">{res.lineName}</span>
                        <span className="font-bold">
                          {res.isYang ? '————— (Dương)' : '——  —— (Âm)'}
                        </span>
                      </div>
                    ) : (
                      <span>Chưa gieo</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final Result Card when 6 lines complete */}
          {primaryHexagram && (
            <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-2 border-amber-300 space-y-4">
              <div className="flex items-center gap-4">
                <HexagramGlyph lines={primaryHexagram.lines} size="md" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-900 bg-white px-2 py-0.5 rounded border border-amber-300">
                      QUẺ CHỦ #{primaryHexagram.id}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {primaryHexagram.nature}
                    </span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-stone-900 mt-1">
                    {primaryHexagram.name} ({primaryHexagram.altName})
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 mt-1">
                    Điềm quẻ: <strong>{primaryHexagram.omen}</strong> — {primaryHexagram.omenMeaning}
                  </p>
                </div>
              </div>

              {transformedHexagram && changingLinePos && (
                <div className="p-3 bg-white/90 rounded-lg border border-amber-200 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-amber-800 font-semibold block">
                      Có Hào {changingLinePos} động biến sinh ra Quẻ Biến:
                    </span>
                    <span className="font-serif font-bold text-stone-900 text-sm">
                      Quẻ #{transformedHexagram.id}: {transformedHexagram.name} ({transformedHexagram.nature})
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onSelectHexagram(transformedHexagram!);
                    }}
                    className="text-amber-800 font-semibold hover:underline"
                  >
                    Xem Quẻ Biến →
                  </button>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectHexagram(primaryHexagram!);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Xem Luận Giải Chi Tiết Quẻ Này</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

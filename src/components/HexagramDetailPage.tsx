import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Share2,
  Check,
  Printer,
  Compass,
  Briefcase,
  Coins,
  Heart,
  Activity,
  Lightbulb,
  BookOpen,
  GitBranch,
  ArrowUpRight,
  ArrowUp,
  FileText,
  ExternalLink,
  Layers,
  Sparkles,
  Type,
} from 'lucide-react';
import { Hexagram } from '../data/types';
import { HexagramGlyph } from './HexagramGlyph';
import { TRIGRAMS } from '../data/trigrams';
import {
  ALL_HEXAGRAMS,
  getHexagramById,
  getMutualHexagram,
  getOppositeHexagram,
  getInvertedHexagram,
  getChangedHexagram,
} from '../data/hexagrams';
import {
  getThoanTruyen,
  getVanNgonTruyen,
} from '../data/hexagramLongForm';

interface ArticleData {
  id: number;
  title: string;
  sourceUrl: string;
  htmlContent: string;
  charCount: number;
  headings: string[];
}

interface HexagramDetailPageProps {
  hexagram: Hexagram;
  onBackToBoard: () => void;
  onSelectHexagram: (hex: Hexagram) => void;
}

export const HexagramDetailPage: React.FC<HexagramDetailPageProps> = ({
  hexagram,
  onBackToBoard,
  onSelectHexagram,
}) => {
  const [activeTab, setActiveTab] = useState<'full-article' | 'summary' | 'lines' | 'related'>('full-article');
  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  const [isLoadingArticle, setIsLoadingArticle] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [copied, setCopied] = useState<boolean>(false);
  const [activeLineTab, setActiveLineTab] = useState<number>(1);
  const [fontSize, setFontSize] = useState<number>(17); // 15, 17, 19, 21
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [paperTheme, setPaperTheme] = useState<'white' | 'ivory' | 'sepia'>('ivory');

  // Load the full scraped article from /data/articles/que-[id].json
  useEffect(() => {
    let isCancelled = false;
    setIsLoadingArticle(true);
    setLoadError(null);

    fetch(`/data/articles/que-${hexagram.id}.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((data: ArticleData) => {
        if (!isCancelled) {
          setArticleData(data);
          setIsLoadingArticle(false);
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.error('Failed to load article:', err);
          setLoadError('Không thể tải bài viết chi tiết.');
          setIsLoadingArticle(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [hexagram.id]);

  // Scroll to top when hexagram changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hexagram.id]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onBackToBoard();
      if (e.key === 'ArrowLeft') {
        const prevId = hexagram.id === 1 ? 64 : hexagram.id - 1;
        const prev = getHexagramById(prevId);
        if (prev) onSelectHexagram(prev);
      }
      if (e.key === 'ArrowRight') {
        const nextId = hexagram.id === 64 ? 1 : hexagram.id + 1;
        const next = getHexagramById(nextId);
        if (next) onSelectHexagram(next);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hexagram.id, onBackToBoard, onSelectHexagram]);

  const upper = TRIGRAMS[hexagram.upperTrigram];
  const lower = TRIGRAMS[hexagram.lowerTrigram];

  // Derived related hexagrams
  const mutualHex = getMutualHexagram(hexagram);
  const oppHex = getOppositeHexagram(hexagram);
  const invHex = getInvertedHexagram(hexagram);
  const changedHex = getChangedHexagram(hexagram, activeLineTab);

  const prevHex = getHexagramById(hexagram.id === 1 ? 64 : hexagram.id - 1);
  const nextHex = getHexagramById(hexagram.id === 64 ? 1 : hexagram.id + 1);

  const thoanTruyen = getThoanTruyen(hexagram);
  const vanNgon = getVanNgonTruyen(hexagram);

  const handleCopy = () => {
    const text = `${hexagram.name} (${hexagram.altName}) - Quẻ số ${hexagram.id} Kinh Dịch\nĐiềm: ${hexagram.omen} - ${hexagram.omenMeaning}\nNguồn Dantocking: ${articleData?.sourceUrl || window.location.href}\nURL: ${window.location.href}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const natureBadgeClass = hexagram.nature.includes('Cát')
    ? 'text-emerald-800 bg-emerald-50 border-emerald-300'
    : hexagram.nature.includes('Hung')
    ? 'text-rose-800 bg-rose-50 border-rose-300'
    : 'text-stone-800 bg-stone-100 border-stone-300';

  const paperBgClass =
    paperTheme === 'white'
      ? 'bg-white'
      : paperTheme === 'sepia'
      ? 'bg-[#faf5eb]'
      : 'bg-[#fcfbf7]';

  return (
    <article className="min-h-screen bg-stone-100/70 pb-24 text-stone-900 selection:bg-amber-100 selection:text-amber-950">
      {/* Top Sticky Utility & Navigation Bar */}
      <div className="sticky top-16 z-30 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 py-2.5 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          {/* Back button */}
          <button
            type="button"
            onClick={onBackToBoard}
            className="flex items-center gap-2 font-semibold text-amber-900 hover:text-amber-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Trở về Bảng 64 Quẻ</span>
          </button>

          {/* Quick jump select & Prev/Next */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {prevHex && (
              <button
                type="button"
                onClick={() => onSelectHexagram(prevHex)}
                className="flex items-center gap-1 text-stone-600 hover:text-amber-900 transition-colors cursor-pointer px-2 py-1 rounded hover:bg-stone-200/60"
                title={`Quẻ trước: ${prevHex.name}`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden md:inline">#{prevHex.id} {prevHex.name}</span>
                <span className="md:hidden">#{prevHex.id}</span>
              </button>
            )}

            {/* Jump Dropdown */}
            <select
              value={hexagram.id}
              onChange={(e) => {
                const target = getHexagramById(Number(e.target.value));
                if (target) onSelectHexagram(target);
              }}
              className="bg-white border border-stone-300 rounded-lg px-2.5 py-1 text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-700 cursor-pointer shadow-2xs"
            >
              {ALL_HEXAGRAMS.map((h) => (
                <option key={h.id} value={h.id}>
                  Quẻ #{h.id.toString().padStart(2, '0')}: {h.name}
                </option>
              ))}
            </select>

            {nextHex && (
              <button
                type="button"
                onClick={() => onSelectHexagram(nextHex)}
                className="flex items-center gap-1 text-stone-600 hover:text-amber-900 transition-colors cursor-pointer px-2 py-1 rounded hover:bg-stone-200/60"
                title={`Quẻ sau: ${nextHex.name}`}
              >
                <span className="hidden md:inline">#{nextHex.id} {nextHex.name}</span>
                <span className="md:hidden">#{nextHex.id}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            <span className="text-stone-300 hidden sm:inline">|</span>

            {/* Direct Source Link to Dantocking */}
            {articleData?.sourceUrl && (
              <a
                href={articleData.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs text-amber-800 hover:text-amber-950 font-medium px-2 py-1 rounded bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
                title="Mở bài viết gốc trên dantocking.com"
              >
                <span>Dantocking.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* Action Tools */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleCopy}
                className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded transition-colors cursor-pointer"
                title="Sao chép liên kết quẻ"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded transition-colors cursor-pointer"
                title="In trang luận giải"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-stone-500 mb-5 flex items-center gap-2 flex-wrap">
          <button type="button" onClick={onBackToBoard} className="hover:text-amber-900 cursor-pointer">
            Trang Chủ
          </button>
          <span>/</span>
          <button type="button" onClick={onBackToBoard} className="hover:text-amber-900 cursor-pointer">
            Bảng 64 Quẻ Kinh Dịch
          </button>
          <span>/</span>
          <span className="text-stone-900 font-semibold">
            Quẻ #{hexagram.id}: {hexagram.name}
          </span>
        </nav>

        {/* Hero Header Card */}
        <header className="bg-white rounded-2xl border border-stone-200 shadow-xs p-6 sm:p-8 md:p-10 mb-6 space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-mono font-bold bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md border border-amber-300">
                  QUẺ SỐ {hexagram.id.toString().padStart(2, '0')} / 64 CHU DỊCH
                </span>
                <span className={`font-semibold px-2.5 py-1 rounded-md border ${natureBadgeClass}`}>
                  {hexagram.nature}
                </span>
                <span className="text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md font-medium">
                  Cung {upper.name} · Hành {hexagram.element}
                </span>
                {articleData?.charCount && (
                  <span className="text-stone-500 bg-stone-100 px-2 py-0.5 rounded text-[11px] font-mono">
                    {articleData.charCount.toLocaleString('vi-VN')} ký tự
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-4 flex-wrap">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-stone-900">
                  {hexagram.name}
                </h1>
                <span className="text-xl sm:text-2xl font-serif text-amber-900/80">
                  ({hexagram.altName})
                </span>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 border-l border-stone-300 pl-4">
                  {hexagram.hanzi}
                </span>
              </div>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl">
                {hexagram.summary}
              </p>
            </div>

            {/* Hexagram Visual Box */}
            <div className="shrink-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-stone-50 to-amber-50/50 rounded-2xl border border-stone-200 shadow-xs w-full sm:w-auto">
              <HexagramGlyph lines={hexagram.lines} size="xl" />
              <div className="mt-3 text-center">
                <div className="text-xs font-mono font-bold text-stone-600">
                  {upper.name} trên {lower.name}
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5 font-mono">
                  [{hexagram.lines.join(', ')}] (Hào 1 đáy → Hào 6 đỉnh)
                </div>
              </div>
            </div>
          </div>

          {/* Omen Ribbon */}
          <div className="p-4 bg-gradient-to-r from-amber-900 via-amber-950 to-stone-900 text-amber-50 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                ĐIỀM QUẺ CỔ TRUYỀN:
              </div>
              <div className="text-lg font-serif font-bold text-white">
                "{hexagram.omen}" — {hexagram.omenMeaning}
              </div>
            </div>
            {hexagram.trieuDoan && (
              <div className="md:max-w-md bg-amber-800/60 p-3 rounded-lg border border-amber-700 text-xs font-serif italic text-amber-100">
                "{hexagram.trieuDoan}"
              </div>
            )}
          </div>
        </header>

        {/* View Mode Tabs */}
        <div className="mb-6 flex items-center justify-between gap-3 border-b border-stone-200 pb-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveTab('full-article')}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'full-article'
                  ? 'bg-amber-900 text-white shadow-sm ring-2 ring-amber-900/30'
                  : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>Toàn Văn Luận Giải Dantocking</span>
              <span className="text-[11px] bg-amber-950/60 text-amber-200 px-1.5 py-0.5 rounded font-mono">
                Bản Đầy Đủ
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('summary')}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'summary'
                  ? 'bg-amber-900 text-white shadow-sm ring-2 ring-amber-900/30'
                  : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Tóm Tắt & Ứng Dụng Đời Sống</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('lines')}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'lines'
                  ? 'bg-amber-900 text-white shadow-sm ring-2 ring-amber-900/30'
                  : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>6 Hào Động & Quẻ Biến</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('related')}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'related'
                  ? 'bg-amber-900 text-white shadow-sm ring-2 ring-amber-900/30'
                  : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Quẻ Tương Quan (Hỗ, Thác, Tống)</span>
            </button>
          </div>

          {/* Reader Preferences (Only active in full-article tab) */}
          {activeTab === 'full-article' && (
            <div className="flex items-center gap-2 flex-wrap text-xs bg-white p-1.5 rounded-xl border border-stone-200">
              <span className="text-stone-400 pl-1 font-medium hidden sm:inline">Hiển thị:</span>
              
              {/* Font Size */}
              <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                  className="px-2 py-1 text-stone-600 hover:bg-stone-100 font-bold"
                  title="Giảm cỡ chữ"
                >
                  A-
                </button>
                <span className="px-2 py-1 text-stone-700 font-mono font-semibold bg-stone-50 border-x border-stone-200">
                  {fontSize}px
                </span>
                <button
                  type="button"
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  className="px-2 py-1 text-stone-600 hover:bg-stone-100 font-bold"
                  title="Tăng cỡ chữ"
                >
                  A+
                </button>
              </div>

              {/* Font Family */}
              <button
                type="button"
                onClick={() => setFontFamily(fontFamily === 'serif' ? 'sans' : 'serif')}
                className="px-2.5 py-1 rounded-lg border border-stone-200 hover:bg-stone-100 font-medium text-stone-700 flex items-center gap-1"
                title="Đổi kiểu chữ"
              >
                <Type className="w-3.5 h-3.5" />
                <span>{fontFamily === 'serif' ? 'Phông Serif' : 'Phông Sans'}</span>
              </button>

              {/* Paper Theme */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setPaperTheme('ivory')}
                  className={`w-6 h-6 rounded-full border ${
                    paperTheme === 'ivory' ? 'ring-2 ring-amber-700 border-amber-800' : 'border-stone-300'
                  } bg-[#fcfbf7]`}
                  title="Giấy ngà cổ điển"
                />
                <button
                  type="button"
                  onClick={() => setPaperTheme('white')}
                  className={`w-6 h-6 rounded-full border ${
                    paperTheme === 'white' ? 'ring-2 ring-amber-700 border-amber-800' : 'border-stone-300'
                  } bg-white`}
                  title="Nền trắng sáng"
                />
                <button
                  type="button"
                  onClick={() => setPaperTheme('sepia')}
                  className={`w-6 h-6 rounded-full border ${
                    paperTheme === 'sepia' ? 'ring-2 ring-amber-700 border-amber-800' : 'border-stone-300'
                  } bg-[#faf5eb]`}
                  title="Nền vàng ấm sepia"
                />
              </div>
            </div>
          )}
        </div>

        {/* TAB 1: FULL VERBATIM DANTOCKING ARTICLE (CLONED LONG-FORM) */}
        {activeTab === 'full-article' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents Sticky Sidebar */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-32 bg-white rounded-2xl border border-stone-200 p-5 space-y-4 shadow-xs">
                <div className="text-xs font-serif font-bold text-stone-900 uppercase tracking-widest border-b border-stone-200 pb-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-800" />
                    Mục Lục Bài Luận
                  </span>
                  <span className="text-[10px] text-stone-500 font-normal">
                    {articleData?.headings.length || 0} mục
                  </span>
                </div>

                {articleData?.sourceUrl && (
                  <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 space-y-1.5 text-xs">
                    <div className="font-semibold text-amber-950 flex items-center justify-between">
                      <span>Nguồn tài liệu:</span>
                      <span className="font-mono text-[10px] text-amber-800">Dantocking</span>
                    </div>
                    <p className="text-[11px] text-stone-600 line-clamp-2">
                      Lưu trữ tác phẩm Dịch học của Phạm Hùng Sơn & Dịch lý cổ truyền.
                    </p>
                    <a
                      href={articleData.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900 hover:text-amber-700 underline"
                    >
                      <span>Xem bài gốc trên Dantocking</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}

                {/* Headings List */}
                <div className="max-h-[55vh] overflow-y-auto space-y-1.5 text-xs text-stone-600 pr-1">
                  {articleData && articleData.headings.length > 0 ? (
                    articleData.headings.map((h, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => {
                          // Search for this heading text inside article and scroll to it
                          const elements = document.querySelectorAll('.dantocking-article *');
                          for (const el of Array.from(elements)) {
                            if (el.textContent && el.textContent.includes(h.substring(0, 30))) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              break;
                            }
                          }
                        }}
                        className="block w-full text-left py-1 px-2 rounded-md hover:bg-stone-100 hover:text-amber-950 transition-colors cursor-pointer truncate"
                        title={h}
                      >
                        <span className="text-stone-400 font-mono mr-1.5">{i + 1}.</span>
                        {h}
                      </button>
                    ))
                  ) : (
                    <div className="text-stone-400 text-xs italic">Đang tải mục lục...</div>
                  )}
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-amber-900 cursor-pointer"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                    <span>Lên đầu trang</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Long-Form Article Reading Area */}
            <div className="lg:col-span-3 space-y-6">
              <div
                className={`rounded-2xl border border-stone-200 p-6 sm:p-10 md:p-12 shadow-xs transition-colors ${paperBgClass}`}
              >
                {/* Source attribution header banner */}
                <div className="mb-8 pb-6 border-b border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block">
                      BÀI LUẬN GIẢI CHÍNH THỨC TỪ DANTOCKING.COM
                    </span>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                      {articleData?.title || hexagram.name}
                    </h2>
                  </div>

                  {articleData?.sourceUrl && (
                    <a
                      href={articleData.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold shadow-2xs transition-colors shrink-0"
                    >
                      <span>Mở bài gốc trên Dantocking.com</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Article Content Render */}
                {isLoadingArticle ? (
                  <div className="py-20 flex flex-col items-center justify-center space-y-4 text-stone-500">
                    <div className="w-10 h-10 border-3 border-amber-900 border-t-transparent rounded-full animate-spin" />
                    <p className="font-serif text-lg">Đang tải toàn văn luận giải dài từ Dantocking...</p>
                  </div>
                ) : loadError ? (
                  <div className="py-12 p-6 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-center space-y-2">
                    <p className="font-semibold">{loadError}</p>
                    <p className="text-xs text-rose-600">
                      Bạn có thể xem bài viết trực tiếp tại:
                      <a
                        href={`https://www.dantocking.com/p/que-${hexagram.id}-...html`}
                        target="_blank"
                        rel="noreferrer"
                        className="underline ml-1 font-semibold"
                      >
                        dantocking.com
                      </a>
                    </p>
                  </div>
                ) : articleData ? (
                  <div
                    className={`dantocking-article ${fontFamily === 'serif' ? 'font-serif' : 'font-sans'}`}
                    style={{ fontSize: `${fontSize}px` }}
                    dangerouslySetInnerHTML={{ __html: articleData.htmlContent }}
                  />
                ) : null}
              </div>

              {/* Bottom Source & Copyright Note */}
              <div className="p-6 bg-white rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-2">
                <div className="font-serif font-bold text-stone-900 text-sm">
                  Về Nguồn Tư Liệu Bài Viết:
                </div>
                <p className="leading-relaxed">
                  Toàn bộ nội dung luận giải chuyên sâu trên được bảo lưu nguyên bản từ tài liệu nghiên cứu của website{' '}
                  <a
                    href="https://www.dantocking.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 underline font-semibold"
                  >
                    dantocking.com
                  </a>
                  , lưu trữ tác phẩm Kinh Dịch và "Ký sự phía bên kia không gian chiều thứ tư" (Phạm Hùng Sơn). Bản số hóa này nhằm mục đích học tập, nghiên cứu và phổ biến văn hóa Dịch học truyền thống phi thương mại.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SUMMARY & LIFE ASPECTS */}
        {activeTab === 'summary' && (
          <div className="space-y-8">
            {/* Overview Section */}
            <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-5 shadow-xs">
              <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-serif font-bold text-sm flex items-center justify-center shrink-0">I</span>
                Tượng Quái & Cấu Trúc Âm Dương
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <span className="text-xs font-semibold text-stone-500 uppercase">Thượng Quái (Ngoại Quái):</span>
                  <div className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
                    <span className="text-2xl leading-none">{upper.symbol}</span>
                    <span>{upper.name} ({upper.natureName})</span>
                  </div>
                  <p className="text-xs text-stone-600">{upper.meaning}</p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <span className="text-xs font-semibold text-stone-500 uppercase">Hạ Quái (Nội Quái):</span>
                  <div className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
                    <span className="text-2xl leading-none">{lower.symbol}</span>
                    <span>{lower.name} ({lower.natureName})</span>
                  </div>
                  <p className="text-xs text-stone-600">{lower.meaning}</p>
                </div>
              </div>

              <div className="text-stone-800 leading-relaxed space-y-3">
                <h3 className="text-lg font-serif font-bold text-amber-950">Bản Chất Dịch Lý Của Quẻ</h3>
                <p className="leading-relaxed whitespace-pre-line text-base text-stone-700">
                  {hexagram.dichLy}
                </p>
              </div>
            </section>

            {/* Thoán Từ & Thoán Truyện */}
            <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-serif font-bold text-sm flex items-center justify-center shrink-0">II</span>
                Thoán Từ & Thoán Truyện (Văn Vương & Khổng Tử)
              </h2>

              <div className="space-y-4">
                {hexagram.thoanTu.original && (
                  <div className="text-sm font-mono text-stone-500 tracking-wider">
                    NGUYÊN VĂN CHỮ HÁN: <strong className="text-stone-900 font-serif text-lg">{hexagram.thoanTu.original}</strong>
                  </div>
                )}

                <div className="p-5 bg-amber-50/80 rounded-xl border border-amber-200/80 space-y-2">
                  <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
                    PHIÊN ÂM HÁN VIỆT:
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-amber-950">
                    {hexagram.thoanTu.hanViet}
                  </div>
                </div>

                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                    DỊCH NGHĨA KINH ĐIỂN:
                  </div>
                  <div className="text-base sm:text-lg text-stone-900 font-medium leading-relaxed">
                    {hexagram.thoanTu.dichNghia}
                  </div>
                </div>

                <div className="p-5 bg-stone-100/70 rounded-xl border border-stone-200 space-y-2">
                  <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                    THOÁN TRUYỆN (KHỔNG TỬ GIẢNG):
                  </div>
                  <p className="font-serif font-bold text-stone-900">{thoanTruyen.hanViet}</p>
                  <p className="text-stone-700 text-sm leading-relaxed">{thoanTruyen.dichNghia}</p>
                </div>
              </div>
            </section>

            {/* Đại Tượng Truyện */}
            <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-5 shadow-xs">
              <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-serif font-bold text-sm flex items-center justify-center shrink-0">III</span>
                Đại Tượng Truyện (Lời Tượng Bàn Về Đạo Quân Tử)
              </h2>

              <div className="space-y-4">
                <div className="p-5 bg-stone-100/90 rounded-xl border border-stone-200 space-y-2">
                  <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                    PHIÊN ÂM ĐẠI TƯỢNG:
                  </div>
                  <p className="text-xl font-serif font-bold text-stone-900">
                    {hexagram.daiTuong.hanViet}
                  </p>
                </div>

                <div className="p-5 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-2">
                  <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
                    DỊCH NGHĨA ĐẠI TƯỢNG:
                  </div>
                  <p className="text-base sm:text-lg text-amber-950 font-medium leading-relaxed">
                    {hexagram.daiTuong.dichNghia}
                  </p>
                </div>
              </div>
            </section>

            {/* 5 Practical Life Aspects */}
            <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-serif font-bold text-sm flex items-center justify-center shrink-0">IV</span>
                Ứng Dụng Thực Tiễn 5 Phương Diện Đời Sống
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 1. Công danh */}
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 font-serif font-bold text-base text-amber-950">
                    <Briefcase className="w-5 h-5 text-amber-700" />
                    1. Sự Nghiệp, Công Danh & Sự Vụ
                  </div>
                  <p className="text-stone-800 text-sm leading-relaxed pl-7">
                    {hexagram.aspects.career}
                  </p>
                </div>

                {/* 2. Tài vận */}
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 font-serif font-bold text-base text-emerald-950">
                    <Coins className="w-5 h-5 text-emerald-700" />
                    2. Tài Vận, Đầu Tư & Kinh Doanh
                  </div>
                  <p className="text-stone-800 text-sm leading-relaxed pl-7">
                    {hexagram.aspects.wealth}
                  </p>
                </div>

                {/* 3. Tình cảm */}
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 font-serif font-bold text-base text-rose-950">
                    <Heart className="w-5 h-5 text-rose-700" />
                    3. Tình Cảm, Hôn Nhân & Gia Đạo
                  </div>
                  <p className="text-stone-800 text-sm leading-relaxed pl-7">
                    {hexagram.aspects.love}
                  </p>
                </div>

                {/* 4. Sức khỏe */}
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 font-serif font-bold text-base text-sky-950">
                    <Activity className="w-5 h-5 text-sky-700" />
                    4. Sức Khỏe & Bệnh Tật
                  </div>
                  <p className="text-stone-800 text-sm leading-relaxed pl-7">
                    {hexagram.aspects.health}
                  </p>
                </div>

                {/* 5. Xuất hành */}
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-2 md:col-span-2">
                  <div className="flex items-center gap-2 font-serif font-bold text-base text-indigo-950">
                    <Compass className="w-5 h-5 text-indigo-700" />
                    5. Xuất Hành, Giao Tiếp & Mưu Sự Cầu Việc
                  </div>
                  <p className="text-stone-800 text-sm leading-relaxed pl-7">
                    {hexagram.aspects.travel}
                  </p>
                </div>
              </div>
            </section>

            {/* Advice */}
            <section className="bg-gradient-to-r from-amber-50 to-orange-50/50 rounded-2xl border border-amber-300 p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="text-2xl font-serif font-bold text-amber-950 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-amber-800" />
                Tổng Kết: Đạo Sống & Lời Răn Của Người Quân Tử
              </h2>

              <p className="text-base sm:text-lg text-amber-950 leading-relaxed font-serif italic border-l-4 border-amber-700 pl-4 py-1">
                "{hexagram.aspects.advice}"
              </p>
            </section>
          </div>
        )}

        {/* TAB 3: 6 LINES INTERACTIVE DIVINATION */}
        {activeTab === 'lines' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Luận Giải Chi Tiết Từng Hào Từ & Biến Quẻ
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                Nhấp vào từng hào dưới đây (từ Sơ hào đến Thượng hào) để xem ý nghĩa hào từ và xem quẻ biến tương ứng khi hào này động:
              </p>
            </div>

            {/* Line Selection Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {hexagram.sixLines.map((line) => {
                const isSelected = activeLineTab === line.position;
                return (
                  <button
                    type="button"
                    key={line.position}
                    onClick={() => setActiveLineTab(line.position)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-amber-700 bg-amber-50/90 shadow-xs ring-2 ring-amber-700/20'
                        : 'border-stone-200 bg-stone-50 hover:bg-stone-100 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono font-bold text-amber-900 uppercase">
                        Hào {line.position}
                      </span>
                      <span className="text-xs">{line.type === 'Dương' ? '⚊' : '⚋'}</span>
                    </div>
                    <div className="font-serif font-bold text-stone-900 text-sm truncate">
                      {line.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Line Detail Card */}
            {(() => {
              const line = hexagram.sixLines.find((l) => l.position === activeLineTab);
              if (!line) return null;

              return (
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-300 space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                          HÀO {line.position}: {line.type.toUpperCase()}
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-stone-900">
                          {line.name}
                        </h3>
                      </div>
                      <p className="text-sm font-serif italic text-amber-950 mt-1">
                        "{line.meaning}"
                      </p>
                    </div>

                    {/* Transformed Hexagram Preview */}
                    {changedHex && (
                      <div
                        onClick={() => onSelectHexagram(changedHex)}
                        className="p-3 bg-white rounded-xl border border-stone-200 hover:border-amber-500 shadow-2xs transition-all cursor-pointer flex items-center gap-3 shrink-0"
                        title="Bấm để mở trang quẻ biến này"
                      >
                        <HexagramGlyph lines={changedHex.lines} size="sm" />
                        <div>
                          <span className="text-[10px] font-mono font-bold text-stone-400 block uppercase">
                            Quẻ Biến khi Hào {line.position} Động:
                          </span>
                          <div className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1">
                            <span>#{changedHex.id} {changedHex.name}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-amber-700" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Line Explanation */}
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                      <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                        LỜI BÀN & GIẢNG GIẢI HÀO TỪ:
                      </div>
                      <p className="text-stone-800 text-base leading-relaxed">
                        {line.giangGiai || line.dichNghia || line.meaning}
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/70 space-y-1">
                      <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Lời Khuyên Hành Sự Của Hào Này:
                      </div>
                      <p className="text-amber-950 text-sm font-medium leading-relaxed">
                        {line.advice}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 4: RELATED HEXAGRAMS */}
        {activeTab === 'related' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Hệ Thống Quẻ Tương Quan (Hỗ, Thác, Tống)
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                Kinh Dịch không nhìn một sự vật đơn độc mà nhìn trong thế liên hoàn biến hóa. Nhấp vào bất kỳ quẻ nào dưới đây để mở trang nghiên cứu toàn diện của quẻ đó:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Quẻ Hỗ */}
              {mutualHex && (
                <div
                  onClick={() => onSelectHexagram(mutualHex)}
                  className="p-5 bg-stone-50 rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold text-amber-800 uppercase tracking-widest block mb-2">
                      1. QUẺ HỖ (Nội tình bên trong)
                    </span>
                    <div className="flex items-center gap-3 mb-3">
                      <HexagramGlyph lines={mutualHex.lines} size="sm" />
                      <div>
                        <div className="font-serif font-bold text-stone-900 text-base">
                          #{mutualHex.id} {mutualHex.name}
                        </div>
                        <span className="text-xs text-stone-500">
                          {mutualHex.nature} · {mutualHex.omen}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {mutualHex.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-200/80 text-xs font-semibold text-amber-900 flex items-center justify-between">
                    <span>Mở trang Quẻ Hỗ</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* Quẻ Thác */}
              {oppHex && (
                <div
                  onClick={() => onSelectHexagram(oppHex)}
                  className="p-5 bg-stone-50 rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold text-indigo-800 uppercase tracking-widest block mb-2">
                      2. QUẺ THÁC (Mặt đối lập toàn diện)
                    </span>
                    <div className="flex items-center gap-3 mb-3">
                      <HexagramGlyph lines={oppHex.lines} size="sm" />
                      <div>
                        <div className="font-serif font-bold text-stone-900 text-base">
                          #{oppHex.id} {oppHex.name}
                        </div>
                        <span className="text-xs text-stone-500">
                          {oppHex.nature} · {oppHex.omen}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {oppHex.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-200/80 text-xs font-semibold text-indigo-900 flex items-center justify-between">
                    <span>Mở trang Quẻ Thác</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* Quẻ Tống */}
              {invHex && (
                <div
                  onClick={() => onSelectHexagram(invHex)}
                  className="p-5 bg-stone-50 rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-widest block mb-2">
                      3. QUẺ TỐNG (Góc nhìn lật ngược 180°)
                    </span>
                    <div className="flex items-center gap-3 mb-3">
                      <HexagramGlyph lines={invHex.lines} size="sm" />
                      <div>
                        <div className="font-serif font-bold text-stone-900 text-base">
                          #{invHex.id} {invHex.name}
                        </div>
                        <span className="text-xs text-stone-500">
                          {invHex.nature} · {invHex.omen}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {invHex.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-200/80 text-xs font-semibold text-emerald-900 flex items-center justify-between">
                    <span>Mở trang Quẻ Tống</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom Large Prev / Next Navigation Cards */}
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-8 border-t border-stone-200">
          {prevHex ? (
            <div
              onClick={() => onSelectHexagram(prevHex)}
              className="p-5 bg-white rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all cursor-pointer flex items-center gap-4 group"
            >
              <ChevronLeft className="w-6 h-6 text-stone-400 group-hover:text-amber-800 group-hover:-translate-x-1 transition-transform shrink-0" />
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wide block">
                  Quẻ Trước Đó
                </span>
                <div className="font-serif font-bold text-stone-900 text-base truncate group-hover:text-amber-900">
                  Quẻ #{prevHex.id}: {prevHex.name}
                </div>
                <span className="text-xs text-stone-500 truncate block">
                  Điềm: {prevHex.omen}
                </span>
              </div>
            </div>
          ) : <div />}

          {nextHex ? (
            <div
              onClick={() => onSelectHexagram(nextHex)}
              className="p-5 bg-white rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all cursor-pointer flex items-center justify-between gap-4 group text-right"
            >
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wide block">
                  Quẻ Kế Tiếp
                </span>
                <div className="font-serif font-bold text-stone-900 text-base truncate group-hover:text-amber-900">
                  Quẻ #{nextHex.id}: {nextHex.name}
                </div>
                <span className="text-xs text-stone-500 truncate block">
                  Điềm: {nextHex.omen}
                </span>
              </div>
              <ChevronRight className="w-6 h-6 text-stone-400 group-hover:text-amber-800 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          ) : <div />}
        </nav>

        {/* Back to top & back to board buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackToBoard}
            className="w-full sm:w-auto px-5 py-2.5 bg-amber-900 hover:bg-amber-950 text-white text-sm font-semibold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Trở Về Bảng 64 Quẻ Cổ Điển</span>
          </button>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-stone-500 hover:text-amber-900 flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Lên đầu trang</span>
          </button>
        </div>
      </div>
    </article>
  );
};

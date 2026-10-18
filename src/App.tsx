import { useState, useEffect, useMemo } from 'react';
import { Search, Compass, Sparkles, Filter, Grid, LayoutGrid, RotateCcw } from 'lucide-react';
import { ALL_HEXAGRAMS, getHexagramById } from './data/hexagrams';
import { Hexagram } from './data/types';
import { Header } from './components/Header';
import { ClassicTableView } from './components/ClassicTableView';
import { CardGridView } from './components/CardGridView';
import { HexagramDetailPage } from './components/HexagramDetailPage';
import { QuickLookupModal } from './components/QuickLookupModal';
import { CoinCastModal } from './components/CoinCastModal';
import { AboutIChingModal } from './components/AboutIChingModal';

export default function App() {
  const [selectedHexagram, setSelectedHexagram] = useState<Hexagram | null>(null);
  const [currentView, setCurrentView] = useState<'classic' | 'grid'>('classic');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedElement, setSelectedElement] = useState<string>('all');
  const [selectedNature, setSelectedNature] = useState<string>('all');

  // Modals state
  const [isQuickLookupOpen, setIsQuickLookupOpen] = useState<boolean>(false);
  const [isCoinCastOpen, setIsCoinCastOpen] = useState<boolean>(false);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

  // Sync with URL hash (e.g. #que-1 to open Hexagram 1 full article)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#que-')) {
        const id = parseInt(hash.replace('#que-', ''), 10);
        if (!isNaN(id) && id >= 1 && id <= 64) {
          const hex = getHexagramById(id);
          if (hex) setSelectedHexagram(hex);
        }
      } else {
        setSelectedHexagram(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectHexagram = (hex: Hexagram) => {
    setSelectedHexagram(hex);
    window.location.hash = `que-${hex.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBoard = () => {
    setSelectedHexagram(null);
    history.pushState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered hexagrams
  const filteredHexagrams = useMemo(() => {
    return ALL_HEXAGRAMS.filter((hex) => {
      // Search text
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = hex.name.toLowerCase().includes(q);
        const matchesAlt = hex.altName.toLowerCase().includes(q);
        const matchesId = hex.id.toString() === q;
        const matchesOmen = hex.omen.toLowerCase().includes(q);
        const matchesHanzi = hex.hanzi.includes(q);
        if (!matchesName && !matchesAlt && !matchesId && !matchesOmen && !matchesHanzi) {
          return false;
        }
      }

      // Element filter
      if (selectedElement !== 'all' && hex.element !== selectedElement) {
        return false;
      }

      // Nature filter
      if (selectedNature !== 'all') {
        if (selectedNature === 'cat' && !hex.nature.includes('Cát')) return false;
        if (selectedNature === 'hung' && !hex.nature.includes('Hung')) return false;
        if (selectedNature === 'binh' && !hex.nature.includes('Bình')) return false;
      }

      return true;
    });
  }, [searchQuery, selectedElement, selectedNature]);

  const hasActiveFilter = searchQuery.trim() !== '' || selectedElement !== 'all' || selectedNature !== 'all';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedElement('all');
    setSelectedNature('all');
  };

  // IF A HEXAGRAM IS SELECTED -> RENDER DEDICATED FULL LONG-FORM ARTICLE PAGE
  if (selectedHexagram) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col text-stone-900 selection:bg-amber-100 selection:text-amber-900">
        <Header
          onOpenQuickLookup={() => setIsQuickLookupOpen(true)}
          onOpenCoinCast={() => setIsCoinCastOpen(true)}
          onOpenAbout={() => setIsAboutOpen(true)}
          onSelectView={(v) => {
            handleBackToBoard();
            setCurrentView(v);
          }}
          currentView={currentView}
        />

        <HexagramDetailPage
          hexagram={selectedHexagram}
          onBackToBoard={handleBackToBoard}
          onSelectHexagram={handleSelectHexagram}
        />

        {/* Quick Trigram Lookup Modal */}
        <QuickLookupModal
          isOpen={isQuickLookupOpen}
          onClose={() => setIsQuickLookupOpen(false)}
          onSelectHexagram={handleSelectHexagram}
        />

        {/* 3-Coin Divination Modal */}
        <CoinCastModal
          isOpen={isCoinCastOpen}
          onClose={() => setIsCoinCastOpen(false)}
          onSelectHexagram={handleSelectHexagram}
        />

        {/* About I Ching Reference Modal */}
        <AboutIChingModal
          isOpen={isAboutOpen}
          onClose={() => setIsAboutOpen(false)}
        />
      </div>
    );
  }

  // DEFAULT VIEW: 8X8 TABLE OR CARD SEARCH DIRECTORY
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar Header */}
      <Header
        onOpenQuickLookup={() => setIsQuickLookupOpen(true)}
        onOpenCoinCast={() => setIsCoinCastOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onSelectView={(v) => setCurrentView(v)}
        currentView={currentView}
      />

      {/* Hero Curatorial Section */}
      <section className="bg-gradient-to-b from-stone-100/90 via-amber-50/30 to-stone-50 border-b border-stone-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100/80 text-amber-900 rounded-full text-xs font-semibold tracking-wide border border-amber-200">
            <span>Dịch Học Cổ Truyền & Dịch Lý Mai Hoa</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-stone-900 text-balance max-w-4xl mx-auto">
            Ý Nghĩa & Luận Giải Chi Tiết 64 Quẻ Kinh Dịch
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed text-balance">
            Tra cứu toàn bộ 64 quẻ dịch theo thứ tự Văn Vương. Khám phá tượng quẻ, điềm báo, thoán từ, 6 hào từ và ứng dụng thiết thực trong sự nghiệp, tài lộc, tình duyên, gia đạo.
          </p>

          {/* Quick Metrics / Stats Ribbon */}
          <div className="pt-2 flex items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-stone-600 font-medium">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-amber-900 text-lg">64</span>
              <span>Quẻ Trùng Quái</span>
            </div>
            <span className="text-stone-300">·</span>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-amber-900 text-lg">8</span>
              <span>Bát Quái Đơn</span>
            </div>
            <span className="text-stone-300">·</span>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-amber-900 text-lg">384</span>
              <span>Hào Vị Biến Hóa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-6 w-full">
        {/* Controls Toolbar: Search & Filter Ribbon */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-stone-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo tên quẻ (Càn, Truân, Khiêm...), số quẻ (1, 64) hoặc điềm quẻ (Khốn Long, Ngạ Hổ...)"
                className="w-full pl-11 pr-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/50 focus:border-amber-700 transition-all placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 p-1"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg shrink-0 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setCurrentView('classic')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentView === 'classic' && !hasActiveFilter
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Bảng 8x8 cổ điển như trên trang dantocking.com"
              >
                <Grid className="w-3.5 h-3.5 text-amber-800" />
                <span>Bảng 8x8 Cổ Điển</span>
              </button>
              <button
                type="button"
                onClick={() => setCurrentView('grid')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentView === 'grid' || hasActiveFilter
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Danh sách thẻ quẻ tìm kiếm và lọc linh hoạt"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-amber-800" />
                <span>Thẻ Danh Sách ({filteredHexagrams.length})</span>
              </button>
            </div>
          </div>

          {/* Filters Row: Ngũ Hành & Tính chất Cát / Hung */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-stone-500 flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" />
                Ngũ Hành:
              </span>
              {['all', 'Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'].map((elm) => (
                <button
                  type="button"
                  key={elm}
                  onClick={() => setSelectedElement(elm)}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedElement === elm
                      ? 'bg-amber-800 text-white font-medium shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {elm === 'all' ? 'Tất cả' : elm}
                </button>
              ))}

              <span className="text-stone-300 mx-1 hidden sm:inline">|</span>

              <span className="font-semibold text-stone-500 mr-1 hidden sm:inline">Tính chất:</span>
              {[
                { key: 'all', label: 'Tất cả' },
                { key: 'cat', label: 'Cát' },
                { key: 'hung', label: 'Hung' },
                { key: 'binh', label: 'Bình' },
              ].map(({ key, label }) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => setSelectedNature(key)}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedNature === key
                      ? 'bg-amber-800 text-white font-medium shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {hasActiveFilter && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-amber-800 hover:text-amber-900 font-medium flex items-center gap-1 cursor-pointer ml-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Đặt lại bộ lọc</span>
              </button>
            )}
          </div>
        </div>

        {/* View Content Display */}
        {hasActiveFilter || currentView === 'grid' ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-stone-500 px-1">
              <span>
                Tìm thấy <strong>{filteredHexagrams.length}</strong> / 64 quẻ phù hợp
              </span>
              {hasActiveFilter && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-amber-800 hover:underline cursor-pointer"
                >
                  Quay lại xem bảng 8x8 đầy đủ
                </button>
              )}
            </div>
            <CardGridView
              hexagrams={filteredHexagrams}
              onSelectHexagram={handleSelectHexagram}
            />
          </div>
        ) : (
          <ClassicTableView
            hexagrams={ALL_HEXAGRAMS}
            onSelectHexagram={handleSelectHexagram}
          />
        )}

        {/* Quick Tools Floating Banners */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div
            onClick={() => setIsQuickLookupOpen(true)}
            className="p-5 bg-gradient-to-r from-amber-50 to-stone-50 rounded-xl border border-amber-200/80 hover:border-amber-400 hover:shadow-sm transition-all cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-800 text-white flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  Tra Cứu Bát Quái Theo Thượng & Hạ Quái
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Chọn 2 quẻ đơn (Thượng quái + Hạ quái) để tìm ngay quẻ trùng quái tương ứng.
                </p>
              </div>
            </div>
            <span className="text-amber-800 font-semibold text-xs shrink-0 ml-2">
              Tra Cứu →
            </span>
          </div>

          <div
            onClick={() => setIsCoinCastOpen(true)}
            className="p-5 bg-gradient-to-r from-stone-100 to-amber-50/50 rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-sm transition-all cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-stone-800 text-amber-200 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  Gieo Quẻ Ba Đồng Tiền Cổ Truyền
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Tâm niệm vấn đề cần hỏi, gieo 6 hào để tìm quẻ chủ và hào biến động giải đáp.
                </p>
              </div>
            </div>
            <span className="text-amber-800 font-semibold text-xs shrink-0 ml-2">
              Gieo Quẻ →
            </span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-8 text-xs text-stone-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-stone-900 text-sm">64 Quẻ Kinh Dịch</span>
            <span>·</span>
            <span>Kho Tàng Triết Lý & Luận Giải Dịch Học Phương Đông</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsAboutOpen(true)}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              Về Kinh Dịch
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setIsQuickLookupOpen(true)}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              Bát Quái Tra Cứu
            </button>
            <span>·</span>
            <span>Tham khảo Dantocking & Cổ Thư Kinh Dịch</span>
          </div>
        </div>
      </footer>

      {/* Quick Trigram Lookup Modal */}
      <QuickLookupModal
        isOpen={isQuickLookupOpen}
        onClose={() => setIsQuickLookupOpen(false)}
        onSelectHexagram={handleSelectHexagram}
      />

      {/* 3-Coin Divination Modal */}
      <CoinCastModal
        isOpen={isCoinCastOpen}
        onClose={() => setIsCoinCastOpen(false)}
        onSelectHexagram={handleSelectHexagram}
      />

      {/* About I Ching Reference Modal */}
      <AboutIChingModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}

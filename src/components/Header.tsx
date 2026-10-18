import React from 'react';
import { Compass, Sparkles, BookOpen } from 'lucide-react';

interface HeaderProps {
  onOpenQuickLookup: () => void;
  onOpenCoinCast: () => void;
  onOpenAbout: () => void;
  onSelectView: (view: 'classic' | 'grid') => void;
  currentView: 'classic' | 'grid';
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuickLookup,
  onOpenCoinCast,
  onOpenAbout,
  onSelectView,
  currentView,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-700 text-amber-50 flex items-center justify-center font-serif text-lg font-bold shadow-sm">
            易
          </div>
          <a
            href="/"
            className="text-lg sm:text-xl font-serif font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-amber-800 transition-colors"
          >
            64 Quẻ Kinh Dịch
          </a>
        </div>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            type="button"
            onClick={() => onSelectView('classic')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentView === 'classic'
                ? 'text-amber-800 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            Bảng 8x8 Cổ Điển
          </button>
          <button
            type="button"
            onClick={() => onSelectView('grid')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentView === 'grid'
                ? 'text-amber-800 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            Danh Sách 64 Quẻ
          </button>
          <button
            type="button"
            onClick={onOpenQuickLookup}
            className="whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4 text-amber-700" />
            Tra Cứu Bát Quái
          </button>
          <button
            type="button"
            onClick={onOpenAbout}
            className="whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-stone-500" />
            Cẩm Nang Dịch Lý
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCoinCast}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Gieo Quẻ Hỏi Việc
          </button>
        </div>
      </div>
    </header>
  );
};

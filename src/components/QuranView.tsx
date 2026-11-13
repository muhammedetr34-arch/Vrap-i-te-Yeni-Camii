import { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  BookOpenText,
  ChevronLeft,
  ChevronRight,
  Loader2,
  RefreshCw,
  Search,
} from 'lucide-react';
import { Lang, TranslationTree } from '../data/i18n';
import {
  BUILTIN_SURAHS,
  fetchSurahVerses,
  POPULAR_SURAH_NUMBERS,
  QuranVerse,
  SURAH_INDEX,
} from '../data/quranData';

interface QuranViewProps {
  t: TranslationTree;
  lang: Lang;
}

type FontScale = 'small' | 'medium' | 'large';

export function QuranView({ t, lang }: QuranViewProps) {
  const [selectedSurah, setSelectedSurah] = useState<number>(1);
  const [search, setSearch] = useState('');
  const [showMeal, setShowMeal] = useState(true);
  const [fontScale, setFontScale] = useState<FontScale>('medium');
  const [verses, setVerses] = useState<QuranVerse[]>(BUILTIN_SURAHS[1]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reloadTick, setReloadTick] = useState(0);

  const activeMeta = useMemo(
    () => SURAH_INDEX.find((s) => s.number === selectedSurah) ?? SURAH_INDEX[0],
    [selectedSurah]
  );

  const filteredSurahs = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return SURAH_INDEX;
    return SURAH_INDEX.filter(
      (s) =>
        s.tr.toLowerCase().includes(q) ||
        s.sq.toLowerCase().includes(q) ||
        s.arabic.includes(q) ||
        String(s.number) === q
    );
  }, [search]);

  useEffect(() => {
    let cancelled = false;
    setError(false);

    if (BUILTIN_SURAHS[selectedSurah]) {
      setVerses(BUILTIN_SURAHS[selectedSurah]);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetchSurahVerses(selectedSurah)
      .then((data) => {
        if (!cancelled) {
          setVerses(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [selectedSurah, reloadTick]);

  const arabicSizeClass =
    fontScale === 'small'
      ? 'text-2xl leading-[2.1]'
      : fontScale === 'large'
        ? 'text-4xl leading-[2.3]'
        : 'text-3xl leading-[2.2]';

  const handleSelectSurah = (num: number) => {
    setSelectedSurah(num);
    const readerEl = document.getElementById('quran-reader-panel');
    if (readerEl && window.innerWidth < 1024) {
      readerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="text-center space-y-2 pb-2">
        <h1 className="font-display text-3xl sm:text-5xl text-[#1A1F1B]">
          {t.quran.title}
        </h1>
        <p className="text-sm sm:text-base text-[#6B7268] max-w-2xl mx-auto">
          {t.quran.subtitle}
        </p>
        <div className="section-rule" aria-hidden="true">
          <span>✦</span>
        </div>
      </header>

      {/* Popular Quick-Jump Surahs */}
      <section className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-[#6B7268] text-center">
          {t.quran.popularTitle}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {POPULAR_SURAH_NUMBERS.map((num) => {
            const meta = SURAH_INDEX.find((s) => s.number === num);
            if (!meta) return null;
            const active = selectedSurah === num;
            return (
              <button
                key={num}
                type="button"
                onClick={() => handleSelectSurah(num)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-full border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[#0B4A34] text-white border-[#0B4A34]'
                    : 'bg-white/90 text-[#1A1F1B] border-[#1A1F1B]/12 hover:border-[#B08A3E]'
                }`}
              >
                <span className="font-mono mr-1.5 opacity-75">{meta.number}.</span>
                {meta[lang]}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Split: 114-Surah Directory + Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Sidebar: Surah List */}
        <aside className="lg:col-span-4 rounded-[20px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-[#1A1F1B]/10 space-y-3 bg-[#F6F4EE]/70">
            <h2 className="font-display text-xl text-[#1A1F1B]">
              {t.quran.allSurahs}
            </h2>
            <div className="relative">
              <Search className="w-4 h-4 text-[#6B7268] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.quran.searchPlaceholder}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-[10px] border border-[#1A1F1B]/15 bg-white text-[#1A1F1B]"
              />
            </div>
          </div>

          <div className="max-h-[540px] overflow-y-auto divide-y divide-[#1A1F1B]/8">
            {filteredSurahs.map((surah) => {
              const isSelected = surah.number === selectedSurah;
              return (
                <button
                  key={surah.number}
                  type="button"
                  onClick={() => handleSelectSurah(surah.number)}
                  className={`w-full px-4 py-3 text-left flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B4A34] text-white'
                      : 'hover:bg-[#F6F4EE] text-[#1A1F1B]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`font-mono text-xs tabular-nums w-7 shrink-0 ${
                        isSelected ? 'text-white/80' : 'text-[#6B7268]'
                      }`}
                    >
                      {String(surah.number).padStart(3, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">
                        {surah[lang]}
                      </p>
                      <p
                        className={`text-[11px] truncate ${
                          isSelected ? 'text-white/80' : 'text-[#6B7268]'
                        }`}
                      >
                        {surah.ayahs} {t.quran.versesCount} ·{' '}
                        {surah.revelation === 'meccan'
                          ? t.quran.meccan
                          : t.quran.medinan}
                      </p>
                    </div>
                  </div>
                  <span
                    dir="rtl"
                    lang="ar"
                    className={`font-arabic text-lg shrink-0 ${
                      isSelected ? 'text-[#D9BD82]' : 'text-[#8A6A28]'
                    }`}
                  >
                    {surah.arabic}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Reader Panel */}
        <section
          id="quran-reader-panel"
          className="lg:col-span-8 rounded-[20px] border border-[#1A1F1B]/10 bg-white/95 shadow-xs p-6 sm:p-8 space-y-6"
        >
          {/* Reader Header & Controls */}
          <div className="border-b border-[#1A1F1B]/10 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-mono text-[#6B7268]">
                {activeMeta.number} / 114 · {activeMeta.ayahs}{' '}
                {t.quran.versesCount} ·{' '}
                {activeMeta.revelation === 'meccan'
                  ? t.quran.meccan
                  : t.quran.medinan}
              </p>
              <div className="flex items-baseline gap-3">
                <h2 className="font-display text-3xl text-[#1A1F1B]">
                  {activeMeta[lang]}
                </h2>
                <span
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-2xl text-[#8A6A28]"
                >
                  سورة {activeMeta.arabic}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setShowMeal((v) => !v)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-colors cursor-pointer ${
                  showMeal
                    ? 'bg-[#0B4A34] text-white border-[#0B4A34]'
                    : 'bg-[#F6F4EE] text-[#1A1F1B] border-[#1A1F1B]/15'
                }`}
              >
                {t.quran.showTranslation}
              </button>

              <div
                className="inline-flex rounded-full border border-[#1A1F1B]/12 bg-[#F6F4EE] p-0.5"
                role="group"
                aria-label={t.quran.fontSize}
              >
                {(['small', 'medium', 'large'] as FontScale[]).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFontScale(size)}
                    className={`px-3 py-1 text-[11px] font-semibold rounded-full transition-colors cursor-pointer ${
                      fontScale === size
                        ? 'bg-white text-[#1A1F1B] shadow-xs'
                        : 'text-[#6B7268]'
                    }`}
                  >
                    {t.quran[size]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bismillah Banner */}
          {selectedSurah !== 1 && selectedSurah !== 9 && !loading && !error && (
            <div className="py-3 text-center border-b border-[#D9BD82]/50">
              <p
                dir="rtl"
                lang="ar"
                className="font-arabic text-2xl sm:text-3xl text-[#0B4A34]"
              >
                {t.quran.bismillahBanner}
              </p>
            </div>
          )}

          {/* Verses Area */}
          {loading ? (
            <div className="py-16 flex flex-col items-center justify-center gap-3 text-sm text-[#6B7268]">
              <Loader2 className="w-6 h-6 animate-spin text-[#0B4A34]" />
              <p>{t.quran.loading}</p>
            </div>
          ) : error ? (
            <div className="p-6 rounded-[14px] bg-[#F6F4EE] border border-[#1A1F1B]/10 space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#B08A3E] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[#1A1F1B]">
                    {activeMeta[lang]}
                  </p>
                  <p className="text-sm text-[#6B7268]">{t.quran.offlineNote}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setReloadTick((n) => n + 1)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-[#0B4A34] text-white rounded-full hover:bg-[#063122] cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                {t.quran.retry}
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#1A1F1B]/8">
              {verses.map((verse) => (
                <article key={verse.numberInSurah} className="py-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#D9BD82] bg-[#F6F4EE] font-mono text-xs font-bold text-[#0B4A34] tabular-nums shrink-0 mt-1">
                      {verse.numberInSurah}
                    </span>
                    <p
                      dir="rtl"
                      lang="ar"
                      className={`font-arabic text-right text-[#1A1F1B] flex-1 ${arabicSizeClass}`}
                    >
                      {verse.arabic}
                    </p>
                  </div>
                  {showMeal && (
                    <p className="text-sm sm:text-base text-[#6B7268] leading-relaxed pl-12">
                      {verse[lang]}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}

          {/* Previous / Next Surah Footer */}
          <div className="pt-6 border-t border-[#1A1F1B]/10 flex items-center justify-between gap-4">
            <button
              type="button"
              disabled={selectedSurah <= 1}
              onClick={() => handleSelectSurah(selectedSurah - 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full border border-[#1A1F1B]/15 text-[#1A1F1B] hover:bg-[#F6F4EE] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              {t.quran.previousSurah}
            </button>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#6B7268]">
              <BookOpenText className="w-4 h-4 text-[#0B4A34]" />
              <span className="font-mono tabular-nums">
                {activeMeta.number} / 114
              </span>
            </div>

            <button
              type="button"
              disabled={selectedSurah >= 114}
              onClick={() => handleSelectSurah(selectedSurah + 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full border border-[#1A1F1B]/15 text-[#1A1F1B] hover:bg-[#F6F4EE] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              {t.quran.nextSurah}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  BookOpenText,
  BookText,
  FileCheck2,
  HandHeart,
  PieChart,
  RefreshCw,
  Users,
} from 'lucide-react';
import { Lang, TranslationTree } from '../data/i18n';
import { AYAHS, HADITHS } from '../data/mosqueData';
import { PageRoute } from '../types/routes';
import { PrayerTimesWidget } from './PrayerTimesWidget';
import { QuickActions } from './QuickActions';

const MOSQUE_PHOTO_URL =
  '/assets/aistudio/641253685_909227455188075_4707958648821826191_n_c83d4e16.jpg';

interface HomeViewProps {
  t: TranslationTree;
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
  onNavigate: (route: PageRoute) => void;
}

export function HomeView({ t, lang, onNavigate }: HomeViewProps) {
  const [ayahIndex, setAyahIndex] = useState(0);
  const [hadithIndex, setHadithIndex] = useState(0);

  const ayah = AYAHS[ayahIndex];
  const hadith = HADITHS[hadithIndex];

  const handleGo = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-6 sm:pt-8">
      {/* Architectural Hero Banner matching haciahmedcami.com */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="relative overflow-hidden rounded-[26px] min-h-[260px] sm:min-h-[300px] flex items-center justify-center shadow-[0_16px_48px_rgba(11,74,52,0.16)] isolate">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center scale-[1.01]"
            style={{ backgroundImage: `url(${MOSQUE_PHOTO_URL})` }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(200deg, rgba(6,14,10,0.82) 0%, rgba(6,49,34,0.68) 48%, rgba(11,74,52,0.58) 100%)',
            }}
          />

          <div className="relative z-10 px-6 py-9 sm:px-10 sm:py-11 text-center text-white max-w-2xl mx-auto space-y-4">
            <p
              dir="rtl"
              lang="ar"
              className="font-arabic text-2xl sm:text-[28px] text-[#D9BD82] leading-relaxed"
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            <h1 className="font-display text-2xl sm:text-4xl leading-snug text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]">
              {t.home.heroTitle}
            </h1>

            <div
              aria-hidden="true"
              className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#D9BD82] to-transparent"
            />

            <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-xl mx-auto">
              {t.home.heroText}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleGo('quran')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#1A1207] bg-[#D9BD82] hover:bg-[#B08A3E] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
              >
                <BookOpenText className="w-4 h-4" />
                {t.home.ctaQuran}
              </button>
              <button
                type="button"
                onClick={() => handleGo('donate')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-white/12 hover:bg-white/20 border border-white/25 rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <HandHeart className="w-4 h-4 text-[#D9BD82]" />
                {t.home.ctaDonate}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Prayer Times Widget */}
      <PrayerTimesWidget t={t} lang={lang} />

      {/* Quick Actions Grid */}
      <QuickActions t={t} onNavigate={handleGo} />

      {/* Daily Reminders: Verse of the Day & Hadith of the Day */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Günün Ayeti */}
          <article className="rounded-[20px] border border-[#D9BD82] bg-gradient-to-b from-[#B08A3E]/15 via-white/95 to-white p-6 sm:p-7 shadow-[0_1px_2px_rgba(11,74,52,0.06)] flex flex-col justify-between space-y-5 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#8A6A28] font-bold">
                <BookText className="w-3.5 h-3.5" />
                <span>{t.home.ayahTitle}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#6B7268] font-medium normal-case tracking-normal">
                  {t.home.ayahSub}
                </span>
              </div>

              <p
                dir="rtl"
                lang="ar"
                className="font-arabic text-2xl sm:text-[26px] text-[#1A1F1B] leading-relaxed"
              >
                {ayah.arabic}
              </p>

              <blockquote className="font-quote italic text-lg sm:text-xl text-[#1A1F1B] leading-snug">
                “{ayah.text[lang]}”
              </blockquote>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 border-t border-[#1A1F1B]/8 text-xs text-[#6B7268]">
              <span>
                {t.home.source}:{' '}
                <strong className="font-semibold text-[#1A1F1B]">
                  {ayah.source[lang]}
                </strong>
              </span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setAyahIndex((prev) => (prev + 1) % AYAHS.length)}
                className="inline-flex items-center gap-1.5 text-[#0B4A34] font-semibold hover:underline cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                {t.home.anotherAyah}
              </button>
            </div>
          </article>

          {/* Günün Hadisi */}
          <article className="rounded-[20px] border border-[#D9BD82] bg-gradient-to-b from-[#B08A3E]/15 via-white/95 to-white p-6 sm:p-7 shadow-[0_1px_2px_rgba(11,74,52,0.06)] flex flex-col justify-between space-y-5 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#8A6A28] font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.home.hadithTitle}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#6B7268] font-medium normal-case tracking-normal">
                  {t.home.hadithSub}
                </span>
              </div>

              <p
                dir="rtl"
                lang="ar"
                className="font-arabic text-2xl sm:text-[26px] text-[#1A1F1B] leading-relaxed"
              >
                {hadith.arabic}
              </p>

              <blockquote className="font-quote italic text-lg sm:text-xl text-[#1A1F1B] leading-snug">
                “{hadith.text[lang]}”
              </blockquote>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 border-t border-[#1A1F1B]/8 text-xs text-[#6B7268]">
              <span>
                {t.home.source}:{' '}
                <strong className="font-semibold text-[#1A1F1B]">
                  {hadith.source[lang]}
                </strong>
              </span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() =>
                  setHadithIndex((prev) => (prev + 1) % HADITHS.length)
                }
                className="inline-flex items-center gap-1.5 text-[#0B4A34] font-semibold hover:underline cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                {t.home.anotherHadith}
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Teaser Row: Announcements & Events */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-center">
              <h2 className="font-display text-xl text-[#1A1F1B]">
                {t.home.latestAnnouncements}
              </h2>
              <div className="section-rule" aria-hidden="true">
                <span>✦</span>
              </div>
            </div>

            <div className="rounded-[20px] bg-white/90 border border-[#1A1F1B]/10 shadow-[0_1px_2px_rgba(11,74,52,0.06)] p-6 space-y-3">
              <p className="font-display text-lg text-[#1A1F1B]">
                {t.common.notUploadedTitle}
              </p>
              <p className="text-sm text-[#6B7268]">{t.announcements.empty}</p>
              <button
                type="button"
                onClick={() => handleGo('announcements')}
                className="text-xs font-semibold text-[#0B4A34] hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
              >
                {t.common.viewAll}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div>
            <div className="text-center">
              <h2 className="font-display text-xl text-[#1A1F1B]">
                {t.home.upcomingEvents}
              </h2>
              <div className="section-rule" aria-hidden="true">
                <span>✦</span>
              </div>
            </div>

            <div className="rounded-[20px] bg-white/90 border border-[#1A1F1B]/10 shadow-[0_1px_2px_rgba(11,74,52,0.06)] p-6 space-y-3">
              <p className="font-display text-lg text-[#1A1F1B]">
                {t.common.notUploadedTitle}
              </p>
              <p className="text-sm text-[#6B7268]">{t.events.empty}</p>
              <button
                type="button"
                onClick={() => handleGo('events')}
                className="text-xs font-semibold text-[#0B4A34] hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
              >
                {t.common.viewAll}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Community Services */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl sm:text-[26px] text-[#1A1F1B]">
            {t.home.quickLinks}
          </h2>
          <p className="text-sm text-[#6B7268] mt-1">{t.home.quickLinksSub}</p>
          <div className="section-rule" aria-hidden="true">
            <span>✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              route: 'quran' as PageRoute,
              icon: BookOpenText,
              title: t.nav.quran,
              desc: t.quran.subtitle,
            },
            {
              route: 'membership' as PageRoute,
              icon: Users,
              title: t.nav.membership,
              desc: `${t.common.notUploadedTitle} · ${t.common.notUploadedDesc}`,
            },
            {
              route: 'verify' as PageRoute,
              icon: FileCheck2,
              title: t.nav.verify,
              desc: `${t.common.notUploadedTitle} · ${t.common.notUploadedDesc}`,
            },
            {
              route: 'transparency' as PageRoute,
              icon: PieChart,
              title: t.nav.transparency,
              desc: `${t.common.notUploadedTitle} · ${t.common.notUploadedDesc}`,
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.route}
                type="button"
                onClick={() => handleGo(card.route)}
                className="text-left p-5 rounded-[18px] border border-[#1A1F1B]/10 bg-white/90 hover:border-[#B08A3E] hover:shadow-[0_8px_24px_rgba(11,74,52,0.08)] transition-all flex flex-col justify-between gap-4 cursor-pointer group"
              >
                <div className="space-y-2">
                  <Icon className="w-5 h-5 text-[#0B4A34]" strokeWidth={1.75} />
                  <h3 className="font-display text-lg text-[#1A1F1B] group-hover:text-[#0B4A34] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#6B7268] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#0B4A34] inline-flex items-center gap-1">
                  {t.common.readMore}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

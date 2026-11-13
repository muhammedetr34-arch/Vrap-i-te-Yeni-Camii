import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Lang, TranslationTree } from '../data/i18n';
import { PageRoute } from '../types/routes';

const LOGO_URL =
  '/assets/aistudio/376415612_289383227172504_3304152781965842833_n__1__2736b52e.jpg';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  t: TranslationTree;
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
}

export function Header({
  currentRoute,
  onNavigate,
  t,
  lang,
  onChangeLang,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { route: PageRoute; label: string }[] = [
    { route: 'home', label: t.nav.home },
    { route: 'membership', label: t.nav.membership },
    { route: 'announcements', label: t.nav.announcements },
    { route: 'events', label: t.nav.events },
    { route: 'about', label: t.nav.about },
    { route: 'contact', label: t.nav.contact },
  ];

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-[#0B4A34] to-[#063122] border-b-2 border-[#B08A3E] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Circular Logo + Two-line Mosque Brand Mark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
        >
          <img
            src={LOGO_URL}
            alt={t.brand.name}
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-full object-cover bg-white border border-[#D9BD82]/60 shrink-0 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="flex flex-col leading-[1.05]">
            <span className="font-display text-[17px] sm:text-[19px] text-white whitespace-nowrap">
              {t.brand.name}
            </span>
            <span className="font-script text-[14px] text-[#D9BD82] -mt-0.5 whitespace-nowrap">
              {t.brand.tagline}
            </span>
          </span>
        </a>

        {/* Zone 2: Single-line navigation links matching haciahmedcami.com */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1 text-[13px] font-semibold"
        >
          {navItems.map((item) => {
            const isActive =
              currentRoute === item.route ||
              (item.route === 'membership' &&
                (currentRoute === 'verify' || currentRoute === 'transparency')) ||
              (item.route === 'contact' && currentRoute === 'faq');

            return (
              <a
                key={item.route}
                href={`#${item.route}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.route);
                }}
                className={`px-3 py-2 rounded-full whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-white/15 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher + Primary Donate CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div
            className="hidden sm:inline-flex rounded-full border border-white/20 bg-white/5 overflow-hidden"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => onChangeLang('tr')}
              className={`px-3 py-1.5 text-[11.5px] font-bold tracking-wider transition-colors cursor-pointer ${
                lang === 'tr'
                  ? 'bg-[#B08A3E] text-[#1A1207]'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('sq')}
              className={`px-3 py-1.5 text-[11.5px] font-bold tracking-wider transition-colors cursor-pointer ${
                lang === 'sq'
                  ? 'bg-[#B08A3E] text-[#1A1207]'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              SQ
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleNav('donate')}
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-[#1A1207] bg-[#D9BD82] hover:bg-[#B08A3E] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.donate}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.menu}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/15 bg-[#063122] px-4 py-5 space-y-4">
          <nav className="flex flex-col space-y-1">
            {[
              { route: 'home' as PageRoute, label: t.nav.home },
              { route: 'quran' as PageRoute, label: t.nav.quran },
              { route: 'membership' as PageRoute, label: t.nav.membership },
              { route: 'verify' as PageRoute, label: t.nav.verify },
              { route: 'announcements' as PageRoute, label: t.nav.announcements },
              { route: 'events' as PageRoute, label: t.nav.events },
              { route: 'about' as PageRoute, label: t.nav.about },
              { route: 'faq' as PageRoute, label: t.nav.faq },
              { route: 'transparency' as PageRoute, label: t.nav.transparency },
              { route: 'contact' as PageRoute, label: t.nav.contact },
            ].map((item) => (
              <button
                key={item.route}
                type="button"
                onClick={() => handleNav(item.route)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  currentRoute === item.route
                    ? 'bg-white/15 text-white font-semibold'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-4">
            <div className="inline-flex rounded-full border border-white/20 bg-white/5 overflow-hidden">
              <button
                type="button"
                onClick={() => onChangeLang('tr')}
                className={`px-3.5 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                  lang === 'tr'
                    ? 'bg-[#B08A3E] text-[#1A1207]'
                    : 'text-white/75'
                }`}
              >
                Türkçe
              </button>
              <button
                type="button"
                onClick={() => onChangeLang('sq')}
                className={`px-3.5 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                  lang === 'sq'
                    ? 'bg-[#B08A3E] text-[#1A1207]'
                    : 'text-white/75'
                }`}
              >
                Shqip
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleNav('donate')}
              className="px-5 py-2.5 text-xs font-bold text-[#1A1207] bg-[#D9BD82] hover:bg-[#B08A3E] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.nav.donate}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

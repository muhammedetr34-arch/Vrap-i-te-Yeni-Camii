import { useEffect, useState } from 'react';
import {
  AboutView,
  ContactView,
  FaqView,
} from './components/AboutContactView';
import { AnnouncementsEventsView } from './components/AnnouncementsEventsView';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import {
  MembershipView,
  VerifyDocumentView,
} from './components/MembershipVerifyView';
import { QuranView } from './components/QuranView';
import {
  DonateView,
  TransparencyView,
} from './components/TransparencyDonateView';
import { Lang, TRANSLATIONS } from './data/i18n';
import { PageRoute } from './types/routes';

const VALID_ROUTES: PageRoute[] = [
  'home',
  'quran',
  'announcements',
  'events',
  'membership',
  'verify',
  'transparency',
  'donate',
  'about',
  'faq',
  'contact',
];

function getInitialRoute(): PageRoute {
  const hash = window.location.hash.replace('#', '') as PageRoute;
  return VALID_ROUTES.includes(hash) ? hash : 'home';
}

function getInitialLang(): Lang {
  try {
    const saved = window.localStorage.getItem('vyc-lang');
    if (saved === 'tr' || saved === 'sq') return saved;
  } catch {
    // ignore storage access errors
  }
  return 'tr';
}

export default function App() {
  const [route, setRoute] = useState<PageRoute>(getInitialRoute);
  const [lang, setLang] = useState<Lang>(getInitialLang);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem('vyc-lang', lang);
    } catch {
      // ignore storage access errors
    }
  }, [lang]);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getInitialRoute());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (nextRoute: PageRoute) => {
    setRoute(nextRoute);
    if (window.location.hash !== `#${nextRoute}`) {
      window.history.pushState(null, '', `#${nextRoute}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4EE] text-[#1A1F1B] relative isolate">
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-aurora-layer" />
        <div className="absolute inset-0 bg-islamic-pattern" />
      </div>

      <Header
        currentRoute={route}
        onNavigate={handleNavigate}
        t={t}
        lang={lang}
        onChangeLang={setLang}
      />

      <main className="flex-1">
        {route === 'home' && (
          <HomeView
            t={t}
            lang={lang}
            onChangeLang={setLang}
            onNavigate={handleNavigate}
          />
        )}
        {route === 'quran' && <QuranView t={t} lang={lang} />}
        {route === 'announcements' && (
          <AnnouncementsEventsView
            key="announcements"
            initialTab="announcements"
            t={t}
            lang={lang}
          />
        )}
        {route === 'events' && (
          <AnnouncementsEventsView
            key="events"
            initialTab="events"
            t={t}
            lang={lang}
          />
        )}
        {route === 'membership' && (
          <MembershipView t={t} lang={lang} onNavigate={handleNavigate} />
        )}
        {route === 'verify' && <VerifyDocumentView t={t} lang={lang} />}
        {route === 'transparency' && <TransparencyView t={t} lang={lang} />}
        {route === 'donate' && (
          <DonateView t={t} lang={lang} onNavigate={handleNavigate} />
        )}
        {route === 'about' && <AboutView t={t} lang={lang} />}
        {route === 'faq' && <FaqView t={t} lang={lang} />}
        {route === 'contact' && <ContactView t={t} lang={lang} />}
      </main>

      <Footer
        onNavigate={handleNavigate}
        t={t}
        lang={lang}
        onChangeLang={setLang}
      />
    </div>
  );
}

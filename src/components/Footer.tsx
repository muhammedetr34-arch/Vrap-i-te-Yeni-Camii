import { Lang, TranslationTree } from '../data/i18n';
import { MOSQUE_LOCATION, SITE_DOMAIN, SITE_URL } from '../data/mosqueData';
import { PageRoute } from '../types/routes';

const LOGO_URL =
  '/assets/aistudio/376415612_289383227172504_3304152781965842833_n__1__2736b52e.jpg';
const MOSQUE_PHOTO_URL =
  '/assets/aistudio/641253685_909227455188075_4707958648821826191_n_c83d4e16.jpg';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  t: TranslationTree;
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
}

function FooterArchDivider() {
  return (
    <div className="mb-2 max-w-[320px]" aria-hidden="true">
      <svg
        viewBox="0 0 600 48"
        fill="none"
        focusable="false"
        className="w-full h-auto stroke-[#B08A3E]/60"
      >
        <path
          d="M0 44 H268 V38 C268 23 287 16 300 3 C313 16 332 23 332 38 V44 H600"
          strokeWidth="2"
          strokeLinejoin="miter"
          strokeMiterlimit={8}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export function Footer({ onNavigate, t, lang, onChangeLang }: FooterProps) {
  const go = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-[#063122] text-white/85 border-t-2 border-[#B08A3E] mt-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-soft-light pointer-events-none"
        style={{ backgroundImage: `url(${MOSQUE_PHOTO_URL})` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#063122]/90 via-[#063122]/95 to-[#063122] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={LOGO_URL}
                alt={t.brand.name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover bg-white border border-[#D9BD82]/60 shrink-0"
              />
              <div>
                <p className="font-display text-xl text-white leading-tight">
                  {t.brand.name}
                </p>
                <p className="font-script text-base text-[#D9BD82] -mt-0.5">
                  {t.brand.tagline}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/65 leading-relaxed max-w-md">
              {t.footer.about}
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <FooterArchDivider />
            <h3 className="text-[11.5px] font-bold uppercase tracking-wider text-[#D9BD82]">
              {t.footer.links}
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/70">
              {[
                { route: 'home' as PageRoute, label: t.nav.home },
                { route: 'membership' as PageRoute, label: t.nav.membership },
                { route: 'announcements' as PageRoute, label: t.nav.announcements },
                { route: 'events' as PageRoute, label: t.nav.events },
                { route: 'quran' as PageRoute, label: t.nav.quran },
                { route: 'verify' as PageRoute, label: t.nav.verify },
                { route: 'about' as PageRoute, label: t.nav.about },
                { route: 'faq' as PageRoute, label: t.nav.faq },
                { route: 'donate' as PageRoute, label: t.nav.donate },
                { route: 'transparency' as PageRoute, label: t.nav.transparency },
              ].map((item) => (
                <li key={item.route}>
                  <button
                    type="button"
                    onClick={() => go(item.route)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <FooterArchDivider />
            <h3 className="text-[11.5px] font-bold uppercase tracking-wider text-[#D9BD82]">
              {t.footer.contact}
            </h3>
            <div className="space-y-2 text-sm text-white/70">
              <p className="text-white">{t.brand.location}</p>
              <p>
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-[#D9BD82] transition-colors text-xs font-medium"
                >
                  {SITE_DOMAIN}
                </a>
              </p>
              <p>
                <a
                  href={MOSQUE_LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D9BD82] hover:underline text-xs font-semibold"
                >
                  {t.contact.openInMaps} →
                </a>
              </p>
              <button
                type="button"
                onClick={() => go('contact')}
                className="inline-block pt-1 text-sm font-semibold text-white hover:text-[#D9BD82] transition-colors cursor-pointer"
              >
                {t.nav.contact} →
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} {t.brand.name}. {t.footer.rights}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onChangeLang('tr')}
              className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                lang === 'tr'
                  ? 'bg-[#B08A3E] text-[#1A1207] font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              TR · Türkçe
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => onChangeLang('sq')}
              className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                lang === 'sq'
                  ? 'bg-[#B08A3E] text-[#1A1207] font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              SQ · Shqip
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

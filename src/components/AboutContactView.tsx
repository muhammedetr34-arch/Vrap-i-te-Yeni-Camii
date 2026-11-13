import { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Phone,
  Users,
} from 'lucide-react';
import interiorImg from '../assets/images/interior_mihrab_hall_1794524709546.jpg';
import { Lang, TranslationTree } from '../data/i18n';
import {
  ABOUT_MOSQUE_TEXT,
  FAQ_ITEMS,
  MOSQUE_LOCATION,
  MOSQUE_TEAM,
  SITE_DOMAIN,
  SITE_URL,
} from '../data/mosqueData';
import { MosqueMap } from './MosqueMap';
import { SafeImage } from './SafeImage';

const MOSQUE_PHOTO_URL =
  '/assets/aistudio/641253685_909227455188075_4707958648821826191_n_c83d4e16.jpg';

interface AboutViewProps {
  t: TranslationTree;
  lang: Lang;
}

export function AboutView({ t, lang }: AboutViewProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <header className="text-center space-y-2 pb-2">
        <h1 className="font-display text-3xl sm:text-5xl text-[#1A1F1B]">
          {t.about.title}
        </h1>
        <p className="text-sm sm:text-base text-[#6B7268] max-w-2xl mx-auto">
          {t.about.subtitle}
        </p>
        <div className="section-rule" aria-hidden="true">
          <span>✦</span>
        </div>
      </header>

      {/* Architectural Photography Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure className="space-y-2.5">
          <div className="aspect-[4/3] rounded-[18px] overflow-hidden border border-[#1A1F1B]/10 bg-white shadow-xs">
            <SafeImage
              src={MOSQUE_PHOTO_URL}
              alt={t.about.galleryCaption1}
              fallbackTitle={t.brand.name}
            />
          </div>
          <figcaption className="text-xs font-quote italic text-[#6B7268] text-center">
            {t.about.galleryCaption1}
          </figcaption>
        </figure>
        <figure className="space-y-2.5">
          <div className="aspect-[4/3] rounded-[18px] overflow-hidden border border-[#1A1F1B]/10 bg-white shadow-xs">
            <SafeImage
              src={interiorImg}
              alt={t.about.galleryCaption2}
              fallbackTitle={t.brand.name}
            />
          </div>
          <figcaption className="text-xs font-quote italic text-[#6B7268] text-center">
            {t.about.galleryCaption2}
          </figcaption>
        </figure>
      </div>

      {/* About Mosque Overview */}
      <section className="space-y-2">
        <div className="text-center">
          <h2 className="font-display text-2xl sm:text-[26px] text-[#1A1F1B]">
            {t.about.historyTitle}
          </h2>
          <div className="section-rule" aria-hidden="true">
            <span>✦</span>
          </div>
        </div>
        <div className="p-6 sm:p-8 rounded-[20px] border border-[#1A1F1B]/10 bg-white/95 shadow-xs">
          <p className="text-sm sm:text-base text-[#1A1F1B] leading-[1.8]">
            {ABOUT_MOSQUE_TEXT[lang]}
          </p>
        </div>
      </section>

      {/* Committee & Religious Staff */}
      <section className="p-6 sm:p-8 rounded-[22px] border border-[#D9BD82] bg-gradient-to-b from-[#B08A3E]/12 via-white/95 to-white shadow-xs space-y-6">
        <div className="text-center">
          <h2 className="font-display text-2xl sm:text-[26px] text-[#1A1F1B]">
            {t.about.teamTitle}
          </h2>
          <p className="text-sm text-[#6B7268] mt-1">{t.about.teamSub}</p>
          <div className="section-rule" aria-hidden="true">
            <span>✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {MOSQUE_TEAM.map((member) => (
            <div
              key={member.id}
              className="p-5 rounded-[16px] border border-[#1A1F1B]/10 bg-white text-center space-y-1.5 shadow-xs"
            >
              <p className="text-xs uppercase tracking-widest font-bold text-[#0B4A34]">
                {member.role[lang]}
              </p>
              <p className="font-display text-xl text-[#1A1F1B]">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FaqAccordion({ lang }: { lang: Lang }) {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <div className="divide-y divide-[#1A1F1B]/10">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-3.5 first:pt-1 last:pb-1">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between gap-4 text-left py-1.5 cursor-pointer group"
            >
              <span className="font-display text-lg text-[#1A1F1B] group-hover:text-[#0B4A34] transition-colors">
                {item.question[lang]}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#8A6A28] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <p className="pt-2 pb-1 text-sm text-[#6B7268] leading-relaxed">
                {item.answer[lang]}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

interface FaqViewProps {
  t: TranslationTree;
  lang: Lang;
}

export function FaqView({ t, lang }: FaqViewProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="text-center space-y-2 pb-2">
        <h1 className="font-display text-3xl sm:text-5xl text-[#1A1F1B]">
          {t.contact.faqTitle}
        </h1>
        <p className="text-sm sm:text-base text-[#6B7268] max-w-2xl mx-auto">
          {t.contact.faqSubtitle}
        </p>
        <div className="section-rule" aria-hidden="true">
          <span>✦</span>
        </div>
      </header>

      <section className="p-6 sm:p-8 rounded-[20px] border border-[#1A1F1B]/10 bg-white/95 shadow-xs">
        <FaqAccordion lang={lang} />
      </section>
    </div>
  );
}

interface ContactViewProps {
  t: TranslationTree;
  lang: Lang;
}

export function ContactView({ t, lang }: ContactViewProps) {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="text-center space-y-2 pb-2">
        <h1 className="font-display text-3xl sm:text-5xl text-[#1A1F1B]">
          {t.contact.title}
        </h1>
        <p className="text-sm sm:text-base text-[#6B7268] max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>
        <div className="section-rule" aria-hidden="true">
          <span>✦</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-[20px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#0B4A34] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#6B7268]">
                  {t.contact.address}
                </p>
                <p className="text-sm font-semibold text-[#1A1F1B]">
                  {t.brand.location}
                </p>
                <a
                  href={MOSQUE_LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B4A34] hover:underline pt-0.5"
                >
                  {t.contact.openInMaps}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#0B4A34] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#6B7268]">
                  {t.contact.phone}
                </p>
                <p className="text-sm text-[#6B7268] mt-0.5">
                  {t.common.notUploadedTitle}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#0B4A34] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#6B7268]">
                  {t.contact.email}
                </p>
                <p className="text-sm text-[#6B7268] mt-0.5">
                  {t.common.notUploadedTitle}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-[#0B4A34] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#6B7268]">
                  {t.contact.website}
                </p>
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#0B4A34] hover:underline mt-0.5 inline-block"
                >
                  {SITE_DOMAIN}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#0B4A34] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#6B7268]">
                  {t.contact.hours}
                </p>
                <p className="text-sm text-[#6B7268] mt-0.5">
                  {t.common.notUploadedTitle}
                </p>
              </div>
            </div>
          </div>

          <section className="p-6 rounded-[20px] border border-[#D9BD82] bg-gradient-to-b from-[#B08A3E]/12 via-white/95 to-white shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-[#1A1F1B]/10 pb-3">
              <Users className="w-4 h-4 text-[#0B4A34]" />
              <h2 className="font-display text-xl text-[#1A1F1B]">
                {t.contact.leadershipTitle}
              </h2>
            </div>

            <dl className="divide-y divide-[#1A1F1B]/8">
              {MOSQUE_TEAM.map((member) => (
                <div
                  key={member.id}
                  className="py-3 first:pt-1 last:pb-0 flex items-baseline justify-between gap-4"
                >
                  <dt className="text-xs uppercase tracking-wider font-bold text-[#8A6A28]">
                    {member.role[lang]}
                  </dt>
                  <dd className="font-display text-lg text-[#1A1F1B] text-right">
                    {member.name}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <div className="lg:col-span-7">
          <MosqueMap t={t} lang={lang} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="p-6 sm:p-7 rounded-[20px] border border-[#1A1F1B]/10 bg-white/95 shadow-xs space-y-4">
          <h2 className="font-display text-2xl text-[#1A1F1B]">
            {t.contact.formTitle}
          </h2>

          {submitted ? (
            <div className="p-6 rounded-[14px] bg-[#F6F4EE] border border-[#D9BD82] text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[#0B4A34] mx-auto" />
              <p className="font-display text-xl text-[#1A1F1B]">
                {t.contact.formSuccessTitle}
              </p>
              <p className="text-sm text-[#6B7268]">
                {t.contact.formSuccessText}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setContactInfo('');
                  setMessage('');
                }}
                className="px-4 py-2 text-xs font-semibold text-[#0B4A34] border border-[#0B4A34]/30 rounded-full hover:bg-white transition-colors cursor-pointer"
              >
                {t.common.back}
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-[#1A1F1B] mb-1.5"
                >
                  {t.contact.formName}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-[10px] border border-[#1A1F1B]/15 bg-white text-[#1A1F1B]"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-info"
                  className="block text-xs font-semibold text-[#1A1F1B] mb-1.5"
                >
                  {t.contact.formContact}
                </label>
                <input
                  id="contact-info"
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-[10px] border border-[#1A1F1B]/15 bg-white text-[#1A1F1B]"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-[#1A1F1B] mb-1.5"
                >
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-[10px] border border-[#1A1F1B]/15 bg-white text-[#1A1F1B]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-5 text-sm font-bold text-white bg-gradient-to-br from-[#0B4A34] to-[#063122] hover:opacity-95 rounded-full transition-opacity cursor-pointer shadow-xs"
              >
                {t.common.send}
              </button>
            </form>
          )}
        </section>

        <section className="p-6 sm:p-7 rounded-[20px] border border-[#1A1F1B]/10 bg-white/95 shadow-xs space-y-4">
          <h2 className="font-display text-2xl text-[#1A1F1B]">
            {t.contact.faqTitle}
          </h2>
          <FaqAccordion lang={lang} />
        </section>
      </div>
    </div>
  );
}

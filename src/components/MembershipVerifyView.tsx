import { useState } from 'react';
import { AlertCircle, ArrowRight, Clock, Search, ShieldCheck } from 'lucide-react';
import { Lang, TranslationTree } from '../data/i18n';
import { PageRoute } from '../types/routes';

interface MembershipViewProps {
  t: TranslationTree;
  lang: Lang;
  onNavigate: (route: PageRoute) => void;
}

export function MembershipView({ t, onNavigate }: MembershipViewProps) {
  const [code, setCode] = useState('');
  const [notice, setNotice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < 9) {
      setNotice(t.membership.codeIncomplete);
      return;
    }
    setNotice(t.membership.codeNotLoaded);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="text-center space-y-2 pb-2">
        <h1 className="font-display text-3xl sm:text-5xl text-[#1A1F1B]">
          {t.membership.title}
        </h1>
        <p className="text-sm sm:text-base text-[#6B7268] max-w-2xl mx-auto">
          {t.membership.subtitle}
        </p>
        <div className="section-rule" aria-hidden="true">
          <span>✦</span>
        </div>
      </header>

      {/* Summary KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 rounded-[18px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs space-y-1 text-center">
          <p className="text-xs text-[#6B7268]">{t.membership.totalMembers}</p>
          <p className="font-display text-3xl text-[#1A1F1B]">—</p>
          <p className="text-xs text-[#6B7268]">{t.common.notUploadedTitle}</p>
        </div>
        <div className="p-6 rounded-[18px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs space-y-1 text-center">
          <p className="text-xs text-[#6B7268]">{t.membership.membersWithDebt}</p>
          <p className="font-display text-3xl text-[#1A1F1B]">—</p>
          <p className="text-xs text-[#6B7268]">{t.common.notUploadedTitle}</p>
        </div>
        <div className="p-6 rounded-[18px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs space-y-1 text-center">
          <p className="text-xs text-[#6B7268]">{t.membership.collectionRate}</p>
          <p className="font-display text-3xl text-[#0B4A34]">—</p>
          <p className="text-xs text-[#6B7268]">{t.common.notUploadedTitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-[20px] border border-[#1A1F1B]/10 bg-white/95 shadow-xs space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl text-[#1A1F1B]">
              {t.membership.queryTitle}
            </h2>
            <p className="text-sm text-[#6B7268] leading-relaxed">
              {t.membership.queryText}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="member-access-code"
                className="block text-xs font-semibold text-[#1A1F1B] mb-1.5"
              >
                {t.membership.codeLabel}
              </label>
              <input
                id="member-access-code"
                type="text"
                inputMode="numeric"
                maxLength={9}
                value={code}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 9);
                  setCode(val);
                  if (notice) setNotice('');
                }}
                placeholder="•••••••••"
                className="w-full px-4 py-3 text-lg font-mono tracking-[0.22em] tabular-nums rounded-[10px] border border-[#1A1F1B]/15 bg-white text-[#1A1F1B]"
              />
            </div>

            {notice && (
              <div className="p-3.5 rounded-[10px] bg-[#F6F4EE] border border-[#D9BD82] text-[#1A1F1B] text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#B08A3E] shrink-0" />
                <span>{notice}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-5 text-sm font-bold bg-gradient-to-br from-[#0B4A34] to-[#063122] hover:opacity-95 text-white rounded-full transition-opacity inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Search className="w-4 h-4 text-[#D9BD82]" />
              {t.common.search}
            </button>
          </form>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="p-7 rounded-[20px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#B08A3E]">
              <Clock className="w-5 h-5" />
              <h3 className="font-display text-2xl text-[#1A1F1B]">
                {t.common.notUploadedTitle}
              </h3>
            </div>
            <p className="text-sm text-[#6B7268] leading-relaxed">
              {t.membership.codeNotLoaded}
            </p>
          </div>

          <div className="p-7 rounded-[20px] border border-[#D9BD82] bg-gradient-to-b from-[#B08A3E]/12 via-white/95 to-white shadow-xs space-y-3">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#0B4A34] shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-display text-2xl text-[#1A1F1B]">
                  {t.membership.verifyCta}
                </h3>
                <p className="text-sm text-[#6B7268] leading-relaxed">
                  {t.membership.verifyCtaText}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('verify');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-[#0B4A34] hover:underline cursor-pointer"
                >
                  {t.membership.goVerify}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface VerifyDocumentViewProps {
  t: TranslationTree;
  lang: Lang;
}

export function VerifyDocumentView({ t }: VerifyDocumentViewProps) {
  const [docId, setDocId] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docId.trim()) return;
    setSearched(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="text-center space-y-2 pb-2">
        <h1 className="font-display text-3xl sm:text-5xl text-[#1A1F1B]">
          {t.verify.title}
        </h1>
        <p className="text-sm sm:text-base text-[#6B7268] max-w-2xl mx-auto">
          {t.verify.subtitle}
        </p>
        <div className="section-rule" aria-hidden="true">
          <span>✦</span>
        </div>
      </header>

      <div className="p-6 sm:p-8 rounded-[20px] border border-[#1A1F1B]/10 bg-white/95 shadow-xs space-y-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end"
        >
          <div className="flex-1">
            <label
              htmlFor="verify-doc-id"
              className="block text-xs font-semibold text-[#1A1F1B] mb-1.5"
            >
              {t.verify.label}
            </label>
            <input
              id="verify-doc-id"
              type="text"
              value={docId}
              onChange={(e) => {
                setDocId(e.target.value.toUpperCase());
                if (searched) setSearched(false);
              }}
              placeholder={t.verify.placeholder}
              className="w-full px-4 py-3 text-base font-mono uppercase rounded-[10px] border border-[#1A1F1B]/15 bg-white text-[#1A1F1B]"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 text-sm font-bold bg-gradient-to-br from-[#0B4A34] to-[#063122] hover:opacity-95 text-white rounded-full transition-opacity whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            {t.verify.button}
          </button>
        </form>

        <div className="p-5 rounded-[14px] bg-[#F6F4EE] border border-[#1A1F1B]/10 flex items-start gap-3">
          <Clock className="w-5 h-5 text-[#B08A3E] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[#1A1F1B]">
              {t.common.notUploadedTitle}
            </p>
            <p className="text-xs sm:text-sm text-[#6B7268]">
              {searched ? t.verify.notLoaded : t.common.notUploadedDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

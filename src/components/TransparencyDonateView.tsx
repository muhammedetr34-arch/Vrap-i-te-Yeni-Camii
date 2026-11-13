import { useState } from 'react';
import { ArrowRight, Clock, Landmark } from 'lucide-react';
import { Lang, TranslationTree } from '../data/i18n';
import { PageRoute } from '../types/routes';

interface TransparencyViewProps {
  t: TranslationTree;
  lang: Lang;
}

export function TransparencyView({ t }: TransparencyViewProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="text-center space-y-2 pb-2">
        <h1 className="font-display text-3xl sm:text-5xl text-[#1A1F1B]">
          {t.transparency.title}
        </h1>
        <p className="text-sm sm:text-base text-[#6B7268] max-w-2xl mx-auto">
          {t.transparency.subtitle}
        </p>
        <div className="section-rule" aria-hidden="true">
          <span>✦</span>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-[#1A1F1B] text-center">
          {t.transparency.reportTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-[18px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs space-y-1 text-center">
            <p className="text-xs text-[#6B7268]">{t.transparency.income}</p>
            <p className="font-display text-3xl text-[#0B4A34]">—</p>
            <p className="text-xs text-[#6B7268]">{t.common.notUploadedTitle}</p>
          </div>
          <div className="p-6 rounded-[18px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs space-y-1 text-center">
            <p className="text-xs text-[#6B7268]">{t.transparency.expense}</p>
            <p className="font-display text-3xl text-[#1A1F1B]">—</p>
            <p className="text-xs text-[#6B7268]">{t.common.notUploadedTitle}</p>
          </div>
          <div className="p-6 rounded-[18px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs space-y-1 text-center">
            <p className="text-xs text-[#6B7268]">{t.transparency.balance}</p>
            <p className="font-display text-3xl text-[#8A6A28]">—</p>
            <p className="text-xs text-[#6B7268]">{t.common.notUploadedTitle}</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="p-7 rounded-[20px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs space-y-4">
          <h3 className="font-display text-2xl text-[#1A1F1B] border-b border-[#1A1F1B]/10 pb-3">
            {t.transparency.incomeBreakdown}
          </h3>
          <div className="py-5 flex items-start gap-3 text-sm text-[#6B7268]">
            <Clock className="w-5 h-5 text-[#B08A3E] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1A1F1B]">
                {t.common.notUploadedTitle}
              </p>
              <p className="mt-1">{t.common.notUploadedDesc}</p>
            </div>
          </div>
        </section>

        <section className="p-7 rounded-[20px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs space-y-4">
          <h3 className="font-display text-2xl text-[#1A1F1B] border-b border-[#1A1F1B]/10 pb-3">
            {t.transparency.expenseBreakdown}
          </h3>
          <div className="py-5 flex items-start gap-3 text-sm text-[#6B7268]">
            <Clock className="w-5 h-5 text-[#B08A3E] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1A1F1B]">
                {t.common.notUploadedTitle}
              </p>
              <p className="mt-1">{t.common.notUploadedDesc}</p>
            </div>
          </div>
        </section>
      </div>

      <p className="text-xs text-[#6B7268] text-center border-t border-[#1A1F1B]/10 pt-5">
        {t.transparency.note}
      </p>
    </div>
  );
}

interface DonateViewProps {
  t: TranslationTree;
  lang: Lang;
  onNavigate: (route: PageRoute) => void;
}

export function DonateView({ t, onNavigate }: DonateViewProps) {
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || !amount.trim() || Number(amount) <= 0) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="text-center space-y-2 pb-2">
        <h1 className="font-display text-3xl sm:text-5xl text-[#1A1F1B]">
          {t.donate.title}
        </h1>
        <p className="text-sm sm:text-base text-[#6B7268] max-w-2xl mx-auto">
          {t.donate.subtitle}
        </p>
        <div className="section-rule" aria-hidden="true">
          <span>✦</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-[20px] border border-[#1A1F1B]/10 bg-white/95 shadow-xs space-y-5">
          {submitted ? (
            <div className="py-6 text-center space-y-3">
              <div className="text-3xl text-[#B08A3E]" aria-hidden="true">
                ✦
              </div>
              <h2 className="font-display text-3xl text-[#1A1F1B]">
                {t.donate.thanksTitle}
              </h2>
              <p className="text-sm text-[#6B7268] max-w-md mx-auto leading-relaxed">
                {t.donate.thanksText}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setDonorName('');
                    setDonorPhone('');
                    setAmount('');
                    setNote('');
                  }}
                  className="px-5 py-2 text-xs font-semibold text-[#0B4A34] border border-[#0B4A34]/30 rounded-full hover:bg-[#F6F4EE] transition-colors cursor-pointer"
                >
                  {t.donate.newDonation}
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-1">
                <h2 className="font-display text-2xl text-[#1A1F1B]">
                  {t.donate.formTitle}
                </h2>
                <p className="text-sm text-[#6B7268]">{t.donate.formText}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="donate-name"
                    className="block text-xs font-semibold text-[#1A1F1B] mb-1.5"
                  >
                    {t.donate.nameLabel}
                  </label>
                  <input
                    id="donate-name"
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-[10px] border border-[#1A1F1B]/15 bg-white text-[#1A1F1B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="donate-phone"
                      className="block text-xs font-semibold text-[#1A1F1B] mb-1.5"
                    >
                      {t.donate.phoneLabel}
                    </label>
                    <input
                      id="donate-phone"
                      type="tel"
                      placeholder="+389..."
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-[10px] border border-[#1A1F1B]/15 bg-white text-[#1A1F1B]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="donate-amount"
                      className="block text-xs font-semibold text-[#1A1F1B] mb-1.5"
                    >
                      {t.donate.amountLabel}
                    </label>
                    <input
                      id="donate-amount"
                      type="number"
                      min="1"
                      step="1"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm font-mono tabular-nums rounded-[10px] border border-[#1A1F1B]/15 bg-white text-[#1A1F1B]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="donate-note"
                    className="block text-xs font-semibold text-[#1A1F1B] mb-1.5"
                  >
                    {t.donate.noteLabel}
                  </label>
                  <textarea
                    id="donate-note"
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-[10px] border border-[#1A1F1B]/15 bg-white text-[#1A1F1B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 text-sm font-bold text-white bg-gradient-to-br from-[#0B4A34] to-[#063122] hover:opacity-95 rounded-full transition-opacity cursor-pointer shadow-xs"
                >
                  {t.donate.submitButton}
                </button>
              </form>
            </>
          )}
        </div>

        <div className="lg:col-span-5 p-6 sm:p-8 rounded-[20px] border border-[#D9BD82] bg-gradient-to-b from-[#B08A3E]/12 via-white/95 to-white shadow-xs space-y-6">
          <div className="flex items-center gap-2.5 border-b border-[#1A1F1B]/10 pb-4">
            <Landmark className="w-5 h-5 text-[#0B4A34]" />
            <h2 className="font-display text-2xl text-[#1A1F1B]">
              {t.donate.bankTitle}
            </h2>
          </div>

          <div className="flex items-start gap-3 text-sm text-[#6B7268]">
            <Clock className="w-5 h-5 text-[#B08A3E] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-[#1A1F1B]">
                {t.common.notUploadedTitle}
              </p>
              <p>{t.common.notUploadedDesc}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1A1F1B]/10">
            <button
              type="button"
              onClick={() => {
                onNavigate('transparency');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B4A34] hover:underline cursor-pointer"
            >
              {t.donate.transparencyLink}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

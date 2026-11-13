import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { Lang, TranslationTree } from '../data/i18n';
import {
  calculateVrapcistePrayerTimes,
  formatGregorianDate,
  formatHijriDate,
  getNextPrayer,
  NextPrayerInfo,
  PrayerKey,
  PrayerSchedule,
} from '../utils/prayerTimes';

interface PrayerTimesWidgetProps {
  t: TranslationTree;
  lang: Lang;
}

export function PrayerTimesWidget({ t, lang }: PrayerTimesWidgetProps) {
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());
  const [schedule, setSchedule] = useState<PrayerSchedule>(() =>
    calculateVrapcistePrayerTimes()
  );
  const [nextPrayer, setNextPrayer] = useState<NextPrayerInfo>(() =>
    getNextPrayer(calculateVrapcistePrayerTimes())
  );
  const [highlightedPrayer, setHighlightedPrayer] = useState<PrayerKey>(
    () => getNextPrayer(calculateVrapcistePrayerTimes()).key
  );

  useEffect(() => {
    const syncPrayerTimes = () => {
      const now = new Date();
      const updatedSchedule = calculateVrapcistePrayerTimes(now);
      const upcoming = getNextPrayer(updatedSchedule, now);

      setCurrentDate(now);
      setSchedule(updatedSchedule);
      setNextPrayer(upcoming);
      setHighlightedPrayer(upcoming.key);
    };

    syncPrayerTimes();
    const timer = window.setInterval(syncPrayerTimes, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const gregorianDate = formatGregorianDate(lang, currentDate);
  const hijriDate = formatHijriDate(lang, currentDate);

  const prayerList: { key: PrayerKey; label: string; time: string }[] = [
    { key: 'imsak', label: t.prayers.imsak, time: schedule.imsak },
    { key: 'sabah', label: t.prayers.sabah, time: schedule.sabah },
    { key: 'gunes', label: t.prayers.gunes, time: schedule.gunes },
    { key: 'ogle', label: t.prayers.ogle, time: schedule.ogle },
    { key: 'ikindi', label: t.prayers.ikindi, time: schedule.ikindi },
    { key: 'aksam', label: t.prayers.aksam, time: schedule.aksam },
    { key: 'yatsi', label: t.prayers.yatsi, time: schedule.yatsi },
  ];

  return (
    <section
      aria-labelledby="prayer-times-heading"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8"
    >
      <div className="text-center">
        <h2
          id="prayer-times-heading"
          className="font-display text-2xl sm:text-[26px] text-[#1A1F1B]"
        >
          {t.home.prayerTimes}
        </h2>
        <div className="section-rule" aria-hidden="true">
          <span>✦</span>
        </div>
      </div>

      <div className="rounded-[24px] bg-white/85 backdrop-blur-md border border-[#1A1F1B]/10 shadow-[0_8px_24px_rgba(11,74,52,0.08)] p-5 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Prayer Schedule Table */}
          <div className="md:col-span-6 lg:col-span-6 bg-white rounded-[18px] border border-[#1A1F1B]/10 shadow-[0_2px_8px_rgba(11,74,52,0.05)] p-5">
            <div className="text-center pb-3 mb-2 border-b border-[#1A1F1B]/10 space-y-0.5">
              <p className="text-xs font-semibold text-[#1A1F1B] capitalize">
                {gregorianDate}
              </p>
              {hijriDate && (
                <p className="text-[11px] text-[#6B7268]">{hijriDate}</p>
              )}
            </div>

            <div className="divide-y divide-[#1A1F1B]/8">
              {prayerList.map((item) => {
                const isNext = item.key === highlightedPrayer;
                return (
                  <div
                    key={item.key}
                    aria-current={isNext ? 'time' : undefined}
                    className={`flex items-center justify-between gap-3 py-2.5 px-2.5 transition-colors ${
                      isNext
                        ? 'bg-gradient-to-r from-[#B08A3E]/15 to-transparent rounded-lg'
                        : ''
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`text-sm font-semibold truncate ${
                          isNext ? 'text-[#8A6A28]' : 'text-[#1A1F1B]'
                        }`}
                      >
                        {item.label}
                      </span>
                      {isNext && (
                        <span className="text-[11px] font-semibold text-[#0B4A34] underline underline-offset-4 shrink-0">
                          {t.home.next}
                        </span>
                      )}
                    </div>
                    <span
                      className={`font-mono text-base font-bold tabular-nums shrink-0 ${
                        isNext ? 'text-[#8A6A28]' : 'text-[#0B4A34]'
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Upcoming Prayer Countdown Card */}
          <div className="md:col-span-6 lg:col-span-6 bg-white rounded-[18px] border border-[#1A1F1B]/10 shadow-[0_2px_8px_rgba(11,74,52,0.05)] p-6 sm:p-8 text-center flex flex-col items-center justify-center space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#6B7268]">
              <Clock className="w-3.5 h-3.5 text-[#B08A3E]" />
              <span>{t.home.nextPrayer}</span>
            </div>

            <div className="space-y-0.5">
              <p className="font-display text-2xl text-[#1A1F1B]">
                {t.prayers[highlightedPrayer]}
              </p>
              <p className="font-mono text-sm font-semibold text-[#8A6A28] tabular-nums">
                {nextPrayer.time}
              </p>
            </div>

            <div className="font-display text-4xl sm:text-[42px] font-bold tabular-nums tracking-wider bg-gradient-to-r from-[#8A6A28] via-[#B08A3E] to-[#0B4A34] bg-clip-text text-transparent py-1">
              {String(nextPrayer.hours).padStart(2, '0')}:
              {String(nextPrayer.minutes).padStart(2, '0')}:
              {String(nextPrayer.seconds).padStart(2, '0')}
            </div>

            <p className="text-[11px] text-[#6B7268] max-w-xs leading-relaxed pt-1">
              {t.home.timesNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

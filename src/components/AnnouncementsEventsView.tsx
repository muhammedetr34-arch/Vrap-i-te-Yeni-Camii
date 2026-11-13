import { useState } from 'react';
import { Clock } from 'lucide-react';
import { Lang, TranslationTree } from '../data/i18n';

interface AnnouncementsEventsViewProps {
  initialTab: 'announcements' | 'events';
  t: TranslationTree;
  lang: Lang;
}

export function AnnouncementsEventsView({
  initialTab,
  t,
}: AnnouncementsEventsViewProps) {
  const [activeTab, setActiveTab] = useState<'announcements' | 'events'>(
    initialTab
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="text-center space-y-2 pb-2">
        <h1 className="font-display text-3xl sm:text-5xl text-[#1A1F1B]">
          {activeTab === 'announcements'
            ? t.announcements.title
            : t.events.title}
        </h1>
        <p className="text-sm sm:text-base text-[#6B7268] max-w-2xl mx-auto">
          {activeTab === 'announcements'
            ? t.announcements.subtitle
            : t.events.subtitle}
        </p>
        <div className="section-rule" aria-hidden="true">
          <span>✦</span>
        </div>
      </header>

      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-[#1A1F1B]/12 bg-white/90 p-1 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab('announcements')}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'announcements'
                ? 'bg-[#0B4A34] text-white'
                : 'text-[#6B7268] hover:text-[#1A1F1B]'
            }`}
          >
            {t.announcements.tabAnnouncements}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('events')}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'events'
                ? 'bg-[#0B4A34] text-white'
                : 'text-[#6B7268] hover:text-[#1A1F1B]'
            }`}
          >
            {t.announcements.tabEvents}
          </button>
        </div>
      </div>

      <div className="p-8 sm:p-12 rounded-[22px] border border-[#1A1F1B]/10 bg-white/90 shadow-xs text-center space-y-3">
        <Clock className="w-7 h-7 text-[#B08A3E] mx-auto" strokeWidth={1.5} />
        <h2 className="font-display text-2xl sm:text-3xl text-[#1A1F1B]">
          {t.common.notUploadedTitle}
        </h2>
        <p className="text-sm sm:text-base text-[#6B7268] max-w-lg mx-auto">
          {activeTab === 'announcements'
            ? t.announcements.empty
            : t.events.empty}
        </p>
      </div>
    </div>
  );
}

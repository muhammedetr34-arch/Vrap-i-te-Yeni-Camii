import { ArrowRight, FileCheck2, HandHeart, Users } from 'lucide-react';
import { TranslationTree } from '../data/i18n';
import { PageRoute } from '../types/routes';

interface QuickActionsProps {
  t: TranslationTree;
  onNavigate: (route: PageRoute) => void;
}

export function QuickActions({ t, onNavigate }: QuickActionsProps) {
  const actions: {
    route: PageRoute;
    label: string;
    description: string;
    icon: typeof HandHeart;
    accent?: boolean;
  }[] = [
    {
      route: 'donate',
      label: t.nav.donate,
      description: t.home.quickActionsDonateDesc,
      icon: HandHeart,
      accent: true,
    },
    {
      route: 'membership',
      label: t.nav.membership,
      description: t.home.quickActionsMembershipDesc,
      icon: Users,
    },
    {
      route: 'verify',
      label: t.verify.title,
      description: t.home.quickActionsVerifyDesc,
      icon: FileCheck2,
    },
  ];

  return (
    <section
      aria-labelledby="quick-actions-heading"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="text-center">
        <h2
          id="quick-actions-heading"
          className="font-display text-2xl sm:text-[26px] text-[#1A1F1B]"
        >
          {t.home.quickActionsTitle}
        </h2>
        <div className="section-rule" aria-hidden="true">
          <span>✦</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.route}
              type="button"
              onClick={() => onNavigate(action.route)}
              className={`group text-left p-5 rounded-[18px] border transition-all duration-150 flex items-start justify-between gap-4 cursor-pointer min-h-[88px] shadow-[0_1px_2px_rgba(11,74,52,0.06)] hover:shadow-[0_8px_24px_rgba(11,74,52,0.10)] ${
                action.accent
                  ? 'border-[#D9BD82] bg-gradient-to-b from-[#B08A3E]/12 to-white/95 hover:border-[#B08A3E]'
                  : 'border-[#1A1F1B]/10 bg-white/90 hover:border-[#0B4A34]/35'
              }`}
            >
              <div className="flex items-start gap-3.5 min-w-0">
                <Icon
                  className={`w-5 h-5 shrink-0 mt-1 ${
                    action.accent ? 'text-[#8A6A28]' : 'text-[#0B4A34]'
                  }`}
                  strokeWidth={1.75}
                />
                <div className="space-y-1 min-w-0">
                  <span className="block font-display text-xl text-[#1A1F1B] group-hover:text-[#0B4A34] transition-colors truncate">
                    {action.label}
                  </span>
                  <span className="block text-xs text-[#6B7268] leading-relaxed">
                    {action.description}
                  </span>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-[#6B7268] group-hover:text-[#0B4A34] group-hover:translate-x-0.5 transition-all shrink-0 mt-1.5" />
            </button>
          );
        })}
      </div>
    </section>
  );
}

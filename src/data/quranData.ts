export interface SurahMeta {
  number: number;
  arabic: string;
  tr: string;
  sq: string;
  ayahs: number;
  revelation: 'meccan' | 'medinan';
}

export interface QuranVerse {
  numberInSurah: number;
  arabic: string;
  tr: string;
  sq: string;
}

export const SURAH_INDEX: SurahMeta[] = [
  { number: 1, arabic: 'الفاتحة', tr: 'Fâtiha', sq: 'El-Fatiha', ayahs: 7, revelation: 'meccan' },
  { number: 2, arabic: 'البقرة', tr: 'Bakara', sq: 'El-Bekare', ayahs: 286, revelation: 'medinan' },
  { number: 3, arabic: 'آل عمران', tr: 'Âl-i İmrân', sq: 'Ali Imran', ayahs: 200, revelation: 'medinan' },
  { number: 4, arabic: 'النساء', tr: 'Nisâ', sq: 'En-Nisa', ayahs: 176, revelation: 'medinan' },
  { number: 5, arabic: 'المائدة', tr: 'Mâide', sq: 'El-Maide', ayahs: 120, revelation: 'medinan' },
  { number: 6, arabic: 'الأنعام', tr: 'En’âm', sq: 'El-Enam', ayahs: 165, revelation: 'meccan' },
  { number: 7, arabic: 'الأعراف', tr: 'A’râf', sq: 'El-Araf', ayahs: 206, revelation: 'meccan' },
  { number: 8, arabic: 'الأنفال', tr: 'Enfâl', sq: 'El-Enfal', ayahs: 75, revelation: 'medinan' },
  { number: 9, arabic: 'التوبة', tr: 'Tevbe', sq: 'Et-Teube', ayahs: 129, revelation: 'medinan' },
  { number: 10, arabic: 'يونس', tr: 'Yûnus', sq: 'Junus', ayahs: 109, revelation: 'meccan' },
  { number: 11, arabic: 'هود', tr: 'Hûd', sq: 'Hud', ayahs: 123, revelation: 'meccan' },
  { number: 12, arabic: 'يوسف', tr: 'Yûsuf', sq: 'Jusuf', ayahs: 111, revelation: 'meccan' },
  { number: 13, arabic: 'الرعد', tr: 'Ra’d', sq: 'Er-Rad', ayahs: 43, revelation: 'medinan' },
  { number: 14, arabic: 'إبراهيم', tr: 'İbrâhîm', sq: 'Ibrahim', ayahs: 52, revelation: 'meccan' },
  { number: 15, arabic: 'الحجر', tr: 'Hicr', sq: 'El-Hixhr', ayahs: 99, revelation: 'meccan' },
  { number: 16, arabic: 'النحل', tr: 'Nahl', sq: 'En-Nahl', ayahs: 128, revelation: 'meccan' },
  { number: 17, arabic: 'الإسراء', tr: 'İsrâ', sq: 'El-Isra', ayahs: 111, revelation: 'meccan' },
  { number: 18, arabic: 'الكهف', tr: 'Kehf', sq: 'El-Kehf', ayahs: 110, revelation: 'meccan' },
  { number: 19, arabic: 'مريم', tr: 'Meryem', sq: 'Merjem', ayahs: 98, revelation: 'meccan' },
  { number: 20, arabic: 'طه', tr: 'Tâhâ', sq: 'Ta Ha', ayahs: 135, revelation: 'meccan' },
  { number: 21, arabic: 'الأنبياء', tr: 'Enbiyâ', sq: 'El-Enbija', ayahs: 112, revelation: 'meccan' },
  { number: 22, arabic: 'الحج', tr: 'Hac', sq: 'El-Haxh', ayahs: 78, revelation: 'medinan' },
  { number: 23, arabic: 'المؤمنون', tr: 'Mü’minûn', sq: 'El-Muminun', ayahs: 118, revelation: 'meccan' },
  { number: 24, arabic: 'النور', tr: 'Nûr', sq: 'En-Nur', ayahs: 64, revelation: 'medinan' },
  { number: 25, arabic: 'الفرقان', tr: 'Furkân', sq: 'El-Furkan', ayahs: 77, revelation: 'meccan' },
  { number: 26, arabic: 'الشعراء', tr: 'Şuarâ', sq: 'Esh-Shuara', ayahs: 227, revelation: 'meccan' },
  { number: 27, arabic: 'النمل', tr: 'Neml', sq: 'En-Neml', ayahs: 93, revelation: 'meccan' },
  { number: 28, arabic: 'القصص', tr: 'Kasas', sq: 'El-Kasas', ayahs: 88, revelation: 'meccan' },
  { number: 29, arabic: 'العنكبوت', tr: 'Ankebût', sq: 'El-Ankebut', ayahs: 69, revelation: 'meccan' },
  { number: 30, arabic: 'الروم', tr: 'Rûm', sq: 'Er-Rum', ayahs: 60, revelation: 'meccan' },
  { number: 31, arabic: 'لقمان', tr: 'Lokmân', sq: 'Lukman', ayahs: 34, revelation: 'meccan' },
  { number: 32, arabic: 'السجدة', tr: 'Secde', sq: 'Es-Sexhde', ayahs: 30, revelation: 'meccan' },
  { number: 33, arabic: 'الأحزاب', tr: 'Ahzâb', sq: 'El-Ahzab', ayahs: 73, revelation: 'medinan' },
  { number: 34, arabic: 'سبأ', tr: 'Sebe’', sq: 'Sebe', ayahs: 54, revelation: 'meccan' },
  { number: 35, arabic: 'فاطر', tr: 'Fâtır', sq: 'Fatir', ayahs: 45, revelation: 'meccan' },
  { number: 36, arabic: 'يس', tr: 'Yâsîn', sq: 'Ja Sin', ayahs: 83, revelation: 'meccan' },
  { number: 37, arabic: 'الصافات', tr: 'Sâffât', sq: 'Es-Saffat', ayahs: 182, revelation: 'meccan' },
  { number: 38, arabic: 'ص', tr: 'Sâd', sq: 'Sad', ayahs: 88, revelation: 'meccan' },
  { number: 39, arabic: 'الزمر', tr: 'Zümer', sq: 'Ez-Zumer', ayahs: 75, revelation: 'meccan' },
  { number: 40, arabic: 'غافر', tr: 'Mü’min (Gâfir)', sq: 'Gafir', ayahs: 85, revelation: 'meccan' },
  { number: 41, arabic: 'فصلت', tr: 'Fussilet', sq: 'Fussilet', ayahs: 54, revelation: 'meccan' },
  { number: 42, arabic: 'الشورى', tr: 'Şûrâ', sq: 'Esh-Shura', ayahs: 53, revelation: 'meccan' },
  { number: 43, arabic: 'الزخرف', tr: 'Zuhruf', sq: 'Ez-Zuhruf', ayahs: 89, revelation: 'meccan' },
  { number: 44, arabic: 'الدخان', tr: 'Duhân', sq: 'Ed-Duhan', ayahs: 59, revelation: 'meccan' },
  { number: 45, arabic: 'الجاثية', tr: 'Câsiye', sq: 'El-Xhathije', ayahs: 37, revelation: 'meccan' },
  { number: 46, arabic: 'الأحقاف', tr: 'Ahkâf', sq: 'El-Ahkaf', ayahs: 35, revelation: 'meccan' },
  { number: 47, arabic: 'محمد', tr: 'Muhammed', sq: 'Muhammed', ayahs: 38, revelation: 'medinan' },
  { number: 48, arabic: 'الفتح', tr: 'Fetih', sq: 'El-Feth', ayahs: 29, revelation: 'medinan' },
  { number: 49, arabic: 'الحجرات', tr: 'Hucurât', sq: 'El-Huxhurat', ayahs: 18, revelation: 'medinan' },
  { number: 50, arabic: 'ق', tr: 'Kâf', sq: 'Kaf', ayahs: 45, revelation: 'meccan' },
  { number: 51, arabic: 'الذاريات', tr: 'Zâriyât', sq: 'Edh-Dharijat', ayahs: 60, revelation: 'meccan' },
  { number: 52, arabic: 'الطور', tr: 'Tûr', sq: 'Et-Tur', ayahs: 49, revelation: 'meccan' },
  { number: 53, arabic: 'النجم', tr: 'Necm', sq: 'En-Nexhm', ayahs: 62, revelation: 'meccan' },
  { number: 54, arabic: 'القمر', tr: 'Kamer', sq: 'El-Kamer', ayahs: 55, revelation: 'meccan' },
  { number: 55, arabic: 'الرحمن', tr: 'Rahmân', sq: 'Er-Rahman', ayahs: 78, revelation: 'medinan' },
  { number: 56, arabic: 'الواقعة', tr: 'Vâkıa', sq: 'El-Vakia', ayahs: 96, revelation: 'meccan' },
  { number: 57, arabic: 'الحديد', tr: 'Hadîd', sq: 'El-Hadid', ayahs: 29, revelation: 'medinan' },
  { number: 58, arabic: 'المجادلة', tr: 'Mücâdele', sq: 'El-Muxhadele', ayahs: 22, revelation: 'medinan' },
  { number: 59, arabic: 'الحشر', tr: 'Haşr', sq: 'El-Hashr', ayahs: 24, revelation: 'medinan' },
  { number: 60, arabic: 'الممتحنة', tr: 'Mümtehine', sq: 'El-Mumtehine', ayahs: 13, revelation: 'medinan' },
  { number: 61, arabic: 'الصف', tr: 'Saf', sq: 'Es-Saff', ayahs: 14, revelation: 'medinan' },
  { number: 62, arabic: 'الجمعة', tr: 'Cuma', sq: 'El-Xhumua', ayahs: 11, revelation: 'medinan' },
  { number: 63, arabic: 'المنافقون', tr: 'Münâfikûn', sq: 'El-Munafikun', ayahs: 11, revelation: 'medinan' },
  { number: 64, arabic: 'التغابن', tr: 'Tegâbün', sq: 'Et-Tegabun', ayahs: 18, revelation: 'medinan' },
  { number: 65, arabic: 'الطلاق', tr: 'Talâk', sq: 'Et-Talak', ayahs: 12, revelation: 'medinan' },
  { number: 66, arabic: 'التحريم', tr: 'Tahrîm', sq: 'Et-Tahrim', ayahs: 12, revelation: 'medinan' },
  { number: 67, arabic: 'الملك', tr: 'Mülk', sq: 'El-Mulk', ayahs: 30, revelation: 'meccan' },
  { number: 68, arabic: 'القلم', tr: 'Kalem', sq: 'El-Kalem', ayahs: 52, revelation: 'meccan' },
  { number: 69, arabic: 'الحاقة', tr: 'Hâkka', sq: 'El-Hakka', ayahs: 52, revelation: 'meccan' },
  { number: 70, arabic: 'المعارج', tr: 'Meâric', sq: 'El-Mearixh', ayahs: 44, revelation: 'meccan' },
  { number: 71, arabic: 'نوح', tr: 'Nûh', sq: 'Nuh', ayahs: 28, revelation: 'meccan' },
  { number: 72, arabic: 'الجن', tr: 'Cin', sq: 'El-Xhinn', ayahs: 28, revelation: 'meccan' },
  { number: 73, arabic: 'المزمل', tr: 'Müzzemmil', sq: 'El-Muzzemmil', ayahs: 20, revelation: 'meccan' },
  { number: 74, arabic: 'المدثر', tr: 'Müddessir', sq: 'El-Muddethir', ayahs: 56, revelation: 'meccan' },
  { number: 75, arabic: 'القيامة', tr: 'Kıyâmet', sq: 'El-Kijame', ayahs: 40, revelation: 'meccan' },
  { number: 76, arabic: 'الإنسان', tr: 'İnsân', sq: 'El-Insan', ayahs: 31, revelation: 'medinan' },
  { number: 77, arabic: 'المرسلات', tr: 'Mürselât', sq: 'El-Murselat', ayahs: 50, revelation: 'meccan' },
  { number: 78, arabic: 'النبأ', tr: 'Nebe’', sq: 'En-Nebe', ayahs: 40, revelation: 'meccan' },
  { number: 79, arabic: 'النازعات', tr: 'Nâziât', sq: 'En-Naziat', ayahs: 46, revelation: 'meccan' },
  { number: 80, arabic: 'عبس', tr: 'Abese', sq: 'Abese', ayahs: 42, revelation: 'meccan' },
  { number: 81, arabic: 'التكوير', tr: 'Tekvîr', sq: 'Et-Tekvir', ayahs: 29, revelation: 'meccan' },
  { number: 82, arabic: 'الانفطار', tr: 'İnfitâr', sq: 'El-Infitar', ayahs: 19, revelation: 'meccan' },
  { number: 83, arabic: 'المطففين', tr: 'Mutaffifîn', sq: 'El-Mutaffifin', ayahs: 36, revelation: 'meccan' },
  { number: 84, arabic: 'الانشقاق', tr: 'İnşikâk', sq: 'El-Inshikak', ayahs: 25, revelation: 'meccan' },
  { number: 85, arabic: 'البروج', tr: 'Burûc', sq: 'El-Buruxh', ayahs: 22, revelation: 'meccan' },
  { number: 86, arabic: 'الطارق', tr: 'Târık', sq: 'Et-Tarik', ayahs: 17, revelation: 'meccan' },
  { number: 87, arabic: 'الأعلى', tr: 'A’lâ', sq: 'El-Ala', ayahs: 19, revelation: 'meccan' },
  { number: 88, arabic: 'الغاشية', tr: 'Gâşiye', sq: 'El-Gashije', ayahs: 26, revelation: 'meccan' },
  { number: 89, arabic: 'الفجر', tr: 'Fecr', sq: 'El-Fexhr', ayahs: 30, revelation: 'meccan' },
  { number: 90, arabic: 'البلد', tr: 'Beled', sq: 'El-Beled', ayahs: 20, revelation: 'meccan' },
  { number: 91, arabic: 'الشمس', tr: 'Şems', sq: 'Esh-Shems', ayahs: 15, revelation: 'meccan' },
  { number: 92, arabic: 'الليل', tr: 'Leyl', sq: 'El-Lejl', ayahs: 21, revelation: 'meccan' },
  { number: 93, arabic: 'الضحى', tr: 'Duhâ', sq: 'Ed-Duha', ayahs: 11, revelation: 'meccan' },
  { number: 94, arabic: 'الشرح', tr: 'İnşirâh', sq: 'El-Inshirah', ayahs: 8, revelation: 'meccan' },
  { number: 95, arabic: 'التين', tr: 'Tîn', sq: 'Et-Tin', ayahs: 8, revelation: 'meccan' },
  { number: 96, arabic: 'العلق', tr: 'Alak', sq: 'El-Alek', ayahs: 19, revelation: 'meccan' },
  { number: 97, arabic: 'القدر', tr: 'Kadir', sq: 'El-Kadr', ayahs: 5, revelation: 'meccan' },
  { number: 98, arabic: 'البينة', tr: 'Beyyine', sq: 'El-Bejjine', ayahs: 8, revelation: 'medinan' },
  { number: 99, arabic: 'الزلزلة', tr: 'Zilzâl', sq: 'Ez-Zelzele', ayahs: 8, revelation: 'medinan' },
  { number: 100, arabic: 'العاديات', tr: 'Âdiyât', sq: 'El-Adijat', ayahs: 11, revelation: 'meccan' },
  { number: 101, arabic: 'القارعة', tr: 'Kâria', sq: 'El-Karia', ayahs: 11, revelation: 'meccan' },
  { number: 102, arabic: 'التكاثر', tr: 'Tekâsür', sq: 'Et-Tekathur', ayahs: 8, revelation: 'meccan' },
  { number: 103, arabic: 'العصر', tr: 'Asr', sq: 'El-Asr', ayahs: 3, revelation: 'meccan' },
  { number: 104, arabic: 'الهمزة', tr: 'Hümeze', sq: 'El-Humeze', ayahs: 9, revelation: 'meccan' },
  { number: 105, arabic: 'الفيل', tr: 'Fîl', sq: 'El-Fil', ayahs: 5, revelation: 'meccan' },
  { number: 106, arabic: 'قريش', tr: 'Kureyş', sq: 'Kurejsh', ayahs: 4, revelation: 'meccan' },
  { number: 107, arabic: 'الماعون', tr: 'Mâûn', sq: 'El-Maun', ayahs: 7, revelation: 'meccan' },
  { number: 108, arabic: 'الكوثر', tr: 'Kevser', sq: 'El-Keuther', ayahs: 3, revelation: 'meccan' },
  { number: 109, arabic: 'الكافرون', tr: 'Kâfirûn', sq: 'El-Kafirun', ayahs: 6, revelation: 'meccan' },
  { number: 110, arabic: 'النصر', tr: 'Nasr', sq: 'En-Nasr', ayahs: 3, revelation: 'medinan' },
  { number: 111, arabic: 'المسد', tr: 'Tebbet', sq: 'El-Mesed', ayahs: 5, revelation: 'meccan' },
  { number: 112, arabic: 'الإخلاص', tr: 'İhlâs', sq: 'El-Ihlas', ayahs: 4, revelation: 'meccan' },
  { number: 113, arabic: 'الفلق', tr: 'Felak', sq: 'El-Felek', ayahs: 5, revelation: 'meccan' },
  { number: 114, arabic: 'الناس', tr: 'Nâs', sq: 'En-Nas', ayahs: 6, revelation: 'meccan' },
];

// Built-in offline-safe Surahs (always available immediately without network)
export const BUILTIN_SURAHS: Record<number, QuranVerse[]> = {
  1: [
    {
      numberInSurah: 1,
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      tr: 'Rahmân ve Rahîm olan Allah’ın adıyla.',
      sq: 'Në emër të Allahut, të Gjithëmëshirshmit, Mëshirëplotit.',
    },
    {
      numberInSurah: 2,
      arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      tr: 'Hamd, âlemlerin Rabbi Allah’a mahsustur.',
      sq: 'Falënderimi i takon vetëm Allahut, Zotit të botëve.',
    },
    {
      numberInSurah: 3,
      arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
      tr: 'O, Rahmân’dır, Rahîm’dir.',
      sq: 'Të Gjithëmëshirshmit, Mëshirëplotit.',
    },
    {
      numberInSurah: 4,
      arabic: 'مَالِكِ يَوْمِ الدِّينِ',
      tr: 'Din (hesap) gününün sahibidir.',
      sq: 'Sunduesit të Ditës së Gjykimit.',
    },
    {
      numberInSurah: 5,
      arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
      tr: '(Rabbimiz!) Ancak sana kulluk eder ve yalnız senden yardım dileriz.',
      sq: 'Vetëm Ty të adhurojmë dhe vetëm prej Teje ndihmë kërkojmë.',
    },
    {
      numberInSurah: 6,
      arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
      tr: 'Bizi dosdoğru yola ilet;',
      sq: 'Udhëzona në rrugën e drejtë,',
    },
    {
      numberInSurah: 7,
      arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
      tr: 'Kendilerine nimet verdiklerinin yoluna; gazaba uğramışların ve sapkınların yoluna değil.',
      sq: 'Në rrugën e atyre që u ke dhuruar mirësi, e jo në rrugën e atyre që kanë merituar hidhërimin dhe as të atyre që kanë humbur.',
    },
  ],
  94: [
    {
      numberInSurah: 1,
      arabic: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ',
      tr: '(Ey Muhammed!) Senin göğsünü açıp genişletmedik mi?',
      sq: 'A nuk ta zgjeruam Ne gjoksin tënd (o Muhammed)?',
    },
    {
      numberInSurah: 2,
      arabic: 'وَوَضَعْنَا عَنكَ وِزْرَكَ',
      tr: 'Üzerinden ağır yükünü kaldırmadık mı?',
      sq: 'Dhe ta hoqëm barrën tënde,',
    },
    {
      numberInSurah: 3,
      arabic: 'الَّذِي أَنقَضَ ظَهْرَكَ',
      tr: 'O yük ki senin belini bükmüştü.',
      sq: 'E cila ta rëndonte shpinën tënde,',
    },
    {
      numberInSurah: 4,
      arabic: 'وَرَفَعْنَا لَكَ ذِكْرَكَ',
      tr: 'Senin şanını yüceltmedik mi?',
      sq: 'Dhe e lartësuam famën tënde!',
    },
    {
      numberInSurah: 5,
      arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
      tr: 'Şüphesiz güçlükle beraber bir kolaylık vardır.',
      sq: 'Me të vërtetë, pas vështirësisë vjen lehtësimi.',
    },
    {
      numberInSurah: 6,
      arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
      tr: 'Gerçekten, güçlükle beraber bir kolaylık vardır.',
      sq: 'Me të vërtetë, pas vështirësisë vjen lehtësimi.',
    },
    {
      numberInSurah: 7,
      arabic: 'فَإِذَا فَرَغْتَ فَانصَبْ',
      tr: 'Öyleyse bir işi bitirince diğerine koyul.',
      sq: 'Prandaj, kur të lirohesh (nga puna), përkushtohu në adhurim,',
    },
    {
      numberInSurah: 8,
      arabic: 'وَإِلَىٰ رَبِّكَ فَارْغَب',
      tr: 'Ve yalnızca Rabbine yönel.',
      sq: 'Dhe vetëm te Zoti yt drejtohu!',
    },
  ],
  97: [
    {
      numberInSurah: 1,
      arabic: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ',
      tr: 'Şüphesiz biz onu (Kur’an’ı) Kadir gecesinde indirdik.',
      sq: 'Ne e zbritëm atë (Kuranin) në Natën e Kadrit.',
    },
    {
      numberInSurah: 2,
      arabic: 'وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ',
      tr: 'Kadir gecesinin ne olduğunu sen ne bileceksin?',
      sq: 'E ç’të mësoi ty se ç’është Nata e Kadrit?',
    },
    {
      numberInSurah: 3,
      arabic: 'لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ',
      tr: 'Kadir gecesi bin aydan daha hayırlıdır.',
      sq: 'Nata e Kadrit është më e mirë se një mijë muaj.',
    },
    {
      numberInSurah: 4,
      arabic: 'تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ',
      tr: 'Melekler ve Ruh (Cebrail) o gecede, Rablerinin izniyle her türlü iş için iner de iner.',
      sq: 'Në të zbresin engjëjt dhe Shpirti (Xhibrili) me lejen e Zotit të tyre për çdo çështje.',
    },
    {
      numberInSurah: 5,
      arabic: 'سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ',
      tr: 'O gece, tan yerinin ağarmasına kadar bir esenliktir.',
      sq: 'Ajo është paqe (shpëtim) deri në agimin e mëngjesit.',
    },
  ],
  103: [
    {
      numberInSurah: 1,
      arabic: 'وَالْعَصْرِ',
      tr: 'Asra (zamana) yemin olsun ki,',
      sq: 'Pasha kohën!',
    },
    {
      numberInSurah: 2,
      arabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
      tr: 'İnsan gerçekten ziyan içindedir.',
      sq: 'Me të vërtetë, njeriu është në humbje,',
    },
    {
      numberInSurah: 3,
      arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
      tr: 'Ancak iman edip salih ameller işleyenler, birbirlerine hakkı tavsiye edenler ve birbirlerine sabrı tavsiye edenler müstesna.',
      sq: 'Përveç atyre që besojnë, bëjnë vepra të mira, e këshillojnë njëri-tjetrin për të vërtetën dhe për durimin.',
    },
  ],
  105: [
    {
      numberInSurah: 1,
      arabic: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ',
      tr: 'Rabbinin fil sahiplerine neler ettiğini görmedin mi?',
      sq: 'A nuk ke parë se si veproi Zoti yt me pronarët e elefantit?',
    },
    {
      numberInSurah: 2,
      arabic: 'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ',
      tr: 'Onların tuzaklarını boşa çıkarmadı mı?',
      sq: 'A nuk ua shkatërroi dinakërinë e tyre?',
    },
    {
      numberInSurah: 3,
      arabic: 'وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ',
      tr: 'Üzerlerine sürü sürü kuşlar gönderdi.',
      sq: 'Dhe dërgoi kundër tyre tufa zogjsh,',
    },
    {
      numberInSurah: 4,
      arabic: 'تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ',
      tr: 'O kuşlar onlara pişmiş çamurdan taşlar atıyorlardı.',
      sq: 'Që u hidhnin gurë prej balte të pjekur,',
    },
    {
      numberInSurah: 5,
      arabic: 'فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ',
      tr: 'Sonunda onları yenmiş ekin yaprağı gibi yapıverdi.',
      sq: 'Dhe i bëri ata si kashtë e ngrënë.',
    },
  ],
  108: [
    {
      numberInSurah: 1,
      arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
      tr: 'Şüphesiz biz sana Kevser’i verdik.',
      sq: 'Ne vërtet të dhamë ty Keutherin (mirësi të shumta).',
    },
    {
      numberInSurah: 2,
      arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
      tr: 'Öyleyse Rabbin için namaz kıl ve kurban kes.',
      sq: 'Andaj falu për Zotin tënd dhe ther kurban!',
    },
    {
      numberInSurah: 3,
      arabic: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
      tr: 'Asıl sonu kesik olan, sana buğzedendir.',
      sq: 'Me të vërtetë, urrejtësi yt është ai që mbetet pa pasardhës.',
    },
  ],
  109: [
    {
      numberInSurah: 1,
      arabic: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ',
      tr: 'De ki: Ey inkârcılar!',
      sq: 'Thuaj: O ju jobesimtarë!',
    },
    {
      numberInSurah: 2,
      arabic: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
      tr: 'Ben sizin taptıklarınıza tapmam.',
      sq: 'Unë nuk adhuroj atë që adhuroni ju,',
    },
    {
      numberInSurah: 3,
      arabic: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ',
      tr: 'Benim taptığıma da siz tapıcılar değilsiniz.',
      sq: 'As ju nuk jeni adhurues të Atij që adhuroj unë.',
    },
    {
      numberInSurah: 4,
      arabic: 'وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ',
      tr: 'Ben asla sizin taptıklarınıza tapacak değilim.',
      sq: 'Unë nuk do të jem adhurues i asaj që adhuroni ju,',
    },
    {
      numberInSurah: 5,
      arabic: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ',
      tr: 'Siz de benim taptığıma tapacak değilsiniz.',
      sq: 'As ju nuk do të jeni adhurues të Atij që adhuroj unë.',
    },
    {
      numberInSurah: 6,
      arabic: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
      tr: 'Sizin dininiz size, benim dinim banadır.',
      sq: 'Ju keni fenë tuaj, e unë kam fenë time!',
    },
  ],
  112: [
    {
      numberInSurah: 1,
      arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
      tr: 'De ki: O Allah birdir.',
      sq: 'Thuaj: Ai, Allahu është Një!',
    },
    {
      numberInSurah: 2,
      arabic: 'اللَّهُ الصَّمَدُ',
      tr: 'Allah Samed’dir (her şey O’na muhtaçtır, O hiçbir şeye muhtaç değildir).',
      sq: 'Allahu është Mbështetja (gjithçka ka nevojë për Të, e Ai për askënd).',
    },
    {
      numberInSurah: 3,
      arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
      tr: 'O doğurmamış ve doğurulmamıştır.',
      sq: 'Ai as nuk ka lindur kënd, as nuk është i lindur.',
    },
    {
      numberInSurah: 4,
      arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
      tr: 'Hiçbir şey O’na denk değildir.',
      sq: 'Dhe askush nuk është i barabartë me Të!',
    },
  ],
  113: [
    {
      numberInSurah: 1,
      arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
      tr: 'De ki: Sabahın Rabbine sığınırım;',
      sq: 'Thuaj: I mbështetem Zotit të agimit,',
    },
    {
      numberInSurah: 2,
      arabic: 'مِن شَرِّ مَا خَلَقَ',
      tr: 'Yarattığı şeylerin şerrinden,',
      sq: 'Nga e keqja e asaj që ka krijuar,',
    },
    {
      numberInSurah: 3,
      arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
      tr: 'Karanlığı çöktüğü zaman gecenin şerrinden,',
      sq: 'Nga e keqja e natës kur errësohet,',
    },
    {
      numberInSurah: 4,
      arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
      tr: 'Düğümlere üfleyenlerin şerrinden,',
      sq: 'Nga e keqja e atyre që fryjnë në nyje,',
    },
    {
      numberInSurah: 5,
      arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
      tr: 'Ve haset ettiği zaman hasetçinin şerrinden.',
      sq: 'Dhe nga e keqja e smirëziut kur bën smirë!',
    },
  ],
  114: [
    {
      numberInSurah: 1,
      arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
      tr: 'De ki: İnsanların Rabbine sığınırım;',
      sq: 'Thuaj: I mbështetem Zotit të njerëzve,',
    },
    {
      numberInSurah: 2,
      arabic: 'مَلِكِ النَّاسِ',
      tr: 'İnsanların Melikine (hükümdarına),',
      sq: 'Sunduesit të njerëzve,',
    },
    {
      numberInSurah: 3,
      arabic: 'إِلَٰهِ النَّاسِ',
      tr: 'İnsanların İlâhına;',
      sq: 'Të Adhuruarit të njerëzve,',
    },
    {
      numberInSurah: 4,
      arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
      tr: 'O sinsi vesvesecinin şerrinden,',
      sq: 'Nga e keqja e cytësit që fshihet,',
    },
    {
      numberInSurah: 5,
      arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
      tr: 'Ki o, insanların göğüslerine vesvese verir;',
      sq: 'I cili hedh cytje në zemrat e njerëzve,',
    },
    {
      numberInSurah: 6,
      arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
      tr: 'Gerek cinlerden, gerek insanlardan.',
      sq: 'Qoftë nga xhinët ose nga njerëzit!',
    },
  ],
};

export const POPULAR_SURAH_NUMBERS = [1, 36, 55, 67, 94, 97, 103, 108, 112, 113, 114];

export async function fetchSurahVerses(surahNumber: number): Promise<QuranVerse[]> {
  if (BUILTIN_SURAHS[surahNumber]) {
    return BUILTIN_SURAHS[surahNumber];
  }

  const res = await fetch(
    `https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,tr.diyanet,sq.ahmeti`
  );
  if (!res.ok) {
    throw new Error('Failed to load surah');
  }
  const json = await res.json();
  if (!json?.data || !Array.isArray(json.data) || json.data.length < 3) {
    throw new Error('Invalid surah response');
  }
  const [arEdition, trEdition, sqEdition] = json.data;
  const ayahsAr = arEdition.ayahs || [];
  const ayahsTr = trEdition.ayahs || [];
  const ayahsSq = sqEdition.ayahs || [];

  return ayahsAr.map((a: { numberInSurah: number; text: string }, idx: number) => ({
    numberInSurah: a.numberInSurah,
    arabic: a.text,
    tr: ayahsTr[idx]?.text ?? '',
    sq: ayahsSq[idx]?.text ?? '',
  }));
}

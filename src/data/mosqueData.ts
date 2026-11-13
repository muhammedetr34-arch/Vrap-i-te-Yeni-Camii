export interface BilingualText {
  tr: string;
  sq: string;
}

export interface MosqueLocationInfo {
  lat: number;
  lng: number;
  googleMapsUrl: string;
  label: BilingualText;
}

export interface MosqueTeamMember {
  id: string;
  role: BilingualText;
  name: string;
}

export const SITE_DOMAIN = 'vrapcisteyenicamii.com';
export const SITE_URL = 'https://vrapcisteyenicamii.com';

export const MOSQUE_LOCATION: MosqueLocationInfo = {
  lat: 41.8370242,
  lng: 20.883757,
  googleMapsUrl: 'https://maps.app.goo.gl/PPrKPmk2HRyuaPAL6',
  label: {
    tr: 'Vrapçişte "Yeni" Camii',
    sq: 'Xhamia "Jeni" Vrapçisht',
  },
};

export const MOSQUE_TEAM: MosqueTeamMember[] = [
  {
    id: 'imam',
    role: {
      tr: 'İmam',
      sq: 'Imam',
    },
    name: 'Vulnet ef. Bayrami',
  },
  {
    id: 'muezzin',
    role: {
      tr: 'Müezzin',
      sq: 'Myezin',
    },
    name: 'Ayhan ef. Seyfulai',
  },
  {
    id: 'trustee',
    role: {
      tr: 'Mütevelli Heyeti',
      sq: 'Këshilli i Xhamisë',
    },
    name: 'Bülent Seydini',
  },
];

export const ABOUT_MOSQUE_TEXT: BilingualText = {
  tr: 'Vrapçişte "Yeni" Camii, Kuzey Makedonya’nın Gostivar bölgesine bağlı Vrapçişte kasabasında cemaatimize günlük beş vakit namaz, Cuma ve bayram namazları, Kur’an-ı Kerim tilaveti ve dinî eğitim alanlarında hizmet vermektedir. Camimizin resmî dijital portalı üzerinden günlük namaz vakitlerini takip edebilir, Kur’an-ı Kerim okuyabilir, duyuru ve etkinliklerden haberdar olabilir, üyelik ve belge doğrulama işlemlerini gerçekleştirebilirsiniz.',
  sq: 'Xhamia "Jeni" në Vrapçisht, në komunën e Gostivarit në Maqedoninë e Veriut, i shërben xhematit me faljen e pesë kohëve të namazit, namazet e xhumasë dhe bajrameve, leximin e Kuranit Famëlartë dhe edukimin fetar. Përmes portalit zyrtar digjital të xhamisë mund të ndiqni kohët ditore të namazit, të lexoni Kuranin, të informoheni për njoftimet dhe aktivitetet, si dhe të përdorni shërbimet e anëtarësisë dhe verifikimit.',
};

export interface FaqItem {
  id: string;
  question: BilingualText;
  answer: BilingualText;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq1',
    question: {
      tr: 'Üyelik erişim kodumu nasıl kullanabilirim?',
      sq: 'Si mund ta përdor kodin tim të qasjes për anëtarësi?',
    },
    answer: {
      tr: 'Üyelik sayfasındaki 9 haneli erişim kodu alanına size tahsis edilen kodu girerek aidat ve üyelik durumunuzu görüntüleyebilirsiniz. Kodunuzla ilgili destek için cami yönetimi veya mütevelli heyeti ile iletişime geçebilirsiniz.',
      sq: 'Në faqen e anëtarësisë vendosni kodin tuaj 9-shifror në fushën përkatëse për të parë gjendjen e kuotës dhe anëtarësisë suaj. Për ndihmë me kodin tuaj mund të kontaktoni me këshillin e xhamisë.',
    },
  },
  {
    id: 'faq2',
    question: {
      tr: 'Namaz vakitleri neye göre hesaplanmaktadır?',
      sq: 'Si llogariten kohët e namazit?',
    },
    answer: {
      tr: 'Ana sayfadaki namaz vakitleri doğrudan Vrapçişte koordinatları ve yerel saat dilimi esas alınarak hesaplanmaktadır. Resmî takvimle birkaç dakikalık ihtiyat farkı bulunabilir.',
      sq: 'Kohët e namazit në faqen kryesore llogariten drejtpërdrejt sipas koordinatave të Vrapçishtit dhe zonës kohore lokale. Mund të ketë një dallim prej disa minutash nga takvimi zyrtar.',
    },
  },
  {
    id: 'faq3',
    question: {
      tr: 'Belge doğrulama nasıl çalışır?',
      sq: 'Si funksionon verifikimi i dokumenteve?',
    },
    answer: {
      tr: 'Cami yönetimi tarafından düzenlenen resmî belgelerin üzerindeki belge numarasını Belge Doğrulama sayfasına girerek belgenin geçerliliğini kontrol edebilirsiniz.',
      sq: 'Duke vendosur numrin e dokumentit zyrtar të lëshuar nga xhamia në faqen e Verifikimit të Dokumentit, mund të kontrolloni vlefshmërinë e tij.',
    },
  },
  {
    id: 'faq4',
    question: {
      tr: 'Camimize nasıl bağış yapabilir veya iletişime geçebilirim?',
      sq: 'Si mund të dhuroj ose të kontaktoj me xhaminë?',
    },
    answer: {
      tr: 'Bağış sayfasından bağış niyeti bildirim formunu doldurarak yönetimle iletişime geçebilir, İletişim sayfasındaki harita üzerinden camimizin konumuna ulaşabilirsiniz.',
      sq: 'Përmes formularit në faqen Dhuro mund të dërgoni njoftimin tuaj për donacion, ndërsa vendndodhjen e saktë të xhamisë e gjeni në hartën interaktive në faqen Kontakt.',
    },
  },
];

export interface AyahItem {
  id: string;
  arabic: string;
  text: BilingualText;
  source: BilingualText;
}

export interface HadithItem {
  id: string;
  arabic: string;
  text: BilingualText;
  source: BilingualText;
}

export const AYAHS: AyahItem[] = [
  {
    id: 'ay1',
    arabic: 'إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ',
    text: {
      tr: 'Allah’ın mescitlerini ancak Allah’a ve ahiret gününe iman eden, namazı dosdoğru kılan, zekâtı veren ve yalnız Allah’tan korkan kimseler imar eder.',
      sq: 'Xhamitë e Allahut i mirëmbajnë vetëm ata që besojnë në Allahun dhe Ditën e Fundit, e falin namazin, e japin zekatin dhe nuk i frikësohen askujt tjetër veç Allahut.',
    },
    source: {
      tr: 'Tevbe Suresi, 18',
      sq: 'Surja Teube, 18',
    },
  },
  {
    id: 'ay2',
    arabic: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',
    text: {
      tr: 'Hep birlikte Allah’ın ipine sımsıkı sarılın, parçalanıp bölünmeyin.',
      sq: 'Kapuni të gjithë fort pas litarit të Allahut dhe mos u përçani.',
    },
    source: {
      tr: 'Âl-i İmrân Suresi, 103',
      sq: 'Surja Ali Imran, 103',
    },
  },
  {
    id: 'ay3',
    arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    text: {
      tr: 'Bilin ki kalpler ancak Allah’ı anmakla huzur bulur.',
      sq: 'Vërtet, me përmendjen e Allahut zemrat gjejnë qetësi.',
    },
    source: {
      tr: 'Ra’d Suresi, 28',
      sq: 'Surja Rrad, 28',
    },
  },
  {
    id: 'ay4',
    arabic: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ',
    text: {
      tr: 'İyilik ve takva hususunda birbirinizle yardımlaşın.',
      sq: 'Ndihmohuni mes vete në mirësi dhe devotshmëri.',
    },
    source: {
      tr: 'Mâide Suresi, 2',
      sq: 'Surja Maide, 2',
    },
  },
];

export const HADITHS: HadithItem[] = [
  {
    id: 'h1',
    arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
    text: {
      tr: 'Sizin en hayırlınız, Kur’an-ı Kerim’i öğrenen ve onu başkalarına öğretendir.',
      sq: 'Më i miri prej jush është ai që e mëson Kuranin dhe ua mëson të tjerëve.',
    },
    source: {
      tr: 'Buhârî, Fedâilü’l-Kur’ân 21',
      sq: 'Buhariu, Fedailul-Kuran 21',
    },
  },
  {
    id: 'h2',
    arabic: 'مَنْ بَنَى لِلَّهِ مَسْجِدًا بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ',
    text: {
      tr: 'Kim Allah rızası için bir mescit inşa ederse, Allah da onun için cennette bir köşk inşa eder.',
      sq: 'Kush ndërton një xhami për hir të Allahut, Allahu i ndërton atij një shtëpi në Xhenet.',
    },
    source: {
      tr: 'Buhârî, Salât 65 · Müslim, Mesâcid 24',
      sq: 'Buhariu, Salat 65 · Muslimi, Mesaxhid 24',
    },
  },
  {
    id: 'h3',
    arabic: 'الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا',
    text: {
      tr: 'Müminin mümine karşı durumu, taşları birbirine kenetlenmiş sağlam bir bina gibidir.',
      sq: 'Besimtari për besimtarin është si një ndërtesë e fortë, pjesët e së cilës mbështesin njëra-tjetrën.',
    },
    source: {
      tr: 'Buhârî, Salât 88 · Müslim, Birr 65',
      sq: 'Buhariu, Salat 88 · Muslimi, Birr 65',
    },
  },
  {
    id: 'h4',
    arabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
    text: {
      tr: 'Din kardeşinin yüzüne tebessüm etmen senin için bir sadakadır.',
      sq: 'Buzëqeshja jote në fytyrën e vëllait tënd është sadaka për ty.',
    },
    source: {
      tr: 'Tirmizî, Birr 36',
      sq: 'Tirmidhiu, Birr 36',
    },
  },
];

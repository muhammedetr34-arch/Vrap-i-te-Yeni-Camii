export type Lang = 'tr' | 'sq';

export interface TranslationTree {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    location: string;
  };
  nav: {
    home: string;
    quran: string;
    announcements: string;
    events: string;
    membership: string;
    transparency: string;
    about: string;
    faq: string;
    donate: string;
    contact: string;
    verify: string;
    menu: string;
    closeMenu: string;
  };
  common: {
    viewAll: string;
    readMore: string;
    close: string;
    location: string;
    time: string;
    date: string;
    search: string;
    send: string;
    copy: string;
    copied: string;
    currency: string;
    all: string;
    back: string;
    notUploadedTitle: string;
    notUploadedDesc: string;
  };
  home: {
    bismillah: string;
    heroTitle: string;
    heroText: string;
    ctaDonate: string;
    ctaQuran: string;
    ctaEvents: string;
    nextPrayer: string;
    remaining: string;
    hours: string;
    minutes: string;
    seconds: string;
    prayerTimes: string;
    prayerTimesSub: string;
    timesNote: string;
    next: string;
    ayahTitle: string;
    ayahSub: string;
    anotherAyah: string;
    hadithTitle: string;
    hadithSub: string;
    anotherHadith: string;
    source: string;
    latestAnnouncements: string;
    upcomingEvents: string;
    quickLinks: string;
    quickLinksSub: string;
    heroCaption: string;
    quickActionsTitle: string;
    quickActionsDonateDesc: string;
    quickActionsMembershipDesc: string;
    quickActionsVerifyDesc: string;
  };
  quran: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    popularTitle: string;
    allSurahs: string;
    versesCount: string;
    meccan: string;
    medinan: string;
    showTranslation: string;
    fontSize: string;
    small: string;
    medium: string;
    large: string;
    loading: string;
    offlineNote: string;
    retry: string;
    previousSurah: string;
    nextSurah: string;
    bismillahBanner: string;
  };
  prayers: {
    imsak: string;
    sabah: string;
    gunes: string;
    ogle: string;
    ikindi: string;
    aksam: string;
    yatsi: string;
  };
  announcements: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    empty: string;
    tabAnnouncements: string;
    tabEvents: string;
  };
  events: {
    title: string;
    subtitle: string;
    empty: string;
    register: string;
  };
  membership: {
    title: string;
    subtitle: string;
    totalMembers: string;
    membersWithDebt: string;
    collectionRate: string;
    queryTitle: string;
    queryText: string;
    codeLabel: string;
    codeIncomplete: string;
    codeNotLoaded: string;
    verifyCta: string;
    verifyCtaText: string;
    goVerify: string;
  };
  verify: {
    title: string;
    subtitle: string;
    label: string;
    placeholder: string;
    button: string;
    notLoaded: string;
  };
  about: {
    title: string;
    subtitle: string;
    historyTitle: string;
    timeline: string;
    teamTitle: string;
    teamSub: string;
    galleryCaption1: string;
    galleryCaption2: string;
  };
  donate: {
    title: string;
    subtitle: string;
    formTitle: string;
    formText: string;
    nameLabel: string;
    phoneLabel: string;
    amountLabel: string;
    noteLabel: string;
    submitButton: string;
    thanksTitle: string;
    thanksText: string;
    newDonation: string;
    bankTitle: string;
    purposesTitle: string;
    transparencyLink: string;
  };
  transparency: {
    title: string;
    subtitle: string;
    reportTitle: string;
    income: string;
    expense: string;
    balance: string;
    incomeBreakdown: string;
    expenseBreakdown: string;
    note: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    hours: string;
    faqTitle: string;
    faqSubtitle: string;
    formTitle: string;
    formName: string;
    formContact: string;
    formMessage: string;
    formSuccessTitle: string;
    formSuccessText: string;
    mapTitle: string;
    mapSubtitle: string;
    openInMaps: string;
    recenterMap: string;
    coordinates: string;
    leadershipTitle: string;
  };
  footer: {
    about: string;
    links: string;
    services: string;
    contact: string;
    updating: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Lang, TranslationTree> = {
  tr: {
    brand: {
      name: 'Vrapçişte "Yeni" Camii',
      shortName: 'Vrapçişte Yeni Camii',
      tagline: 'Vrapçişte',
      location: 'Vrapçişte, Gostivar · Kuzey Makedonya',
    },
    nav: {
      home: 'Ana Sayfa',
      quran: "Kur'an-ı Kerim",
      announcements: 'Duyurular',
      events: 'Etkinlikler',
      membership: 'Üyelik',
      transparency: 'Şeffaflık',
      about: 'Hakkımızda',
      faq: 'SSS',
      donate: 'Bağış',
      contact: 'İletişim',
      verify: 'Belge Doğrulama',
      menu: 'Menü',
      closeMenu: 'Kapat',
    },
    common: {
      viewAll: 'Tümünü gör',
      readMore: 'Sayfaya git',
      close: 'Kapat',
      location: 'Yer',
      time: 'Saat',
      date: 'Tarih',
      search: 'Sorgula',
      send: 'Gönder',
      copy: 'Kopyala',
      copied: 'Kopyalandı',
      currency: 'MKD',
      all: 'Tümü',
      back: 'Geri dön',
      notUploadedTitle: 'Henüz yüklenmedi',
      notUploadedDesc: 'Bu bölümdeki bilgiler hazırlanmaktadır. Güncellemeler devam ediyor.',
    },
    home: {
      bismillah: "Rahmân ve Rahîm olan Allah'ın adıyla",
      heroTitle: 'Camimizin Dijital Ortamına Hoş Geldiniz',
      heroText:
        'Vrapçişte Yeni Camii resmî web portalı üzerinden günlük namaz vakitlerini, Kur’an-ı Kerim okuma bölümünü, günün ayeti ve günün hadisini takip edebilirsiniz.',
      ctaDonate: 'Bağış Yap',
      ctaQuran: "Kur'an-ı Kerim Oku",
      ctaEvents: 'Etkinlikler',
      nextPrayer: 'Sıradaki namaz',
      remaining: 'kalan süre',
      hours: 'sa',
      minutes: 'dk',
      seconds: 'sn',
      prayerTimes: 'Namaz Vakitleri',
      prayerTimesSub: 'Vrapçişte için günlük vakitler',
      timesNote:
        'Vakitler Vrapçişte koordinatları esas alınarak hesaplanır; resmî takvimle birkaç dakika fark olabilir.',
      next: 'Sıradaki',
      ayahTitle: 'Günün Ayeti',
      ayahSub: 'Kur’an-ı Kerim’den bir mesaj',
      anotherAyah: 'Sonraki ayet',
      hadithTitle: 'Günün Hadisi',
      hadithSub: 'Gönüllere bir nasihat',
      anotherHadith: 'Sonraki hadis',
      source: 'Kaynak',
      latestAnnouncements: 'Son Duyurular',
      upcomingEvents: 'Yaklaşan Etkinlikler',
      quickLinks: 'Cemaat Hizmetleri',
      quickLinksSub: 'Kur’an-ı Kerim, üyelik, şeffaflık ve doğrulama araçları',
      heroCaption: 'Vrapçişte "Yeni" Camii — Kasabamızın kalbinden akşam görünümü.',
      quickActionsTitle: 'Hızlı İşlemler',
      quickActionsDonateDesc: 'Cami hizmetleri ve hayır çalışmalarına destek olun',
      quickActionsMembershipDesc: 'Üyelik kaydı ve 9 haneli erişim koduyla aidat sorgulama',
      quickActionsVerifyDesc: 'Resmî cami belgelerini belge numarasıyla doğrulayın',
    },
    quran: {
      title: "Kur'an-ı Kerim",
      subtitle: '114 sure fihristi, Arapça hat ve Türkçe / Arnavutça meali ile okuyun',
      searchPlaceholder: 'Sure adı veya numarası ara...',
      popularTitle: 'Sık Okunan Sure ve Ayetler',
      allSurahs: 'Tüm Sureler (114)',
      versesCount: 'Ayet',
      meccan: 'Mekkî',
      medinan: 'Medenî',
      showTranslation: 'Meal Göster',
      fontSize: 'Yazı Boyutu',
      small: 'Küçük',
      medium: 'Orta',
      large: 'Büyük',
      loading: 'Sure metni yükleniyor...',
      offlineNote: 'Bu surenin tam metni şu anda çevrimiçi kaynaktan alınamadı. Yerleşik sureleri çevrimdışı okuyabilir veya tekrar deneyebilirsiniz.',
      retry: 'Tekrar Dene',
      previousSurah: 'Önceki Sure',
      nextSurah: 'Sonraki Sure',
      bismillahBanner: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    },
    prayers: {
      imsak: 'İmsak',
      sabah: 'Sabah',
      gunes: 'Güneş',
      ogle: 'Öğle',
      ikindi: 'İkindi',
      aksam: 'Akşam',
      yatsi: 'Yatsı',
    },
    announcements: {
      title: 'Duyurular ve Etkinlikler',
      subtitle: 'Duyuru ve etkinlik kayıtları henüz yüklenmedi; güncellemeler devam ediyor.',
      searchPlaceholder: 'Başlık veya içerik ara...',
      empty: 'Duyurular henüz yüklenmedi. Güncellemeler devam ediyor.',
      tabAnnouncements: 'Duyurular',
      tabEvents: 'Etkinlikler',
    },
    events: {
      title: 'Etkinlikler',
      subtitle: 'Etkinlik takvimi henüz yüklenmedi; güncellemeler devam ediyor.',
      empty: 'Etkinlikler henüz yüklenmedi. Güncellemeler devam ediyor.',
      register: 'Bilgi al',
    },
    membership: {
      title: 'Üyelik ve Aidat',
      subtitle: 'Üyelik kayıtları henüz yüklenmedi; sistem güncellemeleri devam ediyor.',
      totalMembers: 'Toplam Kayıtlı Üye',
      membersWithDebt: 'Aidatı Bekleyen Üye',
      collectionRate: 'Tahsilat Oranı',
      queryTitle: 'Aidat Sorgulama',
      queryText:
        'Üye veritabanı henüz sisteme yüklenmedi. Güncellemeler tamamlandığında 9 haneli erişim kodunuzla buradan sorgulama yapabileceksiniz.',
      codeLabel: '9 Haneli Erişim Kodu',
      codeIncomplete: 'Lütfen 9 haneli erişim kodunun tamamını giriniz.',
      codeNotLoaded: 'Üyelik kayıtları henüz yüklenmedi. Güncellemeler devam ediyor.',
      verifyCta: 'Belge Doğrulama',
      verifyCtaText:
        'Belge doğrulama arşivi hazırlanmaktadır. Güncellemeler devam ediyor.',
      goVerify: 'Belge Doğrulama Sayfası',
    },
    verify: {
      title: 'Belge Doğrulama',
      subtitle: 'Belge kayıtları henüz yüklenmedi; güncellemeler devam ediyor.',
      label: 'Belge Numarası',
      placeholder: 'Örn. VYC-2026-XXXX',
      button: 'Doğrula',
      notLoaded: 'Belge arşivi henüz yüklenmedi. Güncellemeler devam ediyor.',
    },
    about: {
      title: 'Hakkımızda',
      subtitle: 'Caminizin hikayesi ve hizmetinizdeki heyet ve din görevlileri.',
      historyTitle: 'Cami Hakkında',
      timeline: 'Kilometre Taşları',
      teamTitle: 'Heyet ve Din Görevlileri',
      teamSub: 'Vrapçişte "Yeni" Camii din görevlileri ve mütevelli heyeti',
      galleryCaption1: 'Vrapçişte "Yeni" Camii',
      galleryCaption2: 'Cami iç mekân görünümü',
    },
    donate: {
      title: 'Bağış',
      subtitle:
        'Camimize desteğiniz, hizmetlerimizin sürdürülmesi için çok değerlidir. Aşağıdaki formu doldurarak bağış niyetinizi iletebilirsiniz.',
      formTitle: 'Bağış Niyeti Bildirimi',
      formText:
        'Formu doldurarak bağış niyetinizi cami yönetimine iletebilirsiniz; en kısa sürede sizinle iletişime geçilecektir.',
      nameLabel: 'Ad Soyad',
      phoneLabel: 'Telefon (opsiyonel)',
      amountLabel: 'Bağış Miktarı (MKD / €)',
      noteLabel: 'Not (opsiyonel)',
      submitButton: 'Bağış Niyetini Gönder',
      thanksTitle: 'Teşekkür Ederiz',
      thanksText:
        'Bağış niyetiniz kaydedilmiştir. Cami yönetimimiz en kısa sürede sizinle iletişime geçecektir.',
      newDonation: 'Yeni Bildirim Oluştur',
      bankTitle: 'Resmî Banka Hesap Bilgileri',
      purposesTitle: 'Destek Alanları',
      transparencyLink: 'Şeffaflık Raporuna Git',
    },
    transparency: {
      title: 'Şeffaflık Raporu',
      subtitle:
        'Camimizin mali durumunu cemaatimizle şeffaf bir şekilde paylaşıyoruz. Veriler yıl sonunda güncellenmektedir.',
      reportTitle: 'Yıl Sonu Gelir ve Gider Özeti',
      income: 'Toplam Gelir',
      expense: 'Toplam Gider',
      balance: 'Devreden Bakiye',
      incomeBreakdown: 'Gelir Dağılımı',
      expenseBreakdown: 'Gider Dağılımı',
      note: 'Mali şeffaflık verileri henüz yüklenmedi. Güncellemeler tamamlandığında burada yayınlanacaktır.',
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Bizimle iletişime geçmek ve camimizin konumunu görmek için aşağıdaki bilgileri kullanabilirsiniz.',
      address: 'Adres',
      phone: 'Telefon',
      email: 'E-posta',
      website: 'Web Sitesi',
      hours: 'Ziyaret Saatleri',
      faqTitle: 'Sıkça Sorulan Sorular',
      faqSubtitle: 'Üyelik ve site kullanımıyla ilgili en çok sorulan sorular.',
      formTitle: 'Mesaj Gönder',
      formName: 'Ad Soyad',
      formContact: 'Telefon veya E-posta',
      formMessage: 'Mesajınız',
      formSuccessTitle: 'Mesajınız Alındı',
      formSuccessText: 'Mesajınız cami yönetimine iletilmek üzere kaydedildi. İlginiz için teşekkür ederiz.',
      mapTitle: 'Cami Konumu ve Harita',
      mapSubtitle: 'Harita üzerinde yakınlaştırabilir veya doğrudan Google Haritalar’da yol tarifi alabilirsiniz.',
      openInMaps: 'Google Haritalar’da Aç',
      recenterMap: 'Konuma Odakla',
      coordinates: 'Koordinatlar',
      leadershipTitle: 'Din Görevlileri ve Mütevelli Heyeti',
    },
    footer: {
      about:
        'Vrapçişte "Yeni" Camii resmî dijital portalı — günlük namaz vakitleri, Kur’an-ı Kerim, duyurular, etkinlikler ve cemaat hizmetleri.',
      links: 'Hızlı Bağlantılar',
      services: 'Hizmetler',
      contact: 'İletişim',
      updating: 'Bilgiler hazırlanmaktadır.',
      rights: 'Tüm hakları saklıdır.',
    },
  },
  sq: {
    brand: {
      name: 'Xhamia "Jeni" Vrapçisht',
      shortName: 'Xhamia Jeni Vrapçisht',
      tagline: 'Vrapçisht',
      location: 'Vrapçisht, Gostivar · Maqedonia e Veriut',
    },
    nav: {
      home: 'Ballina',
      quran: 'Kurani Famëlartë',
      announcements: 'Njoftime',
      events: 'Aktivitete',
      membership: 'Anëtarësia',
      transparency: 'Transparenca',
      about: 'Rreth Nesh',
      faq: 'Pyetje (FAQ)',
      donate: 'Dhuro',
      contact: 'Kontakt',
      verify: 'Verifikimi',
      menu: 'Menyja',
      closeMenu: 'Mbyll',
    },
    common: {
      viewAll: 'Shiko të gjitha',
      readMore: 'Shko te faqja',
      close: 'Mbyll',
      location: 'Vendi',
      time: 'Ora',
      date: 'Data',
      search: 'Kërko',
      send: 'Dërgo',
      copy: 'Kopjo',
      copied: 'U kopjua',
      currency: 'MKD',
      all: 'Të gjitha',
      back: 'Kthehu',
      notUploadedTitle: 'Ende nuk është ngarkuar',
      notUploadedDesc: 'Informacionet për këtë seksion janë duke u përgatitur. Përditësimet vazhdojnë.',
    },
    home: {
      bismillah: 'Në emër të Allahut, të Gjithëmëshirshmit, Mëshirëplotit',
      heroTitle: 'Mirë se vini në platformën digjitale të xhamisë sonë',
      heroText:
        'Përmes portalit zyrtar të Xhamisë "Jeni" në Vrapçisht mund të ndiqni kohët e namazit, seksionin e Kuranit Famëlartë, ajetin dhe hadithin e ditës.',
      ctaDonate: 'Dhuro',
      ctaQuran: 'Lexo Kuranin',
      ctaEvents: 'Aktivitetet',
      nextPrayer: 'Namazi i radhës',
      remaining: 'koha e mbetur',
      hours: 'orë',
      minutes: 'min',
      seconds: 'sek',
      prayerTimes: 'Kohët e Namazit',
      prayerTimesSub: 'Kohët ditore për Vrapçishtin',
      timesNote:
        'Kohët llogariten sipas koordinatave të Vrapçishtit; mund të ketë dallim prej disa minutash nga takvimi zyrtar.',
      next: 'Radhës',
      ayahTitle: 'Ajeti i Ditës',
      ayahSub: 'Një mesazh nga Kurani Famëlartë',
      anotherAyah: 'Ajeti tjetër',
      hadithTitle: 'Hadithi i Ditës',
      hadithSub: 'Një këshillë për zemrat',
      anotherHadith: 'Hadithi tjetër',
      source: 'Burimi',
      latestAnnouncements: 'Njoftimet e Fundit',
      upcomingEvents: 'Aktivitetet e Ardhshme',
      quickLinks: 'Shërbimet e Xhematit',
      quickLinksSub: 'Kurani Famëlartë, anëtarësia, transparenca dhe verifikimi',
      heroCaption: 'Xhamia "Jeni" Vrapçisht — Pamje e xhamisë sonë.',
      quickActionsTitle: 'Veprime të Shpejta',
      quickActionsDonateDesc: 'Mbështetni shërbimet e xhamisë dhe punët bamirëse',
      quickActionsMembershipDesc: 'Regjistri i anëtarësisë dhe kontrolli me kodin 9-shifror',
      quickActionsVerifyDesc: 'Verifikoni dokumentet zyrtare me numrin e dokumentit',
    },
    quran: {
      title: 'Kurani Famëlartë',
      subtitle: 'Lexoni Kuranin me indeksin e 114 sureve, tekstin arabisht dhe përkthimin shqip / turqisht',
      searchPlaceholder: 'Kërko emrin ose numrin e sures...',
      popularTitle: 'Sure dhe Ajete të Shpeshta',
      allSurahs: 'Të gjitha Suret (114)',
      versesCount: 'Ajete',
      meccan: 'Mekase',
      medinan: 'Medinase',
      showTranslation: 'Shfaq Përkthimin',
      fontSize: 'Madhësia e Shkrimit',
      small: 'E vogël',
      medium: 'Mesatare',
      large: 'E madhe',
      loading: 'Duke ngarkuar suren...',
      offlineNote: 'Teksti i plotë i kësaj sureje nuk u ngarkua nga burimi online. Mund të lexoni suret e ruajtura ose të provoni përsëri.',
      retry: 'Provo Përsëri',
      previousSurah: 'Surja e Mëparshme',
      nextSurah: 'Surja Tjetër',
      bismillahBanner: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    },
    prayers: {
      imsak: 'Imsaku',
      sabah: 'Sabahu',
      gunes: 'Lindja e Diellit',
      ogle: 'Dreka',
      ikindi: 'Ikindia',
      aksam: 'Akshami',
      yatsi: 'Jacia',
    },
    announcements: {
      title: 'Njoftime dhe Aktivitete',
      subtitle: 'Njoftimet dhe aktivitetet ende nuk janë ngarkuar; përditësimet vazhdojnë.',
      searchPlaceholder: 'Kërko titullin ose përmbajtjen...',
      empty: 'Njoftimet ende nuk janë ngarkuar. Përditësimet vazhdojnë.',
      tabAnnouncements: 'Njoftime',
      tabEvents: 'Aktivitete',
    },
    events: {
      title: 'Aktivitete',
      subtitle: 'Kalendari i aktiviteteve ende nuk është ngarkuar; përditësimet vazhdojnë.',
      empty: 'Aktivitetet ende nuk janë ngarkuar. Përditësimet vazhdojnë.',
      register: 'Më shumë info',
    },
    membership: {
      title: 'Anëtarësia',
      subtitle: 'Regjistrat e anëtarësisë ende nuk janë ngarkuar; përditësimet vazhdojnë.',
      totalMembers: 'Anëtarë Gjithsej',
      membersWithDebt: 'Anëtarë me Borxh',
      collectionRate: 'Shkalla e Arkëtimit',
      queryTitle: 'Kontrolli i Anëtarësisë',
      queryText:
        'Baza e të dhënave ende nuk është ngarkuar. Pas përfundimit të përditësimeve, do të mund të kontrolloni gjendjen me kodin tuaj 9-shifror.',
      codeLabel: 'Kodi i Qasjes 9-shifror',
      codeIncomplete: 'Ju lutemi shkruani të 9 shifrat e kodit.',
      codeNotLoaded: 'Regjistrat ende nuk janë ngarkuar. Përditësimet vazhdojnë.',
      verifyCta: 'Verifikimi i Dokumentit',
      verifyCtaText:
        'Arkivi i verifikimit të dokumenteve është duke u përgatitur. Përditësimet vazhdojnë.',
      goVerify: 'Faqja e Verifikimit',
    },
    verify: {
      title: 'Verifikimi i Dokumentit',
      subtitle: 'Dokumentet ende nuk janë ngarkuar; përditësimet vazhdojnë.',
      label: 'Numri i Dokumentit',
      placeholder: 'P.sh. VYC-2026-XXXX',
      button: 'Verifiko',
      notLoaded: 'Arkivi i dokumenteve ende nuk është ngarkuar. Përditësimet vazhdojnë.',
    },
    about: {
      title: 'Rreth Nesh',
      subtitle: 'Historia e xhamisë suaj, këshilli dhe nëpunësit fetarë në shërbimin tuaj.',
      historyTitle: 'Rreth Xhamisë',
      timeline: 'Momentet Kryesore',
      teamTitle: 'Këshilli dhe Nëpunësit Fetarë',
      teamSub: 'Nëpunësit fetarë dhe këshilli drejtues i Xhamisë "Jeni" Vrapçisht',
      galleryCaption1: 'Xhamia "Jeni" Vrapçisht',
      galleryCaption2: 'Pamje e brendshme e xhamisë',
    },
    donate: {
      title: 'Donacion',
      subtitle:
        'Mbështetja juaj për xhaminë tonë është shumë e çmuar për vazhdimin e shërbimeve. Plotësoni formularin më poshtë për të shprehur qëllimin tuaj për donacion.',
      formTitle: 'Njoftim për Qëllimin e Donacionit',
      formText:
        'Plotësoni formularin për të dërguar qëllimin tuaj të donacionit te këshilli i xhamisë.',
      nameLabel: 'Emri dhe Mbiemri',
      phoneLabel: 'Telefoni (opsional)',
      amountLabel: 'Shuma e Donacionit (MKD / €)',
      noteLabel: 'Shënim (opsional)',
      submitButton: 'Dërgo Qëllimin e Donacionit',
      thanksTitle: 'Ju Faleminderit',
      thanksText:
        'Njoftimi juaj për donacion u regjistrua. Këshilli i xhamisë do t’ju kontaktojë së shpejti.',
      newDonation: 'Krijo Njoftim të Ri',
      bankTitle: 'Të Dhënat Zyrtare Bankare',
      purposesTitle: 'Fushat e Donacionit',
      transparencyLink: 'Shiko Raportin e Transparencës',
    },
    transparency: {
      title: 'Raporti i Transparencës',
      subtitle:
        'Gjendjen financiare të xhamisë e ndajmë në mënyrë transparente me xhematin tonë. Të dhënat publikohen në fund të vitit.',
      reportTitle: 'Përmbledhja Vjetore e të Ardhurave dhe Shpenzimeve',
      income: 'Të Ardhurat Gjithsej',
      expense: 'Shpenzimet Gjithsej',
      balance: 'Bilanci i Bartur',
      incomeBreakdown: 'Shpërndarja e të Ardhurave',
      expenseBreakdown: 'Shpërndarja e Shpenzimeve',
      note: 'Të dhënat e transparencës ende nuk janë ngarkuar. Përditësimet vazhdojnë.',
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Për të kontaktuar me ne dhe për të parë vendndodhjen e xhamisë përdorni informacionet më poshtë.',
      address: 'Adresa',
      phone: 'Telefoni',
      email: 'E-mail',
      website: 'Faqja e internetit',
      hours: 'Orari i Vizitave',
      faqTitle: 'Pyetjet e Shpeshta',
      faqSubtitle: 'Pyetjet më të shpeshta rreth anëtarësisë dhe përdorimit të portalit.',
      formTitle: 'Dërgo Mesazh',
      formName: 'Emri dhe Mbiemri',
      formContact: 'Telefoni ose E-mail',
      formMessage: 'Mesazhi juaj',
      formSuccessTitle: 'Mesazhi u Mor',
      formSuccessText: 'Mesazhi juaj u ruajt për t’iu përcjellë këshillit të xhamisë. Faleminderit.',
      mapTitle: 'Vendndodhja e Xhamisë',
      mapSubtitle: 'Mund ta zmadhoni hartën ose të merrni udhëzime drejtpërdrejt në Google Maps.',
      openInMaps: 'Hap në Google Maps',
      recenterMap: 'Qendërzoni Hartën',
      coordinates: 'Koordinatat',
      leadershipTitle: 'Nëpunësit Fetarë dhe Këshilli',
    },
    footer: {
      about:
        'Portali zyrtar digjital i Xhamisë "Jeni" në Vrapçisht — kohët ditore të namazit, Kurani Famëlartë, njoftime, aktivitete dhe shërbime për xhematin.',
      links: 'Lidhje të Shpejta',
      services: 'Shërbimet',
      contact: 'Kontakt',
      updating: 'Informacionet janë duke u përgatitur.',
      rights: 'Të gjitha të drejtat e rezervuara.',
    },
  },
};

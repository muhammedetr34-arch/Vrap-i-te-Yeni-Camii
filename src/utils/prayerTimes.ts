export type PrayerKey =
  | 'imsak'
  | 'sabah'
  | 'gunes'
  | 'ogle'
  | 'ikindi'
  | 'aksam'
  | 'yatsi';

export interface PrayerSchedule {
  imsak: string;
  sabah: string;
  gunes: string;
  ogle: string;
  ikindi: string;
  aksam: string;
  yatsi: string;
}

export interface NextPrayerInfo {
  key: PrayerKey;
  time: string;
  remainingSeconds: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Vrapçişte, Gostivar, North Macedonia coordinates
const LAT = 41.8339;
const LNG = 20.8856;
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

function fixAngle(a: number): number {
  const res = a - 360 * Math.floor(a / 360);
  return res < 0 ? res + 360 : res;
}

function fixHour(a: number): number {
  const res = a - 24 * Math.floor(a / 24);
  return res < 0 ? res + 24 : res;
}

function julianDate(year: number, month: number, day: number): number {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return (
    Math.floor(365.25 * (y + 4716)) +
    Math.floor(30.6001 * (m + 1)) +
    day +
    B -
    1524.5
  );
}

function sunPosition(jd: number): { decl: number; eqTime: number } {
  const D = jd - 2451545.0;
  const g = fixAngle(357.529 + 0.98560028 * D);
  const q = fixAngle(280.459 + 0.98564736 * D);
  const L = fixAngle(
    q + 1.915 * Math.sin(g * DEG2RAD) + 0.02 * Math.sin(2 * g * DEG2RAD)
  );
  const e = 23.439 - 0.00000036 * D;
  const RA =
    Math.atan2(
      Math.cos(e * DEG2RAD) * Math.sin(L * DEG2RAD),
      Math.cos(L * DEG2RAD)
    ) *
      RAD2DEG /
    15;
  const eqTime = q / 15 - fixHour(RA);
  const decl =
    Math.asin(Math.sin(e * DEG2RAD) * Math.sin(L * DEG2RAD)) * RAD2DEG;
  return { decl, eqTime };
}

function sunAngleTime(jd: number, angle: number, ccw: boolean): number {
  const { decl, eqTime } = sunPosition(jd);
  const noon = fixHour(12 - eqTime);
  const cosT =
    (-Math.sin(angle * DEG2RAD) -
      Math.sin(decl * DEG2RAD) * Math.sin(LAT * DEG2RAD)) /
    (Math.cos(decl * DEG2RAD) * Math.cos(LAT * DEG2RAD));
  const clamped = Math.max(-1, Math.min(1, cosT));
  const t = (Math.acos(clamped) * RAD2DEG) / 15;
  return noon + (ccw ? -t : t);
}

function asrTime(jd: number, factor = 1): number {
  const { decl, eqTime } = sunPosition(jd);
  const noon = fixHour(12 - eqTime);
  const angle = -Math.atan(
    1 / (factor + Math.tan(Math.abs(LAT - decl) * DEG2RAD))
  ) * RAD2DEG;
  const cosT =
    (-Math.sin(angle * DEG2RAD) -
      Math.sin(decl * DEG2RAD) * Math.sin(LAT * DEG2RAD)) /
    (Math.cos(decl * DEG2RAD) * Math.cos(LAT * DEG2RAD));
  const clamped = Math.max(-1, Math.min(1, cosT));
  const t = (Math.acos(clamped) * RAD2DEG) / 15;
  return noon + t;
}

function getSkopjeOffsetHours(date: Date): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Skopje',
    timeZoneName: 'shortOffset',
  }).formatToParts(date);
  const tzPart = parts.find((p) => p.type === 'timeZoneName')?.value ?? 'GMT+1';
  const match = tzPart.match(/GMT([+-]\d+)/);
  return match ? Number(match[1]) : 1;
}

export function getSkopjeDateParts(now = new Date()): {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Skopje',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  const parts = fmt.formatToParts(now);
  const get = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value ?? 0);
  return {
    year: get('year'),
    month: get('month'),
    day: get('day'),
    hours: get('hour') % 24,
    minutes: get('minute'),
    seconds: get('second'),
  };
}

function formatHour(hourFloat: number): string {
  const fixed = fixHour(hourFloat + 0.5 / 60);
  const h = Math.floor(fixed);
  const m = Math.floor((fixed - h) * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export function calculateVrapcistePrayerTimes(now = new Date()): PrayerSchedule {
  const { year, month, day } = getSkopjeDateParts(now);
  const tz = getSkopjeOffsetHours(now);
  const jd = julianDate(year, month, day) - LNG / (15 * 24);

  const imsakRaw = sunAngleTime(jd + 5 / 24, 18, true);
  const gunesRaw = sunAngleTime(jd + 6 / 24, 0.833, true);
  const { eqTime } = sunPosition(jd + 12 / 24);
  const ogleRaw = fixHour(12 - eqTime);
  const ikindiRaw = asrTime(jd + 13 / 24, 1);
  const aksamRaw = sunAngleTime(jd + 18 / 24, 0.833, false);
  const yatsiRaw = sunAngleTime(jd + 18 / 24, 17, false);

  const shift = tz - LNG / 15;
  // Diyanet-style cautious adjustments (minutes)
  const imsak = imsakRaw + shift - 4 / 60;
  const gunes = gunesRaw + shift - 6 / 60;
  const sabah = imsak + 20 / 60; // Morning prayer congregation / Fajr jamaat reference
  const ogle = ogleRaw + shift + 5 / 60;
  const ikindi = ikindiRaw + shift + 4 / 60;
  const aksam = aksamRaw + shift + 7 / 60;
  const yatsi = yatsiRaw + shift + 4 / 60;

  return {
    imsak: formatHour(imsak),
    sabah: formatHour(sabah),
    gunes: formatHour(gunes),
    ogle: formatHour(ogle),
    ikindi: formatHour(ikindi),
    aksam: formatHour(aksam),
    yatsi: formatHour(yatsi),
  };
}

function toSeconds(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 3600 + m * 60;
}

export function getNextPrayer(
  schedule: PrayerSchedule,
  now = new Date()
): NextPrayerInfo {
  const { hours, minutes, seconds } = getSkopjeDateParts(now);
  const nowSeconds = hours * 3600 + minutes * 60 + seconds;

  const order: PrayerKey[] = [
    'imsak',
    'gunes',
    'ogle',
    'ikindi',
    'aksam',
    'yatsi',
  ];

  for (const key of order) {
    const targetSec = toSeconds(schedule[key]);
    if (targetSec > nowSeconds) {
      const diff = targetSec - nowSeconds;
      return {
        key,
        time: schedule[key],
        remainingSeconds: diff,
        hours: Math.floor(diff / 3600),
        minutes: Math.floor((diff % 3600) / 60),
        seconds: diff % 60,
      };
    }
  }

  // Next day Imsak
  const tomorrow = new Date(now.getTime() + 86400 * 1000);
  const tomorrowSchedule = calculateVrapcistePrayerTimes(tomorrow);
  const diff = 86400 - nowSeconds + toSeconds(tomorrowSchedule.imsak);
  return {
    key: 'imsak',
    time: tomorrowSchedule.imsak,
    remainingSeconds: diff,
    hours: Math.floor(diff / 3600),
    minutes: Math.floor((diff % 3600) / 60),
    seconds: diff % 60,
  };
}

export function formatGregorianDate(lang: 'tr' | 'sq', now = new Date()): string {
  return new Intl.DateTimeFormat(lang === 'tr' ? 'tr-TR' : 'sq-AL', {
    timeZone: 'Europe/Skopje',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(now);
}

export function formatHijriDate(lang: 'tr' | 'sq', now = new Date()): string {
  try {
    return new Intl.DateTimeFormat(
      lang === 'tr' ? 'tr-TR-u-ca-islamic-umalqura' : 'sq-AL-u-ca-islamic-umalqura',
      {
        timeZone: 'Europe/Skopje',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }
    ).format(now);
  } catch {
    return '';
  }
}

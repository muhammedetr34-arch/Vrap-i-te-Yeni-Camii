import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { LocateFixed, ExternalLink } from 'lucide-react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { Lang, TranslationTree } from '../data/i18n';
import { MOSQUE_LOCATION } from '../data/mosqueData';

interface MosqueMapProps {
  t: TranslationTree;
  lang: Lang;
}

const mosquePinIcon = L.divIcon({
  className: 'vyc-map-pin',
  html: `
    <div style="display:flex;align-items:center;justify-content:center;width:36px;height:36px;">
      <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16 1C8.268 1 2 7.268 2 15c0 10.22 12.192 22.712 13.09 23.622a1.28 1.28 0 0 0 1.82 0C17.808 37.712 30 25.22 30 15 30 7.268 23.732 1 16 1Z" fill="#0B4A34" stroke="#F6F4EE" stroke-width="2"/>
        <circle cx="16" cy="14.5" r="5" fill="#D9BD82"/>
      </svg>
    </div>
  `,
  iconSize: [36, 40],
  iconAnchor: [18, 39],
  popupAnchor: [0, -36],
});

function RecenterController({
  lat,
  lng,
  trigger,
}: {
  lat: number;
  lng: number;
  trigger: number;
}) {
  const map = useMap();

  useEffect(() => {
    if (trigger > 0) {
      map.setView([lat, lng], 17, { animate: true });
    }
  }, [lat, lng, map, trigger]);

  return null;
}

export function MosqueMap({ t, lang }: MosqueMapProps) {
  const [recenterTick, setRecenterTick] = useState(0);
  const { lat, lng, googleMapsUrl, label } = MOSQUE_LOCATION;

  return (
    <div className="rounded-[20px] border border-[#1A1F1B]/10 bg-white/90 shadow-[0_1px_2px_rgba(11,74,52,0.06)] p-5 sm:p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div className="space-y-1">
          <h2 className="font-display text-2xl sm:text-[26px] text-[#1A1F1B]">
            {t.contact.mapTitle}
          </h2>
          <p className="text-sm text-[#6B7268]">{t.contact.mapSubtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setRecenterTick((prev) => prev + 1)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1A1F1B] border border-[#1A1F1B]/15 bg-white hover:bg-[#F6F4EE] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <LocateFixed className="w-3.5 h-3.5 text-[#0B4A34]" />
            {t.contact.recenterMap}
          </button>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-br from-[#0B4A34] to-[#063122] hover:opacity-95 rounded-full transition-opacity whitespace-nowrap shrink-0 shadow-xs"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#D9BD82]" />
            {t.contact.openInMaps}
          </a>
        </div>
      </div>

      <div className="h-[340px] sm:h-[380px] w-full rounded-[14px] overflow-hidden border border-[#1A1F1B]/10 bg-[#F6F4EE] relative z-0">
        <MapContainer
          center={[lat, lng]}
          zoom={17}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <RecenterController lat={lat} lng={lng} trigger={recenterTick} />
          <Marker position={[lat, lng]} icon={mosquePinIcon}>
            <Popup>
              <div className="space-y-1.5 text-xs text-[#1A1F1B] font-sans">
                <p className="font-semibold text-sm text-[#0B4A34]">
                  {label[lang]}
                </p>
                <p className="text-[#6B7268]">{t.brand.location}</p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#0B4A34] underline"
                >
                  {t.contact.openInMaps}
                </a>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#6B7268] pt-0.5">
        <span className="font-mono tabular-nums">
          {t.contact.coordinates}: {lat.toFixed(6)}, {lng.toFixed(6)}
        </span>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0B4A34] font-semibold hover:underline truncate max-w-full"
        >
          {googleMapsUrl}
        </a>
      </div>
    </div>
  );
}

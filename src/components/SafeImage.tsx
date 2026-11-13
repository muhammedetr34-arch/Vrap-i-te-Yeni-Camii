import { useState } from 'react';
import { Landmark } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full min-h-[240px] bg-gradient-to-br from-[#F1ECE2] via-[#EBE5D9] to-[#E0D8C8] flex flex-col items-center justify-center p-6 text-center border border-[#E4DDD0]"
      >
        <Landmark className="w-8 h-8 text-[#14532D]/70 mb-3" strokeWidth={1.5} />
        <p className="font-serif text-lg text-[#1C1917]">{fallbackTitle || alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

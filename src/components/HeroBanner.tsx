import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

type HeroBannerProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: {
    label: string;
    to: string;
  };
  ctaOnClick?: () => void;
  note?: string;
  backgroundImage?: string;
  backgroundImages?: string[];
  cycleIntervalMs?: number;
  respectReducedMotion?: boolean;
  className?: string;
};

export default function HeroBanner({
  eyebrow,
  title,
  subtitle,
  cta,
  ctaOnClick,
  note,
  backgroundImage,
  backgroundImages,
  cycleIntervalMs = 6000,
  respectReducedMotion = true,
  className,
}: HeroBannerProps) {
  const images = React.useMemo(() => {
    if (backgroundImages && backgroundImages.length > 0) {
      return backgroundImages;
    }
    return backgroundImage ? [backgroundImage] : [];
  }, [backgroundImage, backgroundImages]);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [lastVideoIndex, setLastVideoIndex] = React.useState<number | null>(null);

  const currentBackground = images[currentIndex];
  const heroImageLoading = currentIndex === 0 ? 'eager' : 'lazy';
  const heroImagePriority = currentIndex === 0 ? 'high' : 'low';
  const zoomOut = Boolean(currentBackground && currentBackground.includes('?zoom=out'));
  const backgroundSrc = currentBackground ? currentBackground.split('?')[0] : '';
  const isVideo = Boolean(backgroundSrc && /\.(mp4|webm)$/i.test(backgroundSrc));
  const webmSource = backgroundSrc && backgroundSrc.endsWith('.mp4')
    ? backgroundSrc.replace(/\.mp4$/i, '.webm')
    : undefined;

  const handleVideoEnded = React.useCallback(() => {
    if (images.length <= 1) {
      return;
    }
    setLastVideoIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length, currentIndex]);

  React.useEffect(() => {
    if (images.length <= 1) {
      setCurrentIndex(0);
      return undefined;
    }

    if (typeof window === 'undefined') {
      return undefined;
    }

    if (respectReducedMotion) {
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (motionQuery.matches) {
        return undefined;
      }
    }

    if (isVideo) {
      return undefined;
    }

    let intervalId: number | undefined;
    let timeoutId: number | undefined;

    if (lastVideoIndex !== null && currentIndex !== lastVideoIndex) {
      timeoutId = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setLastVideoIndex(null);
      }, cycleIntervalMs);
    } else {
      intervalId = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, cycleIntervalMs);
    }

    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [images, cycleIntervalMs, respectReducedMotion, isVideo, currentIndex, lastVideoIndex]);
  return (
    <header className={clsx('hero hero--primary hero--lp', className)}>
      {currentBackground && (
        <div className="hero--lp__image" aria-hidden="true">
          {isVideo ? (
            <video
              className="hero--lp__video"
              autoPlay
              muted
              playsInline
              preload="metadata"
              onEnded={handleVideoEnded}
              key={currentBackground}
            >
              {webmSource && <source src={webmSource} type="video/webm" />}
              <source src={backgroundSrc} type="video/mp4" />
            </video>
          ) : (
            <picture>
              <img
                src={backgroundSrc}
                alt=""
                decoding="async"
                loading={heroImageLoading}
                fetchPriority={heroImagePriority}
                sizes="100vw"
                className={zoomOut ? 'hero--lp__image--zoom-out' : undefined}
                key={currentBackground}
              />
            </picture>
          )}
        </div>
      )}
      <div className="container">
        <div className="hero__foreground hero__content">
          {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
          <h1 className="hero__title">{title}</h1>
          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
          {(cta || note) && (
            <div className="hero__cta">
              {cta && (
                ctaOnClick ? (
                  <button
                    type="button"
                    className="button button--secondary button--lg"
                    onClick={ctaOnClick}
                  >
                    {cta.label}
                  </button>
                ) : (
                  <Link className="button button--secondary button--lg" to={cta.to}>
                    {cta.label}
                  </Link>
                )
              )}
              {note && <span className="hero__note">{note}</span>}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

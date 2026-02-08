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

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, cycleIntervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [images, cycleIntervalMs, respectReducedMotion]);

  const currentBackground = images[currentIndex];
  const heroImageLoading = currentIndex === 0 ? 'eager' : 'lazy';
  const heroImagePriority = currentIndex === 0 ? 'high' : 'low';

  return (
    <header className={clsx('hero hero--primary hero--lp', className)}>
      {currentBackground && (
        <div className="hero--lp__image" aria-hidden="true">
          <picture>
            <img
              src={currentBackground}
              alt=""
              decoding="async"
              loading={heroImageLoading}
              fetchPriority={heroImagePriority}
              sizes="100vw"
            />
          </picture>
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
                <Link className="button button--secondary button--lg" to={cta.to}>
                  {cta.label}
                </Link>
              )}
              {note && <span className="hero__note">{note}</span>}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

declare global {
  interface Window {
    requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
    cancelIdleCallback?: (handle: number) => void;
  }
}

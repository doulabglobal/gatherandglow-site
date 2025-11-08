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
  className?: string;
};

type HeroBannerStyle = React.CSSProperties & {
  '--hero-background-image'?: string;
};

export default function HeroBanner({
  eyebrow,
  title,
  subtitle,
  cta,
  note,
  backgroundImage,
  className,
}: HeroBannerProps) {
  const heroStyle: HeroBannerStyle | undefined = backgroundImage
    ? {'--hero-background-image': `url('${backgroundImage}')`}
    : undefined;

  return (
    <header className={clsx('hero hero--primary hero--lp', className)} style={heroStyle}>
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

import type { BrandPanel } from '../data/siteContent'
import './BrandCard.css'

type BrandCardProps = {
  panel: BrandPanel
}

export function BrandCard({ panel }: BrandCardProps) {
  return (
    <article className={`brand-card brand-card--${panel.variant}`}>
      <div
        className="brand-card__bg"
        style={{ backgroundImage: `url(${panel.imageUrl})` }}
        aria-hidden="true"
      />

      <div className="brand-card__content">
        <span
          className="brand-card__heading-icon"
          style={{
            WebkitMaskImage: `url("${panel.iconUrl}")`,
            maskImage: `url("${panel.iconUrl}")`,
          }}
          aria-hidden="true"
        />
        <h2>
          {panel.titleLines[0]}
          <br />
          {panel.titleLines[1]}
        </h2>
        <div className="brand-card__line" />
        <p>{panel.description}</p>

        {panel.highlights.length > 0 && (
          <div className="brand-card__icons" aria-label={`${panel.title} Highlights`}>
            {panel.highlights.map((item) => (
              <div className="brand-card__icon" key={item.label}>
                <b>{item.icon}</b>
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <a
        className={`brand-card__btn${panel.ctaStyle === 'outline' ? ' brand-card__btn--outline' : ''}`}
        href={panel.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {panel.ctaLabel} <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}

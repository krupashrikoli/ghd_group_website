import type { CSSProperties } from 'react'
import { assets } from '../data/assets'
import { brandPanels, heroContent, highlightStats } from '../data/siteContent'
import { BrandCard } from './BrandCard'
import { Highlights } from './Highlights'
import './LandingPage.css'

export function LandingPage() {
  return (
    <main
      className="landing-page"
      role="main"
      style={{ '--landing-bg-image': `url("${assets.backgrounds.main}")` } as CSSProperties}
    >
      <section className="landing-page__wrap" aria-label="GHD Group Landing Page">
        <h1 className="landing-page__title">
          {heroContent.title.line1} <span>{heroContent.title.highlight1}</span>
          <br />
          {heroContent.title.line2} <span>{heroContent.title.highlight2}</span>
        </h1>

        <p className="landing-page__subtitle">{heroContent.subtitle}</p>

        <div className="landing-page__panels" role="tablist" aria-label="GHD Group brands">
          {brandPanels.map((panel) => (
            <BrandCard key={panel.id} panel={panel} />
          ))}
        </div>

        <Highlights items={highlightStats} />
      </section>
    </main>
  )
}

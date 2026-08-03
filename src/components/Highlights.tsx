import type { HighlightStat } from '../data/siteContent'
import './Highlights.css'

type HighlightsProps = {
  items: HighlightStat[]
}

export function Highlights({ items }: HighlightsProps) {
  return (
    <div className="highlights" aria-label="GHD Group Highlights">
      {items.map((item) => (
        <div className="highlights__item" key={item.label}>
          {item.iconUrl ? (
            <span
              className="highlights__icon highlights__icon--image"
              style={{
                WebkitMaskImage: `url("${item.iconUrl}")`,
                maskImage: `url("${item.iconUrl}")`,
              }}
              aria-hidden="true"
            />
          ) : (
            <span className="highlights__icon" aria-hidden="true">
              {item.icon}
            </span>
          )}
          <span className="highlights__label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

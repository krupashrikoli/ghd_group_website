import { aboutContent } from '../data/aboutContent'
import './AboutModal.css'

type AboutModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null

  return (
    <div className="about-modal" role="dialog" aria-modal="true" aria-labelledby="about-modal-title">
      <button
        type="button"
        className="about-modal__backdrop"
        aria-label="Close about card"
        onClick={onClose}
      />

      <div className="about-modal__card">
        <div className="about-modal__header">
          <div>
            <p className="about-modal__eyebrow">{aboutContent.eyebrow}</p>
            <h2 id="about-modal-title">{aboutContent.headline}</h2>
          </div>
          <button
            type="button"
            className="about-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="about-modal__body">
          {aboutContent.chapters.map((chapter) => (
            <section className="about-modal__section about-modal__story" key={chapter.title}>
              <h3>{chapter.title}</h3>
              {chapter.paragraphs.map((paragraph, index) => (
                <p key={`${chapter.title}-${index}`}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="about-modal__stats">
            {aboutContent.stats.map((stat) => (
              <div className="about-modal__stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <section className="about-modal__section">
            <p className="about-modal__eyebrow">{aboutContent.values.eyebrow}</p>
            <h3>{aboutContent.values.title}</h3>
            <p>{aboutContent.values.body}</p>
          </section>

          <section className="about-modal__section">
            <p className="about-modal__eyebrow">{aboutContent.uniqueness.eyebrow}</p>
            <h3>{aboutContent.uniqueness.title}</h3>
            <div className="about-modal__pillars">
              {aboutContent.uniqueness.pillars.map((pillar) => (
                <article className="about-modal__pillar" key={pillar.title}>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-modal__section">
            <h3>{aboutContent.journey.title}</h3>
            <p className="about-modal__subtitle">{aboutContent.journey.subtitle}</p>
            <div className="about-modal__timeline" aria-label="Company timeline">
              {aboutContent.journey.years.map((year) => (
                <div className="about-modal__year" key={year}>
                  {year}
                </div>
              ))}
            </div>
          </section>

          <section className="about-modal__section">
            <p className="about-modal__eyebrow">{aboutContent.team.eyebrow}</p>
            <h3>{aboutContent.team.title}</h3>
            <div className="about-modal__team about-modal__team--single">
              {aboutContent.team.members.map((member) => (
                <article className="about-modal__member" key={member.name}>
                  <h4>{member.name}</h4>
                  {member.role ? <p>{member.role}</p> : null}
                </article>
              ))}
            </div>
          </section>

          <section className="about-modal__section about-modal__story">
            <h3>{aboutContent.closing.title}</h3>
            {aboutContent.closing.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

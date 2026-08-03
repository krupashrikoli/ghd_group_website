import { contactBrands } from '../data/navigation'
import './ContactModal.css'

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null

  return (
    <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <button
        type="button"
        className="contact-modal__backdrop"
        aria-label="Close contact card"
        onClick={onClose}
      />

      <div className="contact-modal__card">
        <div className="contact-modal__header">
          <h2 id="contact-modal-title">Contact</h2>
          <button
            type="button"
            className="contact-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="contact-modal__brands">
          {contactBrands.map((brand) => (
            <article className="contact-modal__brand" key={brand.id}>
              <h3>{brand.name}</h3>
              <p className="contact-modal__label">Contact</p>
              <p>
                <span>Enquiry:</span>{' '}
                <a href={`tel:${brand.enquiry.replace(/\s+/g, '')}`}>{brand.enquiry}</a>
              </p>
              <p>
                <span>Email:</span>{' '}
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

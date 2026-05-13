import { useId } from 'react'

export function PhoneEntryModal(props: {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  canSubmit: boolean
}) {
  const titleId = useId()
  const descId = useId()

  return (
    <div className="bootOverlay" role="presentation">
      <div
        className="phoneModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <h1 id={titleId} className="phoneModalTitle">
          Enter phone number
        </h1>
        <p id={descId} className="phoneModalDesc">
          Get all information using the phone number
        </p>
        <label className="phoneModalLabel" htmlFor="phone-entry-input">
          Phone
        </label>
        <input
          id="phone-entry-input"
          className="phoneModalInput"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+1 555 000 0000"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && props.canSubmit) props.onSubmit()
          }}
        />
        <button
          type="button"
          className="phoneModalSubmit"
          disabled={!props.canSubmit}
          onClick={props.onSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

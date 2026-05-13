import type { AppSource } from '../types'

export function AppHeader(props: {
  sources: { key: AppSource; label: string }[]
  selectedSource: AppSource
  onSelectSource: (source: AppSource) => void
}) {
  return (
    <header className="appHeader">
      <div className="brand">
        <div className="brandMark" aria-hidden="true" />
        <div className="brandText">
          <div className="brandTitle">Chat history</div>
          <div className="brandSubtitle">Conversation history</div>
        </div>
      </div>

      <nav className="sourceTabs" aria-label="Source switcher">
        {props.sources.map((s) => {
          const active = s.key === props.selectedSource
          return (
            <button
              key={s.key}
              type="button"
              className={active ? 'tab tabActive' : 'tab'}
              onClick={() => props.onSelectSource(s.key)}
              aria-current={active ? 'page' : undefined}
            >
              {s.label}
            </button>
          )
        })}
      </nav>
    </header>
  )
}


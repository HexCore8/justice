export function BootLoadingScreen() {
  return (
    <div className="bootLoading" role="status" aria-live="polite" aria-busy="true">
      <div className="bootLoadingSpinner" aria-hidden="true" />
      <p className="bootLoadingText">Loading…</p>
    </div>
  )
}

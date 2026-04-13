import '../styles/ResetButton.css'

function ResetButton({ onReset }) {
  return (
    <section className="reset-section">
      <button className="reset-button" onClick={onReset}>
        Reset Game
      </button>
    </section>
  )
}

export default ResetButton
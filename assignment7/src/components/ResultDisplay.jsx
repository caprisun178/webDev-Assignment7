import '../styles/ResultDisplay.css'

function ResultDisplay({ playerChoice, computerChoice, result }) {
  return (
    <section className="result-display">
      <h2>Outcome</h2>

      {playerChoice && (
        <p>
          <strong>You chose:</strong> {playerChoice}
        </p>
      )}

      {computerChoice && (
        <p>
          <strong>Computer chose:</strong> {computerChoice}
        </p>
      )}

      <p className="result-text">
        {result ? result : 'Make a selection to start the round.'}
      </p>
    </section>
  )
}

export default ResultDisplay
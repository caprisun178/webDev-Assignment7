import '../styles/ScoreBoard.css'

function ScoreBoard({ score }) {
  return (
    <section className="scoreboard">
      <h2>Score Board</h2>

      <div className="score-grid">
        <div className="score-card">
          <h3>Wins</h3>
          <p>{score.wins}</p>
        </div>

        <div className="score-card">
          <h3>Losses</h3>
          <p>{score.losses}</p>
        </div>

        <div className="score-card">
          <h3>Ties</h3>
          <p>{score.ties}</p>
        </div>
      </div>
    </section>
  )
}

export default ScoreBoard
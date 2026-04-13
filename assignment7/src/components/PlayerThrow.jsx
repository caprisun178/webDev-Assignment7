import '../styles/PlayerThrow.css'

function PlayerThrow({ playerChoice, onSelectThrow, disabled }) {
  const throwOptions = ['rock', 'paper', 'scissors']

  return (
    <section className="player-throw">
      <h2>Your Throw</h2>

      <div className="throw-options">
        {throwOptions.map((item) => (
          <button
            key={item}
            className={`throw-button ${playerChoice === item ? 'selected' : ''}`}
            onClick={() => onSelectThrow(item)}
            disabled={disabled}
            aria-label={`Choose ${item}`}
          >
            
            <img src={`../../public/images/${item}.png`} alt={item} />
            <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default PlayerThrow
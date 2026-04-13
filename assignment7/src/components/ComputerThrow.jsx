import '../styles/ComputerThrow.css'

function ComputerThrow({ displayedComputerImage, isShuffling }) {
  return (
    <section className="computer-throw">
      <h2>Computer Throw</h2>

      <div className="computer-image-box">
        <img
          src={`../../public/images/${displayedComputerImage}.png`}
          alt={displayedComputerImage}
          className={isShuffling ? 'shuffle' : ''}
        />
      </div>

      <p>
        {isShuffling ? 'Computer is choosing...' : 'Computer has made a choice.'}
      </p>
    </section>
  )
}

export default ComputerThrow
import './Card.css'

export default function Card({ monster }) {
  return (
    <div className="card-container">
      <img
        src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${monster.name}`}
        alt="monster"
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
}

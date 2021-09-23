import './Card.css'

export default function Card({ monster }) {
  return (
    <div className="card-container">
      <img
        src={`https://avatars.dicebear.com/api/bottts/${monster.name}.svg`}
        alt="monster"
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
}

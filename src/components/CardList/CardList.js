import Card from '../Card/Card'
import './CardList.css'

export default function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  )
}

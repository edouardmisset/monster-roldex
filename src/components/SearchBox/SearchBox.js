import './SearchBox.css'

export default function SearchBox({ onSearchChange, placeholder }) {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    ></input>
  )
}

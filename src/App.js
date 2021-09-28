import React, { Component } from 'react'
import './App.css'
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users })
      })
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }
  render() {
    const { monsters, searchField } = this.state

    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox
          onSearchChange={this.onSearchChange}
          placeholder="Search monster"
        />
        {monsters.length > 0 ? (
          <CardList
            monsters={monsters.filter(monster =>
              monster.name.toLowerCase().includes(searchField.toLowerCase())
            )}
          />
        ) : (
          <h2 className="loading">Loading...</h2>
        )}
      </div>
    )
  }
}

export default App

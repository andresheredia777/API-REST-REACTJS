import React, { Component } from 'react'
import Searchbox from './components/search-box/searchBox';
import { CardList } from './components/cardlist/cardList';
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ monsters: json }))
      .catch(error => console.log(error))
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }
  render() {
    const { monsters, searchField } = this.state;
    let filterData=monsters.filter(monster=>monster.name.includes(searchField))
    console.log("busqueda", searchField )
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <Searchbox onSearchChange={this.onSearchChange} />
        <CardList monsters={filterData}></CardList>
      </div>
    )
  }
}


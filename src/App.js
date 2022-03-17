import './App.css';
import 'tachyons'
import React , { Component } from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import SearchBox from './components/SearchBox';
import ErrorBoundry from './components/ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    } 
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }
  render() {
    const filteredRobots = this.state.robots.filter( robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    }
    else {
      return (
        <div className="App">
          <h1>Robots friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;

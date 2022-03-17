import './App.css';
import 'tachyons'
import React , { useState , useEffect } from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import SearchBox from './components/SearchBox';
import ErrorBoundry from './components/ErrorBoundry';

function App() {

  const [robots , setRobots] = useState([])
  const [searchField , setSearchField] = useState('')

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users))
  },[])

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }
  const filteredRobots = robots.filter( robots => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase())
  })
  console.log(robots)
  if (!robots) {
    return <h1>Loading</h1>
  }
  else {
    return (
      <div className="App">
        <h1>Robots friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
export default App;

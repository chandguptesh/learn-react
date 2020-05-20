import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchitem: ""
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(users => {
        
         return this.setState({ robots: users })
      })

  }
  render() {
    let filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchitem.toLowerCase())
    });
    if (this.state.robots.length === 0) {
      return <h1> Loading </h1>
    }
    else {

      return (
        <div className='tc'>
          <h1>Robo Friends</h1>
          
          <SearchBox searchChange={this.onSearchChanged} />
          <Scroll>
            <ErrorBoundary>
          <CardList robots={filteredRobots} />
          </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
  }

  onSearchChanged = (event) => {
    console.log(event.target.value);
    this.setState({ searchitem: event.target.value });
  }


}

export default App;
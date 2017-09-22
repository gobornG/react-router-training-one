import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topics';
import Topic from './components/Topic';
import { Link, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        < BasicExample />
      </div>
    );
  }
}

const BasicExample = () => (
  <div>
    <div>
      <ul>
        <li><Link to="/">My Friends</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/topics" component={Topics} />
    </div>
  </div>
)

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

export default App;

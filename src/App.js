import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import navData from './navData';
import Nav from './Nav';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: navData
    }
  }
  render() {
    return (
      <Fragment>
        {this.state.data.map((obj) => {
          let name = Object.keys(obj)[0].toLowerCase();
          return <Route path={`/${name}`}/>
        })}
      <Nav data={this.state.data} />
      </Fragment>
    );
  }
}

export default App;

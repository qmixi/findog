import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import './App.css'
import reducers from './reducers/main'
import FindogAppContainer from './containers/FindogAppContainer'

class App extends Component {
  render() {
    const store = createStore(reducers);

    return (

        <Provider store={store}>
          <FindogAppContainer/>
        </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import QuestionnaireContainer from './container/QuestionnaireContainer'

class App extends Component {
  render() {
    return (
    <div>
        <Provider store={store}>
            <QuestionnaireContainer />
        </Provider>
    </div>
    );
  }
}

export default App;



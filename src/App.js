import React, { Component } from 'react';
import './App.css';
import LoginCount from './recap/LoginCount';
import ControlledComponent from './controlled_component/index';
import NameForm from './uncontrolled_component/index';
import Calculator from './currency_changer/index';
import BasicExample from './router/index';

class App extends Component {
  render() {
    return (
      <div>      
        <LoginCount/>
      </div>
    );
  }
}

export default App;



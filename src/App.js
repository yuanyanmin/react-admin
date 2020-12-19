import './App.css';
import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Login from './routes/Login/index'
import Index from './routes/Index/index'
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>  
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Index}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './common/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import NoMatch from './Components/NoMatch';
import Layout from './common/Layout'
import Jumbotron from './common/Jumbotron'

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <Jumbotron />
      <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contacts' component={Contacts}/>
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
      </Layout>
    </React.Fragment>
  );
}

export default App;

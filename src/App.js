import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { connect } from 'react-redux'
import Navb from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navb />
        <Switch>
          <Route path='/' exact component={ Dashboard } />
          <Route path='/signin' component={ SignIn }/>
          <Route path='/signup' component={ SignUp }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return{

  }
}

export default connect(mapStateToProps)(App)
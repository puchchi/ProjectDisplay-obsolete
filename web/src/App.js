import logo from './logo.svg';
import './App.css';
import './asset/css/main.css';
import './asset/css/utilities.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>

          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup" >
            <Signup />
          </Route>
          <Route exact path="/forgotpassword" >

          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

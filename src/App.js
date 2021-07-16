import './App.css';
import RootContainer from './container/RootContainer';
import Facebook from './container/Facebook';
import Google from './container/Google';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* header */}
      <div> <h1>Login for User </h1></div>
      <hr />
      {/* body */}
      <Router>
        
      <div> 
        
        <h1><Link to="/login-with-google">google</Link></h1>
      </div>
        <Switch>
            <Route exact path="/">
              <RootContainer />
            </Route>
            <Route exact path="/login-with-facebook">
            <Facebook />
            </Route>
              <Route exact path="/login-with-google" >
                <Google/>
              </Route>     
        </Switch>
      </Router>
     </div>
  );
}

export default App;

import './App.css';
import RootContainer from './container/RootContainer';
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
        <h1><Link to="/login-with-facebook">facebook</Link></h1>
        <h1><Link to="/login-with-github">github</Link></h1>
        <h1><Link to="/login-with-google">google</Link></h1>
      </div>
        <Switch>
            <Route exact path="/">
              <RootContainer />
            </Route>
            <Route exact path="/login-with-facebook" component={Facebook} />
            <Route exact path="/login-with-github" component={Github} />
            <Route exact path="/login-with-google" component={Google} />
        </Switch>
      </Router>
     </div>
  );
}

export default App;


const Facebook = () => {
  return(<div>login-with-Facebook</div>)
}


const Google = () => {
  return(<div>login-with-Google</div>)
}

const Github = () => {
  return(<div>login-with-Github</div>)
}
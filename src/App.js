import './App.css';
import Loginpage from './pages/Loginpage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    //<div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Trangchu} />
        <Route exact path="/login" component={Loginpage} />
      </Switch>
    </Router>
    //</div>
  );
}
function Trangchu() {
  return (
    <>
      <h2>Trang chu</h2>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
}

export default App;

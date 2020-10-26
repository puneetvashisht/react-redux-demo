import logo from './logo.svg';
import './App.css';
import ViewEmployees from './ViewEmployees'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import AddEmployee from './AddEmployee';

function App() {
  return (

    <Router>
      <div>
        <nav>
            <Link to="/">View Employees</Link> |   <Link to="/add">Add employees</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add">
          <AddEmployee></AddEmployee>
          </Route>
          <Route path="/">
          <ViewEmployees></ViewEmployees>
          </Route>
    
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

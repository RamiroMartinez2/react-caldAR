import "./App.css";
import Nav from './Layout/Nav/Nav';
import Main from './Layout/Main/Main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Main}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
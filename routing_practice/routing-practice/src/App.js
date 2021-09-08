import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Info from './components/Info';
import Hello from './components/Hello';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path= "/home">
            <h1>Welcome</h1>
          </Route>
          <Route exact path= "/:id">
            <Info></Info>
          </Route>
          <Route exact path= "/:id/:color/:backgroundColor">
          <Info></Info>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

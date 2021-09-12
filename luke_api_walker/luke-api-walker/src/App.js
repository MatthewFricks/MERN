
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchForm from './components/SearchForm';
import Display from './components/Display.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <h1>Hello API Walker</h1>
      <SearchForm></SearchForm>
      <Switch>
        <Route exact path = "/:category/:id">
          <Display></Display>
        </Route>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;

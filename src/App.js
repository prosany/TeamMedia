import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import TeamDetails from './components/TeamDetails/TeamDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
      <Header></Header>
      <Router>         
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/teaminfo/:teamId">
                <TeamDetails />
              </Route>
              <Route path="*">
                  <NotFound />
              </Route>
          </Switch>
        </Router>
      <Footer></Footer>
    </>
  );
}

export default App;

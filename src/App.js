import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;

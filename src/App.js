import "./App.css";
import "./main.scss";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Consult from "./Components/Consult/Consult";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Messaging from "./Components/Messaging/Messaging"
import Footer from "./Components/Footer/Footer"

// import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path = "/message">
            <Messaging />
          </Route>
          <Route path="/">
            <Header />
            <Banner />
            <About />
            <Consult />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

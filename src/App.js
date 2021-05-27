import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Notified from "./pages/notified";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/notified" component={Notified} exact />
      </Switch>
    </Router>
  );
}

export default App;

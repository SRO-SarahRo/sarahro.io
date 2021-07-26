import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages";
import Notified from "./pages/notified";

function App() {
  return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/notified" component={Notified} exact />
        <Redirect to="/" />
      </Switch>
  );
}

export default App;

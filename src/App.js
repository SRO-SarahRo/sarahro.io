import { Switch, Route, Redirect } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import './style/App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ComingSoon} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;

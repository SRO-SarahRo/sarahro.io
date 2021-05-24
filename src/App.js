import { Switch, Route, Redirect } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ComingSoon} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;

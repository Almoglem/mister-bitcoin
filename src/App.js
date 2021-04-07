import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home'
import { Contacts } from './pages/Contacts'
import { ContactDetails } from './pages/ContactDetails';
import { Statistics } from './pages/Statistics';
import { AppHeader } from './cmps/AppHeader'

function App() {



  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route component={ContactDetails} path='/contact/:id' />
          <Route component={Contacts} path='/contacts' />
          <Route component={Statistics} path='/statistics' />
          <Route component={Home} path='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

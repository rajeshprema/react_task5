
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import EditUser from './Components/EditUser';
import UserProfile from './Components/UserProfile';
import EditProfile from './Components/EditProfile';

    
    
function App() {
  return (
    <div className="App">
       <Router>
      <Switch>
        <Route path="/users" component={UserList} exact />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/edit-user/:id" component={EditUser} />
        <Route path="/profile/:id" component={UserProfile} />
        <Route path="/edit-profile/:id" component={EditProfile} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;

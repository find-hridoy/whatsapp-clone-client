import React, { useState, createContext } from 'react';
import './app.css';
import Login from './components/Login/Login';
import ChatBody from './components/ChatBody/ChatBody';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Chat } from '@material-ui/icons';
import Sidebar from './components/Sidebar/Sidebar';




export const UserContext = createContext<any>([]);

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({})
  
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route path="/chatbody">
          <ChatBody/>
        </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Main from './Main';
import ShowGithubUser from './components/ShowGithubUser';
import GithubUserList from './components/GithubUserList';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/users/octocat">View Octocat's Github Profile</Link></li>
          <li><Link to="/userlist">Github User List</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/users/:username" component={ShowGithubUser} />
        <Route path="/userlist" component={GithubUserList} />
      </Switch>
    </div>
  );
};

export default App;
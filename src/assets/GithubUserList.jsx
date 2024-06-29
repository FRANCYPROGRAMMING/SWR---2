import React from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';

const GithubUserList = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Github User List</h1>
      <nav>
        <ul>
          <li><Link to={`${url}/octocat`}>View Octocat's Github Profile</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={path}>
          <p>Add a user and select it</p>
        </Route>
        <Route path={`${path}/:username`} component={ShowGithubUser} />
      </Switch>
    </div>
  );
};

export default GithubUserList;

import React from 'react';
// import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import Channel from '@pages/Channel';
import DirectMessage from '@pages/DirectMessage';
import Workspace from '@layouts/Workspace';

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace" component={Workspace} />
    </Switch>
  );
};

export default App;

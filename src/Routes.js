import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Blurb, Timeline, Projects } from './components';

const Routes = props => {
  return (
    <Switch>
      <Route path='/about' component={Blurb} />
      <Route path='/timeline' component={Timeline} />
      <Route path='/projects' component={Projects} />
      <Route path='/personal-website' component={Projects} />
    </Switch>
  )
}

export default Routes;
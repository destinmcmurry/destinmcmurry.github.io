import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Blurb, Timeline, Projects, Media, Home } from './components';

const Routes = props => {
  return (
    <Switch>
      <Route path='/blurb' component={Blurb} />
      <Route path='/timeline' component={Timeline} />
      <Route path='/projects' component={Projects} />
      <Route path='/media' component={Media} />
      <Route exact path='/' component={Home} />
    </Switch>
  )
}

export default Routes;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Module from './module';
import Track from './track';
/** importing our pages */
import Tracks from './tracks';

export default function Pages() {
  return (
    <Switch>
      <Route exact path="/track/:trackId/module/:moduleId" component={Module} />
      <Route exact path="/track/:trackId" component={Track} />
      <Route exact path="/" component={Tracks} />
    </Switch>
  );
}

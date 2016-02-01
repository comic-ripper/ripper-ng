import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';

import Comic from './containers/Comic';
import Comics from './containers/Comics';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Comics} />
    <Route path="comics" component={Comics}>
      <Route path="/comics/:comicId" component={Comic} />
    </Route>
  </Route>
);

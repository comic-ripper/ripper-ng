import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';

import Comic from 'containers/Comic';
import Comics from 'containers/Comics';
import Chapter from 'containers/Chapter';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Comics} />
    <Route path="comics" component={Comics}>
      <Route path="/comics/:comicId" component={Comic}>
        <Route path=":chapterId" component={Chapter} />
      </Route>
    </Route>
  </Route>
);

import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { ActionCreators as UndoActions } from 'redux-undo';
import { connect } from 'react-redux';

import AppNav from 'components/AppNav';

import Comics from 'containers/Comics';

class App extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div>
        <AppNav brand="Ripper" />
        <Comics />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

function select(state, props) {
  return { state, props };
}

export default connect(select)(App);

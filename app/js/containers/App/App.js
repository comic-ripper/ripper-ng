import React, { Component } from 'react';

import { Grid } from 'react-bootstrap';

import AppNav from 'components/AppNav';

class App extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

  render() {
    return (
      <div>
        <AppNav brand="Ripper" />
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}


export default App;

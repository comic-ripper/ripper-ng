import React from 'react';

import { Navbar } from 'react-bootstrap';

class AppNav extends React.Component {
  static propTypes = {
    brand: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            {this.props.brand}
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default AppNav;

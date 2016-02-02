import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { IndexLinkContainer } from 'react-router-bootstrap';

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
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem>Comic List</NavItem>
            </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNav;

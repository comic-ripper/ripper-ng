import React from 'react';
import { connect } from 'react-redux';

import { loadComics } from 'actions';

import ComicList from 'components/ComicList';

class Comics extends React.Component {
  static propTypes = {
    comics: React.PropTypes.object.isRequired,
    loadComics: React.PropTypes.func.isRequired,
    children: React.PropTypes.element,
  };

  componentWillMount() {
    this.props.loadComics();
  }

  render() {
    if (this.props.children) {
      return this.props.children;
    }
    return <ComicList comics={this.props.comics} />;
  }
}

function mapStateToProps(state) {
  return {
    comics: state.entities.comics,
  };
}

export default connect(mapStateToProps, {
  loadComics,
})(Comics);

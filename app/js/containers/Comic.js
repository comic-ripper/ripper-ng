import React from 'react';
import { connect } from 'react-redux';

import { getComic } from 'actions';

import ComicInfo from 'components/ComicInfo';

class Comic extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({
      comicId: React.PropTypes.string.isRequired,
    }).isRequired,
    comic: React.PropTypes.object,
    chapters: React.PropTypes.arrayOf(React.PropTypes.object),
    getComic: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getComic(this.props.params.comicId);
  }

  render() {
    if (this.props.comic) {
      return <ComicInfo comic={this.props.comic} chapters={this.props.chapters} />;
    }
    return (<i>Loading...</i>);
  }
}

function mapStateToProps(state, props) {
  const comic = state.entities.comics[props.params.comicId];
  let chapters = null;
  if (comic && comic.chapters) {
    chapters = comic.chapters.map(
      (chapterId) => state.entities.chapters[chapterId]
    );
  }

  return {
    comic,
    chapters,
  };
}

export default connect(mapStateToProps.bind(this), {
  getComic,
})(Comic);

import React from 'react';
import { connect } from 'react-redux';

import { getChapter } from 'actions';

import ChapterReader from 'components/ChapterReader';

class Chapter extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({
      chapterId: React.PropTypes.string.isRequired,
    }).isRequired,
    chapter: React.PropTypes.object,
    pages: React.PropTypes.arrayOf(React.PropTypes.object),
    getChapter: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getChapter(this.props.params.chapterId);
  }

  render() {
    if (this.props.chapter && this.props.chapter.pages) {
      return <ChapterReader chapter={this.props.chapter} pages={this.props.pages} />;
    }
    return (<i>Loading...</i>);
  }
}

function mapStateToProps(state, props) {
  const chapter = state.entities.chapters[props.params.chapterId];
  let pages = null;
  if (chapter && chapter.pages) {
    pages = chapter.pages.map(
      (chapterId) => state.entities.pages[chapterId]
    );
  }

  return {
    chapter,
    pages,
  };
}

export default connect(mapStateToProps.bind(this), {
  getChapter,
})(Chapter);

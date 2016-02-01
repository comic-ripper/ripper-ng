import React from 'react';

import ChapterList from 'components/ChapterList';

class ComicInfo extends React.Component {
  static propTypes = {
    comic: React.PropTypes.object.isRequired,
    chapters: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  render() {
    return (
      <div>
        <h1>{this.props.comic.title}</h1>
        {this.props.chapters ? <ChapterList chapters={this.props.chapters} /> : null }
      </div>
    );
  }
}

export default ComicInfo;

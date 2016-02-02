import React from 'react';

import { Link } from 'react-router';
import { Table } from 'react-bootstrap';

class ComicInfo extends React.Component {
  static propTypes = {
    chapters: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  renderChapter(chapter) {
    return (
      <tr key={chapter.id}>
        <td>
          <Link to={`/comics/${chapter.comicId}/${chapter.id}`}>
            Ch.{chapter.number} - {chapter.title}
          </Link>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <Table>
        <tbody>
          {this.props.chapters.map(this.renderChapter)}
        </tbody>
      </Table>
    );
  }
}

export default ComicInfo;

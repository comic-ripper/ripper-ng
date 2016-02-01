import React from 'react';

import { Table } from 'react-bootstrap';

import { Link } from 'react-router';

import _ from 'lodash';

class ComicList extends React.Component {
  static propTypes = {
    comics: React.PropTypes.object,
  };

  renderComic(comic) {
    return (
      <tr key={comic.id}>
        <td><Link to={`comics/${comic.id}`} >{comic.title}</Link></td>
      </tr>
    );
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          { _.values(this.props.comics).map(this.renderComic) }
        </tbody>
      </Table>
    );
  }
}

export default ComicList;

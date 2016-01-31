import React from 'react';

import { Table } from 'react-bootstrap';

import _ from 'lodash';

class ComicList extends React.Component {
  static propTypes = {
    comics: React.PropTypes.object,
  };

  renderComic(comic) {
    return (
      <tr key={comic.id}>
        <td>{comic.id}</td>
        <td>{comic.title}</td>
      </tr>
    );
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
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

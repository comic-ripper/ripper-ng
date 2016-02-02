import React from 'react';

import { Table } from 'react-bootstrap';

import _ from 'lodash';
// import { Link } from 'react-router';

class ChapterReader extends React.Component {
  static propTypes = {
    chapter: React.PropTypes.object.isRequired,
    pages: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  };

  renderPage(page) {
    return (
      <tr key={page.id}>
        <td>{page.number} - {page.image.url}</td>
      </tr>
    );
  }

  render() {
    const pages = _.sortBy(this.props.pages, (p) => p.number);
    return (
      <Table>
        <thead>
          <tr>
            <th>Ch.{this.props.chapter.number} - {this.props.chapter.title}</th>
          </tr>
        </thead>
        <tbody>
          { pages.map(this.renderPage) }
        </tbody>
      </Table>
    );
  }
}

export default ChapterReader;

import React from 'react';

import _ from 'lodash';
import { Link } from 'react-router';

import 'react-image-gallery/build/image-gallery.css';

import ImageGallery from 'react-image-gallery';

class PageReader extends React.Component {
  static propTypes = {
    comic: React.PropTypes.object.isRequired,
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
    const pageGalleryItems = pages.map(function mapPageToGallery(page) {
      return {
        original: page.image.url,
      };
    });
    return (
      <div>
        <h3>
          <Link to={`/comics/${this.props.comic.id}`}>
            Ch.{this.props.chapter.number} - {this.props.chapter.title}
          </Link>
        </h3>
        <ImageGallery
          items={pageGalleryItems}
          showNav={false}
        />
      </div>
    );
  }
}

export default PageReader;

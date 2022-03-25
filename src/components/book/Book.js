import React from 'react';
import PropTypes from 'prop-types';
import BookProgress from './BookProgress';
import './Book.css';
import BookChapter from './BookChapter';

function Book({ ...props }) {
  const {
    author, title, category, progress, chapter,
  } = props;
  return (
    <div className="book_container">
      <div className="book_info">
        <div className="book_info_desc">
          <strong>{category}</strong>
          <h3>{title}</h3>
          <strong>{author}</strong>
        </div>
        <div className="book_crud">
          <button type="button">Comments</button>
          <button type="button" className="remove_btn">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <BookProgress progress={progress} />
      <BookChapter chapter={chapter} />
    </div>
  );
}

export default Book;
Book.propTypes = {
  chapter: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

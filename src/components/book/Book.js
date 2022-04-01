import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import BookProgress from './BookProgress';
import './Book.css';
import BookChapter from './BookChapter';
import { removeBook } from '../../redux/books/books';

function Book({ ...props }) {
  const {
    id, author, title, category, progress, chapter,
  } = props;
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(removeBook(id));
  };
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
          <button type="button" className="remove_btn" onClick={handelClick}>Remove</button>
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
  id: PropTypes.string.isRequired,
  chapter: PropTypes.string,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.string,
};
Book.defaultProps = {
  chapter: ' chapter 0',
  progress: '0',
};

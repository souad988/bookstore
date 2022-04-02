import React from 'react';
import PropTypes from 'prop-types';
import './BookChapter.css'

function BookChapter({ ...props }) {
  const { chapter } = props;
  return (
    <div className="bookChapter_container">
      <div>
      <h4 className='current_chapter'>Current Chapter</h4>
      <h5 className='chapter'>{chapter || 'chapter 0'}</h5>
      </div>
      <button type="button" className="blue_btn">Update Progress</button>
    </div>
  );
}

export default BookChapter;
BookChapter.propTypes = {
  chapter: PropTypes.string,
};
BookChapter.defaultProps = {
  chapter: ' chapter 0',
};

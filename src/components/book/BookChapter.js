import React from 'react';
import PropTypes from 'prop-types';

function BookChapter({ ...props }) {
  const { chapter } = props;
  return (
    <div className="bookChapter_container">
      <h4>Current Chapter</h4>
      <h5>{chapter}</h5>
      <button type="button" className="blue_btn">Update Progress</button>
    </div>
  );
}

export default BookChapter;
BookChapter.propTypes = {
  chapter: PropTypes.string,
};

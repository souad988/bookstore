import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './BookProgress.css';

function BookProgress({ ...props }) {
  const { progress } = props;
  return (
    <div className="bookProgress_container">
      <div style={{ width: 50, height: 50 }}>
        <CircularProgressbar value={progress} />
      </div>
      <div>
        <span>
          {progress}
          %
        </span>
        {' '}
        <br />
        <span>Completed</span>
      </div>
    </div>
  );
}

export default BookProgress;
BookProgress.propTypes = {
  progress: PropTypes.string.isRequired,
};

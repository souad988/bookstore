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
        <CircularProgressbar value={progress?progress:0} />
      </div>
      <div>
        <span>
          {progress?progress:0}
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
  progress: PropTypes.string,
};

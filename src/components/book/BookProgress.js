import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './BookProgress.css';

function BookProgress({ ...props }) {
  const { progress } = props;
  return (
    <div className="bookProgress_container">
      <div style={{ width: 60, height: 60 }}>
        <CircularProgressbar value={progress || 0} />
      </div>
      <div className='progress_info'>
        <span className='progress_percent'>
          {progress || 0}
          %
        </span>
        {' '}
        <br />
        <span className='progress_completed'>Completed</span>
      </div>
    </div>
  );
}

export default BookProgress;
BookProgress.propTypes = {
  progress: PropTypes.string,
};

BookProgress.defaultProps = {
  progress: '0',
};

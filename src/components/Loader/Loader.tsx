import React from 'react';
import { ProgressBar } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <ProgressBar
        visible={true}
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
      />
    </div>
  );
};

export default Loader;

import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div>
      <p className={styles.error}>{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;

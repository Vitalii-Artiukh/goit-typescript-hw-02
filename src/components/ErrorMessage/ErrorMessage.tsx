import React, { FC } from 'react';
import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
    <div>
      <p className={styles.error}>{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;

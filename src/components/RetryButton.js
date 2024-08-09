import React from 'react';
import styles from './RetryButton.module.css';

const RetryButton = ({ onClick }) => {
    return (
        <button className={styles.retryButton} onClick={onClick}>
            Retry
        </button>
    );
};

export default RetryButton;

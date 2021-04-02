import React from 'react';

import styles from './Notifications.module.css';

import { FaCheck } from 'react-icons/fa';
import { FaExclamation } from 'react-icons/fa';

import { useGlobalContext } from '../../context';

const Notifications = () => {
  const { notification } = useGlobalContext();
  const { type, message, isShowing } = notification;

  return (
    <div className={`${styles.container} ${isShowing ? styles.show : null}`}>
      <div
        className={`${styles.icon_container} ${
          type === 'error' ? styles.error : styles.success
        }`}
      >
        {type === 'error' ? (
          <span className={styles.icon}>
            <FaExclamation />
          </span>
        ) : (
          <span className={styles.icon}>
            <FaCheck />
          </span>
        )}
      </div>
      <div className={styles.message_container}>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default Notifications;

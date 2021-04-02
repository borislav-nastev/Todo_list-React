import React from 'react';
import styles from './SingleList.module.css';
import { useGlobalContext } from '../../../context';

const SingleList = ({ listName, id }) => {
  const { selectedListId, setSelectedListId } = useGlobalContext();

  return (
    <li
      className={
        selectedListId === id
          ? `${styles.list_item} ${styles.active_item}`
          : styles.list_item
      }
      onClick={() => setSelectedListId(id)}
    >
      {listName}
    </li>
  );
};

export default SingleList;

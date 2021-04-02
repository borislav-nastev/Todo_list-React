import React from 'react';
import styles from './SingleItem.module.css';

import { useGlobalContext } from '../../../context';

const SingleItem = ({ taskName, id, complete }) => {
  const { lists, setLists, selectedListId } = useGlobalContext();

  const handleChange = () => {
    const selectedListIndex = lists.findIndex(
      (list) => list.id === selectedListId
    );

    const newLists = [...lists];

    const selectedTaskIndex = newLists[selectedListIndex].tasks.findIndex(
      (task) => task.id === id
    );

    newLists[selectedListIndex].tasks[selectedTaskIndex] = {
      ...newLists[selectedListIndex].tasks[selectedTaskIndex],
      complete: !newLists[selectedListIndex].tasks[selectedTaskIndex].complete,
    };

    setLists(newLists);
  };

  return (
    <article>
      <div className={styles.todo_item}>
        <input
          type='checkbox'
          id={id}
          checked={complete}
          onChange={handleChange}
        />
        <label htmlFor={id}>
          <span className={styles.custom_checkbox}></span>
          {taskName}
        </label>
      </div>
    </article>
  );
};

export default SingleItem;

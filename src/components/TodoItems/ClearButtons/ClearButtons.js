import React from 'react';
import styles from './ClearButtons.module.css';

import { useGlobalContext } from '../../../context';

const ClearButtons = () => {
  const {
    lists,
    setLists,
    selectedListId,
    setSelectedListId,
    showNotification,
  } = useGlobalContext();

  const clearCompletedTasks = () => {
    const selectedListIndex = lists.findIndex(
      (list) => list.id === selectedListId
    );

    const newLists = [...lists];

    newLists[selectedListIndex].tasks = newLists[
      selectedListIndex
    ].tasks.filter((task) => !task.complete);

    setLists(newLists);
    showNotification('success', 'Successfully deleted tasks');
  };

  const deleteList = () => {
    const newLists = lists.filter((list) => list.id !== selectedListId);

    setLists(newLists);
    setSelectedListId('');
    showNotification('success', 'Successfully deleted a list');
  };

  return (
    <div className={styles.clear_buttons}>
      <button onClick={clearCompletedTasks}>Clear completed tasks</button>
      <button onClick={deleteList}>Delete list</button>
    </div>
  );
};

export default ClearButtons;

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './ItemsForm.module.css';

import { useGlobalContext } from '../../../context';

const ItemsForm = () => {
  const [newTaskName, setNewTaskName] = useState('');
  const {
    lists,
    setLists,
    selectedListId,
    showNotification,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTaskName) {
      showNotification('error', 'Please add item');
      console.log('Please add new item name');
      return;
    }

    const newTask = { taskName: newTaskName, id: uuidv4(), complete: false };

    const selectedListIndex = lists.findIndex(
      (list) => list.id === selectedListId
    );

    const newLists = [...lists];

    newLists[selectedListIndex].tasks = [
      ...newLists[selectedListIndex].tasks,
      newTask,
    ];

    setLists(newLists);
    showNotification('success', 'Successfully created item');
    setNewTaskName('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type='text'
        className={styles.item_input}
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder='Please add new item'
      />
      <button type='submit' className={`btn ${styles.item_btn}`}>
        +
      </button>
    </form>
  );
};

export default ItemsForm;

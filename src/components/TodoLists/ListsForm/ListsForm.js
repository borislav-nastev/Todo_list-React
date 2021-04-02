import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './ListsForm.module.css';

import { useGlobalContext } from '../../../context';

const ListsForm = () => {
  const [listName, setListName] = useState('');

  const { lists, setLists, showNotification } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!listName) {
      showNotification('error', 'Please add list name');
      console.log('Please add list name');
      return;
    }

    const newList = { listName, id: uuidv4(), tasks: [] };
    setLists([...lists, newList]);
    showNotification('success', 'Successfully created new list');
    setListName('');
  };

  return (
    <form className={styles.lists_form} onSubmit={handleSubmit}>
      <input
        type='text'
        className={styles.lists_form_input}
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder='Please add new list'
      />
      <button type='submit' className={`btn ${styles.lists_form_btn}`}>
        +
      </button>
    </form>
  );
};

export default ListsForm;

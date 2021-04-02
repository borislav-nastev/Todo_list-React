import React from 'react';
import styles from './TodoItems.module.css';

import SingleItem from './SingleItem/SingleItem';
import ItemsForm from './ItemsForm/ItemsForm';
import ClearButtons from './ClearButtons/ClearButtons';

import { useGlobalContext } from '../../context';

const TodoItems = () => {
  const { lists, selectedListId } = useGlobalContext();

  if (!selectedListId) {
    return null;
  }

  const selectedList = lists.find((list) => list.id === selectedListId);
  const { listName, tasks } = selectedList;

  const uncompletedTasks = tasks.filter((task) => !task.complete);

  return (
    <section className={styles.items_section}>
      <header className={styles.items_header}>
        <h2 className={styles.items_header_title}>{listName}</h2>
        <p className={styles.items_remaining}>
          {uncompletedTasks.length === 1
            ? '1 task remaining'
            : `${uncompletedTasks.length} tasks remaining`}
        </p>
      </header>

      <div className={styles.items_container}>
        {tasks.map((task) => (
          <SingleItem key={task.id} {...task} />
        ))}
      </div>

      <ItemsForm />
      <ClearButtons />
    </section>
  );
};

export default TodoItems;

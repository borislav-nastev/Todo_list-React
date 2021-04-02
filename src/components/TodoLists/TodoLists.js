import React from 'react';
import styles from './TodoLists.module.css';

import SingleList from './SingleList/SingleList';
import ListsForm from './ListsForm/ListsForm';

import { useGlobalContext } from '../../context';

const TodoLists = () => {
  const { lists } = useGlobalContext();

  return (
    <section className={styles.lists_section}>
      <h2 className={styles.section_title}>My Lists</h2>
      <ul className={styles.lists_container}>
        {lists.map((list) => (
          <SingleList key={list.id} {...list} />
        ))}
      </ul>
      <ListsForm />
    </section>
  );
};

export default TodoLists;

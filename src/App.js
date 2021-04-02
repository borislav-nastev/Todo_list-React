import React from 'react';
import './App.css';

import Notifications from './components/Notifications/Notifications';
import TodoLists from './components/TodoLists/TodoLists';
import TodoItems from './components/TodoItems/TodoItems';

function App() {
  return (
    <div className='container'>
      <header>
        <h1 className='title'>Stuff I Need To Do</h1>
      </header>
      <Notifications />
      <TodoLists />
      <TodoItems />
    </div>
  );
}

export default App;

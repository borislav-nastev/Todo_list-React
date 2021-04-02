import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const initialState = JSON.parse(localStorage.getItem('todoLists')) || [];
const initialId = localStorage.getItem('selectedListId') || '';
const initialNotification = {
  type: '',
  message: '',
  isShowing: false,
};

const AppProvider = ({ children }) => {
  const [lists, setLists] = useState(initialState);
  const [selectedListId, setSelectedListId] = useState(initialId);
  const [notification, setNotification] = useState(initialNotification);

  useEffect(() => {
    localStorage.setItem('todoLists', JSON.stringify(lists));
  }, [lists]);

  useEffect(() => {
    localStorage.setItem('selectedListId', selectedListId);
  }, [selectedListId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification(initialNotification);
    }, 1500);
    return () => clearTimeout(timer);
  }, [notification]);

  const showNotification = (type, message) => {
    setNotification({ type, message, isShowing: true });
  };

  return (
    <AppContext.Provider
      value={{
        lists,
        setLists,
        selectedListId,
        setSelectedListId,
        notification,
        showNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

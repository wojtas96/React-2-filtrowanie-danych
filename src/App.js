import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

// Przykładowe dane użytkowników
const initialUsers = [
  { id: 1, name: 'Klaudia', type: 'admin' },
  { id: 2, name: 'Jordan', type: 'user' },
  { id: 3, name: 'Łukasz', type: 'admin' },
  { id: 4, name: 'Ania', type: 'user' },
  { id: 5, name: 'Piotr', type: 'admin' },
  { id: 6, name: 'Kamila', type: 'user' },
  { id: 7, name: 'Michał', type: 'admin' },
  { id: 8, name: 'Joanna', type: 'user' },
  { id: 9, name: 'Krzysztof', type: 'admin' },
  { id: 10, name: 'Kamil', type: 'user' },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [filter, setFilter] = useState('all');

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

   /* Funkcja do filtrowania użytkowników - f. zwracająca przefiltrowaną listę użytkowników na podstawie 
  aktualnego filtra.*/
  const getFilteredUsers = () => {
    if (filter === 'admin') {
      return users.filter(user => user.type === 'admin');
    }
    if (filter === 'user') {
      return users.filter(user => user.type === 'user');
    }
    return users;
  };

  // Renderowanie listy po kliknięciu przycisków - metoda 'map' na 'filteredUsers' - wyświetlając nazwę i typ każdego użytkownika.
  const filteredUsers = getFilteredUsers();

  return (
    <div className="container">
      <h1>Dodaj Użytkownika</h1>
      <UserForm addUser={addUser} />
      
      <h2>Lista Użytkowników</h2>
      <div>
        <button onClick={() => handleFilterChange('admin')}>Wyświetl tylko adminów</button>
        <button onClick={() => handleFilterChange('user')}>Wyświetl tylko userów</button>
        <button onClick={() => handleFilterChange('all')}>Wyświetl wszystkich</button>
      </div>
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;

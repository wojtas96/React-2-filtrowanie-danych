import React, { useState } from 'react';
import "./App.js";
import "./UsersList.css";
import "./UsersList.js";

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

// Tworzenie komponentu 'UserList'
const UserList = () => {
  const [filter, setFilter] = useState('all');

  // Funkcja zmieniająca aktualny filtr na nowy
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  /* Funkcja do filtrowania użytkowników - f. zwracająca przefiltrowaną listę użytkowników na podstawie 
  aktualnego filtra.*/
  const getFilteredUsers = () => {
    if (filter === 'admin') {
      return initialUsers.filter(user => user.type === 'admin');
    }
    if (filter === 'user') {
      return initialUsers.filter(user => user.type === 'user');
    }
    return initialUsers;
  };

  // Renderowanie listy po kliknięciu przycisków - metoda 'map' na 'filteredUsers' - wyświetlając nazwę i typ każdego użytkownika.
  const filteredUsers = getFilteredUsers();

  return (
    <div>
      <div>
        <button onClick={() => handleFilterChange('admin')}>Wyświetl tylko adminów</button>
        <button onClick={() => handleFilterChange('user')}>Wyświetl tylko userów</button>
        <button onClick={() => handleFilterChange('all')}>Wyświetl wszystkich</button>
      </div>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name} ({user.type})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

import React, { useState } from 'react';
import './UserList.js';

function UserForm({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email, type });
    setName('');
    setEmail('');
    setType('user');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Imię:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Typ:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      <button type="submit">Dodaj</button>
    </form>
  );
}

export default UserForm;

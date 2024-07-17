function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} ({user.type})</li>
      ))}
    </ul>
  );
};

export default UserList;


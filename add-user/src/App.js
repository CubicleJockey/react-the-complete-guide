import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (username, age) => {
      setUsers((prevUsers) => {
        return [...prevUsers, {username: username, age: age, id: (Math.random() * 100)}];
      });
  };

  return (
    <main>
      <AddUser onAddUser={onAddUser}/>
      <UserList users={users}/>
    </main>
  );
}

export default App;

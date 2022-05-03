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

  //This is a Fragment. <> </> works the same was as the Wrapper.js we created.
  return (
    <> 
      <AddUser onAddUser={onAddUser}/>
      <UserList users={users}/>
    </>
  );
}

export default App;

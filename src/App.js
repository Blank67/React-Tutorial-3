import React, { Fragment, useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';


function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName,userAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList,{name: userName, age: userAge, key: Math.floor(Math.random()*100).toString()}];
    });
  };

  return (
    <Fragment>
      <AddUser onAdd={addUserHandler}/>
      <UserList users={userList}/>
    </Fragment>
  );
}

export default App;

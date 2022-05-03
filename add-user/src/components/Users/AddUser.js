import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(`Username: [${username}], Age: [${age}]`);
    };

    const usernameChangeHandler = (event) => setUsername(event.target.value);
    const ageChangeHandler = (event) => setAge(event.target.value);

    const onButtonClickHandler = (event) => {};

    return (
        <Card>
            <form onSubmit={addUserHandler} className={styles.input}>
                <label for="username">User Name: </label>
                <input id="username" type="text" value={username} onChange={usernameChangeHandler} /> 
                <label for="age">Age: </label>
                <input id="age" type="number" value={age} onChange={ageChangeHandler} />
                <Button onClick={onButtonClickHandler} type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
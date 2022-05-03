import { useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';


const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        
        if(username.trim().length === 0 || age.trim().length === 0){
            setError({
                 title: 'Invalid input'
                ,message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        
        if(+age < 1) { 
            setError({
                 title: 'Invalid age'
                ,message: 'Please enter a valid age (> 0).'
            });    
            return; 
        }

        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    };

    const onConfirmHandler = () => setError(null);

    const usernameChangeHandler = (event) => setUsername(event.target.value);
    const ageChangeHandler = (event) => setAge(event.target.value);

    return (
        <Wrapper>
            { error && <ErrorModal title={error.title} message={error.message} onConfirmClick={onConfirmHandler}/> }
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username-input">User Name: </label>
                    <input id="username-input" type="text" value={username} onChange={usernameChangeHandler} /> 
                    <label htmlFor="age-input">Age: </label>
                    <input id="age-input" min="0" max="120" type="number" value={age} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
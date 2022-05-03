import { useState, useRef } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';


//Ref is great for just reading a value when state is not important.
const AddUser = props => {
    const usernameRef = useRef();
    const ageRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        
        const username = usernameRef.current.value;
        const age = ageRef.current.value;

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

        //NOTE: In general you should let React do the heavy dom lifting and not manipulate
        // DOM nodes but here just so show we can.

        usernameRef.current.value = null;
        ageRef.current.value = null;
    };

    const onConfirmHandler = () => setError(null);
    return (
        <Wrapper>
            { error && <ErrorModal title={error.title} message={error.message} onConfirmClick={onConfirmHandler}/> }
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username-input">User Name: </label>
                    <input id="username-input" 
                           type="text" 
                           ref={usernameRef}
                           /> 
                    <label htmlFor="age-input">Age: </label>
                    <input id="age-input" 
                           min="0" 
                           max="120" 
                           type="number"
                           ref={ageRef}
                           />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
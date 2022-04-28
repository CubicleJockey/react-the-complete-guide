import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length === 0){
      setIsValid(false); return;
    }

    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label id="course-goal-label" style={{color: isValid ? 'black' : 'red'}}>Course Goal</label>
        <input aria-labelledby='course-goal-label' 
               type="text" 
               onChange={goalInputChangeHandler} 
               style={
                 {
                  borderColor: isValid ? '#CCCCCC' : 'red',
                  background: isValid ? 'transparent' : 'salmon'
                 }
                }
                value={enteredValue} 
               />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

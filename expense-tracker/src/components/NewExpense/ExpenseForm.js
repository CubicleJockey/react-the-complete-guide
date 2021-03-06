import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [inputTitle, setTitle] = useState('');
    const [inputAmount, setAmount] = useState('');
    const [inputDate, setDate] = useState('');
    const [showForm, setShowForm] = useState(false);

    //Use an inline object model
    // const[inputs, setInputs] = useState({
    //      title: ''
    //     ,amount: ''
    //     ,date: ''
    // });

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setInputs({
        //     ...inputs,
        //     title: event.target.value
        // });

        //NOTE: React schedules changes, previous model could
        // cause the function to retrieve an outdated state.
        // setInputs((previousState) => {
        //     return {...previousState, title: event.target.value };
        // });
    };
    const amountChangedHandler = (event) => {
        setAmount(event.target.value);
        // setInputs((previousState) => {
        //     return { ...previousState, amount: event.target.value };
        // });
    };

    const dateChangedHandler = (event) => {
        setDate(event.target.value);
        // setInputs((previousState) => {
        //     return { ...previousState, date: event.target.value };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault(); //prevent default page reload

        const expense = {
            title: inputTitle,
            amount: +inputAmount, //NOTE: Plus makes it a number
            date: new Date(inputDate)
        };

        props.onAddNewExpense(expense);

        //NOTE: after two-way binding is enabled with value={/*state object*/}
        setTitle('');
        setAmount('');
        setDate('');
    };

    const onAddNewExpenseHandler = () =>{
        setShowForm(true);
    };

    const onCancelHandler = () => {
        setShowForm(false);
    }

    if(!showForm){
        return(
            <div className='new-expense__showform__actions'>
                <button onClick={onAddNewExpenseHandler} type='button'>Add New Expense</button>
            </div>
        );
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label id='title-label'>Title:</label>
                    <input type='text' 
                           aria-labelledby='title-label' 
                           onChange={titleChangeHandler} 
                           value={inputTitle}
                           />
                </div>
                <div className='new-expense__control'>
                    <label id='amount-label'>Amount:</label>
                    <input type='number' 
                           min='0.01' 
                           step='0.01' 
                           aria-labelledby='amount-label' 
                           onChange={amountChangedHandler} 
                           value={inputAmount}
                           />
                </div>
                <div className='new-expense__control'>
                    <label id='date-label'>Date:</label>
                    <input type='date' 
                           min='2019-01-01' 
                           max='2022-12-31' 
                           aria-labelledby='date-label' 
                           onChange={dateChangedHandler} 
                           value={inputDate}
                           />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={onCancelHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
import './ExpenseForm.css'

import { useState } from 'react';

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountChangedHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangedHandler = (event) => {
        setDate(event.target.value);
    };

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label id="title-label">Title:</label>
                    <input type="text" aria-labelledby='title-label' onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label id="amount-label">Amount:</label>
                    <input type="number" min="0.01" step="0.01" aria-labelledby='amount-label' onChange={amountChangedHandler}/>
                </div>
                <div className="new-expense__control">
                    <label id="date-label">Date:</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" aria-labelledby='date-label' onChange={dateChangedHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
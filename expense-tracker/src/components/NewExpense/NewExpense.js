import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import {v4 as Guid } from 'uuid';

const NewExpense = (props) => {
    const addExpenseHandler = (newExpense) => {
        const data = {
            ...newExpense,
            id: Guid()
        };

        //console.log(data);
        props.onAddExpense(data);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onAddNewExpense={addExpenseHandler} />
        </div>
    );
};

export default NewExpense;
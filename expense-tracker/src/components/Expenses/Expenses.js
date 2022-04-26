import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import {v4 as Guid } from 'uuid';

const Expenses = (props) => {
    return (
        <div className="expenses">
            {
            props.items.map(e => {
                return <ExpenseItem key={Guid()} title={e.title} amount={e.amount} date={e.date}/>
            })
            }
        </div>
    );
}

export default Expenses;
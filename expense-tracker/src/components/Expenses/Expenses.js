import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import {v4 as Guid } from 'uuid';

const Expenses = (props) => {
    const items = [];
    if(props){
        const expenses = props.items;
        for(let i in expenses){
            items.push(<ExpenseItem key={Guid()} title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date}/>);
        }
    }
    return (
        <div className="expenses">
            {items}
        </div>
    );
}

export default Expenses;
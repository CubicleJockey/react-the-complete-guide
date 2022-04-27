import './ExpenseItems.css';
import ExpenseItem from './ExpenseItem';

const ExpenseItems = (props) => {
    if(props.items.length === 0) { 
        return (<h2 className="expenses-list__fallback">No Expenses Found.</h2>); 
    }
    return (
        <ul className="expenses-list">
            {
                props.items.map(
                    e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}/>
                )
            }
        </ul>
    );
}

export default ExpenseItems;
import ExpenseItem from './ExpenseItem';

function Expenses(props){
    const items = [];
    if(props){
        const expenses = props.items;
        for(let i in expenses){
            items.push(<ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date}/>);
        }
    }
    return (
        <div className="expenses">
            {items}
        </div>
    );
}

export default Expenses;
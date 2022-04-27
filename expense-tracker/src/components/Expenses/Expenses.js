import { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import NoExpenseItems from './NoExpenseItems';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const expenses = props.items;

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const displayExpenses = () => {
        const filtered = 
            expenses.filter(e => e.date.getFullYear().toString() === filteredYear)
                    .map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}/>);
        
        if(filtered.length > 0) { return filtered; }
        else { return <NoExpenseItems />; }
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
            { displayExpenses() }
        </Card>
    );
}

export default Expenses;
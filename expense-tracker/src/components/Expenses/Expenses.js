import { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const expenses = props.items;

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
            { 
                expenses.filter(e => e.date.getFullYear() == filteredYear)
                        .map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}/>) 
            }
        </Card>
    );
}

export default Expenses;
import { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import {v4 as Guid } from 'uuid';
import Card from '../UI/Card';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(2020);
    
    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log('Expenses.js');
        console.log(`Selected Year: [${selectedYear}]`);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
            { props.items.map(e => <ExpenseItem key={Guid()} title={e.title} amount={e.amount} date={e.date}/>) }
        </Card>
    );
}

export default Expenses;
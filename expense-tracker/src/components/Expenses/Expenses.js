import { useState } from 'react';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
import ExpensesChart
 from './ExpensesChart';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const expenses = props.items.filter(e => e.date.getFullYear().toString() === filteredYear);

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    // {ternary condition allowed in curly braces}
    // NOTE: JavaScript trick. Right side only happens if left is true 
    //       filtered.length === 0 && <p>Some Message</p>
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
            <ExpensesChart expenses={expenses} />
            <ExpenseItems items={expenses} />
        </Card>
    );
}

export default Expenses;
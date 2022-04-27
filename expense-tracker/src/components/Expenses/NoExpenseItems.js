import './ExpenseItem.css';
import Card from '../UI/Card';

const NoExpenseItems = () => {
    return(
        <Card className="expense-item">
             <div className="expense-item__description">
                No Expense Items Found!
             </div>
        </Card>
    );
};

export default NoExpenseItems;
import './ExpenseItem.css';
import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card';

//Stateless component as it does not manage any state.
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} key={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const availableYears = [2022, 2021, 2020, 2019];

  const onChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label id="year-filter-label">Filter by year</label>
        <select aria-labelledby='year-filter-label' value={props.selected} onChange={onChangeHandler}> 
          {availableYears.map(year => <option value={year}>{year}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
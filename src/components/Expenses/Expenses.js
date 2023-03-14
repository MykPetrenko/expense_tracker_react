import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from "react";
import ExpensesList from './ExpensesList'
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [currentFilterYear, setCurrentFilterYear] = useState('2019');
  const filteredExpenses = props.items.filter(item=>item.date.getFullYear() == currentFilterYear);

  const receiveFilter = filterYear =>{
    setCurrentFilterYear(filterYear);
  }
  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={currentFilterYear} onReceiveFilter={receiveFilter}
         expenses={props.items}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;

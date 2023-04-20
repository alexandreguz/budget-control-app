import './App.css';
import AddExpenses from './Components/AddExpenses'
import Dashboard from "./Components/Dashboard";
import ExpensesSumary from "./Components//ExpensesSummary";
import Sidebar from './Components/Sidebar'
import Income from './Components/Income'
import { Routes, Route} from "react-router-dom";

const App = () => {


  const showExpenses = (enteredExpenseData) => {
    const expenseData ={
      ...enteredExpenseData,
    }
    console.log(expenseData)
  }

  return (
    <>
    <div className="App">
        <div>
          <Sidebar/>
        </div>
    </div>

      <Routes>
          <Route path="expenses" element={<AddExpenses addExpense={showExpenses}/>} />
          <Route path="dashboard" element={<Dashboard  />}/>
          <Route path="expenses-summary" element={<ExpensesSumary />} />
          <Route path="/" element={<AddExpenses />} />
          <Route path="income" element={<Income/>} />
      </Routes>
    </>
  );
}

export default  App

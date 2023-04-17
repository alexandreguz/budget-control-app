import './App.css';
import Expenses from './Components/Expenses'
import Dashboard from "./Components/Dashboard";
import ExpensesSumary from "./Components//ExpensesSummary";
import Sidebar from './Components/Sidebar'
import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
  return (
    <>
    <div className="App">
        <div>
          <Sidebar/>
        </div>
    </div>

      <Routes>
          <Route path="expenses" element={<Expenses/>} />
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="expenses-summary" element={<ExpensesSumary />} />
          <Route path="/" element={<Expenses/>} />
      </Routes>
    </>
  );
}

export default App;

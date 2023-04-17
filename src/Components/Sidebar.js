// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import ExpensesSumary from "./ExpensesSummary";
import Expenses from "./Expenses";

const Sidebar = ({expenses}) => {
    // const total = expenses.reduce((acc, expense) => acc + expense.preco * expense.quantidade, 0)

return (
    <div class="sidenav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="expenses">Expenses</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/expenses-summary">Summary</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
      </div>
  );
    
}

export default Sidebar
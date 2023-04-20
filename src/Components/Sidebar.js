// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Outlet, Link } from "react-router-dom";

const Sidebar = ({expenses}) => {
    // const total = expenses.reduce((acc, expense) => acc + expense.preco * expense.quantidade, 0)

return (
    <div class="sidenav">
      <nav>
        <ul>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="expenses">Add Expenses</Link>
          </li>
          <li>
            <Link to="/income">Add income</Link>
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

////////

// import React from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import AddExpenses from "./AddExpenses";
// import ExpensesSummary from "./ExpensesSummary";

// const Sidebar = ({ expenses, addExpense }) => {
// //   const total = expenses.reduce((acc, expense) => acc + expense.preco * expense.quantidade, 0)

// return (
//     // <Router>
//       <div style={{ display: "flex" }}>
//         <div style={{ padding: "10px", width: "20%" }}>
//           <ul style={{ listStyleType: "none", padding: 0 }}>
//             <li>
//               <Link to="/">Adicionar Despesas</Link>
//             </li>
//             <li>
//               <Link to="/show">Demonstrativo de Despesas</Link>
//             </li>
//           </ul>
//         </div>

//         <div style={{ flex: 1, padding: "10px" }}>
//           <Routes>
// //           <Route path="expenses" element={<AddExpenses addExpense={addExpense}/>} />

//             {/* <Route exact path="/">
//               <AddExpenses addExpense={addExpense} /> */}
//             {/* </Route> */}
//             <Route path="/show">
//               <ExpensesSummary expenses={expenses} />
//             </Route>
//           </Routes>
//         </div>
//       </div>
//     // </Router>
//   );
// };

// export default Sidebar;

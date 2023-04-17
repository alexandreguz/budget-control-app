import React, { useState } from 'react';

const Expenses = () => {
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [date, setDate] = useState('');

  const addExpense = () => {
    const newExpense = {
      category: category,
      product: product,
      price: price,
      quantity: quantity,
      date: date
    };
    setExpenses([...expenses, newExpense]);
    setCategory('');
    setProduct('');
    setPrice(null);
    setQuantity(null);
    setDate("")
  };

  return (
    <div className='expenseForm'>
      <h1> Expense Control</h1>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=""></option>
          <option value="Alimentação">Alimentação</option>
          <option value="Transporte">Transporte</option>
          <option value="Supermarket">Supermarket</option>
          <option value="Lazer">Lazer</option>
        </select>
      </div>
      <div>
        <label htmlFor="product">Product:</label>
        <input
          id="product"
          type="text"
          value={product}
          onChange={(event) => setProduct(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(event) => setPrice(Number(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
      </div>
      <div>
        <input
        type="date"
        onChange={(event) => setDate(event.target.value)}
        />
      </div>
     
      <button onClick={addExpense}>Add Expense</button>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.category} - {expense.product} - R$ {expense.price} - {expense.quantity} unidades - Selected Date: {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;

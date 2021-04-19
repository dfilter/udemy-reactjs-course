import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      date: new Date(2021, 2, 28),
      title: "Car Insurance",
      amount: 294.0,
    },
    {
      id: "e2",
      date: new Date(2021, 1, 2),
      title: "Mouse",
      amount: 23.0,
    },
    {
      id: "e3",
      date: new Date(2021, 2, 8),
      title: "Udemy Course",
      amount: 12.0,
    },
    {
      id: "e4",
      date: new Date(2021, 3, 12),
      title: "New Desk",
      amount: 450.0,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense)
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

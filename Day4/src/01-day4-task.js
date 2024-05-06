import Expenses from "./data/Expenses.js";

console.log("Expenses", Expenses);
const category = [
  "Food",
  "Travel",
  "EMI",
  "Bills",
  "Medical Expense",
  "Grocery",
];

const findExpenseById = (id) => {
  const expense = Expenses.find((expense) => expense.id === id);
  return expense ? { expense, totalExpense: expense.amount } : null;
};

const findExpenseByCategory = (category) => {
  const result = { expenses: [], totalExpense: 0 };

  result.expenses = Expenses.filter((expense) => {
    return expense.category === category;
  });

  result.totalExpense = result.expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  return result;
};

const updateExpenseById = (id, updateObject) => {
  const index = Expenses.findIndex((expense) => expense.id === id);

  if (index !== -1) {
    const updatedExpense = { ...Expenses[index] };

    for (let key in updateObject) {
      if (key !== "id" && updateObject.hasOwnProperty(key)) {
        updatedExpense[key] = updateObject[key];
      }
    }

    Expenses[index] = updatedExpense;
    return Expenses[index];
  } else {
    return null;
  }
};

const deleteExpenseById = (id) => {
  const index = Expenses.findIndex((expense) => expense.id === id);

  if (index !== -1) {
    Expenses.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

console.log("Find by ID Output:", findExpenseById(10)); // Find by expense id
console.log("Category Output:", findExpenseByCategory("Food")); // Find by category
console.log("Update Output:", updateExpenseById(10, { amount: 200 })); // Update by expense id
console.log("Delete Output:", deleteExpenseById(5)); // Delete by expense id
function Expense(amount, description, category, modeOfPayment, date){
  this.id = generateExpenseId();
  this.amount = amount;
  this.description = description;
  this.category = category;
  this.modeOfPayment = modeOfPayment;
  this.date = date;
}

function generateExpenseId() {
  const uniqueId = Math.random().toString(36).substring(2, 8); 
  const expenseId = "Expense-" + uniqueId;
  return expenseId;
}

const e1 = new Expense(1000, "from station to college", "Travel", "cash", "03/05/2024");
console.log(e1);
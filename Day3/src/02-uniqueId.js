import { faker } from 'https://esm.sh/@faker-js/faker';

const generateUniqueId = (config = {}) => {
  const { prefix } = config;
  if (prefix) {
    return prefix + "-" + Math.random().toString(36).substring(2);
  }
  return Math.random().toString(36).substring(2);
};

const generateRandomExpenses = (numExpenses) => {
  const expenses = [];

  for (let i = 0; i < numExpenses; i++) {
    const expense = {
      id: generateUniqueId({ prefix: "exp" }),
      category: faker.helpers.arrayElement(["Food","Travel","EMI","Bills","Medical Expense","Grocery",]),
      description: faker.lorem.sentence(),
      amount: faker.finance.amount()
    };
    expenses.push(expense);
  }

  return expenses;
};

//Usage:
const numExpenses = 20;
const randomExpenses = generateRandomExpenses(numExpenses);
console.log(randomExpenses);
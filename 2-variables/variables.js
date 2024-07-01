const accountID = 2738223;
let accountEmail = "example332k@gmail.com";
let accountPassword = "jaipur4723";
let accountCity = "city";
let accountState;
accountState = 2;

console.log(accountID);
// prefer not to use var because of issues in block scope and functional scope
// Correct usage of console.table
console.table({
  accountID: accountID,
  accountEmail: accountEmail,
  accountPassword: accountPassword,
  accountCity: accountCity,
  accountState: accountState
});

// side work

const number = 3
let number2 = 5

console.log(number + number2)

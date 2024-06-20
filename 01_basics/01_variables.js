
const accountId=12132
let accountEmail="dhr@gmail.com"
var accountPassword="we2432"
accountCity="Jaipur"

// accountId=2 //not allowed as it is of const (variable) type

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountEmail);
console.table([accountEmail,accountId,accountPassword,accountCity]);

/* 
Lecture  # 1:
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])

*/
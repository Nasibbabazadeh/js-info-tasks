// Javascript.info* Task=> Topics : Comprasions;Basic operators, maths; Data Types and Variables

// Comparisons Tasks
/*
Task 1:
5 > 4 ==> true
"apple" > "pineapple" ==> false
"2" > "12" ==>  true
undefined == null => true (sweet couple)
undefined === null => false (strict equality)
null == "\n0\n" => false
null === +"\n0\n" => false
*/

//Basic operators, maths

/*
Task 1: What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a; // ? ==> 2
let d = b++; // ? ==> 1

*/
// Answer : a ==> 2 b ==> 2 c ==>2 d ==> 1

/*
Task 2: What are the values of a and x after the code below?
let a = 2;
let x = 1 + (a *= 2);
x ==> 5
a ==> 4
*/

/*
Task 3: What are results of these expressions?
"" + 1 + 0  ==> 10
"" - 1 + 0 ==> -1
true + false ==> 1
6 / "3" ==> 2
"2" * "3" ==> 6
4 + 5 + "px" ==> 9px
"$" + 4 + 5 ==> $45
"4" - 2 ==> 2
"4px" - 2 ==> NaN
"  -9  " + 5 ==> -95 (string)
"  -9  " - 5 ==> -14(number)
null + 1 ==> 1
undefined + 1 ==> NaN
" \t \n" - 2  ==> -2
*/

/*
Task 4: 
Here’s a code that asks the user for two numbers and shows their sum.
It works incorrectly. The output in the example below is 12 (for default prompt values).
Why? Fix it. The result should be 3.
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12
*/
//Answer:
let a = +prompt('First number?', 1)
let b = +prompt('Second number?', 2)

// Data Types
/*
Task 1: What is the output of the script?
let name = "Ilya";
alert( `hello ${1}` ); // ? ==> hello 1
alert( `hello ${"name"}` ); // ? ==> hello name
alert( `hello ${name}` ); // ? ==> hello Ilya
*/

// Variables

/*
Task 1: Working with variables
    Declare two variables: admin and name.
    Assign the value "John" to name.
    Copy the value from name to admin.
    Show the value of admin using alert (must output “John”).
*/
// Answer:
let admin
let name
name = 'John'
admin = name
console.log(admin) //"John"

/*
Task 2: Giving the right name
    Create a variable with the name of our planet. How would you name such a variable?
    Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/
// Answer:
const ourPlanetName = 'Earth'
let currentUserName = 'John'
/*
Task 3: Examine the following code:
    const birthday = '18.04.1982';
    const age = someCode(birthday);
    Here we have a constant birthday for the date, and also the age constant.
    The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.
    Would it be right to use upper case for birthday? For age? Or even for both?
    const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
    const AGE = someCode(BIRTHDAY); // make age uppercase?
*/

//Answer ==> birthday constant olduğu üçün uppercase yazmaq olar amma age dəyişkəndir və funksiyanın resultına uyğun olaraq dəyişə bildiyi üçün lowercase yazmaq daha məntiqlidir.

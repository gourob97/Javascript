let message="hello";
alert(message);
message = 12345;
alert(message);


// a variable in js can contain any type of data, that's why js is called dynamically typed language

// 7 basic data types


//--------Number--------

let number = 123;
number = 12.345;


//special numeric values are  i) Infinity  ii) - Infinty iii) NaN(not a number)


alert(1/0);

alert("gourob"/2); //compurtational error


//mathematical operations are safe in JS. They will not die, if there is any computatipnal error, instead it will produce i,ii or iii and will go on.



// --------String ----------



let str= "Hello";
let str2= 'Single quotes are ok too! ';
let phrase =` can embed variable ${str}`

alert(str);
alert(str2);
alert(phrase);

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}


let name='Gourob'

alert(`Hello, ${name}`);

alert(`The sum of 1 and 2 is ${1+2}`); // only backticks (` `)can do this



// *** no character type in JS



//---------Boolean--------


let nameFieldChecked = true;
let ageFieldChecked = false;


let isGreater = 4>1;
alert(isGreater);


//----------NULL--------------
let age = null;


/*In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

The code above states that age is unknown or empty for some reason.*/




// ----------------- Undefined ----------------

let x;
alert(x);



//------------------Object and Symbol ---------------

//will be  studied later. 


alert( typeof undefined ); 
typeof 0;
typeof true;
typeof "foo";
typeof Symbol("id");
typeof Math;
typeof null;
typeof alert;
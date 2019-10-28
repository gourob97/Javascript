
// string conversion

// let value = undefined;
// alert(typeof(value));

// value = String(value);
// alert(typeof(value));



//numeric conversion

// alert("6"/2);

// let str="124";
// alert(typeof str);

// let num= Number(str);
// alert(typeof num);


// let age = Number(null);
// alert(age);


//numeric conversion rule


/*Value	         Become
  -----          ------
undefined	      NaN
null	           0
true and false	   1 and 0
*/


// alert(Number("   123     "));
// alert(Number("123z"));
// alert(Number(true));
// alert(Number(false));


// alert(1+'2'); 
// alert('1'+2);


// ---------- Boolean conversion ----------------


// alert(Boolean(1));  //true
// alert(Boolean(0));   //false
// alert(Boolean("hello"));   // true
// alert(Boolean(""));  //flase



// alert(""+1+2);  //12
// alert(""-1+0);  //-1
// alert(true+false);  //1
// alert(6/"3"); // 2


// alert("2"* "3"); //6
// alert(4+5+"px") ;//9px
// alert("$"+4+5); //$45



// alert("4"-2) ; //2
// alert("4px"- 2); //NaN
// alert(7/0); //infinity


// alert("          -9      "+5); //    -9      5
// alert("    -9    "-5) //    -14
// alert(null + 1); //1


alert(undefined +1 ); //NaN
alert(" \t \n "-2); //-2;
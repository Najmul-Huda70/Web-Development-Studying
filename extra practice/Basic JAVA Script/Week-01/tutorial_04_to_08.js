 // string concatenating
var firstName = "Najmul";
var lastName = " Huda <br>";

document.write(firstName + lastName);
//string length
document.write("string length (Najmul): ");
document.write(firstName.length);

document.write("<br>");
// integer 
var num1 = 21;
var num2 = 30;

// integer sum
document.write("<br> num1 + num2 = ");
document.write(num1 + num2);

// integer substruction
document.write("<br> num1 - num2 = ");
document.write(num1 - num2);

// integer division
document.write("<br> num1 / num2 = ");
document.write(num1 / num2);

// integer multiplication
document.write("<br> num1 * num2 = ");
document.write(num1 * num2);

// string input newa
// var name = prompt("Enter Your Name : ");
// document.write("<br>");
// document.write("<br>Name : " + name);

// integer input newa
// var n = prompt("Enter your Roll : ");
// document.write("<br> Roll : " + n);
document.write("<br> <br>");

//string index output 
var str = "Bangladesh";
document.write(str.charAt(2));

document.write("<br> <br>");

//string upperCase / lowerCase
document.write(str.toUpperCase());

document.write("<br> <br>");

document.write(str.toLowerCase());

//string concat()
var str1 = "Bangladesh";
var str2 = " is my country";
document.write("<br>" + str1.concat(str2));

var text1 = "Bangladesh";
var text = text1.slice(2,5);
document.write("<br>" + text);
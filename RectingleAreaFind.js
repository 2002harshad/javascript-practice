var prompt = require('prompt-sync')();
var rectangel = prompt('Enter The Lenght Rectingle : ');
var squre = prompt ("Enter the Area Of Qqure : ");

rectangel =  Number(rectangel);
squre = Number(squre);

var TotalArea = rectangel * squre;

console.log("Total Area of Squre : "+TotalArea);

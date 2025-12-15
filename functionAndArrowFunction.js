//(1)simple function example 

// function add(a,b)
// {
//     return a+b;
// }
// var sum = add(5,10);
// console.log("Addition is : "+ sum);


//(2) Function exmple
// var add = function(x,y)
// {
//     return x+y;
// }
//  var sum = add(50,50);
//  console.log("addition is :",sum);

//(3)Arrow Function Example
// var add = (a,b)=>{return a*b}
// var mul = add(4,4); 
// console.log("Multiplication is  : ",mul);

//(4) single line Arrow Function 
// var sum = (x,y)=>x/y    //single line Arrow Function no cully brecket need {}
// let tot = sum(15,100);
// console.log("Division by is  : ",tot)

//(5) ek aevu function  
// (function()     //name()  aa ek function che 
// {
//     console.log("Rajesh.");
// })()  //() -> aa ruound bracket che  tej function name ne call kare che

//(6)Call back function (main function ni under another function)
function first(callback)
{
    callback();
};

 function second()
 {
    console.log(" second main function");
 };

first(second);


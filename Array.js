 var NameList = ['raj','pooja','ram','shyam','rahual'];

var prompt = require('prompt-sync')();
var guestName = prompt('Welcome... What is you Name : ');//.toLowerCase();

if(NameList.includes(guestName))
{
    console.log('Welcome to My Pirty '+guestName);
}
else
{
    console.log('You Are Not Welcome..In My Pirty. '+guestName + " by by..");
}
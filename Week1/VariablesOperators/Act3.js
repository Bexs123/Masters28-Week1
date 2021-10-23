// Activity 3

// Create a program that calculates the number of days from today to your birthday


today=new Date();

var bday=new Date(today.getFullYear(), 9, 25);

if (today.getMonth()==9 && today.getDate()>25) 
{
     bday.setFullYear(bday.getFullYear()+1); 
}  

var one_day=1000*60*60*24;

console.log(Math.ceil((bday.getTime()-today.getTime())/(one_day))+
"days left until Birthday!");
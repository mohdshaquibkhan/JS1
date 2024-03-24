 //   Dates

 let myDates =new Date()
 console.log(myDates.toString());
 console.log(myDates.toLocaleDateString());
 console.log(myDates.toDateString());
 console.log(typeof myDates); 

 let myCreatedDate = new Date(2024, 0, 23, )
 console.log(myCreatedDate.toDateString());

 let myCreatedDateOne = new Date(2024, 0, 23, 5,3)
 console.log(myCreatedDateOne.toLocaleString());

 let myCreatedDateTwo = new Date("2024-11-01")
 console.log(myCreatedDateTwo.toLocaleString());


 let myTimeStamp = Date.now()
 console.log(myTimeStamp);
 console.log(myCreatedDateTwo.getTime());
 console.log(Math.floor(Date.now()/1000));   


 let newDate1 = new Date()
 console.log(newDate1);
    console.log(newDate1.getMonth());
    console.log(newDate1.getDay()); 
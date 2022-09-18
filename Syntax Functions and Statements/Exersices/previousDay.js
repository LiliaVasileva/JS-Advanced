function previousDay (year, month, day) {
    let myDate = new Date(year,month -1, day-1);
    console.log(`${myDate.getFullYear()}-${myDate.getMonth() +1}-${myDate.getDate()}`);
}

previousDay(2016, 9, 30)

// let currentDate  = new Date(2016,9,1);
// console.log(currentDate)
//  console.log (currentDate.getFullYear())
//  console.log (currentDate.getMonth()) // months in JS starts from 0, 8 month is actually september
//  console.log(currentDate.getDate())
//  console.log(currentDate.getDay())
// myDate.setDate(myDate.getDate()-1)
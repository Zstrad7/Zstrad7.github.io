var d = new Date();

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];
var month = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("currentdate").innerHTML = weekday[d.getDay()] + "," + d.getDate() + " " + month[d.getMonth()] + " " + d.getUTCFullYear();
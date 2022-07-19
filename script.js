var days = document.getElementById("days");
var today = new Date();
var xmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth()==11 && today.getDate()>25){
    xmas.setFullYear(xmas.getFullYear()+1); 
  }  
var one_day = 1000*60*60*24;
var days_left = Math.ceil((xmas.getTime() - today.getTime()) / (one_day));
var dayleft = "day";

if (days_left > 1){
    dayleft = "days"
}

days.innerHTML = '<p>Christmas In '+days_left+' '+dayleft+'</p>';
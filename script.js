function showTime() {
    var date = new Date();
    var hr = date.getHours();
    var min = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    var sec = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();

    var ampm = (date.getHours()>=12)?"PM":"AM"

    document.getElementById("hms").innerHTML = hr + ":" + min + ":" + sec;
    document.getElementById("ampm").innerHTML = ampm;

    // date
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var currentDay = date.getDate();
    var today = days[date.getDay()] + ", " + currentDay + " " + months[date.getMonth()] + " " + date.getFullYear();

    document.getElementById("date").innerHTML = today;
}

// print time and date for one time them update them every second.
showTime();
setInterval(function (){
    showTime();
}, 1000);

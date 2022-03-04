let userName = prompt("Adınız Nedir?")

greetings = document.querySelector("#myName")
greetings.innerHTML = userName

console.log(greetings)

function showTime() {

    let rtClock = new Date();
    let hours = rtClock.getHours();
    let minutes = rtClock.getMinutes();
    let seconds = rtClock.getSeconds();
    let day = rtClock.getDay();
    let daylist = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
    console.log(daylist[day-1])

    // hours = (hours > 12 ) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.querySelector("#myClock").innerHTML = 
    hours + " : " + minutes + " : " + seconds + " - " + daylist[day-1];
    let t = setTimeout(showTime, 500);


}
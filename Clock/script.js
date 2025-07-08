function updateClock(){
    let now = new Date();

    let hrs = now.getHours();
    let mins = now.getMinutes();
    let sec = now.getSeconds();

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("hrs").textContent = hrs;
    document.getElementById("min").textContent = mins;
    document.getElementById("sec").textContent = sec;
}

updateClock();
setInterval(updateClock, 1000); // ✅ Corrected!

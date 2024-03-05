let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

setInterval(() => {
    let currrentTime = new Date();

hrs.innerHTML=(currrentTime.getHours()<10?"0":"") + currrentTime.getHours();
mins.innerHTML= (currrentTime.getMinutes()<10?"0":"") + currrentTime.getMinutes();
secs.innerHTML=(currrentTime.getSeconds()<10?"0":"") + currrentTime.getSeconds();
}, 1000);



function printAlert() {
    alert("hello");
}

function printToLog() {
    console.log("shlomo hailo");
}
function changeColor() {
    var colors = document.getElementById("span1");
    colors.style.color = "blue";
}
function chngeeSize() {
    var changeh1 = document.getElementById("h");
    changeh1.style.fontSize = "500px";
}
function changeText() {
    var text = document.getElementById("h4");
    text.innerText = "bey world";
}

var button = document.getElementById('username');
button.onclick = function () {
    var username = prompt("enter name");

    document.write(username);
}




var numbersarray = [];
function lotoNumber() {
    var numberinput = document.getElementById('randomuser');
    var numberFromUser = document.getElementById('ploto');
    numberFromUser.innerText += "number:" + numberinput.value + "\n";
    numbersarray.push(numberinput.value);
}
function getAndPrintRandom() {
    var randomnumber = Math.floor(Math.random() * 57);
    var rndh3 = document.getElementById('h3loto');
    rndh3.innerText += randomnumber;

}


function newdate() {

    var newdate = new Date();
    var x = document.getElementById("date");
    x.innerHTML = newdate;
    var div = document.createElement('div');
    document.body.appendChild(div)

    if (newdate.getHours() > 12) {
        x.style.backgroundColor = "yellow";

        div.innerHTML = "good day";

    }
    else {
        x.style.backgroundColor = "blue";
        div.innerHTML = "good evning";
    }
}
newdate();





button1.onclick = function printAge() {
    var user = input.value;
    if (user > 18) {
        text.innerHTML = "WELCOME";
        text.style.color = "red";
    }
    else {
        text.innerHTML = "hello";
        text.style.color = "blue";


    }
}
text.onmouseover = function p() {
    text.style.color = "green";
}




function sumfunc() {

    var userdate1 = new Date(userdate.value).getFullYear()
    var usrage = somfunc(userdate1)
    var x = document.getElementById('user');
    if (usrage > 18) {
        var z = document.createElement("h1");
        document.body.appendChild(z);
        x.innerText = "welcome";
        x.style.color = "blue";
        z.innerHTML = nameuser.value;

        x.addEventListener("mouseover", () => {
            z.style.color = "green";
            x.style.color = "green";
        })


    }
    else {
        x.innerText = "no enter";
        x.style.color = "red";
    }
}

function somfunc(fullyear) {
    var datenow = new Date().getFullYear();
    var age = datenow - fullyear;
    return age;
}


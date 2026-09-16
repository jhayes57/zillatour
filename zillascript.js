/* ZILLA TOUR™ CHAOS CONTROL CENTER */


/* BEGIN TOUR */

const tourButton = document.getElementById("tourButton");

tourButton.addEventListener("click", () => {
    document.getElementById("cake").scrollIntoView({
        behavior: "smooth"
    });
});


/* LEAVE */

const leaveButton = document.getElementById("leaveButton");

leaveButton.addEventListener("click", () => {

    leaveButton.textContent = "COWARD.";

    setTimeout(() => {
        leaveButton.textContent = "LEAVE";
    }, 1500);

});


/* LIVE CAM */

const liveMessage = document.getElementById("liveMessage");

const messages = [
    "MONITORING CHEEK ACTIVITY...",
    "MOVEMENT DETECTED.",
    "CHEEKS REMAIN OPERATIONAL.",
    "JAPAN HAS BEEN NOTIFIED.",
    "THIS IS NOT A DRILL.",
    "STRUCTURAL ANALYSIS IN PROGRESS...",
    "SIGNIFICANT MASS DETECTED.",
    "OH DEAR GOD.",
    "CAMERA OPERATOR HAS LEFT THE AREA.",
    "AUTHORITIES REFUSE TO COMMENT.",
    "DOUBLE-CHEEK EVENT CONFIRMED.",
    "EVACUATION STRONGLY ADVISED."
];

let messageIndex = 0;

setInterval(() => {

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

    liveMessage.textContent = messages[messageIndex];

}, 2000);


/* ASS ANALYSIS */

const scanButton = document.getElementById("scanButton");
const scanResult = document.getElementById("scanResult");
const analysisOutput = document.getElementById("analysisOutput");

const densityValue = document.getElementById("densityValue");
const clapValue = document.getElementById("clapValue");
const thiccValue = document.getElementById("thiccValue");

const scanMessages = [
    "SCANNING LEFT CHEEK...",
    "SCANNING RIGHT CHEEK...",
    "CALCULATING MASS...",
    "CHECKING STRUCTURAL INTEGRITY...",
    "CONSULTING THE PENTAGON...",
    "MEASURING THICC INDEX™...",
    "DETECTING SEISMIC ACTIVITY...",
    "RUNNING DOUBLE-CHEEK VERIFICATION...",
    "COMPUTER IS CONCERNED...",
    "RESULTS RECEIVED."
];

const finalResults = [
    "CERTIFIED THICC.",
    "ABSOLUTELY PREPOSTEROUS.",
    "DOUBLE CHEEKED UP.",
    "STRUCTURALLY CONCERNING.",
    "TOKYO IS FUCKED.",
    "SCIENTISTS BAFFLED.",
    "TOO MUCH ASS.",
    "CAKE CONFIRMED."
];

scanButton.addEventListener("click", () => {

    scanButton.disabled = true;
    scanButton.textContent = "SCANNING...";

    scanResult.textContent = "";

    analysisOutput.innerHTML =
        "> BEGINNING ADVANCED ASS SCAN...<br>";

    let line = 0;

    const scanInterval = setInterval(() => {

        analysisOutput.innerHTML +=
            "> " + scanMessages[line] + "<br>";

        densityValue.textContent =
            (90 + Math.random() * 9.9).toFixed(1) + "%";

        clapValue.textContent =
            (7 + Math.random() * 2.9).toFixed(1);

        thiccValue.textContent =
            Math.floor(900 + Math.random() * 100);

        line++;

        if (line >= scanMessages.length) {

            clearInterval(scanInterval);

            scanResult.textContent =
                finalResults[
                    Math.floor(
                        Math.random() * finalResults.length
                    )
                ];

            scanButton.disabled = false;

            scanButton.textContent =
                "🍑 RUN ASS SCAN AGAIN 🍑";

            document.documentElement.classList.add("screen-shake");

            setTimeout(() => {
                document.documentElement.classList.remove("screen-shake");
            }, 700);

        }

    }, 350);

});


/* VISITOR COUNTER */

const visitorCounter =
    document.getElementById("visitorCounter");

let visits =
    localStorage.getItem("zillaVisits");

if (visits === null) {
    visits = 69420;
}

visits = Number(visits) + 1;

localStorage.setItem(
    "zillaVisits",
    visits
);

visitorCounter.textContent =
    String(visits).padStart(7, "0");


/* DVD ZILLA */

const dvdZilla =
    document.getElementById("dvdZilla");

let zillaX = 50;
let zillaY = 150;

let zillaSpeedX = 2.5;
let zillaSpeedY = 2.5;

function moveZilla() {

    const maxX =
        window.innerWidth -
        dvdZilla.offsetWidth;

    const maxY =
        window.innerHeight -
        dvdZilla.offsetHeight;

    zillaX += zillaSpeedX;
    zillaY += zillaSpeedY;

    if (zillaX >= maxX || zillaX <= 0) {

        zillaSpeedX *= -1;

        dvdZilla.style.filter =
            `hue-rotate(${Math.random() * 360}deg)`;

    }

    if (zillaY >= maxY || zillaY <= 0) {

        zillaSpeedY *= -1;

        dvdZilla.style.filter =
            `hue-rotate(${Math.random() * 360}deg)`;

    }

    dvdZilla.style.left = zillaX + "px";
    dvdZilla.style.top = zillaY + "px";

    requestAnimationFrame(moveZilla);
}

moveZilla();


/* CHAOS MODE */

const chaosButton =
    document.getElementById("chaosButton");

const extremeEvent =
    document.getElementById("extremeEvent");

let chaosActive = false;

let chaosTextInterval;
let chaosImageInterval;

const chaosWords = [
    "🍑",
    "🦖",
    "🚨",
    "CAKE",
    "RUN",
    "ZILLA",
    "GOOD LORD",
    "THREAT DETECTED",
    "GYATT",
    "TOKYO NO",
    "CHEEKS",
    "STRUCTURAL FAILURE",
    "EVACUATE",
    "ABSOLUTELY NOT",
    "HELP"
];

const chaosImages = [
    "beach.jpeg",
    "atomic.jpeg",
    "sunset.webp",
    "city.jpeg"
];


chaosButton.addEventListener("click", () => {

    if (!chaosActive) {
        activateChaos();
    } else {
        deactivateChaos();
    }

});


function activateChaos() {

    chaosActive = true;

    document.body.classList.add("chaos");

    chaosButton.textContent =
        "STOP THE CHEEKS";

    document.documentElement.classList.add("screen-shake");

    extremeEvent.classList.add("active");

    setTimeout(() => {

        extremeEvent.classList.remove("active");

    }, 1300);


    setTimeout(() => {

        document.documentElement.classList.remove("screen-shake");

    }, 2500);


    chaosTextInterval =
        setInterval(createChaosText, 250);


    chaosImageInterval =
        setInterval(createChaosImage, 700);

}


function deactivateChaos() {

    chaosActive = false;

    document.body.classList.remove("chaos");

    document.documentElement.classList.remove("screen-shake");

    chaosButton.textContent =
        "ACTIVATE CHEEK EVENT";

    clearInterval(chaosTextInterval);
    clearInterval(chaosImageInterval);

    document.querySelectorAll(
        ".chaos-object, .chaos-image"
    ).forEach(element => {
        element.remove();
    });

}


function createChaosText() {

    if (!chaosActive) return;

    const object =
        document.createElement("div");

    object.classList.add("chaos-object");

    object.textContent =
        chaosWords[
            Math.floor(
                Math.random() *
                chaosWords.length
            )
        ];

    object.style.left =
        Math.random() * 85 + "vw";

    object.style.top =
        Math.random() * 85 + "vh";

    object.style.fontSize =
        (20 + Math.random() * 60) + "px";

    object.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    object.style.color =
        `hsl(${Math.random() * 360}, 100%, 50%)`;

    document.body.appendChild(object);

    setTimeout(() => {
        object.remove();
    }, 2200);

}


function createChaosImage() {

    if (!chaosActive) return;

    const image =
        document.createElement("img");

    image.classList.add("chaos-image");

    image.src =
        chaosImages[
            Math.floor(
                Math.random() *
                chaosImages.length
            )
        ];

    image.style.left =
        Math.random() * 75 + "vw";

    image.style.top =
        Math.random() * 70 + "vh";

    image.style.width =
        (120 + Math.random() * 180) + "px";

    image.style.transform =
        `rotate(${
            -30 + Math.random() * 60
        }deg)`;

    document.body.appendChild(image);

    setTimeout(() => {
        image.remove();
    }, 2000);

}


/* CONSOLE EASTER EGG */

console.log(`
ZILLA TOUR™

WHY ARE YOU INSPECTING
THE CHEEKS?

ಠ_ಠ
`);
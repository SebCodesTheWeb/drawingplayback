const board = document.querySelector(".grid-board");
let holdingMouseDown = false;
const pixels = document.querySelectorAll(".pixel");
const eraser = document.querySelector("#eraser");
let currentColor = document.querySelector("#color");
const recordButton = document.querySelector("#record");
const playButton = document.querySelector("#play");

let deleteModeActive = false;

let startTime = 0;
let endTime = 0;
let playTime = 0;
let currentTime = 0;
let recording = false;
let replaying = false;

let valuesAsFunctionOfTime = []

document.querySelector("#clean").addEventListener("click", cleanScreen)

recordButton.addEventListener("click", function() {
    if(!recording) {
        startTime = new Date().getTime();
        recording = true;
        recordButton.innerText = "Stop";
        recordButton.style.backgroundColor = "#594E4D";

    } else {
        endTime = new Date().getTime();
        playTime = endTime - startTime;
        recording = false;
        recordButton.innerText = "Record";
        recordButton.style.backgroundColor = "#8C3A49";
        cleanScreen();
    }
})

playButton.addEventListener("click", function() {
    if(!replaying) {
        replaying = true;
        let playBack = setInterval(function() {
            if(playTime != 0 && replaying == true) {
                if(valuesAsFunctionOfTime[valuesAsFunctionOfTime.length - 1].timestamp < currentTime) {
                    clearInterval(playBack);
                }
                for(let changedObject of valuesAsFunctionOfTime) {
                    console.log(changedObject);
                    if(currentTime >= changedObject.timestamp) {
                        if(changedObject.property = "backgroundColor") {
                        document.querySelector(`${changedObject.target}`).style.backgroundColor = `${changedObject.value}`
                        }
                    }
                } 
                currentTime += 100;
                console.log(currentTime);
            }
        }, 100)
        playButton.innerText = "Exit Play"
        playButton.style.backgroundColor = "#D8BEB2";
    } else {
        replaying = false;
        playButton.innerText = "Play"
        playButton.style.backgroundColor = "#8C5C51";
        currentTime = 0;
        cleanScreen();
    }
})

document.querySelector("#delete-recording").addEventListener("click", function() {
    clearRecording();
})

board.addEventListener("mousedown", function() {
    holdingMouseDown = true;
})

board.addEventListener("mouseup", function() {
    holdingMouseDown = false;
})

eraser.addEventListener("click", function() {
    if(deleteModeActive) {
        deleteModeActive = false;
    } else {
        deleteModeActive = true;
    }
})

// setInterval(function() {
//     if(holdingMouseDown) {
//         console.log("holding")
//         pixels.forEach(function(pixel) {
//             pixel.classList.add("draw-able")
//         })
//     }
    
//     else {
//         pixels.forEach(function(pixel) {
//             pixel.classList.remove("draw-able")
//         })
//         console.log("not holding")
//     }
// }, 500)

pixels.forEach(function(pixel) {
    pixel.addEventListener("mouseover", function(event) {
        if(holdingMouseDown && !deleteModeActive) {
            event.target.style.backgroundColor = `${currentColor.value}`;
            if(recording) {
                let thisCurrentTime = new Date().getTime();
                addNewEvent(`.${event.target.classList[1]}`, `backgroundColor`, `${currentColor.value}`, thisCurrentTime-startTime);
                console.log(valuesAsFunctionOfTime);
            }
        }
        if(holdingMouseDown && deleteModeActive) {
            event.target.style.backgroundColor = "white";
            if(recording) {
                let thisCurrentTime = new Date().getTime();
                addNewEvent(`.${event.target.classList[1]}`, `backgroundColor`, `white`, thisCurrentTime-startTime);
                console.log(valuesAsFunctionOfTime);
            }
        }
    })

    pixel.addEventListener("mousedown", function(event) {
        if  (!deleteModeActive) {
            event.target.style.backgroundColor = `${currentColor.value}`
            if(recording) {
                let thisCurrentTime = new Date().getTime();
                addNewEvent(`.${event.target.classList[1]}`, `backgroundColor`, `${currentColor.value}`, thisCurrentTime-startTime);
                console.log(valuesAsFunctionOfTime);
            }
        }
    })
})

function addNewEvent(target, property, value, timestamp) {
    const newEvent = {
        target: target,
        property: property,
        value: value,
        timestamp: timestamp
    }

    valuesAsFunctionOfTime.push(newEvent);
}

function cleanScreen() {
    pixels.forEach(function(pixel) {
        pixel.style.backgroundColor = "#fff";
    })
}

function clearRecording() {
    valuesAsFunctionOfTime = [];
}
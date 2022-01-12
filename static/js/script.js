/*
Generate a random integer between 0 and 4.

Returns:
    int: Random number generated
*/
function randNum() {
	return Math.floor(Math.random() * 4);
}

/*
Generate a random number, but always return a different number.

This is a function that generates a random number.

Parameters
----------

Returns
-------

Notes
-----
*/
function alwaysNewRandNum() {
	if (typeof oldNum == "number") {
		let num = randNum();
		if (oldNum == num) {
			return alwaysNewRandNum();
		} else {
			oldNum = num;
			return num;
		}
	} else {
		let num = randNum();
		oldNum = num;
		return num;
	}
}

/*
This function plays a song from the songList.

Parameters
----------
None

Returns
-------
None

Notes
-----
This function plays a song from the songList.
*/
function music() {
	if (player) {
		songList[key].pause();
		songList[key].currentTime = 0;
	}
	key = alwaysNewRandNum();
	songList[key].play();
	player = true;
}

function submit() {
	let age = document.querySelector(".mainForm__Input").value;

	if (/^\d+$/.test(age)) {
		age = age * 365;
		const mainForm = document.querySelector(".mainForm");
		mainForm.innerHTML = `<h1>You are<span class="result text-yellow-400 underline decoration-double"> ${age} </span>days old</h1><div class="mainForm__divBtn flex justify-around">
        <button class="px-4 py-2 bg-yellow-400 rounded sm:pb-1 sm:pt-0 hover:bg-green-400 cl-start-1 mainForm__divBtnMusic">Music</button>
        <button class="px-4 py-2 bg-purple-400 rounded sm:pb-1 sm:pt-0 hover:bg-red-600 cl-start-1 mainForm__divBtnReset">Reset</button>
        </div>`;
		ctx.style.display = "unset";
		mainForm.style.gridGap = "2rem";
		document.querySelector(".mainForm__divBtnReset").addEventListener("click", location.reload.bind(window.location));
		document.querySelector(".mainForm__divBtnMusic").addEventListener("click", music);
		music();
	}
    else {
		alert("Please enter a valid number");
	}
}

function reset() {
	document.querySelector(".mainForm__Input").value = "";
}

const songOne = new Audio("./static/media/AirborneRobots.mp3");
const songTwo = new Audio("./static/media/Cycles.mp3");
const songThree = new Audio("./static/media/Hypersonic.mp3");
const songFour = new Audio("./static/media/The7Seas.mp3");
const songList = [songOne, songTwo, songThree, songFour];


let oldNum = false;
let player = false;
let key = false;


document.querySelector(".mainForm__divBtnSubmit").addEventListener("click", submit);
document.querySelector(".mainForm__divBtnReset").addEventListener("click", reset);
const ctx = document.querySelector("canvas");

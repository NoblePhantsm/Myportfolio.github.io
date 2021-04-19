let bg = new Image();
bg.src = "hCUwLQ.png";
//"use strict";
let ctx;
let bcycle = 0;
let running = new Image();
running.src = "runsheet.png";
let jump = new Image();
jump.src = "jumpsheet.png"
let jumping;
let flapping;
let wallpaper = new Image();
wallpaper.src = "sins.png";
let slash = new Image();
slash.src = "newslash.png"
let slashing;
let slide = new Image();
slide.src = "newslide.png"
let mons1 = new Image()
mons1.src = "monster1.gif"
let dugo = new Image()
dugo.src = "bloodef.png"
let tower = new Image();
tower.src = "etower.png"

let sW = 100;
let sH = 75;
let move = 180;
let jimp = 380;
let a = running;
let p = 0;
let random = 1000;


function setup() {

	let canvas = document.getElementById("surface");
	ctx = canvas.getContext("2d");

	ctx.drawImage(wallpaper, 385, 0, 680, 480)



}

let acount = 0;
let mew = 0;
let ainterval;
let binterval;
let pop = 0;
let pup = 0;

let w = 0;


function Movement(event) {
	if (event.key == "ArrowUp") {
		pop = mew;
		ainterval = setInterval(function () {

			a = jump

			pop++

			if (pop <= 5) {
				jimp -= 20;
			}
			else if (pop > 5 && pop <= 10) {
				jimp += 20;
			}
			else {

				jimp += 0;
				a = running;
				clearInterval(ainterval);
				pop = 0;

			}


		}, 500)
		w += 1262;


	}
	if (event.key == "r") {

		rice = setInterval(function () {


			a = slash;
			acount++;
			if (acount > 1) {

				a = running;
				clearInterval(rice);
				acount = 0;
			}
		}, 500)

	}
	if (event.key == "ArrowDown") {

		binterval = setInterval(function () {
			a = slide;
			pup++;
			if (pup > 1) {

				a = running
				clearInterval(binterval);
				pup = 0;
			}

		}, 500)


	}
	if (event.key == "ArrowLeft") {
		move -= 20;

	}
	if (event.key == "ArrowRight") {
		move += 20;
	}

}
let awrus;
let time = 85;
let blowd = 500;
let q;
let mos;
let tows;
let i = 0
function showImage() {
	let o = 0;
	i = 0
	mos = 1000;
	tows = 700;
	while (i < 100) {

		ctx.drawImage(bg, o, 0);
		if (mos % 5000 == 0) { }
		else if (i % 2 == 0) {
			ctx.drawImage(mons1, mos, 250)
		}
		else {
			ctx.drawImage(tower, tows - 60, -30)
		}
		o += 1262;
		mos += 1000;
		tows += 700;
		i++;
	}
}
let ancount = 0;
let mw;
function Firstpattern() {

	ctx.clearRect(0, 0, 1400, 480)



	awrus = setInterval(function () {
		ctx.translate(-20, 0)
		ctx.save()
		showImage();

		let waw = move + 500;


		ctx.font = "20px Italic"
		ctx.fillStyle = "green"
		ctx.fillText("Slash = r", waw - 650, 465)
		ctx.fillText("Slide = Arrowdown", waw - 550, 465)
		ctx.fillText("Jump = ArrowUp", waw - 350, 465)
		ctx.fillText("Advance = ArrowRight", waw - 150, 465)
		ctx.fillText("Backwards = ArrowLeft", waw + 100, 465)
		ctx.fillText("Combo = ArrowUp + r", waw + 400, 465)
		ctx.font = "30px Arial";
		ctx.fillStyle = "red"
		ctx.fillText("Points", waw, 50);
		ctx.fillText(" " + move, waw, 100);
		if (a == slide) {
			ctx.drawImage(a, bcycle * sW, 0, sW, sH, move, jimp, sW, sH)
			bcycle = (bcycle + 1) % 5
			time -= 100;
		}
		else {
			ctx.drawImage(a, bcycle * sW, 0, 75, sH, move, jimp, sW, sH)
			bcycle = (bcycle + 1) % 5;
		}
		if (move % 5000 == 0) {

		}
		else if (move == 1000 && acount == 0 || move % 2000 == 1000 && acount == 0) {
			clearInterval(awrus);
			ctx.fillText("Game Over , What a noob player!", waw - 200, 200);
		}
		if (move % 7000 == 0) { }
		else if (move % 1400 == 0 && pup == 0) {

			clearInterval(awrus);
			ctx.fillText("Game Over , What a noob player!", waw - 200, 200);
		}

		if (move == 1000 || move % 2000 == 1000 ) {
			mw = setInterval(function () {
				ctx.drawImage(dugo, blowd, 200)
			}, 100)
			if (ancount == 0) {
				blowd += 500;
			}
			else {
				blowd += 2000;
			}
			ancount++;


		}
		if (move == 50000) {
			clearInterval(awrus);
			ctx.fillText("You finish the GAME CONGRATS !", waw - 200, 200);

		}

		move += 20;
	}, time)



}

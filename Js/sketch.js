let player;
let sight;
let target;
let font;
let font_bold;

let song;
let gunsound;
let gunempty;
let bullethit;
let reload;
let reloading = false;
let bulletsFull = 12;
let bulletsAmount = bulletsFull;

let ground;
let sky;
let targetImg;
let bulletImg;

let game = false;
let gameover = false;
let score = 0;
let time = 60;

function preload() {
	song = loadSound('SFX/song.mp3');
	sight = loadImage('Pictures/sight.png');
	gunsound = loadSound('SFX/gunsound.mp3');
	gunempty = loadSound('SFX/gunempty.mp3');
	bullethit = loadSound('SFX/bullethit.mp3');
	reload = loadSound('SFX/reload.mp3');
	font = loadFont('Fonts/font.ttf');
	font_bold = loadFont('Fonts/font-bold.ttf')

	ground = loadImage('Pictures/ground.png');
	sky = loadImage('Pictures/sky.jpg');
	targetImg = loadImage('Pictures/target.png');
	bulletImg = loadImage('Pictures/bullet.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	player = new Player();
	target = new Target();

	setInterval(() => {
		resizeCanvas(windowWidth, windowHeight);

		target.check();
	}, 500);
}

function draw() {
	background(sky);
	runGame();
}

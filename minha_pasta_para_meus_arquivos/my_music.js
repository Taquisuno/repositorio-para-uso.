const audio = new AudioContext();
let repeticoes = [0, 0, 0, 0];

function delayHelp( ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function tocar(){
let audio = new AudioContext();
let repeticoes = [0, 0, 0, 0];

function delayHelp( ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function tocar(){
	let oscilador = [audio.createOscillator(), audio.createOscillator(), audio.createOscillator(), audio.createOscillator()];
	oscilador[0].frequency.value = 200;
	oscilador[0].type = "triangle";
	oscilador[0].connect(audio.destination);
	oscilador[0].start();
	await delayHelp(50);
	oscilador[0].stop();
}
}

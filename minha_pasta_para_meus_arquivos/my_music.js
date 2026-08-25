const audio = new AudioContext();
let repeticoes = [0, 0, 0, 0];

function delayHelp( ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function tocar(){
	const oscilador = audio.createOscillator();
	oscilador.frequency.value = 450;
	oscilador.type = "sine";
	oscilador.connect(audio.destination);
	oscilador.start();
	await delayHelp(2000);
	oscilador.type = "square";
	await delayHelp(2000);
	oscilador.type = "sawtooth";
	await delayHelp(2000);
	oscilador.type = "triangle";
	oscilador.stop();
}

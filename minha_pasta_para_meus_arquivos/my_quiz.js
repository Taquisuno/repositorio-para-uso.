function delay(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

let allItem = document.querySelectorAll(".item");
let contadorDeQues = 0;
let acertos = 0;
async function iniciador(){
	allItem[0].textContent = "QUESTÃO 1";
	allItem[1].textContent = "Qual é aproximadamente a velocidade da luz?";
	allItem[2].textContent = "";
	allItem[2].style.backgroundColor = "transparent";
	allItem[2].style.color = "transparent";
	allItem[3].textContent = "A) 300,000km/s";
	allItem[4].textContent = "B) 250,000km/s";
	allItem[5].textContent = "C) 200,000km/s";
	allItem[6].textContent = "D) 100,000km/s";
	allItem[7].style.backgroundColor = "white";
	allItem[7].style.color = "black";
	allItem[7].placeholder = "digite uma das opções";
	allItem[8].style.backgroundColor = "black";
	allItem[8].style.color = "rgb(125, 0, 255)";
	allItem[8].textContent = "enviar resposta";
}
async function questao1(){
	let inputBT = document.querySelector("input").value;
	switch(inputBT){
		case "a":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		case "a)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		case "A":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		case "A)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		default:
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#FF0000";
		allItem[9].textContent = "RESPOSTA INCORRETA";
		allItem[10].style.color = "#FFFFFF";
		allItem[10].textContent = "a resposta correta é: 300,000km/s";
		break;
	}
	allItem[11].style.color = "rgb(125, 0, 255)";
	allItem[11].style.backgroundColor = "#000000";
	allItem[11].textContent = "avançar";
	contadorDeQues++;
}
async function avancar(){
		allItem[9].style.backgroundColor = "transparent";
		allItem[9].style.color = "transparent";
		allItem[9].textContent = "";
		allItem[10].style.color = "transparent";
		allItem[10].textContent = "";
		allItem[11].style.color = "transparent";
		allItem[11].style.backgroundColor = "transparent";
		allItem[11].textContent = "";
	if(contadorDeQues === 20){
		
	}
	else{
		switch(contadorDeQues){
			case 1:
			allItem[0].textContent = "QUESTÃO 2";
			allItem[1].textContent = "Qual é aproximadamente a aceleração da atração gravitacional da terra?";
			allItem[3].textContent = "A) 50m/s";
			allItem[4].textContent = "B) 27.57m/s";
			allItem[5].textContent = "C) 10m/s";
			allItem[6].textContent = "D) 35m/s";
			allItem[8].onclick = questao2;
			break;
			case 2:
			allItem[0].textContent = "QUESTÃO 3";
			allItem[1].textContent = "O que é uma singularidade?";
			allItem[3].textContent = "A) é um ponto no espaço onde a gravidade não existe.";
			allItem[4].textContent = "B) é um ponto no espaço onde as leis da fisica não funcionam de forma normal, devido a extrema distorção do tecido do espaço tempo, que ocerre por causa da gravidade extrema.";
			allItem[5].textContent = "C) é o centro de um buraco branco.";
			allItem[6].textContent = "D) é o nosso universo.";
			allItem[8].onclick = questao3;
			break;
		}
	}
}
async function questao2(){
	let inputBT = document.querySelector("input").value;
	switch(inputBT){
		case "c":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		case "c)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		case "C":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		case "C)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		default:
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#FF0000";
		allItem[9].textContent = "RESPOSTA INCORRETA";
		allItem[10].style.color = "#FFFFFF";
		allItem[10].textContent = "a resposta correta é: 10m/s";
		break;
	}
	allItem[11].style.color = "rgb(125, 0, 255)";
	allItem[11].style.backgroundColor = "#000000";
	allItem[11].textContent = "avançar";
	contadorDeQues++;
}
async function questao3(){
	let inputBT = document.querySelector("input").value;
	switch(inputBT){
		case "b":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		case "b)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		case "B":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		case "B)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		break;
		default:
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#FF0000";
		allItem[9].textContent = "RESPOSTA INCORRETA";
		allItem[10].style.color = "#FFFFFF";
		allItem[10].textContent = "a resposta correta é: B)";
		break;
	}
	allItem[11].style.color = "rgb(125, 0, 255)";
	allItem[11].style.backgroundColor = "#000000";
	allItem[11].textContent = "avançar";
	contadorDeQues++;
}

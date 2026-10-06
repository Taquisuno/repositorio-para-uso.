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
		acertos++;
		break;
		case "a)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "A":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "A)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
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
		if(contadorDeQues === 5){
		for(let i = 3; i < allItem.length; i++){
			if(i > 6){
			allItem[i].textContent = "";
			allItem[i].style.backgroundColor = "transparent";
			allItem[i].style.color = "transparent";
			}
			else{
				allItem[i].textContent = "";
			}
		}
		allItem[0].textContent = "FIM";
		allItem[1].textContent = "você acertou:" + acertos + "/" + contadorDeQues;
		allItem[2].textContent = "tentar novmente";
		allItem[2].style.color = "rgb(125, 0, 255)";
		allItem[2].style.backgroundColor = "black";
		allItem[7].value = "";
		allItem[7].placeholder = "";
		allItem[8].onclick = questao1;
		contadorDeQues = 0;
		acertos = 0;
	}
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
			allItem[7].value = "";
			allItem[8].onclick = questao2;
			break;
			case 2:
			allItem[0].textContent = "QUESTÃO 3";
			allItem[1].textContent = "O que é uma singularidade?";
			allItem[3].textContent = "A) é um ponto no espaço onde a gravidade não existe.";
			allItem[4].textContent = "B) é um ponto no espaço onde as leis da fisica não funcionam de forma normal, devido a extrema distorção do tecido do espaço tempo, que ocerre por causa da gravidade extrema.";
			allItem[5].textContent = "C) é o centro de um buraco branco.";
			allItem[6].textContent = "D) é o nosso universo.";
			allItem[7].value = "";
			allItem[8].onclick = questao3;
			break;
			case 3:
			allItem[0].textContent = "QUESTÃO 4";
			allItem[1].textContent = "Qual é primeira lei de ohm?";
			allItem[3].textContent = "A) V = D/T";
			allItem[4].textContent = "B) S = S0 + V0 . t + a.t²/2";
			allItem[5].textContent = "C) V² = V0² +  2.a.D(delta)S";
			allItem[6].textContent = "D) U = R.I";
			allItem[7].value = "";
			allItem[8].onclick = questao4;
			break;
			case 4:
			allItem[0].textContent = "QUESTÃO 5";
			allItem[1].textContent = "Qual é primeira lei de Newton?";
			allItem[3].textContent = "A) lei da ação e reação.";
			allItem[4].textContent = "B) lei da inércia.";
			allItem[5].textContent = "C) lei da termodinamica.";
			allItem[6].textContent = "D) lei do princípio da dinâmica.";
			allItem[7].value = "";
			allItem[8].onclick = questao5;
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
		acertos++;
		break;
		case "c)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "C":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "C)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
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
		acertos++;
		break;
		case "b)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "B":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "B)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
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
async function questao4(){
	let inputBT = document.querySelector("input").value;
	switch(inputBT){
		case "d":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "d)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "D":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "D)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		default:
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#FF0000";
		allItem[9].textContent = "RESPOSTA INCORRETA";
		allItem[10].style.color = "#FFFFFF";
		allItem[10].textContent = "a resposta correta é: D)";
		break;
	}
	allItem[11].style.color = "rgb(125, 0, 255)";
	allItem[11].style.backgroundColor = "#000000";
	allItem[11].textContent = "avançar";
	contadorDeQues++;
}
async function questao5(){
	let inputBT = document.querySelector("input").value;
	switch(inputBT){
		case "b":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "b)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "B":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
		break;
		case "B)":
		allItem[9].style.backgroundColor = "rgb(0, 0, 0)";
		allItem[9].style.color = "#00FF00";
		allItem[9].textContent = "RESPOSTA CORRETA";
		acertos++;
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

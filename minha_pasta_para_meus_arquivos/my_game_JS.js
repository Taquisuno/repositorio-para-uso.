let upgrades = {
	cash: 0,
	multiplicador: {
		preco: 20,
		nivel: 1,
		power: 1
	},
	ptPerS: {
		preco: 40,
		ptS: 0
	},
	clickPower: {
		power: 1,
		preco: 100,
		nivel: 1
	},
	Renaissance: {
		preco: 1000000,
		power: 1,
		nivel: 1
	}
};
const pValor = document.querySelector("#cashP");
const allP = document.querySelectorAll("p");
const allBT = document.querySelectorAll("button");
setInterval(() => {
	upgrades.cash += (upgrades.ptPerS.ptS * upgrades.multiplicador.power) * upgrades.Renaissance.power;
	atualizarTela();
}, 1000);
pValor.innerHTML = upgrades.cash + "pt";
function atualizarShop(){
	allP[1].innerText = "1";
	allBT[2].innerText = "mult_price: " + Math.round(upgrades.multiplicador.preco) + "pt";
	allP[2].innerText = "2";
	allBT[3].innerText = "ptPerSecond_price: " + Math.round(upgrades.ptPerS.preco) + "pt";
	allP[3].innerText = "3";
	allBT[4].innerText = "Renaissance: " + Math.round(upgrades.Renaissance.preco) + "pt";
	allP[4].innerHTML = "4";
	allBT[5].innerHTML = "click power_price: " + Math.round(upgrades.clickPower.preco) + "pt";
}
function atualizarTela(){
	pValor.textContent = Math.round(upgrades.cash) + "pt";
}
function cashUp(){
	cash += (valorClick * upgrades.multiplicador.porwer) * upgrades.Renaissance.power;
	pValor.textContent = Math.round(cash) + "pt";
}
function mostrarShop(){
	if(allP[1].innerText != "" && allBT[2].innerText != ""){
		allP[1].innerText = "";
		allBT[2].innerText = "";
		allP[2].innerText = "";
		allBT[3].innerText = "";
		allP[3].innerText = "";
		allBT[4].innerText = "";
		allP[4].innerHTML = "";
	allBT[5].innerHTML = "";
	}
	else{
		atualizarShop();
	}
}
function comprarMult(){
	if(cash >= valores[0]){
		cash -= valores[0];
		valores[0] = (valores[0] + valores[0]) * 1.8;
		multiplicador *= 2;
		atualizarTela();
		atualizarShop();
	}
}
function ptPerSecond(){
	if(upgrades.cash >= valores[1]){
		upgrades.cash -= valores[1];
		valores[1] = (valores[1] + valores[1] - (valores[1] / 2)) * 1.8;
		ptPerS++;
		atualizarShop();
	}
	else{}
}
function losingToWin(){
	if(upgrades.cash >= valores[2]){
		upgrades.cash = 0;
		valores[0] = 20;
		valores[1] = 40;
		valores[3] = 100;
		ptPerS = 0;
		multiplicador = 1;
		valorClick = 1;
		valores[2] = valores[2] * 4;
		Renaissance *= 2;
		atualizarTela();
		atualizarShop();
	}
}
function valorDeClick(){
	if(upgrades.cash >= valores[3]){
		upgrades.cash -= valores[3];
		valores[3] = (valores[3] + valores[3] - (valores[3] / 2)) * 1.8;
		valorClick *= 2;
		atualizarShop();
	}
}

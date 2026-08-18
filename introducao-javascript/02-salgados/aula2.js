//Operadores Ariméticos 

const nomeSalgado = "Risole";
const precoUnitario = 3.50;
const quantidade = 4;
const total = precoUnitario * quantidade;

console.log(`Total: R$ ${total}`);

document.getElementById("resultado").textContent = `${quantidade}x ${nomeSalgado} = R$ ${total.toFixed(2)}`;
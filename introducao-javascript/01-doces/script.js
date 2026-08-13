//Primeiro código Javascript
/*Posso escrever
com várias linhas*/
//Variável e tipos de dados
//Cada variável guarda um valor de um tipo diferente

const nomeDoce = "Pavê de morango";
const preco = 6.5;
const disponivel = true;

console.log(nomeDoce,preco,disponivel);

document.getElementById("resultado").textContent= `${nomeDoce} custa R$ ${preco.toFixed(2)}- disponivel: ${disponivel}`;

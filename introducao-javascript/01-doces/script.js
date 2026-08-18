<<<<<<< HEAD
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
=======
//Comentários em Javascript usamos duas barras
//Criar variáveis 
//As variáveis guardam um valor de um tipo diferente

const nomeDoce = "Beijinho";
const preco = 3.0;
const disponivel = true; 

console.log(nomeDoce, preco, disponivel);

document.getElementById(resultado).textContent=
`${nomeDoce} custa R$ ${preco.toFixed(2)} - disponivel: ${disponivel ? "disponivel": "indisponivel"}`;
>>>>>>> f27db1ad583a5549385cbd73538bb08f15281e69

//Comentários em Javascript usamos duas barras
//Criar variáveis 
//As variáveis guardam um valor de um tipo diferente

const nomeDoce = "Beijinho";
const preco = 3.0;
const disponivel = true; 

console.log(nomeDoce, preco, disponivel);

document.getElementById(resultado).textContent=
`${nomeDoce} custa R$ ${preco.toFixed(2)} - disponivel: ${disponivel ? "disponivel": "indisponivel"}`;
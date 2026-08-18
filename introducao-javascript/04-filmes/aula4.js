//Atividade 4
const tituloFilme = "Aventura Espacial";
const classificacaoMinima = 12;
const idadeEspectador = 14;
const podeAssistir = idadeEspectador >= classificacaoMinima;

console.log(podeAssistir);
document.getElementById("resultado").textContent =
	`${tituloFilme} (${classificacaoMinima} anos) - idade ${idadeEspectador}: ${
		podeAssistir ? "Pode assistir" : "Não pode assistir"
	}.`;

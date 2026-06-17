function confirmar(){


let nome = document.getElementById("nome").value;

let quantidade = document.getElementById("quantidade").value;

let resposta = document.getElementById("resposta").value;



let numero = "5588994977253";


let mensagem = 
`Olá! 💚✨

Confirmação do aniversário da Mabelle - 15 anos

Nome:
${nome}

Quantidade:
${quantidade}

Resposta:
${resposta}
`;



let link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);



window.open(link, "_blank");


}

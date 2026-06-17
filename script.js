function abrirConvite(){


document.getElementById("entrada")
.style.display="none";


document.getElementById("conteudo")
.style.display="block";


document.getElementById("musica")
.play();


}





function abrirMapa(){


window.open(

"https://maps.google.com/?q=Chácara+Oásis+Quixeramobim"

);


}





function confirmar(){


let nome =
document.getElementById("nome").value;


let quantidade =
document.getElementById("quantidade").value;



let resposta =
document.getElementById("resposta").value;




let numero="5588994977253";



let mensagem=

`
Olá! 💚✨

Confirmação do aniversário da Mabelle 15 anos

Nome:
${nome}

Quantidade:
${quantidade}

Resposta:
${resposta}

`;



window.open(

"https://wa.me/5588994977253"

+numero+

"?text="

+encodeURIComponent(mensagem)

);



}s
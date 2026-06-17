function abrirConvite(){


document.getElementById("entrada")
.style.display="none";



document.getElementById("convite")
.style.display="block";



let musica = document.getElementById("musica");


musica.play();



document.getElementById("botaoMusica")
.style.display="block";


}





function controleMusica(){


let musica =
document.getElementById("musica");


let botao =
document.getElementById("botaoMusica");



if(musica.paused){


musica.play();


botao.innerHTML="🔊 Música ON";


}else{


musica.pause();


botao.innerHTML="🔇 Música OFF";


}


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



let numero="5588996468988";



let mensagem=

`Olá! 💚✨

Confirmação do aniversário da Mabelle - 15 anos

Nome:
${nome}

Quantidade:
${quantidade}

Resposta:
${resposta}`;



window.open(

"https://wa.me/"+numero+"?text="+encodeURIComponent(mensagem)

);


}

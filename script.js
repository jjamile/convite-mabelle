function abrirConvite(){


    document.getElementById("entrada").style.display = "none";


    document.getElementById("conteudo").style.display = "block";


    let musica = document.getElementById("musica");


    musica.play()
    .then(() => {

        console.log("Música tocando");

    })
    .catch(() => {

        console.log("Erro ao iniciar música");

    });



    document.getElementById("botaoMusica").style.display = "block";


}





function controleMusica(){


    let musica = document.getElementById("musica");

    let botao = document.getElementById("botaoMusica");



    if(musica.paused){


        musica.play();

        botao.innerHTML = "🔊 Música ON";


    } else {


        musica.pause();

        botao.innerHTML = "🔇 Música OFF";


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



    let numero = "5588994053736";



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



    let link =
    "https://wa.me/" 
    + numero 
    + "?text=" 
    + encodeURIComponent(mensagem);



    window.open(link, "_blank");


}

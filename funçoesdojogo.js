function jogadaCPU (){
    let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    return numeroAleatorio;
}
const telaLoser = document.getElementById("teladerrota");
    const telaWin = document.getElementById("telaganhou");
    const telaenpate = document.getElementById("telaempate");
const Player = document.getElementById('Player');
const escolha = document.getElementById('escolha');
const Play = document.getElementById("Play");
const CPU = document.getElementById("CPU")
const btnrei1 = document.getElementById("btnrei1");
const btnrei2 = document.getElementById("btnrei2");
const btnrei3 = document.getElementById("btnrei3");
escolha.addEventListener('change', function(){
    var valor = parseInt(this.value);
    switch(valor){
        case 1 :
            Player.style.backgroundImage = 'url("Pedra.png")'
            break
        case 2 :
            Player.style.backgroundImage = 'url("Papel.png")'
            break
        case 3 :
            Player.style.backgroundImage = 'url("Tesoura.png")'
            break
    }
});
Play.addEventListener('click',function(){
    const valor = parseInt(escolha.value);
    
    if(valor != null){
        const valorcpu = jogadaCPU();
        switch(valorcpu){
            case 1 :
                CPU.style.backgroundImage = 'url("Pedra.png")'
                break
            case 2 :
                CPU.style.backgroundImage = 'url("Papel.png")'
                break
            case 3 :
                CPU.style.backgroundImage = 'url("Tesoura.png")'
                break
        }
        const valorjogador = valor;
        if(valorcpu == 1 && valorjogador == 2){
            //jogador ganha
            //alert('jogador ganhou :P1');
            telaWin.style.display = "flex";
        }else if(valorcpu == 2 && valorjogador == 3){
            //jogador ganha
            //lert('jogador ganhou :P2');
            telaWin.style.display = "flex";
        }else if(valorcpu == 3 && valorjogador == 1 ){
            //jogador ganha 
            //alert('jogador ganhou :P3');
            telaWin.style.display = "flex";
        }else if(valorcpu == 2 && valorjogador == 1){
            //cpuganha
            //alert('cpu ganhou :P1');
            telaLoser.style.display = "flex";
        }else if(valorcpu == 3 && valorjogador == 2){
            //cpuganha
            //alert('cpu ganhou :P2');
            telaLoser.style.display = "flex";
        }else if(valorcpu == 1 && valorjogador == 3){
            //cpuganha
            //alert('cpu ganhou :P3');
            telaLoser.style.display = "flex";
        }else if(valorcpu == valorjogador){
            telaenpate.style.display = "flex";
        }
    }else{
        alert('escolhar um item');
    }
});

btnrei1.addEventListener('click',function(){
    //location.reload();
   telaLoser.style.display = "none"; 
})
btnrei2.addEventListener('click',function(){
    //location.reload();
    telaWin.style.display = "none";
})
btnrei3.addEventListener('click',function(){
    //location.reload();
    telaenpate.style.display = "none";
})
const casas = document.getElementsByTagName('input'); 
const label_jogador = document.querySelector('#jogador');
const label_vencedor = document.querySelector('#vencedor');
const m_empate = document.querySelector('#empate');
const m_vitoria = document.querySelector('#vitoria');
const n_empates = document.querySelectorAll('.empates');
const n_vitorias_x = document.querySelectorAll('.vitorias_x');
const n_vitorias_o = document.querySelectorAll('.vitorias_o');


var jogador = "_";
var vencedor = "_";
var rodada = 0;
var vitorias_x = 0;
var vitorias_o = 0;
var empates = 0;


sortearJogador();

for(var i=0;i<9;i++) {
    casas[i].addEventListener('click', (event) => {

        if( (event.target.value=='_') && (vencedor=='_')) {
            event.target.value=jogador; 
            event.target.style.color='black';

            trocarJogador(); 
            rodada++;
            vencedor = vitoria();

            if(vencedor!='_') {
                m_vitoria.style.display = "block";
                label_jogador.innerText=` '${vencedor}' venceu!`;
                label_vencedor.innerText=` '${vencedor}'  venceu!`;

                if(vencedor == 'O'){
                    vitorias_o++;
                    n_vitorias_o[0].innerText =` ${vitorias_o}`;
                    n_vitorias_o[1].innerText =` ${vitorias_o}`;
                } else {
                    vitorias_x++;
                    n_vitorias_x[0].innerText =` ${vitorias_x}`;
                    n_vitorias_x[1].innerText =` ${vitorias_x}`;
                }
            }else if (vencedor == '_' && rodada == 9){
                m_empate.style.display = "block";
                empates++;
                n_empates[0].innerText =` ${empates}`;
                n_empates[1].innerText =` ${empates}`;
            }
        }
    });
}

function reiniciar (){
    for(var i=0;i<9;i++) {
        casas[i].value='_'; 
        casas[i].style.color='white';
        casas[i].style.backgroundColor='white';
    }
    
    vencedor = "_";
    rodada = 0;
    sortearJogador();
    m_empate.style.display = "none";
    m_vitoria.style.display = "none";
}

function sortearJogador () {
    if(Math.floor(Math.random() * 2)==0) {
        jogador = "O";
        label_jogador.innerText="O"; 
    }else{
        jogador = "X";
        label_jogador.innerText="X";
    }
}

function trocarJogador() {
    if(jogador=='X') {
        jogador='O';
        label_jogador.innerText='O';
    
    }else{
        jogador='X';
        label_jogador.innerText='X';
    }
}

function vitoria() {
    if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
        casas[0].style.backgroundColor='#0F0';
        casas[1].style.backgroundColor='#0F0';
        casas[2].style.backgroundColor='#0F0';

        return casas[0].value;

    }else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
        casas[3].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[5].style.backgroundColor='#0F0';

        return casas[3].value;

    }else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
        casas[6].style.backgroundColor='#0F0';
        casas[7].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return casas[6].value;

    }else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
        casas[0].style.backgroundColor='#0F0';
        casas[3].style.backgroundColor='#0F0';
        casas[6].style.backgroundColor='#0F0';

        return casas[0].value;

    }else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
        casas[1].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[7].style.backgroundColor='#0F0';

        return casas[1].value;

    }else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
        casas[2].style.backgroundColor='#0F0';
        casas[5].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return casas[2].value;
    }else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
        casas[0].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return casas[0].value;

    }else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
        casas[2].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[6].style.backgroundColor='#0F0';

        return casas[2].value;
    }

    return '_';
}

console.log(n_empates, n_vitorias_o, n_vitorias_x);
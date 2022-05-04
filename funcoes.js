var tagAlvo = new Array('p'); //pega todas as tags p//
 
// Especificando os possÃ­veis tamanhos de fontes, poderia ser: x-small, small...
var tamanhos = new Array('80%', '90%', '100%', '110%', '120%', '130%', '140%');
var tamanhoInicial = 2;
 
function mudaTamanho( idAlvo, acao )
{
    if (!document.getElementById) return

    var selecionados = null, tamanho = tamanhoInicial, i, j, tagsAlvo;

    if (acao == 0) tamanho= 2
    else tamanho += acao;

    if ( tamanho < 0 ) tamanho = 0;
    if ( tamanho > 6 ) tamanho = 6;

    tamanhoInicial = tamanho;

    if ( !( selecionados = document.getElementById( idAlvo ) ) ) {   
        selecionados = document.getElementsByTagName( idAlvo )[ 0 ];
    }

    selecionados.style.fontSize = tamanhos[ tamanho ];
    
    for ( i = 0; i < tagAlvo.length; i++ ) {
        tagsAlvo = selecionados.getElementsByTagName( tagAlvo[ i ] );
        for ( j = 0; j < tagsAlvo.length; j++ ) {
            tagsAlvo[ j ].style.fontSize = tamanhos[ tamanho ];
        }
    }
}
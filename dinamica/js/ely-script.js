/**
 * Created by Elyervesson on 28/10/2014.
 */
$(document).ready(function() {

    var assuntoAprdr = new Array();
    var assuntoAprdi = new Array();

    $("#aprdr").click(function() {
        var entrada = $(".span2").val();
        if(entrada == "" || entrada == null) return;

        assuntoAprdr[assuntoAprdr.length] = entrada
        criaLista(assuntoAprdr, '#aprender');
    });

    $("#aprdi").click(function() {
        var entrada = $(".span2").val();
        if(entrada == "" || !contem(entrada)) return;

        assuntoAprdi[assuntoAprdi.length] = entrada;
        remover(entrada);

        criaLista(assuntoAprdr, '#aprender');
        criaLista(assuntoAprdi, '#aprendi');
    });

    $("#rmv").click(function(){
        var entrada = $(".span2").val();
        if(entrada == "" || entrada == null) return;

        remover(entrada);
        criaLista(assuntoAprdr, '#aprender');
    });

    // FUNÇÕES PARA MANIPULAR O ARRAY //
    function criaLista(array, id) {
        textoHTML = "<ul>";

        for (var i = 0; i <= array.length - 1; i++) {
            if(array[i] != null) {
                textoHTML += '<li>' + array[i] + '</li>'
            }
        };
        textoHTML += "</u>";
        $(id).html(textoHTML);
    }

    function contem(assunto) {
        for (var i = 0; i <= assuntoAprdr.length - 1; i++) {
            if(assuntoAprdr[i] == assunto) {
                return true;
            }
        };
        return false;
    }

    function remover(assunto) {
        for (var i = 0; i <= assuntoAprdr.length - 1; i++) {
            if(assuntoAprdr[i] == assunto) {
                assuntoAprdr[i] = null;
                return;
            }
        };
    }
});




const opzioniHtml = document.getElementById("scelta")
const numeroHtml = document.getElementById("numero")
const bottoneHtml = document.getElementById("bottone")
const spanHtml = document.getElementById("risultato")


bottoneHtml.addEventListener('click', function () {

    let numeroRandom = Math.floor((Math.random() * 5) + 1);

    let numeroScelto = parseInt(numeroHtml.value, 10)

    let totale = numeroScelto  + numeroRandom

    let risultatoPariOdispari = pariOdispari(totale)

    if(opzioniHtml.value === risultatoPariOdispari){
        spanHtml.innerHTML = `Hai vinto! La somma ${totale} è ${risultatoPariOdispari}.`
    }else{
        spanHtml.innerHTML = `Hai perso! La somma ${totale} è ${risultatoPariOdispari}.`
    }

})

function pariOdispari(totale) {

    if (totale % 2 === 0) {
       return "pari"
    } else {
        return "dispari"
    }
}
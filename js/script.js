function numeroRandom(min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function inArray(arr, el) {
	var count = 0;

	while ( count < arr.length ) {
		if ( arr[count] === el ) {
			return true;
		}
		
		count++;
	}

	return false;
}


//Un alert() espone 5 numeri generati casualmente.

var numeriRandom = [];

//for (var i = 0; i < 5; i++){
//    numeriRandom.push(numeroRandom(1, 20));
//};

for (var i = 0; i < 5; i++) {
    var numeri = (numeroRandom(1, 20));
    var check = numeriRandom.includes(numeri);

    if (check == false) {
        numeriRandom.push(numeri);

    } else {
        while(check == true){
            numeri = (numeroRandom(1, 20));
            check = numeriRandom.includes(numeri);
            if(check == false){
                numeriRandom.push(numeri);
            }
        }
    }
}


var visioneNumeri = alert(`Ricordati questi numeri ${numeriRandom}`);

//Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var numeriUtente = [];
var numeriIndovinati = [];
var numerisbagliati = [];
setTimeout(
    function(){
    for (var i = 0; i < numeriRandom.length; i++){
        var sceltaUtente = parseInt(prompt("Inserisci uno dei numeri"));

        while(isNaN(sceltaUtente)){
            var sceltaUtente = parseInt(prompt("Non hai inserito un numero!"));
        }

        numeriUtente.push(sceltaUtente);

        if (numeriRandom.includes(numeriUtente[i])){

            numeriIndovinati.push(numeriUtente[i]);
        } else {
            numerisbagliati.push(numeriUtente[i]);
        };
    }

    alert(`Hai indovinato ${numeriIndovinati.length} numeri che sono: ${numeriIndovinati}`);
}, 30000);









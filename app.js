//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = 'Intento';
let maximosIntentos = 5;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número ente 1 y ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));
    /*Este codigo 
    realiza la comparación*/
    //La condición se cumple
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos' }`);
    } 
    //La condición NO se cumple
    else {
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }
        else{alert('El número secreto es mayor. ')}
        //Incrementamos el contado cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraIntentos = 'intentos.'
        if (intentos > maximosIntentos ){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos.`);
            break;
        }
    //  alert('Lo siento, no acertaste el número')
    }
}

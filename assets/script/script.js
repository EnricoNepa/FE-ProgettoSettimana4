let array = [];
let output = document.getElementById("output");

let isSomma = false;
let isSottrazione = false;
let isMoltiplicazione = false;
let isDivisione = false;
let operazione = false;
let primoOperando = array[0];
let secondaPartefloat = false;
let risultatoFinale = 0;
let outputPrev = document.getElementById("outputPrev");

function concatenaNum(num){
    if(array.length == 0 && operazione == false){
        array[0] = num;
    }else if(array.length == 1 && operazione == false){
        array[0] = parseInt(array[0].toString() + num.toString());
        risultatoFinale = array[0];
    }else if(array.length == 1 && operazione == true){
        array[1] = num;
    }else if(array.length == 2 && operazione == true){
        array[1] = parseInt(array[1].toString() + num.toString());
    }
}

function concatenaFloat(num){
    if(!operazione){
        array[0] = parseFloat(array[0] + num.toString());
        risultatoFinale = array[0];
    }
    else{
        array[1] = parseFloat(array[1] + num.toString());
    }
}

function virgola(){
    if(!operazione){
       
        let primaPartefloat = array[0].toString();
        primaPartefloat += ".";
        array[0] = primaPartefloat;
        secondaPartefloat = true;
        output.innerHTML = primaPartefloat;
    }
    else{
        let primaPartefloat = array[1].toString();
        primaPartefloat += ".";
        array[1] = primaPartefloat;
        secondaPartefloat = true;
        output.innerHTML = primaPartefloat;
    }
}

function aggiungiNum(numero){

    if(!secondaPartefloat){
        concatenaNum(numero);
    }
    else{
        concatenaFloat(numero);
    }
    if(!operazione)    
        output.innerHTML = array[0];
    else{
        output.innerHTML = array[1];
    }
}


function somma(){
    secondaPartefloat = false;
    operazione = true;
    output.innerHTML = "&nbsp";
    isSomma = true;
    isSottrazione = false;
    isDivisione = false;
    isMoltiplicazione = false;
    outputPrev.innerHTML = array[0];
    outputPrev.innerHTML = array[0].toString() + " +";
}

function sottrazione(){
    secondaPartefloat = false;
    operazione = true;
    output.innerHTML ="&nbsp";
    isSottrazione = true;
    isSomma = false;
    isDivisione = false;
    isMoltiplicazione = false;
    outputPrev.innerHTML = array[0].toString() + " -";
}

function moltiplicazione(){
    secondaPartefloat = false;
    operazione = true;
    output.innerHTML ="&nbsp";
    isSottrazione = false;
    isSomma = false;
    isDivisione = false;
    isMoltiplicazione = true;
    outputPrev.innerHTML = array[0];
    outputPrev.innerHTML = array[0].toString() + " ×";
}

function divisione(){
    secondaPartefloat = false;
    operazione = true;
    output.innerHTML ="&nbsp";
    isSottrazione = false;
    isSomma = false;
    isDivisione = true;
    isMoltiplicazione = false;
    outputPrev.innerHTML = array[0];
    outputPrev.innerHTML = array[0].toString() + " ÷";
}

function uguale(){
    outputPrev.innerHTML = "&nbsp";
    secondaPartefloat = false;
    if(operazione){
        if(isSomma){
            output.innerHTML = array[0] + array[1];
            risultatoFinale = array[0] + array[1];
            array = [];
            operazione = false;
        }else if(isSottrazione){
            output.innerHTML = array[0] - array[1];
            risultatoFinale = array[0] - array[1];
            array = [];
            operazione = false;
        }else if(isMoltiplicazione){
            output.innerHTML = array[0] * array[1];
            risultatoFinale = array[0] * array[1];
            array = [];
            operazione = false;
        }else if(isDivisione){
            output.innerHTML = array[0] / array[1];
            risultatoFinale = array[0] / array[1];
            array = [];
            operazione = false;
        }
    }
    else{
        output.innerHTML = risultatoFinale;
    }
}


function pulisci(){
    operazione = false;
    output.innerHTML ="&nbsp";
    isSottrazione = false;
    isSomma = false;
    isDivisione = false;
    isMoltiplicazione = false;
    array = [];
    risultatoFinale = "&nbsp";
    outputPrev.innerHTML = "&nbsp";
}
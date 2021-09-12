
totalIngresos = 0;
totalGastos = 0;


// funciones sumadoras 

function sumarIngresos() {
    for (let i = 0; i < misIngresos.length; i++) {
        totalIngresos = totalIngresos + misIngresos[i].monto
    }
    return totalIngresos;
}

function sumarGastos() {
    for (let i = 0; i < misGastos.length; i++) {
        totalGastos = totalGastos + misGastos[i].monto
    }
    return totalGastos;
}

// clase constructora de objetos

class Dinero {
    constructor(concepto, monto) {
        this.concepto = concepto.toUpperCase();
        this.monto = parseInt(monto);
    }
}

// Arrays agrupando objetos de ingreso/gasto
const misIngresos = [];
const misGastos = [];


// CARGA DE INGRESOS DEL USUARIO

for (let i = 1; i < 11; i++) {
    alert("Describa el ingreso n° " + i)
    let conceptoIngreso = prompt("Concepto del ingreso. Si desea salir sin colocar más nada, escriba " + "ESC");
    conceptoIngreso = conceptoIngreso.toUpperCase();
    
    if (conceptoIngreso != "ESC") {
        let montoIngreso = prompt("Monto del ingreso:");
        
        while (isNaN(montoIngreso) == true || parseInt(montoIngreso) < 0) {
            alert("ERROR. Sólo carácteres numéricos mayores a 0 válidos.");
            montoIngreso = prompt("Coloque nuevamente el monto del ingreso:");
            if (isNaN(montoIngreso) == false && (parseInt(montoIngreso) > 0)) {
                break;
            }
        }
        misIngresos.push(new Dinero(conceptoIngreso, montoIngreso)); //cargo al array de ingresos, el que cumplió el ciclo de validación con éxito
    }
    else {
        break;
    }
}


// CARGA DE GASTOS DEL USUARIO

for (let i = 1; i < 11; i++) {
    alert("Describa el gasto n° " + i)
    let conceptoGasto = prompt("Concepto del gasto. Si desea salir sin colocar más nada, escriba " + "ESC");
    conceptoGasto = conceptoGasto.toUpperCase();
    
    if (conceptoGasto != "ESC") {
        let montoGasto = prompt("Monto del gasto:");
        
        while (isNaN(montoGasto) == true || parseInt(montoGasto) < 0) {
            alert("ERROR. Sólo carácteres numéricos mayores a 0 válidos.");
            montoGasto = prompt("Coloque nuevamente el monto del gasto:");
            if (isNaN(montoGasto) == false && (parseInt(montoGasto) > 0)) {
                break;
            }
        }
        misGastos.push(new Dinero(conceptoGasto, montoGasto)); //cargo al array de gastos, el que cumplió el ciclo de validación con éxito
    }
    else {
        break;
    }
}


// MUESTRA DE SALDOS

sumarIngresos();
sumarGastos();
let saldo = totalIngresos - totalGastos;

alert(
    "Tienes un total de ingresos por la cantidad de: $" + totalIngresos +"\n"+
    "Tus gastos de este mes, suman: $" +totalGastos +"\n"+
    "Por lo tanto, tu saldo es de: $" + saldo);


// MUESTRA DE INFO DETALLADA

let mensajeIngresos = "";
for (let i = 0 ; i < misIngresos.length; i++){
    mensajeIngresos += "Concepto: " +misIngresos[i].concepto + " | Monto: $" +misIngresos[i].monto + '\n';
}

let mensajeGastos = "";
for (let i = 0 ; i < misGastos.length; i++){
    mensajeGastos += "Concepto: " +misGastos[i].concepto + " | Monto: $" +misGastos[i].monto + '\n';
}

alert(
    "\n"
    +"Tus ingresos:" +"\n" 
    +mensajeIngresos +"\n" 
    +"\n"
    +"Tus Gastos" +"\n"
    +mensajeGastos)
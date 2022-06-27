//---------------Variables Globales------------------------//
let empresa = parseInt(prompt("Ingrese el numero correspondiente a su Banco: Banco Nacion(1), Banco Provincia(2), Banco Macro(3)"));
let montoPrestamo = parseInt(prompt("Ingrese el monto que desea solicitar"));
let meses = parseInt(prompt("Ingrese la cantidad de meses (hasta 24 meses)"));
let interes = 0;
let tasaAnual = 0;
//---------------FIN-Variables Globales------------------------//
//---------------Funciones------------------------//
function interesPorMeses(meses){
    if (meses>18) {
        return 1.95
    } else if (meses>12) {
        return 1.56
    } else if (meses>6) {
        return 1.37
    } else {
        return 1.21
    }
}
function empresaSeleccionada(empresa){
    if (empresa===1) {
        return 0.053
    } else if (empresa===2) {
        return 0.053
    } else if (empresa===3) {
        return 0.058
    }
}
//---------------FIN- Funciones------------------------//
//---------------Validacion de Datos---------------------//
//---------------Ver si son numéricos---------------------//
while(isNaN(empresa)||isNaN(montoPrestamo)||isNaN(meses)){
    empresa = parseInt(prompt("Ingrese el NUMERO correspondiente a su Banco: Banco Nacion(1), Banco Provincia(2), Banco Macro(3)"));
    montoPrestamo = parseInt(prompt("Ingrese el monto que desea solicitar EN NUMEROS"));
    meses = parseInt(prompt("Ingrese la cantidad de meses (hasta 24 meses) EN NUMEROS"));
}
//---------------Ver si cumplen las condiciones------------------------//

if (empresa===1||empresa===2||empresa===3){
    tasaAnual = empresaSeleccionada(empresa)
} else {
    alert("Los valores son del 1 al 3: Banco Nacion(1), Banco Provincia(2), Banco Macro(3)");
}
if (meses>24){
        alert("El plazo debe ser menor a 24 meses");
    } else {
        interes = interesPorMeses(meses);
        let interesTotal = Math.round(montoPrestamo*interes + tasaAnual);
        alert(`Usted va a solicitar ${montoPrestamo} pesos argentinos, en un plazo de ${meses} meses. El monto total a pagar es de: ${interesTotal} pesos argentinos`);

}


let monto;
let cuotas;

function calcularPagoMensual(monto, cuotas) {
  if (isNaN(monto) || monto <= 0 || isNaN(cuotas) || cuotas <= 0) {
    //  Si los datos no son válidos
    return "Por favor, ingrese montos y cuotas válidos.";
  }

  const pagoMensual = monto / cuotas;
  return pagoMensual.toFixed(2);
}


// Repetir el ingreso de datos hasta que sean datos validos
do {
  // Solicito al usuario que ingrese el monto
  monto = parseFloat(prompt("Ingrese el monto:"));

  // Verifico si el monto ingresado es válido
  if (isNaN(monto) || monto <= 0) {
    alert("Por favor, ingrese un monto válido.");
  }
} while (isNaN(monto) || monto <= 0);

do {
  // Solicito al usuario que ingrese el numero de cuotas
  cuotas = parseInt(prompt("Ingrese el número de cuotas:"));

  // Verifico si el numero de cuotas es valido
  if (isNaN(cuotas) || cuotas <= 0) {
    alert("Por favor, ingrese un número de cuotas válido.");
  }
} while (isNaN(cuotas) || cuotas <= 0);

// Calculo el pago mensual y muestro el desglose de las cuotas 
let pagoMensual = calcularPagoMensual(monto, cuotas);
console.log(`Desglose de cuotas para un monto de $${monto.toFixed(2)} en ${cuotas} cuotas:`);

for (let i = 1; i <= cuotas; i++) {
  console.log(`Cuota ${i}: $${pagoMensual}`);
}



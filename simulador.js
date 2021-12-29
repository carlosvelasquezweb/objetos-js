//Objeto Prestamo

class Prestamo {
    constructor(monto, cuotas) {
        this.monto = monto,
            this.cuotas = cuotas,
            this.iva = 1.21,
            this.calcular = function () {

                let porcentaje,
                    recargo,
                    intereses,
                    totalCuotas,
                    totalPrestamo;

                /*
                    Creamos una constante llamada "formatearMonedaMoneda" con el constructor para objetos
                    "Intl.NumberFormat" que permite darle un formato numérico a la moneda sensible al idioma de Argentina.
                */
                const formatearMoneda = new Intl.NumberFormat('es-AR', {
                    style: 'currency',
                    currency: 'ARS',
                    minimumFractionDigits: 0
                })

                /*
                    # Cuotas ingresa en los condicionales
                    # El interes cambia de acuerdo a la cantidad de cuotas
                    # El resultado se imprime mediante una tabla de "console.table"
                */
                if (this.cuotas > 0 && this.cuotas <= 3) {
                    recargo = 0.03148 + this.iva;
                    porcentaje = this.monto * recargo;
                    intereses = this.monto * recargo - this.monto;
                    totalCuotas = porcentaje / this.cuotas;
                    totalPrestamo = totalCuotas * this.cuotas;
                    return console.table([`Monto solicitado: ${formatearMoneda.format(this.monto)}`, `${this.cuotas} cuotas C/U: ${formatearMoneda.format(totalCuotas.toFixed(2))}`, `Intereses Totales: ${formatearMoneda.format(intereses.toFixed(2))}`, `Total a pagar + IVA: ${formatearMoneda.format(totalPrestamo)}`]
                    );
                } else if (cuotas > 3 && cuotas <= 6) {
                    recargo = 0.0601 + this.iva;
                    porcentaje = this.monto * recargo;
                    intereses = this.monto * recargo - this.monto;
                    totalCuotas = porcentaje / this.cuotas;
                    totalPrestamo = totalCuotas * this.cuotas;
                    return console.table([`Monto solicitado: ${formatearMoneda.format(this.monto)}`, `${this.cuotas} cuotas C/U: ${formatearMoneda.format(totalCuotas.toFixed(2))}`, `Intereses Totales: ${formatearMoneda.format(intereses.toFixed(2))}`, `Total a pagar + IVA: ${formatearMoneda.format(totalPrestamo)}`]
                    );
                } else if (cuotas > 6 && cuotas <= 12) {
                    recargo = 1.1148 + this.iva;
                    porcentaje = this.monto * recargo;
                    intereses = this.monto * recargo - this.monto;
                    totalCuotas = porcentaje / this.cuotas;
                    totalPrestamo = totalCuotas * this.cuotas;
                    return console.table([`Monto solicitado: ${formatearMoneda.format(this.monto)}`, `${this.cuotas} cuotas C/U: ${formatearMoneda.format(totalCuotas.toFixed(2))}`, `Intereses Totales: ${formatearMoneda.format(intereses.toFixed(2))}`, `Total a pagar + IVA: ${formatearMoneda.format(totalPrestamo)}`]
                    );
                } else if (cuotas > 12 && cuotas <= 18) {
                    recargo = 1.1652 + this.iva;
                    porcentaje = this.monto * recargo;
                    intereses = this.monto * recargo - this.monto;
                    totalCuotas = porcentaje / this.cuotas;
                    totalPrestamo = totalCuotas * this.cuotas;
                    return console.table([`Monto solicitado: ${formatearMoneda.format(this.monto)}`, `${this.cuotas} cuotas C/U: ${formatearMoneda.format(totalCuotas.toFixed(2))}`, `Intereses Totales: ${formatearMoneda.format(intereses.toFixed(2))}`, `Total a pagar + IVA: ${formatearMoneda.format(totalPrestamo)}`]
                    );
                }
            }
    }
}

/*  
    #1 - Solicitamos los valores al usuario mediante las variales monto & cuotas a traves de un prompt
    #2 - Creamos una constante llamada "prestamo" 
    #3 - Le asignamos el constructor para crear un nuevo objeto llamado "prestamo"
    #4 - Le pasamos por paramentros las variables(monto & cuotas), que necesita el objeto para realizar las operaciones.
    #5 - Con el nuevo objeto "prestamo" creado, llamado a su metodo "calcularPrestamo() quien es el encargado de realizar la operación y emitir el resultado" 
*/
let monto, cuotas;

monto = Number.parseInt(prompt('¡Ingrese el monto que desea solicitar!'));
cuotas = Number.parseInt(prompt('¡Ingrese el numero de cuotas que desea para su prestamo!'));

const prestamo = new Prestamo(monto, cuotas);
prestamo.calcular();


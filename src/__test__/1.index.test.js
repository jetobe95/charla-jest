/*
    Jeffrey Torres Bello
    Desarrollador: React y Flutter
    Estoy en Pragma desde hace 4 meses 
*/

// Pruebas unitarias
// ¿Por que hacer pruebas unitarias?
/*


Ventajas de hacer pruebas 
- Asegurar que nuestro codigo coincida con los requisitos de desarrollo
- Reduce los errores
- Ayuda a mejorar la capacidad de mantenimiento

Contras:
- Requiere de una esfuerzo adicional para mantener las pruebas

Hay dos opciones:
- Pruebas manuales: una persona encargada de hacer pruebas manualmente
- Prueba automaticas: Jest 
*/

/// ¿han usado jest?
/*
 *   ! En Jest tenemos Matchers o comparators
     * 1. el llamado a la funcion expect(2+2)  retorna un objeto expectation, que contiene comparadores(Matchers)
     * 2. .toBe(4), jest rastrea todos los comparadores que fallan para 
     * que pueda imprimir mensajes de error agradable. 
     * 
     * Tipos de Comparadores
     * 1. Veracidad (Truthiness)
     *   toBeNull(),toBeUndefined(),toBeDefined(),toBeTruthy(),toBeFalsy()
     * 
     * 2. Numericos
     *  toBeGreaterThan(),toBeGreaterThanOrEqual(),
     * 
     * 3. Strings
     *  toMatch(/regex/)
     * 
     * 4. Arrays e iterables
     * toContain()
     * 
     * 5. Exceptions: Para probar si una funcion lanza un error
     *  toThrow()
    
 */


/**
 * * Estrucura de un test
 */

test('Describir que debe pasar, ej: Al sumar 2 + 2 debe ser 4', () => {
    expect(2 + 2).toBe(4)
})

// * Luego ejecutamos en la termina npm test




test('Mayor que', () => {
    expect(10).toBeGreaterThan(4)
});


const frutas = ['piña','manzana','banana']

test('Debe contener una banana ', () => {
    expect(frutas).toContain('banana')
})




test('ejemplo: Verdadero y Falso', () => {
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
})






/// Ej funcion externa
const reverseString = require('../index')

test('Debe colocar el texto alreves', () => {
    const textReverse = reverseString('Pragma')
    expect(textReverse).toMatch('amgarP')
})





/// * Afirmaciones con objetos
const user = {
    name: 'Pragma',
    age: 25,
    location: 'Medellín'
}


// * toEqual compara de manera de recursiva las propiedad de las instancia de los objetos
// * llama Object.is para comparar valores primitivos
test('Debe tener un nombre', () => {
    const clone = {
        name: 'Pragma',
        age: 25,
        location: 'Medellín'

    }
    expect(user).toEqual(clone)

    
    // Aca .toBe compara que el sea la misma referencia al objeto
    expect(user).not.toBe(clone)




})


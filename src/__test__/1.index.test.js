test('Describir que va a pasar, ej: Debe contener un text', () => {
    expect('hola Pragma').toMatch(/Pragma/)
})

/// para ejecutar la prueba : npm test 









test('Mayor que', () => {
    expect(10).toBeGreaterThan(4)
})














test('Verdadero y Falso', () => {
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
})






/// Ej funcion externa
const reverseString = require('../index')

test('reverseString', () => {
    expect(reverseString('Pragma')).toBe('amgarP')
})





/// Afirmaciones con objectos
const user = {
    name: 'Pragma',
    age: 25,
    location: 'Medellín'
}


// toEqual compara de manera de recursiva las propiedad de  las instancias de objetos
// llama Object.is para comparar valores primitivos
test('Debe tener un nombre', () => {
    const clone = {
        name: 'Pragma',
        age: 25,
        location: 'Medellín'

    }
    expect(user).toEqual(clone)

    
    // Aca .toBe compara que el sea la misma referencia al objecto
    expect(user).not.toBe(clone)




})


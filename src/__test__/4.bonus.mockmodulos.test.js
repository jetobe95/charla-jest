
/**
 * * Realizar mocks nos permiten realizar las pruebas en un entonrno controlado
 **  Candidatos típicos para mock:
 *   *  Llamadas  la API`s externas
 *   * Consultas de bases de datos simuladas
 *   * Condiciones simuladas difíciles de generar en un entorno de prueba
 */


const SoundPlayer = require("../sound-player");

jest.mock('../sound-player', () => {
    return class {
        playSoundFile = () => {
            return "playSoundFile from mock"
        }
    }
})


test('playSoundFile', () => {
    const output = new SoundPlayer().playSoundFile()
    expect(output).toBe("playSoundFile from mock")
})

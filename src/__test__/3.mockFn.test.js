/**
 * jest.fn();
 * Son tambien conocidas como espias, porque te permiten espiar el comportamiento de una funcion.
 */

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

test('Debe llamar a la funcion spy con ciertos parametros', () => {
    const spy = jest.fn();

    forEach([0, 1], spy);

    expect(spy).toBeCalledWith(0); // expect(mockCallback).toHaveBeenCalledWith(0);

    expect(spy).toBeCalledWith(1);


    // la propiedad .mock de spy almacena ¿como fue llamada? y ¿con que parametros?
    expect(spy.mock.calls.length).toBe(2);
    expect(spy).toBeCalledTimes(2);

})

test('Debe mockear las respuestas de la funcion', () => {
    const myMockFn = jest
        .fn(() => 'default') //.mockImplementation(() => 'default')
        .mockImplementationOnce(() => 'first call')
        .mockImplementationOnce(() => 'second call');

    expect(myMockFn()).toBe('first call');
    expect(myMockFn()).toBe('second call');
    expect(myMockFn()).toBe('default');
    expect(myMockFn()).toBe('default');
})




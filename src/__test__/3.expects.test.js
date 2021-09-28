const user1 = {
    name: 'John',
    age: 30,
};
const user2 = {
    name: 'Daniel',
    age: 40,
};
const users = [
    user1,
    user2,
]
test('expect.arrayContaining, Debe contener un usuario', () => {
    expect(users).toEqual(expect.arrayContaining([
        expect.objectContaining(user1),
    ]));
})





class User  {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /**
     * Crea un string del html
     */
    render() {
        return `<div>
                <h1>${this.name}</h1>
                <h2>${this.age}</h2>
            </div>`
    }
}



test('expect.any', () => {
    const user = new User('John', 30);

    expect(user.age).toEqual(expect.any(Number))
    expect(user.name).toEqual(expect.any(String))

    expect(user).toEqual(expect.any(User))
})



/// Snapshot testing
/// utiles para comprobar que una UI no cambia de forma inesperada
test('renderea correactamente', () => {
    const user = new User('John', 30);

    expect(user.render()).toMatchSnapshot()

    /// sopongamos que el dia de mañana un compañero cambia el html
})


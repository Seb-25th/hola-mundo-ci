const holaMundo = require('./app');

test('Debe retornar "Hola Mundo"', () => {
    expect(holaMundo()).toBe("Hola Mundo");
});

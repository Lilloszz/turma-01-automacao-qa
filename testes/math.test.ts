import {test, describe, expect} from 'vitest'

describe('Calcular raiz quadrada de um número', () => {

    test('Retornar raiz quadrada de um número perfeito', () => {

        expect(Math.sqrt(4)).toBe(2)
        expect(Math.sqrt(9)).toBe(3)
    });

    test('Retornar NAN se o número for negativo', () => {

        expect(Math.sqrt(-1)).toBeNaN()
    });

    test('Retornar 0 se o número informado for 0', () => {

        expect(Math.sqrt(0)).toBe(0)
    });
})
import {expect, describe, test} from 'vitest'

function login (username: string, password: string): boolean {
    return username === 'baratino' && password === '123456789';
}

test('Permitir fazer login com credenciais válidas', () => {
    const efetuandoLogin = login('baratino', '123456789')
    expect(efetuandoLogin).toBe(true)
});

describe ('Negar login com credenciais inválidas', () => {

    test('Negar login com senha incorreta', () => {
        const efetuandoLogin = login('baratino', '12345')
        expect(efetuandoLogin).toBe(false)
    });
    
     test('Negar login com usuário incorreto', () => {
        const efetuandoLogin = login('rei ratão', '123456789')
        expect(efetuandoLogin).toBe(false)
    });

     test('Negar login com usuário e senha incorretos', () => {
        const efetuandoLogin = login('rei ratão', '12345')
        expect(efetuandoLogin).toBe(false)
    });

     test('Negar login com campos vazios', () => {
        const efetuandoLogin = login('', '')
        expect(efetuandoLogin).toBe(false)
    });
})

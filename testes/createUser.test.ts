import {expect, test} from 'vitest'

interface User {
    nome: string;
    idade: number;
}

function createUser(nome: string, idade: number): User {
    return {nome, idade}
}

test('Criar um usuário com nome e idade', () => {

    const user = createUser('Murillo', 19)

    expect(user).toEqual({nome: 'Murillo', idade: 19});
    expect(user.nome).toBe('Murillo')
})
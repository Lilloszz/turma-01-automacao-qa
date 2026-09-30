// Imports do Vitest para realizar os testes
import { expect, test } from 'vitest'


// Interface que define a estrutura de um dinossauro no sistema
export interface Dinossauro {
  id: number
  nome: string
  carnivoro: boolean
}

// Array de objetos contendo informações sobre os dinossauros
export const dinossauros: Dinossauro[] = [
  { id: 1, nome: 'Tyrannosaurus Rex', carnivoro: true },
  { id: 2, nome: 'Triceratops', carnivoro: false },
  { id: 3, nome: 'Velociraptor', carnivoro: true },
  { id: 4, nome: 'Brachiosaurus', carnivoro: false }
]

// Função que simula uma busca de dados
export function buscarDinossauros(): Promise<Dinossauro[]> {
  return new Promise((resolve) => {
      resolve(dinossauros)
    }, 1000)
  })
}

// Função assíncrona que utiliza async/await
export async function obterCarnivoros(): Promise<Dinossauro[]> {
  // O await espera a Promise de buscarDinossauros()
  // ser resolvida antes de continuar a execução.
  const dados = await buscarDinossauros()

  // Depois que os dados são recebidos, o array é filtrado
  // para encontrar apenas os dinossauros carnívoros.
  const carnivoros = dados.filter((dinossauro) => dinossauro.carnivoro)

  return carnivoros
}



// Teste da Promise simulada
test('Deve retornar todos os dinossauros', async () => {
  const resultado = await buscarDinossauros()

  expect(resultado).toHaveLength(4)

  // Verifica o primeiro dinossauro
  expect(resultado[0].nome).toBe('Tyrannosaurus Rex')
})

// Teste da função assíncrona
test('Deve retornar apenas os dinossauros carnívoros', async () => {
  const resultado = await obterCarnivoros()

  // Existem 2 dinossauros carnívoros
  expect(resultado).toHaveLength(2)

  // Verifica os nomes dos dinossauros retornados
  expect(resultado[0].nome).toBe('Tyrannosaurus Rex')
  expect(resultado[1].nome).toBe('Velociraptor')

  // Garante que um dinossauro herbívoro não foi retornado
  expect(resultado).not.toContain({
    id: 2,
    nome: 'Triceratops',
    carnivoro: false
  })
})
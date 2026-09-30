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
    setTimeout(() => {
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

  // Retorna o resultado final.
  return carnivoros
}



// Teste da Promise simulada
test('Deve retornar todos os dinossauros', async () => {
  const resultado = await buscarDinossauros()

  // Verifica se foram retornados 4 dinossauros
  expect(resultado).toHaveLength(4)

  // Verifica o primeiro dinossauro
  expect(resultado[0].nome).toBe('Tyrannosaurus Rex')
});

// Teste da função assíncrona
test('Deve retornar apenas os dinossauros carnívoros', async () => {
  // Aguarda a função assíncrona terminar
  const resultado = await obterCarnivoros()

  expect(resultado).toHaveLength(2)

  expect(resultado[0].nome).toBe('Tyrannosaurus Rex')
  expect(resultado[1].nome).toBe('Velociraptor')

  expect(resultado).not.toContain({
    id: 2,
    nome: 'Triceratops',
    carnivoro: false
  });
});

// Teste utilizando .map()
test('Deve retornar apenas os nomes dos dinossauros', async () => { 
const resultado = await buscarDinossauros()
const nomes = resultado.map((dinossauro) => dinossauro.nome) 

expect(nomes).toEqual([ 'Tyrannosaurus Rex', 'Triceratops', 'Velociraptor', 'Brachiosaurus' ])
})

test('Deve contar quantos dinossauros são carnívoros', async () => {
const resultado = await buscarDinossauros()
const quantidadeCarnivoros = resultado.reduce( 
    (total, dinossauro) => { 
    if (dinossauro.carnivoro) { 
        return total + 1
        }
     return total 
      }, 
      0 )
expect(quantidadeCarnivoros).toBe(2) })


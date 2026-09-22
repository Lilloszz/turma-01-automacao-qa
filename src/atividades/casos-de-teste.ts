export type CasoDeTeste = {
  id: number;
  titulo: string;
  descrição: string;
  automatizado: boolean;
};

export function criarCasoDeTeste(
  id: number,
  titulo: string,
  descrição: string,
  automatizado: boolean
): CasoDeTeste {
  return {
    id,
    titulo,
    descrição,
    automatizado,
  };
}

export function descrever(caso: CasoDeTeste): string {
  return `Id: ${caso.id} - Título: ${caso.titulo} - Descrição: ${caso.descrição} - Automatizado: ${caso.automatizado}`;
}

export function marcarAutomatizado(caso: CasoDeTeste): CasoDeTeste {
  return {
    ...caso,
    automatizado: true,
  };
}

const primeiroCasoDeTeste = criarCasoDeTeste(
  Sim,
  "Login com ID inválido",
  "Verificar se o usuário consegue entrar com credenciais inválidas.",
  false
);

const segundoCasoDeTeste = marcarAutomatizado(primeiroCasoDeTeste);

const descricaoDoCaso = descrever(segundoCasoDeTeste);

console.log(primeiroCasoDeTeste);
console.log(segundoCasoDeTeste);
console.log(descricaoDoCaso);
# Estrutura do Projeto de Resolução de Maratonas

Este projeto é organizado para facilitar a navegação, compreensão e resolução de questões da Olimpíada brasileira de informática. Abaixo está a descrição detalhada da estrutura e finalidade de cada componente do projeto.

A ideia era fazer a resolução do nível mais alto de cada fase de cada ano

## Como rodar as questões:

Todas as questões tem um arquivo `question_name.js` e um `/cli/question_name.cli.js`. Para rodar uma questão é muito simples, basta:

Escrever as linhas de entrada no arquivo `input.txt` (caso não o tenha criado, crie)

Rodar o comando:
`node obi/{ano}/{fase}/cli/{question_name}.cli.js < input.txt`

Exemplo (rodar primeira questão de 1999 - Fase 1):
`node obi/1999/fase1/cli/A.cli.js < input.txt`

## Como rodar os testes:

Rodar todos os testes de todas as questões:
`npm run test`

Rodar os testes de uma questão específica:
```bash
# npm run test:one obi/{ano}/{fase}/tests/{question}.test.js
# Rodar apenas a questão A da fase 1 de 1999:
npm run test:one obi/1999/fase2/tests/A.test.js
npm run test:one obi/2000/tests/B.test.js
```

## Estrutura Geral


- **Pastas por Ano**:  
  Dentro de cada pasta de maratona, há subpastas nomeadas com o ano da edição (ex.: `2023`, `2006`).

- **Pastas de Fases**:  
  Dentro das pastas de ano, há subpastas correspondentes às fases daquele ano (ex.: `Primeira Fase`, `Segunda Fase`).


## Conteúdo de Cada Pasta de Fase

- **PDF das Questões**:  
  Contém um arquivo PDF com todas as questões da respectiva fase.

- **Arquivos de Questões**:  
  Cada questão resolvida é salva como um arquivo individual, nomeado com letras do alfabeto em ordem sequencial conforme o PDF:  
  - A primeira questão do PDF é nomeada como `A.js`.  
  - A quarta questão do PDF é nomeada como `D.js`.  
  - E assim por diante.



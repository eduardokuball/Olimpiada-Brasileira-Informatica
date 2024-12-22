# Estrutura do Projeto de Resolução de Maratonas

Este projeto é organizado para facilitar a navegação, compreensão e resolução de questões de diversas maratonas de programação. Abaixo está a descrição detalhada da estrutura e finalidade de cada componente do projeto.

## Estrutura Geral

- **Pastas de Maratonas**:  
  Cada maratona é representada por uma pasta nomeada com o título correspondente à maratona (ex.: `OBI`, `Maratona Brasileira`, etc.).

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

## Arquivos Complementares em Cada Pasta de Maratona

1. **`tester.html`**:  
   - Um arquivo HTML usado para testar as soluções das questões.

2. **`Developmentofthequestions`**:  
   - Arquivo destinado a anotações sobre a lógica e o raciocínio usados na resolução de questões.  
   - Útil para documentar o progresso e as ideias ao resolver problemas.

3. **`QuestionsAsked`**:  
   - Lista cronológica das questões já resolvidas, seguindo o formato:  
     `ano/fase/nome-da-questão`.

4. **`readme`**:  
   - Um arquivo que contém observações sobre questões incompletas ou em progresso, detalhando o que falta para finalizá-las.

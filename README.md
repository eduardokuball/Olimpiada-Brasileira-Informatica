# 🧠📚 OBI – Resolução de Maratonas de Programação

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen?logo=jest)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Contributions](https://img.shields.io/badge/contributions-welcome-orange)

---

## 📌 Resumo

Este repositório reúne resoluções de questões da **Olimpíada Brasileira de Informática (OBI)**, com foco no nível mais avançado de cada fase ao longo dos anos.

O objetivo principal é servir como material de estudo e prática para quem deseja evoluir em **algoritmos**, **estruturas de dados** e **programação competitiva**.

---

## 📑 Sumário

* [📌 Resumo](#-resumo)
* [🎯 Objetivo do Projeto](#-objetivo-do-projeto)
* [🗺️ Mapa de Questões](#️-mapa-de-questões)
* [📁 Estrutura de Pastas](#-estrutura-de-pastas)
* [▶️ Como Rodar as Questões](#️-como-rodar-as-questões)
* [🧪 Como Rodar os Testes](#-como-rodar-os-testes)
* [🤝 Como Contribuir](#-como-contribuir)
* [👨‍💻 Sobre](#-sobre)

---

## 🎯 Objetivo do Projeto

A ideia inicial era resolver apenas algumas questões conforme o tempo permitisse.
No entanto, com o avanço do projeto, surgiu um objetivo maior:

> 💡 Resolver **todas as questões do nível mais alto de cada fase de cada ano da OBI**

Hoje, o repositório conta com:

* ✅ +250 questões resolvidas
* 📆 Diversos anos cobertos
* 🧩 Problemas que vão do nível básico ao avançado

---

## 🗺️ Mapa de Questões

As questões estão organizadas por:

* 📅 **Ano**
* 🥇 **Fase**
* 🔤 **Letra (ordem no PDF)**

Isso facilita a navegação e permite estudar de forma progressiva.

---

## 📁 Estrutura de Pastas

```
obi/
 ├── 1999/
 │    ├── fase1/
 │    │    ├── A.js
 │    │    ├── B.js
 │    │    ├── cli/
 │    │    ├── tests/
 │    │    └── pdf/
 │    └── fase2/
 ├── 2000/
 └── ...
```

### 📂 Organização

* **Pastas por Ano**
  Cada edição possui sua própria pasta (`1999`, `2000`, etc.)

* **Pastas por Fase**
  Dentro de cada ano:

  * `fase1`
  * `fase2`

* **Arquivos de Questões**

  * `A.js`, `B.js`, `C.js`...
  * Nomeados conforme a ordem no PDF

* **CLI**

  * Scripts para execução via terminal

* **Testes**

  * Arquivos automatizados para validação

---

## ▶️ Como Rodar as Questões

Cada questão possui:

* Um arquivo principal:
  `question_name.js`

* Um CLI correspondente:
  `/cli/question_name.cli.js`

### 📥 Passo a passo:

1. Crie um arquivo `input.txt`
2. Insira os dados de entrada
3. Execute:

```bash
node obi/{ano}/{fase}/cli/{question_name}.cli.js < input.txt
```

### 💡 Exemplo:

```bash
node obi/1999/fase2/cli/A.cli.js < input.txt
```

---

## 🧪 Como Rodar os Testes

### Rodar todos os testes:

```bash
npm run test
```

### Rodar teste específico:

```bash
npm run test:one obi/{ano}/{fase}/tests/{question}.test.js
```

### 💡 Exemplos:

```bash
npm run test:one obi/1999/fase2/tests/A.test.js
npm run test:one obi/2000/tests/B.test.js
```

---

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! 🚀

Você pode:

* 🐛 Reportar bugs
* 💡 Sugerir melhorias
* ⚡ Otimizar soluções
* 🧪 Adicionar testes

### Passos:

1. Faça um fork do projeto
2. Crie uma branch
3. Faça suas alterações
4. Abra um Pull Request

---

## 👨‍💻 Sobre

Meu nome é **Eduardo Kuball**, tenho 21 anos, moro na cidade de Arroio dos Ratos e sou técnico em Informática pelo **IFSul – Campus Charqueadas**, desenvolvi o repositório juntamente com meu amigo **Gustavo Rutkowski**, que possui 18 anos, mora na cidade de Charqueadas e atualmente esta no último ano do curso para se tornar também técnico em informática .

Atualmente trabalho como analista de suporte técnico na **TMW Telecom** e moro em **Arroio dos Ratos**.

Este projeto foi iniciado em **dezembro de 2024**, com o objetivo de preparação para:

* 🧠 OBI
* 🏆 Maratona da SBC
* 💻 CharCode
* 🎯 Maratona do IFRS (Osório)

---

## 🤖 Sobre o uso de IA

A IA foi utilizada como ferramenta de apoio para:

* 🔍 Debug
* 🧪 Testes
* 📖 Entendimento de problemas

❗ **Importante:**
Nenhuma solução foi gerada completamente por IA.

Acreditamos que a IA deve ser usada como suporte ao aprendizado — e não como substituição do raciocínio.

---

## 💬 Contato

Caso tenha dúvidas, sugestões ou encontre algum problema:

📩 Fique à vontade para entrar em contato ou abrir uma issue!

---

## ⭐ Considerações finais

Esperamos que este repositório ajude você na sua jornada em programação competitiva.

> 🚀 Bons estudos e boas maratonas!

# ChatbotSocket

Este projeto é um aplicativo de chatbot simples desenvolvido em Node.js utilizando sockets TCP, criado para a disciplina de Fundamentos de Redes de Computadores.

## Descrição

O sistema simula um chatbot de cinema, chamado **CinemaBot**, que responde a perguntas pré-definidas sobre filmes em cartaz, preços de ingressos, localização do cinema, entre outros. A comunicação entre cliente e servidor é feita via sockets, demonstrando conceitos básicos de redes de computadores.

## Arquivos

- `servidor.js`: Código do servidor que gerencia as conexões e responde às perguntas dos clientes.
- `cliente.js`: Código do cliente que se conecta ao servidor e permite enviar perguntas ao chatbot.

## Como executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Abra dois terminais na pasta do projeto.
3. No primeiro terminal, inicie o servidor:
   ```bash
   node servidor.js
   ```
4. No segundo terminal, inicie o cliente:
   ```bash
   node cliente.js
   ```
5. Interaja com o CinemaBot enviando perguntas ou digitando "sair" para encerrar.

## Exemplos de perguntas

- ola
- tudo bem?
- quais filmes estao em cartaz?
- quanto custa o ingresso?
- onde fica o cinema?
- sair

## Objetivo

O objetivo deste projeto é demonstrar, de forma prática, a comunicação entre processos via sockets TCP, reforçando os conceitos estudados na disciplina.

---
Desenvolvido para a disciplina de Fundamentos de Redes de Computadores.
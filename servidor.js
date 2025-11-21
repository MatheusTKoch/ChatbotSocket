import 'net';

const PORT = 3000;
const HOST = 'localhost';

const baseDeConhecimento = {
    "ola": "Olá! Bem-vindo ao CinemaBot. Como posso ajudar?",
    "tudo bem?": "Tudo ótimo! E com você?",
    "quais filmes estao em cartaz?": "Hoje temos: Duna Parte 2, Kung Fu Panda 4 e Guerra Civil.",
    "quanto custa o ingresso?": "O ingresso custa R$ 30,00 a inteira e R$ 15,00 a meia.",
    "onde fica o cinema?": "Ficamos no Shopping Central, 3º piso.",
    "sair": "Obrigado por utilizar nosso sistema! Até logo."
};


const server = net.createServer((socket) => {
    console.log('Cliente conectado ao Chatbot!');

    socket.write('Conectado ao CinemaBot! Pergunte algo ou digite "Sair" para encerrar.\n');

    socket.on('data', (data) => {
        const perguntaOriginal = data.toString().trim(); 
        const perguntaFormatada = perguntaOriginal.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        console.log(`Cliente perguntou: ${perguntaOriginal}`);

        if (baseDeConhecimento[perguntaFormatada]) {
            const resposta = baseDeConhecimento[perguntaFormatada];
            socket.write(`Bot: ${resposta}`);

            if (perguntaFormatada === 'sair') {
                socket.end(); 
            }
        } else {
            socket.write("Bot: Desculpe, não entendi sua pergunta. Pode tentar novamente?");
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });

    socket.on('error', (err) => {
        console.log(`Erro: ${err.message}`);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Servidor Chatbot rodando em ${HOST}:${PORT}`);
});

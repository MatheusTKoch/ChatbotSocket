const net = require('net');
const readline = require('readline');

const config = {
    port: 3000,
    host: 'localhost'
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.createConnection(config, () => {
    console.log('Conectado ao servidor! Pode começar a digitar...');
});

client.on('data', (data) => {
    console.log('\n' + data.toString()); 
    promptUsuario();
});

client.on('end', () => {
    console.log('Desconectado do servidor.');
    process.exit(0);
});


function promptUsuario() {
    rl.question('Você: ', (mensagem) => {
        client.write(mensagem);
    });
}
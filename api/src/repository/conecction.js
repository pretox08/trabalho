import mysql from 'mysql2/promise';

const conexao = await mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PWD
})

console.log('DB conectado');
export default conexao;
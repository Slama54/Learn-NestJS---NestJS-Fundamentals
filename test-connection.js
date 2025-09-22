
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'pass123',
  database: 'buccode-db'
});

async function test() {
  try {
    await client.connect();
    console.log('✅ Connexion réussie !');
    const res = await client.query('SELECT version()');
    console.log('Version PostgreSQL:', res.rows[0].version);
    await client.end();
  } catch (err) {
    console.error('❌ Erreur:', err.message);
  }
}

test();
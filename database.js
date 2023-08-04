import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "triwulandari3456",
  port: 5432,
});

export default client;
await client.connect();

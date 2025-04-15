export default () => {
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASS;
  const name = process.env.DB_NAME;
  const dialect = process.env.DB_DIALECT || 'postgres';

  const databaseUrl = `${dialect}://${user}:${pass}@${host}:${port}/${name}`;

  return {
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT ?? '3000', 10),
    databaseUrl,
  };
};

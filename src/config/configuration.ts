export default () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT ?? '3300', 10) || 3300,
  // databaseUrl: process.env.DATABASE_URL,
});

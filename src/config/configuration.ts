export default () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT ?? '3000', 10) || 3000,
  // databaseUrl: process.env.DATABASE_URL,
});

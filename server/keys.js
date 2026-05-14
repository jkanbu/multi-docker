module.exports = {
  // Using 'cache' and 'db' as defaults to match docker-compose service names
  redisHost: process.env.REDIS_HOST || 'cache',
  redisPort: process.env.REDIS_PORT || 6379,
  pgUser: process.env.PGUSER || 'postgres',
  pgHost: process.env.PGHOST || 'db',
  pgDatabase: process.env.PGDATABASE || 'mydatabase',
  pgPassword: process.env.PGPASSWORD || 'admin',
  pgPort: process.env.PGPORT || 5432,
};
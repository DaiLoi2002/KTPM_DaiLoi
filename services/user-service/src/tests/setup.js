const { AppDataSource } = require('../config/database');

beforeAll(async () => {
  // Initialize test database connection
  await AppDataSource.initialize();
});

afterAll(async () => {
  // Close database connection
  await AppDataSource.destroy();
});

beforeEach(async () => {
  // Clear all tables before each test
  const entities = AppDataSource.entityMetadatas;
  for (const entity of entities) {
    const repository = AppDataSource.getRepository(entity.name);
    await repository.clear();
  }
}); 
const request = require('supertest');
const { app, sequelize } = require('../app');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Products API', () => {
  test('creates a product', async () => {
    const res = await request(app)
      .post('/products')
      .send({ name: 'Beer', price: 5.0, quantity: 10 });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Beer');
  });

  test('lists products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(1);
  });
});

describe('Stock API', () => {
  test('lists stock items', async () => {
    const res = await request(app).get('/stock');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0].quantity).toBe(10);
  });
});

const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('debe responder con status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('debe responder con el mensaje correcto', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hola Mundo desde DevOps CI/CD!');
  });
});

describe('GET /health', () => {
  it('debe responder con status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

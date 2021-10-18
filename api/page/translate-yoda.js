require('dotenv').config();
const supertest = require('supertest');

const api = supertest(process.env.URL);

const postTrans = (text) => api.post(`/translate/yoda.json`).send()
.set('Content-Type','application/json')
.send(text)

module.exports = {
postTrans,

};
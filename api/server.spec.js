const server = require('./server');
const request = require('supertest');

describe('server.js', () => {
    describe('GET /', () => {
        // it("should respond with 200", () => {
        //     return request(server).get('/').then(res => {
        //         expect(res.status).toBe(200);
        //     }).catch();
        // })
        it("should respond with 200", () => {
            return request(server).get('/').expect(200);
        })
        // it("should return JSON", () => {
        //     return request(server).get('/').then(res => {
        //         expect(res.type).toBe('application/json');
        //     })
        // })
        it("should check for  JSON", () => {
            return request(server).get('/').
                expect('Content-Type', /json/);
            
        })
        it("should return JSON", async () => {
            const res = await request(server).get('/')
            expect(res.type).toBe('application/json');
        })
        it('should return { api: up }', () => {
            return request(server).get('/').then(res => {
                expect(res.body).toEqual({ api: 'up' });
            })
        })
    
    })
})
const axios = require('axios')
const request = require('supertest')
const jwt = require('jsonwebtoken')

jest.mock('axios')

const { createApp } = require('../app')
const appDataSource = require('../api/models/dataSource')

describe('Post / reviews', () => {
    let app;

    const TEST_TOKEN = jwt.sign(
            {userId:6},
            process.env.JWT_SECRET,
            {algorithm: process.env.JWT_ALGORITHM,
            expiresIn: process.env.JWT_EXPIRES_IN}
        )

    beforeAll(async() => {
        app = createApp()
        await appDataSource.initialize()
        await appDataSource.query(
            `INSERT INTO
                stores (
                    name,
                    thumbnail_image,
                    reservation_payment,
                    category,
                    phone_number,
                    address,
                    longitude,
                    latitude,
                    social_map_id
                ) VALUES (
                    'name',
                    'image.url',
                    100000,
                    'category',
                    'number',
                    'test address',
                    12.3123,
                    12.3123,
                    1231215
                )`
        )
    })

    afterAll(async() => {
        await appDataSource.query(`SET FOREIGN_KEY_CHECKS = 0`)
        await appDataSource.query(`TRUNCATE evaluations`);
        await appDataSource.query(`SET FOREIGN_KEY_CHECKS = 1`)
        await appDataSource.destroy();

    })

    test('SUCCESS: create evaluation', async() => {
        
        request(app)
            .post('/reviews')
            .set({
                Authorization: TEST_TOKEN
            })
            .send({
                storeId: 2,
                rating: 3,
                taste_rate: 1,
                price_rate: 2,
                service_rate: 3,
                image: 'image.url',
                content: "맛있어요"
            })
            .expect(201)
            .expect({message:"CREATED_REVIEW"})
    })

    test('FAILED: key error', async() => {
        
        request(app)
            .post('/reviews')
            .set({
                Authorization: 'invalid token'
            })
            .send({
                storeId: 2,
                taste_rate: 1,
                price_rate: 2,
                service_rate: 3,
                image: 'image.url',
                content: "맛있어요"
            })
            .expect(400)
            .expect({message:'KEY_ERROR'})
    })
    
    test('FAILED: unauthorized JWT token', async() => {
        
        request(app)
            .post('/reviews')
            .set({
                Authorization: 'invalid token'
            })
            .expect(401)
            .expect({message:'NEED_ACCESS_TOKEN'})
    })

    test('FAILED: unauthorized user', async() => {
        
        request(app)
            .post('/review')
            .set({
                Authorization: TEST_TOKEN
            })
            .expect(404)
            .expect({message:'USER_DOES_NOT_EXIST'})
    })
})
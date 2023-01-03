const axios = require('axios')
const request = require('supertest')

jest.mock('axios')

const { createApp } = require('../app')
const appDataSource = require('../api/models/dataSource')

describe('Kakao Sign In', () => {
    let app;

    beforeAll(async() => {
        app = createApp()
        await appDataSource.initialize()
        await appDataSource.query(
            `INSERT INTO
                users (
                    name,
                    email,
                    gender,
                    social_id
                ) VALUES (
                    'wecode2',
                    'wecode2@email.com',
                    'male',
                    '12345'
                )`)
    })

    afterAll(async() => {
        await appDataSource.query(`SET FOREIGN_KEY_CHECKS = 0`)
        await appDataSource.query(`TRUNCATE users`);
        await appDataSource.query(`SET FOREIGN_KEY_CHECKS = 1`)
        await appDataSource.destroy();

    })

    test('SUCCESS: created new user', async() => {

        const mockKakaoUserInfo = {
            sub: '12351',
            nickname: 'wecode',
            email: 'wecode@email.com',
            gender: 'male'
        }
        const mockKakaoTokenData = {
            data : {
                access_token: '123123123132'
            }
        }

        axios.mockReturnValue(mockKakaoTokenData)
        axios.mockReturnValue(mockKakaoUserInfo)
    
        request(app)
            .get('/users/signin')
            .set({
                Authorization: 'code'
            })
            .expect(200)
    })

    test('SUCCESS: if our service user, give JWT token', async() => {
        
        const mockKakaoUserInfo = {
            sub: '12345',
            nickname: 'wecode2',
            email: 'wecode2@email.com',
            gender: 'male'
        }
        const mockKakaoTokenData = {
            data : {
                access_token: '123123123132'
            }
        }

        axios.mockReturnValue(mockKakaoTokenData)
        axios.mockReturnValue(mockKakaoUserInfo)

        request(app)
            .get('/users/sign')
            .set({
                Authorization: 'code'
            })
            .expect(200)
    })

    test('FAILED: invalid code', async() => {
        request(app)
            .get('/users/signin')
            .set({
                Authorization: ''
            })
            .expect(500)
            .expect({message: 'Request failed with status code 400'})
    })    
})


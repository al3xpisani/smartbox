/* eslint-disable no-undef */
import request from 'supertest'
import app from '../../index'
import 'dotenv/config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

describe('Firebase Authentication Integration Test', () => {
    it('should authenticate with Firebase', async () => {
        const email = process.env.GOOGLE_USER
        const password = process.env.GOOGLE_PWD

        const auth = getAuth()
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        const response = await request(app)
            .get('/api/token')
            .set('email', email)
            .set('pwd', password)
            .set('Authorization', `Bearer ${userCredential.accessToken}`)
        const { isAuthenticated } = response
        expect(response.status).toBe(200)
        expect(isAuthenticated).toBeTruthy
    })
})

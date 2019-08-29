const request = require("supertest")
const app = require("../app")

// home page test
describe("test api: '/analyse/test'", () => {
    test("Should return details about the app", async () => {
        const response = await request(app).get("/analyse/test")
        expect(response.text).toEqual("This frontend application uses Aylien NLP service to analyze text and article links.")
        expect(response.statusCode).toEqual(200)
    })
})

// analyse api test
describe("test api: '/analyse'", () => {
    test("Should return 200 OK with response", async () => {
        const response = await request(app).post("/analyse").send({"text": "I feel so lonely", "isUrl": false})
        expect(response.statusCode).toEqual(200)
        expect(response.body.polarity).toEqual("negative")
    })
})
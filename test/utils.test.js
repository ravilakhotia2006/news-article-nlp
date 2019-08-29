const apiUtils = require("../app/utils/api")

describe("testing helper function", () => {
    test("Should return same response as given in browser", () => {
        return apiUtils.evaluateText({"text": "I feel so lonely"}).then((res) => {
            expect(res.text).toEqual("I feel so lonely")
            expect(res.polarity).toEqual("negative")
            expect(res.subjectivity).toEqual("subjective")
            expect(res.polarity_confidence).toBe(0.9998452663421631)
            expect(res.subjectivity_confidence).toBe(1)
        })
    })
})
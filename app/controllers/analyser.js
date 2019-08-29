// import api util
const apiHelper = require("../utils/api")

// Home Page
exports.getHomePage = (req, res) => {
    return res.send("This frontend application uses Aylien NLP service to analyze text and article links.")
}

// fetch api data
exports.getResult = (req, res) => {
    const body = req.body
    const data = body.isUrl === true ? {"url": body.text} : {"text": body.text}

    apiHelper.evaluateText(data).then((result) => {
        res.send(result)
    }).catch(err => {
        res.status(400).send({"error": err.message})
    })
}
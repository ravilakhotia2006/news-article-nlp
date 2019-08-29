// Import aylien Textapi  
const aylien = require("aylien_textapi")

// Instance of aylien app
const aylienApp = new aylien({
    application_id: "83fdf260",
    application_key: "524ae24b87b4576d9b54f3af73047f9d"
})

// Evaluate text using aylien api
exports.evaluateText = (data) => {
    return new Promise((resolve, reject) => {
        aylienApp.sentiment(data, (err, response) => {
            if(err === null) {
                resolve(response)
            } else {
                reject(err)
            }
        })
    })
}
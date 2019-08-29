// list of all const
const analyseApiUrl = "http://localhost:5000/analyse"
const results = document.getElementById("result-section")
const reviewText = document.getElementById("review_text")
const polarityResult = document.getElementById("polarity")
const polarityCResult = document.getElementById("polarity_confidence")
const subjectivityResult = document.getElementById("subjectivity")
const subjectivityCResult = document.getElementById("subjectivity_confidence")
const userInputField = document.getElementById("text-input")
const error = document.getElementById("error-field")
const loader = document.getElementById("loader")

// handle form submission
const handleSubmit = (event) => {
  event.preventDefault()
  const userInput = userInputField.value
  hideResultElement()

  callApi(userInput, isUrl(userInput)).then((res) => {
    res.error ? showError(res.error) : showResult(res)
  }).catch(err => {
    showError(err)
  })
}

// check if entered statement is a url or not
const isUrl = (text) => {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  return regex.test(text)
}

const callApi = (text, isUrl) => {
  const params = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const body = {
    text: text,
    isUrl: isUrl
  }

  params.body = JSON.stringify(body)
  return fetch(analyseApiUrl, params).then((res) => res.json())
}

const showError = (err) => {
  loader.style.display = "none"
  error.style.display = "block"
  error.innerHTML = err
}

const hideResultElement = () => {
  error.style.display = "none"
  results.style.display = "none"
  loader.style.display = "block"
}

const showResult = (result) => {
  loader.style.display = "none"
  results.style.display = "block"
  reviewText.children[0].innerHTML = result.text
  polarityResult.children[0].innerHTML = result.polarity
  polarityCResult.children[0].innerHTML = result.polarity_confidence
  subjectivityResult.children[0].innerHTML = result.subjectivity
  subjectivityCResult.children[0].innerHTML = result.subjectivity_confidence
}

export {
  handleSubmit
}

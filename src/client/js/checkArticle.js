function handleCheckArticle(event) {
  event.preventDefault();
  const testURL = document.getElementById("test-url").value;
  if (!testURL) 
    return;
  fetch("/checkArticle", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: testURL })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("polarity").innerHTML = data.polarity;
      document.getElementById("subjectivity").innerHTML = data.subjectivity;
      document.getElementById("polarity_confidence").innerHTML =
        data.polarity_confidence;
      document.getElementById("subjectivity_confidence").innerHTML =
        data.subjectivity_confidence;
      document.getElementById("excerpt").innerHTML = data.text;
    });
}

export { handleCheckArticle };

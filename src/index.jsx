function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = `a746fat433eb052605030e2eod760f33`;
let context = "be polite and provide a very short answer";
let prompt = "When was AI first created?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
console.log("Processing");
axios.get(apiUrl).then(showAnswer);

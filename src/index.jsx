function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = `a746fat433eb052605030e2eod760f33`;
let context =
  "be creative and provide a elquent poem in French based on the word(s) or phrase(s) entered";
let prompt = "Flower";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
console.log("Processing");
axios.get(apiUrl).then(showAnswer);

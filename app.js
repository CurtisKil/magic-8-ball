const message = document.querySelector(".message");
const question = document.querySelector("input");
const button = document.querySelector("button");
const answerArr = [
  "We shall see",
  "Possibly",
  "Most Def",
  "YES!",
  "Nope",
  "Of course",
];

button.addEventListener("click", function () {
  console.log(question.value);
  let res = Math.floor(Math.random() * answerArr.length);
  console.log(answerArr[res]);
  message.innerText = answerArr[res];
  question.value = "";
});

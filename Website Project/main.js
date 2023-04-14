//Elden Ring Website

//Add button even listener
document.getElementById("btn").addEventListener("click", btnClicked);

//Function
function btnClicked() {
  //get variables
  let question1 = document.getElementById("q1").value.toLowerCase();
  let question2 = document.getElementById("q2").value.toLowerCase();
  let question3 = document.getElementById("q3").value.toLowerCase();
  let question4 = document.getElementById("q4").value.toLowerCase();
  let question5 = document.getElementById("q5").value.toLowerCase();
  let output = document.getElementById("output");
  let total = 0;

  //Process and add up total
  if (question1 === "limgrave") {
    total = total + 1;
  }
  if (question2 === "malenia" || question2 === "malenia blade of miquella") {
    total = total + 1;
  }
  if (
    question3 === "godrick" ||
    question3 === "godrick the grafted" ||
    question3 === "renalla" ||
    question3 === "renalla queen of the full moon"
  ) {
    total = total + 1;
  }
  if (question4 === "rykard" || question4 === "rykard lord of blasphemy") {
    total = total + 1;
  }
  if (question5 === "radagon") {
    total = total + 1;
  }

  //Define number correct and percent
  let percent = total * 2;
  output.innerHTML = "Number Correct = " + total + "/5" + "(" + percent + "0%)";
}

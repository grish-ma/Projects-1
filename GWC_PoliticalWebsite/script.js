/* .js files add interaction to your website */

// var actionOne = document.getElementById("takeAction1");
// console.log("actionOne = " + actionOne);
// actionOne.addEventListener("click", actionPage);

// var actionTwo = document.getElementById("takeAction2");
// console.log("actionTwo = " + actionTwo);
// actionTwo.addEventListener("click", actionPage);

// // takeAction.addEventListener("click", displayMotivation); 
// function actionPage() {
//   console.log("actionPage");
  
// }


var nameOne = document.getElementById("Name1");
var nameTwo = document.getElementById("Name2");
var describeOne = document.getElementById("describe1");
var describeTwo = document.getElementById("describe2");
var line1One = document.getElementById("line1One");
var line1Two = document.getElementById("line1Two");
var line1Three = document.getElementById("line1Three");
var line2One = document.getElementById("line2One");
var line2Two = document.getElementById("line2Two");
var line2Three = document.getElementById("line2Three");

console.log("nameOne = " + nameOne);
console.log("nameTwo = " + nameTwo);
var inputButton = document.getElementById("inputButton");
console.log(inputButton);
inputButton.addEventListener("click", senator);

function senator(){
  var input = document.getElementById("inputText").value;
  if (input == "California")
  {
    nameOne.innerHTML = "Diane Feinstein";
    nameTwo.innerHTML = "Alex Padilla";
    
    describeOne.innerHTML = "Hometown: San Francisco";
    describeTwo.innerHTML = "Hometown: Porter Ranch";
    line1One.innerHTML = "331 Hart Senate Office Building";
    line1Two.innerHTML = "Washington DC 20510";
    line1Three.innerHTML = "(202) 224-3841";

    line2One.innerHTML = "112 Hart Senate Office Building";
    line2Two.innerHTML = "Washington DC 20510";
    line2Three.innerHTML = "(202) 224-3553";

    // faceOne.innerHTML = "<img src=\'https://replit.com/@GShukla/Abortion-Rights-Website#assets/white.png\' width=\'400px\' height=\'150px\'>";
    // faceTwo.innerHTML = "assets/CA1.jpg";\

    var faceOne = document.getElementById("whiteOne").src = "assets/CA1.jpg";
    var faceTwo = document.getElementById("whiteTwo").src = "assets/CA2.jpg";
  }


  if (input == "New York")
  {
    nameOne.innerHTML = "Charles E. Schumer (D)";
    nameTwo.innerHTML = "Kirsten E. Gillibrand (D)";
    
    describeOne.innerHTML = "Hometown: Brooklyn";
    line1One.innerHTML = "322 Hart Senate Office Building";
    line1Two.innerHTML = "Washington DC 20510";
    line1Three.innerHTML = "(202) 224-6542";

    describeTwo.innerHTML = "Hometown: Troy";
    line2One.innerHTML = "478 Russell Senate Office Building";
    line2Two.innerHTML = "Washington DC 20510";
    line2Three.innerHTML = "(202) 224-4451";

    // faceOne.innerHTML = "<img src=\'https://replit.com/@GShukla/Abortion-Rights-Website#assets/white.png\' width=\'400px\' height=\'150px\'>";
    // faceTwo.innerHTML = "assets/CA1.jpg";\

    var faceOne = document.getElementById("whiteOne").src = "assets/NY1.jpg";
    var faceTwo = document.getElementById("whiteTwo").src = "assets/NY2.jpg";
  }
}
var equation = false

function type1() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 1";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "1";
    }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type2() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 2";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "2";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type3() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 3";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "3";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type4() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 4";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "4";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type5() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 5";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "5";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type6() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 6";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "6";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type7() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "7";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "7";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type8() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 8";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "8";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type9() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 9";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "9";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type0() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 0";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "0";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function typeplus() {
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " +";
  equation = true;
}


function typeminus() {
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " -";
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " ";
  equation = true;
}

function typetimes() {
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " x";
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " ";
  equation = true;
}

function typedivide() {
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " ÷";
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " ";
  equation = true;
}

function calculate() {
  document.getElementById("calculation").innerText = document.getElementById("answer").innerText;
  var stora = "";
  const stuff = [];
  for (i in document.getElementById("answer")) {
    if (i === " ") {
      stuff.push(String(stora));
      var stora = "";
    }
    else {
      stora = String(stora) + String(i);
    }
}
document.getElementById("temporary2").innerText = "";
document.getElementById("answer").innerText = stuff;
}

// I don't know how to make a list and how to add it
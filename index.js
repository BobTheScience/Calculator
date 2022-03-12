let equation = false;

function type1() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 1";
  } else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "1";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type2() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 2";
  } else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "2";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type3() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 3";
  } else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "3";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type4() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 4";
  } else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "4";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type5() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 5";
  } else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "5";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type6() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 6";
  } else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "6";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type7() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "7";
  } else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "7";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type8() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 8";
  } else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "8";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type9() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 9";
  } else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "9";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function type0() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " 0";
  } else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "0";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function typeplus() {
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " +";
  document.getElementById("temporary").innerText = "";
  equation = true;
}


function typeminus() {
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " -";
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " ";
  document.getElementById("temporary").innerText = "";
  equation = true;
}

function typetimes() {
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " *";
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " ";
  document.getElementById("temporary").innerText = "";
  equation = true;
}

function typedivide() {
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " /";
  document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " ";
  document.getElementById("temporary").innerText = "";
  equation = true;
}

function typeleft() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " (";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + "(";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function typeright() {
  if (equation == true) {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + " )";
  }
  else {
    document.getElementById("answer").innerText = String(document.getElementById("answer").innerText) + ")";
  }
  document.getElementById("temporary").innerText = "";
  equation = false;
}

function clearAnswer() {
  document.getElementById("temporary").innerText = "0";
  document.getElementById("answer").innerText = "";
}

function backspace() {
  let tempAnswer = document.getElementById("answer").innerText;
  document.getElementById("answer").innerText = tempAnswer.substring(0, tempAnswer.length-1);
}

function calculate() {
  document.getElementById("calculation").innerText = document.getElementById("answer").innerText;
  if (document.getElementById("answer").innerText != "") {
    document.getElementById("temporary2").innerText = "";
  }
  // let t = -1;
  // let stora = String(document.getElementById("answer").innerText);
  // let later = String(document.getElementById("answer").innerText);
  // for (i in stora) {
  //   t += 1;
  //   if (i == "÷") {
  //     later[t] = "/";
  //   }
  //   if (i == "x") {
  //     later = later[0,t] + "*" + later[t + 1, -1]
  //   }
  // }
  document.getElementById("answer").innerText = eval(String(document.getElementById("answer").innerText));
  document.getElementById("temporary").innerText = "";
}

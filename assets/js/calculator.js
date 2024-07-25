// --- VARIABLES OF NUMBERS ----
let firstOperand = [];
let operator = null;
let secondOperand = [];
let currentArrayWorking = 0;
let isAnyKeyPressed = 0;

// --- DISPLAY DOM ---
const calcDisplay = document.getElementById("display");

// --- FUNCTION DOM ---
const clearBtn = document.getElementById("clearBtn");
const clearScreen = () => {
  resetStyles();
  operator = null;
  firstOperand = [];
  secondOperand = [];
  calcDisplay.textContent = "0";
};
clearBtn.addEventListener("click", () => {
  clearScreen();
});

// --- BUTTONS DOM ---
const zeroDigit = document.getElementById("body0Digit");
const oneDigit = document.getElementById("body1Digit");
const twoDigit = document.getElementById("body2Digit");
const threeDigit = document.getElementById("body3Digit");
const fourDigit = document.getElementById("body4Digit");
const fifthDigit = document.getElementById("body5Digit");
const sixthDigit = document.getElementById("body6Digit");
const seventhDigit = document.getElementById("body7Digit");
const eighthDigit = document.getElementById("body8Digit");
const ninthDigit = document.getElementById("body9Digit");
// FUNCTION BUTTONS
const decimalBtn = document.getElementById("decimalBtn");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const timesBtn = document.getElementById("timesBtn");
const divisionBtn = document.getElementById("divisionBtn");
const percentageBtn = document.getElementById("percentageBtn");
const changeSignBtn = document.getElementById("changeSignBtn");
const resultBtn = document.getElementById("resultBtn");

// --- UTIL FUNCTIONS ----
const arrayChooser = (number) => {
  if (operator === null) {
    currentArrayWorking = 0;
    firstOperand.push(number);
    updateDisplay(firstOperand);
  } else {
    currentArrayWorking = 1;
    secondOperand.push(number);
    updateDisplay(secondOperand);
  }
};
const checkMaxDecimals = (array) => {
  const isLimit = array.includes(".");
  if (isLimit === true) {
    decimalBtn.disabled = true;
  } else {
    decimalBtn.disabled = false;
  }
};
const checkMaxNumbers = (array) => {
  if (array.length >= 9) {
    array.splice(-1, 1);
    updateDisplay(array);
  }
};
const updateDisplay = (array) => {
  if (array[0] === 0) {
    array.splice(-1, 1);
    return (calcDisplay.textContent = 0);
  } else if (array.length === 0) {
    return (calcDisplay.textContent = 0);
  }
  calcDisplay.textContent = array.join("");
  utilRunFunctions(array);
};

const utilRunFunctions = (array) => {
  checkMaxNumbers(array);
  checkMaxDecimals(array);
};
const resetStyles = () => {
  plusBtn.style.backgroundColor = "#eab308";
  minusBtn.style.backgroundColor = "#eab308";
  timesBtn.style.backgroundColor = "#eab308";
  divisionBtn.style.backgroundColor = "#eab308";
  percentageBtn.style.backgroundColor = "#431407";
};

// --- NUM BUTTONS INTERACTION ---
zeroDigit.addEventListener("click", (e) => {
  arrayChooser(parseInt(e.target.innerText));
});
oneDigit.addEventListener("click", (e) => {
  arrayChooser(parseInt(e.target.innerText));
});
twoDigit.addEventListener("click", (e) => {
  arrayChooser(parseInt(e.target.innerText));
});
threeDigit.addEventListener("click", (e) => {
  arrayChooser(parseInt(e.target.innerText));
});
fourDigit.addEventListener("click", (e) => {
  arrayChooser(parseInt(e.target.innerText));
});
fifthDigit.addEventListener("click", (e) => {
  arrayChooser(parseInt(e.target.innerText));
});
sixthDigit.addEventListener("click", (e) => {
  arrayChooser(parseInt(e.target.innerText));
});
seventhDigit.addEventListener("click", (e) => {
  arrayChooser(parseInt(e.target.innerText));
});
eighthDigit.addEventListener("click", (e) => {
  arrayChooser(parseInt(e.target.innerText));
});
ninthDigit.addEventListener("click", (e) => {
  arrayChooser(parseInt(e.target.innerText));
});
decimalBtn.addEventListener("click", (e) => {
  arrayChooser(e.target.innerText);
});

// --- OPEATOR BUTTONS INTERACTION ---
plusBtn.addEventListener("click", () => {
  operator = "+";
  plusBtn.style.backgroundColor = "#eab20882";
});
minusBtn.addEventListener("click", () => {
  operator = "-";
  minusBtn.style.backgroundColor = "#eab20882";
});
timesBtn.addEventListener("click", () => {
  operator = "*";
  timesBtn.style.backgroundColor = "#eab20882";
});
divisionBtn.addEventListener("click", () => {
  operator = "/";
  divisionBtn.style.backgroundColor = "#eab20882";
});
percentageBtn.addEventListener("click", () => {
  operator = "%";
  percentageBtn.style.backgroundColor = "#eab20882";
});

// DELETE NUMBER
const deleteNumber = () => {
  if (currentArrayWorking === 0) {
    firstOperand.pop();
    updateDisplay(firstOperand);
  } else {
    secondOperand.pop();
    updateDisplay(secondOperand);
  }
};

// RESULT

const operate = () => {
  resetStyles();
  let result = 0;
  if (operator === "+") {
    result =
      parseFloat(firstOperand.join("")) + parseFloat(secondOperand.join(""));
    calcDisplay.textContent = result;
    firstOperand = [result];
    secondOperand = [];
  } else if (operator === "-") {
    result =
      parseFloat(firstOperand.join("")) - parseFloat(secondOperand.join(""));
    calcDisplay.textContent = result;
    firstOperand = [result];
    secondOperand = [];
  } else if (operator === "*") {
    result =
      parseFloat(firstOperand.join("")) * parseFloat(secondOperand.join(""));
    calcDisplay.textContent = result;
    firstOperand = [result];
    secondOperand = [];
  } else if (operator === "/") {
    result =
      parseFloat(firstOperand.join("")) / parseFloat(secondOperand.join(""));
    calcDisplay.textContent = result;
    firstOperand = [result];
    secondOperand = [];
  } else if (operator === "%") {
    result =
      (parseFloat(firstOperand.join("")) / 100) *
      parseFloat(secondOperand.join(""));
    calcDisplay.textContent = result;
    firstOperand = [result];
    secondOperand = [];
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" || e.key === "Delete") {
    deleteNumber();
  }
  if (e.key === "1") {
    arrayChooser(parseInt(e.key));
  } else if (e.key === "2") {
    arrayChooser(parseInt(e.key));
  } else if (e.key === "3") {
    arrayChooser(parseInt(e.key));
  } else if (e.key === "4") {
    arrayChooser(parseInt(e.key));
  } else if (e.key === "5") {
    arrayChooser(parseInt(e.key));
  } else if (e.key === "6") {
    arrayChooser(parseInt(e.key));
  } else if (e.key === "7") {
    arrayChooser(parseInt(e.key));
  } else if (e.key === "8") {
    arrayChooser(parseInt(e.key));
  } else if (e.key === "9") {
    arrayChooser(parseInt(e.key));
  } else if (e.key === "0") {
    arrayChooser(parseInt(e.key));
  } else if (e.key === "+") {
    operator = "+";
    plusBtn.style.backgroundColor = "#eab20882";
  } else if (e.key === "-") {
    operator = "-";
    minusBtn.style.backgroundColor = "#eab20882";
  } else if (e.key === "*") {
    operator = "*";
    timesBtn.style.backgroundColor = "#eab20882";
  } else if (e.key === "/") {
    operator = "/";
    divisionBtn.style.backgroundColor = "#eab20882";
  } else if (e.key === "Enter") {
    operate();
  }
});

resultBtn.addEventListener("click", () => {
  operate();
});

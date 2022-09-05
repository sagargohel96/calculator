let string = "";
let buttons = document.querySelectorAll(".number");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("#output-value").innerHTML = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("#output-value").innerHTML = string;
    }
    if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("#output-value").innerHTML = string;
    }
    if (e.target.innerHTML == "CE") {
      string = string.slice(0,-3);
      document.querySelector("#output-value").innerHTML = string;
    }
  });
});

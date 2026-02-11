function check() {
  let number = document.getElementById("num").value;
  number = Number(number);

  if (number % 5 === 0) {
    document.getElementById("result").innerText = number + " is a multiple of 5 ✅";
  } else {
    document.getElementById("result").innerText = number + " is NOT a multiple of 5 ❌";
  }
}

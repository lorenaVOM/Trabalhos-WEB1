function num_primo() {
  var num = document.getElementById("num").value;

  let cont = 0;

  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      cont += 1;
    }
  }

  if (cont == 2) {
    alert(num + " é um número primo");
  } else {
    alert(num + " não é um número primo");
  }
}

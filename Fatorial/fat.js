function fatorial() {
  var num = document.getElementById("num").value;

  function fatRecursiva(num) {
    if (num <= 1) {
      return 1;
    } else {
      return fatRecursiva(num - 1) * num;
    }
  }

  var resultado = fatRecursiva(num);
  document.getElementById("resultado").innerHTML = resultado;
}

function num_perfeito() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  var perfeitos = [];

  for (var i = num1; i <= num2; i++) {
    let soma = 0;
    for (let div = 1; div < i; div++) {
      if (i % div == 0) {
        soma += div;
      }
    }
    if (soma == i) {
      perfeitos.push(i);
    }
  }
  var resultado = perfeitos;
  document.getElementById("resultado").innerHTML = resultado;
}

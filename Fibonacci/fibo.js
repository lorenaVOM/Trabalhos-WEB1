function Seq_Fibonacci() {
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;

  var num = document.getElementById("num").value;

  for (var i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  var resultado = fibonacci;
  document.getElementById("resultado").innerHTML = resultado;
}

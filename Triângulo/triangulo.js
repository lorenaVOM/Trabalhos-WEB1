function triangulo() {
  var reta1 = document.getElementById("reta1").value;
  var reta2 = document.getElementById("reta2").value;
  var reta3 = document.getElementById("reta3").value;

  if (
    Number(reta1) + Number(reta2) <= Number(reta3) ||
    Number(reta1) + Number(reta3) <= Number(reta2) ||
    Number(reta2) + Number(reta3) <= Number(reta1)
  ) {
    alert("Não é possível formar um triângulo!");
  } else if (
    Number(reta1) == Number(reta2) &&
    Number(reta1) == Number(reta3) &&
    Number(reta2) == Number(reta3)
  ) {
    alert("Triângulo Equilátero");
  } else if (
    Number(reta1) != Number(reta2) &&
    Number(reta1) != Number(reta3) &&
    Number(reta2) != Number(reta3)
  ) {
    alert("Triângulo Escaleno");
  } else if (
    (Number(reta1) == Number(reta2) && Number(reta1) != Number(reta3)) ||
    (Number(reta1) == Number(reta3) && Number(reta3) != Number(reta2)) ||
    (Number(reta2) == Number(reta3) && Number(reta2) != Number(reta1))
  ) {
    alert("Triângulo Isósceles");
  }
}

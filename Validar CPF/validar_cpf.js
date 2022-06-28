function validar_cpf() {
  var cpf = document.getElementById("cpf").value;

  let soma = 0;
  let i = 0;

  if (cpf.lenght > 10 || cpf.lenght < 10) {
    alert("CPF Inválido!");
  }

  //validar primeiro dígito
  for (let n = 10; n > 1; n--) {
    soma += Number(cpf[i]) * n;
    i++;
  }

  val_dig1 = (soma * 10) % 11;

  if (val_dig1 == 10) {
    val_dig1 = 0;
  }

  //validar segundo dígito
  soma = 0;
  i = 0;
  for (let n = 11; n > 1; n--) {
    soma += Number(cpf[i]) * n;
    i++;
  }

  val_dig2 = (soma * 10) % 11;

  if (val_dig2 == 10) {
    val_dig2 = 0;
  }

  if (val_dig1 == Number(cpf[9]) && val_dig2 == Number(cpf[10])) {
    alert("CPF Válido!");
  } else {
    alert("CPF Inválido!");
  }
}

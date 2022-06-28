function Hora() {
  var data = new Date();

  var hora = data.getHours(); // 0-23
  var min = data.getMinutes(); // 0-59
  var seg = data.getSeconds(); // 0-59
  var mseg = data.getMilliseconds(); // 0-999
  var tz = data.getTimezoneOffset(); // em minutos

  //Formata a hora
  var str_hora = hora + ":" + min + ":" + seg;

  // Mostra a hora
  alert("Agora são " + str_hora);
}

function Hora_2() {
  var data = new Date();

  var hora = data.getHours(); // 0-23
  var min = data.getMinutes(); // 0-59
  var seg = data.getSeconds(); // 0-59
  var mseg = data.getMilliseconds(); // 0-999
  var tz = data.getTimezoneOffset(); // em minutos

  //Formata a hora
  var str_hora = hora + ":" + min + ":" + seg;

  // Mostra a hora
  document.getElementById("hora").innerHTML = str_hora;
}

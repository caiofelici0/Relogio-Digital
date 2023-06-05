setInterval(mostrarTempo, 1000);

function mostrarTempo() {
  let data = new Date();

  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  horas = horas < 10 ?  "0" + horas : horas;
  minutos = minutos < 10 ?  "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}

mostrarTempo();
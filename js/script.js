// Relogio

let intervalRelogio = setInterval(mostrarTempo, 1000);

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

// Cronometro

const relogioBtn = document.getElementById("relogio-btn");
const cronometroBtn = document.getElementById("cronometro-btn");
const relogio = document.getElementById("relogio");
const cronometro = document.getElementById("cronometro");
const menuCronometro = document.getElementById("menu-cronometro");
const iniciarBtn = document.getElementById("iniciar");
const continuarBtn = document.getElementById("continuar");
const pararBtn = document.getElementById("parar");
const reiniciarBtn = document.getElementById("reiniciar");
const minCronometro = document.getElementById("min-cronometro");
const secCronometro = document.getElementById("sec-cronometro");
const milisecCronometro = document.getElementById("milisec-cronometro");

let intervalCronometro;
let min = 0;
let sec = 0;
let milisec = 0;
let parado = false;

function iniciarCronometro() {

  intervalCronometro = setInterval(() => {
    if(!parado){
      milisec++;
  
      if(milisec === 100){
        milisec = 0;
        sec++;

        sec = sec < 10 ? sec = "0" + sec : sec;
        secCronometro.innerText = sec;
      }
  
      if(sec === 60){
        sec = 0;
        min++;

        sec = sec < 10 ? sec = "0" + sec : sec;
        secCronometro.innerText = sec;

        min = min < 10 ? min = "0" + min : min;
        minCronometro.innerText = min;
      }

      milisec = milisec < 10 ? milisec = "0" + milisec : milisec;
      milisecCronometro.innerText = milisec;
    }

  }, 10);
}

function resetarCronometro() {
  parado = false;
  iniciarBtn.classList.remove("hide");
  continuarBtn.classList.add("hide");

  min = 0;
  sec = 0;
  milisec = 0;

  minCronometro.innerText = "00";
  secCronometro.innerText = "00";
  milisecCronometro.innerText = "00";
  clearInterval(intervalCronometro);
}

// Eventos

relogioBtn.addEventListener("click", () => {
  if(relogio.classList.contains("hide")){
    relogio.classList.toggle("hide");
    cronometro.classList.toggle("hide");
    menuCronometro.classList.toggle("hide");
    relogioBtn.classList.toggle("ativo");
    cronometroBtn.classList.toggle("ativo");

    resetarCronometro();
    mostrarTempo();
    intervalRelogio = setInterval(mostrarTempo, 1000);
  }
});

cronometroBtn.addEventListener("click", () => {
  if(cronometro.classList.contains("hide")){
    relogio.classList.toggle("hide");
    cronometro.classList.toggle("hide");
    menuCronometro.classList.toggle("hide");
    relogioBtn.classList.toggle("ativo");
    cronometroBtn.classList.toggle("ativo");

    clearInterval(intervalRelogio);
  }
});

iniciarBtn.addEventListener("click", () => {
  iniciarBtn.classList.add("hide");
  continuarBtn.classList.remove("hide");

  parado = false;
  iniciarCronometro();
});

continuarBtn.addEventListener("click", () => {
  parado = false;
});

pararBtn.addEventListener("click", () => {
  parado = true;
});

reiniciarBtn.addEventListener("click", resetarCronometro);
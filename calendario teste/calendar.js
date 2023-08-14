let dataHora = new Date();
//dataHora.setMonth(9)
let dia = dataHora.getDate();
let mes = dataHora.getMonth();
let ano = dataHora.getFullYear();
let diaSemana = dataHora.getDay();
let dataHoraCopy = dataHora;
let primeiroDiaMes = dataHoraCopy.setDate(1);
const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

//let proximoMes = new Date(dataHora).setMonth( mes +1)

const divCalendar = document.getElementById("calendar");

const h1 = document.createElement("h1");
h1.innerText = meses[mes] + " " + ano;
divCalendar.appendChild(h1);

const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr");
const td = document.createElement("td");
const btnPrev = document.createElement("button")
const btnNext = document.createElement("button")

btnPrev.innerText = "Anterior"
btnPrev.classList.add("btnCalendar")
btnPrev.addEventListener("click",
() =>{
  mes--
  if (mes < 0) {
    mes = 11;
    ano--;
  }
  dataHora.setFullYear(ano, mes, 1);
  atualizaCalendario()
})
btnNext.innerText = "Próximo"
btnNext.classList.add("btnCalendar")
btnNext.addEventListener("click",
() =>{
  mes++
  if (mes > 11) {
    mes = 0;
    ano++;
  }
  dataHora.setFullYear(ano, mes, 1);
  atualizaCalendario()
})



const tbody = document.createElement("tbody");
table.appendChild(tbody);
thead.appendChild(tr);
tr.appendChild(td);


function imprimeDiasDaSemanas() {
  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];
  const tr = document.createElement("tr");

  for (let dia of dias) {
    const td = document.createElement("td");
    td.innerText = dia;
    tr.appendChild(td);
    td.classList.add("weekDays")
  }
  tbody.appendChild(tr);
}

function imprimeDiasMesCorrente() {
  let tr = document.createElement("tr");
  let comecaNoDia = dataHora.getDay();
  let terminaNoDia = null
  let nDia = 1;
  let x = 1;
  while (nDia <= pegaUltimoDiaMes(dataHora)) {
    let dataHoraCopia = new Date(dataHora)
    dataHoraCopia.setDate(nDia)
    const td = document.createElement("td")

    if (x <= comecaNoDia) {
      td.innerText = "";
      td.classList.add("lastmonth")
    } else {
      td.innerText = nDia;
      //console.log("termina no dia " + dataHoraCopia.getDay() + "("+nDia+")")
      terminaNoDia = dataHoraCopia.getDay()
      nDia++;
    }
    tr.appendChild(td);

    if (x % 7 === 0) {
      tbody.appendChild(tr);
      tr = document.createElement("tr");
    }
    if (nDia - 1 === dia) {
      td.classList.add("current");
    }

    x++;
  }

  //console.log("O ultimo dia é indice: " + terminaNoDia)

  let totalTds = 6 - terminaNoDia

  for (let x =0; x<totalTds;x++){
    const td = document.createElement("td")
    td.innerText = ""
    td.classList.add("nextmonth")
    tr.appendChild(td)
  }
  tbody.appendChild(tr);
}

function pegaUltimoDiaMes(data){
    let dataCopia = new Date(data)
    dataCopia.setMonth(data.getMonth() + 1)
    dataCopia.setDate(1)
    dataCopia.setDate(dataCopia.getDate()-1)
    return dataCopia.getDate()
}

function atualizaCalendario() {
  h1.innerText = meses[mes] + " " + ano;
  tbody.innerHTML = "";
  imprimeDiasDaSemanas();
  imprimeDiasMesCorrente();
}

imprimeDiasDaSemanas();
imprimeDiasMesCorrente();
divCalendar.appendChild(table);
divCalendar.appendChild(btnPrev) 
divCalendar.appendChild(btnNext) 


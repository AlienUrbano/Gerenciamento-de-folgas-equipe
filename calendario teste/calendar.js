let dataHora = new Date();
dataHora.setDate(1)
let dia = dataHora.getDate()
let mes = dataHora.getMonth()
let ano = dataHora.getFullYear()
let diaSemana = dataHora.getDay()

let meses = [
              "Janeiro", "Fevereiro", "Março", "Abril","Maio", "junho",
              "Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"
]

//let proximoMes = new Date(dataHora).setMonth( mes +1)

const divCalendar = document.getElementById("calendar")

const h1 = document.createElement("h1")
h1.innerText = meses[mes] + " " +ano
divCalendar.appendChild(h1)

const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const td = document.createElement('td')

const tbody = document.createElement('tbody')


table.appendChild(tbody)
thead.appendChild(tr)
tr.appendChild(td)


    function imprimeDiasDaSemanas() {
        const dias  = ["DOM","SEG","TER","QUA","QUI","SEX","SAB"]
        const tr = document.createElement('tr')
        
        for(const dia of dias){
            const td = document.createElement("td")
            td.innerText = dia
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }

    function imprimeDiasNumericos() {
        let tr = document.createElement("tr")
        for(let ndia =1; ndia <=31; ndia++){
            const td = document.createElement("td")
            td.innerText = ndia
            tr.appendChild(td)

            if (ndia % 7 === 0) {
                tbody.appendChild(tr)
                tr = document.createElement("tr")
            }
        }
        tbody.appendChild(tr)
    }


imprimeDiasDaSemanas()
imprimeDiasNumericos()
divCalendar.appendChild(table)


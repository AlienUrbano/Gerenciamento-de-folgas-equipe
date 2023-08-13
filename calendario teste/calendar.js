const divCalendar = document.getElementById("calendar")

const h1 = document.createElement("h1")
h1.innerText = "janeiro 2023"
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
        for(let dia =1; dia <=31; dia++){
            const td = document.createElement("td")
            td.innerText = dia
            tr.appendChild(td)

            if (dia % 7 === 0) {
                tbody.appendChild(tr)
                tr = document.createElement("tr")
            }
        }
        tbody.appendChild(tr)
    }


imprimeDiasDaSemanas()
imprimeDiasNumericos()
divCalendar.appendChild(table)
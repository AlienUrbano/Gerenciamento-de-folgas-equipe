console.log("carregoou!");


const divCalendar = document.getElementById("calendar")

const h1 = document.createElement("h1")
h1.innerText = "janeiro 2023"
divCalendar.appendChild(h1)

const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const td = document.createElement('td')
td.innerText='domingo'
table.appendChild(thead)
thead.appendChild(tr)
tr.appendChild(td)

divCalendar.appendChild(table)
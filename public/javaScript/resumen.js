//const urlBase = 'https://inventario.elwayardo.com'
const urlBase = "http://localhost:3000";

function traerGanancia(url) {
  const cajaGrande = document.getElementById("summary");
  cajaGrande.innerHTML = "";
  window
    .fetch(url)
    .then((respuesta) => respuesta.json())
    .then((responseJson) => {
      const todosLosElementos = [];

      responseJson.forEach((elemento) => {
        const div1 = document.createElement("div");
        div1.className = "row_summary";

        const branch = document.createElement("p");
        const branchApi = elemento.branch;
        branch.textContent = branchApi;

        const concept = document.createElement("p");
        concept.textContent = `Ganancia ${branchApi}`;

        const sum = document.createElement("p");
        const sumApi = elemento.suma_revenue;
        sum.textContent = sumApi;

        div1.append(branch, concept, sum);

        todosLosElementos.push(div1);

        cajaGrande.append(...todosLosElementos);
      });

      const suma = responseJson.reduce((total, objeto)=>total + parseFloat(objeto.suma_revenue), 0);
      const total = document.createElement("div")
      total.className = 'total_summary'
      const titulo = document.createElement("p")
      titulo.textContent="Ganancia Total"
      const sumSummary = document.createElement("p");
      sumSummary.id = "sumSummary"
      sumSummary.textContent = suma;
      total.append(titulo, sumSummary)
      cajaGrande.append(total)
    });
}

function traerGastos(url) {
  const cajaGrande = document.getElementById("summary2");
  cajaGrande.innerHTML = "";
  window
    .fetch(url)
    .then((respuesta) => respuesta.json())
    .then((responseJson) => {
      const todosLosElementos = [];

      responseJson.forEach((elemento) => {
        const div1 = document.createElement("div");
        div1.className = "row_summary";

        const branch = document.createElement("p");
        const branchApi = elemento.branch;
        branch.textContent = branchApi;

        const concept = document.createElement("p");
        const conceptApi = elemento.concept;
        concept.textContent = conceptApi;

        const amount = document.createElement("p");
        const amountApi = elemento.amount;
        amount.textContent = amountApi;

        div1.append(branch, concept, amount);

        todosLosElementos.push(div1);

        cajaGrande.append(...todosLosElementos);
      });
      const suma = responseJson.reduce((total, objeto)=>total + parseFloat(objeto.amount), 0);
      const total = document.createElement("div")
      total.className = 'total_summary'
      const titulo = document.createElement("p")
      titulo.textContent="Total Gastos"
      const sumSummary = document.createElement("p");
      sumSummary.id = "sumBils"
      sumSummary.textContent = suma;
      total.append(titulo, sumSummary)
      cajaGrande.append(total)
    });
}

const btnGet = document.getElementById("getSales");

btnGet.addEventListener("click", async (e) => {
  e.preventDefault();

  const inputMonth = document.getElementById("inputMonth");

  const date = inputMonth.value;
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const urlInsomnia = `${urlBase}/api/v1/ventas/salesByMonth?year=${year}&month=${month}`;
  const urlInsomnia2 = `http://localhost:3000/api/v1/box/byMonth?year=${year}&month=${month}`;
  console.log(urlInsomnia);
  traerGanancia(urlInsomnia);
  traerGastos(urlInsomnia2);
});

function sumInputs() {
  const alquilerB17 = parseFloat(document.getElementById('alquilerB17').value)
  const alquilerQori = parseFloat(document.getElementById('alquilerQori').value)
  const alquilerDep = parseFloat(document.getElementById('alquilerDep').value)
  const text = document.getElementById('subTotal')
  const sumSummary = parseFloat(document.getElementById('sumSummary').textContent)
  
  if (!isNaN(alquilerB17) & !isNaN(alquilerQori) & !isNaN(alquilerDep) & !isNaN(sumSummary)) {
    
    const totalAlquiler = alquilerB17+alquilerQori+alquilerDep;
    
    
    text.textContent = sumSummary-totalAlquiler 
    
  } else {
   
    text.textContent = 'ingrese valores correctos'
  }
} 

function sumInputs2() {
  const salaryDennis = parseFloat(document.getElementById('salaryDennis').value)
  const bonusDennis = parseFloat(document.getElementById('bonusDennis').value)
  const salaryLuz = parseFloat(document.getElementById('salaryLuz').value)
  const text = document.getElementById('total')
  const subTotal = parseFloat(document.getElementById('subTotal').textContent)
  const sumBils = parseFloat(document.getElementById('sumBils').textContent)
  
  if (!isNaN(salaryDennis) & !isNaN(bonusDennis) & !isNaN(salaryLuz)) {
    
    const totalSalaries = salaryDennis+bonusDennis+salaryLuz;
  
    
    
    text.textContent = sumBils-totalSalaries+subTotal; 
    
  } else {
   
    text.textContent = 'ingrese valores correctos'
  }
} 


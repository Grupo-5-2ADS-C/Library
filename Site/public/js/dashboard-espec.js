var cpu = document.getElementById('status__cpu');
var memoria = document.getElementById('status__memoria');
var disco = document.getElementById('status__disco');

function changeStatus__cpu() {

    cpu.classList.add('active-graph');
    memoria.classList.remove('active-graph');
    disco.classList.remove('active-graph');
}

function changeStatus__memoria() {

    memoria.classList.add('active-graph');
    cpu.classList.remove('active-graph');
    disco.classList.remove('active-graph');
}

function changeStatus__disco() {

    disco.classList.add('active-graph');
    cpu.classList.remove('active-graph');
    memoria.classList.remove('active-graph');
}

Chart.defaults.color = "#a1a1a1";

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Métricas de Componente',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: '#57b4ce',
        borderColor: '#57b4ce',

      }]
    },
    options: {
      scales: {
        x: {
            grid: {
                color: ['#f7f5f5'],
            }
        },
        y:{
            beginAtZero: true,
            border: {
            },
            grid: {
            color: ['']
            }
            
        }
      }
    }
  });

  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Métricas de Componente',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: '#57b4ce',
        borderColor: '#57b4ce',

      }]
    },
    options: {
      scales: {
        x: {
            grid: {
                color: ['#f7f5f5'],
            }
        },
        y:{
            beginAtZero: true,
            border: {
            },
            grid: {
            color: ['']
            }
            
        }
      }
    }
  });



const barCanvas = document.getElementById('barChart').getContext('2d'); //since ref from html set no need to set it equal to new chart, just call new chart 

new Chart(barCanvas, {
  type: 'bar',
  data:{
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets:[{
        label: 'Steps by Week',
        data: [12000, 5000, 8000, 11000, 5000, 5000, 10000],
        borderWidth: 1,
        backgroundColor: 
            'rgba(255, 99, 132, 0.5)' 
    }]
  },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }   
}
)

const lineCanvas = document.getElementById('lineChart').getContext('2d'); 

new Chart(lineCanvas, {
  type: 'line',
  data:{
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets:[{
        label: 'Steps by Week',
        data: [12000, 5000, 8000, 11000, 5000, 5000, 10000],
        borderWidth: 1,
    }]
  },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }   
}
)

//mixed chart attempt
const scatterCanvas = document.getElementById('scatter').getContext('2d'); 

new Chart(scatterCanvas, {
  data:{
  datasets:[{
    type: 'scatter',
    label: 'Steps by Week',
    data: [
      { x: 0, y: 12000 },
      { x: 1, y: 5000 },
      { x: 2, y: 8000 },
      { x: 3, y: 11000 },
      { x: 4, y: 5000 },
      { x: 5, y: 5000 },
      { x: 6, y: 10000 }
    ],
    borderWidth: 1,
    backgroundColor: 'rgba(60, 145, 21, 0.7)',
  }, {
    type: 'line',
    label: 'Average Steps',
    data: [
      { x: 0, y: 8000 },
      { x: 1, y: 8000 },
      { x: 2, y: 8000 },
      { x: 3, y: 8000 },
      { x: 4, y: 8000 },
      { x: 5, y: 8000 },
      { x: 6, y: 8000 }
    ],
    borderWidth: 2,
    backgroundColor: 'rgba(254, 34, 14, 0.5)',
    pointRadius: 3,
  
  }]
},
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }   
}
)


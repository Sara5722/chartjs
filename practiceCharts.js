

const barCanvas = document.getElementById('barChart').getContext('2d'); //since ref from html set no need to set it equal to new chart, just call new chart 

new Chart(barCanvas, {
  type: 'bar',
  data:{
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets:[{
        label: 'Steps',
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

const lineCanvas = document.getElementById('lineChart').getContext('2d'); 

new Chart(lineCanvas, {
  type: 'line',
  data:{
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets:[{
        label: 'Steps',
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


// const scatterCanvas = document.getElementById('scatter').getContext('2d'); 

// new Chart(scatterCanvas, {
//   type: 'scatter',
//   data:{
//     labels: [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday],
//     datasets:[{
//         label: 'Steps',
//         data: [12000, 5000, 8000, 11000, 5000, 5000, 10000],
//         borderWidth: 1,
//     }]
//   },
//     options: {
//         scales: {
//         y: {
//             beginAtZero: true
//         }
//         }
//     }   
// }
// )
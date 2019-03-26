import Chart from 'chart.js';
import '../lib/chartjs-plugin-datalabels.js';
if (document.querySelector('.js-chart')) {
  var ctx = document.querySelector('.js-chart').getContext('2d');
  var data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      label: false,
      backgroundColor: '#C7CFDB',
      hoverBackgroundColor: '#08DB95',
      data: [56, 63, 67]
    }]
  };

  window.chart = new Chart(ctx, {
  // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: data,

    duration: 500,
    easing: 'easeOutBounce',

    // Configuration options go here,
    options: {
      responsive: true,
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      responsive: true,
      scales: {
        xAxes: [{
          stacked: false,

          gridLines: {
            display: false,
            drawBorder: false,

          },
          ticks: {
            autoSkip: false

          }
        }],
        yAxes: [{
          stacked: true,
          gridLines: {
            drawBorder: false
          }
        }]
      },
      plugins: {
        datalabels: {
          align: 'start',
          anchor: 'end',
          font: {
            family: '"AvenirNext", Helvetica, sans-serif',
            size: 13,
            weight: 500
          },
          color: 'rgba(45, 54, 68, 0.6)',
          display: 'auto'
        }
      }
    }
  });

  document.getElementById('randomizeData').addEventListener('click', function() {
    data.datasets[0].data = [10, 30, 31];
    console.log('dd');
    window.chart.update();
  });
}



// import Chart from 'chart.js';
// var ctx = document.querySelector('.js-chart').getContext('2d');
// var data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [{
//     label: 'My First dataset',
//     backgroundColor: '#C7CFDB',
//     borderColor: 'rgba(0, 0, 0, 0.1)',
//     data: [0, 100000000, 50000000, 2, 20, 30, 45]
//   }]
// };
// window.chart = new Chart(ctx, {
//   // The type of chart we want to create
//   type: 'bar',

//   // The data for our dataset
//   data: data,

//   duration: 500,
//   easing: 'easeOutBounce',

//   // Configuration options go here,
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     },
//     animation: {
//       onComplete: function() {
//         var chartInstance = this.chart;
//         var ctx = chartInstance.ctx;
//         // console.log(chartInstance);
//         var height = chartInstance.controller.boxes[0].bottom;
//         ctx.textAlign = 'center';
//         ctx.fillStyle = 'rgba(45, 54, 68, 0.6)';
//         ctx.font = '13px "AvenirNext", Helvetica, sans-serif';
//         console.log(ctx);
//         Chart.helpers.each(this.data.datasets.forEach(function(dataset, i) {
//           var meta = chartInstance.controller.getDatasetMeta(i);
//           Chart.helpers.each(meta.data.forEach(function(bar, index) {
//             console.log(height - ((height - bar._model.y) ) + 22, height);
//             ctx.fillText(dataset.data[index], bar._model.x, height - ((height - bar._model.y) ) + 22);
//           }),this);
//         }),this);
//       }
//     }
//   }
// });

// document.getElementById('randomizeData').addEventListener('click', function() {
//   data.datasets[0].data = [0, 12, 2, 1, 10, 30, 15];
//   console.log('dd');
//   window.chart.update();
// });

// // new Chart(document.getElementById("barChartHeadcount"), {
// //   type: 'bar',
// //   data: {
// //     labels: ['Jan', 'Feb', 'Mar'],
// //     datasets: [{
// //       label: 'Billed',
// //       backgroundColor: 'rgb(0, 197, 106)',
// //       data: [56, 63, 67]
// //     }, {
// //       label: 'Unbilled',
// //       backgroundColor: 'rgb(255, 114, 107)',
// //       data: [1, 2, 3]
// //     }]
// //   },
// //   options: {
// //     title: {
// //       display: true,
// //       text: 'Community Headcount'
// //     },
// //     tooltips: {
// //       mode: 'index',
// //       intersect: false
// //     },
// //     responsive: true,
// //     scales: {
// //       xAxes: [{
// //         stacked: false
// //       }],
// //       yAxes: [{
// //         stacked: false
// //       }]
// //     },
// //     plugins: {
// //       datalabels: {
// //         align: 'end',
// //         anchor: 'end',
// //         backgroundColor: function(context) {
// //           return context.dataset.backgroundColor;
// //         },
// //         borderRadius: 4,
// //         color: 'white',
// //         formatter: function(value){
// //           return value + ' (100%) ';
// //         }
// //       }
// //     }
// //   }
// // });

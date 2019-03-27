import Chart from 'chart.js';
import '../lib/chartjs-plugin-datalabels.js';
import { LOAD_DATA } from '../utils.js';

const wraps = $('.js-chart-wrap');

wraps.each((i, el) => {
  const container = $(el);
  let chart;
  let mainData;
  const link = $('.js-chart-select-link', container);
  const activeLink = $('.js-chart-select-link.is-active', container);
  const ctx = $('.js-chart', container)[0].getContext('2d');;

  const initData = activeLink.data('json');
  if (!container.length) return;
  LOAD_DATA({
    path: initData,
    callback: obj => {
      mainData = obj[0];
      const options = {
        type: 'bar',
        data: mainData,
        duration: 500,
        easing: 'easeOutBounce',
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
      };
      chart = new Chart(ctx, options);
    } 
  });
  link.on('click', function() {
    const linkData = $(this).data('json');
    LOAD_DATA({
      path: linkData,
      callback: obj => {
        mainData.datasets[0].data = obj[0].datasets[0].data;
        chart.update();
      }
    });
  });
  
});

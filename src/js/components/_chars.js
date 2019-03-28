import Chart from 'chart.js';
import '../lib/chartjs-plugin-datalabels.js';
import { LOAD_DATA } from '../utils.js';
import { ACTIVE } from '../constants';

const chartSelect = () => {
  const select = $('.js-chart-select');
  select.each((i,el) => {
    const container = $(el);
    const trigger = $('.js-chart-select-trigger', container);
    const link = $('.js-chart-select-link', container);
    link.on('click', function() {
      const currentText = $(this).text();
      trigger.text(currentText);
    });
    if (!link.hasClass(ACTIVE)) link.first().addClass(ACTIVE);
    const currentLink = $('.js-chart-select-link.is-active', container);
    trigger.text(currentLink.text());
  });
};
chartSelect();

const setValue = (value) => {
  if(value > 999) {
    var temp = (value / 1000) + 'K';
    return temp;
  }
  return value;
};

const wraps = $('.js-chart-wrap');
wraps.each((i, el) => {
  const container = $(el);
  let chart;
  let mainData;
  const link = $('.js-chart-select-link', container);
  const activeLink = $('.js-chart-select-link.is-active', container);
  const ctx = $('.js-chart', container)[0].getContext('2d');

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
          scaleStepWidth: 300,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontFamily: "'AvenirNext', Helvetica, sans-serif",
                fontSize: 10,
                fontStyle: 600,
                padding: 5,
                lineHeight: 1.2,
                fontColor: 'rgba(74, 72, 74,.68)'
              }
            }],
            yAxes: [{
              stacked: true,
              gridLines: {
                drawBorder: false,
                zeroLineColor: '#fff',
                tickMarkLength: 3
              },
              ticks: {
                fontFamily: "'AvenirNext', Helvetica, sans-serif",
                fontSize: 10,
                padding: 15,
                fontColor: 'rgba(74, 72, 74,.68)',
                fontStyle: 600,
                callback: value => setValue(value),
                maxTicksLimit: 4,
                minTicksLimit: 2
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
              display: 'auto',
              formatter: value => setValue(value)
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


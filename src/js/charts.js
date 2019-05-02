import Chart from 'chart.js';
import datalabels from 'chartjs-plugin-datalabels';
import { LOAD_DATA } from './utils.js'; 
import { ACTIVE } from './constants';
Chart.plugins.register(datalabels);

const chartSelect = () => {
  const select = $('.js-chart-select');
  select.each((i,el) => {
    const container = $(el);
    const trigger = $('.js-chart-select-trigger', container);
    const link = $('.js-chart-select-link', container);
    link.on('click', function() {
      const this_ = $(this);
      const currentText = this_.text();
      trigger.text(currentText);
      link.removeClass(ACTIVE);
      this_.addClass(ACTIVE);
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

const initCharts = () => {
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
          // plugins: [datalabels],
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
};
setTimeout(initCharts, 100);


const initLinearChart = () => {
  const chart = $('.js-linear-chart');
  chart.each( (i, el) => {
    let data;
    let chartLinear;
    const ctx = $(el);
    const dataPath = $(el).data('json');
    LOAD_DATA({
      path: dataPath,
      callback: object => {
        data = object[0];
        const options = {
          type: 'line',
          data: data,
          duration: 500,
          easing: 'easeOutBounce',
          options: {
            responsive: true,
            scaleStepWidth: 300,
            legend: {
              display: false
            },
            layout: {
              padding: {
                top: 70
              }
            },
            tooltips: {
              mode: 'point',
              titleFontSize: 9,
              titleFontStyle: 'medium',
              titleFontFamily: "'AvenirNext', Helvetica, sans-serif",
              bodyFontFamily: "'AvenirNext', Helvetica, sans-serif",
              bodyFontSize: 18,
              bodyFontStyle: 'bold',
              xPadding: 11,
              yPadding: 7,
              xAlign: 'center',
              yAlign: 'bottom',
              caretPadding: 10,
              displayColors: false,
              callbacks: {
                labelColor: (TooltipItem, chart) => {
                  chart.tooltip._model.backgroundColor = chart.tooltip._data.datasets[TooltipItem.datasetIndex].tooltipBackground;
                }
              }
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
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: '#fff',
                  tickMarkLength: 5
                },
                ticks: {
                  fontFamily: "'AvenirNext', Helvetica, sans-serif",
                  fontSize: 10,
                  padding: 15,
                  fontColor: 'rgba(74, 72, 74,.68)',
                  fontStyle: 600
                }
              }]
            },
            plugins: {
              datalabels: {
                formatter: value => setValue('')
              }
            }
          }
        };
        chartLinear = new Chart(ctx, options);
      }
    });
  });
};
setTimeout(initLinearChart,100);

const initPieChart = () => {
  const containers = $('.js-pie-chart');
  containers.each( (i, el) => {
    let data;
    let chartLinear;
    const ctx = $(el);
    const dataPath = $(el).data('json');
    LOAD_DATA({
      path: dataPath,
      callback: object => {
        data = object;
        var options = {
          type: 'pie',
          data: data,
          options: {
            responsive: true,
            legend: {
              display: false
            },
            plugins: {
              datalabels: {
                font: {
                  family: '"AvenirNext", Helvetica, sans-serif',
                  size: 13,
                  weight: 600
                },
                color: '#fff',
                display: 'auto',
                formatter: value => { return value+'%'; }
              }
            }
          }
        };
        chartLinear = new Chart(ctx, options);
      }
    });
  } );
};
setTimeout(initPieChart, 100);


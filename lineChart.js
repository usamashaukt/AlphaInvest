var labelsList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dataValues = [
    [65, 59, 80, 81, 56, 55, 40, 50, 60, 55, 30, 78],
    [25, 59, 10, 11, 86, 65, 10, 40, 30, 58, 0, 90],
  ];
var bgColors = ["red", "green"];
var dataLabels = ["red", "green"];
var datasets = [];
for (let i = 0; i < dataValues.length; i++) {
  $("#barChart + .labels").append("<div class='label'><span style='background-color:"+ bgColors[i] + "' ></span><p>"+dataLabels[i]+"</p></div>");
  datasets.push({
    label: dataLabels[i],
    fill: false,
    lineTension: 0.1,
    backgroundColor: bgColors[i],
    borderColor: bgColors[i], // The main line color
    borderCapStyle: "square",
    borderDash: [], // try [5, 15] for instance
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: bgColors[i],
    pointBackgroundColor: "white",
    pointBorderWidth: 2,
    pointHoverRadius: 8,
    pointHoverBackgroundColor: bgColors[i],
    pointHoverBorderColor: bgColors[i],
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    pointHitRadius: 10,
    // notice the gap in the data and the spanGaps: true
    data: dataValues[i],
    spanGaps: false,
  });
}

var canvas = document.getElementById("barChart");
var ctx = canvas.getContext("2d");

// Global Options:
Chart.defaults.global.defaultFontColor = "black";
Chart.defaults.global.defaultFontSize = 16;

var data = {
  labels: labelsList,
  datasets: datasets,
};

// Notice the scaleLabel at the same level as Ticks
var options = {
  legend: {
    display: false,
    position: "bottom",
    labels: {
      padding: 50,
      usePointStyle: true,
      pointStyleWidth: 10,
    },
  },

  scales: {
    yAxes: [
      {
        ticks: {
          autoSkip: true,
          beginAtZero: true,
          maxTicksLimit: 8,
          fontSize: 16,
        },
        scaleLabel: {
          display: true,
          labelString: "Withdrwals",
          fontSize: 16,
          fontWeight: 400,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          autoSkip: true,
          beginAtZero: true,
          maxTicksLimit: 12,
          fontSize: 16,
        },
        scaleLabel: {
          display: true,
          labelString: "Year",
          fontSize: 16,
          fontWeight: 400,
        },
      },
    ],
  },
};

// Chart declaration:
var myBarChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
});

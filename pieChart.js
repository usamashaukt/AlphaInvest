var options = {
  legend: {
    display: false,
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  tooltips: {
    callbacks: {
        title: function(tooltipItems, data) {
            return '';
          },
          label: function(tooltipItem, data) {
            var datasetLabel = '';
            var label = data.labels[tooltipItem.index];
            return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]+"%";
          }
    },
  },
};
$(".pie-chart").each(function (i, singlePieChart) {
  var labels = [];
  var backgroundColors = [];
  var dataValues = [];

  if (singlePieChart) {
    var canvas = $(singlePieChart).find("canvas");
    $(singlePieChart)
      .find(".pie")
      .each(function (i, pie) {
        if (pie) {
          var bgColor = $(pie).find(".bgcolor").css("background-color");
          var value = $(pie).find(".percentage").html();
          var label = $(pie).find(".label").html();

          labels.push(label);
          backgroundColors.push(bgColor);
          dataValues.push(value);
        }
      });

    var chartId = new Chart(canvas, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "online tutorial subjects",
            data: dataValues,
            backgroundColor: backgroundColors,
            hoverOffset: 5,
          },
        ],
      },
      options: options,
    });
  }
});

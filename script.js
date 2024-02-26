google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(fetchAndDrawChart);

function fetchAndDrawChart() {
  // Fetch data from API endpoint
  fetch('YOUR_API_ENDPOINT')
    .then(response => response.json())
    .then(data => {
      // Process data to format it for Google Charts
      var chartData = [['Year', 'Sales', 'Expenses', 'Profit']];
      data.forEach(item => {
        chartData.push([item.year, item.sales, item.expenses, item.profit]);
      });

      // Draw chart with processed data
      drawChart(chartData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function drawChart(chartData) {
  var data = google.visualization.arrayToDataTable(chartData);

  var options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    bars: "vertical",
  };

  var chart = new google.charts.Bar(
    document.getElementById("barchart_material")
  );

  // Event listener for click events
  google.visualization.events.addListener(chart, 'click', function (event) {
    // Handle click event here
    console.log('Clicked on a bar:', event);
  });

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

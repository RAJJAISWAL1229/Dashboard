google.charts.load("current", { packages: ["corechart", "bar"] });

document.addEventListener("DOMContentLoaded", function () {
  fetch("pl.json")
    .then((response) => response.json())
    .then((data) => {
      const processedData = data.map((item) => {
        return [item.time, parseInt(item.pl.replace(/,/g, ""))];
      });
      const newData = [["time", "pl"], ...processedData];
      console.log(newData);
      drawChart(newData);
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});
function drawChart(dataTable) {
  var data = google.visualization.arrayToDataTable(dataTable);

  var options = {
    chart: {
      title: "P&L",
      subtitle: "P&L",
    },
    bars: "vertical",
  };

  var chart = new google.charts.Bar(
    document.getElementById("barchart_material")
  );

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

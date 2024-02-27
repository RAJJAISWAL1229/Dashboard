// Get the JSON data
const jsonData = [
  {
    Timestamp: "17-06-2016",
    Open: -2,
    High: -2,
    Low: -2,
    Close: -2,
  },
  {
    Timestamp: "20-06-2016",
    Open: -2,
    High: -2,
    Low: -2,
    Close: -2,
  },
  {
    Timestamp: "22-06-2016",
    Open: -2.25,
    High: -2.25,
    Low: -2.25,
    Close: -2.25,
  },
  {
    Timestamp: "23-06-2016",
    Open: -2,
    High: -2,
    Low: -2,
    Close: -2,
  },
  {
    Timestamp: "24-06-2016",
    Open: -2,
    High: -2,
    Low: -2,
    Close: -2,
  },
  {
    Timestamp: "28-06-2016",
    Open: -2.25,
    High: -2.25,
    Low: -2.25,
    Close: -2.25,
  },
  {
    Timestamp: "29-06-2016",
    Open: -2.25,
    High: -2.25,
    Low: -2.25,
    Close: -2.25,
  },
  {
    Timestamp: "05-07-2016",
    Open: -2.5,
    High: -2.5,
    Low: -2.5,
    Close: -2.5,
  },
  {
    Timestamp: "07-07-2016",
    Open: -2.5,
    High: -2.5,
    Low: -2.5,
    Close: -2.5,
  },
  {
    Timestamp: "08-07-2016",
    Open: -2.75,
    High: -2.75,
    Low: -2.75,
    Close: -2.75,
  },
  {
    Timestamp: "13-07-2016",
    Open: -3,
    High: -3,
    Low: -3,
    Close: -3,
  },
];

// Extract data for chart
const labels2 = jsonData.map((data) => data.Timestamp);
const opens = jsonData.map((data) => data.Open);
const highs = jsonData.map((data) => data.High);
const lows = jsonData.map((data) => data.Low);
const closes = jsonData.map((data) => data.Close);

// Create the chart
const ctx2 = document.getElementById("myChart1").getContext("2d");
const myChart = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: labels2,
    datasets: [
      {
        label: "Open",
        data: opens,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "High",
        data: highs,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Low",
        data: lows,
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Close",
        data: closes,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Get the JSON data
const jsonData2 = [
  {
    time: "02-01-2018",
    pl: "5,453",
    RT: "1,880",
  },
  {
    time: "03-01-2018",
    pl: "-3,396",
    RT: "3,042",
  },
  {
    time: "04-01-2018",
    pl: "-9,445",
    RT: "3,219",
  },
  {
    time: "05-01-2018",
    pl: "-12,377",
    RT: "2,256",
  },
  {
    time: "08-01-2018",
    pl: "24,703",
    RT: "2,063",
  },
  {
    time: "09-01-2018",
    pl: "507",
    RT: "22",
  },
  {
    time: "10-01-2018",
    pl: "-612",
    RT: "6",
  },
  {
    time: "11-01-2018",
    pl: "-2,646",
    RT: "560",
  },
  {
    time: "12-01-2018",
    pl: "-830",
    RT: "170",
  },
];

// Extract data for chart
const labels = jsonData2.map((data) => data.time);
const plData = jsonData2.map((data) => data.pl.replace(",", ""));
const rtData = jsonData2.map((data) => data.RT.replace(",", ""));

// Create the chart
const ctx = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Profit/Loss",
        data: plData,
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "RT",
        data: rtData,
        fill: false,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

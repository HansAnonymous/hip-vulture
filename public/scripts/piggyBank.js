let money = 0;

function addMoneyToPiggyBank(x){
  var ctx = document.getElementById("myChart").getContext('2d');
  money = money + x;
  var myChart = new Chart(ctx, {
  type: 'line',
  data: {
  labels: ["May", "June", "July", "August", "September", "October"],
  datasets: [
        {
          label: "Macks",
          data: [0, 65, 45, 65, 35, 78],
          backgroundColor: "rgba(173, 27, 100, 0.1)",
          borderColor: [
            "rgba(173, 27, 100, 1)",
          ],
          borderWidth: 2,
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(173, 27, 100, 0.1)",
        },
        {
          label: "Nell",
          data: [0, 23, 47, 89, 73, 42],
          backgroundColor: 'rgba(73, 127, 100, 0.1)',
          borderColor: [
            'rgba(73, 127, 100, 1)',
          ],
          borderWidth: 2,
          pointBorderColor: "#fff",
          pointBackgroundColor: 'rgba(73, 127, 100, 0.1)',
        },
        {
          label: "Me",
          data: [0, 0, 0, 0, 0, money],
          backgroundColor: 'rgba(173, 127, 10, 0.1)',
          borderColor: [
            'rgba(173, 127, 10, 1)',
          ],
          borderWidth: 2,
          pointBorderColor: "#fff",
          pointBackgroundColor: 'rgba(173, 127, 10, 0.1)',
        }
      ],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
  });
}
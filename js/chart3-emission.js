document.addEventListener("DOMContentLoaded", function() {

    const labels = ["Private Cars", "Light Goods Vehicle", "Medium Goods Vehicles", "Heavy Gooos Vehicles", "Franchised Buses",
        "Taxis", "Light Buses and Non-Franchised Buses", "Others"
    ]
    const data = {
        labels: labels,
        datasets: [{
            // label: 'My First Dataset',
            data: [4.2, 1.9, 3.5, 0.9, 1.8, 1.9, 1.7, 0.1],
            backgroundColor: [
                // 'rgb(255, 99, 132)',
                // 'rgb(255, 159, 64)',
                // 'rgb(255, 205, 86)',
                '#FFFF66',
                '#CCFF99',
                '#99FFCC',
                '#99FFFF',
                '#99CCFF',
                '#CC99FF',
                '#FF99CC',
                '#E0E0E0'
            ],
            borderWidth: 1
        }],
    };
    const config = {
        type: 'bar',
        data: data,
        options: {

            scales: {
                x: {

                    title: {
                        display: true,
                        text: "Percentage"
                    }
                },
                y: {
                    suggestedMin: 0,
                    suggestedMax: 1.0,
                    ticks: {
                        stepSize: 0.2
                    }
                }
            },
            indexAxis: 'y',
            plugins: {
                title: {
                    display: true,
                    text: 'Percentage of carbon emissions of vehicles in Hong Kong in 2018 ',
                    font: {
                        size: 24
                    },
                    padding: 20
                },
                legend: {
                    display: false
                }
            },

        }
    };
    var myChart = new Chart(
        document.getElementById('myChart1'),
        config
    );

});
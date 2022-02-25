document.addEventListener("DOMContentLoaded", function() {

    const labels = ["Private Cars", "Light Goods Vehicle", "Medium Goods Vehicles", "Heavy Gooos Vehicles", "Franchised Buses",
        "Taxis", "Light Buses and Non-Franchised Buses", "Others"
    ]
    const data = {
        labels: labels,
        datasets: [{
            // label: 'My First Dataset',
            data: [71, 8, 4, 1, 2, 2, 1, 11],
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
        type: 'doughnut',
        data: data,
        options: {
            indexAxis: 'y',
            plugins: {
                title: {
                    display: true,
                    text: 'Types and Numbers of Registered Vehicles in Hong Kong',
                    font: {
                        size: 24
                    },
                    padding: 20
                },
                legend: {
                    display: true
                }
            },
            radius: "100%",
        }
    };
    var myChart = new Chart(
        document.getElementById('myChart2'),
        config
    );

});
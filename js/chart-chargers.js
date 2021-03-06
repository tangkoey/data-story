const labels = [
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020'
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Fast Charger',
        backgroundColor: 'rgb(0, 0, 0)',
        borderColor: 'rgb(255, 199, 132)',
        data: [122, 213, 335, 498, 586, 637],
    }, {
        label: 'Middle Speed Charger',
        backgroundColor: 'rgb(40, 40, 40)',
        borderColor: 'rgb(194, 19, 217)',
        data: [195, 349, 596, 823, 1113, 1441],
    }, {
        label: 'Slow Charger',
        backgroundColor: 'rgb(80, 80, 80)',
        borderColor: 'rgb(56, 220, 95)',
        data: [904, 956, 931, 845, 1230, 1273],
    }, {
        label: 'Total',
        backgroundColor: 'rgb(160, 160, 160)',
        borderColor: 'rgb(157, 255, 24)',
        data: [1221, 1518, 1862, 2166, 2929, 3351],
    }]
};
const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Number of Chargers for EVs',
                font: {
                    size: 24
                },
                padding: 10
            },
            legend: true
        }

    }
};
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
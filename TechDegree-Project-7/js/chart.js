const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("daily-chart");


// // Chart Widgets -------------------------------------------------------------------------------------/
    // LINE GRAPH::

    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
        };
    
        let trafficOptions = {
            aspectRatio: 2.5,
            animation: {
            duration: 0
            },
            scales: {
            yAxes: [{
            ticks: {
            beginAtZero:true
            }
            }]
            },
            legend : {
            display: false
            }
            };
    
        // Adding Chart to HTML
        let trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficData,
                options: trafficOptions
                });
// End LINE GRAPH -------------------------------------------------------------------------------------------------------------------------------------
// Begin BAR GRAPH ------------------------------------------------------------------------------------------------------------------------------------

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#8652A1',
    borderWidth: 1
    }]
    };

const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    }

let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });
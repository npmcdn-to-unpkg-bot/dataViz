window.onload = function() {
    Flotr.draw(
        document.getElementById("chart"), wins, {
            title: "Manchester City Wins ",
            colors: ["#89AFD2"],
            bars: {
                show: true,
                barWidth: 0.5,
                shadowSize: 0,
                fillOpacity: 1,
                lineWidth: 0
            },

            yaxis: {
                min: 0,
                tickDecimals: 0
            },

            xaxis: {
                ticks: years
            },

            grid: {
                horizontalLines: false,
                verticalLines: false
            }
        }
    );


    Flotr.draw(
        document.getElementById("chart2"), wins2, {
            title: "Premier League Wins (2011-2012) ",
            colors: ["#89AFD2", "#1D1D1D", "#DF021D", "#0E204B", "#E67840"],
            bars: {
                show: true,
                barWidth: 0.5,
                shadowSize: 0,
                fillOpacity: 1,
                lineWidth: 0
            },

            yaxis: {
                min: 0,
                tickDecimals: 0
            },

            xaxis: {
                ticks: teams
            },

            grid: {
                horizontalLines: false,
                verticalLines: false
            }
        }
    );
};

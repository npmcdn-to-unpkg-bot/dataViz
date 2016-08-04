window.onload = function() {
    Flotr.draw(
        document.getElementById("chart"), [{
            data: zero,
            label: "20<sup>th</sup>-Century Baseline Temperature",
            lines: {
                show: true,
                lineWidth: 1
            },
            yaxis: 2,
            shadowSize: 0,
            color: "red"
        }, {
            data: co2,
            label: "CO<sub>2</sub>-Concentration(ppm)",
            lines: {
                show: true
            }
        }, {
            data: temp,
            label: "Yearly Temperature Difference (°C)",
            lines: {
                show: true
            },
            yaxis: 2
        }], {
            title: "Global Temperature and CO<sub>2</sub> Concentration (NOAA Data)",
            grid: {
                horizontalLines: false,
                verticalLines: false
            },
            yaxis: {
                min: 300,
                max: 400
            },

            yaxis2: {
                min: -0.15,
                max: 0.69,
                tickFormatter: function(val) {
                    return val + " °C";
                }
            }
        }
    );
};

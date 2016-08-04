window.onload = function() {
    Flotr.draw(
        document.getElementById("chart"), [{
            data: co2,
            lines: {
                show: true
            }
        }], {
            grid: {
                horizontalLines: false,
                verticalLines: false
            },
            yaxis: {
                min: 300,
                max: 400
            }
        }
    );
};

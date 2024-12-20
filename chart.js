window.onload = function () {
    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Gold Rates for 18kt, 22kt, and 24kt"
        },
        axisX: {
            valueFormatString: "DD MMM",
            interval: 1,
            intervalType: "day",
        },
        axisY: {
            includeZero: false,
            gridThickness: 0
        },
        data: [
            {
                type: "line",
                name: "18kt Gold",
                showInLegend: false,
                lineThickness: 2,
                color: "rgba(0, 0, 255, 0.7)",
                markerType: "circle",
                markerSize: 8,
                markerColor: "blue",
                markerBorderColor: "white",
                markerBorderThickness: 2,
                cursor: "pointer",
                dataPoints: [
                    { x: new Date(2023, 4, 1), y: 45 },
                    { x: new Date(2023, 4, 2), y: 55 },
                    { x: new Date(2023, 4, 3), y: 50 },
                    { x: new Date(2023, 4, 4), y: 60 },
                    { x: new Date(2023, 4, 5), y: 55 },
                    { x: new Date(2023, 4, 6), y: 50 },
                    { x: new Date(2023, 4, 7), y: 45 },
                    { x: new Date(2023, 4, 8), y: 47 },
                    { x: new Date(2023, 4, 9), y: 55 },
                    { x: new Date(2023, 4, 10), y: 53 },
                    { x: new Date(2023, 4, 11), y: 60 },
                    { x: new Date(2023, 4, 12), y: 62 },
                    { x: new Date(2023, 4, 13), y: 50 },
                    { x: new Date(2023, 4, 14), y: 52 },
                ]
            },
            {
                type: "line",
                name: "22kt Gold",
                showInLegend: false,
                lineThickness: 2,
                color: "rgba(0, 255, 0, 0.7)",
                markerType: "circle",
                markerSize: 8,
                markerColor: "green",
                markerBorderColor: "white",
                markerBorderThickness: 2,
                cursor: "pointer",
                dataPoints: [
                    { x: new Date(2023, 4, 1), y: 40 },
                    { x: new Date(2023, 4, 2), y: 42 },
                    { x: new Date(2023, 4, 3), y: 44 },
                    { x: new Date(2023, 4, 4), y: 46 },
                    { x: new Date(2023, 4, 5), y: 47 },
                    { x: new Date(2023, 4, 6), y: 49 },
                    { x: new Date(2023, 4, 7), y: 50 },
                    { x: new Date(2023, 4, 8), y: 52 },
                    { x: new Date(2023, 4, 9), y: 55 },
                    { x: new Date(2023, 4, 10), y: 56 },
                    { x: new Date(2023, 4, 11), y: 58 },
                    { x: new Date(2023, 4, 12), y: 59 },
                    { x: new Date(2023, 4, 13), y: 60 },
                    { x: new Date(2023, 4, 14), y: 61 },
                    { x: new Date(2023, 4, 15), y: 63 },
                ]
            },
            {
                type: "line",
                name: "24kt Gold",
                showInLegend: false,
                lineThickness: 2,
                color: "red",
                markerType: "circle",
                markerSize: 8,
                markerColor: "red",
                markerBorderColor: "white",
                markerBorderThickness: 2,
                cursor: "pointer",
                dataPoints: [
                    { x: new Date(2023, 4, 1), y: 35 },
                    { x: new Date(2023, 4, 2), y: 37 },
                    { x: new Date(2023, 4, 3), y: 40 },
                    { x: new Date(2023, 4, 4), y: 42 },
                    { x: new Date(2023, 4, 5), y: 45 },
                    { x: new Date(2023, 4, 6), y: 47 },
                    { x: new Date(2023, 4, 7), y: 49 },
                    { x: new Date(2023, 4, 8), y: 50 },
                    { x: new Date(2023, 4, 9), y: 53 },
                    { x: new Date(2023, 4, 10), y: 55 },
                    { x: new Date(2023, 4, 11), y: 57 },
                    { x: new Date(2023, 4, 12), y: 59 },
                    { x: new Date(2023, 4, 13), y: 60 },
                    { x: new Date(2023, 4, 14), y: 62 },
                    { x: new Date(2023, 4, 15), y: 63 },
                ]
            }
        ]
    });

    document.getElementById("button1").onclick = function () {
        const dataPoints = chart.options.data[0].dataPoints; // Original data points
        const animatedData = []; // Store gradually added data points
        let index = 0;
    
        // Reset the chart data to show only the first line with no points initially
        chart.options.data = [{ ...chart.options.data[0], dataPoints: animatedData }];
        chart.render();
    
        // Gradually add points to simulate left-to-right animation
        const interval = setInterval(function () {
            if (index < dataPoints.length) {
                animatedData.push(dataPoints[index]);
                index++;
                chart.options.animationEnabled = false; // Disable default animation
                chart.render(); // Re-render the chart with new points
            } else {
                clearInterval(interval); // Stop the animation when all points are added
                chart.options.animationEnabled = true; // Re-enable animation after full update
            }
        }, 300); // Adjust the interval duration to 300ms for smoother, slower animation
    };

    document.getElementById("button2").onclick = function () {
        chart.options.data = [chart.options.data[1]]; // Show only the second line
        chart.render(); 
    };

    document.getElementById("button3").onclick = function () {
        chart.options.data = [chart.options.data[2]]; // Show only the third line
        chart.render();
    };

    // Event listeners to adjust line thickness on hover
    chart.options.data.forEach(function (dataSeries, index) {
        // Hover event for each data series (line)
        dataSeries.mouseover = function () {
            if (Number(index) == 0) {
                chart.options.data[index].type = 'area';  // Increase line thickness on hover
                chart.options.data[index].color = 'blue';
                chart.render();
            } else if (Number(index) == 1) {
                chart.options.data[index].type = 'area';  // Increase line thickness on hover
                chart.options.data[index].color = 'green';
                chart.render();
            } else {
                chart.options.data[index].type = 'area';  // Increase line thickness on hover
                chart.options.data[index].color = 'red';
                chart.render();
            }
            
        };
        // Mouseout event for each data series (line)
        dataSeries.mouseout = function () {
            if (Number(index) == 0) {
                chart.options.data[index].type = 'line';  // Reset line thickness when mouse leaves
                chart.options.data[index].color = 'blue';
                chart.render();
            } else if (Number(index) == 1) {
                chart.options.data[index].type = 'line';  // Reset line thickness when mouse leaves
                chart.options.data[index].color = 'green';
                chart.render();
            } else {
                chart.options.data[index].type = 'line';  // Reset line thickness when mouse leaves
                chart.options.data[index].color = 'red';
                chart.render();
            }
            
        };
    });

    chart.render();
};

// Example Javascript object with embedded arrays, properties, and values
var options = {
	version: 1.0,
	data: {
		updated: "7/30/2019",
		items: [
			// Pie Chart for Survival Rate
			{
				chart: {
					type: "pie"
				},
				labels: ["Survived", "Died"],
				series: [342, 549],
				title: {
					text: "Survival Rate",
					align: "center",
					style: {
						fontSize: "18px",
						color: "#595959",
						fontFamily: "Poppins"
					}
				},
				colors: ["#8ABFB5", "#A66F3F"],
				legend: {
					position: "bottom",
					fontSize: "14px",
					fontFamily: "Poppins",
					labels: {
						useSeriesColors: true
					}
				},
				dataLabels: {
					textAnchor: "middle",
					style: {
						fontSize: "16px",
						fontFamily: "Poppins",
						colors: ["#8ABFB5", "#A66F3F"]
					},
					dropShadow: {
						enabled: false
					}
				},
				plotOptions: {
					pie: {
						dataLabels: {
							offset: 40
						}
					}
				}
			}, // End of Pie Chart
			// Start of New Chart
			{}
		]
	}
};

// Assign a variable called chart an object constructed via the ApexCharts function, which defines an HTML element and the relevant chart data
var chart = new ApexCharts(document.querySelector("#chart0"), options.data.items[0]);

// Render the chart using the element and data
chart.render();

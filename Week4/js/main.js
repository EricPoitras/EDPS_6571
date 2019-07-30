var chart = new ApexCharts(
    document.querySelector("#chart0"),
    options.data.items[0]
);

console.log(options.data.items[0]);

chart.render();
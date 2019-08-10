var cont_sidebar = document.getElementById("cont_sidebar");
var btn_settings = document.getElementById("btn_settings");

console.log(cont_sidebar);
console.log(btn_settings);

btn_settings.addEventListener('click',function(){
    cont_sidebar.classList.toggle("active");
});
cont_sidebar.addEventListener('dblclick',function(){
    cont_sidebar.classList.toggle("active");
});

var chart = new ApexCharts(
    document.querySelector("#chart0"),
    options.data.items[0]
);

console.log(options.data.items[0]);

chart.render();
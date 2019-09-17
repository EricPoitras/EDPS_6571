// Example Variables
var cont_sidebar = document.getElementById("cont_sidebar");
var btn_settings = document.getElementById("btn_settings");
// HTML elements corresponding to icons are stored to variables

console.log(cont_sidebar);
console.log(btn_settings);
// Log them to the console and open in developer tools

// Example Event Listeners
btn_settings.addEventListener("click", function() {
	cont_sidebar.classList.toggle("active");
});
cont_sidebar.addEventListener("dblclick", function() {
	cont_sidebar.classList.toggle("active");
});
// These event listeners are assigned to each variable or icon. The event listened for includes a click or double click, which triggers the following block of code using a method called toggle to either add or remove a class value

// Example Variables
var cont_sidebar = document.getElementById("cont_sidebar");
var btn_settings = document.getElementById("btn_settings");
// HTML elements corresponding to icons are stored to variables

// HTML elements corresponding to form inputs
var dropdown_model = document.getElementById("dropdown_model");

console.log(cont_sidebar);
console.log(btn_settings);
console.log(dropdown_model);
// Log them to the console and open in developer tools

// Example Event Listeners
btn_settings.addEventListener("click", function() {
	cont_sidebar.classList.toggle("active");
});
cont_sidebar.addEventListener("dblclick", function() {
	cont_sidebar.classList.toggle("active");
});
dropdown_model.addEventListener("change", function() {
	router(dropdown_model.value);
});
// These event listeners are assigned to each variable or icon. The event listened for includes a click or double click, which triggers the following block of code using a method called toggle to either add or remove a class value

// Router to update UI components
function router(view_update_request) {
	console.log(view_update_request);
	switch (view_update_request) {
		case "Majority Class":
			model_majorityclass();
			break;
		case "Decision Tree":
			model_decisiontree();
			break;
		case "Neural Network":
			model_neuralnetwork();
			break;
		case "Naive Bayes":
			model_naivebayes();
			break;
		default:
			break;
	}
}

// Event Handlers for each type of model to process input parameter values and output prediction
function model_majorityclass() {
	console.log("Call Majority Class Model");
}

function model_decisiontree() {
	console.log("Call Decision Tree Model");
}

function model_neuralnetwork() {
	console.log("Call Neural Network Model");
}

function model_naivebayes() {
	console.log("Call Naive Bayes");
}

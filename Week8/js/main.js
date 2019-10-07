// Example Variables
var cont_sidebar = document.getElementById("cont_sidebar");
var cont_form_model = document.getElementById("cont_form_model");
var cont_form_input = document.getElementById("cont_form_input");
var btn_settings = document.getElementById("btn_settings");
var btn_predict = document.getElementById("btn_predict");
var btn_reset = document.getElementById("btn_reset");
// HTML elements corresponding to icons are stored to variables

// HTML elements corresponding to form inputs
var dropdown_model = document.getElementById("dropdown_model");
var model_label = document.getElementById("model_label");
var model_prediction = document.getElementById("model_prediction");
var model_likelihood = document.getElementById("model_likelihood");

var input_gender = document.getElementById("input_gender");
var input_title = document.getElementById("input_title");
var input_class = document.getElementById("input_class");
var input_embarked = document.getElementById("input_embarked");
var input_siblings = document.getElementById("input_siblings");
var input_parch = document.getElementById("input_parch");
var input_age = document.getElementById("input_age");
var input_fare = document.getElementById("input_fare");

// Variables as input for model parameters
var value_gender = input_gender.value;
var value_title = input_title.value;
var value_class = input_class.value;
var value_embarked = input_embarked.value;
var value_siblings = input_siblings.value;
var value_parch = input_parch.value;
var value_age = input_age.value;
var value_fare = input_fare.value;

// Log them to the console and open in developer tools
console.log(cont_sidebar);
console.log(cont_form_model);
console.log(cont_form_input);
console.log(btn_settings);
console.log(btn_predict);
console.log(btn_reset);
console.log(dropdown_model);
console.log(input_gender);
console.log(input_title);
console.log(input_class);
console.log(input_embarked);
console.log(input_siblings);
console.log(input_parch);
console.log(input_age);
console.log(input_fare);

// Example Event Listeners
btn_settings.addEventListener("click", function() {
	cont_sidebar.classList.toggle("active");
});
cont_sidebar.addEventListener("dblclick", function() {
	cont_sidebar.classList.toggle("active");
});
dropdown_model.addEventListener("change", function() {
	cont_form_model.classList.toggle("d-none");
	cont_form_input.classList.toggle("d-none");
	model_label.textContent = dropdown_model.value;
});
btn_reset.addEventListener("click", function() {
	cont_form_model.classList.toggle("d-none");
	cont_form_input.classList.toggle("d-none");
});
btn_predict.addEventListener("click", function() {
	router(dropdown_model.value);
});
dropdown_model.addEventListener("click", function() {});
input_gender.addEventListener("click", function() {
	value_gender = input_gender.value;
	console.log(value_gender);
});
input_title.addEventListener("click", function() {
	value_title = input_title.value;
	console.log(value_title);
});
input_class.addEventListener("click", function() {
	value_class = input_class.value;
	console.log(value_class);
});
input_embarked.addEventListener("click", function() {
	value_embarked = input_embarked.value;
	console.log(value_embarked);
});
input_siblings.addEventListener("click", function() {
	value_siblings = input_siblings.value;
	console.log(value_siblings);
});
input_parch.addEventListener("click", function() {
	value_parch = input_parch.value;
	console.log(value_parch);
});
input_age.addEventListener("change", function() {
	value_age = input_age.value;
	console.log(value_age);
});
input_fare.addEventListener("change", function() {
	value_fare = input_fare.value;
	console.log(value_fare);
});
// These event listeners are assigned to each variable or icon. The event listened for includes a click or double click, which triggers the following block of code using a method called toggle to either add or remove a class value

// Router to update UI components
function router(view_update_request) {
	console.log(view_update_request);
	var model_input = [value_gender, value_title, value_class, value_embarked, value_siblings, value_parch, value_age, value_fare];
	switch (view_update_request) {
		case "Majority Class":
			var model_output = model_majorityclass();
			console.log(model_output.prediction);
			console.log(model_output.likelihood);
			model_prediction.textContent = model_output.prediction;
			model_likelihood.textContent = model_output.likelihood;
			chart4.updateOptions({ title: { text: "Majority Class" } });
			chart4.updateSeries([model_output.series_survived, model_output.series_died]);
			break;
		case "Decision Tree":
			model_decisiontree(model_input);
			break;
		case "Neural Network":
			model_neuralnetwork(model_input);
			break;
		case "Naive Bayes":
			model_naivebayes(model_input);
			break;
		default:
			break;
	}
}

// Event Handlers for each type of model to process input parameter values and output prediction
function model_majorityclass() {
	console.log("Call Majority Class Model");
	return { prediction: "Died", likelihood: "62%", series_survived: 38, series_died: 62 };
}

function model_decisiontree(model_input) {
	console.log("Call Decision Tree Model");
	console.log(model_input);
}

function model_neuralnetwork(model_input) {
	console.log("Call Neural Network Model");
	console.log(model_input);
}

function model_naivebayes(model_input) {
	console.log("Call Naive Bayes");
	console.log(model_input);
}

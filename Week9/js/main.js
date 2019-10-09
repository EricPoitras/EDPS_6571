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
	var model_input = { gender: value_gender, title: value_title, class: value_class, embarked: value_embarked, siblings: value_siblings, parch: value_parch, age: value_age, fare: value_fare };
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
			var model_output = model_decisiontree(model_input);
			console.log(model_output.prediction);
			console.log(model_output.likelihood);
			model_prediction.textContent = model_output.prediction;
			model_likelihood.textContent = model_output.likelihood;
			chart4.updateOptions({ title: { text: "Decision Tree" } });
			chart4.updateSeries([model_output.series_survived, model_output.series_died]);
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
	/* RapidMiner Output
	Sex = female
|   SibSp > 4.500: No {No=4, Yes=0}
|   SibSp = 4.500
|   |   Pclass > 2.500
|   |   |   Fare > 32.881: No {No=5, Yes=0}
|   |   |   Fare = 32.881
|   |   |   |   Age > 1.500
|   |   |   |   |   SibSp > 2.500: No {No=11, Yes=3}
|   |   |   |   |   SibSp = 2.500
|   |   |   |   |   |   Age > 38.500: No {No=8, Yes=1}
|   |   |   |   |   |   Age = 38.500
|   |   |   |   |   |   |   Embarked = Cherbourg
|   |   |   |   |   |   |   |   Fare > 13.935
|   |   |   |   |   |   |   |   |   Fare > 17.252: Yes {No=0, Yes=4}
|   |   |   |   |   |   |   |   |   Fare = 17.252: No {No=7, Yes=2}
|   |   |   |   |   |   |   |   Fare = 13.935: Yes {No=0, Yes=6}
|   |   |   |   |   |   |   Embarked = Queenstown: Yes {No=8, Yes=24}
|   |   |   |   |   |   |   Embarked = Southampton: No {No=29, Yes=28}
|   |   |   |   Age = 1.500: Yes {No=0, Yes=4}
|   |   Pclass = 2.500: Yes {No=9, Yes=161}
Sex = male
|   Age > 0.960
|   |   Pclass > 1.500
|   |   |   Age > 3.500
|   |   |   |   Age > 9.500
|   |   |   |   |   Title = Master: No {No=4, Yes=3}
|   |   |   |   |   Title = Mr
|   |   |   |   |   |   Fare > 51.698
|   |   |   |   |   |   |   Fare > 63.023: No {No=8, Yes=0}
|   |   |   |   |   |   |   Fare = 63.023: Yes {No=2, Yes=5}
|   |   |   |   |   |   Fare = 51.698: No {No=356, Yes=39}
|   |   |   |   |   Title = Rare: No {No=8, Yes=0}
|   |   |   |   Age = 9.500
|   |   |   |   |   SibSp > 2: No {No=8, Yes=0}
|   |   |   |   |   SibSp = 2: Yes {No=0, Yes=5}
|   |   |   Age = 3.500
|   |   |   |   SibSp > 2.500: No {No=5, Yes=1}
|   |   |   |   SibSp = 2.500: Yes {No=0, Yes=7}
|   |   Pclass = 1.500: No {No=77, Yes=44}
|   Age = 0.960: Yes {No=0, Yes=5}
	*/
	if (model_input.gender == "Female") {
		if (model_input.siblings > 4.5) {
			return { prediction: "Died", likelihood: "100%", series_survived: 0, series_died: 100 };
		} else {
			if (model_input.class > 2.5) {
				if (model_input.fare > 32.881) {
					return { prediction: "Died", likelihood: "100%", series_survived: 0, series_died: 100 };
				} else {
					if (model_input.age > 1.5) {
						if (model_input.siblings > 2.5) {
							return { prediction: "Died", likelihood: "79%", series_survived: 21, series_died: 79 };
						} else {
							if (model_input.age > 38.5) {
								return { prediction: "Died", likelihood: "89%", series_survived: 11, series_died: 89 };
							} else {
								if (model_input.embarked == "Cherbourg") {
									if (model_input.fare > 13.935) {
										if (model_input.fare > 17.252) {
											return { prediction: "Survived", likelihood: "100%", series_survived: 100, series_died: 0 };
										} else {
											return { prediction: "Died", likelihood: "78%", series_survived: 22, series_died: 78 };
										}
									} else {
										return { prediction: "Survived", likelihood: "100%", series_survived: 100, series_died: 0 };
									}
								} else if (model_input.embarked == "Queenstown") {
									return { prediction: "Survived", likelihood: "75%", series_survived: 75, series_died: 25 };
								} else {
									return { prediction: "Died", likelihood: "51%", series_survived: 49, series_died: 51 };
								}
							}
						}
					} else {
						return { prediction: "Survived", likelihood: "100%", series_survived: 100, series_died: 0 };
					}
				}
			} else {
				return { prediction: "Survived", likelihood: "95%", series_survived: 95, series_died: 5 };
			}
		}
	} else {
		if (model_input.age > 0.96) {
			if (model_input.class > 1.5) {
				if (model_input.age > 3.5) {
					if (model_input.age > 9.5) {
						if (model_input.title == "Master") {
							return { prediction: "Died", likelihood: "57%", series_survived: 43, series_died: 57 };
						} else if (model_input.title == "Mr") {
							if (model_input.fare > 51.698) {
								if (model_input.fare > 63.023) {
									return { prediction: "Died", likelihood: "100%", series_survived: 0, series_died: 100 };
								} else {
									return { prediction: "Survived", likelihood: "71%", series_survived: 71, series_died: 29 };
								}
							} else {
								return { prediction: "Died", likelihood: "90%", series_survived: 10, series_died: 90 };
							}
						} else if (model_input.title == "Rare") {
							return { prediction: "Died", likelihood: "100%", series_survived: 0, series_died: 100 };
						}
					} else {
						if (model_input.siblings > 2) {
							return { prediction: "Died", likelihood: "100%", series_survived: 0, series_died: 100 };
						} else {
							return { prediction: "Survived", likelihood: "100%", series_survived: 100, series_died: 0 };
						}
					}
				} else {
					if (model_input.siblings > 2.5) {
						return { prediction: "Died", likelihood: "83%", series_survived: 17, series_died: 83 };
					} else {
						return { prediction: "Survived", likelihood: "100%", series_survived: 100, series_died: 0 };
					}
				}
			} else {
				return { prediction: "Died", likelihood: "64%", series_survived: 36, series_died: 64 };
			}
		} else {
			return { prediction: "Survived", likelihood: "100%", series_survived: 100, series_died: 0 };
		}
	}
}

function model_neuralnetwork(model_input) {
	console.log("Call Neural Network Model");
	console.log(model_input);
}

function model_naivebayes(model_input) {
	console.log("Call Naive Bayes");
	console.log(model_input);
}

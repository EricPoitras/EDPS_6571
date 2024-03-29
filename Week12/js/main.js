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
input_siblings.addEventListener("change", function() {
	value_siblings = input_siblings.value;
	console.log(value_siblings);
});
input_parch.addEventListener("change", function() {
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
	var model_input = {
		gender: value_gender,
		title: value_title,
		class: value_class,
		embarked: value_embarked,
		siblings: value_siblings,
		parch: value_parch,
		age: value_age,
		fare: value_fare
	};
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
			var model_output = model_neuralnetwork(model_input);
			console.log(model_output.prediction);
			console.log(model_output.likelihood);
			model_prediction.textContent = model_output.prediction;
			model_likelihood.textContent = model_output.likelihood;
			chart4.updateOptions({ title: { text: "Neural Network" } });
			chart4.updateSeries([model_output.series_survived, model_output.series_died]);
			break;
		case "Naive Bayes":
			var model_output = model_naivebayes(model_input);
			console.log(model_output.prediction);
			console.log(model_output.likelihood);
			model_prediction.textContent = model_output.prediction;
			model_likelihood.textContent = model_output.likelihood;
			chart4.updateOptions({ title: { text: "Naive Bayes" } });
			chart4.updateSeries([model_output.series_survived, model_output.series_died]);
			break;
		case "RM Auto Model":
			var model_output = model_RMAutoModel(model_input);
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
	/*
Hidden 1
========

Node 1 (Sigmoid)
----------------
Sex = male: 0.832
Sex = female: -0.820
Age: -0.027
Fare: 0.065
Parch: 0.364
Pclass: 3.866
SibSp: 0.337
Bias: 1.667

Node 2 (Sigmoid)
----------------
Sex = male: 1.795
Sex = female: -1.831
Age: -1.316
Fare: -2.580
Parch: 1.146
Pclass: 3.040
SibSp: 0.722
Bias: 2.612

Node 3 (Sigmoid)
----------------
Sex = male: 2.454
Sex = female: -2.400
Age: 5.801
Fare: 1.116
Parch: -2.994
Pclass: -0.756
SibSp: 1.438
Bias: -0.483

Node 4 (Sigmoid)
----------------
Sex = male: -0.942
Sex = female: 0.910
Age: 1.021
Fare: -0.074
Parch: 0.646
Pclass: 1.200
SibSp: 1.571
Bias: 0.198

Node 5 (Sigmoid)
----------------
Sex = male: -0.088
Sex = female: 0.066
Age: 0.754
Fare: -0.298
Parch: 2.460
Pclass: 2.110
SibSp: 3.799
Bias: 0.654

Node 6 (Sigmoid)
----------------
Sex = male: 0.370
Sex = female: -0.443
Age: 3.763
Fare: -0.632
Parch: -1.076
Pclass: 3.362
SibSp: 0.716
Bias: 0.671

Output
======

Class 'false' (Sigmoid)
-----------------------
Node 1: 0.727
Node 2: 1.292
Node 3: 3.619
Node 4: 1.320
Node 5: 2.596
Node 6: 1.516
Threshold: -4.849

Class 'true' (Sigmoid)
----------------------
Node 1: -0.729
Node 2: -1.291
Node 3: -3.621
Node 4: -1.322
Node 5: -2.595
Node 6: -1.515
Threshold: 4.851
*/

	// Neural network topology
	var node1 = [0.832, -0.82, -0.027, 0.065, 0.364, 3.866, 0.337, 1.667];
	var node2 = [1.795, -1.831, -1.316, -2.58, 1.146, 3.04, 0.722, 2.612];
	var node3 = [2.454, -2.4, 5.801, 1.116, -2.994, -0.756, 1.438, -0.483];
	var node4 = [-0.942, 0.91, 1.021, -0.074, 0.646, 1.2, 1.571, 0.198];
	var node5 = [-0.088, 0.066, 0.754, -0.298, 2.46, 2.11, 3.799, 0.654];
	var node6 = [0.37, -0.443, 3.763, -0.632, -1.076, 3.362, 0.716, 0.671];
	var output_class_false = [0.727, 1.292, 3.619, 1.32, 2.596, 1.516, -4.849];
	var output_class_true = [-0.729, -1.291, -3.621, -1.322, -2.595, -1.515, 4.851];

	// Min and Max range of values for each attribute
	var range_age = [0.42, 80];
	var range_fare = [0, 512.329];
	var range_parch = [0, 6];
	var range_pclass = [1, 3];
	var range_sibsp = [0, 8];

	// Container for input values
	var model_input_scaledvalues = [];

	// Scale the nominal attribute inputs to range of -1 and 1
	if (model_input.gender == "Male") {
		model_input_scaledvalues[0] = 1;
		model_input_scaledvalues[1] = -1;
	} else {
		model_input_scaledvalues[0] = -1;
		model_input_scaledvalues[1] = 1;
	}

	// Scale the input values to range of -1 and 1
	model_input_scaledvalues[2] = ((model_input.age - range_age[0]) * (1 - -1)) / (range_age[1] - range_age[0]) + -1;
	model_input_scaledvalues[3] = ((model_input.fare - range_fare[0]) * (1 - -1)) / (range_fare[1] - range_fare[0]) + -1;
	model_input_scaledvalues[4] = ((model_input.parch - range_parch[0]) * (1 - -1)) / (range_parch[1] - range_parch[0]) + -1;
	model_input_scaledvalues[5] = ((model_input.class - range_pclass[0]) * (1 - -1)) / (range_pclass[1] - range_pclass[0]) + -1;
	model_input_scaledvalues[6] = ((model_input.siblings - range_sibsp[0]) * (1 - -1)) / (range_sibsp[1] - range_sibsp[0]) + -1;

	console.log(model_input_scaledvalues);

	// Container for net input calculations
	var node_output = [0, 0, 0, 0, 0, 0, 0];

	// Net input calculations for hidden layer
	for (i = 0; i < model_input_scaledvalues.length; i++) {
		node_output[0] += model_input_scaledvalues[i] * node1[i];
		node_output[1] += model_input_scaledvalues[i] * node2[i];
		node_output[2] += model_input_scaledvalues[i] * node3[i];
		node_output[3] += model_input_scaledvalues[i] * node4[i];
		node_output[4] += model_input_scaledvalues[i] * node5[i];
		node_output[5] += model_input_scaledvalues[i] * node6[i];
	}
	console.log(node_output);

	// Add bias value to hidden layer
	node_output[0] += node1[7];
	node_output[1] += node2[7];
	node_output[2] += node3[7];
	node_output[3] += node4[7];
	node_output[4] += node5[7];
	node_output[5] += node6[7];
	console.log(node_output);

	// Net output calculations for hidden layer
	node_output[0] = 1 / (1 + Math.pow(Math.E, -node_output[0]));
	node_output[1] = 1 / (1 + Math.pow(Math.E, -node_output[1]));
	node_output[2] = 1 / (1 + Math.pow(Math.E, -node_output[2]));
	node_output[3] = 1 / (1 + Math.pow(Math.E, -node_output[3]));
	node_output[4] = 1 / (1 + Math.pow(Math.E, -node_output[4]));
	node_output[5] = 1 / (1 + Math.pow(Math.E, -node_output[5]));
	console.log(node_output);

	// Net input calculations for output layer
	var node_output_class_false = 0;
	var node_output_class_true = 0;

	for (i = 0; i < node_output.length; i++) {
		node_output_class_false += output_class_false[i] * node_output[i];
		node_output_class_true += output_class_true[i] * node_output[i];
	}
	console.log(node_output_class_false + ";" + node_output_class_true);

	// Add bias value to output layer
	node_output_class_false += output_class_false[6];
	node_output_class_true += output_class_true[6];
	console.log(node_output_class_false + ";" + node_output_class_true);

	// Net output calculations for output layer
	node_output_class_false = 1 / (1 + Math.pow(Math.E, -node_output_class_false));
	node_output_class_true = 1 / (1 + Math.pow(Math.E, -node_output_class_true));
	console.log(node_output_class_false + ";" + node_output_class_true);

	var neural_network_prediction;
	var neural_network_likelihood;
	if (node_output_class_false >= node_output_class_true) {
		neural_network_prediction = "Died";
		neural_network_likelihood = Math.round(node_output_class_false * 100) + "%";
	} else {
		neural_network_prediction = "Survived";
		neural_network_likelihood = Math.round(node_output_class_true * 100) + "%";
	}

	return {
		prediction: neural_network_prediction,
		likelihood: neural_network_likelihood,
		series_survived: Math.round(node_output_class_true * 100),
		series_died: Math.round(node_output_class_false * 100)
	};
}

function model_naivebayes(model_input) {
	console.log("Call Naive Bayes");
	/*
	Age	mean	30.415099646415896	28.423600346020766
	Age	standard deviation	12.457370325767693	13.682861820326233
	Embarked	value=Southampton	0.7777734523065575	0.6382301564195537
	Embarked	value=Cherbourg	0.13661295114380256	0.27352910038906386
	Embarked	value=Queenstown	0.08561154764221979	0.08823743482518591
	Embarked	value=unknown	2.0489074201182227E-6	3.308366196437552E-6
	Fare	mean	22.117886885245877	48.209498235294106
	Fare	standard deviation	31.388206530564016	66.74877308878193
	Parch	mean	0.3296903460837887	0.4676470588235294
	Parch	standard deviation	0.8231660076814714	0.77315603764434
	Pclass	mean	2.5318761384335153	1.9558823529411764
	Pclass	standard deviation	0.7358050454585693	0.8627633372419359
	Sex	value=male	0.8524540788624466	0.3205873011671916
	Sex	value=female	0.14754182332271315	0.6794060821004155
	Sex	value=MISSING	2.0489074201182227E-6	3.308366196437552E-6
	Sex	value=unknown	2.0489074201182227E-6	3.308366196437552E-6
	SibSp	mean	0.5537340619307832	0.4764705882352941
	SibSp	standard deviation	1.2883991404864723	0.7098376662355503
	Title	value=Mr	0.7941635062399219	0.24117499156372205
	Title	value=Mrs	0.0491817721747219	0.29705623523651353
	Title	value=Miss	0.09836149545041974	0.370584187437555
	Title	value=Master	0.0309670598503894	0.06764902436926418
	Title	value=Rare	0.027324117385522897	0.023532253048639273
	Title	value=unknown	2.0488990241093954E-6	3.308344306008616E-6
	*/
	var Prob_Survived = 340 / (340 + 549);
	var Prob_Died = 549 / (340 + 549);

	var Pred_Survived = Prob_Survived;
	var Pred_Died = Prob_Died;
	console.log(Pred_Survived + " ; " + Pred_Died);
	// The conditional probabilities of nominal attribute inputs
	if (model_input.gender == "Male") {
		Pred_Died = 0.8524540788624466 * Pred_Died;
		Pred_Survived = 0.3205873011671916 * Pred_Survived;
	} else {
		Pred_Died = 0.14754182332271315 * Pred_Died;
		Pred_Survived = 0.6794060821004155 * Pred_Survived;
	}
	console.log(Pred_Survived + " ; " + Pred_Died);

	if (model_input.title == "Mr") {
		Pred_Died = 0.7941635062399219 * Pred_Died;
		Pred_Survived = 0.24117499156372205 * Pred_Survived;
	} else if (model_input.title == "Mrs") {
		Pred_Died = 0.0491817721747219 * Pred_Died;
		Pred_Survived = 0.29705623523651353 * Pred_Survived;
	} else if (model_input.title == "Miss") {
		Pred_Died = 0.09836149545041974 * Pred_Died;
		Pred_Survived = 0.370584187437555 * Pred_Survived;
	} else if (model_input.title == "Master") {
		Pred_Died = 0.0309670598503894 * Pred_Died;
		Pred_Survived = 0.06764902436926418 * Pred_Survived;
	} else {
		Pred_Died = 0.027324117385522897 * Pred_Died;
		Pred_Survived = 0.023532253048639273 * Pred_Survived;
	}
	console.log(Pred_Survived + " ; " + Pred_Died);

	if (model_input.embarked == "Southampton") {
		Pred_Died = 0.7777734523065575 * Pred_Died;
		Pred_Survived = 0.6382301564195537 * Pred_Survived;
	} else if (model_input.embarked == "Cherbourg") {
		Pred_Died = 0.13661295114380256 * Pred_Died;
		Pred_Survived = 0.27352910038906386 * Pred_Survived;
	} else {
		Pred_Died = 0.08561154764221979 * Pred_Died;
		Pred_Survived = 0.08823743482518591 * Pred_Survived;
	}
	console.log(Pred_Survived + " ; " + Pred_Died);

	// The conditional probabilities of numerical attribute inputs
	Pred_Died = (1 / (Math.sqrt(2 * Math.PI) * 12.457370325767693)) * Math.pow(Math.E, -Math.pow(model_input.age - 30.415099646415896, 2) / (2 * Math.pow(12.457370325767693, 2))) * Pred_Died;
	Pred_Survived = (1 / (Math.sqrt(2 * Math.PI) * 13.682861820326233)) * Math.pow(Math.E, -Math.pow(model_input.age - 28.423600346020766, 2) / (2 * Math.pow(13.682861820326233, 2))) * Pred_Survived;
	console.log(Pred_Survived + " ; " + Pred_Died);

	Pred_Died = (1 / (Math.sqrt(2 * Math.PI) * 31.388206530564016)) * Math.pow(Math.E, -Math.pow(model_input.fare - 22.117886885245877, 2) / (2 * Math.pow(31.388206530564016, 2))) * Pred_Died;
	Pred_Survived = (1 / (Math.sqrt(2 * Math.PI) * 66.74877308878193)) * Math.pow(Math.E, -Math.pow(model_input.fare - 48.209498235294106, 2) / (2 * Math.pow(66.74877308878193, 2))) * Pred_Survived;
	console.log(Pred_Survived + " ; " + Pred_Died);
	Pred_Died = (1 / (Math.sqrt(2 * Math.PI) * 0.8231660076814714)) * Math.pow(Math.E, -Math.pow(model_input.parch - 0.3296903460837887, 2) / (2 * Math.pow(0.8231660076814714, 2))) * Pred_Died;
	Pred_Survived = (1 / (Math.sqrt(2 * Math.PI) * 0.77315603764434)) * Math.pow(Math.E, -Math.pow(model_input.parch - 0.4676470588235294, 2) / (2 * Math.pow(0.77315603764434, 2))) * Pred_Survived;
	console.log(Pred_Survived + " ; " + Pred_Died);
	Pred_Died = (1 / (Math.sqrt(2 * Math.PI) * 0.7358050454585693)) * Math.pow(Math.E, -Math.pow(model_input.class - 2.5318761384335153, 2) / (2 * Math.pow(0.7358050454585693, 2))) * Pred_Died;
	Pred_Survived = (1 / (Math.sqrt(2 * Math.PI) * 0.8627633372419359)) * Math.pow(Math.E, -Math.pow(model_input.class - 1.9558823529411764, 2) / (2 * Math.pow(0.8627633372419359, 2))) * Pred_Survived;
	console.log(Pred_Survived + " ; " + Pred_Died);
	Pred_Died = (1 / (Math.sqrt(2 * Math.PI) * 1.2883991404864723)) * Math.pow(Math.E, -Math.pow(model_input.siblings - 0.5537340619307832, 2) / (2 * Math.pow(1.2883991404864723, 2))) * Pred_Died;
	Pred_Survived = (1 / (Math.sqrt(2 * Math.PI) * 0.7098376662355503)) * Math.pow(Math.E, -Math.pow(model_input.siblings - 0.4764705882352941, 2) / (2 * Math.pow(0.7098376662355503, 2))) * Pred_Survived;
	console.log(Pred_Survived + " ; " + Pred_Died);
	var naive_bayse_prediction;
	var naive_bayse_likelihood;
	if (Pred_Died >= Pred_Survived) {
		naive_bayse_prediction = "Died";
		naive_bayse_likelihood = Math.round((Pred_Died / (Pred_Died + Pred_Survived)) * 100) + "%";
	} else {
		naive_bayse_prediction = "Survived";
		naive_bayse_likelihood = Math.round((Pred_Survived / (Pred_Survived + Pred_Died)) * 100) + "%";
	}

	return {
		prediction: naive_bayse_prediction,
		likelihood: naive_bayse_likelihood,
		series_survived: Math.round((Pred_Survived / (Pred_Died + Pred_Survived)) * 100),
		series_died: Math.round((Pred_Died / (Pred_Died + Pred_Survived)) * 100)
	};
}

function model_RMAutoModel(model_input) {
	console.log("Call RM Auto Model");

	var proxy_server = "https://cors-anywhere.herokuapp.com/";

	// async function
	async function fetchAsync() {
		// await response of fetch call
		let response = await fetch(proxy_server + "https://automodel.rapidminer.com/am/api/deployments/6426091e-3084-4f89-ab1e-4bac3652cb19", {
			method: "post",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				data: [
					{
						Age: model_input.age,
						Embarked: model_input.embarked,
						Fare: model_input.fare,
						Parch: model_input.parch,
						Pclass: model_input.class,
						Sex: model_input.gender,
						SibSp: model_input.siblings,
						Title: model_input.title
					}
				]
			})
		});
		// only proceed once promise is resolved
		let data = await response.json();
		// only proceed once second promise is resolved
		return data;
	}

	// trigger async function
	// log response or catch error of fetch promise
	fetchAsync()
		.then(function(prediction) {
			console.log(prediction.data[0]["prediction(Survived)"]);
			var AutoModel_prediction;
			var AutoModel_likelihood;
			if (prediction.data[0]["prediction(Survived)"] == "No") {
				AutoModel_prediction = "Died";
				AutoModel_likelihood = Math.round(prediction.data[0]["confidence(No)"] * 100) + "%";
			} else {
				AutoModel_prediction = "Survived";
				AutoModel_likelihood = Math.round(prediction.data[0]["confidence(Yes)"] * 100) + "%";
			}

			model_prediction.textContent = AutoModel_prediction;
			model_likelihood.textContent = AutoModel_likelihood;
			chart4.updateOptions({ title: { text: "RM Auto Model (Decision Tree)" } });
			chart4.updateSeries([Math.round(prediction.data[0]["confidence(Yes)"] * 100), Math.round(prediction.data[0]["confidence(No)"] * 100)]);
		})
		.catch(reason => console.log(reason.message));
}

"use strict";

let teams = [
	{code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX"},
	{code: "DEN", name: "Denver Broncos", plays: "Denver, CO"},
	{code: "HOU", name: "Houston Texans", plays: "Houston, TX"},
	{code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO"}
];

window.onload = function() {
	initializeFootball();
};

function initializeFootball() {
	let select = document.getElementById("football");

	// Add "Select a team" option
	let option = document.createElement("option");
	option.text = "Select a team";
	option.value = "";
	select.appendChild(option);

	// Add teams to the dropdown
	for (let i = 0; i < teams.length; i++) {
		option = document.createElement("option");
		option.text = teams[i].name + " (" + teams[i].code + ")";
		option.value = teams[i].code;
		select.appendChild(option);
	}

	// Add event listener to form
	let form = document.getElementsByTagName("form")[0];
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		handleSubmit();
	});
}

function handleSubmit() {
	let select = document.getElementById("football");
	let message = document.getElementById("message");

	if (select.value === "") {
		message.innerHTML = "";
	} else {
		let selectedTeam = teams.find(function(team) {
			return team.code === select.value;
		});

		message.innerHTML = "You selected the " + selectedTeam.name + " (" + selectedTeam.code + ") who play in " + selectedTeam.plays;
	}
}

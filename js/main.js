/**
 * Created by Hashim Hayat on 5/29/17.
 */

var console = document.getElementById('console');

var about = document.getElementById('about');
var resume = document.getElementById('resume');
var project = document.getElementById('projects');
var research = document.getElementById('research');
var social = document.getElementById('social');

var sections = [about, resume, project, research, social];

$(document).ready(function(){

	// When one selects a tab.
	// Unselect all other tabs
	// Select the current tab
	// replace the content on the screen with the new content

	unselectAll();
	onHover();
	mouseOut();
	onClick();

});

function onClick() {
	sections.forEach(function(section) {
		section.addEventListener("click", function(event){

			event.preventDefault();
			section.classList.add("selected");
			//console.innerHTML = "section";


		});
	});
}

function unselectAll(){

	sections.forEach(function(section) {
		section.classList.remove("selected");
	});
}

function onHover(){
	
	sections.forEach(function(section) {
		section.addEventListener("mouseover", function(){
			section.classList.add("selected");
		});
	});
}

function mouseOut(){
	
	sections.forEach(function(section) {
		section.addEventListener("mouseout", function(){
			section.classList.remove("selected");
		});
	});

}
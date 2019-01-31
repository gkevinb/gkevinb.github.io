"use strict"

var app = new Vue({
	el: "#app",
    data: {
		seen: false,
		row: "5",
		column: "2",
        message: "hello you!! " + foo("man"),
		message2: "<strong>YOU</strong>",
		message3: "default",
		todos: [
			{ text: "Wake up" },
			{ text: "Take shower" },
			{ text: "Go to work" }
		]
    },
	methods: {
		stringToNum: function(string){
			return parseInt(string, 10);
		},
		matrixId: function(i, j){
			return "_" + i.toString() + "x" + j.toString() + "_";
		}
	}

})

function foo(bar){
	bar += " !!!!!!!!!";
	return bar;
}

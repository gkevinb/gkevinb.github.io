"use strict"

var app = new Vue({
	el: "#app",
    data: {
		seen: false,
        message: "hello you!! " + foo("man"),
		message2: "<strong>YOU</strong>",
		message3: "default",
		todos: [
			{ text: "Wake up" },
			{ text: "Take shower" },
			{ text: "Go to work" }
		]
    }
})

function foo(bar){
	bar += " !!!!!!!!!";
	return bar;
}

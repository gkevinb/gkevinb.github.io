"use strict"

var app = new Vue({
	el: "#app",
    data: {
        message: "hello you!! " + foo("man"),
		message2: "<strong>YOU</strong>",
		message3: "default"
    }
})

function foo(bar){
	bar += " !!!!!!!!!";
	return bar;
}

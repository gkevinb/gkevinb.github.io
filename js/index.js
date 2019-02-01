"use strict"

function foo(bar){
	bar += " !!!!!!!!!";
	return bar;
}


Vue.component("my-comp", {
	props: ["todo"],
	template: "<li>{{ todo.text }}</li>"
})

Vue.component("animal", {
	props: ["name", "foo"],
	template: '<p v-html="foo"></p>'
})

Vue.component("home-tab", {
	template: "<div>Home</div>"
})
Vue.component("about-tab", {
	template: "<div>About</div>"
})
Vue.component("projects-tab", {
	template: "<div>Projects</div>"
})
Vue.component("blog-tab", {
	template: "<div>Blog</div>"
})

var app = new Vue({
	name: "VueAPP",
	el: "#app",
    data: {
		currentTab: "Home",
		tabs: ["Home", "About", "Projects", "Blog"],
		seen: true,
		row: "5",
		column: "2",
        message: "hello you!! " + foo("man"),
		message2: "<strong>YOU</strong>",
		message3: "default",
		dog: "Doggy!",
		cat: "Kitty!!",
		bird: "Birdy!!!",
		todos: [
			{ text: "Wake up" },
			{ text: "Take shower" },
			{ text: "Go to work" }
		],
		groceryList: [
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheeese' },
			{ id: 2, text: 'Meat' },
		]
    },
	methods: {
		stringToNum: function(string){
			return parseInt(string, 10);
		},
		matrixId: function(i, j){
			return "_" + i.toString() + "x" + j.toString() + "_";
		},
		func: function(bar){
			bar += " !!!!!!!!!";
			return bar;
		}
	},
	computed: {
		getCurrentTab: function() {
			return this.currentTab.toLowerCase() + "-tab"
		}
	}


})



setTimeout(function(){
	console.log("UMM");
	app.message2 = "YELOOW"}, 2000);

console.log("GGG")

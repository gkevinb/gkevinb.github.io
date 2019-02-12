

Vue.component("my-comp", {
    props: ["todo"],
    template: "<li>{{ todo.text }}</li>"
})

Vue.component("animal", {
    props: ["name", "foo"],
    template: '<p v-html="foo"></p>'
})

Vue.component("home-tab", {
    name: "home-tab",
    template: `<div id="messages">
			   <p v-if="seen == true" v-html>{{ message }}</p>
			   <p v-html="message2"></p>
			   <p v-html="message.slice(0,5) + message3.slice(1,3)"></p>
			   </div>`,
    data: function() {
        return {
            seen: true,
            message: "hello you!",
            message2: "<strong>YOU</strong>",
            message3: "default"
        }
    }
})

Vue.component("about-tab", {
    template: `
	<div id="genmap">
	<input type="number" v-model="row"></input>
		<input type="number" v-model="column"></input>
		<table>
		<tr v-for="i in stringToNum(row)">
			<td v-for="j in stringToNum(column)">
				<input type="checkbox" :id="matrixId(i, j)"></input>
			</td>
		</tr>
	</table>
	<button type="button">Generate Map</button>
	<table>
		<tr v-for="i in stringToNum(row)">
			<td v-for="j in stringToNum(column)">[]</td>
		</tr>
	</table>
	</div>`,
    data: function() {
        return {
            row: "5",
            column: "2"
        }
    },
    methods: {
        stringToNum: function(string) {
            return parseInt(string, 10);
        },
        matrixId: function(i, j) {
            return "_" + i.toString() + "x" + j.toString() + "_";
        }
    },
})
Vue.component("projects-tab", {
    template: `<div id="tod">
				<ul>
					<li v-for="todo in todos">
						{{ todo.text }}
					</li>
				</ul>
				<ol>
					<my-comp v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">
					</my-comp>
				</ol>

				<p v-for="grocery in groceryList" v-html="grocery.id"></p>

				<animal :name="dog" :foo="func(dog)"> checkit!</animal>
				</div>`,
    data: function() {
        return {
            dog: "Doggy!",
            cat: "Kitty!!",
            bird: "Birdy!!!",
            todos: [{
                    text: "Wake up"
                },
                {
                    text: "Take shower"
                },
                {
                    text: "Go to work"
                }
            ],
            groceryList: [{
                    id: 0,
                    text: 'Vegetables'
                },
                {
                    id: 1,
                    text: 'Cheeese'
                },
                {
                    id: 2,
                    text: 'Meat'
                },
            ]
        }
    },
    methods: {
        func: function(bar) {
            bar += " !!!!!!"
            return bar
        }
    }
})


var app = new Vue({
    el: "#app",
    data: {
        currentTab: "Home",
        tabs: ["Home", "About", "Projects", "Blog"],
    },
    computed: {
        getCurrentTab: function() {
            return this.currentTab.toLowerCase() + "-tab"
        }
    }
})

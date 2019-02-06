"use strict"


class RewardMap {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.matrix = {};
        this.generateRewards();
    }
    generateRewards() {
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                var key = i.toString() + "x" + j.toString();
                this.matrix[key] = -1;
            }
        }
        this.matrix["2x1"] = -100;
        this.matrix["2x2"] = -100;
        this.matrix["2x3"] = 100;
    }
}

class QMatrix {
    constructor(rows, columns) {
        this.matrix = {};
        this.rows = rows
        this.columns = columns;
        this.generateMatrix();
    }
    generateMatrix() {
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                var key = i.toString() + "x" + j.toString();
                this.matrix[key] = [0, 0, 0, 0];
            }
        }
    }
}

class QLearningAgent {
    constructor(map, qMatrix) {
        this.map = map;
        this.qMatrix = qMatrix;
        this.initialPosition = "2x0";
        this.state = this.initialPosition;
        this.nextState = null;
        this.action = null;
        this.epsilon = 0.1;
        this.alpha = 0.5;
        this.gamma = 0.7;
    }
    getCoordinates(state) {
        var pattern = /\d+/g;
        var result = state.match(pattern);
        return [parseInt(result[0]), parseInt(result[1])];
    }
    getStateId(row, column) {
        return row.toString() + "x" + column.toString()
    }
    getAllowedDirections(state) {
        var directions = [];

        var row, column;
        [row, column] = this.getCoordinates(state);

        if (row > 0) {
            directions.push("UP");
        }
        if (column < this.map.columns - 1) {
            directions.push("RIGHT");
        }
        if (row < this.map.rows - 1) {
            directions.push("DOWN");
        }
        if (column > 0) {
            directions.push("LEFT");
        }
        return directions;
    }
    getNeighborhood(state) {
        var neighborhood = [];

        var row, column;
        [row, column] = this.getCoordinates(state);

        if (row > 0) {
            neighborhood.push(this.getStateId(row - 1, column))
        }
        if (column < this.map.columns - 1) {
            neighborhood.push(this.getStateId(row, column + 1))
        }
        if (row < this.map.rows - 1) {
            neighborhood.push(this.getStateId(row + 1, column))
        }
        if (column > 0) {
            neighborhood.push(this.getStateId(row, column - 1))
        }
        return neighborhood;
    }
    directionMapping(direction) {
        if (direction == "UP") return 0;
        if (direction == "RIGHT") return 1;
        if (direction == "DOWN") return 2;
        if (direction == "LEFT") return 3;
    }
    getNextState(direction) {
        var row, column;
        [row, column] = this.getCoordinates(this.state);
        if (direction == "UP") return this.getStateId(row - 1, column);
        if (direction == "RIGHT") return this.getStateId(row, column + 1);
        if (direction == "DOWN") return this.getStateId(row + 1, column);
        if (direction == "LEFT") return this.getStateId(row, column - 1);
    }

    epsilonGreedy() {
        var allowedDirections = this.getAllowedDirections(this.state);
        console.log(allowedDirections);

        if (Math.random() < this.epsilon) {
            var choosenDirection = allowedDirections[Math.floor((Math.random() * allowedDirections.length))];
            return choosenDirection;
        } else {
            var neighborhood = this.getNeighborhood(this.state);
            var rewards = {};
            for (var i in neighborhood) {
                var neighbor = neighborhood[i];
                console.log(neighbor);
                console.log(this.qMatrix.matrix[neighbor]);
                rewards[neighborhood[i]] = this.qMatrix.matrix[neighbor][this.directionMapping(neighbor)];
            }
            console.log("HIII");
            console.log(rewards);
            var max = Object.keys(rewards).reduce((a, b) => rewards[a] > rewards[b] ? a : b);
            var index = Object.keys(rewards).indexOf(max);
            console.log("Max: " + max);
            console.log(index);

            console.log(allowedDirections[index]);
            return allowedDirections[index];
        }
    }

    explore() {
        var choosenDirection = this.epsilonGreedy();
        console.log("Let's go " + choosenDirection);
        this.action = this.directionMapping(choosenDirection);
        console.log(this.getNextState(choosenDirection));
        this.nextState = this.getNextState(choosenDirection);
        console.log(this.nextState);
    }

    findQMax(state) {
        var neighbors = this.getNeighborhood(state);
        var directions = this.getAllowedDirections(state);
        console.log(neighbors)
        console.log(this.qMatrix.matrix[state])
        return Math.max(...this.qMatrix.matrix[state]);
    }

    updateQ() {
        console.log(this.qMatrix.matrix[this.state][this.action]);
        this.qMatrix.matrix[this.state][this.action] = this.qMatrix.matrix[this.state][this.action] +
            this.alpha * (this.map.matrix[this.nextState] + this.gamma * this.findQMax(this.nextState) -
                this.qMatrix.matrix[this.state][this.action]);
        console.log("NEW q value");
        console.log(this.qMatrix.matrix[this.state][this.action]);
    }
    episode() {
        do {
            this.explore();
            this.updateQ();
            this.state = this.nextState;
            console.log(this.state)

            if (this.state == "2x1" || this.state == "2x2") {
                this.state = this.initialPosition;
            }

        } while (this.state != "2x3");
        console.log(this.qMatrix)
        console.log("DONE")
    }
}


//import { QMatrix, Map, Agent } from 'qlearning.js';

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


function buildAgent() {
    var m = new RewardMap(3, 4)
    var q = new QMatrix(3, 4)
    var a = new QLearningAgent(m, q);
    return a;
}

class Yo {
    constructor(n) {
        this.n = n;
    }
    hello() {
        Console.log("hello")
    }
}


const agent = buildAgent();

Vue.component("blog-tab", {
    template: `<div id="outer">
				<button @click="run" type="button">Generate Map</button>
				<div id="qlearningMap">
				<template v-for="i in stringToNum(row)">
				<div class="tile" :id="matrixId(i - 1, j - 1)" v-for="j in stringToNum(column)">
				</div>
				</template>
			    </div>
				</div>`,
    data: function() {
        return {
            agent: agent,
            row: "3",
            column: "4"
        }
    },
    methods: {
        stringToNum: function(string) {
            return parseInt(string, 10);
        },
        matrixId: function(i, j) {
            return i.toString() + "x" + j.toString();
        },
        run: function() {
            agent.explore();
            agent.updateQ();
			document.getElementById(agent.state).style.backgroundColor = "#d2b48c";
            agent.state = agent.nextState;
            console.log(agent.state)
            var element = document.getElementById(agent.state)
            console.log(element);
            document.getElementById(agent.state).style.backgroundColor = "red";
			console.log(agent)

            if (agent.state == "2x1" || agent.state == "2x2") {
                agent.state = agent.initialPosition;
            }
        }
    },
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

const rows = 3;
const columns = 4;
const numOfActions = 4; // Up Right Down Left


class Map {
    constructor() {
        this.rows = rows;
        this.columns = columns;
        this.matrix = {};
        //this.matrix = math.matrix();
        //this.matrix.resize([this.rows, this.columns], -1);
        this.generateRewards();

    }
    generateRewards() {
        // this.matrix.subset(math.index(2, 1), -100)
        // this.matrix.subset(math.index(2, 2), -100)
        // this.matrix.subset(math.index(2, 3), 100)
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                var _key = i.toString() + "x" + j.toString();
                this.matrix[_key] = -1;
            }
        }
        this.matrix["2x1"] = -100;
        this.matrix["2x2"] = -100;
        this.matrix["2x3"] = 100;
    }
}

class QMatrix {
    constructor() {
        this.matrix = {};
        this.rows = rows
        this.columns = columns;
        this.generateMatrix();
        // this.columns = numOfActions;
        // this.matrix = math.matrix();
        // this.matrix.resize([this.rows, this.columns], 0);
    }
    /**
        Determines from position which directions can be taken.
    */
    generatedAllowedDirections(row, column) {
        var neighborhood = [];
        // UP
        neighborhood.push((row > 0) ? 0 : -1)
        // RIGHT
        neighborhood.push((column < this.columns - 1) ? 0 : -1)
        // DOWN
        neighborhood.push((row < this.rows - 1) ? 0 : -1)
        // LEFT
        neighborhood.push((column > 0) ? 0 : -1)

        return neighborhood;
    }
    generateMatrix() {
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                var _key = i.toString() + "x" + j.toString();
                var value = this.generatedAllowedDirections(i, j);
                this.matrix[_key] = [0, 0, 0, 0];
                // this.matrix.push({
                //     key: _key,
                //     value: [0, 0, 0, 0]
                // });
            }
        }
    }
}

class Agent {
    constructor() {
        this.map = new Map();
        this.qMatrix = new QMatrix();
        this.initialPosition = "2x0";
        this.state = this.initialPosition;
        this.nextState = null;
        this.action = null;
        this.epsilon = 0.5;
        this.alpha = 0.6;
        this.gamma = 0.7;
    }
    getCoordinates(state){
        var pattern = /\d+/g;
        var result = state.match(pattern);
        return [parseInt(result[0]), parseInt(result[1])];
    }
    getStateId(row, column){
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
        if(direction == "UP") return 0;
        if(direction == "RIGHT") return 1;
        if(direction == "DOWN") return 2;
        if(direction == "LEFT") return 3;
    }
    getNextState(direction){
        var row, column;
        [row, column] = this.getCoordinates(this.state);
        if(direction == "UP") return this.getStateId(row - 1, column);
        if(direction == "RIGHT") return this.getStateId(row, column + 1);
        if(direction == "DOWN") return this.getStateId(row + 1, column);
        if(direction == "LEFT") return this.getStateId(row, column - 1);
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

    findQMax(state){
        var neighbors = this.getNeighborhood(state);
        var directions = this.getAllowedDirections(state);
        console.log(neighbors)
        console.log(this.qMatrix.matrix[state])
        return Math.max(...this.qMatrix.matrix[state]);
    }

    updateQ(){
        console.log(this.qMatrix.matrix[this.state][this.action]);
        this.qMatrix.matrix[this.state][this.action] = this.qMatrix.matrix[this.state][this.action] +
                this.alpha * (this.map.matrix[this.nextState] + this.gamma * this.findQMax(this.nextState) -
                this.qMatrix.matrix[this.state][this.action] );
        console.log("NEW q value");
        console.log(this.qMatrix.matrix[this.state][this.action]);
    }
    episode(){
        do {
            this.explore();
            this.updateQ();
            this.state = this.nextState;
            console.log(this.state)

            if(this.state == "2x1" || this.state == "2x2"){
                this.state = this.initialPosition;
            }

        } while (this.state != "2x3");
        console.log(this.qMatrix)
        console.log("DONE")
    }
}

const map = new Map();
console.log(map);
const qMatrix = new QMatrix();
console.log("QMATRIX");
console.log(qMatrix);
const agent = new Agent();
// console.log(agent);
// agent.explore();
// console.log("QMAX");
// agent.findQMax("1x1");
// agent.updateQ();
agent.episode();
console.log(agent)

// var dict = []; // create an empty array
//
// dict.push({
//     key: "keyName",
//     value: "the value"
// });
//
// var driversCounter = {
//     "1x1": [1, 1, 0, 0],
//     "two": [1, 1, 0, 0],
//     "three": [1, 1, 0, 0],
//     "four": 4,
//     "five": 5
// }
// console.log("UYOUO");
// console.log(driversCounter)
//
// var string = "12x23"
// console.log(string)
// var pattern = /\d+/g
// var result = string.match(pattern);
// console.log(result)
//
//
// console.log('create a matrix')
// const a = math.matrix([1, 4, 9, 16, 25])
// console.log(a)
// const d = [
//     [1, 2],
//     [3, 4]
// ]
// console.log(d)
// const e = math.matrix([
//     [5, 6],
//     [1, 1]
// ])
//
// console.log(e.subset(math.index(0, 0)))
//
// e.resize([2, 3], 0)


export { QMatrix, Map, Agent };

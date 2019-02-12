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
    constructor(map) {
        this.map = map;
        this.qMatrix = new QMatrix(map.rows, map.columns);
        this.initialPosition = "2x0";
        this.state = this.initialPosition;
        this.nextState = null;
        this.action = null;
        this.epsilon = 0.5;
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
        console.log("Epsilon Greedy");

        if (Math.random() < this.epsilon) {
            var choosenDirection = allowedDirections[Math.floor((Math.random() * allowedDirections.length))];
            return choosenDirection;
        } else {
            var neighborhood = this.getNeighborhood(this.state);
            var rewards = {};
            for (var i in neighborhood) {
                var neighbor = neighborhood[i];
                var direction = allowedDirections[i];
                console.log(neighbor);
                console.log(this.qMatrix.matrix[neighbor]);
                rewards[neighborhood[i]] = this.qMatrix.matrix[this.state][this.directionMapping(direction)];
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

    move() {
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
    // episode() {
    //     do {
    //         this.move();
    //         this.updateQ();
    //         this.state = this.nextState;
    //         console.log(this.state)
    //
    //         if (this.state == "2x1" || this.state == "2x2") {
    //             this.state = this.initialPosition;
    //         }
    //
    //     } while (this.state != "2x3");
    //     console.log(this.qMatrix)
    //     console.log("DONE")
    // }
}

export { RewardMap, QMatrix, QLearningAgent };

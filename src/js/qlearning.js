"use strict"

class RewardMap {
    constructor(rows, columns, cliffs, reward) {
        this.rows = rows;
        this.columns = columns;
        this.cliffs = cliffs;
        this.reward = reward;
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
        for(var cliff of this.cliffs){
            this.matrix[cliff] = -100;
        }
        this.matrix[this.reward] = 100;
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
    constructor(map, initialPosition) {
        this.map = map;
        this.qMatrix = new QMatrix(map.rows, map.columns);
        this.initialPosition = initialPosition;
        this.state = this.initialPosition;
        this.nextState = null;
        this.action = null;
    }
    /*
        Get coordinates from state Id
        Ex: "2x0" -> [2, 0]
    */
    getCoordinates(state) {
        var pattern = /\d+/g;
        var result = state.match(pattern);
        return [parseInt(result[0]), parseInt(result[1])];
    }
    /*
        Get state id from coordinates
        Ex: 2, 0 -> "2x0"
    */
    getStateId(row, column) {
        return row.toString() + "x" + column.toString()
    }
    /*
        Get allowed direction from this state
        Ex: "0x0" -> [RIGHT, DOWN]
    */
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
    /*
        0    1    2    3
        UP RIGHT DOWN LEFT
    */
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

    epsilonGreedy(epsilon) {
        var allowedDirections = this.getAllowedDirections(this.state);

        // Choose at random
        if (Math.random() < epsilon) {
            var choosenDirection = allowedDirections[Math.floor((Math.random() * allowedDirections.length))];
            return choosenDirection;
        } // Choose using greedy
        else {
            var neighborhood = this.getNeighborhood(this.state);
            // Rewards is a bad name, it holds an array of the neighbor and it's corresponding q-value 
            var rewards = {};
            for (var i in neighborhood) {
                var neighbor = neighborhood[i];
                var direction = allowedDirections[i];

                rewards[neighbor] = this.qMatrix.matrix[this.state][this.directionMapping(direction)];
            }
            
            // Find maximum q-value
            var maxQValue = Math.max.apply(Math, Object.values(rewards));
            // Neighbor with maximum q-value and also the q-value
            var rewardsWithMaxQValue = Object.entries(rewards).filter(([key, value]) => value == maxQValue );
            // Choosen neighbor aka next state to move to
            var choosenNextState = rewardsWithMaxQValue[Math.floor((Math.random() * rewardsWithMaxQValue.length))][0];
            var index = Object.keys(rewards).indexOf(choosenNextState);

            return allowedDirections[index];
        }
    }
    move(epsilon) {
        var choosenDirection = this.epsilonGreedy(epsilon);

        this.action = this.directionMapping(choosenDirection);

        this.nextState = this.getNextState(choosenDirection);

    }

    findQMax(state) {
        return Math.max(...this.qMatrix.matrix[state]);
    }

    updateQ(alpha, gamma) {
        this.qMatrix.matrix[this.state][this.action] = this.qMatrix.matrix[this.state][this.action] +
            alpha * (this.map.matrix[this.nextState] + gamma * this.findQMax(this.nextState) -
                this.qMatrix.matrix[this.state][this.action]);
    }
}

export { RewardMap, QLearningAgent };
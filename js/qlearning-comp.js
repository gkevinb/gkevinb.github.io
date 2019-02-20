import { RewardMap, QMatrix, QLearningAgent } from './qlearning.js';

Vue.component("q-learning-tab", {
    template: `<div id="outer">
				<button @click="episode" type="button">Explore</button>
				<div id="qlearningMap">
				<template v-for="i in stringToNum(row)">
				<div :class="styleTile(i - 1, j - 1)" :id="matrixId(i - 1, j - 1)" v-for="j in stringToNum(column)">
				</div>
				</template>
			    </div>
				</div>`,
    data: function() {
        return {
            agent: new QLearningAgent(new RewardMap(3, 4)),
            row: "3",
            column: "4",
            movement: null,
            exploring: false,
        }
    },
    methods: {
        stringToNum: function(string) {
            return parseInt(string, 10);
        },
        matrixId: function(i, j) {
            return i.toString() + "x" + j.toString();
        },
        styleTile: function(i, j){
            var id = this.matrixId(i, j);
            var reward = this.agent.map.matrix[id];
            
            if(reward == -100 && id == this.agent.state) return "tile--robot--falling";
            if(reward == 100 && id == this.agent.state) return "tile--robot--winning";
            if(id == this.agent.state) return "tile--agent";
            if(reward == 100) return "tile--reward";
            if(reward == -100) return "tile--cliff";
            return "tile";
        },
        explore: function() {
            this.agent.move();
            this.agent.updateQ();
            this.agent.state = this.agent.nextState;

            if (this.agent.state == "2x1" || this.agent.state == "2x2") {
                //agent.state = agent.initialPosition;
                console.log("AAAAWWWWW")
                clearInterval(this.movement);
                this.exploring = false;
            }
            if (this.agent.state == "2x3"){
                clearInterval(this.movement);
                this.exploring = false;
            }
        },
        episode: function() {
            if(this.exploring == false){
                this.agent.state = this.agent.initialPosition;
                this.movement = setInterval(this.explore, 200);
                this.exploring = true;
            }
        }
    },
})

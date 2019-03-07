import { RewardMap, QLearningAgent } from './qlearning.js';

Vue.component("q-learning-tab", {
    template: `<div id="outer">
                <button @click="episode" type="button">Explore</button>
                <p>Epsilon: {{ epsilon }}</p>
                <input type="range" min="0" max="1" value="0.5" step="0.1" class="slider" id="epsi" v-model="epsilon">
                <p>Alpha: {{ alpha }}</p>
                <input type="range" min="0" max="1" value="0.5" step="0.1" class="slider" id="alph" v-model="alpha">
                <p>Gamma: {{ gamma }}</p>
                <input type="range" min="0" max="1" value="0.7" step="0.1" class="slider" id="gamm" v-model="gamma">
				<div id="qlearningMap">
				<template v-for="i in stringToNum(row)">
				<div v-for="j in stringToNum(column)" :class="styleTile(i - 1, j - 1)" :id="matrixId(i - 1, j - 1)">
				</div>
				</template>
			    </div>
				</div>`,
    data: function() {
        return {
            cliffs: ["2x1", "2x2"],
            reward: "2x3",
            start: "2x0",
            row: "3",
            column: "4",
            agent: new QLearningAgent(new RewardMap(3, 4, ["2x1", "2x2"], "2x3"), "2x0"),
            epsilon: 0.5,
            alpha: 0.5,
            gamma: 0.7,
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
            this.agent.move(this.epsilon);
            this.agent.updateQ(this.alpha, this.gamma);
            this.agent.state = this.agent.nextState;

            if (this.cliffs.includes(this.agent.state)) {
                //agent.state = agent.initialPosition;
                console.log("AAAAWWWWW")
                clearInterval(this.movement);
                this.exploring = false;
            }
            if (this.agent.state == this.reward){
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

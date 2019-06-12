import { RewardMap, QLearningAgent } from './qlearning.js';

Vue.component("q-learning-tab", {
    template: `
    <div id="outer">
    <div id="qlearning-header">
    <h1>Q-Learning Algorithm</h1>
    <h2>The Cliff Walking Problem</h2>
    </div>
    <div id="qlearning-instructions">
    <p>The Q-Learning algorithm is a reinforcement learning algorithm. It is a reinforcement learning method since it involves an agent, a set of states, and a set of actions for each state. The agent accumulates rewards when a specific action is taken at a specific state. The cliff walking problem is a classic problem solved by the Q-learning algorithm. The scenario is the following, the robot wants to find the shortest path to the trophy. However if the it steps on the black tiles it will fall down the cliff. The robot learns to find the shortest path to the trophy through trial and error. After each step taken the Q-values are updated for the that action at the specific state.</p>
    <div id="qlearning-legend">
        <div class="greek-letters">ε</div><div class="explanation">Greedy factor is defined by how greedy we are with the neighboring Q values.</div>
        <div class="greek-letters">α</div><div class="explanation">Learning rate is defined by how much we accept the new Q value over the old Q value.</div>
        <div class="greek-letters">γ</div><div class="explanation">Discount factor is used to balance the immediate and future reward.</div>
        <div class="button-replica">Load</div><div class="explanation">Disabled</div>
        <div class="button-replica">Reset</div><div class="explanation">Reset Q values and place robot at starting position.</div>
        <div class="button-replica">Learn</div><div class="explanation">Disabled</div>
        <div class="button-replica">Explore</div><div class="explanation">Start exploring the map and look for the trophy. Press again if the robot falls down the cliff or finds the trophy to start exploring again.</div>
    </div>
    
    </div>
    <div id="control_panel">
        <div id="left_screw" class="screw"><div>x</div></div>
        <div id="control_panel-title">Control Panel</div>
        <div id="right_screw" class="screw"><div>x</div></div>

        <div id="epsilon_letter" class="greek-letters">ε</div>
        <div id="alpha_letter" class="greek-letters">α</div>
        <div id="gamma_letter" class="greek-letters">γ</div>
        <div id="qvalue_text">Display Q Values</div>

        <input type="range" min="0" max="1" value="0.5" step="0.1" class="slider" id="epsilon_slider" v-model="epsilon">
        <input type="range" min="0" max="1" value="0.5" step="0.1" class="slider" id="alpha_slider" v-model="alpha">
        <input type="range" min="0" max="1" value="0.7" step="0.1" class="slider" id="gamma_slider" v-model="gamma">
        <input type="checkbox" id="qvalue_checkbox" v-model="displayQValues">

        <div id="epsilon_value" class="value_screen">{{ formatValue(epsilon) }}</div>
        <div id="alpha_value" class="value_screen">{{ formatValue(alpha) }}</div>
        <div id="gamma_value" class="value_screen">{{ formatValue(gamma) }}</div>

        <button id="load_button" class="btn control-panel__button" type="button" disabled>Load</button>
        <button id="reset_button" class="btn control-panel__button" @click="reset" type="button">Reset</button>
        <button id="learn_button" class="btn control-panel__button" type="button" disabled>Learn</button>
        <button id="explore_button" class="btn control-panel__button" @click="explore" type="button">Explore</button>
    </div>

	<div id="qlearningMap" v-bind:style="gridStyling(row, column)">
    <template v-for="i in stringToNum(row)">
        <div v-for="j in stringToNum(column)" class="tile--background">
            <div :class="styleTile(i - 1, j - 1)" :id="matrixId(i - 1, j - 1)">
                <div v-if="displayQValues" class="UP"><div>{{formatQValue(agent.qMatrix.matrix[matrixId(i - 1, j - 1)][0])}}</div></div>
                <div v-if="displayQValues" class="LEFT"><div>{{formatQValue(agent.qMatrix.matrix[matrixId(i - 1, j - 1)][3])}}</div></div>
                <div v-if="displayQValues" class="RIGHT"><div>{{formatQValue(agent.qMatrix.matrix[matrixId(i - 1, j - 1)][1])}}</div></div>
                <div v-if="displayQValues" class="DOWN"><div>{{formatQValue(agent.qMatrix.matrix[matrixId(i - 1, j - 1)][2])}}</div></div>
            </div>
        </div>
	</template>
    </div>

    <br/>
	</div>`,
    data: function() {
        return {
            /* Map values */
            cliffs: ["2x1", "2x2", "2x3", "2x4"],
            reward: "2x5",
            start: "2x0",
            row: "3",
            column: "6",
            displayQValues: true,
            /* Q-learning variable values */
            epsilon: 0.5,
            alpha: 0.5,
            gamma: 0.7,
            /* Agent and movement values */
            agent: null,
            movement: null,
            exploring: false
        }
    },
    /* created(): since the processing of the options is finished you have access to reactive
    data properties and change them if you want. At this stage DOM has not been mounted or added yet.
    So you cannot do any DOM manipulation here. Typically used for data fetching
    */
    created() {
        var mobileDeviceTestExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile' , 'i');
        if (mobileDeviceTestExp.test(navigator.userAgent)){
            this.cliffs = ["2x1"];
            this.reward = "2x2";
            this.start = "2x0";
            this.row = "3";
            this.column = "3";
        }
        this.agent = new QLearningAgent(new RewardMap(this.row, this.column, this.cliffs, this.reward), this.start);
    },
    methods: {
        /*
            Create grid layout depending on if a mobile device or the row and column values.
        */
        gridStyling: function(row, column) {
            var mobileDeviceTestExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile' , 'i');
            /* Tests if mobile device */
            if (mobileDeviceTestExp.test(navigator.userAgent)){
                return {
                    /* Note: 100px is the value for tile size in _qlearning.scss */
                    gridTemplateRows: 'repeat(3, 100px)',
                    gridTemplateColumns: 'repeat(3, 100px)'
                };
            }else{
                return {
                    /* Note: 100px is the value for tile size in _qlearning.scss */
                    gridTemplateRows: 'repeat(' + row + ', 100px)',
                    gridTemplateColumns: 'repeat(' + column + ', 100px)'
                };
            }
        },
        /*
            Convert string to number.
            Ex: "3" -> 3
        */
        stringToNum: function(string) {
            return parseInt(string, 10);
        },
        /*
            Format Q-values to only have 5 digits including decimal and negative sign.
            If Q-value is 0 return empty string.
            Ex: -42.295 -> -42.2
        */
        formatQValue: function(number) {
            var stringLength = 5;
            if(number != 0)
                return number.toString().substring(0, stringLength);
            else
                return "";
        },
        /*
            Add '.0' if number is 0 or 1.
            Ex: 0 -> 0.0
        */
        formatValue: function(number) {
            if(number == 0 || number == 1)
                return number.toString() + '.0';
            else
                return number.toString();
        },
        /*
            Format matrix Id from row and column number.
            Ex: 1, 3 -> 1x3
        */
        matrixId: function(i, j) {
            return i.toString() + "x" + j.toString();
        },
        /*
            Style tile depending on reward value and agent's current state.
        */
        styleTile: function(i, j){
            var id = this.matrixId(i, j);
            var reward = this.agent.map.matrix[id];
            
            if (reward == -100 && id == this.agent.state) return "tile--robot--falling";
            if (reward == 100 && id == this.agent.state) return "tile--robot--winning";
            if (id == this.agent.state) return "tile--agent";
            if (reward == 100) return "tile--reward";
            if (reward == -100) return "tile--cliff";
            
            return "tile";
        },
        /*
            Periodically called function representing the movement of the agent.
        */
        move: function() {
            this.agent.move(this.epsilon);
            this.agent.updateQ(this.alpha, this.gamma);
            this.agent.state = this.agent.nextState;

            /* Agent falls down cliff */
            if (this.cliffs.includes(this.agent.state)){
                clearInterval(this.movement);
                this.exploring = false;
            }
            /* Agent finds reward */
            if (this.agent.state == this.reward){
                clearInterval(this.movement);
                this.exploring = false;
            }
        },
        /* Start function to initiate exploration. */
        explore: function() {
            if(this.exploring == false){
                this.agent.state = this.agent.initialPosition;
                this.movement = setInterval(this.move, 200);
                this.exploring = true;
            }
        },
        /* Reset Q-matrix and agent to initial location. */
        reset: function() {
            clearInterval(this.movement);
            this.exploring = false;
            this.agent = new QLearningAgent(new RewardMap(this.row, this.column, this.cliffs, this.reward), this.start);
        }
    }
})

import { RewardMap, QLearningAgent } from './qlearning.js';

Vue.component("q-learning-tab", {
    template: `
    <div id="outer">
    <div id="control_panel">
    <div id="left_screw" class="screw"><div>x</div></div>
    <div id="control_panel-title">Control Panel</div>
    <div id="right_screw" class="screw"><div>x</div></div>
    <div id="epsilon_text">Epsilon</div>
    <div id="alpha_text">Alpha</div>
    <div id="gamma_text">Gamma</div>
    <div id="qvalue_text">Show Q Values</div>
    <input type="range" min="0" max="1" value="0.5" step="0.1" class="slider" id="epsilon_slider" v-model="epsilon">
    <input type="range" min="0" max="1" value="0.5" step="0.1" class="slider" id="alpha_slider" v-model="alpha">
    <input type="range" min="0" max="1" value="0.7" step="0.1" class="slider" id="gamma_slider" v-model="gamma">
    <input type="checkbox" id="qvalue_checkbox" v-model="showQValues">
    
    <div id="epsilon_value" class="value_screen">{{ epsilon }}</div>
    <div id="alpha_value" class="value_screen">{{ alpha }}</div>
    <div id="gamma_value" class="value_screen">{{ gamma }}</div>
    <button id="load_button" class="btn btn-success" type="button">Load</button>
    <button id="reset_button" class="btn btn-success" @click="reset" type="button">Reset</button>
    <button id="learn_button" class="btn btn-success" type="button">Learn</button>
    <button id="explore_button" class="btn btn-success" @click="explore" type="button">Explore</button>
    
    </div>
	<div id="qlearningMap" v-bind:style="gridStyling(row, column)">
    <template v-for="i in stringToNum(row)">
    <div v-for="j in stringToNum(column)" :class="styleTile(i - 1, j - 1)" :id="matrixId(i - 1, j - 1)">
    <div v-if="showQValues" class="UP"><div>{{formatValue(agent.qMatrix.matrix[matrixId(i - 1, j - 1)][0])}}</div></div>
    <div v-if="showQValues" class="LEFT"><div>{{formatValue(agent.qMatrix.matrix[matrixId(i - 1, j - 1)][3])}}</div></div>
    <div v-if="showQValues" class="RIGHT"><div>{{formatValue(agent.qMatrix.matrix[matrixId(i - 1, j - 1)][1])}}</div></div>
    <div v-if="showQValues" class="DOWN"><div>{{formatValue(agent.qMatrix.matrix[matrixId(i - 1, j - 1)][2])}}</div></div>
	</div>
	</template>
	</div>
	</div>`,
    data: function() {
        return {
            /* Map values */
            cliffs: ["2x1", "2x2", "1x2"],
            reward: "2x3",
            start: "2x0",
            row: "3",
            column: "5",
            showQValues: true,
            /* q-learning variable values */
            epsilon: 0.5,
            alpha: 0.5,
            gamma: 0.7,
            /* agent moving values */
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
        stringToNum: function(string) {
            return parseInt(string, 10);
        },
        formatValue: function(number) {
            var stringLength = 5;
            if(number != 0)
                return number.toString().substring(0, stringLength);
            else
                return "";
        },
        matrixId: function(i, j) {
            return i.toString() + "x" + j.toString();
        },
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
        move: function() {
            this.agent.move(this.epsilon);
            this.agent.updateQ(this.alpha, this.gamma);
            this.agent.state = this.agent.nextState;

            if (this.cliffs.includes(this.agent.state)) {
                console.log("AAAAWWWWW")
                clearInterval(this.movement);
                this.exploring = false;
            }
            if (this.agent.state == this.reward){
                clearInterval(this.movement);
                this.exploring = false;
            }
        },
        explore: function() {
            if(this.exploring == false){
                this.agent.state = this.agent.initialPosition;
                this.movement = setInterval(this.move, 200);
                this.exploring = true;
            }
        },
        reset: function() {
            clearInterval(this.movement);
            this.exploring = false;
            this.agent = new QLearningAgent(new RewardMap(this.row, this.column, this.cliffs, this.reward), this.start);
        }
    }
})

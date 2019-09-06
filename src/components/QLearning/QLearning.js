import { RewardMap, QLearningAgent } from '../../assets/js/qlearning.js';

export default {
    name: "q-learning-tab",
    data() {
        return {
            /* Map values */
            cliffs: ["2x1", "2x2", "2x3", "2x4"],
            reward: "2x5",
            start: "2x0",
            row: "3",
            column: "6",
            showQValues: true,
            /* Q-learning variable values */
            epsilon: 0.5,
            alpha: 0.5,
            gamma: 0.7,
            /* Agent and movement values */
            agent: null,
            movement: null,
            exploring: false,
            speed: 150
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
                this.movement = setInterval(this.move, this.speed);
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
}
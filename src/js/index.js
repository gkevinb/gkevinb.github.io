var app = new Vue({
    el: "#app",
    data: {
        currentTab: "Home",
        tabs: [
            {
                name: "Home"
            },
            {
                name: "About"
            },
            {
                name: "Projects",
                subtabs: [
                    {
                        name: "Q-Learning"
                    }
                ]
            },
            {
                name: "Blog"
            }]
    },
    computed: {
        getCurrentTab: function () {
            return this.currentTab.toLowerCase() + "-tab"
        }
    },
    methods: {
        dropDownMenu: function (tab) {
            return tab.subtabs ? 'dropdown' : '';
        }
    }
});

/*
Not used
*/
// Vue.component("genmap-tab", {
//     template: `
// 	<div id="genmap">
// 	<input type="number" v-model="row"></input>
// 		<input type="number" v-model="column"></input>
// 		<table>
// 		<tr v-for="i in stringToNum(row)">
// 			<td v-for="j in stringToNum(column)">
// 				<input type="checkbox" :id="matrixId(i, j)"></input>
// 			</td>
// 		</tr>
// 	</table>
// 	<button type="button">Generate Map</button>
// 	<table>
// 		<tr v-for="i in stringToNum(row)">
// 			<td v-for="j in stringToNum(column)">[]</td>
// 		</tr>
// 	</table>
// 	</div>`,
//     data: function () {
//         return {
//             row: "5",
//             column: "2"
//         }
//     },
//     methods: {
//         stringToNum: function (string) {
//             return parseInt(string, 10);
//         },
//         matrixId: function (i, j) {
//             return "_" + i.toString() + "x" + j.toString() + "_";
//         }
//     },
// })


/* 
Needs revision
*/
Vue.component("projects-tab", {
    props: ['tabs', 'cu'],
    template:  `<div>
                <ul v-for="tab in tabs" v-if="tab.name == cu">
                    <!--<li v-for="subtab in tab.subtabs" @click="cu = subtab.name">{{ subtab.name }}</li>-->
                </ul>
				</div>`,
    data: function () {
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
        func: function (bar) {
            bar += " !!!!!!"
            return bar
        }
    }
})


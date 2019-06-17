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
                    },
                    {
                        name: "Chinese Flashcards"
                    }
                ]
            },
            {
                name: "Blog"
            }]
    },
    computed: {
        /*
        Get identifier for current tab.
        Replaces space with dash, makes all letters lowercase and adds "-tab".
        Input: Chinese Flashcards
        Output: chinese-flashcards-tab
        */
        getCurrentTab: function () {
            return this.currentTab.replace(' ', '-').toLowerCase() + "-tab"
        }
    },
    methods: {
        dropDownMenu: function (tab) {
            return tab.subtabs ? 'dropdown' : '';
        },
        hamburgerX: function() {
            var hamburger = document.querySelector(".hamburger");
            // Toggle class "is-active"
            hamburger.classList.toggle("is-active");
            // Do something else, like open/close menu
            document.getElementById("hamburger-meat-id").classList.toggle("nav-burger-meat__X");
        }
    }
});



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
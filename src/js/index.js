var app = new Vue({
    el: "#app",
    data: {
        currentTab: "Home",
        tabs: [
            {
                name: "Home"
            },
            {
                name: "About",
                subtabs: [
                    {
                        name: "Experience"
                    },
                    {
                        name: "Business Card"
                    }
                ]
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
            return this.currentTab.replace(' ', '-').toLowerCase() + "-tab";
        }
    },
    methods: {
        dropDownMenu: function (tab) {
            return tab.subtabs ? 'dropdown' : '';
        },
        /* If tab has no subtabs set as current tab */
        setCurrentTab: function (tab) {
            if(tab.subtabs == null){
                this.currentTab = tab.name;
            }
        },
        hamburgerX: function() {
            var hamburger = document.querySelector(".hamburger");
            var colapser = document.getElementById("colapser");

            /* Fixes double click hamburger icon bug #102 */
            if(!colapser.classList.contains("collapsing")){
                hamburger.classList.toggle("is-active");
                document.getElementById("nav-burger-meat-js").classList.toggle("nav-burger-meat__X");
            }
        }
    }
});

/* 
Needs revision
*/
Vue.component("blog-tab", {
    props: ['tabs', 'cu'],
    template:  `<div>
                <h1>Blog section coming soon...</h1>
				</div>`,
    data: function () {
        return {
            message: 'hello'
        }
    },
    methods: {
        func: function (bar) {
            bar += " !!!!!!"
            return bar
        }
    }
})
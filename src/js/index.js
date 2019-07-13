var app = new Vue({
    el: "#app",
    data: {
        currentTab: "Home",
        tabs: [
            {
                name: "Home",
            },
            {
                name: "About",
                subtabs: [
                    {
                        name: "Experience"
                    },
                    {
                        name: "Business Card",
                        sources: [
                            {
                                name: "3D Card Flip Animation",
                                link: "https://3dtransforms.desandro.com/card-flip"
                            },
                            {
                                name: "Font Awesome Free",
                                link: "https://fontawesome.com/"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Projects",
                subtabs: [
                    {
                        name: "Q-Learning",
                        sources: [
                            {
                                name: "Robot 2 icon by Icons8",
                                link: "https://icons8.com/icon/22858/robot-2"
                            },
                            {
                                name: "Trophy icon by Icons8",
                                link: "https://icons8.com/icon/16951/trophy"
                            }
                        ]
                    },
                    {
                        name: "Chinese Flashcards",
                        sources: [
                            {
                                name: "3D Card Flip Animation",
                                link: "https://3dtransforms.desandro.com/card-flip"
                            },
                            {
                                name: "Hanzi Chinese Characters Writer",
                                link: "https://chanind.github.io/hanzi-writer/"
                            }
                        ]
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
        },
        getSources: function() {
            var sources = null;
            // console.log(this.tabs);
            for(var tab of this.tabs){
                // console.log(tab.name);
                // console.log(this.currentTab);
                if(tab.name == this.currentTab){
                    if(tab.sources != null){
                        sources = tab.sources;
                    }
                }
                if(tab.subtabs != null){
                    for(var subtab of tab.subtabs){
                        console.log(subtab.name);
                        console.log(this.currentTab);
                        if(subtab.name == this.currentTab){
                            console.log("X")
                            if(subtab.sources != null){
                                console.log("XW")
                                sources = subtab.sources;
                            }
                        }
                    }
                }
            }
            return sources;
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
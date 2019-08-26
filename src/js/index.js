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
                            },
                            {
                                name: "Simple SVG Icons",
                                link: "https://simpleicons.org/"
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

    }
});
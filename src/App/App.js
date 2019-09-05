import Home from '../components/Home/Home.vue'
import Nav from '../components/Nav/Nav.vue'
import Footer from '../components/Footer/Footer.vue'
import About from '../components/About/About.vue'
import BusinessCard from '../components/BusinessCard/BusinessCard.vue'
import QLearning from '../components/QLearning/QLearning.vue'
import Chinese from '../components/Chinese/Chinese.vue'
import GithubProjects from '../components/GithubProjects/GithubProjects.vue'
import Blog from '../components/Blog/Blog.vue'


export default {
    name: 'app',
    components: {
        'home-tab' : Home,
        'nav-comp' : Nav,
        'footer-comp' : Footer,
        'experience-tab' : About,
        'business-card-tab' : BusinessCard,
        'q-learning-tab' : QLearning,
        'chinese-flashcards-tab' : Chinese,
        'github-projects-tab' : GithubProjects,
        'blog-tab' : Blog
    },
    data() {
        return {
            currentTab: "Home",
            tabs: [{
                    name: "Home",
                },
                {
                    name: "About",
                    subtabs: [{
                            name: "Experience"
                        },
                        {
                            name: "Business Card",
                            sources: [{
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
                    subtabs: [{
                            name: "Q-Learning",
                            sources: [{
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
                            sources: [{
                                    name: "3D Card Flip Animation",
                                    link: "https://3dtransforms.desandro.com/card-flip"
                                },
                                {
                                    name: "Hanzi Chinese Writer",
                                    link: "https://chanind.github.io/hanzi-writer/"
                                }
                            ]
                        }, {
                            name: 'Github Projects'
                        }
                    ]
                },
                {
                    name: "Blog"
                }
            ]
        };
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
}
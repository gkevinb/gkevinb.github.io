import Home from '../components/Home/Home.vue'
import Nav from '../components/Nav/Nav.vue'
import Footer from '../components/Footer/Footer.vue'
import About from '../components/About/About.vue'
import BusinessCard from '../components/BusinessCard/BusinessCard.vue'
import QLearning from '../components/QLearning/QLearning.vue'
import Chinese from '../components/Chinese/Chinese.vue'
import GithubProjects from '../components/GithubProjects/GithubProjects.vue'
import Blog from '../components/Blog/Blog.vue'

import axios from 'axios';

export default {
    name: 'app',
    components: {
        'home-tab': Home,
        'nav-comp': Nav,
        'footer-comp': Footer,
        'experience-tab': About,
        'business-card-tab': BusinessCard,
        'q-learning-tab': QLearning,
        'chinese-flashcards-tab': Chinese,
        'github-projects-tab': GithubProjects,
        'blog-tab': Blog
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
                            name: "Experience",
                        },
                        {
                            name: "Business Card",
                        }
                    ]
                },
                {
                    name: "Projects",
                    subtabs: [{
                            name: "Q-Learning",
                        },
                        {
                            name: "Chinese Flashcards",
                        },
                        {
                            name: 'Github Projects'
                        }
                    ]
                },
                {
                    name: "Blog"
                }
            ],
            apis: [{
                    component: "Home",
                    request: {
                        method: "GET",
                        routeEndPoint: "https://gkevinb.github.io/",
                        path: "database/connect.json"
                    }
                },
                {
                    component: "Footer",
                    request: {
                        method: "GET",
                        routeEndPoint: "https://gkevinb.github.io/",
                        path: "database/source.json"
                    }
                },
                {
                    component: "Experience",
                    request: {
                        method: "GET",
                        routeEndPoint: "https://gkevinb.github.io/",
                        path: "database/cv.json"
                    }
                },
                {
                    component: "Chinese Flashcards",
                    request: {
                        method: "GET",
                        routeEndPoint: "https://gkevinb.github.io/",
                        path: "database/china.json"
                    }
                },
                {
                    component: "Business Card",
                    request: {
                        method: "GET",
                        routeEndPoint: "https://gkevinb.github.io/",
                        path: "database/card.json"
                    }
                },
                {
                    component: "Github Projects",
                    request: {
                        method: "GET",
                        routeEndPoint: "https://api.github.com/",
                        path: "users/gkevinb/repos?sort=updated"
                    }
                },
            ],
            inputData: {
                /* Home and Footer need to be there by default because there are the first ones to render */
                Home: null,
                Footer: null,
            }
        };
    },
    created() {
        /* Perform all API calls to get data needed to populate all content for each component properly */
        for (let api of this.apis) {
            this.apiCall(api.component, api.request);
        }
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
        apiCall: function (component, request) {
            let API = axios.create({
                baseURL: request.routeEndPoint,
            })
            /* Note: GET is hardcoded, for know, since it is the only type of request made */
            API.get(request.path)
                .then(response => {
                    this.inputData[component] = response.data;
                });
        }
    }
}
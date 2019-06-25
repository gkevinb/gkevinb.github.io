import { shuffle } from './algorithms.js';

Vue.component("business-card-tab", {
    name: "business-card-tab",
    template:  `<div :id="name">
                <h1>Digital Business Card</h1>
                <div id="business-card__scene">
                    <div id="business-card" @click=flipFlashcard>
                        <div class="business-card__face--front">
                            <div id="name">{{ fullName }}</div>
                            <div id="laptop"></div>
                            <div id="keyboard"></div>
                            <div id="mousepad"></div>
                            <div id="screen"></div>
                            <div id="tab"></div>
                            <div id="coding">{{ codeSymbol }}</div>
                            <div id="exit"></div>
                            <div id="empty"></div>
                            <div id="minimize"></div>
                            <div id="red-line__1" class="red-line"></div>
                            <div id="red-line__2" class="red-line"></div>
                            <div id="red-line__3" class="red-line"></div>
                            <div id="red-line__4" class="red-line"></div>
                            <div id="red-line__5" class="red-line"></div>
                            <div id="red-line__6" class="red-line"></div>
                            <div id="red-line__7" class="red-line"></div>
                            <div id="red-line__8" class="red-line"></div>
                            <div id="red-line__9" class="red-line"></div>
                            <div id="position">{{ position }}</div>
                            <div id="brand-container">
                            <i v-for="brand in chosenBrands" :class="brandStyling(brand.code)"></i>
                            </div>
                        </div>
                        <div class="business-card__face--back">
                            <div id="contact-container">
                                <div v-for="info in contact" class="contact-info">
                                    <i :class="contactIconStyling(info.code)"></i>
                                    <div class="contact-text">{{ info.value }}</div>
                                </div>
                            </div>
                            <div id="qr-code">
                                <img src="../img/qr-code.png" alt="QR CODE" height="100" width="100">
                            </div>
                            <div id="save-contact__button">
                                <a id="save-contact__link" href="../files/user.vcf" download="user.vcf">Save to Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>`,
    data: function () {
        return {
            name: "business-card-tab",
            fullName: "GABOR KEVIN BARTA",
            position: "Fullstack Developer",
            codeSymbol: "</>",
            card: null,
            chosenBrands: null,
            brands: [
                {
                    'name' : 'Docker',
                    'code' : 'fab fa-docker'
                },
                {
                    'name' : 'Vuejs',
                    'code' : 'fab fa-vuejs'
                },
                {
                    'name' : 'HTML5',
                    'code' : 'fab fa-html5'
                },
                {
                    'name' : 'CSS3',
                    'code' : 'fab fa-css3'
                },
                {
                    'name' : 'Python',
                    'code' : 'fab fa-python'
                },
                {
                    'name' : 'Bootstrap',
                    'code' : 'fab fa-bootstrap'
                },
                {
                    'name' : 'PHP',
                    'code' : 'fab fa-php'
                },
                {
                    'name' : 'Figma',
                    'code' : 'fab fa-figma'
                },
                {
                    'name' : 'Git',
                    'code' : 'fab fa-git'
                },
                {
                    'name' : 'Gulp',
                    'code' : 'fab fa-gulp'
                },
                {
                    'name' : 'JavaScript',
                    'code' : 'fab fa-js-square'
                },
                {
                    'name' : 'SASS',
                    'code' : 'fab fa-sass'
                },
                {
                    'name' : 'R',
                    'code' : 'fab fa-r-project'
                },
            ],
            contact: [
                {
                    'name' : 'email',
                    'code' : 'fas fa-envelope',
                    'value': 'gkbarta@yahoo.com'
                },
                {
                    'name'  : 'phone',
                    'code'  : 'fas fa-phone',
                    'value' : '(+45) 91 40 17 71'
                },
                {
                    'name'  : 'website',
                    'code'  : 'fas fa-globe',
                    'value' : 'https://gkevinb.github.io'
                },
            ]
        }
    },
    mounted() {
        this.card = document.getElementById("business-card");
        this.chooseBrands(5);
    },
    methods: {
        flipFlashcard: function() {
            /*
                Checks if classList is not empty, because when it is not empty, it means the card is
                flipped to the backside. And that is when the new brands are selected to be displayed
                on the frontside of the card.
            */
            if(this.card.classList.length != 0){
                this.chooseBrands(5);
            }
            this.card.classList.toggle('is-flipped');
        },
        brandStyling: function(code) {
            return 'brand-logo ' + code;
        },
        contactIconStyling: function(code) {
            return 'contact-icon ' + code;
        },
        chooseBrands: function (numberOf) {
            this.chosenBrands = shuffle(this.brands).slice(0, numberOf);
        }
    }
})

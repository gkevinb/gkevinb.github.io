import{shuffle}from"./algorithms.js";Vue.component("business-card-tab",{name:"business-card-tab",template:'<div :id="name">\n                <h1>Digital Business Card</h1>\n                <div id="business-card__scene">\n                    <div id="business-card" @click=flipFlashcard>\n                        <div class="business-card__face--front">\n                            <div id="name">{{ fullName }}</div>\n                            <div id="laptop"></div>\n                            <div id="keyboard"></div>\n                            <div id="mousepad"></div>\n                            <div id="screen"></div>\n                            <div id="tab"></div>\n                            <div id="coding">{{ codeSymbol }}</div>\n                            <div id="exit"></div>\n                            <div id="empty"></div>\n                            <div id="minimize"></div>\n                            <div id="red-line__1" class="red-line"></div>\n                            <div id="red-line__2" class="red-line"></div>\n                            <div id="red-line__3" class="red-line"></div>\n                            <div id="red-line__4" class="red-line"></div>\n                            <div id="red-line__5" class="red-line"></div>\n                            <div id="red-line__6" class="red-line"></div>\n                            <div id="red-line__7" class="red-line"></div>\n                            <div id="red-line__8" class="red-line"></div>\n                            <div id="red-line__9" class="red-line"></div>\n                            <div id="position">{{ position }}</div>\n                            <div id="brand-container">\n                            <i v-for="brand in chosenBrands" :class="brandStyling(brand.code)"></i>\n                            </div>\n                        </div>\n                        <div class="business-card__face--back">\n                            <div id="contact-container">\n                                <div v-for="info in contact" class="contact-info">\n                                    <i :class="contactIconStyling(info.code)"></i>\n                                    <div class="contact-text">{{ info.value }}</div>\n                                </div>\n                            </div>\n                            <div id="save-contact__button">\n                                <a id="save-contact__link" href="../files/user.vcf" download="user.vcf">Save to Contact</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                </div>',data:function(){return{name:"business-card-tab",fullName:"GABOR KEVIN BARTA",position:"Fullstack Developer",codeSymbol:"</>",card:null,chosenBrands:null,brands:[{name:"Docker",code:"fab fa-docker"},{name:"Vuejs",code:"fab fa-vuejs"},{name:"HTML5",code:"fab fa-html5"},{name:"CSS3",code:"fab fa-css3"},{name:"Python",code:"fab fa-python"},{name:"Bootstrap",code:"fab fa-bootstrap"},{name:"PHP",code:"fab fa-php"},{name:"Figma",code:"fab fa-figma"},{name:"Git",code:"fab fa-git"},{name:"Gulp",code:"fab fa-gulp"},{name:"JavaScript",code:"fab fa-js-square"},{name:"SASS",code:"fab fa-sass"},{name:"R",code:"fab fa-r-project"}],contact:[{name:"email",code:"fas fa-envelope",value:"gkbarta@yahoo.com"},{name:"phone",code:"fas fa-phone",value:"(+45) 91 40 17 71"},{name:"website",code:"fas fa-globe",value:"https://gkevinb.github.io"}]}},mounted(){this.card=document.getElementById("business-card"),this.chooseBrands(5)},methods:{flipFlashcard:function(){0!=this.card.classList.length&&this.chooseBrands(5),this.card.classList.toggle("is-flipped")},brandStyling:function(i){return"brand-logo "+i},contactIconStyling:function(i){return"contact-icon "+i},chooseBrands:function(i){this.chosenBrands=shuffle(this.brands).slice(0,i)}}});
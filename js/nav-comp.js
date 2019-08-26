Vue.component("nav-comp",{props:{tabs:Array},template:'\n    <div id="navigation" class="navbar navbar-expand-lg">\n        <div class="navbar-brand header">\n            <h1>Gabor Kevin Barta</h1>\n        </div>\n\n        \x3c!-- Navigation Hamburger --\x3e\n        <button id="nav-burger-button" class="navbar-toggler hamburger hamburger--squeeze" @click="hamburgerX()" data-toggle="collapse" data-target="#colapser" type="button">\n            <span class="nav-burger hamburger-box">\n                <span id="nav-burger-meat-js" class="nav-burger-meat hamburger-inner"></span>\n            </span>\n        </button>\n\n        <div class="collapse navbar-collapse" id="colapser">\n            <ul class="navbar-nav ml-auto nav-menu">\n                <li v-for="tab in tabs" class="navbar-item nav-item" :class="dropDownMenu(tab)" :id="tab.name"\n                    @click="setCurrentTab(tab)">\n                    <span v-if="tab.subtabs" class="nav-link dropdown-toggle"\n                        data-toggle="dropdown">{{ tab.name }}</span>\n                    <span v-else class="nav-link">{{ tab.name }}</span>\n\n                    \x3c!-- Subtab dropdown --\x3e\n                    <ul v-if="tab.subtabs != null" class="dropdown-menu">\n                        <li v-for="subtab in tab.subtabs" class="dropdown-item" :id="subtab.name" @click.stop="setCurrentTab(subtab)">\n                        {{ subtab.name }}\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>',data:function(){return{currentTab:"Home"}},methods:{dropDownMenu:function(a){return a.subtabs?"dropdown":""},setCurrentTab:function(a){null==a.subtabs&&(this.currentTab=a.name,console.log(this.currentTab),this.$emit("current-tab",this.currentTab))},hamburgerX:function(){var a=document.querySelector(".hamburger");document.getElementById("colapser").classList.contains("collapsing")||(a.classList.toggle("is-active"),document.getElementById("nav-burger-meat-js").classList.toggle("nav-burger-meat__X"))}}});
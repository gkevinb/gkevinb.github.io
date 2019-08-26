Vue.component("nav-comp", {
    props: {
        tabs: Array
    },
    template: `
    <div id="navigation" class="navbar navbar-expand-lg">
        <div class="navbar-brand header">
            <h1>Gabor Kevin Barta</h1>
        </div>

        <!-- Navigation Hamburger -->
        <button id="nav-burger-button" class="navbar-toggler hamburger hamburger--squeeze" @click="hamburgerX()" data-toggle="collapse" data-target="#colapser" type="button">
            <span class="nav-burger hamburger-box">
                <span id="nav-burger-meat-js" class="nav-burger-meat hamburger-inner"></span>
            </span>
        </button>

        <div class="collapse navbar-collapse" id="colapser">
            <ul class="navbar-nav ml-auto nav-menu">
                <li v-for="tab in tabs" class="navbar-item nav-item" :class="dropDownMenu(tab)" :id="tab.name"
                    @click="setCurrentTab(tab)">
                    <span v-if="tab.subtabs" class="nav-link dropdown-toggle"
                        data-toggle="dropdown">{{ tab.name }}</span>
                    <span v-else class="nav-link">{{ tab.name }}</span>

                    <!-- Subtab dropdown -->
                    <ul v-if="tab.subtabs != null" class="dropdown-menu">
                        <li v-for="subtab in tab.subtabs" class="dropdown-item" :id="subtab.name" @click.stop="setCurrentTab(subtab)">
                        {{ subtab.name }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>`,
    data: function () {
        return {
            currentTab: 'Home' // Home is default tab
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
                console.log(this.currentTab);
                this.$emit('current-tab', this.currentTab);
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
})
export default {
    name: "nav-comp",
    props: {
        tabs: Array
    },
    data() {
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
}
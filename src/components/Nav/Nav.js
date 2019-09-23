export default {
    name: "nav-comp",
    props: {
        tabs: Object
    },
    data() {
        return {
            currentTab: 'Home' // Home is default tab
        }
    },
    methods: {
        dropDownMenu: function (subTabs) {
            return subTabs.length != 0 ? 'dropdown' : '';
        },
        setCurrentTab: function (tab, subTabs = []) {
            if (subTabs.length == 0) {
                this.currentTab = tab;
                this.$emit('current-tab', this.currentTab);
            }
        },
        hamburgerX: function () {
            let hamburger = document.querySelector(".hamburger");
            let colapser = document.getElementById("colapser");

            /* Fixes double click hamburger icon bug #102 */
            if (!colapser.classList.contains("collapsing")) {
                hamburger.classList.toggle("is-active");
                document.getElementById("nav-burger-meat-js").classList.toggle("nav-burger-meat__X");
            }
        }
    }
}
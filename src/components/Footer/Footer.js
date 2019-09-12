export default {
    name: "footer-comp",
    props: {
        current_tab: String,
        tabs: Array,
        connect: Object
    },
    data() {
        return {
            sources: []
        }
    },
    watch: {
        /*
            Watch current_tab variable and populate sources if the current_tab has any sources.
            Check out the data structure in the Vue.js app in the index.js file. It is passed in
            as props in this component.
        */
        current_tab: function () {
            var sources = [];

            for (var tab of this.tabs) {
                if (tab.name == this.current_tab) {
                    if (tab.sources != null) {
                        sources = tab.sources;
                    }
                }
                if (tab.subtabs != null) {
                    for (var subtab of tab.subtabs) {
                        if (subtab.name == this.current_tab) {
                            if (subtab.sources != null) {
                                sources = subtab.sources;
                            }
                        }
                    }
                }
            }
            this.sources = sources;
        },
        /*
            Watch sources variable and if there are sources make sure footer is with credit section
            in mobile version. If sources is empty then credit section should be taken out so it
            won't take up empty space.
        */
        sources: function () {
            var footer = document.getElementById('footer-id');

            if (this.sources.length == 0 && footer.classList.contains('footer-with-credit')) {
                footer.classList.toggle('footer-with-credit')
                footer.classList.toggle('footer-without-credit')
            }
            if (this.sources.length != 0 && footer.classList.contains('footer-without-credit')) {
                footer.classList.toggle('footer-without-credit')
                footer.classList.toggle('footer-with-credit')
            }
        }
    }
}
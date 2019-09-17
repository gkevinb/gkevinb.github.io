export default {
    name: "footer-comp",
    props: {
        current_tab: String,
        connect: Object,
        sources: Object,
    },
    data() {
        return {
            current_sources: []
        }
    },
    watch: {
        /*
            Watch current_tab variable and populate sources if the current_tab has any sources.
            Check out the data structure in the Vue.js app in the index.js file. It is passed in
            as props in this component.
        */
        current_tab: function () {
            if(this.sources[this.current_tab]){
                this.current_sources = this.sources[this.current_tab];
            }else{
                this.current_sources = []
            }
        },
        /*
            Watch sources variable and if there are sources make sure footer is with credit section
            in mobile version. If sources is empty then credit section should be taken out so it
            won't take up empty space.
        */
       current_sources: function () {
            let footer = document.getElementById('footer-id');

            if (this.current_sources.length == 0 && footer.classList.contains('footer-with-credit')) {
                footer.classList.toggle('footer-with-credit')
                footer.classList.toggle('footer-without-credit')
            }
            if (this.current_sources.length != 0 && footer.classList.contains('footer-without-credit')) {
                footer.classList.toggle('footer-without-credit')
                footer.classList.toggle('footer-with-credit')
            }
        }
    }
}
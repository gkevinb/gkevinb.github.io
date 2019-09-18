export default {
    name: "footer-comp",
    props: {
        currentTab: String,
        connect: Object,
        sources: Object,
    },
    data() {
        return {
            currentSources: []
        }
    },
    watch: {
        /*
            Watch currentTab variable and populate sources if the currentTab has any sources.
            Check out the data structure in the Vue.js app in the index.js file. It is passed in
            as props in this component.
        */
       currentTab: function () {
            if(this.sources[this.currentTab]){
                this.currentSources = this.sources[this.currentTab];
            }else{
                this.currentSources = []
            }
        },
        /*
            Watch sources variable and if there are sources make sure footer is with credit section
            in mobile version. If sources is empty then credit section should be taken out so it
            won't take up empty space.
        */
       currentSources: function () {
            let footer = document.getElementById('footer-id');

            if (this.currentSources.length == 0 && footer.classList.contains('footer-with-credit')) {
                footer.classList.toggle('footer-with-credit')
                footer.classList.toggle('footer-without-credit')
            }
            if (this.currentSources.length != 0 && footer.classList.contains('footer-without-credit')) {
                footer.classList.toggle('footer-without-credit')
                footer.classList.toggle('footer-with-credit')
            }
        }
    }
}
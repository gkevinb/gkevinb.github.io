Vue.component("footer-comp", {
    props: {
        current_tab: String,
        tabs: Array
    },
    template: `
    <div id="footer-id" class="footer footer-without-credit">
		<div v-if="sources.length > 0" class="footer-credit">
			<div id="credit-title">
				<p>Give Credit</p>
			</div>
			<div id="credit-links">
				<p v-for="source in sources">
					<a :href="source.link">{{ source.name }}</a>
				</p>
			</div>	
		</div>
		<div class="footer-content">
			<div id="made-with" class="footer-content__text"><p>Made with ❤️ by <span id="my-name">Gabor Kevin Barta</span></p></div>
			<div id="hosted-by" class="footer-content__text"><p>Hosted by <a href="https://pages.github.com/">GitHub Pages</a></p></div>
			<div id="view-source" class="footer-content__text"><p>View <a href="https://github.com/gkevinb/gkevinb.github.io">Source Code</a></p></div>
		</div>
		<div class="footer-connect">
			<div id="connect-title"><p>Connect</p></div>
            <div id="connect-icons">
                <a v-for="link in links" :id="link.id" class="connect-icon" :href="link.url"><i :class="link.icon"></i></a>
			</div>
		</div>
	</div>`,
    data: function () {
        return {
            sources: [],
            links: [
                {
                    id: 'linkedin-icon',
                    url: 'https://www.linkedin.com/in/gabor-kevin-barta/',
                    icon: 'fab fa-linkedin'
                },
                {
                    id: 'github-icon',
                    url: 'https://github.com/gkevinb',
                    icon: 'fab fa-github'
                },
                {
                    id: 'codepen-icon',
                    url: 'https://codepen.io/gkevinb/',
                    icon: 'fab fa-codepen'
                },
                {
                    id: 'hackerrank-icon',
                    url: 'https://www.hackerrank.com/gkevinb',
                    icon: 'fab fa-hackerrank'
                }
            ]
        }
    },
    created() {
        
    },
    mounted() {

    },
    watch: {
        /*
            Watch current_tab variable and populate sources if the current_tab has any sources.
            Check out the data structure in the Vue.js app in the index.js file. It is passed in
            as props in this component.
        */
        current_tab: function () {
            var sources = [];

            for(var tab of this.tabs){
                if(tab.name == this.current_tab){
                    if(tab.sources != null){
                        sources = tab.sources;
                    }
                }
                if(tab.subtabs != null){
                    for(var subtab of tab.subtabs){
                        if(subtab.name == this.current_tab){
                            if(subtab.sources != null){
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
        sources: function(){
            var footer = document.getElementById('footer-id');

            if(this.sources.length == 0 && footer.classList.contains('footer-with-credit')){
                footer.classList.toggle('footer-with-credit')
                footer.classList.toggle('footer-without-credit')
            }
            if(this.sources.length != 0 && footer.classList.contains('footer-without-credit')){
                footer.classList.toggle('footer-without-credit')
                footer.classList.toggle('footer-with-credit')
            }
        }
    },
    methods: {

    }
})
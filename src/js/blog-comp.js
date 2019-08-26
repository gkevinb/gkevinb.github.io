/* 
Needs revision, UNUSED since it is not imported as a JS module in index.html
*/
Vue.component("blog-tab", {
    props: ['tabs', 'cu'],
    template:  `<div>
                <h1>Blog section coming soon...</h1>
				</div>`,
    data: function () {
        return {
            message: 'hello'
        }
    },
    methods: {
        func: function (bar) {
            bar += " !!!!!!"
            return bar
        }
    }
})
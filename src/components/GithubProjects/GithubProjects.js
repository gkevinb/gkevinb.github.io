export default {
    name: "github-projects-tab",
    props: {
        input: Array
    },
    data() {
        return {
            repos: []
        };
    },
    created() {
        this.repos = this.input.filter(repo => repo.fork === false)
    }
};
import axios from 'axios';

export default {
    name: "custom-scripts-tab",
    props: {
        input: Array
    },
    data() {
        return {
            commands: {},
            show: false
        };
    },
    created() {
        for (let i = 0; i < this.input.length; i++) {
            let file = this.input[i]

            if (file.type == "file") {
                /* Perhaps make regex check better */
                var pattern = /.+\..+/g;
                if (!pattern.test(file.name)) {
                    this.commands[file.name] = null
                    this.apiCall(file.name, file.download_url)
                }
            }
        }
    },
    methods: {
        getBashCommands: function () {
            let commands = []

            return commands;
        },
        apiCall: function (name, path) {
            const GithubAPI = axios.create({
                baseURL: "",
            })
            /* Note: GET is hardcoded, for know, since it is the only type of request made */
            GithubAPI.get(path)
                .then(response => {
                    this.commands[name] = response.data;
                });
        },
        showCode: function() {
            this.show = this.show ? false : true
        }
    }
};
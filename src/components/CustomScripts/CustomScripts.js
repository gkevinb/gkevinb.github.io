import axios from 'axios';
import hljs from 'highlight.js/lib/highlight';
import bash from 'highlight.js/lib/languages/bash';
import 'highlight.js/styles/atom-one-dark.css';

export default {
    name: "custom-scripts-tab",
    props: {
        input: Array
    },
    data() {
        return {
            commands: {},
            show: [],
        };
    },
    created() {
        hljs.registerLanguage('bash', bash);
        
        for (let i = 0; i < this.input.length; i++) {
            let file = this.input[i]

            if (file.type == "file") {
                /* Perhaps make regex check better */
                var pattern = /.+\..+/g;
                if (!pattern.test(file.name)) {
                    this.commands[file.name] = {}
                    this.commands[file.name]['id'] = i;
                    this.commands[file.name]['name'] = file.name;
                    this.show.push(false)
                    this.apiCall(file.name, file.download_url)
                }
            }
        }
    },
    watch: {
        show: function () {
            let milliseconds = 0;
            setTimeout(function () {
                //your code to be executed after 0 milliseconds, immediately!
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightBlock(block);
                });
            }, milliseconds);
        },
    },
    methods: {
        apiCall: function (name, path) {
            const GithubAPI = axios.create({
                baseURL: "",
            })
            /* Note: GET is hardcoded, for know, since it is the only type of request made */
            GithubAPI.get(path)
                .then(response => {
                    this.commands[name]['algorithm'] = response.data;
                });
        },
    }
};
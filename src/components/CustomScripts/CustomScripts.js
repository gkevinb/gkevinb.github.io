import axios from 'axios';
import hljs from 'highlight.js/lib/highlight';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/atom-one-dark.css';

const GithubAPI = axios.create()

export default {
    name: "custom-scripts-tab",
    props: {
        input: Array
    },
    data() {
        return {
            readMe: null,
            commands: {},
            show: [],
        };
    },
    created() {
        hljs.registerLanguage('bash', bash);
        hljs.registerLanguage('python', python);

        for (let i = 0; i < this.input.length; i++) {
            let file = this.input[i]

            if (file.type == 'file') {
                /* Perhaps make regex check better */
                let pattern = /.+\..+/g;
                
                if (!pattern.test(file.name)) {
                    this.commands[file.name] = {}
                    this.commands[file.name]['id'] = i;
                    this.commands[file.name]['name'] = file.name;
                    this.show.push(false)
                    this.apiCall(file.name, file.download_url)
                }
            }
            if (file.name == 'README.md') {
                this.apiCallReadMe(file.download_url)
            }
        }
    },
    watch: {
        show: function () {
            let milliseconds = 0;
            setTimeout(function () {
                /* Your code to be executed after 0 milliseconds, immediately! */
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightBlock(block);
                });
            }, milliseconds);
        },
    },
    methods: {
        apiCall: function (name, path) {
            /* Note: GET is hardcoded, for know, since it is the only type of request made */
            GithubAPI.get(path)
                .then(response => {
                    let algorithm = response.data
                    let pythonPattern = /#!\/usr\/bin\/env python.*/g
                    let bashPattern = /#!\/bin\/bash.*/g

                    this.commands[name]['algorithm'] = algorithm

                    if(pythonPattern.test(algorithm)){
                        this.commands[name]['language'] = 'python'
                    }
                    if(bashPattern.test(algorithm)){
                        this.commands[name]['language'] = 'bash'
                    }
                });
        },
        apiCallReadMe: function (path) {
            /* Note: GET is hardcoded, for know, since it is the only type of request made */
            GithubAPI.get(path)
                .then(response => {
                    this.readMe = response.data;
                });
        },
        classStyling: function(file){
            if(this.commands[file]['language'] == 'python'){
                return "hjls python"
            }
            if(this.commands[file]['language'] == 'bash'){
                return "hjls bash"
            }
            else{
                return "hjls"
            }
        }
    }
};
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
            reRenderKey: 0
        };
    },
    created() {
        hljs.registerLanguage('bash', bash);
        hljs.registerLanguage('python', python);

        let showIndex = 0

        for (let i = 0; i < this.input.length; i++) {
            let file = this.input[i]

            if (file.name == 'README.md') {
                this.apiCallReadMe(file.download_url)
            } else if (file.name == '.gitignore') {
                // NO-OP
            } else {
                this.commands[file.name] = {}
                this.commands[file.name]['id'] = showIndex
                this.commands[file.name]['name'] = file.name;
                this.show.push(false)
                this.apiCall(file.name, file.download_url)
                showIndex = showIndex + 1
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
                    let bashPattern = /#!\/bin\/zsh.*/g

                    this.commands[name]['algorithm'] = algorithm

                    if (pythonPattern.test(algorithm)) {
                        this.commands[name]['language'] = 'python'
                    }
                    if (bashPattern.test(algorithm)) {
                        this.commands[name]['language'] = 'bash'
                    }
                });
        },
        apiCallReadMe: function (path) {
            /* Note: GET is hardcoded, for know, since it is the only type of request made */
            GithubAPI.get(path)
                .then(response => {
                    this.readMe = response.data
                    this.filterReadMeInfo()
                });
        },
        filterReadMeInfo: function () {
            let pythonPattern = /#{3}\s(.*)\s\s(.*)\s\s#{4}\sArguments\s\s((-\s.+\s)+)\s#{4}\sExample\s\s```bash\s(.*)\s```/g
            let readMeData = [...this.readMe.matchAll(pythonPattern)];
            console.log(readMeData)

            for(let commandInfo of readMeData){
                console.log(commandInfo)
            }

        },
        classStyling: function (file) {
            if (this.commands[file]['language'] == 'python') {
                return "hjls python"
            }
            if (this.commands[file]['language'] == 'bash') {
                return "hjls bash"
            } else {
                return "hjls"
            }
        },
        collapseAll: function () {
            for (let i = 0; i < this.show.length; i++) {
                this.show[i] = false
            }
            this.reRenderKey += 1
        }
    }
};
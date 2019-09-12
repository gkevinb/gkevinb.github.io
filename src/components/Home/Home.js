export default {
    name: "home-tab",
    props: {
        connect: Object
    },
    data() {
        return {
            name: "home-tab",
            websites: [
                {
                    id: 1,
                    name: 'Linkedin',
                    link: 'https://www.linkedin.com/in/gabor-kevin-barta/',
                    icon: 'fab fa-linkedin'
                },
                {
                    id: 2,
                    name: 'Github',
                    link: 'https://github.com/gkevinb',
                    icon: 'fab fa-github'
                },
                {
                    id: 3,
                    name: 'Codepen',
                    link: 'https://codepen.io/gkevinb/',
                    icon: 'fab fa-codepen'
                }
            ]
        }
    }
}
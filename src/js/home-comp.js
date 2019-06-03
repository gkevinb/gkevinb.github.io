Vue.component("home-tab", {
    name: "home-tab",
    template:  `<div :id="name">
                <img id="bg_image" src="img/background.jpeg" />
                <div id="intro_container">
                <p>Hi, my name is Kevin.</p>
                <p>I'm a full stack developer based in Budapest.</p>
                <br />
                <p>I have a passion for web development and artificial intelligence.</p>
                <br />
                <p>This is my portfolio website to showcase some of my work and interest. Feel free to have a look around and get in contact with me.</p>
                </div>
                <div id="links_container">
                <div v-for="website in websites" class="link_container">
                <a :href="website.link">
                <div>
                <img :src="website.image" class="link_icon"/>
                <span>{{ website.name }}</span>
                </div>
                </a>
                </div>
                </div>
                <p>Website is continously under construction to showcase my projects, interest, and expertise.</p>
			    </div>`,
    data: function () {
        return {
            name: "home-tab",
            websites: [
                {   
                    id: 1,
                    name: 'Linkedin',
                    link: 'https://www.linkedin.com/in/gabor-kevin-barta/',
                    image: '../img/linkedin_icon.png'
                },
                {   
                    id: 2,
                    name: 'Github',
                    link: 'https://github.com/gkevinb',
                    image: '../img/github_icon.png'
                },
                {   
                    id: 3,
                    name: 'Codepen',
                    link: 'https://codepen.io/gkevinb/',
                    image: '../img/codepen_icon.png'
                }
            ]
        }
    }
})

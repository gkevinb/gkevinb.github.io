Vue.component("home-tab", {
    name: "home-tab",
    template:  `<div :id="name">
		        <div id="intro-container">
                <p>Hi, my name is Kevin.</p>
                <p>I'm a full stack developer based in Budapest.</p>
                <br />
                <p>I have a passion for web development and artificial intelligence.</p>
                <br />
                <p>This is my portfolio website to showcase some of my work and interest. Feel free to have a look around and get in contact with me.</p>
                </div>
                <div id="links-container">
                    <div v-for="website in websites" class="link-container">
                        <a :href="website.link">
                            <i :class="website.icon" class="link-icon"></i>
                            <div class="link-text">{{ website.name }}</div>
                        </a>
                    </div>
                </div>
                <div id="construction-tape__left"></div>
                <div id="construction-tape__middle">WEBSITE CONTINUOUSLY UNDER CONSTRUCTION</div>
                <div id="construction-tape__right"></div>
                </div>`,
    data: function () {
        return {
            name: "home-tab",
            websites: [
                {
                    id: 1,
                    name: 'Linkedin',
                    link: 'https://www.linkedin.com/in/gabor-kevin-barta/',
                    image: '../img/linkedin_icon.png',
                    icon: 'fab fa-linkedin'
                },
                {
                    id: 2,
                    name: 'Github',
                    link: 'https://github.com/gkevinb',
                    image: '../img/github_icon.png',
                    icon: 'fab fa-github'
                },
                {
                    id: 3,
                    name: 'Codepen',
                    link: 'https://codepen.io/gkevinb/',
                    image: '../img/codepen_icon.png',
                    icon: 'fab fa-codepen'
                }
            ]
        }
    }
})

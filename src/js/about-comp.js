Vue.component("experience-tab", {
    template: `
    <div id="cv">
    <div id="experiences_container">
    <h2>Work</h2>
    <div v-for="experience in experiences" class="experience_container">
    <div class="bubble" :id="experience.tag"></div>
    <div class="experience_card">
    <div class="title">{{ experience.title }}</div>
    <a :href="experience.link"><div class="institution">{{ experience.company }}</div></a>
    <div class="time_period">{{ experience.timePeriod }}</div>
    <div class="city">{{ experience.city }}</div>
    <div class="description">
    <div class="text">{{ experience.text }}</div>
    </div>
    </div>
    </div>
    </div>
    <div id="education_container">
    <h2>Education</h2>
    <div v-for="degree in degrees" class="experience_container">
    <div class="bubble" :id="degree.tag"></div>
    <div class="experience_card">
    <div class="title">{{ degree.title }}</div>
    <a :href="degree.link"><div class="institution">{{ degree.university }}</div></a>
    <div class="time_period">{{ degree.timePeriod }}</div>
    <div class="city">{{ degree.city }}</div>
    <div class="description">
    <div v-if="degree.specialization" class="specialization">
    <div id="specialization_text">Specialization</div>
    <div id="specialization_title">{{ degree.specialization }}</div>
    </div>
    <div class="text">{{ degree.text }}</div>
    <div class="thesis">
    <div id="thesis_text">Thesis</div>
    <a :href="degree.thesisLink"><div id="thesis_title">{{ degree.thesisTitle }}</div></a>
    <div id="thesis_details">{{ degree.thesisDetails }}</div>
    </div>
    </div>
    </div>
    </div>
    </div>
	</div>`,
    data: function () {
        return {
            experiences: [
                {   
                    id: 1,
                    tag: 'netcompany',
                    title: 'IT Consultant',
                    company: '🏢Netcompany A/S',
                    link: 'https://www.netcompany.com/en-GB',
                    timePeriod: '🗓Mar 2019 - May 2019',
                    city: '🏙Copenhagen',
                    text: 'Netcompany is a pure-play IT services company delivering business-critical strategic IT projects that accelerate customers’ digital transformation through digital platforms, core systems and infrastructure services. Development of internal social media website to sign-up for company wide events. Software component analysis at CPH Airport.'
                },
                { 
                    id: 2,
                    tag: 'codeum',
                    title: 'Junior Backend Developer',
                    company: '🏢Codeum A/S',
                    link: 'http://www.codeum.com/',
                    timePeriod: '🗓Nov 2018 - Jan 2019',
                    city: '🏙Copenhagen',
                    text: 'Codeum is a software company with a background in the global gaming industry, specializing in building and operating gaming platforms and providing service to online bookmakers around the world. Creating Java client-side API for online gambling service. Developing an online gaming platform in ASP.NET Core.'
                },
                {
                    id: 3,
                    tag: 'buildcode',
                    title: 'Software Engineer Intern',
                    company: '🏢BuildCode IVS',
                    link: 'https://buildcode.dk/en/',
                    timePeriod: '🗓Sep 2017 - Jun 2018',
                    city: '🏙Odense',
                    text: 'Software engineer intern at Buildcode, a construction consultant company focusing on digitizing and optimizing quality insurance in the construction industry. Develop add-on extensions for AutoDesk Revit using pyRevit, an IronPython script library. Create visualizations and perform calculations on data collected by drones using LIDAR technology.'
                },
                {
                    id: 4,
                    tag: 'sdu',
                    title: 'University Instructor',
                    company: '🏫University of Southern Denmark',
                    link: 'https://www.sdu.dk/en/',
                    timePeriod: '🗓Sep 2017 - Jun 2018',
                    city: '🏙Odense',
                    text: 'Instructor at SDU Odense for BSc. and MSc. Software Engineering courses. Instructed lab exercises in the following courses: Modeling and Simulation (MSc. level), Statistics and Experimental Methods (BSc. level), and Artificial Intelligence (BSc. level).'
                },
                {
                    id: 5,
                    tag: 'thyssenkrupp',
                    title: 'Software Developer Intern',
                    company: '🏢ThyssenKrupp Presta Hungary',
                    link: 'https://www.thyssenkrupp.hu/en/',
                    timePeriod: '🗓Jul 2015 - Dec 2015',
                    city: '🏙Budapest',
                    text: 'AUTOSAR BSW module software testing using CUnit framework. Software development on in-house developed gateway embedded system using C programming language.'
                }
            ],
            degrees: [
                {   
                    id: 1,
                    tag: 'sdu',
                    title: 'MSc in Software Engineering',
                    university: '🏫University of Southern Denmark',
                    link: 'https://www.sdu.dk/en/',
                    timePeriod: '🗓Sep 2017 - Jun 2018',
                    city: '🏙Odense',
                    text: 'As a software engineer, I have gained knowledge on developing intelligent solutions on numerous platforms. The education has provided me with experience in developing mobile apps, IT security, and online solutions.',
                    thesisTitle: 'Data-based Generation of Reliability Models',
                    thesisLink: 'https://www.dropbox.com/s/gdhstffrp8z29pv/GaborKevinBarta_MSc_Thesis.pdf?dl=1',
                    thesisDetails: 'Developing an automated method of extracting a fault tree representation of a system from time series data.'
                },
                { 
                    id: 2,
                    tag: 'bme',
                    title: 'BSc in Electrical Engineering',
                    university: '🏫Budapest University of Technology and Economics',
                    link: 'http://www.bme.hu/',
                    timePeriod: '🗓Sep 2012 - Jun 2016',
                    city: '🏙Budapest',
                    specialization: 'Embedded and Control Systems',
                    text: 'As an electrical engineer specializing in embedded systems, I have gained experience in developing software on embedded devices and control systems. I have developed programs on microcontrollers and FPGAs.',
                    thesisTitle: 'Testing of AUTOSAR I-PDU Multiplexer',
                    thesisLink: 'https://www.dropbox.com/s/eiw8yymxvcvghku/GaborKevinBarta_BSc_Thesis.pdf?dl=1',
                    thesisDetails: 'Unit testing of a basic software module called I-PDU Multiplexer in the AUTOSAR, a standardized automotive software architecture, at ThyssenKrupp Presta Hungary.'
                }
            ]
        }
    },
    methods: {
        stringToNum: function (string) {
            return parseInt(string, 10);
        },
        matrixId: function (i, j) {
            return "_" + i.toString() + "x" + j.toString() + "_";
        }
    }
})
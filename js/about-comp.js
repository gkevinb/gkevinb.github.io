Vue.component("about-tab",{template:'\n    <div id="cv">\n    <div id="experiences_container">\n    <h2>Work Experience</h2>\n    <div v-for="experience in experiences" class="experience">\n    <div class="title">{{ experience.title }}</div>\n    <div class="institution">{{ experience.company }}</div>\n    <div class="time_period">{{ experience.timePeriod }}</div>\n    <div class="city">{{ experience.city }}</div>\n    </div>\n    </div>\n    <div id="education_container">\n    <h2>Education</h2>\n    <div v-for="degree in degrees" class="experience">\n    <div class="title">{{ degree.title }}</div>\n    <div class="institution">{{ degree.university }}</div>\n    <div class="time_period">{{ degree.timePeriod }}</div>\n    <div class="city">{{ degree.city }}</div>\n    </div>\n    </div>\n\t</div>',data:function(){return{experiences:[{id:1,title:"IT Consultant",company:"🏢Netcompany",timePeriod:"🗓Mar 2019 - ongoing",city:"🏙Copenhagen"},{id:2,title:"Junior Backend Developer",company:"🏢Codeum A/S",timePeriod:"🗓Nov 2018 - Jan 2019",city:"🏙Copenhagen"},{id:3,title:"Software Engineer Intern",company:"🏢BuildCode IVS",timePeriod:"🗓Sep 2017 - Jun 2018",city:"🏙Odense"},{id:4,title:"University Instructor",company:"🏫University of Southern Denmark",timePeriod:"🗓Sep 2017 - Jun 2018",city:"🏙Odense"},{id:5,title:"Software Developer Intern",company:"🏢ThyssenKrupp Presta Hungary",timePeriod:"🗓Jul 2015 - Dec 2015",city:"🏙Budapest"}],degrees:[{id:1,title:"MSc in Software Engineering",university:"🏫University of Southern Denmark",timePeriod:"🗓Sep 2017 - Jun 2018",city:"🏙Odense"},{id:2,title:"BSc in Electrical Engineering",university:"🏫Budapest University of Technology and Economics",timePeriod:"🗓Sep 2012 - Jun 2016",city:"🏙Budapest"}]}},methods:{stringToNum:function(e){return parseInt(e,10)},matrixId:function(e,i){return"_"+e.toString()+"x"+i.toString()+"_"}}});
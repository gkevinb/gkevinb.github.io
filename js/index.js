var app=new Vue({el:"#app",data:{currentTab:"Home",tabs:[{name:"Home"},{name:"About",subtabs:[{name:"Experience"},{name:"Business Card"}]},{name:"Projects",subtabs:[{name:"Q-Learning"},{name:"Chinese Flashcards"}]},{name:"Blog"}]},computed:{getCurrentTab:function(){return this.currentTab.replace(" ","-").toLowerCase()+"-tab"}},methods:{dropDownMenu:function(e){return e.subtabs?"dropdown":""},hamburgerX:function(){document.querySelector(".hamburger").classList.toggle("is-active"),document.getElementById("hamburger-meat-id").classList.toggle("nav-burger-meat__X")}}});Vue.component("projects-tab",{props:["tabs","cu"],template:'<div>\n                <ul v-for="tab in tabs" v-if="tab.name == cu">\n                    \x3c!--<li v-for="subtab in tab.subtabs" @click="cu = subtab.name">{{ subtab.name }}</li>--\x3e\n                </ul>\n\t\t\t\t</div>',data:function(){return{dog:"Doggy!",cat:"Kitty!!",bird:"Birdy!!!",todos:[{text:"Wake up"},{text:"Take shower"},{text:"Go to work"}],groceryList:[{id:0,text:"Vegetables"},{id:1,text:"Cheeese"},{id:2,text:"Meat"}]}},methods:{func:function(e){return e+=" !!!!!!"}}});
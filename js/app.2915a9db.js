(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b9a":function(t,e,a){},1122:function(t,e,a){},"15c4":function(t,e,a){"use strict";var i=a("0b9a"),s=a.n(i);s.a},1695:function(t,e,a){"use strict";var i=a("b1fe"),s=a.n(i);s.a},"1cdf":function(t,e,a){},"1d45":function(t,e,a){"use strict";var i=a("92dd"),s=a.n(i);s.a},"20ab":function(t,e,a){"use strict";var i=a("d298"),s=a.n(i);s.a},2568:function(t,e,a){},2942:function(t,e,a){},"359f":function(t,e,a){},"3ac7":function(t,e,a){t.exports=a.p+"img/qr-code.17b871df.png"},4279:function(t,e,a){},"51e3":function(t,e,a){"use strict";var i=a("2568"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container",attrs:{id:"custom-container"}},[a("nav-comp",{attrs:{tabs:t.tabs},on:{"current-tab":function(e){t.currentTab=e}}}),a(t.getCurrentTab,{tag:"div",staticClass:"content",attrs:{input:t.inputData[t.currentTab]}})],1),a("footer-comp",{attrs:{currentTab:t.currentTab,connect:t.getLinks(),sources:t.getSources()}})],1)},n=[],r=(a("ac1f"),a("5319"),a("b85c")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home-tab"}},[t._m(0),t.input?a("div",{attrs:{id:"links-container"}},t._l(t.input.links.slice(0,3),(function(e){return a("div",{staticClass:"link-container"},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("i",{staticClass:"link-icon",class:e.icon}),a("div",{staticClass:"link-text"},[t._v(t._s(e.name))])])])})),0):t._e(),a("div",{attrs:{id:"construction-tape__left"}}),a("div",{attrs:{id:"construction-tape__middle"}},[t._v("WEBSITE CONTINUOUSLY UNDER CONSTRUCTION")]),a("div",{attrs:{id:"construction-tape__right"}})])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"intro-container"}},[a("p",[t._v("Hi, my name is Kevin.")]),a("p",[t._v("I'm a full stack developer based in Budapest.")]),a("br"),a("p",[t._v("I have a passion for web development and artificial intelligence.")]),a("br"),a("p",[t._v("This is my portfolio website to showcase some of my work and interest. Feel free to have a look around and get in contact with me.")])])}],l={name:"home-tab",props:{input:Object}},d=l,u=(a("bda0"),a("2877")),h=Object(u["a"])(d,o,c,!1,null,null,null),v=h.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar navbar-expand-lg",attrs:{id:"navigation"}},[a("div",{staticClass:"navbar-brand header"},[a("a",{attrs:{href:t.url}},[a("h1",{style:t.hostColorStyling()},[t._v("Gabor Kevin Barta")])])]),a("button",{staticClass:"navbar-toggler hamburger hamburger--squeeze",attrs:{id:"nav-burger-button","data-toggle":"collapse","data-target":"#colapser",type:"button"},on:{click:function(e){return t.hamburgerX()}}},[t._m(0)]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"colapser"}},[a("ul",{staticClass:"navbar-nav ml-auto nav-menu"},[t._l(t.tabs,(function(e,i){return a("li",{staticClass:"navbar-item nav-item",class:t.dropDownMenu(e),attrs:{id:i},on:{click:function(a){return t.setCurrentTab(i,e)}}},[0==e.length?a("span",{staticClass:"nav-link"},[t._v(t._s(i))]):a("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v(t._s(i))]),0!=e.length?a("ul",{staticClass:"dropdown-menu"},t._l(e,(function(e){return a("li",{staticClass:"sub-tab dropdown-item",on:{click:function(a){return a.stopPropagation(),t.setCurrentTab(e)}}},[t._v(t._s(e))])})),0):t._e()])})),t._m(1)],2)])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"nav-burger hamburger-box"},[a("span",{staticClass:"nav-burger-meat hamburger-inner",attrs:{id:"nav-burger-meat-js"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"navbar-item nav-item",attrs:{id:"Blog"}},[a("a",{attrs:{href:"https://gaborkevinbarta.com/blog/"}},[a("span",{staticClass:"nav-link"},[t._v("Blog")])])])}],f={name:"nav-comp",props:{tabs:Object},data:function(){return{currentTab:"Home",url:"https://gaborkevinbarta.com",hostColor:"transparent"}},methods:{dropDownMenu:function(t){return 0!=t.length?"dropdown":""},setCurrentTab:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];0==e.length&&(this.currentTab=t,this.$emit("current-tab",this.currentTab))},hamburgerX:function(){var t=document.querySelector(".hamburger"),e=document.getElementById("colapser");e.classList.contains("collapsing")||(t.classList.toggle("is-active"),document.getElementById("nav-burger-meat-js").classList.toggle("nav-burger-meat__X"))},hostColorStyling:function(){return{backgroundColor:this.hostColor}}}},g=f,_=(a("1695"),Object(u["a"])(g,m,p,!1,null,null,null)),b=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer footer-without-credit",attrs:{id:"footer-id"}},[t.currentSources.length>0?a("div",{staticClass:"footer-credit"},[t._m(0),a("div",{attrs:{id:"credit-links"}},t._l(t.currentSources,(function(e){return a("p",[a("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.name))])])})),0)]):t._e(),t._m(1),a("div",{staticClass:"footer-connect"},[t._m(2),t.connect?a("div",{attrs:{id:"connect-icons"}},t._l(t.connect.links,(function(t){return a("a",{staticClass:"connect-icon",attrs:{id:t.id,href:t.url,target:"_blank"}},[a("i",{class:t.icon})])})),0):t._e()])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"credit-title"}},[a("p",[t._v("Give Credit")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-content"},[a("div",{staticClass:"footer-content__text",attrs:{id:"made-with"}},[a("p",[t._v("Made with ❤️ by "),a("span",{attrs:{id:"my-name"}},[t._v("Gabor Kevin Barta")])])]),a("div",{staticClass:"footer-content__text",attrs:{id:"hosted-by"}},[a("p",[t._v("Hosted by "),a("a",{attrs:{href:"https://pages.github.com/",target:"_blank"}},[t._v("GitHub Pages")])])]),a("div",{staticClass:"footer-content__text",attrs:{id:"view-source"}},[a("p",[t._v("View "),a("a",{attrs:{href:"https://github.com/gkevinb/gkevinb.github.io",target:"_blank"}},[t._v("Source Code")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"connect-title"}},[a("p",[t._v("Connect")])])}],x={name:"footer-comp",props:{currentTab:String,connect:Object,sources:Object},data:function(){return{currentSources:[]}},watch:{currentTab:function(){this.sources[this.currentTab]?this.currentSources=this.sources[this.currentTab]:this.currentSources=[]},currentSources:function(){var t=document.getElementById("footer-id");0==this.currentSources.length&&t.classList.contains("footer-with-credit")&&(t.classList.toggle("footer-with-credit"),t.classList.toggle("footer-without-credit")),0!=this.currentSources.length&&t.classList.contains("footer-without-credit")&&(t.classList.toggle("footer-without-credit"),t.classList.toggle("footer-with-credit"))}}},y=x,k=(a("51e3"),Object(u["a"])(y,C,w,!1,null,null,null)),S=k.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"experiences-tab"}},[a("div",{attrs:{id:"experiences-container"}},[a("h2",[t._v("Work")]),t._l(t.input.experiences,(function(e){return a("div",{staticClass:"experience-container"},[a("div",{staticClass:"bubble",attrs:{id:e.tag}}),a("div",{staticClass:"experience-card"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),a("a",{attrs:{href:e.link,target:"_blank"}},[a("div",{staticClass:"institution"},[t._v(t._s(e.company))])]),a("div",{staticClass:"time-period"},[t._v(t._s(e.timePeriod))]),a("div",{staticClass:"city"},[t._v(t._s(e.city))]),a("div",{staticClass:"description"},[a("div",{staticClass:"text"},[t._v(t._s(e.text))])])])])}))],2),a("div",{attrs:{id:"education-container"}},[a("h2",[t._v("Education")]),t._l(t.input.degrees,(function(e){return a("div",{staticClass:"experience-container"},[a("div",{staticClass:"bubble",attrs:{id:e.tag}}),a("div",{staticClass:"experience-card"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),a("a",{attrs:{href:e.link,target:"_blank"}},[a("div",{staticClass:"institution"},[t._v(t._s(e.university))])]),a("div",{staticClass:"time-period"},[t._v(t._s(e.timePeriod))]),a("div",{staticClass:"city"},[t._v(t._s(e.city))]),a("div",{staticClass:"description"},[e.specialization?a("div",{staticClass:"specialization"},[a("div",{attrs:{id:"specialization-text"}},[t._v("Specialization")]),a("div",{attrs:{id:"specialization-title"}},[t._v(t._s(e.specialization))])]):t._e(),a("div",{staticClass:"text"},[t._v(t._s(e.text))]),e.thesis?a("div",{staticClass:"thesis"},[a("div",{attrs:{id:"thesis-text"}},[t._v("Thesis")]),a("a",{attrs:{href:e.thesis.link,target:"_blank"}},[a("div",{attrs:{id:"thesis-title"}},[t._v(t._s(e.thesis.title))])]),a("div",{attrs:{id:"thesis-details"}},[t._v(t._s(e.thesis.details))])]):t._e()])])])}))],2)])},I=[],T={name:"experience-tab",props:{input:Object}},j=T,O=(a("15c4"),Object(u["a"])(j,E,I,!1,null,null,null)),M=O.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"business-card-tab"}},[t._m(0),a("div",{attrs:{id:"business-card__scene"}},[a("div",{attrs:{id:"business-card"},on:{click:t.flipFlashcard}},[a("div",{staticClass:"business-card__face--front"},[a("div",{attrs:{id:"name"}},[t._v(t._s(t.fullName))]),t._m(1),a("div",{attrs:{id:"position"}},[t._v(t._s(t.position))]),a("div",{attrs:{id:"brand-container"}},[t._l(t.chosenBrands,(function(e){return[void 0!=e.code?a("i",{class:t.brandStyling(e.code)}):t._e(),void 0!=e.svg?a("i",{staticClass:"brand-logo fab brand-svg",attrs:{id:e.name},domProps:{innerHTML:t._s(e.svg)}}):t._e()]}))],2)]),a("div",{staticClass:"business-card__face--back"},[a("div",{attrs:{id:"contact-container"}},t._l(t.input.contact,(function(e){return a("div",{staticClass:"contact-info"},[a("i",{class:t.contactIconStyling(e.code)}),a("div",{staticClass:"contact-text"},[t._v(t._s(e.value))])])})),0),t._m(2),t._m(3)])])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"business-card__header"}},[a("h1",[t._v("Digital Business Card")]),a("p",[t._v("Click on card to flip over. Then use either the QR Code or the button to download my contact information.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"laptop-logo"}},[i("img",{attrs:{src:a("7d3a")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"qr-code"}},[i("img",{attrs:{src:a("3ac7"),alt:"QR CODE",height:"110",width:"110"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"save-contact__button"}},[a("a",{attrs:{id:"save-contact__link",href:"/files/user.vcf",download:"user.vcf"}},[t._v("SAVE TO CONTACT")])])}];a("fb6a");function R(t){var e,a,i=t.length;while(i>0)a=Math.floor(Math.random()*i),i--,e=t[i],t[i]=t[a],t[a]=e;return t}var Q={name:"business-card-tab",props:{input:Object},data:function(){return{fullName:"GABOR KEVIN BARTA",position:"Fullstack Developer",codeSymbol:"</>",card:null,flipping:null,chosenBrands:null,numberOfBrandsToDisplay:5}},mounted:function(){this.card=document.getElementById("business-card"),this.chooseBrands()},methods:{flipFlashcard:function(){0!=this.card.classList.length?clearInterval(this.flipping):this.flipping=setInterval(this.chooseBrands,400),this.card.classList.toggle("is-flipped")},brandStyling:function(t){return"brand-logo "+t},contactIconStyling:function(t){return"contact-icon "+t},chooseBrands:function(){this.chosenBrands=R(this.input.brands).slice(0,this.numberOfBrandsToDisplay)}}},L=Q,q=(a("c197"),Object(u["a"])(L,P,A,!1,null,null,null)),$=q.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"qlearning"}},[t._m(0),t._m(1),a("div",{attrs:{id:"control_panel"}},[t._m(2),a("div",{attrs:{id:"control_panel-title"}},[t._v("Control Panel")]),t._m(3),a("div",{staticClass:"greek-letters",attrs:{id:"epsilon_letter"}},[t._v("ε")]),a("div",{staticClass:"greek-letters",attrs:{id:"alpha_letter"}},[t._v("α")]),a("div",{staticClass:"greek-letters",attrs:{id:"gamma_letter"}},[t._v("γ")]),a("div",{attrs:{id:"qvalue_text"}},[t._v("Show Q Values")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.epsilon,expression:"epsilon"}],staticClass:"slider",attrs:{id:"epsilon_slider",type:"range",min:"0",max:"1",value:"0.5",step:"0.1"},domProps:{value:t.epsilon},on:{__r:function(e){t.epsilon=e.target.value}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.alpha,expression:"alpha"}],staticClass:"slider",attrs:{id:"alpha_slider",type:"range",min:"0",max:"1",value:"0.5",step:"0.1"},domProps:{value:t.alpha},on:{__r:function(e){t.alpha=e.target.value}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gamma,expression:"gamma"}],staticClass:"slider",attrs:{id:"gamma_slider",type:"range",min:"0",max:"1",value:"0.7",step:"0.1"},domProps:{value:t.gamma},on:{__r:function(e){t.gamma=e.target.value}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.showQValues,expression:"showQValues"}],attrs:{id:"qvalue_checkbox",type:"checkbox"},domProps:{checked:Array.isArray(t.showQValues)?t._i(t.showQValues,null)>-1:t.showQValues},on:{change:function(e){var a=t.showQValues,i=e.target,s=!!i.checked;if(Array.isArray(a)){var n=null,r=t._i(a,n);i.checked?r<0&&(t.showQValues=a.concat([n])):r>-1&&(t.showQValues=a.slice(0,r).concat(a.slice(r+1)))}else t.showQValues=s}}}),a("div",{staticClass:"value_screen",attrs:{id:"epsilon_value"}},[t._v(t._s(t.formatValue(t.epsilon)))]),a("div",{staticClass:"value_screen",attrs:{id:"alpha_value"}},[t._v(t._s(t.formatValue(t.alpha)))]),a("div",{staticClass:"value_screen",attrs:{id:"gamma_value"}},[t._v(t._s(t.formatValue(t.gamma)))]),a("button",{staticClass:"btn control-panel__button",attrs:{id:"load_button",type:"button",disabled:""}},[t._v("Load")]),a("button",{staticClass:"btn control-panel__button",attrs:{id:"reset_button",type:"button"},on:{click:t.reset}},[t._v("Reset")]),a("button",{staticClass:"btn control-panel__button",attrs:{id:"learn_button",type:"button",disabled:""}},[t._v("Learn")]),a("button",{staticClass:"btn control-panel__button",attrs:{id:"explore_button",type:"button"},on:{click:t.explore}},[t._v("Explore")])]),a("div",{style:t.gridStyling(t.row,t.column),attrs:{id:"qlearning-map"}},[t._l(t.stringToNum(t.row),(function(e,i){return t._l(t.stringToNum(t.column),(function(e,s){return a("div",{staticClass:"tile--background"},[a("div",{class:t.styleTile(i,s),attrs:{id:t.matrixId(i,s)}},[t.showQValues?a("div",{staticClass:"UP"},[a("div",[t._v(t._s(t.formatQValue(t.agent.qMatrix.matrix[t.matrixId(i,s)][t.UP])))])]):t._e(),t.showQValues?a("div",{staticClass:"LEFT"},[a("div",[t._v(t._s(t.formatQValue(t.agent.qMatrix.matrix[t.matrixId(i,s)][t.LEFT])))])]):t._e(),t.showQValues?a("div",{staticClass:"RIGHT"},[a("div",[t._v(t._s(t.formatQValue(t.agent.qMatrix.matrix[t.matrixId(i,s)][t.RIGHT])))])]):t._e(),t.showQValues?a("div",{staticClass:"DOWN"},[a("div",[t._v(t._s(t.formatQValue(t.agent.qMatrix.matrix[t.matrixId(i,s)][t.DOWN])))])]):t._e()])])}))}))],2)])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"qlearning-header"}},[a("h1",[t._v("Q-Learning Algorithm")]),a("h2",[t._v("The Cliff Walking Problem")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"qlearning-instructions"}},[a("p",[t._v("The Q-Learning algorithm is a reinforcement learning algorithm. It is a reinforcement learning method since it involves an agent, a set of states, and a set of actions for each state. The agent accumulates rewards when a specific action is taken at a specific state. The cliff walking problem is a classic problem solved by the Q-learning algorithm. The scenario is the following, the robot wants to find the shortest path to the trophy. However if the it steps on the black tiles it will fall down the cliff. The robot learns to find the shortest path to the trophy through trial and error. After each step taken the Q-values are updated for the that action at the specific state.")]),a("div",{attrs:{id:"qlearning-legend"}},[a("div",{staticClass:"greek-letters"},[t._v("ε")]),a("div",{staticClass:"explanation"},[t._v("Greedy factor is defined by how greedy we are with the neighboring Q values.")]),a("div",{staticClass:"greek-letters"},[t._v("α")]),a("div",{staticClass:"explanation"},[t._v("Learning rate is defined by how much we accept the new Q value over the old Q value.")]),a("div",{staticClass:"greek-letters"},[t._v("γ")]),a("div",{staticClass:"explanation"},[t._v("Discount factor is used to balance the immediate and future reward.")]),a("div",{staticClass:"button-replica"},[t._v("Load")]),a("div",{staticClass:"explanation"},[t._v("Disabled")]),a("div",{staticClass:"button-replica"},[t._v("Reset")]),a("div",{staticClass:"explanation"},[t._v("Reset Q values and place robot at starting position.")]),a("div",{staticClass:"button-replica"},[t._v("Learn")]),a("div",{staticClass:"explanation"},[t._v("Disabled")]),a("div",{staticClass:"button-replica"},[t._v("Explore")]),a("div",{staticClass:"explanation"},[t._v("Start exploring the map and look for the trophy. Press again if the robot falls down the cliff or finds the trophy to start exploring again.")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"screw",attrs:{id:"left_screw"}},[a("div",[t._v("x")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"screw",attrs:{id:"right_screw"}},[a("div",[t._v("x")])])}],V=(a("caad"),a("d81d"),a("d3b7"),a("4d63"),a("25f0"),a("2532"),a("4de4"),a("c975"),a("4fad"),a("b64b"),a("07ac"),a("466d"),a("2909")),G=a("3835"),D=a("d4ec"),H=a("bee2"),F=function(){function t(e,a,i,s){Object(D["a"])(this,t),this.rows=e,this.columns=a,this.cliffs=i,this.reward=s,this.matrix={},this.generateRewards()}return Object(H["a"])(t,[{key:"generateRewards",value:function(){for(var t=0;t<this.rows;t++)for(var e=0;e<this.columns;e++){var a=t.toString()+"x"+e.toString();this.matrix[a]=-1}var i,s=Object(r["a"])(this.cliffs);try{for(s.s();!(i=s.n()).done;){var n=i.value;this.matrix[n]=-100}}catch(o){s.e(o)}finally{s.f()}this.matrix[this.reward]=100}}]),t}(),W=function(){function t(e,a){Object(D["a"])(this,t),this.matrix={},this.rows=e,this.columns=a,this.generateMatrix()}return Object(H["a"])(t,[{key:"generateMatrix",value:function(){for(var t=0;t<this.rows;t++)for(var e=0;e<this.columns;e++){var a=t.toString()+"x"+e.toString();this.matrix[a]=[0,0,0,0]}}}]),t}(),U=function(){function t(e,a){Object(D["a"])(this,t),this.map=e,this.qMatrix=new W(e.rows,e.columns),this.initialPosition=a,this.state=this.initialPosition,this.nextState=null,this.action=null}return Object(H["a"])(t,[{key:"getCoordinates",value:function(t){var e=/\d+/g,a=t.match(e);return[parseInt(a[0]),parseInt(a[1])]}},{key:"getStateId",value:function(t,e){return t.toString()+"x"+e.toString()}},{key:"getAllowedDirections",value:function(t){var e,a,i=[],s=this.getCoordinates(t),n=Object(G["a"])(s,2);return e=n[0],a=n[1],e>0&&i.push("UP"),a<this.map.columns-1&&i.push("RIGHT"),e<this.map.rows-1&&i.push("DOWN"),a>0&&i.push("LEFT"),i}},{key:"getNeighborhood",value:function(t){var e,a,i=[],s=this.getCoordinates(t),n=Object(G["a"])(s,2);return e=n[0],a=n[1],e>0&&i.push(this.getStateId(e-1,a)),a<this.map.columns-1&&i.push(this.getStateId(e,a+1)),e<this.map.rows-1&&i.push(this.getStateId(e+1,a)),a>0&&i.push(this.getStateId(e,a-1)),i}},{key:"directionMapping",value:function(t){return"UP"==t?0:"RIGHT"==t?1:"DOWN"==t?2:"LEFT"==t?3:void 0}},{key:"getNextState",value:function(t){var e,a,i=this.getCoordinates(this.state),s=Object(G["a"])(i,2);return e=s[0],a=s[1],"UP"==t?this.getStateId(e-1,a):"RIGHT"==t?this.getStateId(e,a+1):"DOWN"==t?this.getStateId(e+1,a):"LEFT"==t?this.getStateId(e,a-1):void 0}},{key:"epsilonGreedy",value:function(t){var e=this.getAllowedDirections(this.state);if(Math.random()<t){var a=e[Math.floor(Math.random()*e.length)];return a}var i=this.getNeighborhood(this.state),s={};for(var n in i){var r=i[n],o=e[n];s[r]=this.qMatrix.matrix[this.state][this.directionMapping(o)]}var c=Math.max.apply(Math,Object.values(s)),l=Object.entries(s).filter((function(t){var e=Object(G["a"])(t,2),a=(e[0],e[1]);return a==c})),d=l[Math.floor(Math.random()*l.length)][0],u=Object.keys(s).indexOf(d);return e[u]}},{key:"move",value:function(t){var e=this.epsilonGreedy(t);this.action=this.directionMapping(e),this.nextState=this.getNextState(e)}},{key:"findQMax",value:function(t){return Math.max.apply(Math,Object(V["a"])(this.qMatrix.matrix[t]))}},{key:"updateQ",value:function(t,e){this.qMatrix.matrix[this.state][this.action]=this.qMatrix.matrix[this.state][this.action]+t*(this.map.matrix[this.nextState]+e*this.findQMax(this.nextState)-this.qMatrix.matrix[this.state][this.action])}}]),t}(),z={name:"q-learning-tab",data:function(){return{cliffs:["2x1","2x2","2x3","2x4"],reward:"2x5",start:"2x0",row:"3",column:"6",showQValues:!0,epsilon:.5,alpha:.5,gamma:.7,agent:null,movement:null,exploring:!1,speed:150,UP:0,RIGHT:1,DOWN:2,LEFT:3,QVALUEDIGIT:5}},created:function(){var t=new RegExp("Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile","i");t.test(navigator.userAgent)&&(this.cliffs=["2x1"],this.reward="2x2",this.start="2x0",this.row="3",this.column="3"),this.agent=new U(new F(this.row,this.column,this.cliffs,this.reward),this.start)},methods:{gridStyling:function(t,e){var a=new RegExp("Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile","i");return a.test(navigator.userAgent)?{gridTemplateRows:"repeat(3, 100px)",gridTemplateColumns:"repeat(3, 100px)"}:{gridTemplateRows:"repeat("+t+", 100px)",gridTemplateColumns:"repeat("+e+", 100px)"}},stringToNum:function(t){return parseInt(t,10)},formatQValue:function(t){return 0!=t?t.toString().substring(0,this.QVALUEDIGIT):""},formatValue:function(t){return 0==t||1==t?t.toString()+".0":t.toString()},matrixId:function(t,e){return t.toString()+"x"+e.toString()},styleTile:function(t,e){var a=this.matrixId(t,e),i=this.agent.map.matrix[a];return-100==i&&a==this.agent.state?"tile--robot--falling":100==i&&a==this.agent.state?"tile--robot--winning":a==this.agent.state?"tile--agent":100==i?"tile--reward":-100==i?"tile--cliff":"tile"},move:function(){this.agent.move(this.epsilon),this.agent.updateQ(this.alpha,this.gamma),this.agent.state=this.agent.nextState,this.cliffs.includes(this.agent.state)&&(clearInterval(this.movement),this.exploring=!1),this.agent.state==this.reward&&(clearInterval(this.movement),this.exploring=!1)},explore:function(){0==this.exploring&&(this.agent.state=this.agent.initialPosition,this.movement=setInterval(this.move,this.speed),this.exploring=!0)},reset:function(){clearInterval(this.movement),this.exploring=!1,this.agent=new U(new F(this.row,this.column,this.cliffs,this.reward),this.start)}}},K=z,X=(a("a760"),Object(u["a"])(K,B,N,!1,null,null,null)),J=X.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chinese-flashcards-tab"}},[a("div",{attrs:{id:"chinese_header"}},[a("h1",[t._v("Chinese Flashcards")]),a("p",[t._v("Click on a card to reveal the english and pinyin meaning of the Chinese symbol. Use this application tomemorize the Chinese symbols, their pronunciation, and their meaning.")]),a("button",{attrs:{type:"button"},on:{click:function(e){return t.pickCards(t.input.characters.length)}}},[t._v("All")]),a("button",{attrs:{type:"button"},on:{click:function(e){return t.pickCards(1)}}},[t._v("Random")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.mute,expression:"mute"}],attrs:{id:"mute_checkbox",type:"checkbox",name:"mute"},domProps:{checked:Array.isArray(t.mute)?t._i(t.mute,null)>-1:t.mute},on:{change:function(e){var a=t.mute,i=e.target,s=!!i.checked;if(Array.isArray(a)){var n=null,r=t._i(a,n);i.checked?r<0&&(t.mute=a.concat([n])):r>-1&&(t.mute=a.slice(0,r).concat(a.slice(r+1)))}else t.mute=s}}}),a("label",{attrs:{id:"mute-checbox__label",for:"mute_checkbox"}}),a("div",{attrs:{id:"reminder"}},[t._v("(Remember to unmute device as well)")])]),a("div",{attrs:{id:t.flashcardStyling()}},t._l(t.chosenCharacters,(function(e,i){return a("chinese-flashcard",{key:e.character,attrs:{english:e.english,character:t.createCharacterArray(e.character),pinyin:e.pinyin,audio:t.setAudio()}})})),1)])},Z=[],tt=(a("1276"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flashcard__scene"},[a("div",{staticClass:"flashcard",attrs:{id:t.flipCardId},on:{click:t.flipFlashcard,mouseover:t.writeStroke}},[a("div",{staticClass:"flashcard__face flashcard__face--front",attrs:{id:t.frontCardId}},[null==t.frontCardId?a("div",{staticClass:"chinese-character",attrs:{id:t.leftCardId}}):t._e(),null==t.frontCardId?a("div",{staticClass:"chinese-character",attrs:{id:t.rightCardId}}):t._e()]),a("div",{staticClass:"flashcard__face flashcard__face--back"},[a("div",{attrs:{id:"pinyin"}},[t._v(t._s(t.pinyin))]),a("div",{attrs:{id:"divider"}}),a("div",{attrs:{id:"english"}},[t._v(t._s(t.english))])])])])}),et=[],at=a("1e5c"),it=a("7508"),st={name:"chinese-flashcard",props:{english:String,character:Array,pinyin:String,audio:Boolean},data:function(){return{writer:null,writer2:null,card:null,flipCardId:null,frontCardId:null,leftCardId:null,rightCardId:null,sound:null}},created:function(){this.flipCardId=this.generateRandomId();var t="";1==this.character.length&&(this.frontCardId=this.generateRandomId(),t=this.character[0]),2==this.character.length&&(this.leftCardId=this.generateRandomId(),this.rightCardId=this.generateRandomId(),t=this.character[0]+this.character[1]);var e="files/audio/"+t+".mp3";this.sound=new at["Howl"]({src:[e]})},mounted:function(){this.card=document.getElementById(this.flipCardId),1==this.character.length&&(this.writer=it.create(this.frontCardId,this.character[0],this.hanziWriterSettings(200,10))),2==this.character.length&&(this.writer=it.create(this.leftCardId,this.character[0],this.hanziWriterSettings(100,0)),this.writer2=it.create(this.rightCardId,this.character[1],this.hanziWriterSettings(100,0)))},methods:{generateRandomId:function(){return Math.random().toString(36).substring(2,7)+Math.random().toString(36).substring(2,7)},flipFlashcard:function(){this.card.classList.toggle("is-flipped"),this.audio&&this.sound.play()},writeStroke:function(){this.writer.animateCharacter()},hanziWriterSettings:function(t,e){return{width:t,height:t,padding:e,showOutline:!0,strokeColor:"#B52020",strokeAnimationSpeed:5,delayBetweenStrokes:500}}}},nt=st,rt=(a("9b64"),Object(u["a"])(nt,tt,et,!1,null,null,null)),ot=rt.exports,ct={name:"chinese-flashcards-tab",props:{input:Object},components:{"chinese-flashcard":ot},data:function(){return{mute:!1,chosenCharacters:null}},created:function(){this.chosenCharacters=this.input.characters},methods:{pickCards:function(t){this.chosenCharacters=R(this.input.characters).slice(0,t)},flashcardStyling:function(){return 1==this.chosenCharacters.length?"flashcards_x1":"flashcards_x4"},setAudio:function(){return!this.mute},createCharacterArray:function(t){return t.split("")}}},lt=ct,dt=(a("20ab"),Object(u["a"])(lt,Y,Z,!1,null,null,null)),ut=dt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"github-projects"}},[t._m(0),a("div",{attrs:{id:"repos-container"}},t._l(t.repos,(function(e){return a("div",{key:e.id,staticClass:"repo-container"},[a("div",{staticClass:"repo-name"},[a("h4",[t._v(t._s(e.name))])]),a("div",{staticClass:"repo-desc"},[a("p",[t._v(t._s(e.description))])]),a("div",{staticClass:"links-container"},[a("div",{staticClass:"repository-link-container"},[a("a",{attrs:{href:e.html_url,target:"_blank"}},[t._m(1,!0)])]),e.homepage?a("div",{staticClass:"website-link-container"},[a("a",{attrs:{href:e.homepage,target:"_blank"}},[a("div",{staticClass:"repo-link"},[e.homepage?a("i",{staticClass:"icons fas fa-globe"}):t._e(),a("div",[t._v("Website")])])])]):t._e()])])})),0)])},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"github-projects-header"}},[a("h1",[t._v("Github Projects")]),a("p",[t._v("Here are some of my Github Projects which also have a separate Github Pages website.")]),a("p",[t._v("Note some of them might be incomplete or just really simple projects.")]),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"repo-link"},[a("i",{staticClass:"icons fas fa-database"}),a("div",[t._v("Repository")])])}],mt={name:"github-projects-tab",props:{input:Array},data:function(){return{repos:[]}},created:function(){this.repos=this.input.filter((function(t){return!1===t.fork}))}},pt=mt,ft=(a("c62e"),Object(u["a"])(pt,ht,vt,!1,null,null,null)),gt=ft.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"custom-scripts-tab"}},[t._m(0),a("div",{style:{visibility:t.visibilityToggle},attrs:{id:"terminal-emulator"}},[a("div",{attrs:{id:"terminal-tool-bar"}},[a("div",{staticClass:"circle",attrs:{id:"red"},on:{click:t.easterEgg}}),a("div",{staticClass:"circle",attrs:{id:"yellow"}}),a("div",{staticClass:"circle",attrs:{id:"green"}}),a("button",{staticClass:"terminal-button",attrs:{id:"collapse-button",type:"button"},on:{click:t.collapseAll}},[a("i",{staticClass:"far fa-minus-square"})])]),a("div",{key:t.reRenderKey,attrs:{id:"terminal-window"}},t._l(t.commands,(function(e){return a("div",{key:e.id,staticClass:"terminal-command"},[a("div",{staticClass:"command-header"},[a("div",{staticClass:"dollar"},[t._v("$")]),a("div",{staticClass:"command"},[t._v(t._s(e.name))]),a("label",{staticClass:"show-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.show[e.id],expression:"show[command.id]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.show[e.id])?t._i(t.show[e.id],null)>-1:t.show[e.id]},on:{change:function(a){var i=t.show[e.id],s=a.target,n=!!s.checked;if(Array.isArray(i)){var r=null,o=t._i(i,r);s.checked?o<0&&t.$set(t.show,e.id,i.concat([r])):o>-1&&t.$set(t.show,e.id,i.slice(0,o).concat(i.slice(o+1)))}else t.$set(t.show,e.id,n)}}}),a("i",{staticClass:"far fa-caret-square-down unchecked"}),a("i",{staticClass:"far fa-caret-square-up checked"})])]),t.show[e.id]?a("div",{staticClass:"command-body"},[a("div",{staticClass:"description-container"},[a("code",{staticClass:"hljs-comment"},[t._v('"""')]),a("br"),a("code",{staticClass:"hljs-comment"},[t._v(t._s(e.description))]),a("br"),a("br"),a("code",{staticClass:"hljs-comment"},[t._v("Arguments:")]),a("br"),t._l(e.arguments,(function(e){return[a("code",{staticClass:"hljs-comment tab"},[t._v(t._s(e.split(" ").join("_")))]),a("br")]})),a("br"),a("code",{staticClass:"hljs-comment"},[t._v("Example:")]),a("br"),a("code",{staticClass:"hljs-comment tab"},[t._v(t._s(e.example))]),a("br"),a("code",{staticClass:"hljs-comment"},[t._v('"""')])],2),a("pre",[a("code",{class:t.classStyling(e.name)},[t._v(t._s(e.algorithm)+"                       ")])])]):t._e()])})),0)])])},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"custom-scripts-header"}},[a("h1",[t._v("Custom Scripts")])])}],Ct=(a("a4d3"),a("e01a"),a("4160"),a("b0c0"),a("159b"),a("bc3a")),wt=a.n(Ct),xt=a("a70e"),yt=a.n(xt),kt=a("f0f8"),St=a.n(kt),Et=a("9510"),It=a.n(Et),Tt=(a("705c"),1),jt=2,Ot=3,Mt=5,Pt=wt.a.create(),At={name:"custom-scripts-tab",props:{input:Array},data:function(){return{visibilityToggle:"visible",readMe:null,commands:{},show:[],reRenderKey:0}},created:function(){yt.a.registerLanguage("bash",St.a),yt.a.registerLanguage("python",It.a);for(var t=0,e=0;e<this.input.length;e++){var a=this.input[e];"README.md"==a.name?this.apiCallReadMe(a.download_url):".gitignore"==a.name||(this.commands[a.name]={},this.commands[a.name]["id"]=t,this.commands[a.name]["name"]=a.name,this.show.push(!1),this.apiCall(a.name,a.download_url),t+=1)}},watch:{show:function(){var t=0;setTimeout((function(){document.querySelectorAll("pre code").forEach((function(t){yt.a.highlightBlock(t)}))}),t)}},methods:{apiCall:function(t,e){var a=this;Pt.get(e).then((function(e){var i=e.data,s=/#!\/usr\/bin\/env python.*/g,n=/#!\/bin\/zsh.*/g;a.commands[t]["algorithm"]=i,s.test(i)&&(a.commands[t]["language"]="python"),n.test(i)&&(a.commands[t]["language"]="bash")}))},apiCallReadMe:function(t){var e=this;Pt.get(t).then((function(t){e.readMe=t.data,e.filterReadMeInfo()}))},filterReadMeInfo:function(){var t,e=/#{3}\s(.*)\s\s(.*)\s\s#{4}\sArguments\s\s((-\s.+\s)+)\s#{4}\sExample\s\s```bash\s(.*)\s```/g,a=/[^-\s].*[^\s]/g,i=Object(V["a"])(this.readMe.matchAll(e)),s=Object(r["a"])(i);try{for(s.s();!(t=s.n()).done;){var n=t.value,o=n[Tt];this.commands[o]["description"]=n[jt],this.commands[o]["arguments"]=n[Ot].match(a),this.commands[o]["example"]=n[Mt]}}catch(c){s.e(c)}finally{s.f()}},classStyling:function(t){return"python"==this.commands[t]["language"]?"python":"bash"==this.commands[t]["language"]?"bash":"hjls"},collapseAll:function(){for(var t=0;t<this.show.length;t++)this.show[t]=!1;this.reRenderKey+=1},easterEgg:function(){this.visibilityToggle="hidden"}}},Rt=At,Qt=(a("1d45"),Object(u["a"])(Rt,_t,bt,!1,null,null,null)),Lt=Qt.exports,qt={name:"app",components:{"home-tab":v,"nav-comp":b,"footer-comp":S,"experience-tab":M,"business-card-tab":$,"q-learning-tab":J,"chinese-flashcards-tab":ut,"github-projects-tab":gt,"custom-scripts-tab":Lt},data:function(){return{currentTab:"Home",tabs:{Home:[],About:["Experience","Business Card"],Projects:["Github Projects","Custom Scripts","Q-Learning","Chinese Flashcards"]},apis:[{component:"Home",request:{method:"GET",routeEndPoint:"https://gaborkevinbarta.com",path:"database/connect.json"}},{component:"Footer",request:{method:"GET",routeEndPoint:"https://gaborkevinbarta.com",path:"database/source.json"}},{component:"Experience",request:{method:"GET",routeEndPoint:"https://gaborkevinbarta.com",path:"database/cv.json"}},{component:"Chinese Flashcards",request:{method:"GET",routeEndPoint:"https://gaborkevinbarta.com",path:"database/china.json"}},{component:"Business Card",request:{method:"GET",routeEndPoint:"https://gaborkevinbarta.com",path:"database/card.json"}},{component:"Github Projects",request:{method:"GET",routeEndPoint:"https://api.github.com/",path:"users/gkevinb/repos?sort=pushed"}},{component:"Custom Scripts",request:{method:"GET",routeEndPoint:"https://api.github.com/",path:"repos/gkevinb/custom-scripts/contents/"}}],inputData:{Home:null,Footer:null}}},created:function(){var t,e=Object(r["a"])(this.apis);try{for(e.s();!(t=e.n()).done;){var a=t.value;this.apiCall(a.component,a.request)}}catch(i){e.e(i)}finally{e.f()}},computed:{getCurrentTab:function(){return this.currentTab.replace(" ","-").toLowerCase()+"-tab"}},methods:{apiCall:function(t,e){var a=this,i=wt.a.create({baseURL:e.routeEndPoint});i.get(e.path).then((function(e){a.inputData[t]=e.data}))},getLinks:function(){return this.inputData["Home"]},getSources:function(){return this.inputData["Footer"]}}},$t=qt,Bt=(a("cd69"),Object(u["a"])($t,s,n,!1,null,null,null)),Nt=Bt.exports,Vt=a("a584");a("4989"),a("ab8b");i["a"].config.productionTip=!1,i["a"].use(Vt["a"],{config:{id:"UA-141910422-1"}}),new i["a"]({render:function(t){return t(Nt)}}).$mount("#app")},"7d3a":function(t,e,a){t.exports=a.p+"img/laptop_logo.90369883.svg"},"887c":function(t,e,a){},"92dd":function(t,e,a){},"9b64":function(t,e,a){"use strict";var i=a("4279"),s=a.n(i);s.a},a760:function(t,e,a){"use strict";var i=a("1cdf"),s=a.n(i);s.a},b1fe:function(t,e,a){},bda0:function(t,e,a){"use strict";var i=a("359f"),s=a.n(i);s.a},c197:function(t,e,a){"use strict";var i=a("887c"),s=a.n(i);s.a},c62e:function(t,e,a){"use strict";var i=a("1122"),s=a.n(i);s.a},cd69:function(t,e,a){"use strict";var i=a("2942"),s=a.n(i);s.a},d298:function(t,e,a){}});
//# sourceMappingURL=app.2915a9db.js.map
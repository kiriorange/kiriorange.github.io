(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,i){e.exports=i(39)},22:function(e,t,i){},24:function(e,t,i){},27:function(e,t,i){},30:function(e,t,i){},33:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),n=i(13),r=i.n(n),o=(i(22),i(2)),c=i(3),l=i(7),u=i(5),d=i(6),h=i(42),m=i(41),p=(i(24),i(27),i(14)),f=i.n(p),v=window.anime;function g(e,t,i){var a;return function(){var s=this,n=arguments,r=i&&!a;clearTimeout(a),a=setTimeout(function(){a=null,i||e.apply(s,n)},t),r&&e.apply(s,n)}}function b(e,t,i){return"undefined"==typeof i&&(i=2),parseFloat(Math.min(e+Math.random()*(t-e),t).toFixed(i))}var O={width:window.innerWidth,height:window.innerHeight},E=function(){function e(t,i,a){Object(o.a)(this,e),this.DOM={},this.options={shapeTypes:["circle","rect","polygon"],shapeColors:["#e07272","#0805b5","#49c6ff","#8bc34a","#1e1e21","#e24e81","#e0cd24"],shapeFill:!0,shapeStrokeWidth:1},Object.assign(this.options,a),this.type=t||this.options.shapeTypes[0],("random"===this.type||this.options.types.includes(this.type))&&("random"===this.type&&(this.type=this.options.shapeTypes[b(0,this.options.shapeTypes.length-1,0)]),this.letterRect=i,this.init())}return Object(c.a)(e,[{key:"init",value:function(){this.DOM.el=document.createElementNS("http://www.w3.org/2000/svg",this.type),this.DOM.el.style.opacity=0,this.configureShapeType(),this.options.shapeFill?this.DOM.el.setAttribute("fill",this.options.shapeColors[b(0,this.options.shapeColors.length-1,0)]):(this.DOM.el.setAttribute("fill","none"),this.DOM.el.setAttribute("stroke-width",this.options.shapeStrokeWidth),this.DOM.el.setAttribute("stroke",this.options.shapeColors[b(0,this.options.shapeColors.length-1,0)]))}},{key:"configureShapeType",value:function(){if(this.DOM.el.style.transformOrigin="".concat(this.letterRect.left+this.letterRect.width/2,"px ").concat(this.letterRect.top+window.pageYOffset+this.letterRect.height/2,"px"),"circle"===this.type){var e=.5*this.letterRect.width;this.DOM.el.setAttribute("r",e),this.DOM.el.setAttribute("cx",this.letterRect.left+this.letterRect.width/2),this.DOM.el.setAttribute("cy",this.letterRect.top+window.pageYOffset+this.letterRect.height/2)}else if("rect"===this.type){var t=b(.05,.5,3)*this.letterRect.width,i=b(.05,.5,3)*this.letterRect.height;this.DOM.el.setAttribute("width",t),this.DOM.el.setAttribute("height",i),this.DOM.el.setAttribute("x",this.letterRect.left+(this.letterRect.width-t)/2),this.DOM.el.setAttribute("y",this.letterRect.top+window.pageYOffset+(this.letterRect.height-i)/2)}else"polygon"===this.type&&this.DOM.el.setAttribute("points","".concat(this.letterRect.left," ").concat(this.letterRect.top+this.letterRect.height,", ").concat(this.letterRect.left+this.letterRect.width/2," ").concat(this.letterRect.bottom-this.letterRect.width,", ").concat(this.letterRect.left+this.letterRect.width," ").concat(this.letterRect.top+this.letterRect.height))}},{key:"onResize",value:function(e){this.letterRect=e,this.configureShapeType()}}]),e}(),y=function(){function e(t,i,a){Object(o.a)(this,e),this.DOM={},this.DOM.el=t,this.DOM.svg=i,this.options={totalShapes:10},Object.assign(this.options,a),this.rect=this.DOM.el.getBoundingClientRect(),this.totalShapes=this.options.totalShapes,this.init(),this.initEvents()}return Object(c.a)(e,[{key:"init",value:function(){this.shapes=[];for(var e=0;e<=this.totalShapes-1;++e){var t=new E("random",this.rect,this.options);this.shapes.push(t),this.DOM.svg.appendChild(t.DOM.el)}}},{key:"initEvents",value:function(){var e=this;window.addEventListener("resize",g(function(){e.rect=e.DOM.el.getBoundingClientRect();for(var t=0;t<=e.totalShapes-1;++t){e.shapes[t].onResize(e.rect)}},20))}}]),e}(),w=function(){function e(t,i){Object(o.a)(this,e),this.DOM={},this.DOM.el=t,this.options={shapesOnTop:!1},Object.assign(this.options,i),this.init(),this.initEvents()}return Object(c.a)(e,[{key:"init",value:function(){var e=this;this.createSVG(),f()(this.DOM.el),this.letters=[],Array.from(this.DOM.el.querySelectorAll("span")).forEach(function(t){return e.letters.push(new y(t,e.DOM.svg,e.options))})}},{key:"initEvents",value:function(){var e=this;window.addEventListener("resize",g(function(){O={width:window.innerWidth,height:window.innerHeight},e.DOM.svg.setAttribute("width","".concat(O.width,"px")),e.DOM.svg.setAttribute("height","".concat(O.width,"px")),e.DOM.svg.setAttribute("viewbox","0 0 ".concat(O.width," ").concat(O.height))},20))}},{key:"createSVG",value:function(){this.DOM.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.DOM.svg.setAttribute("class","shapes"),this.DOM.svg.setAttribute("width","".concat(O.width,"px")),this.DOM.svg.setAttribute("height","".concat(O.width,"px")),this.DOM.svg.setAttribute("viewbox","0 0 ".concat(O.width," ").concat(O.height)),this.options.shapesOnTop?this.DOM.el.parentNode.insertBefore(this.DOM.svg,this.DOM.el.nextSibling):this.DOM.el.parentNode.insertBefore(this.DOM.svg,this.DOM.el)}},{key:"show",value:function(e){return this.toggle("show",e)}},{key:"hide",value:function(e){return this.toggle("hide",e)}},{key:"toggle",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"show",i=arguments.length>1?arguments[1]:void 0;return new Promise(function(a,s){var n=function(){for(var i=0,s=e.letters.length;i<=s-1;++i)e.letters[i].DOM.el.style.opacity="show"===t?1:0;a()};if(i&&0!==Object.keys(i).length){if(i.shapesAnimationOpts)for(var r=0,o=e.letters.length;r<=o-1;++r){var c=e.letters[r];setTimeout(function(e){return function(){i.shapesAnimationOpts.targets=e.shapes.map(function(e){return e.DOM.el}),v.remove(i.shapesAnimationOpts.targets),v(i.shapesAnimationOpts)}}(c),i.lettersAnimationOpts&&i.lettersAnimationOpts.delay?i.lettersAnimationOpts.delay(c.DOM.el,r):0)}i.lettersAnimationOpts?(i.lettersAnimationOpts.targets=e.letters.map(function(e){return e.DOM.el}),i.lettersAnimationOpts.complete=function(){if("hide"===t)for(var e=0,s=i.lettersAnimationOpts.targets.length;e<=s-1;++e)i.lettersAnimationOpts.targets[e].style.transform="none";a()},v(i.lettersAnimationOpts)):n()}else n()})}}]),e}(),k=window.anime,M=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{class:"header"},s.a.createElement("div",{class:"text"},s.a.createElement("h2",{class:"word word--6"},"Maik Rantetasik"),s.a.createElement("span",{class:"title"},"Full Stack Developer")))}},{key:"componentDidMount",value:function(){var e=document.querySelector(".word"),t=document.querySelector(".title"),i=new w(e,{shapeColors:["#fff","#6b7a8f","#f7882f","#f7c331","#dcc7aa"],totalShapes:7});new w(t,{}).show({lettersAnimationOpts:{duration:500,delay:function(e,t){return 1200},easing:"easeOutExpo",opacity:[0,1],translateX:["-600%","0%"]}}),i.show({lettersAnimationOpts:{duration:500,delay:function(e,t){return 60*t},easing:"easeOutExpo",opacity:{value:[0,1],duration:50,delay:function(e,t){return 60*t},easing:"linear"},translateY:function(e,t){return t%2?[k.random(-350,-300),0]:[k.random(300,350),0]}},shapesAnimationOpts:{duration:function(){return k.random(1e3,4e3)},delay:function(e,t){return 20*t},easing:[.2,1,.3,1],translateX:function(e){var t=k.random(-200,200);return e.dataset.tx=t,[0,t]},translateY:function(e){var t=k.random(-350,400);return e.dataset.ty=t,[0,t]},scale:function(e){var t,i,a,s=(t=.2,i=.6,"undefined"==typeof a&&(a=2),parseFloat(Math.min(t+Math.random()*(i-t),i).toFixed(a)));return e.dataset.s=s,[s,s]},rotate:function(){return k.random(-90,90)},opacity:{value:.6,duration:1e3,easing:"linear"}}})}}]),t}(a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"me",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"Lorem ipsum dolor sit amet, omnis abhorreant persequeris sea ne, ut quo falli verear incorrupte. Clita accusamus usu an. Ex soluta argumentum mediocritatem pri, mel sonet iuvaret partiendo te. Eu his vidit ceteros. Vel dicam aliquid te. Mei velit vocent repudiare no, ex nec quis animal oporteat."),s.a.createElement("p",null,"Has summo nonumes efficiendi no, ponderum salutatus corrumpit at mel. Sed et sint probo eleifend, harum vidisse detracto pro ut. Cu sit impetus bonorum vituperata, phaedrum suavitate eos ne, ea illud inciderint sed. His no atomorum sapientem patrioque, cu mea mucius mediocrem."),"In maluisset scriptorem est. Vel aliquip viderer intellegebat et. Duo no eros atqui putant. Vel utinam sententiae at. Sit at molestiae mediocritatem, nostro ceteros accommodare mea te. Vitae adolescens eloquentiam vix te, wisi impetus vix id. Te facer tamquam sapientem nec. Usu eu aeterno sanctus, eum simul vocibus ei. Minimum reprehendunt an vix, ea eligendi patrioque referrentur mel, altera ridens et nam. Est rebum epicuri no, ne nec regione repudiandae. Solet facilis per et. Pro cu eirmod ancillae sapientem, brute discere quo te, ea cibo laudem graece vix. An ius malis officiis, ut labore impedit periculis nec. Nam deserunt definiebas ex, perfecto percipitur ius te. Indoctum consetetur neglegentur his an. Mea id minimum accusam, at eam salutandi quaerendum.")}},{key:"experience",value:function(){return s.a.createElement("div",null)}},{key:"skills",value:function(){return s.a.createElement("div",null)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",{className:"page-title"},"About"),s.a.createElement("div",{className:"content-text"},this.me(),this.experience(),this.skills()))}}]),t}(a.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"me",value:function(){return s.a.createElement("div",null,"Hi, I'm Maik. I'm a full stack developer, currently working at KST. I also enjoy developing video games, cooking, drawing, and DIY.")}},{key:"experience",value:function(){return s.a.createElement("div",null)}},{key:"skills",value:function(){return s.a.createElement("div",null)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",{className:"page-title"},"About"),s.a.createElement("div",{className:"content-text"},this.me(),this.experience(),this.skills()))}}]),t}(a.Component),x=(i(30),function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isContracted:!0,displayText:null},i}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props;return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"project ".concat(this.state.isContracted?"contracted":"")},s.a.createElement("div",{className:"preview project-container"},s.a.createElement("img",{className:"thumbnail",src:e.thumbnailurl,alt:"thumbnail",width:"100px",height:"100px"}),s.a.createElement("div",{className:"right"},s.a.createElement("h3",{className:"project-title"},e.title),s.a.createElement("div",{className:"technologies"},s.a.createElement("i",{class:"fas fa-code"}),this.tech(e.techs),s.a.createElement("i",{class:"fab fa-github-alt"})),s.a.createElement("div",{className:"desc"},e.shortdesc))),s.a.createElement("div",{className:"project-container"},this.state.displayText),this.readMoreLessButton()))}},{key:"tech",value:function(e){return e.map(function(e){return s.a.createElement("span",null,e," ")})}},{key:"readMoreLessButton",value:function(){return s.a.createElement("div",{className:"readMoreLess",onClick:this.state.isContracted?this.readMore.bind(this):this.readLess.bind(this)},this.state.isContracted?s.a.createElement("i",{class:"fas fa-chevron-down"}):s.a.createElement("i",{class:"fas fa-chevron-up"}),this.state.isContracted?s.a.createElement("span",null,"Read More"):s.a.createElement("span",null,"Read Less"))}},{key:"readMore",value:function(){this.setState({isContracted:!1}),this.setState({displayText:this.props.long})}},{key:"readLess",value:function(){this.setState({isContracted:!0}),this.setState({displayText:null})}}]),t}(a.Component)),S=".NET",q="Java",A=[];A.push({title:"Wiki Translate Bot",thumbnailurl:"https://cdn2.iconfinder.com/data/icons/dog-2/32/husky-512.png",shortdesc:"description asdfasdfasdfa asdf asdf asdf asfd a",techs:[S,q,"JavaScript"],long:s.a.createElement("div",null,s.a.createElement("div",{class:"desc"},"Lorem ipsum dolor sit amet, nam cu erroribus assueverit, usu facilis delicatissimi et. Eos quem case ne. Vis at eripuit propriae, vis dolore necessitatibus in. Pro id corrumpit complectitur, te eam inermis deserunt similique. Nam ne fugit vidisse appareat, te admodum adipiscing mea. Malorum forensibus ne nec, in quo dolorem fuisset intellegebat, ad quo dicit decore eruditi. Id errem detraxit vis, utamur blandit concludaturque cum at."))}),A.push({title:"Wiki Translate Bot",thumbnailurl:"https://cdn2.iconfinder.com/data/icons/dog-2/32/husky-512.png",shortdesc:"Lorem ipsum dolor sit amet, nam cu erroribus assueverit, usu facilis delicatissimi et. Eos quem case ne. Vis at eripuit propriae, vis dolore necessitatibus in. Pro id corrumpit complectitur, te eam inermis deserunt similique. Nam ne fugit vidisse appareat, te admodum adipiscing mea. Malorum forensibus ne nec, in quo dolorem fuisset intellegebat, ad quo dicit decore eruditi. Id errem detraxit vis, utamur blandit concludaturque cum at.",techs:[S,q,"JavaScript"],long:s.a.createElement("div",null,s.a.createElement("div",{class:"desc"},"Lorem ipsum dolor sit amet, nam cu erroribus assueverit, usu facilis delicatissimi et. Eos quem case ne. Vis at eripuit propriae, vis dolore necessitatibus in. Pro id corrumpit complectitur, te eam inermis deserunt similique. Nam ne fugit vidisse appareat, te admodum adipiscing mea. Malorum forensibus ne nec, in quo dolorem fuisset intellegebat, ad quo dicit decore eruditi. Id errem detraxit vis, utamur blandit concludaturque cum at."))}),A.push({title:"Wiki Translate Bot",thumbnailurl:"https://cdn2.iconfinder.com/data/icons/dog-2/32/husky-512.png",shortdesc:"description asdfasdfasdfa asdf asdf asdf asfd a",techs:[S,q,"JavaScript"],long:s.a.createElement("div",null,s.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "),s.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "),s.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "))}),A.push({title:"Wiki Translate Bot",thumbnailurl:"https://cdn2.iconfinder.com/data/icons/dog-2/32/husky-512.png",shortdesc:"description asdfasdfasdfa asdf asdf asdf asfd a",techs:[S,q,"JavaScript"],long:s.a.createElement("div",null,s.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "),s.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "),s.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "))}),A.push({title:"Wiki Translate Bot",thumbnailurl:"https://cdn2.iconfinder.com/data/icons/dog-2/32/husky-512.png",shortdesc:"description asdfasdfasdfa asdf asdf asdf asfd a",techs:[S,q,"JavaScript"],long:s.a.createElement("div",null,s.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "),s.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "),s.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "))}),A.push({title:"Wiki Translate Bot",thumbnailurl:"https://cdn2.iconfinder.com/data/icons/dog-2/32/husky-512.png",shortdesc:"Lorem ipsum dolor sit amet, nam cu erroribus assueverit, usu facilis delicatissimi et. Eos quem case ne. Vis at eripuit propriae, vis dolore necessitatibus in. Pro id corrumpit complectitur, te eam inermis deserunt similique. Nam ne fugit vidisse appareat, te admodum adipiscing mea. Malorum forensibus ne nec, in quo dolorem fuisset intellegebat, ad quo dicit decore eruditi. Id errem detraxit vis, utamur blandit concludaturque cum at.",techs:[S,q,"JavaScript"],long:s.a.createElement("div",null,s.a.createElement("div",{class:"desc"},"Lorem ipsum dolor sit amet, nam cu erroribus assueverit, usu facilis delicatissimi et. Eos quem case ne. Vis at eripuit propriae, vis dolore necessitatibus in. Pro id corrumpit complectitur, te eam inermis deserunt similique. Nam ne fugit vidisse appareat, te admodum adipiscing mea. Malorum forensibus ne nec, in quo dolorem fuisset intellegebat, ad quo dicit decore eruditi. Id errem detraxit vis, utamur blandit concludaturque cum at."))}),A.push({title:"Wiki Translate Bot",thumbnailurl:"https://cdn2.iconfinder.com/data/icons/dog-2/32/husky-512.png",shortdesc:"Lorem ipsum dolor sit amet, nam cu erroribus assueverit, usu facilis delicatissimi et. Eos quem case ne. Vis at eripuit propriae, vis dolore necessitatibus in. Pro id corrumpit complectitur, te eam inermis deserunt similique. Nam ne fugit vidisse appareat, te admodum adipiscing mea. Malorum forensibus ne nec, in quo dolorem fuisset intellegebat, ad quo dicit decore eruditi. Id errem detraxit vis, utamur blandit concludaturque cum at.",techs:[S,q,"JavaScript"],long:s.a.createElement("div",null,s.a.createElement("div",{class:"desc"},"Lorem ipsum dolor sit amet, nam cu erroribus assueverit, usu facilis delicatissimi et. Eos quem case ne. Vis at eripuit propriae, vis dolore necessitatibus in. Pro id corrumpit complectitur, te eam inermis deserunt similique. Nam ne fugit vidisse appareat, te admodum adipiscing mea. Malorum forensibus ne nec, in quo dolorem fuisset intellegebat, ad quo dicit decore eruditi. Id errem detraxit vis, utamur blandit concludaturque cum at."))});var N=A,R=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderProjects",value:function(){return N.map(function(e){return s.a.createElement(x,e)})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",{className:"page-title"},"Projects"),this.renderProjects())}}]),t}(a.Component),C=i(10),T=i(40),L=(i(33),function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={scroll:0,isSticked:!1,isExpanded:!1},i.handleScroll=i.handleScroll.bind(Object(C.a)(Object(C.a)(i))),i.updateDimensions=i.updateDimensions.bind(Object(C.a)(Object(C.a)(i))),i.toggleMenu=i.toggleMenu.bind(Object(C.a)(Object(C.a)(i))),i}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleScroll",value:function(){this.setState({scroll:window.scrollY})}},{key:"updateDimensions",value:function(){var e=document.getElementsByClassName("header")[0];this.setState({header:e.clientHeight})}},{key:"toggleMenu",value:function(){this.setState({isExpanded:!this.state.isExpanded})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){return s.a.createElement("nav",{className:"nav".concat(this.state.scroll>this.state.header?" fixed-nav":""," ").concat(this.state.isExpanded?"dropdown":"none")},s.a.createElement("div",{className:"nav-btn"},s.a.createElement("label",{for:"nav-check"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("input",{type:"checkbox",id:"nav-check",checked:this.state.isExpanded,onChange:this.toggleMenu}),s.a.createElement("div",{className:"nav-piece-center brand"},s.a.createElement(T.a,{onClick:this.toggleMenu,to:"/"},"Maik")),s.a.createElement("div",{className:"nav-piece nav-left"},s.a.createElement(T.a,{onClick:this.toggleMenu,to:"/"},"About"),s.a.createElement(T.a,{onClick:this.toggleMenu,to:"/projects"},"Projects")),s.a.createElement("div",{className:"nav-piece nav-right"},s.a.createElement("a",{href:"https://maikgr.github.io/file/resume.pdf",target:"_blank",rel:"noopener noreferrer"},"Resume"),s.a.createElement(T.a,{onClick:this.toggleMenu,to:"/contact"},"Contact")))}}]),t}(a.Component)),B=h.a,I=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(M,null),s.a.createElement(B,null,s.a.createElement("div",{className:"bleh"},s.a.createElement(L,null),s.a.createElement("div",{className:"content"},s.a.createElement(m.a,{exact:!0,path:"/",component:j}),s.a.createElement(m.a,{path:"/projects",component:R}),s.a.createElement(m.a,{path:"/contact",component:D})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.2f79f62e.chunk.js.map
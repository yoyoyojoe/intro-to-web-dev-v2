"use strict";(self.webpackChunkintro_to_web_dev_v2=self.webpackChunkintro_to_web_dev_v2||[]).push([[841],{5679:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),a=n(8759),o=n(1721),l=n(4043),s=n(9317),d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={tweet:s.Z[Math.floor(Math.random()*s.Z.length)]},t}return(0,o.Z)(t,e),t.prototype.render=function(){return r.createElement("div",{className:"lesson-flex random-tweet"},r.createElement("h3",{class:"tweet-head"},"Some words of encouragement!"),r.createElement(l.tP,{key:this.state.tweet,tweetId:this.state.tweet,options:{conversation:"none"}}))},t}(r.Component),c=d;function m(e){var t=e.data,n=t.markdownRemark,o=t.allMarkdownRemark,l=n.frontmatter,s=n.html;console.log(l.order,o);var d=l.order>0?r.createElement(a.default,{className:"prev",to:o.edges[l.order-1].node.frontmatter.path},"← "+o.edges[l.order-1].node.frontmatter.title):null,m=l.order<o.edges.length-1?r.createElement(a.default,{className:"next",to:o.edges[l.order+1].node.frontmatter.path},o.edges[l.order+1].node.frontmatter.title+" →"):null;return r.createElement("div",{className:"lesson-container"},r.createElement("div",{className:"lesson"},r.createElement("h1",null,l.title),r.createElement("h2",null,l.date),r.createElement("div",{className:"lesson-content",dangerouslySetInnerHTML:{__html:s}}),r.createElement("div",{className:"lesson-links"},d,m),r.createElement(c,null)))}}}]);
//# sourceMappingURL=component---src-templates-lesson-template-js-244fb8d758f19227e27d.js.map
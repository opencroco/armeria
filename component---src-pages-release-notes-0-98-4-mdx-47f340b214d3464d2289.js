(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var n=a("wFql"),s=a("q1tI"),i=a.n(s),r=a("2+3N"),c=a("1lec"),l=a("+ejy"),o=a("+9zj"),b=n.a.Title;t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(r).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(c).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var s=Object(o.a)(e.location),h=e.version||s.substring(s.lastIndexOf("/")+1);return h.match(/^[0-9]/)||(h=void 0),i.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:h?h+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),h?i.a.createElement(b,{id:"release-notes",level:1},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),h," release notes"):"",e.children)}},SBGP:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return h}));var n,s=a("8o2o"),i=(a("q1tI"),a("7ljp")),r=a("JkCF"),c={},l=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),o={_frontmatter:c},b=r.a;function h(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)(b,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",{className:"date"},"6th March 2020"),Object(i.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🛠️ Bug fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HealthCheckService")," does not leak the event loop tasks it scheduled anymore. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2557"}),"#2557")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ServiceRequestContext.setRequestTimeout()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ClientRequestContext.setResponseTimeout()")," now schedules a timeout correctly even if no timeout was scheduled before. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2537"}),"#2537")),Object(i.b)("li",{parentName:"ul"},"Made sure ",Object(i.b)("inlineCode",{parentName:"li"},"Subscriber.onError()")," is invoked rather than ",Object(i.b)("inlineCode",{parentName:"li"},"onComplete()")," when a ",Object(i.b)("inlineCode",{parentName:"li"},"StreamMessage")," has been aborted. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2539"}),"#2539")),Object(i.b)("li",{parentName:"ul"},"Fixed specification violations in our Reactive Streams ",Object(i.b)("inlineCode",{parentName:"li"},"Subscriber")," implementations. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2533"}),"#2533"))),Object(i.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"⛓ Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dropwizard 1.3.19 → 1.3.20"),Object(i.b)("li",{parentName:"ul"},"Dropwizard Metrics 4.1.3 → 4.1.4"),Object(i.b)("li",{parentName:"ul"},"gRPC 1.27.1 → 1.27.2"),Object(i.b)("li",{parentName:"ul"},"Jackson 2.10.2.20200130 → 2.10.3"),Object(i.b)("li",{parentName:"ul"},"Netty 4.1.45 → 4.1.46",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"netty-tcnative-boringssl-static 2.0.28 → 2.0.29"))),Object(i.b)("li",{parentName:"ul"},"Jetty 9.4.26 → 9.4.27"),Object(i.b)("li",{parentName:"ul"},"Project Reactor 3.3.2 → 3.3.3"),Object(i.b)("li",{parentName:"ul"},"Retrofit 2.7.1 → 2.7.2")),Object(i.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🙇 Thank you"),Object(i.b)(l,{usernames:["anuraaga","cricket007","ikhoon","joschi","minwoox","trustin"],mdxType:"ThankYou"}))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-98-4-mdx-47f340b214d3464d2289.js.map
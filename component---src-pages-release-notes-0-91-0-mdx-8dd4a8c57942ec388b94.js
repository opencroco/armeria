(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var n=t("wFql"),i=t("q1tI"),r=t.n(i),s=t("2+3N"),c=t("1lec"),o=t("+ejy"),l=t("+9zj"),b=n.a.Title;a.a=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(c).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var i=Object(l.a)(e.location),p=e.version||i.substring(i.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),r.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?r.a.createElement(b,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},NpM4:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return p}));var n,i=t("8o2o"),r=(t("q1tI"),t("7ljp")),s=t("JkCF"),c={},o=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),l={_frontmatter:c},b=s.a;function p(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(b,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"6th September 2019"),Object(r.b)("h2",{id:"new-features",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#new-features","aria-label":"new features permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can specify the maximum number of event loops to handle connections. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1886"}),"#1886")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ClientFactoryBuilder builder = ...;\nbuilder.maxNumEventLoopsPerEndpoint(5); // Assign 5 event loops for endpoints. 1 is used by default.\nbuilder.maxNumEventLoopsPerHttp1Endpoint(10); // Assign 10 event loops for HTTP/1.1 endpoints. 1 is used by default.\n// You can set a customized function.\nbuilder.maxNumEventLoopsFunction(endpoint -> {\n    if (endpoint.equals(Endpoint.of("foo.com"))) {\n        return 5;\n    }\n    if (endpoint.host().contains("bar.com")) {\n        return Integer.MAX_VALUE; // The value will be clamped at the number of event loops.\n    }\n    return -1; // Should return 0 or a negative value to use the default value.\n});\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now implement your own ",Object(r.b)("inlineCode",{parentName:"p"},"EventLoopScheduler")," which schedules ",Object(r.b)("inlineCode",{parentName:"p"},"EventLoop"),"s those handle connections. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1886"}),"#1886"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now see Armeria modules and their versions in DocService. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/685"}),"#685")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1744"}),"#1744"),"\n",Object(r.b)("img",Object.assign({parentName:"p"},{src:"https://user-images.githubusercontent.com/17493311/63525374-9038e900-c538-11e9-8f6e-819497cd5b0c.png",alt:"version"})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now easily combine ",Object(r.b)("inlineCode",{parentName:"p"},"EndpointGroup"),"s and ",Object(r.b)("inlineCode",{parentName:"p"},"Endpoint"),"s. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1897"}),"#1897")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1939"}),"#1939")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"Endpoint foo = ...;\nEndpoint bar = ...;\nDynamicEndpointGroup group1 = ...;\nDynamicEndpointGroup group2 = ...;\nEndpointGroup composite = EndpointGroup.of(foo, bar, group1, group2);\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can use the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://pdfs.semanticscholar.org/e575/e12ef56bcd889ce09516dd702ec1422816b6.pdf"}),"Fibonacci backoff"),". ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1968"}),"#1968")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1979"}),"#1979")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"Backoff backoff = Backoff.fibonacci(100 /* initial delay millis */,\n                                    10000 /* max delay millis */);\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now reuse the configuration of exising Armeria client when creating an Armeria Retrotit client and ",Object(r.b)("inlineCode",{parentName:"p"},"HealthCheckedEndpointGroup"),". ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2019"}),"#2019")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2020"}),"#2020")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"HttpClient myClient = ...;\nArmeriaRetrofitBuilder builder = new ArmeriaRetrofitBuilder();\n// Use the same settings and decorators with `myClient` when sending requests.\nbuilder.clientOptions(myClient.options());\n\nHealthCheckedEndpointGroupBuilder builder2 = new HealthCheckedEndpointGroupBuilder();\nbuilder2.clientOptions(myClient.options());\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can unwrap a ",Object(r.b)("inlineCode",{parentName:"p"},"Client")," and bring the decorating client instance via ",Object(r.b)("inlineCode",{parentName:"p"},"Unwrappable.as()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"ClientFactory.unwrap()"),". ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1883"}),"#1883")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2018"}),"#2018")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2029"}),"#2029")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"HttpClient client = new HttpClientBuilder()\n    .decorator(LoggingClient.newDecorator())\n    .build();\nLoggingClient unwrapped = client.as(LoggingClient.class).get();\nLoggingClient unwrapped2 = clientFactory.unwrap(client, LoggingClient.class).get();\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now easily retrieve the port number of the running server. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1956"}),"#1956")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1967"}),"#1967")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ServerBuilder sb = new ServerBuilder();\nServer server = sb.http(0) // Use an ephemeral port.\n                  .build();\n...\nint port = server.activeLocalPort();\n")))),Object(r.b)("h2",{id:"improvements",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#improvements","aria-label":"improvements permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The delay calculation performance in ",Object(r.b)("inlineCode",{parentName:"li"},"ExponentialBackoff")," is improved. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1983"}),"#1983")),Object(r.b)("li",{parentName:"ul"},"You can now run all ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria-examples"}),"Armeria examples")," using ",Object(r.b)("inlineCode",{parentName:"li"},"gradle run")," or ",Object(r.b)("inlineCode",{parentName:"li"},"gradle bootRun"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1988"}),"#1988"))),Object(r.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You no longer see a warning message when the connection is closed before the current session protocol is detected. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2043"}),"#2043")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2048"}),"#2048")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ByteBufHttpData")," does not leak anymore when an exception is raised by a client-side decorator. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2034"}),"#2034")),Object(r.b)("li",{parentName:"ul"},"You no longer see a ",Object(r.b)("inlineCode",{parentName:"li"},"NullPointerException")," when the remote server requires a protocol downgrade. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2010"}),"#2010")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2021"}),"#2021"))),Object(r.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Breaking changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Only one HTTP/2 connection is made per endpoint by default. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1886"}),"#1886"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Previously, an Armeria client made as many connections as the number of event loops for each endpoint. Now, it creates only one connection per endpoint so one ",Object(r.b)("inlineCode",{parentName:"li"},"EventLoop")," handles all requests. Because of that, you may see performance degradation. If you want it to work as before, specify ",Object(r.b)("inlineCode",{parentName:"li"},"maxNumEventLoopsPerEndpoint")," with the number of event loops in ",Object(r.b)("inlineCode",{parentName:"li"},"ClientFactoryBuilder"),".")))),Object(r.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(r.b)("p",null,"We now use ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://www.baeldung.com/spring-maven-bom"}),"Maven Boms(Bill of Materials)")," for Jackson, Brave and Netty"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Brave 5.6.10 -> 5.7.0"),Object(r.b)("li",{parentName:"ul"},"Guava 28.0-jre -> 28.1-jre"),Object(r.b)("li",{parentName:"ul"},"Jackson 2.9.9 -> 2.9.9.20190807"),Object(r.b)("li",{parentName:"ul"},"net.shibboleth.utilities 7.3.0 -> 7.5.0"),Object(r.b)("li",{parentName:"ul"},"OpenSAML 3.3.0 -> 3.4.3"),Object(r.b)("li",{parentName:"ul"},"Reactivestreams 1.0.2 -> 1.0.3"),Object(r.b)("li",{parentName:"ul"},"Reactor 3.2.11.RELEASE -> 3.2.12.RELEASE"),Object(r.b)("li",{parentName:"ul"},"RxJava2 2.2.11 -> 2.2.12"),Object(r.b)("li",{parentName:"ul"},"Spring boot 2.1.7.RELEASE -> 2.1.8.RELEASE")),Object(r.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Thank you"),Object(r.b)(o,{usernames:["adriancole","anuraaga","delegacy","hexoul","ho9science","ikhoon","imasahiro","jyblue","KangWooJin","kojilin","mauhiz","minwoox","thinkgruen","trustin","Untaek","zacscoding"],mdxType:"ThankYou"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-91-0-mdx-8dd4a8c57942ec388b94.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var n=a("wFql"),i=a("q1tI"),r=a.n(i),s=a("2+3N"),c=a("1lec"),l=a("+ejy"),b=a("+9zj"),o=n.a.Title;t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(s).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(c).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var i=Object(b.a)(e.location),p=e.version||i.substring(i.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),r.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?r.a.createElement(o,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},PTtf:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,i=a("8o2o"),r=(a("q1tI"),a("7ljp")),s=a("JkCF"),c={},l=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),b={_frontmatter:c},o=s.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(o,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"12th August 2019"),Object(r.b)("h2",{id:"new-features",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#new-features","aria-label":"new features permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now send an HTTP request to an absolute URI, which means you don't need to create different ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient"),"s for different hosts. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1143"}),"#1143")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1343"}),"#1343")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1961"}),"#1961")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'HttpClient client = HttpClient.of(); // No base URI specified.\nclient.get("http://foo.com").aggregate().join();\nclient.execute(RequestHeaders.of(HttpMethod.GET, "http://bar.com")).aggregate().join();\n\nHttpClient client = HttpClient.of("http://baz.com"); // Base URI specified.\nclient.get("/index.html").aggregate().join();\nclient.get("http://qux.com").aggregate().join(); // Can override the base URI.\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"HealthCheckedEndpointGroup")," has been revamped and now supports long-polling when used with Armeria's ",Object(r.b)("inlineCode",{parentName:"p"},"HealthCheckService"),". ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1948"}),"#1948")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1977"}),"#1977")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1982"}),"#1982")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Long-polling support enables ",Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckedEndpointGroup")," to detect the server health changes immediately with much fewer number of health check requests."),Object(r.b)("li",{parentName:"ul"},"Long-polling support is auto-detected based on a special HTTP header ",Object(r.b)("inlineCode",{parentName:"li"},"armeria-lphc"),", so it is fully backward-compatible with ordinary non-Armeria health check services.")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'EndpointGroup group =\n    HealthCheckedEndpointGroup.of(\n        new StaticEndpointGroup(Endpoint.of("foo.com", 8080),\n                                Endpoint.of("bar.com", 8080)),\n        "/internal/l7check");\nEndpointGroupRegistry.register("myGroup", group,\n                               EndpointSelectionStrategy.WEIGHTED_ROUND_ROBIN);\nHttpClient client = HttpClient.of("http://group:myGroup");\nclient.get("/").aggregate().join();\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now send a delayed response easily using ",Object(r.b)("inlineCode",{parentName:"p"},"HttpResponse.delayed()"),", which may be useful when simulating a slow server. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1935"}),"#1935")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'Server server = new ServerBuilder()\n    .service("/delayed", (ctx, req) -> HttpResponse.delayed(HttpResponse.of(200),\n                                                            Duration.ofSeconds(3)))\n    .build();\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now write a mock HTTP server using ",Object(r.b)("inlineCode",{parentName:"p"},"MockWebServerExtension")," and JUnit 5. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1884"}),"#1884")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1935"}),"#1935")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'class MyTest {\n    @RegisterExtension\n    static MockWebServerExtension server = new MockWebServerExtension();\n\n    @Test\n    void test() {\n        server.enqueue(HttpResponse.of(200));\n        HttpResponse actualRes = HttpClient.of(server.httpUri("/")).get("/");\n        assertThat(actualRes.aggregate().join().status().code()).isEqualTo(200);\n    }\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"AsyncCloseable")," has been added to provide an asynchronous close operation. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1948"}),"#1948")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"public class IAmCloseable implements AutoCloseable, AsyncCloseable {\n    @Override\n    public CompletableFuture<?> closeAsync() {\n        ...\n    }\n\n    @Override\n    public void close() {\n        closeAsync().join();\n    }\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now specify an ",Object(r.b)("inlineCode",{parentName:"p"},"EventExecutor")," when using ",Object(r.b)("inlineCode",{parentName:"p"},"HttpResponse.from()"),". ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1937"}),"#1937"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now suppress the false warnings from ",Object(r.b)("inlineCode",{parentName:"p"},"RequestContextCurrentTraceContext")," by using ",Object(r.b)("inlineCode",{parentName:"p"},"setCurrentThreadNotRequestThread()")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1971"}),"#1971")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1980"}),"#1980")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"For example, you could prevent warnings from the administrative threads controlled by ",Object(r.b)("inlineCode",{parentName:"p"},"ThreadFactory")," like the following:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ThreadFactory factory = (runnable) -> new Thread(new Runnable() {\n    @Override\n    public void run() {\n        RequestContextCurrentTraceContext.setCurrentThreadNotRequestThread(true);\n        runnable.run();\n    }\n\n    @Override\n    public String toString() {\n        return runnable.toString();\n    }\n});\n")))))),Object(r.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestLog.responseCause()")," is now recorded correctly for client requests. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1977"}),"#1977")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RetryingClient")," now respects the ",Object(r.b)("inlineCode",{parentName:"li"},"Endpoint")," selection order, which was broken since 0.89.0. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1973"}),"#1973")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1974"}),"#1974")),Object(r.b)("li",{parentName:"ul"},"The health checked requests sent by ",Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckedEndpointGroup")," are now sent at the correct interval, even if an endpoint is not responsive. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1948"}),"#1948")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClosedPublisherException")," is not raised anymore when ",Object(r.b)("inlineCode",{parentName:"li"},"HttpResponse")," is aborted by the client who issued the request. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1962"}),"#1962")),Object(r.b)("li",{parentName:"ul"},"Armeria gRPC client now sends the ",Object(r.b)("inlineCode",{parentName:"li"},"TE")," header, whose absence caused interoperability issues with some gRPC servers, such as Python gRPC server. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1963"}),"#1963")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1965"}),"#1965")),Object(r.b)("li",{parentName:"ul"},"Armeria HTTP client does not send more than two ",Object(r.b)("inlineCode",{parentName:"li"},"Host")," headers for HTTP/1 anymore. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1942"}),"#1942")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckedEndpointGroup")," now waits until the initial ",Object(r.b)("inlineCode",{parentName:"li"},"Endpoint"),"s are available from its delegate group. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1940"}),"#1940"))),Object(r.b)("h2",{id:"deprecations",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#deprecations","aria-label":"deprecations permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Deprecations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckedEndpointGroupBuilder.retryInterval()")," has been un-deprecated. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1948"}),"#1948")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckedEndpointGroupBuilder.healthCheckPort()")," has been deprecated in favor of ",Object(r.b)("inlineCode",{parentName:"li"},"port()"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1948"}),"#1948")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CircuitBreakerBuilder.circuitBreakerMapping()")," has been deprecated in favor of ",Object(r.b)("inlineCode",{parentName:"li"},"mapping()"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1970"}),"#1970"))),Object(r.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Breaking changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HttpHealthCheckedEndpointGroup")," has been renamed to ",Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckedEndpointGroup"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The old ",Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckedEndpointGroup")," has been renamed to ",Object(r.b)("inlineCode",{parentName:"li"},"AbstractHealthCheckedEndpointGroup"),", and is now extensible enough for you to implement your own health-checking mechanism, such as sending a gRPC/Thrift call.")))),Object(r.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Caffeine 2.7.0 -> 2.8.0"),Object(r.b)("li",{parentName:"ul"},"fastutil 8.2.3 -> 8.3.0"),Object(r.b)("li",{parentName:"ul"},"Project Reactor 3.2.10 -> 3.2.11"),Object(r.b)("li",{parentName:"ul"},"Retrofit 2.6.0 -> 2.6.1"),Object(r.b)("li",{parentName:"ul"},"RxJava 2.2.10 -> 2.2.11"),Object(r.b)("li",{parentName:"ul"},"SLF4J 1.7.26 -> 1.7.27"),Object(r.b)("li",{parentName:"ul"},"Spring Boot 2.1.6 -> 2.1.7, 1.5.21 -> 1.5.22")),Object(r.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Thank you"),Object(r.b)(l,{usernames:["adriancole","anuraaga","dawnbreaks","ikhoon","imasahiro","minwoox","mpaltun","trustin"],mdxType:"ThankYou"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-90-0-mdx-d6dcfdeb989218d7fee9.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},"6CiC":function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a("8o2o"),i=(a("q1tI"),a("7ljp")),r=a("xCMr"),o="SAML Single Sign-On",s={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=c("Tip"),d=c("RequiredDependencies"),p=c("Warning"),m={pageTitle:o,_frontmatter:s},h=r.a;function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(h,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"saml-single-sign-on",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h1"},{href:"#saml-single-sign-on","aria-label":"saml single sign on permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"SAML Single Sign-On"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#what-is-saml"}),"What is SAML?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#configuring-your-server-as-a-service-provider"}),"Configuring your server as a service provider")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#how-to-handle-the-authentication-response"}),"How to handle the authentication response")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#what-services-are-automatically-configured"}),"What services are automatically configured"))),Object(i.b)(l,{mdxType:"Tip"},Object(i.b)("p",null,"Visit ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria-examples"}),"armeria-examples")," to find a fully working example.")),Object(i.b)("h2",{id:"what-is-saml",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#what-is-saml","aria-label":"what is saml permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"What is SAML?"),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language"}),"Security Assertion Markup Language (SAML)"),"\nis an open standard for exchanging authentication and authorization data between an identity provider and\na service provider. In this protocol, a service provider is an endpoint which provides a web service to\nan end user, and an identity provider is in charge of authenticating an end user with information sent by\nthe service provider.\nArmeria currently provides ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://wiki.shibboleth.net/confluence/display/OS30/Home"}),"OpenSAML")," based\n",Object(i.b)("inlineCode",{parentName:"p"},"armeria-saml")," module in order to support the integration with an identity provider from a service\nprovider's point of view."),Object(i.b)("h2",{id:"configuring-your-server-as-a-service-provider",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#configuring-your-server-as-a-service-provider","aria-label":"configuring your server as a service provider permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Configuring your server as a service provider"),Object(i.b)("p",null,"The first step to configure a service provider is adding ",Object(i.b)("inlineCode",{parentName:"p"},"armeria-saml")," to your dependencies."),Object(i.b)(d,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-saml"}],mdxType:"RequiredDependencies"}),Object(i.b)("p",null,"After that, you need to prepare your keystore file which contains a key pair for signing and encryption\nof a SAML message. Also, you need to import the certificate of your identity provider into the keystore\nwhich contains your key pairs. In this example, we are using a free identity provider service hosted by\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.ssocircle.com/en/"}),"SSOCircle")," in order to authenticate an end user. The following commands\nmay help you to get a keystore."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"# Generate new key pairs as alias 'signing' and 'encryption'.\nkeytool -genkeypair -keystore sample.jks -storepass 'N5^X[hvG' -keyalg rsa -sigalg sha1withrsa \\\n  -dname 'CN=Unknown, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown' -alias signing\nkeytool -genkeypair -keystore sample.jks -storepass 'N5^X[hvG' -keyalg rsa -sigalg sha1withrsa \\\n  -dname 'CN=Unknown, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown' -alias encryption\n\n# Import a certificate into the keystore as alias 'https://idp.ssocircle.com', which is the entity ID\n# of the SSOCircle. You can make 'ssocircle.crt' file with the certificate from\n# 'https://www.ssocircle.com/en/idp-tips-tricks/public-idp-configuration/'.\nkeytool -importcert -keystore sample.jks -storepass 'N5^X[hvG' -file ssocircle.crt \\\n  -alias 'https://idp.ssocircle.com'\n")),Object(i.b)("p",null,"Finally, you need to create your ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://SamlServiceProvider:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/saml/SamlServiceProvider.html"}),"type://SamlServiceProvider")," with a ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://SamlServiceProviderBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/saml/SamlServiceProviderBuilder.html"}),"type://SamlServiceProviderBuilder"),", and\nattach it to your ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://Server:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Server.html"}),"type://Server"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'// Specify information about your keystore.\n// The keystore contains two key pairs, which are identified as \'signing\' and \'encryption\'.\nKeyStoreCredentialResolver credentialResolver =\n        new KeyStoreCredentialResolverBuilder(ClassLoader.getSystemClassLoader(),\n                                              "sample.jks")\n                .type("PKCS12")\n                .password("N5^X[hvG")\n                // You need to specify your key pair and its password here.\n                .addKeyPassword("signing", "N5^X[hvG")\n                .addKeyPassword("encryption", "N5^X[hvG")\n                .build();\n\nSamlServiceProvider ssp =\n        SamlServiceProvider.builder()\n                           .credentialResolver(credentialResolver)\n                           // Specify the entity ID of this service provider.\n                           // You can specify what you want.\n                           .entityId("your-sp-id")\n                           .hostname("your-service-domain-name")\n                           // Specify an authorizer in order to authenticate a request.\n                           .authorizer(new Authorizer<HttpRequest>() { ... })\n                           // Speicify an SAML single sign-on handler\n                           // which sends a response to an end user\n                           // after he or she is authenticated or not.\n                           .ssoHandler(new SamlSingleSignOnHandler() { ... })\n                           // Specify the signature algorithm of your key.\n                           .signatureAlgorithm(SignatureConstants.ALGO_ID_SIGNATURE_RSA)\n                           .idp()\n                           // Specify the entity ID of the identity provider.\n                           // It can be found from the metadata of the identity provider.\n                           .entityId("https://idp.ssocircle.com")\n                           // Specify the endpoint that is supposed to send an authentication request.\n                           .ssoEndpoint(\n                               ofHttpPost("https://idp.ssocircle.com:443/sso/SSOPOST/metaAlias/publicidp"))\n                           .and()\n                           .build();\n\nServer server = Server.builder()\n                      .https(8443)\n                      // Configure TLS with your key and certificate.\n                      .tls(new File("your-certificate-file-path"), new File("your-key-file-path"))\n                      // Decorate you service with SAML decorator.\n                      .annotatedService("/", new MyService(), ssp.newSamlDecorator())\n                      // Add SAML service to your server which handles a SAML response and a metadata request.\n                      .service(ssp.newSamlService())\n                      .build();\n')),Object(i.b)("h2",{id:"how-to-handle-the-authentication-response",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#how-to-handle-the-authentication-response","aria-label":"how to handle the authentication response permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"How to handle the authentication response"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"armeria-saml")," provides ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://SamlSingleSignOnHandler:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/saml/SamlSingleSignOnHandler.html"}),"type://SamlSingleSignOnHandler")," to handle the response from an identity provider.\nIt consists of ",Object(i.b)("inlineCode",{parentName:"p"},"loginSucceeded()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"loginFailed()")," methods which handle the response,\nand ",Object(i.b)("inlineCode",{parentName:"p"},"beforeInitiatingSso()")," which handles a request. In most cases, you only need to write the two methods\nwhich handle the response, but if you want to send data to your identity provider and get it back\nwith a response, you need to implement ",Object(i.b)("inlineCode",{parentName:"p"},"beforeInitiatingSso()")," method."),Object(i.b)("p",null,"The following example shows a simple implementation of the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://SamlSingleSignOnHandler:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/saml/SamlSingleSignOnHandler.html"}),"type://SamlSingleSignOnHandler"),". In this example,\nif an authentication is succeeded, an email address is retrieved from the response by referring to a ",Object(i.b)("inlineCode",{parentName:"p"},"name ID"),"\nelement in the assertion, then it is sent to the end user via ",Object(i.b)("inlineCode",{parentName:"p"},"Set-Cookie")," header. It means that your\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://Authorizer:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/auth/Authorizer.html"}),"type://Authorizer")," can identify an authenticated session with a ",Object(i.b)("inlineCode",{parentName:"p"},"Cookie")," header in the following requests,\nlike ",Object(i.b)("inlineCode",{parentName:"p"},"MyAuthorizer")," in this example."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'class MySamlSingleSignOnHandler implements SamlSingleSignOnHandler {\n    @Override\n    public HttpResponse loginSucceeded(ServiceRequestContext ctx, AggregatedHttpRequest req,\n                                       MessageContext<Response> message, @Nullable String sessionIndex,\n                                       @Nullable String relayState) {\n        final Response response = message.getMessage();\n        final String username = response.getAssertions().stream()\n                                        .map(s -> s.getSubject().getNameID())\n                                        .filter(id -> id.getFormat().equals(SamlNameIdFormat.EMAIL.urn()))\n                                        .map(NameIDType::getValue)\n                                        .findFirst()\n                                        .orElse(null);\n        if (username == null) {\n            return HttpResponse.of(HttpStatus.UNAUTHORIZED, MediaType.HTML_UTF_8,\n                                   "<html><body>Username is not found.</body></html>");\n        }\n\n        // Note that you MUST NOT use this example in a real world application. You may consider encoding\n        // the value using JSON Web Tokens to prevent tempering.\n        final Cookie cookie = Cookie.builder("username", username)\n                                    .httpOnly(true)\n                                    .domain("localhost")\n                                    .maxAge(60)\n                                    .path("/")\n                                    .build();\n        return HttpResponse.of(\n                ResponseHeaders,of(HttpStatus.OK,\n                                   HttpHeaderNames.CONTENT_TYPE, MediaType.HTML_UTF_8,\n                                   HttpHeaderNames.SET_COOKIE, cookie.toSetCookieHeader()),\n                HttpData.ofUtf8("<html><body onLoad=\\"window.location.href=\'/welcome\'\\"></body></html>"));\n    }\n\n    @Override\n    public HttpResponse loginFailed(ServiceRequestContext ctx, AggregatedHttpRequest req,\n                                    @Nullable MessageContext<Response> message, Throwable cause) {\n        return HttpResponse.of(HttpStatus.UNAUTHORIZED, MediaType.HTML_UTF_8,\n                               "<html><body>Login failed.</body></html>");\n    }\n}\n\nclass MyAuthorizer implements Authorizer<HttpRequest> {\n    @Override\n    public CompletionStage<Boolean> authorize(ServiceRequestContext ctx, HttpRequest data) {\n        // Note that you MUST NOT use this example in a real world application. You have to perform\n        // proper validation in your application.\n        final String cookie = data.headers().get(HttpHeaderNames.COOKIE);\n        if (cookie == null) {\n            return CompletableFuture.completedFuture(false);\n        }\n\n        final boolean authenticated = Cookie.fromCookieHeader(cookie).stream().anyMatch(\n                c -> "username".equals(c.name()) && !Strings.isNullOrEmpty(c.value()));\n        return CompletableFuture.completedFuture(authenticated);\n    }\n}\n')),Object(i.b)(p,{mdxType:"Warning"},Object(i.b)("p",null,"The above implementation is just an example that shows you how to handle the response, so it is recommended\nthat you write your own ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://SamlSingleSignOnHandler:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/saml/SamlSingleSignOnHandler.html"}),"type://SamlSingleSignOnHandler")," according to your authentication system.")),Object(i.b)("h2",{id:"what-services-are-automatically-configured",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#what-services-are-automatically-configured","aria-label":"what services are automatically configured permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"What services are automatically configured"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"armeria-saml")," module automatically adds SAML services to your server with the following default paths:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/saml/acs/post")," and ",Object(i.b)("inlineCode",{parentName:"li"},"/saml/acs/redirect"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"SAML assertion consumer services for HTTP Post binding and HTTP Redirect binding. These services are invoked\nby an identity provider when it responds to an authentication request received from your service."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/saml/slo/post")," and ",Object(i.b)("inlineCode",{parentName:"li"},"/saml/slo/redirect"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"SAML single logout services for HTTP Post binding and HTTP Redirect binding. These services may be invoked\nby an identity provider when it performs global logout."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/saml/metadata"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"SAML metadata service. In the metadata, the endpoints for assertion consumer services and single logout\nservices are specified by ",Object(i.b)("inlineCode",{parentName:"li"},"md:AssertionConsumerService")," and ",Object(i.b)("inlineCode",{parentName:"li"},"md:SingleLogoutService")," elements\nrespectively. The certificates of the ",Object(i.b)("inlineCode",{parentName:"li"},"signing")," and ",Object(i.b)("inlineCode",{parentName:"li"},"encryption")," key pair are also included.")))),Object(i.b)(l,{mdxType:"Tip"},Object(i.b)("p",null,"In order for your service to act as a service provider, you need to register your service to your identity\nprovider, and providing your metadata is the easiest way to do that. You can get your metadata from\n",Object(i.b)("inlineCode",{parentName:"p"},"https://your-service-domain-name:your-service-port/saml/metadata"),".")))}u.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var n=a("Wbzz"),i=a("q1tI"),r=a.n(i),o=a("/94A"),s=a("+ejy");t.a=function(e){var t=Object(n.useStaticQuery)("1217743243").allMdx.nodes;return r.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:t,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-saml-mdx-73c773cedb070f2dfd86.js.map
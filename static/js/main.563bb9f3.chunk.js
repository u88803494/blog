(this.webpackJsonpw23h1=this.webpackJsonpw23h1||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),c=(a(77),a(14)),i=a(15),s=a(18),m=a(16),u=a(19),d=(a(78),a(28)),h=a(24),p=a(119),E=a(121),v=a(29),f=(a(85),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleScroll=function(){var e=a.state.positionY;a.setState({positionY:window.pageYOffset},(function(){return a.calculateScrollWidth(e)}))},a.calculateScrollWidth=function(e){var t=a.state.movedY,n=window.pageYOffset-e;a.setState({movedY:t+n},a.shouldHidden)},a.shouldHidden=function(){var e=a.state,t=e.movedY,n=e.positionY;t>=80?a.setState({movedY:0,isHidden:!0}):(t<=-175||n<=35)&&a.setState({movedY:0,isHidden:!1})},a.state={positionY:window.pageYOffset,movedY:0,isHidden:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.isHidden;return r.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top",className:e&&"navbar--hide"},r.a.createElement(v.LinkContainer,{to:"/",exact:!0},r.a.createElement(p.a.Brand,null,"React-Blog")),r.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(E.a,{className:"mr-auto"},r.a.createElement(v.LinkContainer,{to:"/",exact:!0},r.a.createElement("div",{className:"nav-link"},"\u9996\u9801")),r.a.createElement(v.LinkContainer,{to:"/posts"},r.a.createElement("div",{className:"nav-link"},"\u6587\u7ae0\u5217\u8868")),r.a.createElement(v.LinkContainer,{to:"/about"},r.a.createElement("div",{className:"nav-link"},"\u95dc\u65bc\u6211")))))}}]),t}(r.a.Component)),b=a(113),g=a(114),_=a(122),O=a(120),N=(a(87),function(e){var t=e.className,a=e.text,n=e.variant;return r.a.createElement(v.LinkContainer,{to:"/posts",exact:!0},r.a.createElement(b.a,{rel:"noopener noreferrer",className:t,variant:n},a))}),j=function(e){var t=e.avaData;return r.a.createElement(g.a,null,t.map((function(e){return r.a.createElement(_.a,{key:e.url},r.a.createElement(_.a.Img,{variant:"top",src:e.url}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,e.title),r.a.createElement(_.a.Text,null,e.text)),r.a.createElement(_.a.Footer,null,r.a.createElement("small",{className:"text-muted"}," ",e.footer," ")))})))},y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement("header",{className:"homepage__header"},r.a.createElement("div",{className:"homepage__header--title"},"\u9019\u5c31\u662f\u90e8\u843d\u683c"),r.a.createElement("div",{className:"homepage__header--subtitle"},"this is my blog"),r.a.createElement(N,{className:"homepage__header--btn",text:"\u73fe\u5728\u5c31\u7acb\u523b\u770b\u66f4\u591a",variant:"danger"})),r.a.createElement("hr",null),r.a.createElement("main",{className:"homepage__main"},r.a.createElement("div",{className:"main__askwhy"},r.a.createElement("div",{className:"main__askwhy--content"},r.a.createElement("li",null,"\u4f60\u60f3\u8981\u5beb BLOG \u537b\u6c92\u5730\u65b9\u53bb\uff1f"),r.a.createElement("li",null,"\u7c21\u55ae\u7684\u7279\u6548\u5c31\u597d\uff0c\u4f46\u662f\u5e02\u9762\u4e0a\u7684 blog \u90fd\u5f88\u8907\u96dc"),r.a.createElement("li",null,"\u60f3\u56de\u5230\u90a3\u500b\u7f8e\u597d\u7d14\u771f\u7684\u5e74\u4ee3\u55ce\uff1f"),r.a.createElement("li",null,"\u56de\u6b78\u90e8\u843d\u683c\u7684\u672c\u8cea\u60f3\u5beb\u4ec0\u9ebc\u5c31\u5beb\u4ec0\u9ebc\uff1f"))),r.a.createElement("div",{className:"main__advantages"},r.a.createElement(j,{avaData:[{url:"https://i.imgur.com/YK1x04c.png",title:"\u6587\u7ae0\u529f\u80fd",text:"\u53ef\u4ee5\u65b0\u589e\u3001\u522a\u9664\u3001\u7de8\u8f2f\u6587\u7ae0",footer:"\u66f4\u597d"},{url:"https://i.imgur.com/vqvtTgW.png",title:"\u7279\u6548",text:"\u4e00\u9ede\u9ede\u7684\u7279\u6548",footer:"\u597d\u9084\u8981\u66f4\u597d"},{url:"https://i.imgur.com/ze7iutQ.png",title:"\u4e0d\u8b80\u6a94",text:"\u7db2\u7ad9\u63db\u9801\u4e0d\u8b80\u6a94",footer:"\u66f4\u68d2\u4e86"}]}),r.a.createElement("div",{className:"main__advantages--btn"},r.a.createElement(N,{className:"homepage__header--btn",text:"\u73fe\u5728\u5c31\u7acb\u523b\u770b\u66f4\u591a",variant:"outline-dark"}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"main__CTA"},r.a.createElement("pre",{className:"main__CTA--text"},"\n              \u5beb\u6587\u7ae0\u6700\u6ce8\u91cd\u7684\u662f\u4ec0\u9ebc\uff1f\u4e0d\u5c31\u662f\u8868\u9054\u51fa\u81ea\u5df1\u5167\u5fc3\u4e2d\u60f3\u5beb\u7684\u5167\u5bb9\u5c31\u597d\u3002\n              \u5c31\u597d\u50cf\u4e00\u9846\u5927\u6a39\uff0c\u975c\u975c\u7684\u5438\u6536\u990a\u5206\uff0c\u7136\u5f8c\u6563\u767c\u4f60\u7684\u9748\u6027\uff0c\u767c\u63ee\u4f60\u7684\u6dfa\u80fd\u3002\n              \u5beb\u5427\uff01\u5b69\u5b50\n              "),r.a.createElement(O.a,null,r.a.createElement(O.a.Image,{width:1920,height:1080,alt:"1920X1080",src:"https://i.imgur.com/Pl30j07.jpg"}),r.a.createElement(O.a.Caption,null,"\u5b89\u5b89\u975c\u975c\u5730\u751f\u9577\u65bc\u5929\u5730\u4e4b\u9593\uff0c\u5f9e\u5f9e\u5bb9\u5bb9\u5730\u7d93\u6b77\u8457\u6625\u590f\u79cb\u51ac\u3002\u4e00\u5b63\u53c8\u4e00\u5b63\uff0c\u4e00\u5e74\u53c8\u4e00\u5e74\u2026\u2026\u4e0d\u50cf\u9bae\u82b1\u90a3\u6a23\u5b0c\u8cb4\uff0c\u5f9e\u4f86\u4e0d\u61fc\u98a8\u5439\u96e8\u6dcb\u3002\u5927\u6a39\u4f9d\u7136\u5c79\u7acb\uff0c\u85e4\u8513\u6c38\u8a34\u7e8f\u7dbf\u2026\u2026")),r.a.createElement("div",{className:"main__CTA-btn"},r.a.createElement(N,{className:"homepage__header--btn",text:"\u7acb\u523b\u5c31\u53bb\u5beb\u6587\u7ae0",variant:"outline-dark"})))))}}]),t}(n.Component),C=a(30),k=a(71),w=a(27),x=a(123),S=a(115),q=(a(88),a(34)),H=a(117),T=a(118),L=(a(89),a(26)),P=a.n(L),Y=function(e){var t=e.onHide,a=e.show,l=e.post,o=e.status,c=e.handleChangePosts,i=Object(n.useState)(l||{title:"",author:"",body:""}),s=Object(w.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)({title:!1,author:!1,body:!1}),h=Object(w.a)(d,2),p=h[0],E=h[1],v=Object(n.useState)({canSubmit:!0,status:""}),f=Object(w.a)(v,2),g=f[0],_=f[1],O=function(e){e.target.value?E(Object(C.a)({},p,Object(q.a)({},e.target.name,!1))):E(Object(C.a)({},p,Object(q.a)({},e.target.name,!0))),u(Object(C.a)({},m,Object(q.a)({},e.target.name,e.target.value)))};return Object(n.useEffect)((function(){m.title&&m.author&&m.body&&_({canSubmit:!0,status:""})}),[m]),r.a.createElement(H.a,Object.assign({size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},{onHide:t,show:a}),r.a.createElement(H.a.Header,{closeButton:!0},r.a.createElement(H.a.Title,{id:"contained-modal-title-vcenter"},"editing"===o?"\u4f60\u6b63\u5728\u7de8\u8f2f\u6587\u7ae0":"\u4f60\u6b63\u5728\u65b0\u589e\u6587\u7ae0")),r.a.createElement(T.a,null,r.a.createElement(H.a.Body,null,r.a.createElement(T.a.Group,null,r.a.createElement("div",{className:"form__datatype"},r.a.createElement(T.a.Label,null,"\u6a19\u984c"),r.a.createElement(T.a.Text,{className:"form__empty"},p.title&&"\u6a19\u984c\u4e0d\u80fd\u70ba\u7a7a")),r.a.createElement(T.a.Control,{name:"title",type:"text",placeholder:"Enter title",value:m&&m.title,onChange:O})),r.a.createElement(T.a.Group,null,r.a.createElement("div",{className:"form__datatype"},r.a.createElement(T.a.Label,null,"\u4f5c\u8005"),r.a.createElement(T.a.Text,{className:"form__empty"},p.author&&"\u4f5c\u8005\u4e0d\u80fd\u70ba\u7a7a")),r.a.createElement(T.a.Control,{name:"author",type:"text",placeholder:"author/\u4f5c\u8005",value:m&&m.author,onChange:O})),r.a.createElement(T.a.Group,null,r.a.createElement("div",{className:"form__datatype"},r.a.createElement(T.a.Label,null,"\u5167\u6587"),r.a.createElement(T.a.Text,{className:"form__empty"},p.body&&"\u5167\u5bb9\u4e0d\u80fd\u70ba\u7a7a")),r.a.createElement(T.a.Control,{name:"body",as:"textarea",rows:"5",placeholder:"\u8f38\u5165\u5167\u6587",value:m&&m.body,onChange:O})),r.a.createElement(T.a.Text,{className:"form__empty form__empty--submit"},g.status)),r.a.createElement(H.a.Footer,null,r.a.createElement(b.a,{variant:"outline-secondary",onClick:t},"Close"),r.a.createElement(b.a,{variant:"outline-primary",onClick:function(){if(m.title&&m.author&&m.body){(function(e,t){return"create"===t?function(e){return P.a.post("https://qootest.com/posts/",e)}(e):function(e){return P.a.put("https://qootest.com/posts/"+e.id,e)}(e)})(m,o).then((function(e){return e.status<=300&&function(e,a){c(e,a),t()}(o,m)})).catch((function(e){return function(e){_({canSubmit:!1,status:"\u767c\u751f\u554f\u984c\u7121\u6cd5\u9001\u51fa ".concat(e)})}(e)}))}else _({canSubmit:!1,status:"\u8cc7\u6599\u4e0d\u5168\uff0c\u7121\u6cd5\u9001\u51fa\uff0c\u7e7c\u7e8c\u5b8c\u6210\u8cc7\u6599\u624d\u53ef\u9001\u51fa"})},disabled:!g.canSubmit},"editing"===o?"\u5132\u5b58\u6587\u7ae0":"\u65b0\u589e\u6587\u7ae0"))))},B=function(e){var t=e.onHide,a=e.show,l=e.post,o=e.status,c=e.handleChangePosts,i=Object(n.useState)("\u662f\u7684\uff0c\u6211\u8981\u522a\u9664"),s=Object(w.a)(i,2),m=s[0],u=s[1];Object(n.useEffect)((function(){var e,t=function(e){u(e?"\u522a\u9664\u6210\u529f\uff01":"\u522a\u9664\u5931\u6557\uff01"),setTimeout((function(){e?c(o,l):u("\u662f\u7684\uff0c\u6211\u8981\u522a\u9664")}),1e3)};"\u522a\u9664\u4e2d........"===m&&(e=l.id,P.a.delete("https://qootest.com/posts/"+e)).then((function(e){return e.status<300&&t(!0)})).catch((function(){return t(!1)}))}),[m,c,l,o]);return r.a.createElement(H.a,Object.assign({size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},{onHide:t,show:a}),r.a.createElement(H.a.Header,{closeButton:!0},r.a.createElement(H.a.Title,{id:"contained-modal-title-vcenter"},"\u8b66\u544a\uff01\u4f60\u6b63\u5728\u522a\u9664\u6587\u7ae0")),r.a.createElement(H.a.Body,null,"\u4f60\u78ba\u5b9a\u8981\u522a\u9664\u6587\u7ae0\u55ce\uff1f"),r.a.createElement(H.a.Footer,null,r.a.createElement(b.a,{variant:"outline-secondary",onClick:t},"\u4e0d\u4e86\uff0c\u6211\u4e0d\u8981\u522a\u9664"),r.a.createElement(b.a,{variant:"outline-danger",onClick:function(){u("\u522a\u9664\u4e2d........")},disabled:"\u662f\u7684\uff0c\u6211\u8981\u522a\u9664"!==m},m)))},D=function(e){var t=e.post,a=e.handleChangePosts,l=Object(n.useState)(!1),o=Object(w.a)(l,2),c=o[0],i=o[1],s=Object(n.useState)(!1),m=Object(w.a)(s,2),u=m[0],d=m[1];return r.a.createElement("div",{className:"blog__controller"},r.a.createElement(b.a,{variant:"outline-success",onClick:function(){return i(!0)}},"\u7de8\u8f2f"),c&&r.a.createElement(Y,{show:c,onHide:function(){return i(!1)},status:"editing",post:t,handleChangePosts:a}),r.a.createElement(b.a,{variant:"outline-danger",onClick:function(){return d(!0)}},"\u522a\u9664"),u&&r.a.createElement(B,{show:u,onHide:function(){return d(!1)},status:"delete",post:t,handleChangePosts:a}))},A=function(e){var t=e.data,a=e.history,n=e.handleChangePosts;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(x.a.Item,{key:e.id,className:"blog__post"},r.a.createElement("div",{className:"blog__title",onClick:function(){return a.push("/posts/"+e.id)}},e.title),r.a.createElement(D,{handleChangePosts:n,post:e}))})))},I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleCreate=function(e){a.setState({isCreate:e})},a.handleChangePosts=function(e,t){var n=a.state.data;switch(e){case"create":a.setState({data:[Object(C.a)({},t,{createdAt:(new Date).getTime(),id:a.id})].concat(Object(k.a)(n))}),a.id+=1;break;case"editing":a.setState({data:n.map((function(e){return e.id!==t.id?e:Object(C.a)({},e,{},t)}))});break;case"delete":a.setState({data:n.filter((function(e){return e.id!==t.id}))});break;default:console.log("\u4e00\u5b9a\u662f\u641e\u932f\u4e86\u4ec0\u9ebc")}},a.state={data:[],isCreate:!1},a.id=1,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.a.get("https://qootest.com/posts").then((function(t){e.setState({data:t.data.filter((function(e){var t=e.title,a=e.author,n=e.body;return t&&a&&n})).sort((function(e,t){return t.id-e.id}))}),e.id=0!==t.data.length?t.data[t.data.length-1].id+1:1}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.isCreate,l=this.props.history;return r.a.createElement("div",{className:"blog"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__title"},"\u90e8\u843d\u683c\u6587\u7ae0"),r.a.createElement("div",{className:"header__newpost"},r.a.createElement(b.a,{variant:"outline-primary",onClick:function(){return e.handleCreate(!0)}},"\u65b0\u589e\u6587\u7ae0"),n&&r.a.createElement(Y,{show:n,onHide:function(){return e.handleCreate(!1)},status:"create",handleChangePosts:this.handleChangePosts}))),r.a.createElement("main",{className:"blog__posts"},a.length?r.a.createElement(A,{data:a,history:l,handleChangePosts:this.handleChangePosts}):r.a.createElement(S.a,{animation:"border"})))}}]),t}(n.Component),W=Object(h.o)(I),F=(a(108),function(){return r.a.createElement("div",{className:"article__controller"},r.a.createElement(d.Link,{to:"/posts",className:"blog__contorller--back"},r.a.createElement(b.a,{variant:"outline-dark"}," back ")))}),G=function(e){var t=e.post,a=e.date;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"article__header"},r.a.createElement("h1",null,t.title),r.a.createElement("div",{className:"article__meta"},r.a.createElement("div",{className:"article__info"},r.a.createElement("div",{className:"article__author"},"\u4f5c\u8005\uff1a",t.author),r.a.createElement("div",{className:"article__created-at"},"\u767c\u5e03\u6642\u9593\uff1a",a.toString())),r.a.createElement(F,null))),r.a.createElement("hr",null),r.a.createElement("p",{className:"article__body"},t.body))},M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={post:{}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.postId;P.a.get("https://qootest.com/posts/"+t).then((function(t){e.setState({post:t.data})}))}},{key:"render",value:function(){var e=this.state.post,t=new Date(e.createdAt);return r.a.createElement("div",{className:"article"},e.title?r.a.createElement(G,{post:e,date:t}):r.a.createElement(S.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),t}(n.Component),z=(a(109),a(116));var J=function(){return r.a.createElement("div",{className:"about"},r.a.createElement(z.a,null,r.a.createElement("h1",{className:"about__title"},"maxime quas veniam"),r.a.createElement("pre",{className:"about__content"},"\n          Lorem ipsum dolor sit amet consectetur adipisicing elit.\n          Omnis alias harum voluptatem nostrum vero mollitia cum,\n          voluptas neque praesentium provident quasi, obcaecati enim consequatur illo.\n          Hic autem minus aperiam velit.\n          Ducimus corrupti iusto officia aperiam eius ad neque sit minima ut\n          nostrum aliquideaque qui maxime quas veniam doloremque quaerat repellendus esse,\n          rem dolorum tempora perspiciatis impedit?\n          Possimus omnis pariatur et quia eum molestiae, sint unde,\n          reprehenderit recusandae consequuntur iusto eos quis ipsum veritatis,\n          tempore deleniti totam sunt nisi a!\n          ")))};a(110);var R=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__body"},r.a.createElement("div",{className:"footer_owner"},"Made with ",r.a.createElement("span",{className:"footer__icon"}," \u2665 "),"by ",r.a.createElement("a",{href:"https://github.com/u88803494",target:"_blank",rel:"noopener noreferrer"},"hugh"))))},K=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.BrowserRouter,{basename:"blog"},r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(h.d,{exact:!0,path:"/",component:y}),r.a.createElement(h.d,{exact:!0,path:"/posts",component:W}),r.a.createElement(h.d,{path:"/about",component:J}),r.a.createElement(h.d,{path:"/posts/:postId",component:M}),r.a.createElement(R,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,a){e.exports=a(111)},77:function(e,t,a){},78:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.563bb9f3.chunk.js.map
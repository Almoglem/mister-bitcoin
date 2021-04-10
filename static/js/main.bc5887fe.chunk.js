(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{114:function(t,e,n){},115:function(t,e,n){},116:function(t,e,n){},118:function(t,e,n){},119:function(t,e,n){},120:function(t,e,n){},121:function(t,e,n){},215:function(t,e,n){},216:function(t,e,n){},217:function(t,e,n){},218:function(t,e,n){},219:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(26),o=n.n(c),s=(n(88),n(15)),i=n(6),u=(n(89),n(2)),l=n.n(u),h=n(5),p=n(7),d=n(8),f=n(10),j=n(9),m=(n(91),n(36)),b=n.n(m),v={store:function(t,e){localStorage[t]=JSON.stringify(e)},load:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage[t]||e;return JSON.parse(n)}};var O={getRate:function(t){return x.apply(this,arguments)},getMarketPrice:function(){return g.apply(this,arguments)},getTradeVolume:function(){return C.apply(this,arguments)}};function x(){return(x=Object(h.a)(l.a.mark((function t(e){var n,a,r,c,o,s=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:"USD",!(a=v.load("rate"))){t.next=4;break}return t.abrupt("return",a);case 4:return t.prev=4,t.next=7,b.a.get("https://blockchain.info/ticker");case 7:return r=t.sent,c=r.data,o=c[n].last*e,v.store("rate",o),t.abrupt("return",o);case 14:t.prev=14,t.t0=t.catch(4),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[4,14]])})))).apply(this,arguments)}function g(){return(g=Object(h.a)(l.a.mark((function t(){var e,n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=v.load("market price"))){t.next=3;break}return t.abrupt("return",e);case 3:return t.prev=3,t.next=6,b.a.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 6:return n=t.sent,a=n.data,v.store("market price",a),t.abrupt("return",a);case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))).apply(this,arguments)}function C(){return(C=Object(h.a)(l.a.mark((function t(){var e,n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=v.load("trade volume"))){t.next=3;break}return t.abrupt("return",e);case 3:return t.prev=3,t.next=6,b.a.get("https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true");case 6:return n=t.sent,a=n.data,v.store("trade volume",a),t.abrupt("return",a);case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))).apply(this,arguments)}var y=n(19),k=n(3),w=n(78),N=n.n(w),S=n(79),_=n.n(S),T=n(1),D=_()(N.a),M={makeId:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<t;a++)e+=n.charAt(Math.floor(Math.random()*n.length));return e},showMsg:function(t){D.fire({title:Object(T.jsx)("p",{children:t}),toast:!0,position:"bottom-right",showConfirmButton:!1,timer:2e3})}};var A={getUser:function(){return Promise.resolve(Object(k.a)({},P))},saveUser:function(t){return P=t,v.store(E,P),Promise.resolve(Object(k.a)({},P))},transferFund:function(t){return P.coins-=t,v.store(E,P),Promise.resolve(Object(k.a)({},P))},addMove:function(t,e,n){var a={_id:M.makeId(),toId:t,to:e,at:Date.now(),amount:n};return P.moves.unshift(a),v.store(E,P),Promise.resolve(Object(k.a)({},P))}},E="user",L={name:"Almog Lemberg",coins:500,moves:[]},P=function(){var t=v.load(E);t||(t=L);return v.store(E,t),t}();n(114);var F=n(80),R=n.n(F),I=function(t){var e=t.moves;return e.length?Object(T.jsx)("section",{className:"moves-list",children:Object(T.jsx)("ul",{children:e.map((function(t){return Object(T.jsxs)("li",{className:"activity-preview",children:["You have transfered ",t.amount,"\u0e3f to ",t.to," on ",Object(T.jsx)(R.a,{format:"DD/MM/YY",children:t.at})]},t._id)}))})}):Object(T.jsx)("div",{className:"moves-list",children:"No activity yet"})},V=n(81),U=function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={rate:null},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.setUser();case 2:this.loadRate();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"loadRate",value:function(){var t=Object(h.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getRate(this.props.user.coins);case 2:e=t.sent,this.setState({rate:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.props.user,e=this.state.rate;return t&&e&&Object(T.jsxs)("section",{className:"home",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)(V.a,{autoplay:!0,loop:!0,src:"https://assets7.lottiefiles.com/packages/lf20_HzCLVo.json",style:{height:"300px",width:"300px"}}),Object(T.jsxs)("h2",{children:["Welcome, ",t.name," "]}),Object(T.jsxs)("div",{className:"balance-container",children:[Object(T.jsx)("h5",{className:"subtitle",children:"CURRENT BALANCE"}),Object(T.jsxs)("p",{children:[" BIT: ",Object(T.jsxs)("span",{className:"bitcoin-balance",children:[" \u0e3f ",t.coins.toLocaleString(),"  "]})]}),Object(T.jsxs)("p",{children:[" USD: $ ",e.toLocaleString()," "]})]})]}),Object(T.jsx)("h5",{className:"subtitle",children:"RECENT ACTIVITY"}),Object(T.jsx)(I,{moves:t.moves.slice(0,5)})]})}}]),n}(a.Component),B={setUser:function(){return function(){var t=Object(h.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.getUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},Y=Object(y.b)((function(t){return{user:t.userReducer.user}}),B)(U),q=n(23),z=(n(115),function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={term:""},t.handleChange=function(e){var n=e.target,a=n.name,r="number"===n.type?+n.value:n.value;t.setState(Object(q.a)({},a,r),(function(){t.props.onChangeFilter(Object(k.a)({},t.state))}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state.term;return Object(T.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(T.jsx)("label",{htmlFor:"term"}),Object(T.jsx)("input",{placeholder:"Search by name, phone or mail",id:"term",name:"term",value:t,onChange:this.handleChange})]})}}]),n}(a.Component));n(116);function J(t){var e=t.contact;return Object(T.jsx)(s.b,{to:"/contact/"+e._id,children:Object(T.jsxs)("div",{className:"contact-preview",children:[Object(T.jsx)("img",{className:"contact-img",src:"https://robohash.org/".concat(e._id,".png"),alt:"contact-img"}),e.name]})})}n(118);function H(t){var e=t.contacts;return e&&Object(T.jsx)("section",{children:Object(T.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(T.jsx)(J,{contact:t},t._id)}))})})}var X={query:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=K;t&&t.term&&(e=Z(t.term));return Promise.resolve(Q(e))},getContactById:function(t){var e=K.find((function(e){return e._id===t}));return e?Promise.resolve(Object(k.a)({},e)):Promise.reject()},deleteContact:function(t){var e=K.findIndex((function(e){return e._id===t}));-1!==e&&K.splice(e,1);return v.store(W,K),Promise.resolve(K)},saveContact:function(t){if(t._id){var e=K.findIndex((function(e){return e._id===t._id}));K.splice(e,1,t)}else t._id=M.makeId(),K.push(t);return v.store(W,K),Promise.resolve(t)},getEmptyContact:function(){return{name:"",email:"",phone:""}}},W="contacts",G=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"}],K=function(){var t=v.load(W);t&&t.length||(t=G);return v.store(W,t),t}();function Q(t){return t.sort((function(t,e){return t.name.toLocaleLowerCase()<e.name.toLocaleLowerCase()?-1:t.name.toLocaleLowerCase()>e.name.toLocaleLowerCase()?1:0}))}function Z(t){return t=t.toLocaleLowerCase(),K.filter((function(e){return e.name.toLocaleLowerCase().includes(t)||e.phone.toLocaleLowerCase().includes(t)||e.email.toLocaleLowerCase().includes(t)}))}n(119);var $=function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={filterBy:null},t.onChangeFilter=function(e){t.props.loadContacts(e)},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.loadContacts()}},{key:"render",value:function(){var t=this.props.contacts;return t&&Object(T.jsxs)("div",{children:[Object(T.jsx)(z,{onChangeFilter:this.onChangeFilter}),Object(T.jsx)(H,{contacts:t}),Object(T.jsx)(s.b,{to:"/contact/edit",children:"Add Contact"})]})}}]),n}(a.Component),tt={loadContacts:function(t){return function(){var e=Object(h.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.query(t);case 2:a=e.sent,n({type:"SET_CONTACTS",contacts:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},et=Object(y.b)((function(t){return{contacts:t.contactReducer.contacts}}),tt)($),nt=(n(120),function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={transferAmount:""},t.handleChange=function(e){var n=e.target;t.setState({transferAmount:+n.value})},t.transferFund=function(){var e=Object(h.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t.props.transferFund(t.state.transferAmount),t.state.transferAmount="";case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state.transferAmount,e=this.props.contactName;return Object(T.jsxs)("form",{className:"transfer-fund",onSubmit:this.transferFund,children:[Object(T.jsxs)("h3",{children:["Send payment to ",e]}),Object(T.jsx)("label",{htmlFor:"transferAmount"}),Object(T.jsx)("input",{required:!0,type:"number",id:"transferAmount",value:t,onChange:this.handleChange,name:"transferAmount"}),Object(T.jsx)("button",{children:"Send"})]})}}]),n}(a.Component)),at=(n(121),function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).removeContact=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.removeContact(t.props.contact._id);case 2:t.props.history.push("/contacts");case 3:case"end":return e.stop()}}),e)}))),t.transferFund=function(e){return e>t.props.user.coins?M.showMsg("Not enough balance"):e<=0?M.showMsg("Please enter a number higher than 0"):(t.props.transferFund(t.props.contact._id,e),t.props.addMove(t.props.contact._id,t.props.contact.name,e),void M.showMsg("Transfered ".concat(e," bitcoins to ").concat(t.props.contact.name," successfuly")))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.getContactById(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(t,e){t.match.params.id!==this.props.match.params.id&&this.props.getContactById(this.props.match.params.id)}},{key:"render",value:function(){var t=this.props,e=t.contact,n=t.user;return e&&Object(T.jsxs)("section",{className:"contact-details",children:[Object(T.jsx)("img",{className:"contact-img",src:"https://robohash.org/".concat(e._id,".png"),alt:"contact-img"}),Object(T.jsxs)("div",{className:"info-container container",children:[Object(T.jsx)("h4",{children:e.name}),Object(T.jsx)("p",{children:e.email}),Object(T.jsx)("p",{children:e.phone})]}),Object(T.jsxs)("div",{className:"actions-container container",children:[Object(T.jsxs)(s.b,{to:"/contact/edit/"+e._id,children:[Object(T.jsx)("i",{class:"fas fa-pen"})," Edit"]})," ||",Object(T.jsxs)("button",{className:"clean-button",onClick:this.removeContact,children:[Object(T.jsx)("i",{class:"far fa-trash-alt"})," Delete"]})]}),Object(T.jsx)(nt,{transferFund:this.transferFund,contactName:e.name}),Object(T.jsx)(I,{moves:n.moves.filter((function(t){return t.toId===e._id}))})]})}}]),n}(a.Component)),rt={getContactById:function(t){return function(){var e=Object(h.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.getContactById(t);case 2:a=e.sent,n({type:"SET_CONTACT",contact:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},removeContact:function(t){return function(){var e=Object(h.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.deleteContact(t);case 2:n({type:"REMOVE_CONTACT",contactId:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},transferFund:function(t,e){return function(){var t=Object(h.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.transferFund(e);case 2:a=t.sent,n({type:"SET_USER",user:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addMove:function(t,e,n){return function(){var a=Object(h.a)(l.a.mark((function a(r){var c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,A.addMove(t,e,n);case 2:c=a.sent,r({type:"SET_USER",user:c});case 4:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()}},ct=Object(y.b)((function(t){return{contact:t.contactReducer.currContact,user:t.userReducer.user}}),rt)(at),ot=n(52);n(215);function st(t){var e=t.marketPriceData,n=t.tradeVolumeData;return Object(T.jsxs)("section",{children:[" ",e&&Object(T.jsxs)("div",{className:"chart-container",children:[" ",Object(T.jsx)("h2",{children:"Market Price"})," ",Object(T.jsx)(ot.Line,{data:{labels:e.labels,datasets:[{label:"Market Price",data:e.vals,backgroundColor:"#a8a8a82c",borderColor:"#cf9d3f"}]}})," "]}),n&&Object(T.jsxs)("div",{className:"chart-container",children:[" ",Object(T.jsx)("h2",{children:"Trade Volume"})," ",Object(T.jsx)(ot.Line,{data:{labels:n.labels,datasets:[{label:"Trade Volume",data:n.vals,backgroundColor:"#a8a8a82c",borderColor:"#cf9d3f"}]}})," "]})]})}var it=n(27),ut=n.n(it),lt=(n(216),function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={marketPriceData:null,tradeVolumeData:null},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.loadMarketPlaceData(),this.LoadTradeVolumeData()}},{key:"loadMarketPlaceData",value:function(){var t=Object(h.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getMarketPrice();case 2:e=t.sent,(n={}).vals=e.values.map((function(t){return t.y})),n.labels=e.values.map((function(t){return ut.a.unix(t.x).format("MMM DD, YY")})),this.setState({marketPriceData:n});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"LoadTradeVolumeData",value:function(){var t=Object(h.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getTradeVolume();case 2:e=t.sent,(n={}).vals=e.values.map((function(t){return t.y})),n.labels=e.values.map((function(t){return ut.a.unix(t.x).format("MMM DD, YY")})),this.setState({tradeVolumeData:n});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.marketPriceData,n=t.tradeVolumeData;return Object(T.jsx)("div",{children:Object(T.jsx)(st,{marketPriceData:e,tradeVolumeData:n})})}}]),n}(a.Component)),ht=(n(217),Object(i.f)((function(t){return Object(T.jsxs)("div",{className:"app-header",children:[Object(T.jsx)(s.c,{exact:!0,to:"/",children:Object(T.jsx)("h1",{className:"logo",children:"Mr.BitCoin"})}),Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)(s.c,{to:"/contacts",activeClassName:"active-nav",children:"Contacts"})}),Object(T.jsx)("li",{children:Object(T.jsx)(s.c,{to:"/statistics",activeClassName:"active-nav",children:"Statistics"})})]})]})}))),pt=(n(218),function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contact:null},t.handleChange=function(e){var n=e.target,a=n.name,r="number"===n.type?+n.value:n.value;t.setState((function(t){return{contact:Object(k.a)(Object(k.a)({},t.contact),{},Object(q.a)({},a,r))}}))},t.saveContact=function(){var e=Object(h.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,X.saveContact(t.state.contact);case 3:t.props.history.push("/contacts");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props.match.params.id,t.prev=1,!e){t.next=8;break}return t.next=5,X.getContactById(e);case 5:t.t0=t.sent,t.next=9;break;case 8:t.t0=X.getEmptyContact();case 9:n=t.t0,this.setState({contact:n}),t.next=16;break;case 13:t.prev=13,t.t1=t.catch(1),console.log(t.t1);case 16:case"end":return t.stop()}}),t,this,[[1,13]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.contact)return Object(T.jsx)("div",{children:"Loading"});var t=this.state.contact,e=t.name,n=t.email,a=t.phone;return Object(T.jsx)("section",{className:"contact-edit",children:Object(T.jsxs)("form",{className:"edit-form",onSubmit:this.saveContact,children:[Object(T.jsx)("label",{htmlFor:"name",children:"Name"}),Object(T.jsx)("input",{required:!0,type:"text",id:"name",value:e,onChange:this.handleChange,name:"name"}),Object(T.jsx)("label",{htmlFor:"email",children:"Email"}),Object(T.jsx)("input",{required:!0,type:"email",id:"email",value:n,onChange:this.handleChange,name:"email"}),Object(T.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(T.jsx)("input",{required:!0,type:"phone",id:"phone",value:a,onChange:this.handleChange,name:"phone"}),Object(T.jsx)("button",{children:"Save"})]})})}}]),n}(a.Component));var dt=function(){return Object(T.jsx)(s.a,{children:Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(ht,{}),Object(T.jsxs)(i.c,{children:[Object(T.jsx)(i.a,{component:pt,path:"/contact/edit/:id?"}),Object(T.jsx)(i.a,{component:ct,path:"/contact/:id"}),Object(T.jsx)(i.a,{component:et,path:"/contacts"}),Object(T.jsx)(i.a,{component:lt,path:"/statistics"}),Object(T.jsx)(i.a,{component:Y,path:"/"})]})]})})},ft=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,220)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))},jt=n(22),mt=n(82),bt=n(83),vt={contacts:[],currContact:null};var Ot={user:null};var xt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||jt.d,gt=Object(jt.c)({contactReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(k.a)(Object(k.a)({},t),{},{contacts:e.contacts});case"SET_CONTACT":return Object(k.a)(Object(k.a)({},t),{},{currContact:e.contact});case"ADD_CONTACT":return Object(k.a)(Object(k.a)({},t),{},{contacts:[].concat(Object(bt.a)(t.contacts),[e.contact])});case"REMOVE_CONTACT":return Object(k.a)(Object(k.a)({},t),{},{robots:t.contacts.filter((function(t){return t._id!==e.contactId}))});case"UPDATE_CONTACT":var n=e.savedContact;return Object(k.a)(Object(k.a)({},t),{},{contacts:t.contacts.map((function(t){return t._id===n._id?n:t}))});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_USER":return Object(k.a)(Object(k.a)({},t),{},{user:e.user});case"TRANSFER_COINS":return Object(k.a)(Object(k.a)({},t),{},{user:Object(k.a)(Object(k.a)({},t.user),{},{coins:t.user.coins-e.transferAmount})});default:return t}}}),Ct=Object(jt.e)(gt,xt(Object(jt.a)(mt.a)));o.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(y.a,{store:Ct,children:Object(T.jsx)(dt,{})})}),document.getElementById("root")),ft()},88:function(t,e,n){},89:function(t,e,n){},91:function(t,e,n){}},[[219,1,2]]]);
//# sourceMappingURL=main.bc5887fe.chunk.js.map
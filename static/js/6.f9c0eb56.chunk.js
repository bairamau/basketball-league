(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{33:function(e,t,n){"use strict";var a=n(5),r=n(6),o=n(8),i=n(7),c=n(9),s=n(0),l=n(29),u=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={team:null},n.fetchTeam=function(e){n.setState(function(){return{team:null}}),Object(l.c)(e).then(function(e){return n.setState(function(){return{team:e}})})},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchTeam(this.props.id)}},{key:"componentWillReceiveProps",value:function(e){this.props.id!==e.id&&this.fetchTeam(e.id)}},{key:"render",value:function(){return this.props.children(this.state.team)}}]),t}(s.Component);t.a=u},58:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.r(t);var r=n(5),o=n(6),i=n(8),c=n(7),s=n(9),l=n(0),u=n.n(l),p=n(1),m=n.n(p),h=n(4),f=n.n(h),d=n(3),y=n.n(d),v=n(11),b=n(15),E=n.n(b),j={},O=0,w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"/"===e?e:function(e){var t=e,n=j[t]||(j[t]={});if(n[e])return n[e];var a=E.a.compile(e);return O<1e4&&(n[e]=a,O++),a}(e)(t,{pretty:!0})},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},t.prototype.componentWillMount=function(){y()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},t.prototype.componentDidMount=function(){this.isStatic()||this.perform()},t.prototype.componentDidUpdate=function(e){var t=Object(v.b)(e.to),n=Object(v.b)(this.props.to);Object(v.c)(t,n)?f()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},t.prototype.computeTo=function(e){var t=e.computedMatch,n=e.to;return t?"string"===typeof n?w(n,t.params):g({},n,{pathname:w(n.pathname,t.params)}):n},t.prototype.perform=function(){var e=this.context.router.history,t=this.props.push,n=this.computeTo(this.props);t?e.push(n):e.replace(n)},t.prototype.render=function(){return null},t}(u.a.Component);N.propTypes={computedMatch:m.a.object,push:m.a.bool,from:m.a.string,to:m.a.oneOfType([m.a.string,m.a.object]).isRequired},N.defaultProps={push:!1},N.contextTypes={router:m.a.shape({history:m.a.shape({push:m.a.func.isRequired,replace:m.a.func.isRequired}).isRequired,staticContext:m.a.object}).isRequired};var T=N,R=n(54),k=n(29),x=n(32),S=n(33),C=n(30),M=n.n(C),P=n(10),q=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!0,articles:[],teamNames:{}},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([Object(k.d)(),Object(k.e)(this.props.match.params.teamId)]).then(function(t){var n=a(t,2),r=n[0],o=n[1];e.setState(function(){return{articles:o,teamNames:r,loading:!1}})})}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.articles,a=e.teamNames,r=this.props.match,o=r.params.teamId;return t||a.includes(o)?u.a.createElement("div",null,u.a.createElement(S.a,{id:o},function(e){return null===e?u.a.createElement(P.a,null):u.a.createElement("div",{className:"panel"},u.a.createElement(x.a,{id:o}),u.a.createElement("h1",{className:"medium-header"},e.name),u.a.createElement("h4",{style:{margin:5}},u.a.createElement(R.a,{style:{cursor:"pointer"},to:{pathname:"/players",search:"?teamId=".concat(o)}},"View roster")),u.a.createElement("ul",{className:"championships"},e.championships.map(function(e){return u.a.createElement("li",{key:e},e)})),u.a.createElement("ul",{className:"info-list row",style:{width:"100%"}},u.a.createElement("li",null,"Established ",u.a.createElement("div",null,e.established)),u.a.createElement("li",null,"Manager",u.a.createElement("div",null,e.manager)),u.a.createElement("li",null,"Coach",u.a.createElement("div",null,e.coach)),u.a.createElement("li",null,"Record",u.a.createElement("div",null,e.wins,"-",e.losses))),u.a.createElement("h2",{className:"header"},"Articles"),u.a.createElement("ul",{className:"articles"},n.map(function(e){return u.a.createElement("li",{key:e.id},u.a.createElement(R.a,{to:"".concat(r.url,"/articles/").concat(M()(e.title))},u.a.createElement("h4",{className:"article-title"},e.title),u.a.createElement("div",{className:"article-date"},e.date.toLocaleDateString())))})))})):u.a.createElement(T,{to:"/"})}}]),t}(l.Component);t.default=q}}]);
//# sourceMappingURL=6.f9c0eb56.chunk.js.map
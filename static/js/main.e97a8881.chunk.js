(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,n){e.exports={notification:"Notification_notification__1C7Ma"}},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(10),s=n.n(i),o=(n(17),n(18),n(11)),r=n(2),b=n(3),l=n(5),u=n(4),j=n(8),d=n.n(j),h=n(0),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onFeedback;return Object(h.jsx)("div",{className:d.a.feedbackList,children:t.map((function(e){return Object(h.jsx)("button",{type:"button",className:d.a.feedbackBtn,onClick:function(){return n(e)},children:e},e)}))})}}]),n}(c.Component),p=O,f=n(6),k=n.n(f),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(h.jsxs)("ul",{className:k.a.statList,children:[Object(h.jsx)("li",{className:k.a.item,children:Object(h.jsxs)("p",{children:["Good: ",t]})}),Object(h.jsx)("li",{className:k.a.item,children:Object(h.jsxs)("p",{children:["Neutral: ",n]})}),Object(h.jsx)("li",{className:k.a.item,children:Object(h.jsxs)("p",{children:["Bad: ",c]})}),Object(h.jsx)("li",{className:k.a.item,children:Object(h.jsxs)("p",{children:["Total: ",a]})}),Object(h.jsx)("li",{className:k.a.item,children:Object(h.jsxs)("p",{children:["Positive feadback: ",i,"%"]})})]})}}]),n}(c.Component),x=m,v=n(12),_=n.n(v),g=function(e){var t=e.message;return Object(h.jsx)("p",{className:_.a.notification,children:t})},N=n(9),y=n.n(N),F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("section",{className:y.a.section,children:[Object(h.jsx)("h2",{className:y.a.title,children:this.props.title}),this.props.children]})}}]),n}(c.Component),P=F,S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return t+e}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e.onFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage(),s=Object.keys(this.state);return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(P,{title:"Please leave feedback",children:Object(h.jsx)(p,{options:s,onFeedback:this.onFeedback})}),Object(h.jsx)(P,{title:"Statistics",children:a?Object(h.jsx)(x,{good:t,neutral:n,bad:c,total:a,positivePercentage:i}):Object(h.jsx)(g,{message:"No feedback given"})})]})}}]),n}(c.Component),B=S;s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={statList:"Statistics_statList__3BR2u",item:"Statistics_item__1vE2T"}},8:function(e,t,n){e.exports={feedbackList:"FeedbackOptions_feedbackList__2rnqP",feedbackBtn:"FeedbackOptions_feedbackBtn__1Gh71"}},9:function(e,t,n){e.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}}},[[20,1,2]]]);
//# sourceMappingURL=main.e97a8881.chunk.js.map
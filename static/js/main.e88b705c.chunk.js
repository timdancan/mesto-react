(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),o=n.n(s),i=(n(15),n(10)),l=n(3),r=n(2),u=(n(16),n.p+"static/media/logo.03b78ada.svg"),p=n(0),d=function(){return Object(p.jsx)("header",{className:"header content content_place_header",children:Object(p.jsx)("a",{className:"page-link",href:"./",target:"_parent",children:Object(p.jsx)("img",{className:"logo",src:u,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f"})})})},j=c.a.createContext(),_=function(e){var t=e.name,n=e.link,c=e.likes,s=e.handleCardClick,o=e.card,i=e.onCardLike,l=e.onConfirmeDelete,r=Object(a.useContext)(j),u=o.owner._id===r._id,d=o.likes.some((function(e){return e._id===r._id})),_="element__trash ".concat(u?null:"element__trash_hidden"," page-link"),h="element__button ".concat(d?"element__button_active":null," page-link");return Object(p.jsxs)("article",{className:"element",children:[Object(p.jsx)("button",{className:_,type:"button",onClick:function(){l(o)}}),Object(p.jsx)("div",{className:"element__img",style:{backgroundImage:"url(".concat(n,")")},role:"img","aria-label":t,onClick:function(){s(o)}}),Object(p.jsxs)("div",{className:"element__items",children:[Object(p.jsx)("h3",{className:"element__title",children:t}),Object(p.jsxs)("div",{className:"element__container",children:[Object(p.jsx)("button",{className:h,onClick:function(){i(o)},type:"button"}),Object(p.jsx)("span",{className:"element__counter",children:c.length})]})]})]})},h=c.a.createContext(),b=function(e){var t=e.onEditProfile,n=e.onAddPlace,c=e.onEditAvatar,s=e.onCardClick,o=e.handleCardLike,i=e.handleCardDelete,r=e.onConfirmeDelete,u=Object(a.useContext)(j),d=Object(a.useContext)(h);return Object(p.jsxs)("main",{className:"main",children:[Object(p.jsxs)("section",{className:"profile content content_place_profile",children:[Object(p.jsxs)("div",{className:"profile__content",children:[Object(p.jsxs)("div",{className:"profile__avatar-container",children:[Object(p.jsx)("img",{src:u.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar"}),Object(p.jsx)("button",{className:"profile__avatar-button",onClick:c})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__text",children:[Object(p.jsx)("h1",{className:"profile__title",children:u.name}),Object(p.jsx)("button",{className:"profile__edit-button page-link",type:"button",onClick:t})]}),Object(p.jsx)("p",{className:"profile__subtitle",children:u.about})]})]}),Object(p.jsx)("button",{className:"profile__add-button page-link",type:"button",onClick:n})]}),Object(p.jsx)("section",{className:"elements content content_place_elements",children:d.map((function(e){return Object(p.jsx)(_,Object(l.a)(Object(l.a)({},e),{},{card:e,handleCardClick:s,onCardLike:o,onCardDelete:i,onConfirmeDelete:r,handleConfirmeDelete:r}),e._id)}))})]})},m=function(){var e=(new Date).getFullYear();return Object(p.jsx)("footer",{className:"footer content",children:Object(p.jsxs)("p",{className:"footer__text",children:["\xa9 ",e," Mesto Russia"]})})},O=function(e){var t=e.title,n=e.name,a=e.buttonText,c=e.children,s=e.isOpen,o=e.onClose,i=e.handleSubmit;return Object(p.jsx)("div",{className:"popup popup_".concat(n," ").concat(!!s&&"popup_visiable"),onClick:function(e){e.target.classList.contains("popup")&&o()},children:Object(p.jsxs)("div",{className:"popup__content popup__content_".concat(n),children:[Object(p.jsx)("button",{className:"popup__close popup__close_".concat(n," page-link"),type:"button",onClick:o}),Object(p.jsx)("h3",{className:"popup__title popup__title_".concat(n),children:t}),Object(p.jsxs)("form",{className:"popup__form popup__form_".concat(n),name:"popup-".concat(n),noValidate:!0,onSubmit:i,children:[c,Object(p.jsx)("button",{className:"popup__button popup__button_".concat(n),type:"submit",children:a})]})]})})},f=function(e){var t=e.isOpen,n=t.isOpen,a=t.card,c=e.onClose,s=e.onCardDelete;return Object(p.jsx)(O,{id:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",buttonText:"\u0414\u0430",onClose:c,isOpen:n,handleSubmit:function(e){e.preventDefault(),s(a)}})},x=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=Object(a.useRef)();return Object(p.jsx)(O,{id:"change",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"change",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,handleSubmit:function(e){e.preventDefault(),c(s.current.value)},children:Object(p.jsxs)("label",{className:"popup__label popup__label_change",children:[Object(p.jsx)("input",{type:"url",className:"popup__input popup__input_change",id:"input-change",name:"Url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:s,required:!0}),Object(p.jsx)("span",{className:"popup__error",id:"input-change-error"})]})})},v=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,s=Object(a.useState)(""),o=Object(r.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(""),d=Object(r.a)(u,2),_=d[0],h=d[1],b=Object(a.useContext)(j);return Object(a.useEffect)((function(){l(b.name),h(b.about)}),[b]),Object(p.jsxs)(O,{isOpen:t,onClose:n,id:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",handleSubmit:function(e){e.preventDefault(),c({name:i,about:_})},children:[Object(p.jsxs)("label",{className:"popup__label",children:[Object(p.jsx)("input",{type:"text",className:"popup__input popup__input_place_title",id:"input-title",name:"Name",minLength:"2",maxLength:"40",onChange:function(e){l(e.target.value)},value:i||"",required:!0}),Object(p.jsx)("span",{className:"popup__error",id:"input-title-error"})]}),Object(p.jsxs)("label",{className:"popup__label",children:[Object(p.jsx)("input",{type:"text",className:"popup__input popup__input_place_subtitle",id:"input-subtitle",name:"Profession",minLength:"2",maxLength:"200",value:_||"",onChange:function(e){h(e.target.value)},required:!0}),Object(p.jsx)("span",{className:"popup__error",id:"input-subtitle-error"})]})]})},g=function(e){var t=e.onClose,n=e.isOpen,c=e.onAddPlace,s=Object(a.useState)(""),o=Object(r.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(""),d=Object(r.a)(u,2),j=d[0],_=d[1];Object(a.useEffect)((function(){l(""),_("")}),[n]);return Object(p.jsxs)(O,{id:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:n,onClose:t,handleSubmit:function(e){e.preventDefault(),c({name:i,link:j})},children:[Object(p.jsxs)("label",{className:"popup__label popup__label_add",children:[Object(p.jsx)("input",{type:"text",className:"popup__input popup__input_add_name",id:"input-name",name:"Name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",value:i,onChange:function(e){l(e.target.value)},required:!0}),Object(p.jsx)("span",{className:"popup__error",id:"input-name-error"})]}),Object(p.jsxs)("label",{className:"popup__label popup__label_add",children:[Object(p.jsx)("input",{type:"url",className:"popup__input popup__input_add_src",id:"input-url",name:"Url",value:j,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){_(e.target.value)},required:!0}),Object(p.jsx)("span",{className:"popup__error",id:"input-url-error"})]})]})},C=function(e){var t=e.onClose,n=e.card;return Object(p.jsx)("div",{className:"popup popup_img ".concat(n.isOpen?"popup_visiable":null),onClick:function(e){e.target.classList.contains("popup")&&t()},children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("div",{className:"popup__img-container",children:Object(p.jsx)("img",{src:n.element.link,alt:n.element.name,className:"popup__img"})}),Object(p.jsx)("p",{className:"popup__text",children:n.element.name}),Object(p.jsx)("button",{className:"popup__close popup__close_img page-link",onClick:t})]})})},k=n(8),N=n(9),y=new(function(){function e(t){var n=t.url,a=t.headers;Object(k.a)(this,e),this._url=n,this._token=a,this._userUrl="".concat(this._url,"/users/me"),this._cardsUrl="".concat(this._url,"/cards"),this._likesUrl="".concat(this._url,"/cards/likes")}return Object(N.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserData",value:function(){return fetch(this._userUrl,{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._cardsUrl,{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"saveUserChanges",value:function(e){var t=e.name,n=e.about;return fetch(this._userUrl,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"changedAvatar",value:function(e){return fetch("".concat(this._userUrl,"/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"postNewCard",value:function(e){var t=e.name,n=e.link;return fetch(this._cardsUrl,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._cardsUrl,"/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._likesUrl,"/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-20",headers:"424dcfe6-7281-4ce4-8ed0-0018c46e204a"});var S=function(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),o=Object(r.a)(s,2),u=o[0],_=o[1],O=Object(a.useState)(!1),k=Object(r.a)(O,2),N=k[0],S=k[1],U=Object(a.useState)(!1),D=Object(r.a)(U,2),L=D[0],E=D[1],P=Object(a.useState)(!1),T=Object(r.a)(P,2),A=T[0],R=T[1],w=Object(a.useState)({isOpen:!1,card:{}}),z=Object(r.a)(w,2),q=z[0],J=z[1],I=Object(a.useState)({isOpen:!1,element:{}}),F=Object(r.a)(I,2),H=F[0],B=F[1];Object(a.useEffect)((function(){y.getUserData().then((function(e){c(e),console.log(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){y.getInitialCards().then((function(e){_(e)})).catch((function(e){return console.log(e)}))}),[]);var M=function(e){y.deleteCard(e._id).then((function(){_((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)})),V()},V=function(){S(!1),E(!1),R(!1),J(Object(l.a)(Object(l.a)({},q),{},{isOpen:!1})),B(Object(l.a)(Object(l.a)({},H),{},{isOpen:!1}))};return Object(p.jsx)(j.Provider,{value:n,children:Object(p.jsx)(h.Provider,{value:u,children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)(d,{}),Object(p.jsx)(b,{onEditProfile:function(){S(!0)},onAddPlace:function(){E(!0)},onEditAvatar:function(){R(!0)},onConfirmeDelete:function(e){J(Object(l.a)(Object(l.a)({},q),{},{isOpen:!0,card:e}))},onCardClick:function(e){B({isOpen:!0,element:e})},handleCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));y.changeLikeCardStatus(e._id,!t).then((function(t){_((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},handleCardDelete:M}),Object(p.jsx)(v,{isOpen:N,onClose:V,onUpdateUser:function(e){y.saveUserChanges(e).then((function(e){return c(e)})).catch((function(e){console.log(e)})),V()}}),Object(p.jsx)(x,{isOpen:A,onClose:V,onUpdateAvatar:function(e){console.log(e),y.changedAvatar(e).then((function(e){return c(Object(l.a)(Object(l.a)({},n),{},{avatar:e.avatar}))})).catch((function(e){console.log(e)})),V()}}),Object(p.jsx)(g,{isOpen:L,onClose:V,onAddPlace:function(e){console.log(e),y.postNewCard(e).then((function(e){return _([e].concat(Object(i.a)(u)))})).catch((function(e){console.log(e)})),V()}}),Object(p.jsx)(f,{isOpen:q,onClose:V,onCardDelete:M}),Object(p.jsx)(C,{onClose:V,card:H}),Object(p.jsx)(m,{})]})})})})};o.a.render(Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e88b705c.chunk.js.map
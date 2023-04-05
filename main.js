(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function r(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}var o=function(){function t(e){var n=this,o=e.baseUrl,i=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"_likeCard",(function(t){var e=n._baseUrl+"cards/"+t+"/likes",r={method:"PUT",headers:n._headers};return n._getFetch(e,r)})),r(this,"_unlikeCard",(function(t){var e=n._baseUrl+"cards/"+t+"/likes",r={method:"DELETE",headers:n._headers};return n._getFetch(e,r)})),this._baseUrl=o,this._headers=i}var n,o;return n=t,(o=[{key:"_getFetch",value:function(t,e){return fetch(t,e).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"getInfoAboutMe",value:function(){var t=this._baseUrl+"users/me",e={method:"GET",headers:this._headers};return this._getFetch(t,e)}},{key:"getInitialCards",value:function(){var t=this._baseUrl+"cards",e={method:"GET",headers:this._headers};return this._getFetch(t,e)}},{key:"updateProfileInfo",value:function(t,e){var r=this._baseUrl+"users/me",n={method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})};return this._getFetch(r,n)}},{key:"addCard",value:function(t,e){var r=this._baseUrl+"cards",n={method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})};return this._getFetch(r,n)}},{key:"deleteCard",value:function(t){var e=this._baseUrl+"cards/"+t,r={method:"DELETE",headers:this._headers};return this._getFetch(e,r)}},{key:"toggleLike",value:function(t,e){return e?this._likeCard(t):this._unlikeCard(t)}},{key:"updateAvatar",value:function(t){var e=this._baseUrl+"users/me/avatar",r={method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})};return this._getFetch(e,r)}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var a=function(){function t(e,r,n,o,i,u,a,c,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._text=e,this._image=r,this._templateSelector=u,this._handleCardClick=a,this._ownerId=n,this._cardId=o,this._likesArray=i,this._handlerDelete=c,this._handlerLike=l,this._element=this._getTemplate(),this._btnLike=this._element.querySelector(".card__btn-like")}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(".".concat(this._templateSelector)).content.querySelector(".card").cloneNode("true")}},{key:"_checkLiked",value:function(){var t=!1;return this._likesArray.forEach((function(e){"b3e53b729175e9af99c2d405"===e._id&&(t=!0)})),t}},{key:"_setInitialLikes",value:function(){this._checkLiked()&&this._btnLike.classList.add("card__btn-like_active")}},{key:"_toggleLike",value:function(t){t.target.classList.toggle("card__btn-like_active")}},{key:"_setLikeListeners",value:function(){var t=this;this._element.querySelector(".card__btn-like").addEventListener("click",(function(e){e.target.classList.contains("card__btn-like_active")?(t._toggleLike(e),t._handlerLike(t._cardId,!1).then((function(e){t._likesCounter.textContent=e.likes.length})).catch((function(t){return console.log(t)}))):(t._toggleLike(e),t._handlerLike(t._cardId,!0).then((function(e){t._likesCounter.textContent=e.likes.length})).catch((function(t){return console.log(t)})))}))}},{key:"_setDeleteListeners",value:function(){var t=this;this._element.querySelector(".card__delete").addEventListener("click",(function(){t._handlerDelete(t._cardId,t._element)}))}},{key:"_setPopupListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){return t._handleCardClick(t._text,t._image)}))}},{key:"_setEventListeners",value:function(){this._setLikeListeners(),this._setDeleteListeners(),this._setPopupListeners()}},{key:"generateCard",value:function(){return this._likesCounter=this._element.querySelector(".card__like-counter"),this._buttonDelete=this._element.querySelector(".card__delete"),"b3e53b729175e9af99c2d405"!==this._ownerId&&(this._buttonDelete.style.display="none"),this._cardImage=this._element.querySelector(".card__image"),this._cardImage.src=this._image,this._likesCounter.textContent=this._likesArray.length,this._cardImage.alt="фото публикации: ".concat(this._text),this._element.querySelector(".card__title").textContent=this._text,this._setInitialLikes(),this._setEventListeners(),this._element}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function f(t,e,r){return(e=p(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var y=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_showInputError",(function(t,e){t.classList.add(n._inputErrorClass),n._inputError.textContent=e,n._inputError.classList.add(n._errorClass)})),f(this,"_hideInputError",(function(t){t.classList.remove(n._inputErrorClass),n._inputError.classList.remove(n._inputErrorClass),n._inputError.classList.remove(n._errorClass),n._inputError.textContent=""})),f(this,"_checkInputValidity",(function(t){n._inputError=n._formElement.querySelector(".".concat(t.id,"-error")),t.validity.valid?n._hideInputError(t):n._showInputError(t,t.validationMessage)})),this._formSelector=e.formSelector;var o,i,u=(o=Object.values(e),i=6,function(t){if(Array.isArray(t))return t}(o)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(o,i)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());this._formSelector=u[0],this._inputSelector=u[1],this._submitButtonSelector=u[2],this._inactiveButtonClass=u[3],this._inputErrorClass=u[4],this._errorClass=u[5],this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"disableButton",value:function(){this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const b=y;function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var v=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=n,this._renderer=o,this._container=document.querySelector(".".concat(r)),this._renderedCards=[]}var e,r;return e=t,(r=[{key:"renderItems",value:function(){var t=this;this._renderedCards=this._items.map((function(e){return t._renderer(e.name,e.link,e.owner._id,e._id,e.likes)})),this._renderedCards.forEach((function(e){t.addItem(e)}))}},{key:"addItem",value:function(t){this._container.append(t)}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,g(n.key),n)}}function g(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}var S=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=g(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(".".concat(e))}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__close-icon")&&t.close()}))}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(n);if(o){var r=O(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__photo-img"),e._popupText=e._popup.querySelector(".popup__photo-text"),e}return e=u,(r=[{key:"open",value:function(t){var e=t.imageLink,r=t.imageText;this._popupImage.src=e,this._popupImage.alt="фото публикации: ".concat(r),this._popupText.textContent=r,E(O(u.prototype),"open",this).call(this)}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},I.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(n);if(o){var r=x(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleSubmit=e,r._form=r._popup.querySelector(".form"),r._button=r._form.querySelector(".form__button"),r._initialButtonText=r._button.textContent,r._inputsArray=r._popup.querySelectorAll(".form__input"),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._valuesObject={},this._inputsArray.forEach((function(e){t._valuesObject[e.id]=e.value})),this._valuesObject}},{key:"setEventListeners",value:function(){var t=this;I(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues()),t.close()}))}},{key:"setInputValues",value:function(t){this._inputsArray.forEach((function(e){e.value=t[e.id]}))}},{key:"close",value:function(){I(x(u.prototype),"close",this).call(this),this._form.reset()}}])&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}var D=function(){function t(e){var r=e.nameSelector,n=e.jobSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(".".concat(r)),this._profileJob=document.querySelector(".".concat(n)),this._profileAvatar=document.querySelector(".".concat(o))}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{profileName:this._profileName.innerText,profileJob:this._profileJob.innerText}}},{key:"setUserInfo",value:function(t,e){this._profileName.textContent=t,this._profileJob.textContent=e}},{key:"setAvatar",value:function(t){this._profileAvatar.src=t}}])&&R(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,G(n.key),n)}}function F(t,e){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},F(t,e)}function N(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},V.apply(this,arguments)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}function M(t,e,r){return(e=G(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function G(t){var e=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===U(e)?e:String(e)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&F(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(n);if(o){var r=J(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return N(t)}(this,t)});function u(t){var e,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),M(N(r=i.call(this,t)),"deleteCard",(function(){r._apiDeleteCard().then((function(){r._cardEl.remove(),r._cardEl=null,r.close()})).catch((function(t){return console.log(t)}))})),M(N(r),"open",(function(t){var n=t.apiDeleteCard,o=t.cardEl;r._cardEl=o,r._apiDeleteCard=n,r._buttonConfirm.addEventListener("click",r.deleteCard),V((e=N(r),J(u.prototype)),"open",e).call(e)})),r._form=r._popup.querySelector(".form"),r._buttonConfirm=r._form.querySelector(".form__button"),r}return e=u,(r=[{key:"close",value:function(){V(J(u.prototype),"close",this).call(this),this._buttonConfirm.removeEventListener("click",this.deleteCard)}},{key:"setEventListeners",value:function(){var t=this;V(J(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t.close()}))}}])&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S),$=document.querySelector(".profile__btn_type_edit"),z=document.querySelector(".profile__btn_type_add"),K=document.querySelector(".avatar-btn"),Q=document.forms["info-Form"],W=document.forms["card-info-Form"],X=document.forms["avatar-Form"],Y=X.querySelector(".form__button"),Z=Q.querySelector(".form__button"),tt=W.querySelector(".form__button"),et={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_visible"};function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function nt(t,e,r,n,o){return new a(t,e,r,n,o,"cardTemplate",(function(){it.open({imageLink:e,imageText:t})}),(function(t,e){st.open({apiDeleteCard:function(){return ot.deleteCard(t)},cardEl:e})}),(function(t,e){return ot.toggleLike(t,e)})).generateCard()}var ot=new o({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63/",headers:{authorization:"3b0f9781-3d6e-4778-b136-c77e50919461","Content-Type":"application/json"}});Promise.all([ot.getInfoAboutMe(),ot.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return rt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?rt(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];new v({items:i,renderer:nt},"cards").renderItems(),ut.setUserInfo(o.name,o.about),ut.setAvatar(o.avatar)})).catch((function(t){console.log(t)}));var it=new C("photo-popup");it.setEventListeners();var ut=new D({nameSelector:"profile__name",jobSelector:"profile__job",avatarSelector:"profile__img"}),at=new A("publication-popup",(function(t){var e=t["url-input"],r=t["place-input"];tt.disabled=!0,tt.textContent="Сохранение...",ot.addCard(r,e).then((function(t){var n;n=nt(r,e,t.owner._id,t._id,t.likes),document.querySelector(".".concat("cards")).prepend(n)})).catch((function(t){return console.log(t)})).finally((function(){tt.disabled=!1,tt.textContent="Создать"}))}));at.setEventListeners();var ct=new A("profile-popup",(function(t){var e=t["name-input"],r=t["job-input"];ut.setUserInfo(e,r),Z.disabled=!0,Z.textContent="Сохранение...",ot.updateProfileInfo(ut.getUserInfo().profileName,ut.getUserInfo().profileJob).then().catch((function(t){console.log(t)})).finally((function(){Z.disabled=!1,Z.textContent="Сохранить"}))}));ct.setEventListeners();var lt=new A("avatar-popup",(function(t){var e=t["avatar-url-input"];ut.setAvatar(e),Y.disabled=!0,Y.textContent="Сохранение...",ot.updateAvatar(e).then((function(){})).catch((function(t){return console.log(t)})).finally((function(){Y.disabled=!1,Y.textContent="Сохранить"}))}));lt.setEventListeners();var st=new H("delete-popup");st.setEventListeners(),$.addEventListener("click",(function(){var t=ut.getUserInfo(),e=t.profileName,r=t.profileJob;ct.setInputValues({"name-input":e,"job-input":r}),ct.open()})),z.addEventListener("click",(function(){ft.disableButton(),at.open()})),K.addEventListener("click",(function(){lt.open()}));var ft=new b(et,W),pt=new b(et,Q),yt=new b(et,X);ft.enableValidation(),pt.enableValidation(),yt.enableValidation()})();
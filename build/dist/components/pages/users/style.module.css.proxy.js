
export let code = "._Users_1n15j_1 {\n  text-align: center;\n}\n\n._Users_1n15j_1 p {\n    margin: 0.4rem;\n  }\n\n._UsersLogo_1n15j_9 {\n  height: 40vmin;\n  -webkit-animation: _App-logo-spin_1n15j_1 infinite 20s linear;\n          animation: _App-logo-spin_1n15j_1 infinite 20s linear;\n}\n\n._UsersHeader_1n15j_15 {\n  background-color: pink;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n@-webkit-keyframes _App-logo-spin_1n15j_1 {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes _App-logo-spin_1n15j_1 {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}";
let json = {"Users":"_Users_1n15j_1","UsersLogo":"_UsersLogo_1n15j_9","App-logo-spin":"_App-logo-spin_1n15j_1","UsersHeader":"_UsersHeader_1n15j_15"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
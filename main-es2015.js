(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n\n  <header>\n    <h1 class=\"main-header\">Founder Design</h1>\n  </header>\n\n  <main>\n    <h2 class=\"main-sub\">Let's sort out the colour text</h2>\n    <p class=\"main-par\">Below are the recommended primary colours for your logo. Please select one</p>\n    <div class=\"main-container--wrap\">\n      <div class=\"main-container\" *ngFor=\"let item of data\" [ngClass]=\"item.type\" (click)=\"selectedType=item.type\" [style.border]=\"selectedType===item.type?'2px solid black':'2px solid #c1e3fd'\">\n        <div class=\"main-colours\">\n          <div class=\"colours-wrap\">\n            <p class=\"colour-a\"></p>\n            <p class=\"colour-b\"></p>\n            <p class=\"colour-c\"></p>\n            <p class=\"colour-d\"></p>\n          </div>\n          <p class=\"main-parag\">Depth, stability, trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven.</p>\n        </div>\n      </div>\n    </div>\n    <button type=\"button\" class=\"button-general\" [disabled]=\"!selectedType\">NEXT</button>\n  </main>\n\n  <footer>\n    <h1 class=\"head-bottom\">\"It's better to make something that 100 people love than something that 1,000 like\"</h1>\n    <p class=\"author\">- Paul Graham</p>\n  </footer>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-wrapper {\n  max-width: 1600px;\n  min-width: 500px;\n  width: 100%;\n  margin: 0 auto;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.main-header {\n  display: block;\n  font-size: 60px;\n  color: #466ffc;\n  margin: 0;\n  min-height: 80px;\n  background: #fff;\n  line-height: 2;\n}\n\nmain {\n  background: #f5f7f9;\n  padding-bottom: 50px;\n}\n\n.main-sub {\n  font-size: 40px;\n  color: #485574;\n  margin: 0;\n  text-align: center;\n  padding: 20px 0;\n}\n\n.main-par {\n  display: block;\n  margin: 0 auto;\n  font-size: 35px;\n  color: #485574;\n  max-width: 800px;\n  line-height: 1;\n  text-align: center;\n}\n\n.main-container--wrap {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1000px;\n  justify-content: center;\n  padding: 40px 0;\n  margin: 0 auto;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  height: 191px;\n  background: #fff;\n  border-radius: 15px;\n  padding-top: 8px;\n  margin: 0 7px 30px 7px;\n  cursor: pointer;\n}\n\nbutton:disabled,\nbutton[disabled] {\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n\n.colours-wrap {\n  width: 390px;\n  height: 144px;\n  display: flex;\n  margin: 0 auto;\n}\n\n.main-parag {\n  text-align: center;\n  font-size: 16px;\n  color: #0976e5;\n  margin: 0;\n}\n\n.colour-a {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.colour-b {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.colour-c {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.colour-d {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.a .colour-a {\n  background-color: #0d0852;\n}\n\n.a .colour-b {\n  background-color: #173877;\n}\n\n.a .colour-c {\n  background-color: #3f7de1;\n}\n\n.a .colour-d {\n  background-color: #53bcff;\n}\n\n.b .colour-a {\n  background-color: #3e014b;\n}\n\n.b .colour-b {\n  background-color: #630175;\n}\n\n.b .colour-c {\n  background-color: #8f1ed3;\n}\n\n.b .colour-d {\n  background-color: #a808fc;\n}\n\n.c .colour-a {\n  background-color: #084d15;\n}\n\n.c .colour-b {\n  background-color: #177a29;\n}\n\n.c .colour-c {\n  background-color: #43e75f;\n}\n\n.c .colour-d {\n  background-color: #4efe5d;\n}\n\n.d .colour-a {\n  background-color: #0c4d4c;\n}\n\n.d .colour-b {\n  background-color: #1e7869;\n}\n\n.d .colour-c {\n  background-color: #52e9c7;\n}\n\n.d .colour-d {\n  background-color: #68ffd8;\n}\n\n.e .colour-a {\n  background-color: #4c011d;\n}\n\n.e .colour-b {\n  background-color: #77032f;\n}\n\n.e .colour-c {\n  background-color: #e41be3;\n}\n\n.e .colour-d {\n  background-color: #f613fe;\n}\n\n.f .colour-a {\n  background-color: #4f4200;\n}\n\n.f .colour-b {\n  background-color: #7a7304;\n}\n\n.f .colour-c {\n  background-color: #f2e720;\n}\n\n.f .colour-d {\n  background-color: #f9ff3c;\n}\n\n.g .colour-a {\n  background-color: #4d1000;\n}\n\n.g .colour-b {\n  background-color: #772d00;\n}\n\n.g .colour-c {\n  background-color: #e5811b;\n}\n\n.g .colour-d {\n  background-color: #f27d0c;\n}\n\n.h .colour-a {\n  background-color: #333333;\n}\n\n.h .colour-b {\n  background-color: #797979;\n}\n\n.h .colour-c {\n  background-color: #c1c1c1;\n}\n\n.h .colour-d {\n  background-color: #e9e9e9;\n}\n\n.button-general {\n  width: 354px;\n  height: 41px;\n  color: #fff;\n  background: #6383f7;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  border-radius: 31px;\n  margin: 0 auto;\n  display: block;\n}\n\n.button-general:focus {\n  outline: none;\n}\n\n.head-bottom {\n  font-size: 30px;\n  font-weight: 800;\n  color: #656ffc;\n  margin: 0 100px 0 auto;\n  text-align: right;\n  max-width: 399px;\n}\n\n.author {\n  font-size: 28px;\n  font-weight: 500;\n  color: #656ffc;\n  margin: 10px 100px 0 auto;\n  text-align: right;\n}\n\nfooter {\n  background: #f5f7f9;\n  padding-bottom: 50px;\n}\n\n/* Responsive Styles */\n\n@media screen and (max-width: 1024px) {\n  .main-header {\n    font-size: 50px;\n  }\n\n  .main-sub {\n    font-size: 36px;\n    padding: 8px 0;\n    max-width: 508px;\n    text-align: left;\n    margin: 0 auto;\n  }\n\n  .main-par {\n    font-size: 25px;\n    max-width: 508px;\n    text-align: left;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  header {\n    padding: 0 16px;\n  }\n\n  .main-header {\n    font-size: 40px;\n  }\n\n  .main-sub {\n    max-width: 397px;\n    font-size: 27px;\n    padding: 0 16px 12px 16px;\n    margin: 0 auto;\n  }\n\n  .main-par {\n    max-width: 397px;\n    font-size: 20px;\n    padding: 0 16px;\n    margin: 0 auto;\n  }\n\n  .head-bottom {\n    font-size: 27px;\n    margin: 0 30px 0 auto;\n  }\n\n  .author {\n    font-size: 25px;\n    margin: 10px 30px 0 auto;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  header {\n    justify-content: left;\n  }\n\n  .main-header {\n    min-height: 0;\n    height: 70px;\n  }\n\n  .main-sub {\n    margin: 0;\n  }\n\n  .main-par {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFzQm9C10LLQsNC6XFxEZXNrdG9wXFxmb3VuZGVyRGVzaWduL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDT0Y7O0FETEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ1FGOztBRE5BOztFQUVFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDU0Y7O0FEUEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDVUY7O0FEUkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ1dGOztBRFRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDWUY7O0FEVkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNhRjs7QURYQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ2NGOztBRFpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDZUY7O0FEYkE7RUFDRSx5QkFBQTtBQ2dCRjs7QURkQTtFQUNFLHlCQUFBO0FDaUJGOztBRGZBO0VBQ0UseUJBQUE7QUNrQkY7O0FEaEJBO0VBQ0UseUJBQUE7QUNtQkY7O0FEakJBO0VBQ0UseUJBQUE7QUNvQkY7O0FEbEJBO0VBQ0UseUJBQUE7QUNxQkY7O0FEbkJBO0VBQ0UseUJBQUE7QUNzQkY7O0FEcEJBO0VBQ0UseUJBQUE7QUN1QkY7O0FEckJBO0VBQ0UseUJBQUE7QUN3QkY7O0FEdEJBO0VBQ0UseUJBQUE7QUN5QkY7O0FEdkJBO0VBQ0UseUJBQUE7QUMwQkY7O0FEeEJBO0VBQ0UseUJBQUE7QUMyQkY7O0FEekJBO0VBQ0UseUJBQUE7QUM0QkY7O0FEMUJBO0VBQ0UseUJBQUE7QUM2QkY7O0FEM0JBO0VBQ0UseUJBQUE7QUM4QkY7O0FENUJBO0VBQ0UseUJBQUE7QUMrQkY7O0FEN0JBO0VBQ0UseUJBQUE7QUNnQ0Y7O0FEOUJBO0VBQ0UseUJBQUE7QUNpQ0Y7O0FEL0JBO0VBQ0UseUJBQUE7QUNrQ0Y7O0FEaENBO0VBQ0UseUJBQUE7QUNtQ0Y7O0FEakNBO0VBQ0UseUJBQUE7QUNvQ0Y7O0FEbENBO0VBQ0UseUJBQUE7QUNxQ0Y7O0FEbkNBO0VBQ0UseUJBQUE7QUNzQ0Y7O0FEcENBO0VBQ0UseUJBQUE7QUN1Q0Y7O0FEckNBO0VBQ0UseUJBQUE7QUN3Q0Y7O0FEdENBO0VBQ0UseUJBQUE7QUN5Q0Y7O0FEdkNBO0VBQ0UseUJBQUE7QUMwQ0Y7O0FEeENBO0VBQ0UseUJBQUE7QUMyQ0Y7O0FEekNBO0VBQ0UseUJBQUE7QUM0Q0Y7O0FEMUNBO0VBQ0UseUJBQUE7QUM2Q0Y7O0FEM0NBO0VBQ0UseUJBQUE7QUM4Q0Y7O0FENUNBO0VBQ0UseUJBQUE7QUMrQ0Y7O0FEN0NBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ2dERjs7QUQ5Q0E7RUFDRSxhQUFBO0FDaURGOztBRC9DQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNrREY7O0FEaERBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNtREY7O0FEakRBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQ29ERjs7QURsREEsc0JBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUNxREY7O0VEbkRBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ3NERjs7RURwREE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ3VERjtBQUNGOztBRHJEQTtFQUNFO0lBQ0UsZUFBQTtFQ3VERjs7RURyREE7SUFDRSxlQUFBO0VDd0RGOztFRHREQTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsY0FBQTtFQ3lERjs7RUR2REE7SUFDRSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQzBERjs7RUR4REE7SUFDRSxlQUFBO0lBQ0EscUJBQUE7RUMyREY7O0VEekRBO0lBQ0UsZUFBQTtJQUNBLHdCQUFBO0VDNERGO0FBQ0Y7O0FEekRBO0VBQ0U7SUFDRSxxQkFBQTtFQzJERjs7RUR6REE7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQzRERjs7RUQxREE7SUFDRSxTQUFBO0VDNkRGOztFRDNEQTtJQUNFLFNBQUE7RUM4REY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXdyYXBwZXIge1xyXG4gIG1heC13aWR0aDogMTYwMHB4O1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm1haW4taGVhZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgY29sb3I6ICM0NjZmZmM7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMjtcclxufVxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmN2Y5O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcbi5tYWluLXN1YiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiAjNDg1NTc0O1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcbi5tYWluLXBhciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjNDg1NTc0O1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYWluLWNvbnRhaW5lci0td3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweCAwO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDE5MXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIG1hcmdpbjogMCA3cHggMzBweCA3cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCxcclxuYnV0dG9uW2Rpc2FibGVkXXtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbn1cclxuLmNvbG91cnMtd3JhcCB7XHJcbiAgd2lkdGg6IDM5MHB4O1xyXG4gIGhlaWdodDogMTQ0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ubWFpbi1wYXJhZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzA5NzZlNTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbG91ci1hIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5jb2xvdXItYiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29sb3VyLWMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbG91ci1kIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5hIC5jb2xvdXItYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMDg1MjtcclxufVxyXG4uYSAuY29sb3VyLWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzM4Nzc7XHJcbn1cclxuLmEgLmNvbG91ci1jIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3ZGUxO1xyXG59XHJcbi5hIC5jb2xvdXItZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmNmZjtcclxufVxyXG4uYiAuY29sb3VyLWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTAxNGI7XHJcbn1cclxuLmIgLmNvbG91ci1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjMwMTc1O1xyXG59XHJcbi5iIC5jb2xvdXItYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmMWVkMztcclxufVxyXG4uYiAuY29sb3VyLWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhODA4ZmM7XHJcbn1cclxuLmMgLmNvbG91ci1hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg0ZDE1O1xyXG59XHJcbi5jIC5jb2xvdXItYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3N2EyOTtcclxufVxyXG4uYyAuY29sb3VyLWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0M2U3NWY7XHJcbn1cclxuLmMgLmNvbG91ci1kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVmZTVkO1xyXG59XHJcbi5kIC5jb2xvdXItYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGQ0YztcclxufVxyXG4uZCAuY29sb3VyLWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTc4Njk7XHJcbn1cclxuLmQgLmNvbG91ci1jIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJlOWM3O1xyXG59XHJcbi5kIC5jb2xvdXItZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4ZmZkODtcclxufVxyXG4uZSAuY29sb3VyLWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzAxMWQ7XHJcbn1cclxuLmUgLmNvbG91ci1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzcwMzJmO1xyXG59XHJcbi5lIC5jb2xvdXItYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MWJlMztcclxufVxyXG4uZSAuY29sb3VyLWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjEzZmU7XHJcbn1cclxuLmYgLmNvbG91ci1hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0MjAwO1xyXG59XHJcbi5mIC5jb2xvdXItYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhNzMwNDtcclxufVxyXG4uZiAuY29sb3VyLWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmU3MjA7XHJcbn1cclxuLmYgLmNvbG91ci1kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmZjNjO1xyXG59XHJcbi5nIC5jb2xvdXItYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkMTAwMDtcclxufVxyXG4uZyAuY29sb3VyLWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NzJkMDA7XHJcbn1cclxuLmcgLmNvbG91ci1jIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU4MTFiO1xyXG59XHJcbi5nIC5jb2xvdXItZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyN2QwYztcclxufVxyXG4uaCAuY29sb3VyLWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLmggLmNvbG91ci1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk3OTc5O1xyXG59XHJcbi5oIC5jb2xvdXItYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxufVxyXG4uaCAuY29sb3VyLWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbn1cclxuLmJ1dHRvbi1nZW5lcmFsIHtcclxuICB3aWR0aDogMzU0cHg7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM2MzgzZjc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzFweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYnV0dG9uLWdlbmVyYWw6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmhlYWQtYm90dG9tIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogIzY1NmZmYztcclxuICBtYXJnaW46IDAgMTAwcHggMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1heC13aWR0aDogMzk5cHg7XHJcbn1cclxuLmF1dGhvciB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM2NTZmZmM7XHJcbiAgbWFyZ2luOiAxMHB4IDEwMHB4IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY3Zjk7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLm1haW4taGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcbiAgLm1haW4tc3ViIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgbWF4LXdpZHRoOiA1MDhweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLm1haW4tcGFyIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1heC13aWR0aDogNTA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgfVxyXG4gIC5tYWluLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG4gIC5tYWluLXN1YiB7XHJcbiAgICBtYXgtd2lkdGg6IDM5N3B4O1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgcGFkZGluZzogMCAxNnB4IDEycHggMTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAubWFpbi1wYXIge1xyXG4gICAgbWF4LXdpZHRoOiAzOTdweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAuaGVhZC1ib3R0b20ge1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgbWFyZ2luOiAwIDMwcHggMCBhdXRvO1xyXG4gIH1cclxuICAuYXV0aG9yIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbjogMTBweCAzMHB4IDAgYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICB9XHJcbiAgLm1haW4taGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG4gIC5tYWluLXN1YiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5tYWluLXBhciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgbWluLXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4taGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6ICM0NjZmZmM7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kOiAjZjVmN2Y5O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLm1haW4tc3ViIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzQ4NTU3NDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLm1haW4tcGFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjNDg1NTc0O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi1jb250YWluZXItLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAwO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDE5MXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW46IDAgN3B4IDMwcHggN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCxcbmJ1dHRvbltkaXNhYmxlZF0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICBjb2xvcjogIzY2NjY2Njtcbn1cblxuLmNvbG91cnMtd3JhcCB7XG4gIHdpZHRoOiAzOTBweDtcbiAgaGVpZ2h0OiAxNDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tYWluLXBhcmFnIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDk3NmU1O1xuICBtYXJnaW46IDA7XG59XG5cbi5jb2xvdXItYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbG91ci1iIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29sb3VyLWMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5jb2xvdXItZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmEgLmNvbG91ci1hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMDg1Mjtcbn1cblxuLmEgLmNvbG91ci1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3Mzg3Nztcbn1cblxuLmEgLmNvbG91ci1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmN2RlMTtcbn1cblxuLmEgLmNvbG91ci1kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmNmZjtcbn1cblxuLmIgLmNvbG91ci1hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlMDE0Yjtcbn1cblxuLmIgLmNvbG91ci1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzMDE3NTtcbn1cblxuLmIgLmNvbG91ci1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmMWVkMztcbn1cblxuLmIgLmNvbG91ci1kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4MDhmYztcbn1cblxuLmMgLmNvbG91ci1hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NGQxNTtcbn1cblxuLmMgLmNvbG91ci1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3N2EyOTtcbn1cblxuLmMgLmNvbG91ci1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzZTc1Zjtcbn1cblxuLmMgLmNvbG91ci1kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlZmU1ZDtcbn1cblxuLmQgLmNvbG91ci1hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGQ0Yztcbn1cblxuLmQgLmNvbG91ci1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlNzg2OTtcbn1cblxuLmQgLmNvbG91ci1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyZTljNztcbn1cblxuLmQgLmNvbG91ci1kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4ZmZkODtcbn1cblxuLmUgLmNvbG91ci1hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjMDExZDtcbn1cblxuLmUgLmNvbG91ci1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3MDMyZjtcbn1cblxuLmUgLmNvbG91ci1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MWJlMztcbn1cblxuLmUgLmNvbG91ci1kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2MTNmZTtcbn1cblxuLmYgLmNvbG91ci1hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNDIwMDtcbn1cblxuLmYgLmNvbG91ci1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhNzMwNDtcbn1cblxuLmYgLmNvbG91ci1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZTcyMDtcbn1cblxuLmYgLmNvbG91ci1kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmYzYztcbn1cblxuLmcgLmNvbG91ci1hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkMTAwMDtcbn1cblxuLmcgLmNvbG91ci1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3MmQwMDtcbn1cblxuLmcgLmNvbG91ci1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ODExYjtcbn1cblxuLmcgLmNvbG91ci1kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyN2QwYztcbn1cblxuLmggLmNvbG91ci1hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbn1cblxuLmggLmNvbG91ci1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5Nzk3OTtcbn1cblxuLmggLmNvbG91ci1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcbn1cblxuLmggLmNvbG91ci1kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbn1cblxuLmJ1dHRvbi1nZW5lcmFsIHtcbiAgd2lkdGg6IDM1NHB4O1xuICBoZWlnaHQ6IDQxcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNjM4M2Y3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5idXR0b24tZ2VuZXJhbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5oZWFkLWJvdHRvbSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICM2NTZmZmM7XG4gIG1hcmdpbjogMCAxMDBweCAwIGF1dG87XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXgtd2lkdGg6IDM5OXB4O1xufVxuXG4uYXV0aG9yIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzY1NmZmYztcbiAgbWFyZ2luOiAxMHB4IDEwMHB4IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY3Zjk7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5tYWluLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG5cbiAgLm1haW4tc3ViIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgbWF4LXdpZHRoOiA1MDhweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLm1haW4tcGFyIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWF4LXdpZHRoOiA1MDhweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxuXG4gIC5tYWluLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG5cbiAgLm1haW4tc3ViIHtcbiAgICBtYXgtd2lkdGg6IDM5N3B4O1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICBwYWRkaW5nOiAwIDE2cHggMTJweCAxNnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLm1haW4tcGFyIHtcbiAgICBtYXgtd2lkdGg6IDM5N3B4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuaGVhZC1ib3R0b20ge1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICBtYXJnaW46IDAgMzBweCAwIGF1dG87XG4gIH1cblxuICAuYXV0aG9yIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICBoZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgfVxuXG4gIC5tYWluLWhlYWRlciB7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cblxuICAubWFpbi1zdWIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5tYWluLXBhciB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'founderDesign';
        this.data = [{ type: "a" }, { type: "b" }, { type: "c" }, { type: "d" }, { type: "e" }, { type: "f" }, { type: "g" }, { type: "h" }];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Левак\Desktop\founderDesign\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
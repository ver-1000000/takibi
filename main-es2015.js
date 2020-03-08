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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _flame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flame */ "./src/app/flame.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _flame_flame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flame/flame.component */ "./src/app/flame/flame.component.ts");





function AppComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent__svg_g_1_Template__svg_g_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const flame_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r2.remove(flame_r1); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flame_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate2"]("transform", "translate(", flame_r1.x, ", ", flame_r1.y, ")");
} }
/** SVGをクリックした時に拡縮されたキャンバスに整合性を取った座標を返す。 */
const getPoint = (mouseEvent) => {
    const svg = mouseEvent.target;
    const { width, height } = svg.viewBox.baseVal;
    const { clientWidth, clientHeight } = svg;
    return {
        x: (width / clientWidth) * mouseEvent.offsetX,
        y: (height / clientHeight) * mouseEvent.offsetY,
    };
};
class AppComponent {
    constructor() {
        this.flames = [];
    }
    add(e) {
        const { x, y } = getPoint(e);
        this.flames.push(new _flame__WEBPACK_IMPORTED_MODULE_1__["Flame"]({ birthDate: new Date(), x, y }));
    }
    remove(flame) {
        this.flames.splice(this.flames.indexOf(flame), 1);
    }
    trackByFn(i, item) {
        return item;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["viewBox", "0 0 800 800", 1, "canvas", 3, "click"], ["appFlame", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["appFlame", "", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template__svg_svg_click_0_listener($event) { return ctx.add($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent__svg_g_1_Template, 1, 2, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flames)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _flame_flame_component__WEBPACK_IMPORTED_MODULE_3__["FlameComponent"]], styles: ["[_nghost-%COMP%] {\n  align-content: center;\n  background: #000;\n  display: -webkit-box;\n  display: flex;\n  height: 100vh;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.canvas[_ngcontent-%COMP%] {\n  background: #000;\n  height: 100%;\n  margin: auto;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3Rha2liaS90YWtpYmkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhbnZhcyB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cbiIsIjpob3N0IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhbnZhcyB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _flame_flame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flame/flame.component */ "./src/app/flame/flame.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _flame_flame_component__WEBPACK_IMPORTED_MODULE_5__["FlameComponent"],
        _safe_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _flame_flame_component__WEBPACK_IMPORTED_MODULE_5__["FlameComponent"],
                    _safe_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/flame.ts":
/*!**************************!*\
  !*** ./src/app/flame.ts ***!
  \**************************/
/*! exports provided: Flame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flame", function() { return Flame; });
/**
 * 炎クラス。
 *
 * TODO: birthDateが規定の時間を超えると消火される。
 */
class Flame {
    constructor(opt) {
        this.birthDate = opt.birthDate;
        this.x = opt.x;
        this.y = opt.y;
    }
}


/***/ }),

/***/ "./src/app/flame/flame.component.ts":
/*!******************************************!*\
  !*** ./src/app/flame/flame.component.ts ***!
  \******************************************/
/*! exports provided: FlameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlameComponent", function() { return FlameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = ["appFlame", ""];
function FlameComponent__svg_circle_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
} if (rf & 2) {
    const seed_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-duration", ctx_r4.DURATION, "ms")("animation-delay", i_r6 * ctx_r4.DURATION / ctx_r4.fireSeeds.length, "ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("fill", "url(#", ctx_r4.id, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r4.VOLUME)("cx", seed_r5.cx)("cy", seed_r5.cy);
} }
/** 火種の基準大きさ。 */
const VOLUME = 30;
/** 火種の数。 */
const SIZE = 40;
/** 炎のアニメーション寿命。 */
const DURATION = 1500;
/** UUIDを取得する。 */
const getUUID = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
});
/** 火種群を作成する。 */
const getFireSeeds = () => {
    const random = () => Math.floor(Math.random() * VOLUME);
    return [...Array(SIZE)].map((_, i) => ({
        id: i,
        cx: random(),
        cy: random(),
    }));
};
/**
 * 炎コンポーネント。
 */
class FlameComponent {
    constructor() {
        this.id = getUUID();
        this.fireSeeds = getFireSeeds();
        this.VOLUME = VOLUME;
        this.DURATION = DURATION;
    }
    trackByFn(i, item) {
        return item.id;
    }
}
FlameComponent.ɵfac = function FlameComponent_Factory(t) { return new (t || FlameComponent)(); };
FlameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlameComponent, selectors: [["", "appFlame", ""]], attrs: _c0, decls: 5, vars: 3, consts: [["offset", "0", "stop-color", "hsl(10, 90%, 80%)"], ["offset", ".4", "stop-color", "hsl(20, 90%, 60%)"], ["offset", "1", "stop-color", "hsl(40, 90%, 0%)"], [3, "animationDuration", "animationDelay", 4, "ngFor", "ngForOf", "ngForTrackBy"]], template: function FlameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "radialGradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "stop", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FlameComponent__svg_circle_4_Template, 1, 8, "circle", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fireSeeds)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["circle[_ngcontent-%COMP%] {\n  mix-blend-mode: screen;\n  -webkit-animation-name: particle;\n          animation-name: particle;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  opacity: 0;\n}\n\n@-webkit-keyframes particle {\n  0% {\n    -webkit-transform: scale(1, 0.7) translate(0, 0);\n            transform: scale(1, 0.7) translate(0, 0);\n    opacity: 0;\n  }\n  8% {\n    -webkit-transform: scale(1, 1.3) translate(-1%, -3%);\n            transform: scale(1, 1.3) translate(-1%, -3%);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.4) translate(0, -30%);\n            transform: scale(0.4) translate(0, -30%);\n    opacity: 0;\n  }\n}\n\n@keyframes particle {\n  0% {\n    -webkit-transform: scale(1, 0.7) translate(0, 0);\n            transform: scale(1, 0.7) translate(0, 0);\n    opacity: 0;\n  }\n  8% {\n    -webkit-transform: scale(1, 1.3) translate(-1%, -3%);\n            transform: scale(1, 1.3) translate(-1%, -3%);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.4) translate(0, -30%);\n            transform: scale(0.4) translate(0, -30%);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3Rha2liaS90YWtpYmkvc3JjL2FwcC9mbGFtZS9mbGFtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmxhbWUvZmxhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxnREFBQTtZQUFBLHdDQUFBO0lBQ0EsVUFBQTtFQ0NGO0VERUE7SUFDRSxvREFBQTtZQUFBLDRDQUFBO0lBQ0EsVUFBQTtFQ0FGO0VER0E7SUFDRSxnREFBQTtZQUFBLHdDQUFBO0lBQ0EsVUFBQTtFQ0RGO0FBQ0Y7O0FEYkE7RUFDRTtJQUNFLGdEQUFBO1lBQUEsd0NBQUE7SUFDQSxVQUFBO0VDQ0Y7RURFQTtJQUNFLG9EQUFBO1lBQUEsNENBQUE7SUFDQSxVQUFBO0VDQUY7RURHQTtJQUNFLGdEQUFBO1lBQUEsd0NBQUE7SUFDQSxVQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZsYW1lL2ZsYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2lyY2xlIHtcbiAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgYW5pbWF0aW9uLW5hbWU6IHBhcnRpY2xlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuQGtleWZyYW1lcyBwYXJ0aWNsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDAuNykgdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA4JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjMpIHRyYW5zbGF0ZSgtMSUsIC0zJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KSB0cmFuc2xhdGUoMCwgLTMwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuIiwiY2lyY2xlIHtcbiAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgYW5pbWF0aW9uLW5hbWU6IHBhcnRpY2xlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuQGtleWZyYW1lcyBwYXJ0aWNsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDAuNykgdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgOCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMS4zKSB0cmFuc2xhdGUoLTElLCAtMyUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpIHRyYW5zbGF0ZSgwLCAtMzAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[appFlame]',
                templateUrl: './flame.component.html',
                styleUrls: ['./flame.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/**
 * DOM$B$N%W%m%Q%F%#$K!"(BXSS$B@H<e@-$N2DG=@-$r;}$DJ8;zNs$r%5%K%?%$%:$9$k!#(B
 *
 * SEE ALSO: {@link https://angular.io/guide/security#xss}
 */



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        value = String(value);
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Unable to bypass security for invalid type: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safe' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/takibi/takibi/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
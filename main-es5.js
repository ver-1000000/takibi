function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _flame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./flame */
    "./src/app/flame.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _flame_flame_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./flame/flame.component */
    "./src/app/flame/flame.component.ts");
    /* harmony import */


    var _key_track_by_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./key-track-by.pipe */
    "./src/app/key-track-by.pipe.ts");

    function AppComponent__svg_g_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "g", 2);
      }

      if (rf & 2) {
        var flame_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate2"]("transform", "translate(", flame_r1.x, ", ", flame_r1.y, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hue", flame_r1.hue);
      }
    }

    var ERR_MSG = 'Firebaseでなにか問題が発生したのかもしれません。 しばらく経ってから再度更新して下さい。';

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(angularFireAuth, angularFirestore, cdr) {
        _classCallCheck(this, AppComponent);

        this.angularFireAuth = angularFireAuth;
        this.angularFirestore = angularFirestore;
        this.cdr = cdr;
        this.flameCollection = this.angularFirestore.collection('flames');
        this.flames$ = this.flameCollection.valueChanges();
      }
      /**
       * - 古い炎を削除する。
       * - 匿名ログインし、ドキュメントを準備する。
       */


      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.angularFireAuth.signInAnonymously();
          this.angularFireAuth.onAuthStateChanged(function (user) {
            if (user == null) {
              alert(ERR_MSG);
              return;
            }

            _this.flameDocument = _this.flameCollection.doc(user.uid);

            _this.flameDocument.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return new _flame__WEBPACK_IMPORTED_MODULE_3__["Flame"](Object.assign(Object.assign({}, value), {
                id: user.uid
              }));
            })).subscribe(function (value) {
              return _this.selfFlame = value;
            });

            _this.deleteOneMinuteAgoCollection();
          });
        }
        /** 最終更新日が1分前以前のコレクションを全て削除する。 */

      }, {
        key: "deleteOneMinuteAgoCollection",
        value: function deleteOneMinuteAgoCollection() {
          var _this2 = this;

          return this.angularFirestore.collection('flames', function (ref) {
            var oneMinuteAgo = function () {
              var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
              return new Date(d.setMinutes(d.getMinutes() - 1));
            }();

            return ref.where('updatedAt', '<=', oneMinuteAgo);
          }).get().subscribe(function (querySnapshot) {
            var batch = _this2.angularFirestore.firestore.batch();

            querySnapshot.forEach(function (doc) {
              return batch.delete(doc.ref);
            });
            return batch.commit();
          });
        }
        /** SVGクリック時に座標を決定し、炎の追加もしくは移動を行う。 */

      }, {
        key: "detectPoint",
        value: function detectPoint(e) {
          var _ref = this.selfFlame || {},
              id = _ref.id,
              hue = _ref.hue;

          this.selfFlame = new _flame__WEBPACK_IMPORTED_MODULE_3__["Flame"]({
            id: id,
            hue: hue,
            x: e.x,
            y: e.y
          });

          if (this.flameDocument) {
            this.flameDocument.set(Object.assign({}, this.selfFlame), {
              merge: true
            });
          }

          this.cdr.markForCheck();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 6,
      consts: [[1, "canvas", 3, "click"], ["appFlame", "", "class", "flame", 3, "hue", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["appFlame", "", 1, "flame", 3, "hue"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template__svg_svg_click_0_listener($event) {
            return ctx.detectPoint($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent__svg_g_1_Template, 1, 3, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyTrackBy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.flames$))("ngForTrackBy", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "id"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _flame_flame_component__WEBPACK_IMPORTED_MODULE_7__["FlameComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _key_track_by_pipe__WEBPACK_IMPORTED_MODULE_8__["KeyTrackByPipe"]],
      styles: ["[_nghost-%COMP%] {\n  align-content: center;\n  background: #000;\n  display: -webkit-box;\n  display: flex;\n  height: 100vh;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.canvas[_ngcontent-%COMP%] {\n  background: #000;\n  height: 100%;\n  margin: auto;\n  width: 100%;\n}\n\n.flame[_ngcontent-%COMP%] {\n  -webkit-transition: -webkit-transform ease 300ms;\n  transition: -webkit-transform ease 300ms;\n  transition: transform ease 300ms;\n  transition: transform ease 300ms, -webkit-transform ease 300ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3Rha2liaS90YWtpYmkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdEQUFBO0VBQUEsd0NBQUE7RUFBQSxnQ0FBQTtFQUFBLDhEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYW52YXMge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGFtZSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlIDMwMG1zO1xufVxuIiwiOmhvc3Qge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FudmFzIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxhbWUge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZSAzMDBtcztcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/analytics */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _flame_flame_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./flame/flame.component */
    "./src/app/flame/flame.component.ts");
    /* harmony import */


    var _safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./safe.pipe */
    "./src/app/safe.pipe.ts");
    /* harmony import */


    var _key_track_by_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./key-track-by.pipe */
    "./src/app/key-track-by.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
      }), _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_4__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _flame_flame_component__WEBPACK_IMPORTED_MODULE_8__["FlameComponent"], _safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"], _key_track_by_pipe__WEBPACK_IMPORTED_MODULE_10__["KeyTrackByPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_4__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _flame_flame_component__WEBPACK_IMPORTED_MODULE_8__["FlameComponent"], _safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"], _key_track_by_pipe__WEBPACK_IMPORTED_MODULE_10__["KeyTrackByPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
          }), _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_4__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/flame.ts":
  /*!**************************!*\
    !*** ./src/app/flame.ts ***!
    \**************************/

  /*! exports provided: Flame */

  /***/
  function srcAppFlameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Flame", function () {
      return Flame;
    });
    /** 炎クラス。 */


    var Flame = function Flame() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Flame);

      var _a, _b, _c, _d;

      this.id = (_a = opt.id, _a !== null && _a !== void 0 ? _a : null);
      this.updatedAt = new Date();
      this.hue = (_b = opt.hue, _b !== null && _b !== void 0 ? _b : Math.ceil(Math.random() * 360));
      this.x = (_c = opt.x, _c !== null && _c !== void 0 ? _c : 0);
      this.y = (_d = opt.y, _d !== null && _d !== void 0 ? _d : 0);
    };
    /***/

  },

  /***/
  "./src/app/flame/flame.component.ts":
  /*!******************************************!*\
    !*** ./src/app/flame/flame.component.ts ***!
    \******************************************/

  /*! exports provided: FlameComponent */

  /***/
  function srcAppFlameFlameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlameComponent", function () {
      return FlameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _key_track_by_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../key-track-by.pipe */
    "./src/app/key-track-by.pipe.ts");

    var _c0 = ["appFlame", ""];

    function FlameComponent__svg_circle_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
      }

      if (rf & 2) {
        var seed_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-duration", ctx_r2.DURATION, "ms")("animation-delay", i_r4 * ctx_r2.DURATION / ctx_r2.fireSeeds.length, "ms");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("fill", "url(#", ctx_r2.id, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r2.VOLUME)("cx", seed_r3.cx)("cy", seed_r3.cy);
      }
    }
    /** 火種の基準大きさ。 */


    var VOLUME = 30;
    /** 火種の数。 */

    var SIZE = 40;
    /** 炎のアニメーション寿命。 */

    var DURATION = 1500;
    /** UUIDを取得する。 */

    var getUUID = function getUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    };
    /** 火種群を作成する。 */


    var getFireSeeds = function getFireSeeds() {
      var random = function random() {
        return Math.ceil(Math.random() * VOLUME);
      };

      return _toConsumableArray(Array(SIZE)).map(function (_, i) {
        return {
          id: i,
          cx: random(),
          cy: random()
        };
      });
    };
    /**
     * 炎コンポーネント。
     */


    var FlameComponent = function FlameComponent() {
      _classCallCheck(this, FlameComponent);

      this.id = getUUID();
      this.fireSeeds = getFireSeeds();
      this.VOLUME = VOLUME;
      this.DURATION = DURATION;
      this.hue = 0;
    };

    FlameComponent.ɵfac = function FlameComponent_Factory(t) {
      return new (t || FlameComponent)();
    };

    FlameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlameComponent,
      selectors: [["", "appFlame", ""]],
      inputs: {
        hue: "hue"
      },
      attrs: _c0,
      decls: 6,
      vars: 6,
      consts: [["offset", "0", "stop-color", "hsl(10, 90%, 80%)"], ["offset", ".4"], ["offset", "1", "stop-color", "hsl(40, 90%, 0%)"], [3, "animationDuration", "animationDelay", 4, "ngFor", "ngForOf", "ngForTrackBy"]],
      template: function FlameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "radialGradient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "stop", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FlameComponent__svg_circle_4_Template, 1, 8, "circle", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "keyTrackBy");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("stop-color", "hsl(", ctx.hue, ", 90%, 60%)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fireSeeds)("ngForTrackBy", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "id"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_key_track_by_pipe__WEBPACK_IMPORTED_MODULE_2__["KeyTrackByPipe"]],
      styles: ["circle[_ngcontent-%COMP%] {\n  mix-blend-mode: screen;\n  -webkit-animation-name: particle;\n          animation-name: particle;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  opacity: 0;\n  will-change: transform, opacity;\n}\n\n@-webkit-keyframes particle {\n  0% {\n    -webkit-transform: scale(1, 0.7) translate(0, 0);\n            transform: scale(1, 0.7) translate(0, 0);\n    opacity: 0;\n  }\n  8% {\n    -webkit-transform: scale(1, 1.3) translate(-1%, -3%);\n            transform: scale(1, 1.3) translate(-1%, -3%);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.4) translate(0, -30%);\n            transform: scale(0.4) translate(0, -30%);\n    opacity: 0;\n  }\n}\n\n@keyframes particle {\n  0% {\n    -webkit-transform: scale(1, 0.7) translate(0, 0);\n            transform: scale(1, 0.7) translate(0, 0);\n    opacity: 0;\n  }\n  8% {\n    -webkit-transform: scale(1, 1.3) translate(-1%, -3%);\n            transform: scale(1, 1.3) translate(-1%, -3%);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.4) translate(0, -30%);\n            transform: scale(0.4) translate(0, -30%);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3Rha2liaS90YWtpYmkvc3JjL2FwcC9mbGFtZS9mbGFtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmxhbWUvZmxhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGdEQUFBO1lBQUEsd0NBQUE7SUFDQSxVQUFBO0VDQ0Y7RURFQTtJQUNFLG9EQUFBO1lBQUEsNENBQUE7SUFDQSxVQUFBO0VDQUY7RURHQTtJQUNFLGdEQUFBO1lBQUEsd0NBQUE7SUFDQSxVQUFBO0VDREY7QUFDRjs7QURiQTtFQUNFO0lBQ0UsZ0RBQUE7WUFBQSx3Q0FBQTtJQUNBLFVBQUE7RUNDRjtFREVBO0lBQ0Usb0RBQUE7WUFBQSw0Q0FBQTtJQUNBLFVBQUE7RUNBRjtFREdBO0lBQ0UsZ0RBQUE7WUFBQSx3Q0FBQTtJQUNBLFVBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmxhbWUvZmxhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjaXJjbGUge1xuICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICBhbmltYXRpb24tbmFtZTogcGFydGljbGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xufVxuXG5Aa2V5ZnJhbWVzIHBhcnRpY2xlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMC43KSB0cmFuc2xhdGUoMCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDglIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEuMykgdHJhbnNsYXRlKC0xJSwgLTMlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpIHRyYW5zbGF0ZSgwLCAtMzAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4iLCJjaXJjbGUge1xuICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICBhbmltYXRpb24tbmFtZTogcGFydGljbGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xufVxuXG5Aa2V5ZnJhbWVzIHBhcnRpY2xlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMC43KSB0cmFuc2xhdGUoMCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA4JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjMpIHRyYW5zbGF0ZSgtMSUsIC0zJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCkgdHJhbnNsYXRlKDAsIC0zMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[appFlame]',
          templateUrl: './flame.component.html',
          styleUrls: ['./flame.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, {
        hue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/key-track-by.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/key-track-by.pipe.ts ***!
    \**************************************/

  /*! exports provided: KeyTrackByPipe */

  /***/
  function srcAppKeyTrackByPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyTrackByPipe", function () {
      return KeyTrackByPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * `{ id: number, name: string }[]`のような、ユニークな値を持つオブジェクトの配列に対して、
     * 簡単に{@link https://angular.io/api/core/TrackByFunction TrackByFunction}を設定するためのパイプ。
     *
     * @example
     * <!-- `{ id: number, name: string }[]` -->
     * <div *ngFor="let item of items; trackBy: 'id' | keyTrackBy">{{ item.id }}: {{ item.name }}</div>
     *
     * <!-- `{ id: number | null, name: string | null }[]` 実際は↑の型じゃなくて←みたいな型になりがちだよね、、、 -->
     * <input name="name" [(ngModel)]="item.name" *ngFor="let item of items; trackBy: null | keyTrackBy">
     */


    var KeyTrackByPipe =
    /*#__PURE__*/
    function () {
      function KeyTrackByPipe() {
        _classCallCheck(this, KeyTrackByPipe);
      }

      _createClass(KeyTrackByPipe, [{
        key: "transform",
        value: function transform(key) {
          return function (i, item) {
            return key == null ? item : item[key];
          };
        }
      }]);

      return KeyTrackByPipe;
    }();

    KeyTrackByPipe.ɵfac = function KeyTrackByPipe_Factory(t) {
      return new (t || KeyTrackByPipe)();
    };

    KeyTrackByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "keyTrackBy",
      type: KeyTrackByPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyTrackByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'keyTrackBy'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/safe.pipe.ts":
  /*!******************************!*\
    !*** ./src/app/safe.pipe.ts ***!
    \******************************/

  /*! exports provided: SafePipe */

  /***/
  function srcAppSafePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
      return SafePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /**
     * DOM$B$N%W%m%Q%F%#$K!"(BXSS$B@H<e@-$N2DG=@-$r;}$DJ8;zNs$r%5%K%?%$%:$9$k!#(B
     *
     * SEE ALSO: {@link https://angular.io/guide/security#xss}
     */


    var SafePipe =
    /*#__PURE__*/
    function () {
      function SafePipe(sanitizer) {
        _classCallCheck(this, SafePipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafePipe, [{
        key: "transform",
        value: function transform(value, type) {
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
              throw new Error("Unable to bypass security for invalid type: ".concat(type));
          }
        }
      }]);

      return SafePipe;
    }();

    SafePipe.ɵfac = function SafePipe_Factory(t) {
      return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safe",
      type: SafePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safe'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.firebase.ts":
  /*!**************************************************!*\
    !*** ./src/environments/environment.firebase.ts ***!
    \**************************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentFirebaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      apiKey: 'AIzaSyAHN_oPqrdltONR8VVxMXe6iVZfgJDehhU',
      authDomain: 'takibi-2d9a2.firebaseapp.com',
      databaseURL: 'https://takibi-2d9a2.firebaseio.com',
      projectId: 'takibi-2d9a2',
      storageBucket: 'takibi-2d9a2.appspot.com',
      messagingSenderId: '751221724633',
      appId: '1:751221724633:web:e4c3a5a3a8def2d05575c8',
      measurementId: 'G-HQJF1V5Z9'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var _environment_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./environment.firebase */
    "./src/environments/environment.firebase.ts"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      firebase: _environment_firebase__WEBPACK_IMPORTED_MODULE_0__["environment"],
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/takibi/takibi/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
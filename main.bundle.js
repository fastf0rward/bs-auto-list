webpackJsonp([1,4],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 113;


/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(145);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(208),
        styles: [__webpack_require__(200)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grocery_list_grocery_list_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__grocery_list_grocery_list_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shop_shop_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__receipt_receipt_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__receipt_camera_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: 'receipt', component: __WEBPACK_IMPORTED_MODULE_14__receipt_receipt_component__["a" /* ReceiptComponent */] },
    { path: 'grocery-list', component: __WEBPACK_IMPORTED_MODULE_8__grocery_list_grocery_list_component__["a" /* GroceryListComponent */] },
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_13__shop_shop_component__["a" /* ShopComponent */] },
    { path: '', redirectTo: '/receipt', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__grocery_list_grocery_list_component__["a" /* GroceryListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shop_shop_component__["a" /* ShopComponent */],
            __WEBPACK_IMPORTED_MODULE_14__receipt_receipt_component__["a" /* ReceiptComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["FlexLayoutModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__grocery_list_grocery_list_service__["a" /* GroceryListService */],
            __WEBPACK_IMPORTED_MODULE_15__receipt_camera_service__["a" /* CameraService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grocery_list_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroceryListComponent = (function () {
    function GroceryListComponent(groceryListService) {
        var _this = this;
        this.groceryListService = groceryListService;
        this.showLoader = true;
        this.groceryListService.products.subscribe(function (_products) {
            _this.products = _products;
        });
        this.groceryListService.suggestions.subscribe(function (_suggestions) {
            _this.suggestions = _suggestions;
        });
        // always show loader for 1s
        setTimeout(function () {
            _this.showLoader = false;
        }, 1000);
    }
    GroceryListComponent.prototype.ngOnInit = function () {
    };
    return GroceryListComponent;
}());
GroceryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-grocery-list',
        template: __webpack_require__(209),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__grocery_list_service__["a" /* GroceryListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__grocery_list_service__["a" /* GroceryListService */]) === "function" && _a || Object])
], GroceryListComponent);

var _a;
//# sourceMappingURL=grocery-list.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__(210),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camera_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReceiptComponent = (function () {
    function ReceiptComponent(cameraService) {
        this.cameraService = cameraService;
        this.showVideo = false;
    }
    ReceiptComponent.prototype.capture = function () {
        this.context.drawImage(this.videoPlayer.nativeElement, this.canvasOffsetLeft, this.canvasOffsetTop, this.canvasWidth, this.canvasHeight, 0, 0, this.canvasWidth, this.canvasHeight);
        this.showVideo = true;
    };
    ReceiptComponent.prototype.getGeolocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (x) {
                _this.longitude = x.coords.longitude;
                _this.latitude = x.coords.latitude;
            });
        }
    };
    ReceiptComponent.prototype.saveImage = function () {
        this.showVideo = false;
        var imgData = this.canvas.nativeElement.toDataURL('img/png');
        imgData = imgData.replace('data:image/png;base64,', '');
        var postData = JSON.stringify({
            'ImageBase64String': imgData,
            'id': 3,
            'identifier': this.identifier,
            'comment': this.comment,
            'longitude': this.longitude,
            'latitude': this.latitude
        });
    };
    ReceiptComponent.prototype.getPreferredDevice = function () {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            console.log("enumerateDevices() not supported.");
            return;
        }
        // List cameras and microphones.
        navigator.mediaDevices.enumerateDevices()
            .then(function (devices) {
            devices.forEach(function (device) {
                console.log(device.kind + ": " + device.label +
                    " id = " + device.deviceId);
            });
            return devices[0];
        })
            .catch(function (err) {
            console.log(err.name + ": " + err.message);
            return false;
        });
    };
    ReceiptComponent.prototype.ngOnInit = function () {
        // select back camera
        this.preferredDevice = this.getPreferredDevice();
        // set camera constraints
        this.constraints = {
            video: {
                optional: [{ sourceId: this.preferredDevice }]
            }
        };
        this.width = 500 / 240 * 320;
        this.height = 500;
        this.canvasWidth = 240;
        this.canvasHeight = 464;
        this.navHeight = 57;
        this.canvasOffsetLeft = 0.5 * this.width - 0.5 * this.canvasWidth;
        this.canvasOffsetTop = (this.height - this.canvasHeight) * 0.5;
    };
    ReceiptComponent.prototype.ngAfterViewInit = function () {
        // Get current geolocation
        //this.getGeolocation();
        var _this = this;
        this.context = this.canvas.nativeElement.getContext('2d');
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia(this.constraints)
                .then(function (stream) {
                _this.videoPlayer.nativeElement.src = window.URL.createObjectURL(stream);
                _this.videoPlayer.nativeElement.play();
            });
        }
    };
    return ReceiptComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('videoplayer'),
    __metadata("design:type", Object)
], ReceiptComponent.prototype, "videoPlayer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('canvas'),
    __metadata("design:type", Object)
], ReceiptComponent.prototype, "canvas", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], ReceiptComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], ReceiptComponent.prototype, "height", void 0);
ReceiptComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-receipt',
        template: __webpack_require__(211),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__camera_service__["a" /* CameraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__camera_service__["a" /* CameraService */]) === "function" && _a || Object])
], ReceiptComponent);

var _a;
//# sourceMappingURL=receipt.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grocery_list_grocery_list_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopComponent = (function () {
    function ShopComponent(groceryListService) {
        var _this = this;
        this.groceryListService = groceryListService;
        groceryListService.products.subscribe(function (_products) {
            _this.products = _products;
        });
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    return ShopComponent;
}());
ShopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-shop',
        template: __webpack_require__(212),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__grocery_list_grocery_list_service__["a" /* GroceryListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__grocery_list_grocery_list_service__["a" /* GroceryListService */]) === "function" && _a || Object])
], ShopComponent);

var _a;
//# sourceMappingURL=shop.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".mat-tab-link md-icon.material-icons.mat-icon {\n  vertical-align: middle;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".bg-suggestion-list {\n  color: gray;\n}\n\n.bg-suggestion-list .mat-list-item {\n  color: lightgray;\n}\n\n.bs-accept-suggestion.mat-mini-fab {\n  background-color: rgba(123, 171, 95, 0.4);\n}\n\n.bs-reject-suggestion.mat-mini-fab {\n  background-color: rgba(244, 67, 54, 0.4);\n}\n\n.bs-list-controls {\n  height: 5em;\n  padding-right: 63px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "video {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.bs-camera {\n  //overflow: hidden;\n}\n\n.bs-photo-area {\n  position: absolute;\n  border: 2px dashed white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "md-checkbox.mat-checkbox-checked {\n  text-decoration: line-through;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<nav md-tab-nav-bar>\n  <a md-tab-link\n     routerLink=\"/receipt\"\n     routerLinkActive #rla=\"routerLinkActive\"\n     [active]=\"rla.isActive\">\n    1. <md-icon>receipt</md-icon> Bon\n  </a>\n  <a md-tab-link\n     routerLink=\"/grocery-list\"\n     routerLinkActive #rlb=\"routerLinkActive\"\n     [active]=\"rlb.isActive\">\n    2. <md-icon>list</md-icon> Lijstje\n  </a>\n  <a md-tab-link\n     routerLink=\"/shop\"\n     routerLinkActive #rlc=\"routerLinkActive\"\n     [active]=\"rlc.isActive\">\n    3. <md-icon>shopping_cart</md-icon> Winkel\n  </a>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"layout-margin-top\">\n  <md-progress-spinner *ngIf=\"showLoader\" mode=\"indeterminate\"></md-progress-spinner>\n</div>\n\n<div *ngIf=\"!showLoader\">\n\n  <md-list class=\"bg-suggestion-list\">\n\n    <md-list-item *ngFor=\"let suggestion of suggestions\">\n      <h4 md-line>{{suggestion.name}}</h4>\n      <button class=\"bs-accept-suggestion\" md-mini-fab color=\"primary\"\n              (click)=\"groceryListService.acceptSuggestion(suggestion)\">\n        <md-icon>done</md-icon>\n      </button>\n      <button class=\"bs-reject-suggestion layout-margin-left\" md-mini-fab color=\"warn\"\n              (click)=\"groceryListService.rejectSuggestion(suggestion)\">\n        <md-icon>clear</md-icon>\n      </button>\n    </md-list-item>\n    <md-list-item *ngIf=\"suggestions.length === 0\">\n      <p>Op dit moment zijn er geen suggesties</p>\n    </md-list-item>\n\n  </md-list>\n\n  <div *ngIf=\"suggestions.length > 1\" class=\"bs-list-controls\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n    <button class=\"bs-accept-suggestion\" md-mini-fab color=\"primary\"\n            (click)=\"groceryListService.acceptAllSuggestions()\">\n      <md-icon>done_all</md-icon>\n    </button>\n  </div>\n\n  <md-list>\n\n    <md-list-item *ngFor=\"let product of products\">\n      <h4 md-line>{{product.name}}</h4>\n      <button md-mini-fab color=\"warn\" (click)=\"groceryListService.removeProduct(product)\">\n        <md-icon>clear</md-icon>\n      </button>\n    </md-list-item>\n\n    <md-list-item>\n      <md-input-container floatPlaceholder=\"never\">\n        <input #newProductName mdInput type=\"text\"\n               (keyup.enter)=\"groceryListService.addProduct(newProductName.value); newProductName.value = ''\"\n               placeholder=\"Voeg zelf een product toe\">\n      </md-input-container>\n    </md-list-item>\n\n  </md-list>\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"layout-margin-top\">\n    <button md-button md-raised-button color=\"primary\" routerLink=\"/shop\">Klaar!</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n\n  <div [hidden]=\"showVideo\" class=\"layout-margin-around\" class=\"bs-video-container\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <div class=\"bs-camera\" [ngStyle]=\"{'width.px': width, 'height.px': height}\">\n        <video #videoplayer [width]=\"width\" [height]=\"height\" autoplay></video>\n        <div class=\"bs-photo-area\"\n             [ngStyle]=\"{'top.px': canvasOffsetTop + navHeight, 'margin-left.px' : canvasOffsetLeft, 'width.px': canvasWidth, 'height.px': canvasHeight}\"></div>\n      </div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <button mdButton md-raised-button color=\"primary\" id=\"snap\" class=\"layout-margin-top\" (click)=\"capture()\">Maak\n        Foto\n      </button>\n    </div>\n\n  </div>\n\n  <div [hidden]=\"!showVideo\" class=\"layout-margin-around\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <canvas #canvas [width]=\"canvasWidth\" [height]=\"canvasHeight\"></canvas>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n      <button mdButton md-raised-button color=\"accent\" id=\"start-over\" class=\"layout-margin-top\" (click)=\"showVideo = !showVideo\">\n        <md-icon>autorenew</md-icon>\n      </button>\n      <button mdButton md-raised-button color=\"primary\" id=\"save\" routerLink=\"/grocery-list\" class=\"layout-margin-top\"\n              (click)=\"saveImage()\">Volgende Stap\n      </button>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-list>\n\n    <md-list-item *ngFor=\"let product of products\">\n      <md-checkbox><h4 md-line>{{product.name}}</h4></md-checkbox>\n    </md-list-item>\n\n    <md-list-item *ngIf=\"products.length === 0\">\n      Je lijst is nog leeg!\n    </md-list-item>\n\n  </md-list>\n</md-card>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"layout-margin-top\">\n  <button md-button md-raised-button color=\"primary\" routerLink=\"/grocery-list\">Naar je lijst</button>\n</div>\n"

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(114);


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceryListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroceryListService = (function () {
    function GroceryListService() {
        this._productsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.products = this._productsSubject.asObservable();
        this._suggestionsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.suggestions = this._suggestionsSubject.asObservable();
        var mockSuggestions = [
            { name: 'Halfvolle yoghurt', quantity: '1,5L' },
            { name: 'Aardappelen', quantity: '1kg' },
            { name: 'Pindakaas', quantity: '400g' }
        ];
        this._suggestionsSubject.next(mockSuggestions);
    }
    GroceryListService.prototype.addProduct = function (productName) {
        var _products = this._productsSubject.getValue();
        _products.push({ name: productName });
        this._productsSubject.next(_products);
    };
    GroceryListService.prototype.removeProduct = function (product) {
        var _products = this._productsSubject.getValue();
        _products = __WEBPACK_IMPORTED_MODULE_2_lodash__["without"](_products, product);
        this._productsSubject.next(_products);
    };
    GroceryListService.prototype.acceptSuggestion = function (suggestion) {
        var _suggestions = this._suggestionsSubject.getValue();
        var _products = this._productsSubject.getValue();
        _products.push(suggestion);
        this._productsSubject.next(_products);
        _suggestions = __WEBPACK_IMPORTED_MODULE_2_lodash__["without"](_suggestions, suggestion);
        this._suggestionsSubject.next(_suggestions);
    };
    GroceryListService.prototype.acceptAllSuggestions = function () {
        var _suggestions = this._suggestionsSubject.getValue();
        var _products = this._productsSubject.getValue();
        _products = __WEBPACK_IMPORTED_MODULE_2_lodash__["concat"](_products, _suggestions);
        this._productsSubject.next(_products);
        _suggestions = [];
        this._suggestionsSubject.next(_suggestions);
    };
    GroceryListService.prototype.rejectSuggestion = function (suggestion) {
        var _suggestions = this._suggestionsSubject.getValue();
        _suggestions = __WEBPACK_IMPORTED_MODULE_2_lodash__["without"](_suggestions, suggestion);
        this._suggestionsSubject.next(_suggestions);
    };
    return GroceryListService;
}());
GroceryListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GroceryListService);

//# sourceMappingURL=grocery-list.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CameraService = (function () {
    function CameraService(http) {
        this.http = http;
        this.serviceUrl = 'http://localhost:61169/api/image';
    }
    CameraService.prototype.saveImage = function (imageData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers, method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post });
        // TODO store image somewhere
    };
    CameraService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    CameraService.prototype.handleError = function (error) {
        console.error('Error in the DepartureScheduleService');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return CameraService;
}());
CameraService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], CameraService);

var _a;
//# sourceMappingURL=camera.service.js.map

/***/ })

},[262]);
//# sourceMappingURL=main.bundle.js.map
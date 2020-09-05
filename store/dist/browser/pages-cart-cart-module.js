(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"],{

/***/ "./src/default/pages/cart/cart.component.html":
/*!****************************************************!*\
  !*** ./src/default/pages/cart/cart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(productControl.cartlistCount$ | async) == 0\">\r\n    <mat-chip-list>\r\n        <mat-chip style=\"width: 25%;\" color=\"warn\" selected=\"true\">YOU HAVE NO ITEMS IN YOUR SHOPPING CART</mat-chip>\r\n    </mat-chip-list>\r\n    <a [routerLink]=\"['/']\" mat-raised-button color=\"primary\" class=\"mt-2\">Continue shopping</a>\r\n</div>\r\n\r\n<mat-card *ngIf=\"(productControl.cartlistCount$ | async) > 0\" class=\"p-0\">\r\n    <div class=\"mat-table cart-table\">\r\n        <div class=\"mat-header-row\">\r\n            <div class=\"mat-header-cell\">Product</div>\r\n            <div class=\"mat-header-cell\">Name</div>\r\n            <div class=\"mat-header-cell\">Price</div>\r\n            <div class=\"mat-header-cell\">Quantity</div>\r\n            <div class=\"mat-header-cell\">Total</div>\r\n            <div class=\"mat-header-cell text-center\">\r\n                <div class=\"px-1\">\r\n                    <button mat-raised-button color=\"warn\" (click)=\"clear()\">Clear All</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngFor=\"let product of productControl.cartlist$ | async ; let i= index\" class=\"mat-row\">\r\n            <div class=\"mat-cell\">\r\n                <img class=\"img-fixed-size\" *ngIf=\"product.image\" [src]=\"imagePath+ '?path=' + product.image.containerName + '&name=' + product.image.image + '&width=100&height=100'\" onError=\"this.src='/assets/images/default_image.png';\">\r\n                <img class=\"img-fixed-size\" *ngIf=\"product.Images \" [src]=\"imagePath + '?path=' + product['Images'].containerName + '&name=' + product['Images'].image + '&width=100&height=100'\" onError=\"this.src='/assets/images/default_image.png';\">\r\n                <ng-container *ngIf=\"product.productImage && product.productImage.length >= 1\">\r\n                    <ng-container *ngFor='let prodectDetailsImage of product.productImage'>\r\n\r\n                        <img *ngIf=\"prodectDetailsImage.defaultImage === 1\" class=\"img-fixed-size\" [src]=\"imagePath + '?path=' + prodectDetailsImage.containerName + '&name=' + prodectDetailsImage.image + '&width=100&height=100'\" onError=\"this.src='/assets/images/default_image.png';\">\r\n                    </ng-container>\r\n                </ng-container>\r\n                <img [src]=\"imagePath + '?path=' + product.productImage.containerName + '&name=' + product.productImage.image + '&width=100&height=100'\" onError=\"this.src='/assets/images/default_image.png';\" *ngIf=\"product.productImage && !product.productImage.length\">\r\n            </div>\r\n            <div class=\"mat-cell\"><a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"product-name\">{{product.name}}</a>\r\n            </div>\r\n            <div class=\"mat-cell\">\r\n                $ {{product.price}}\r\n            </div>\r\n            <div class=\"mat-cell\">\r\n                <button mat-button (click)=\"changeCount(product, false)\">\r\n                    <mat-icon class=\"icon-remove\">remove</mat-icon>\r\n                </button> {{product.productCount}}\r\n                <button mat-button (click)=\"changeCount(product, true)\">\r\n                    <mat-icon class=\"icon-add\">add</mat-icon>\r\n                </button>\r\n            </div>\r\n            <div class=\"mat-cell\">\r\n                $ {{((product.price) * product.productCount).toFixed(2)}}\r\n            </div>\r\n            <div class=\"mat-cell text-center\">\r\n                <div class=\"p-1\">\r\n                    <button mat-mini-fab color=\"warn\" (click)=\"removeProduct(product)\" matTooltip=\"Clear\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"mat-row\">\r\n            <div class=\"mat-cell\"><a [routerLink]=\"['/']\" mat-raised-button color=\"primary\">Continue shopping</a>\r\n            </div>\r\n            <div class=\"mat-cell\"></div>\r\n            <div class=\"mat-cell\"></div>\r\n            <div class=\"mat-cell\"></div>\r\n            <div class=\"mat-cell text-right margin-lt\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center end\" class=\"grand-total px-2\">\r\n                    <span class=\"new-price\">Grand total:</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"mat-cell\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"grand-total\">\r\n                    <span class=\"new-price\">$ {{productControl.totalCartPrice$ | async}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"mat-cell text-center\"><a (click)=\"checkoutPage()\" class=\"checkout-wd\" mat-raised-button color=\"primary\">Proceed To Checkout</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/default/pages/cart/cart.component.scss":
/*!****************************************************!*\
  !*** ./src/default/pages/cart/cart.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart-table.mat-table {\n  display: block;\n  overflow-x: auto; }\n  .cart-table.mat-table .mat-row,\n  .cart-table.mat-table .mat-header-row {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n    min-width: 870px; }\n  .cart-table.mat-table .mat-row {\n    min-height: 100px; }\n  .cart-table.mat-table .mat-cell,\n  .cart-table.mat-table .mat-header-cell {\n    flex: 1;\n    overflow: hidden;\n    word-wrap: break-word;\n    text-align: center; }\n  .cart-table.mat-table .mat-header-cell {\n    font-size: 14px; }\n  .cart-table.mat-table .mat-cell .icon-remove {\n    color: white;\n    border: 1px solid #7fb6cc;\n    border-radius: 200px;\n    box-shadow: 0 0px 1px 0.4px rgba(0, 0, 0, 0.25);\n    background-color: #FF0000; }\n  .cart-table.mat-table .mat-cell .icon-add {\n    color: white;\n    border: 1px solid #7fb6cc;\n    border-radius: 200px;\n    box-shadow: 0 0px 1px 0.4px rgba(0, 0, 0, 0.25);\n    background-color: #008000; }\n  .cart-table.mat-table .mat-cell img {\n    width: 100px; }\n  .cart-table.mat-table .mat-cell .product-name {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 500; }\n  .cart-table.mat-table .mat-cell .grand-total {\n    font-weight: 500; }\n  .cart-table.mat-table .mat-cell .grand-total span:nth-child(3) {\n      font-size: 16px; }\n  .availableData {\n  display: block; }\n  .wrapper {\n  width: 100%;\n  height: 100%; }\n  .overlay {\n  position: absolute;\n  z-index: 1002;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  height: 100%; }\n  .spinner-wrapper {\n  display: flex;\n  justify-content: center;\n  justify-items: center; }\n  .img-fixed-size {\n  min-width: 100px;\n  max-width: 100px;\n  height: 100px; }\n  .margin-lt {\n  margin-left: 100px; }\n  .checkout-wd {\n  width: 157px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3BhZ2VzL2NhcnQvQzpcXFVzZXJzXFxVemFpckRhbnlhbFxcRG93bmxvYWRzXFxDb21wcmVzc2VkXFxjbWRlclxcU3B1cnRjb21tZXJjZV8xLjBfY29tbXVuaXR5X2FscGhhXFxzdG9yZS9zcmNcXGRlZmF1bHRcXHBhZ2VzXFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLGlCQUFnQixFQXNEbkI7RUF4REQ7O0lBS1EsY0FBYTtJQUNiLHlCQUF3QjtJQUN4QiwyQkFBMEI7SUFDMUIsb0JBQW1CO0lBQ25CLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLGlCQUFnQixFQUNuQjtFQVpMO0lBY1Esa0JBQWlCLEVBQ3BCO0VBZkw7O0lBa0JRLFFBQU87SUFDUCxpQkFBZ0I7SUFDaEIsc0JBQXFCO0lBQ3JCLG1CQUFrQixFQUNyQjtFQXRCTDtJQXdCUSxnQkFBZSxFQUNsQjtFQXpCTDtJQTRCWSxhQUFZO0lBQ1osMEJBQW9DO0lBQ3BDLHFCQUFvQjtJQUNwQixnREFBK0M7SUFDL0MsMEJBQXlCLEVBQzVCO0VBakNUO0lBbUNZLGFBQVk7SUFDWiwwQkFBb0M7SUFDcEMscUJBQW9CO0lBQ3BCLGdEQUErQztJQUMvQywwQkFBeUIsRUFDNUI7RUF4Q1Q7SUEwQ1ksYUFBWSxFQUNmO0VBM0NUO0lBNkNZLGVBQWM7SUFDZCxzQkFBcUI7SUFDckIsaUJBQWdCLEVBQ25CO0VBaERUO0lBa0RZLGlCQUFnQixFQUluQjtFQXREVDtNQW9EZ0IsZ0JBQWUsRUFDbEI7RUFLYjtFQUNJLGVBQWMsRUFDakI7RUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7RUFFRDtFQUNJLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsMkNBQTBDO0VBQzFDLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7RUFFRDtFQUNJLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsc0JBQXFCLEVBQ3hCO0VBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7RUFFRDtFQUNJLG1CQUFrQixFQUNyQjtFQUVEO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LXRhYmxlLm1hdC10YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAubWF0LXJvdyxcclxuICAgIC5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgICAgICBtaW4td2lkdGg6IDg3MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1yb3cge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jZWxsLFxyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNlbGwge1xyXG4gICAgICAgIC5pY29uLXJlbW92ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyNywgMTgyLCAyMDQpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwcHggMXB4IDAuNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uLWFkZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyNywgMTgyLCAyMDQpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwcHggMXB4IDAuNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmFuZC10b3RhbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmF2YWlsYWJsZURhdGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDAyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGlubmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nLWZpeGVkLXNpemUge1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luLWx0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG5cclxuLmNoZWNrb3V0LXdkIHtcclxuICAgIHdpZHRoOiAxNTdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/pages/cart/cart.component.ts":
/*!**************************************************!*\
  !*** ./src/default/pages/cart/cart.component.ts ***!
  \**************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * spurtcommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */






var CartComponent = /** @class */ (function () {
    function CartComponent(productControl, configService, listSandbox, router, changeDetectRef, platformId) {
        this.productControl = productControl;
        this.configService = configService;
        this.listSandbox = listSandbox;
        this.router = router;
        this.changeDetectRef = changeDetectRef;
        this.platformId = platformId;
        this.semiColon = ':';
        this.subscription = [];
    }
    // initially get configService data and subscribe cartlist response
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagePath = this.configService.getImageUrl();
        this.changeDetectRef.detectChanges();
        this.subscription.push(this.productControl.cartlist$.subscribe(function (data) {
            _this.changeDetectRef.detectChanges();
        }));
    };
    // increase or decrease product count
    CartComponent.prototype.changeCount = function (product, operation) {
        this.productControl.ChangeCount(product, operation);
    };
    // remove product from cart
    CartComponent.prototype.removeProduct = function (product) {
        this.productControl.removeItemFromCart(product);
    };
    // clear cart
    CartComponent.prototype.clear = function () {
        this.productControl.clearCart();
    };
    // navigation to checkout component.And set local storage
    CartComponent.prototype.checkoutPage = function () {
        var checkoutToken = '1';
        this.router.navigate(['/checkout']);
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem('checkout', checkoutToken);
        }
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (each) {
            each.unsubscribe();
        });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/default/pages/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/default/pages/cart/cart.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_2__["ProductControlSandbox"],
            _core_service_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__["ListsSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            Object])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/default/pages/cart/cart.module.ts":
/*!***********************************************!*\
  !*** ./src/default/pages/cart/cart.module.ts ***!
  \***********************************************/
/*! exports provided: routes, CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart.component */ "./src/default/pages/cart/cart.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_product_control_effects_product_control_effect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/product-control/effects/product-control.effect */ "./src/core/product-control/effects/product-control.effect.ts");
/* harmony import */ var _core_product_control_product_control_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/product-control/product-control.service */ "./src/core/product-control/product-control.service.ts");
/* harmony import */ var _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * spurtcommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */



// shared modules


// components

// store




var routes = [
    { path: '', component: _cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], pathMatch: 'full' }
];
var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_core_product_control_effects_product_control_effect__WEBPACK_IMPORTED_MODULE_7__["ProductControlEffect"]]),
            ],
            declarations: [
                _cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
            ],
            providers: [_core_product_control_product_control_service__WEBPACK_IMPORTED_MODULE_8__["ProductControlService"], _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_9__["ProductControlSandbox"]]
        })
    ], CartModule);
    return CartModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-module.js.map
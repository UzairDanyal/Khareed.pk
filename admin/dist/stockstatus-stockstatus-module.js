(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stockstatus-stockstatus-module"],{

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".validationcolor {\n  border-color: red; }\n\n.error {\n  color: red; }\n\n.settings-right-wrapper {\n  margin-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvbG9jYWxpemF0aW9ucy9zdG9ja3N0YXR1cy9hZGQvQzpcXFVzZXJzXFxVemFpckRhbnlhbFxcRG93bmxvYWRzXFxDb21wcmVzc2VkXFxjbWRlclxcS2hhcmVlZC5wa1xcYWRtaW4vc3JjXFx0aGVtZVxcZGVmYXVsdFxcYWRtaW5cXHNldHRpbmdzXFxjb21wb25lbnRzXFxsb2NhbGl6YXRpb25zXFxzdG9ja3N0YXR1c1xcYWRkXFxhZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL2xvY2FsaXphdGlvbnMvc3RvY2tzdGF0dXMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uY29sb3Ige1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5zZXR0aW5ncy1yaWdodC13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: StockStatusAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockStatusAddComponent", function() { return StockStatusAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_settings_localizations_stockStatus_stock_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/stockStatus/stock.sandbox */ "./src/core/admin/settings/localizations/stockStatus/stock.sandbox.ts");
/* harmony import */ var _core_admin_settings_localizations_stockStatus_stock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/stockStatus/stock.service */ "./src/core/admin/settings/localizations/stockStatus/stock.service.ts");

/*
 * khareed.pk
 
 * uzair usama
 */





var StockStatusAddComponent = /** @class */ (function () {
    function StockStatusAddComponent(fb, router, sandbox, stockService) {
        this.fb = fb;
        this.router = router;
        this.sandbox = sandbox;
        this.stockService = stockService;
        // Varibale
        this.params = {};
        this.submitted = false;
    }
    StockStatusAddComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    // initially calls loadForm,editStockStatus function
    StockStatusAddComponent.prototype.ngOnInit = function () {
        this.loadForm();
        this.editStockStatus();
    };
    // FormGroup
    StockStatusAddComponent.prototype.loadForm = function () {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.stockStatusform = this.fb.group({
            name: this.name,
            status: this.status
        });
    };
    /**
     * Handles form 'submit' event. Calls sandbox StockStatus updateStock and addStock function .
     *
     * @param stockStatusform entire form value
     * @param params storing entire value
     */
    StockStatusAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.stockStatusform.valid) {
            this.validateAllFormFields(this.stockStatusform);
            return;
        }
        else {
            this.params.name = this.stockStatusform.value.name;
            this.params.status = this.stockStatusform.value.status;
            if (this.editedStockValue) {
                this.params.stockStatusId = this.editedStockValue.stockStatusId;
                this.sandbox.updateStock(this.params);
                this.sandbox.getstockUpdate$.subscribe(function (val) {
                    if (val) {
                        _this.router.navigate(['/settings/local/stock-status']);
                    }
                });
            }
            else {
                this.sandbox.addStock(this.params);
                this.sandbox.getNewStock$.subscribe(function (val) {
                    if (val) {
                        _this.router.navigate(['/settings/local/stock-status']);
                    }
                });
            }
        }
    };
    // Cancle Navigate to StockStatus List Page
    StockStatusAddComponent.prototype.cancel = function () {
        this.router.navigate(['/settings/local/stock-status']);
    };
    // validation for reactive form
    StockStatusAddComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    // Edit StockStatus Navigate to Add Form
    StockStatusAddComponent.prototype.editStockStatus = function () {
        this.editedStockValue = this.stockService.getStockEditedValue();
        if (this.editedStockValue) {
            this.name.setValue(this.editedStockValue.name);
            this.status.setValue(this.editedStockValue.isActive);
        }
    };
    StockStatusAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-stockstatus-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_admin_settings_localizations_stockStatus_stock_sandbox__WEBPACK_IMPORTED_MODULE_4__["StockSandbox"],
            _core_admin_settings_localizations_stockStatus_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"]])
    ], StockStatusAddComponent);
    return StockStatusAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings-right-wrapper {\n  margin-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvbG9jYWxpemF0aW9ucy9zdG9ja3N0YXR1cy9saXN0L0M6XFxVc2Vyc1xcVXphaXJEYW55YWxcXERvd25sb2Fkc1xcQ29tcHJlc3NlZFxcY21kZXJcXEtoYXJlZWQucGtcXGFkbWluL3NyY1xcdGhlbWVcXGRlZmF1bHRcXGFkbWluXFxzZXR0aW5nc1xcY29tcG9uZW50c1xcbG9jYWxpemF0aW9uc1xcc3RvY2tzdGF0dXNcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL2xvY2FsaXphdGlvbnMvc3RvY2tzdGF0dXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzLXJpZ2h0LXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: StockStatusListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockStatusListComponent", function() { return StockStatusListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_settings_localizations_stockStatus_stock_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/stockStatus/stock.sandbox */ "./src/core/admin/settings/localizations/stockStatus/stock.sandbox.ts");
/* harmony import */ var _core_admin_settings_localizations_stockStatus_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/stockStatus/stock.service */ "./src/core/admin/settings/localizations/stockStatus/stock.service.ts");

/*
 * khareed.pk
 
 * uzair usama
 */




var StockStatusListComponent = /** @class */ (function () {
    function StockStatusListComponent(sandBox, stockApi, router) {
        this.sandBox = sandBox;
        this.stockApi = stockApi;
        this.router = router;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.pagesize = '5';
        this.pagecount = 1;
        this.regSubscribeEvents();
    }
    // initially calls StockList function
    StockStatusListComponent.prototype.ngOnInit = function () {
        this.pagesize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pagesize;
        this.StockList(this.offset, this.pagesize);
    };
    // Add StockStatus navigate to Add Form
    StockStatusListComponent.prototype.addStockStatus = function () {
        this.stockApi.setStockEditedValue('');
        this.router.navigate(['settings/local/stock-status/add']);
    };
    /**
     * Handles form 'list' event. Calls sandbox Country stockStatusList and paginationStockStatusCount function if form is valid.
     *
     * @param params storing entire value
     */
    StockStatusListComponent.prototype.StockList = function (offset, pageSize) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = pageSize;
        params.offset = offset;
        params.keyword = '';
        this.sandBox.stockStatusList(params);
        if (this.pagecount) {
            params.count = 1;
            this.sandBox.paginationStockStatusCount(params);
        }
    };
    // Edit StockStatus Navigate to Add Form
    StockStatusListComponent.prototype.editStockStatus = function (value) {
        this.stockApi.setStockEditedValue(value);
        this.router.navigate(['settings/local/stock-status/add']);
    };
    // Pagination Count
    StockStatusListComponent.prototype.onPageChange = function (event) {
        this.pageoffset = event.pageSize * event.pageIndex;
        this.pagesize = event.pageSize;
        this.StockList(this.pageoffset, this.pagesize);
        this.stockApi.deletePagerefresh(this.pageoffset);
    };
    // Delete StockStatus Using StockStatusId
    StockStatusListComponent.prototype.deleteStockStatus = function (stockStatusId, deletePop) {
        event.stopPropagation();
        this.popoverContent = deletePop;
        this.sandBox.deleteStockStatus({ stockStatusId: stockStatusId });
    };
    // Delete After Subscribe result
    StockStatusListComponent.prototype.regSubscribeEvents = function () {
        var _this = this;
        this.sandBox.getStockDelete$.subscribe(function (_delete) {
            if (_delete && _delete.status === 1) {
                _this.StockList(_this.pageoffset, _this.pagesize);
            }
        });
    };
    StockStatusListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-stockstatus-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_settings_localizations_stockStatus_stock_sandbox__WEBPACK_IMPORTED_MODULE_3__["StockSandbox"],
            _core_admin_settings_localizations_stockStatus_stock_service__WEBPACK_IMPORTED_MODULE_4__["StockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StockStatusListComponent);
    return StockStatusListComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/stockstatus.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/stockstatus.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: StockStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockStatusModule", function() { return StockStatusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.ts");
/* harmony import */ var _stockstatus_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stockstatus.routing */ "./src/theme/default/admin/settings/components/localizations/stockstatus/stockstatus.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../default.material.module */ "./src/theme/default/default.material.module.ts");

/*
 * khareed.pk
 
 * uzair usama
 */




// components


// Routing Module

// Shared Module

var StockStatusModule = /** @class */ (function () {
    function StockStatusModule() {
    }
    StockStatusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_5__["StockStatusAddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["StockStatusListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _stockstatus_routing__WEBPACK_IMPORTED_MODULE_7__["StockStatusRoutingModule"]
            ],
            providers: [],
            bootstrap: [],
            entryComponents: []
        })
    ], StockStatusModule);
    return StockStatusModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/stockstatus.routing.ts":
/*!******************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/stockstatus.routing.ts ***!
  \******************************************************************************************************/
/*! exports provided: StockStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockStatusRoutingModule", function() { return StockStatusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.ts");

/*
 * khareed.pk
 
 * uzair usama
 */


// Component


var stockStatusRoutes = [
    // { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["StockStatusListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["StockStatusAddComponent"] },
    {
        path: 'edit/:id',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["StockStatusListComponent"]
    }
];
var StockStatusRoutingModule = /** @class */ (function () {
    function StockStatusRoutingModule() {
    }
    StockStatusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(stockStatusRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StockStatusRoutingModule);
    return StockStatusRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=stockstatus-stockstatus-module.js.map
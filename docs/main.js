"use strict";
(self["webpackChunkbucketListMaker_frontend"] = self["webpackChunkbucketListMaker_frontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/components/pages/login-page/login-page.component */ 8563);
/* harmony import */ var _bucket_components_pages_bucket_page_bucket_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bucket/components/pages/bucket-page/bucket-page.component */ 6425);
/* harmony import */ var _authentication_guards_login_active_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/guards/login-active.guard */ 298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    {
        path: 'auth',
        component: _authentication_components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent
    },
    {
        path: 'bucket',
        component: _bucket_components_pages_bucket_page_bucket_page_component__WEBPACK_IMPORTED_MODULE_1__.BucketPageComponent,
        canActivate: [_authentication_guards_login_active_guard__WEBPACK_IMPORTED_MODULE_2__.LoginActiveGuard]
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/services/authentication.service */ 7911);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 9129);




class AppComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.title = 'bucketListMaker-frontend';
        this.email = '';
        this.password = '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.Toast], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/accordion */ 9854);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/menu */ 625);
/* harmony import */ var _bucket_components_create_bucket_create_bucket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bucket/components/create-bucket/create-bucket.component */ 7126);
/* harmony import */ var _bucket_components_join_bucket_join_bucket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bucket/components/join-bucket/join-bucket.component */ 3420);
/* harmony import */ var _authentication_components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/components/pages/login-page/login-page.component */ 8563);
/* harmony import */ var _bucket_components_pages_bucket_page_bucket_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bucket/components/pages/bucket-page/bucket-page.component */ 6425);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/message */ 3589);
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/keyfilter */ 8840);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/inputmask */ 1227);
/* harmony import */ var _bucket_components_modify_bucket_modify_bucket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bucket/components/modify-bucket/modify-bucket.component */ 3899);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/togglebutton */ 5293);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/password */ 8848);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/chip */ 287);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/splitbutton */ 3650);
/* harmony import */ var _authentication_components_modify_profile_modify_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/components/modify-profile/modify-profile.component */ 2658);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/confirmpopup */ 2919);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/compat/auth */ 7210);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/compat/firestore */ 7624);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/image */ 1478);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/skeleton */ 2712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
















































firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase);
class AppModule {
    constructor() {
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [primeng_api__WEBPACK_IMPORTED_MODULE_13__.MessageService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        _angular_fire_compat__WEBPACK_IMPORTED_MODULE_17__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_18__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_19__.AngularFirestoreModule,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_20__.AngularFireStorageModule,
        _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_21__.AngularFireDatabaseModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_23__.ButtonModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_24__.CardModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_25__.InputTextModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_26__.AccordionModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_27__.PanelModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_28__.MenuModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_29__.TableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_30__.RippleModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_31__.DialogModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_32__.InputTextareaModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_33__.ToastModule,
        primeng_message__WEBPACK_IMPORTED_MODULE_34__.MessageModule,
        primeng_keyfilter__WEBPACK_IMPORTED_MODULE_35__.KeyFilterModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_36__.InputMaskModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_37__.CheckboxModule,
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_38__.ToggleButtonModule,
        primeng_password__WEBPACK_IMPORTED_MODULE_39__.PasswordModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_40__.ChipModule,
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_41__.SplitButtonModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_42__.ConfirmPopupModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_43__.FileUploadModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_44__.ConfirmDialogModule,
        primeng_image__WEBPACK_IMPORTED_MODULE_45__.ImageModule,
        primeng_skeleton__WEBPACK_IMPORTED_MODULE_46__.SkeletonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _bucket_components_create_bucket_create_bucket_component__WEBPACK_IMPORTED_MODULE_3__.CreateBucketComponent,
        _authentication_components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__.LoginPageComponent,
        _bucket_components_pages_bucket_page_bucket_page_component__WEBPACK_IMPORTED_MODULE_6__.BucketPageComponent,
        _bucket_components_join_bucket_join_bucket_component__WEBPACK_IMPORTED_MODULE_4__.JoinBucketComponent,
        _bucket_components_modify_bucket_modify_bucket_component__WEBPACK_IMPORTED_MODULE_7__.ModifyBucketComponent,
        _authentication_components_modify_profile_modify_profile_component__WEBPACK_IMPORTED_MODULE_8__.ModifyProfileComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_17__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_18__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_19__.AngularFirestoreModule,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_20__.AngularFireStorageModule,
        _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_21__.AngularFireDatabaseModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_23__.ButtonModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_24__.CardModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_25__.InputTextModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_26__.AccordionModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_27__.PanelModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_28__.MenuModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_29__.TableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_30__.RippleModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_31__.DialogModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_32__.InputTextareaModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_33__.ToastModule,
        primeng_message__WEBPACK_IMPORTED_MODULE_34__.MessageModule,
        primeng_keyfilter__WEBPACK_IMPORTED_MODULE_35__.KeyFilterModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_36__.InputMaskModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_37__.CheckboxModule,
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_38__.ToggleButtonModule,
        primeng_password__WEBPACK_IMPORTED_MODULE_39__.PasswordModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_40__.ChipModule,
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_41__.SplitButtonModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_42__.ConfirmPopupModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_43__.FileUploadModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_44__.ConfirmDialogModule,
        primeng_image__WEBPACK_IMPORTED_MODULE_45__.ImageModule,
        primeng_skeleton__WEBPACK_IMPORTED_MODULE_46__.SkeletonModule] }); })();


/***/ }),

/***/ 2658:
/*!**************************************************************************************!*\
  !*** ./src/app/authentication/components/modify-profile/modify-profile.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifyProfileComponent": () => (/* binding */ ModifyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authentication.service */ 7911);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/image */ 1478);












function ModifyProfileComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModifyProfileComponent_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.updateProfile()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { width: "35vw" }; };
class ModifyProfileComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.showDialog = false;
        this.images = [];
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter;
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter;
        this.uploadedFiles = [];
        const u = this.authenticationService.getLocalUser();
        this.profile = {
            displayName: u.displayName ?? '',
            photoURL: u.photoURL ?? ''
        };
    }
    updateProfile() {
        if (this.uploadedFiles.length) {
            const storage = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
            const url = 'images/' + this.authenticationService.getLocalUser().uid + '/' + this.uploadedFiles[0].name;
            const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, url);
            (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(storageRef, this.uploadedFiles[0])).subscribe(() => {
                (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef)).subscribe((url) => {
                    this.profile.photoURL = url;
                    this.authenticationService.setProfile(this.profile);
                    this.uploadedFiles = [];
                });
            });
        }
        else {
            this.authenticationService.setProfile(this.profile);
        }
    }
    onBasicUploadAuto(event) {
        this.uploadedFiles.push(event.files[0]);
    }
}
ModifyProfileComponent.ɵfac = function ModifyProfileComponent_Factory(t) { return new (t || ModifyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
ModifyProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModifyProfileComponent, selectors: [["app-modify-profile"]], inputs: { showDialog: "showDialog" }, outputs: { onUpdate: "onUpdate", onHide: "onHide" }, decls: 9, vars: 14, consts: [["header", "Modify profile", 3, "visible", "position", "modal", "draggable", "resizable", "visibleChange", "onHide"], [1, "p-float-label", "mt-4", "mb-4"], ["id", "display-name-input", "type", "text", "pInputText", "", 1, "w-full", 3, "ngModel", "ngModelChange"], ["for", "display-name-input"], [1, "border-500", "surface-overlay", "mb-4", "w-full", "text-center"], ["alt", "Profile", "width", "200", 1, "", 3, "src", "preview"], ["mode", "advanced", "name", "demo[]", "accept", "image/*", "chooseLabel", "Browse", 3, "maxFileSize", "showUploadButton", "customUpload", "onSelect"], ["pTemplate", "footer"], ["icon", "pi pi-check", "label", "Save", "styleClass", "p-button-text", 3, "click"]], template: function ModifyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function ModifyProfileComponent_Template_p_dialog_visibleChange_0_listener($event) { return ctx.showDialog = $event; })("onHide", function ModifyProfileComponent_Template_p_dialog_onHide_0_listener() { return ctx.onHide.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModifyProfileComponent_Template_input_ngModelChange_2_listener($event) { return ctx.profile.displayName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Display name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p-image", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-fileUpload", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function ModifyProfileComponent_Template_p_fileUpload_onSelect_7_listener($event) { return ctx.onBasicUploadAuto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ModifyProfileComponent_ng_template_8_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.showDialog)("position", "center")("modal", true)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.profile.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.authenticationService.getLocalUser().photoURL + "")("preview", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxFileSize", 1000000)("showUploadButton", false)("customUpload", true);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__.FileUpload, primeng_image__WEBPACK_IMPORTED_MODULE_10__.Image], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RpZnktcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"] });
ModifyProfileComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModifyProfileComponent, factory: ModifyProfileComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8563:
/*!************************************************************************************!*\
  !*** ./src/app/authentication/components/pages/login-page/login-page.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/authentication.service */ 7911);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/password */ 8848);








function LoginPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span", 4)(2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_div_4_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.displayName = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.displayName);
} }
function LoginPageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span", 13)(2, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function LoginPageComponent_div_10_Template_input_keydown_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.authenticationService.SignIn(ctx_r9.email, ctx_r9.password)); })("ngModelChange", function LoginPageComponent_div_10_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.password = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.password);
} }
const _c0 = function () { return { "width": "100%" }; };
function LoginPageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span", 13)(2, "p-password", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_div_11_Template_p_password_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.registerPassword = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0))("ngModel", ctx_r2.registerPassword)("toggleMask", true);
} }
function LoginPageComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.authenticationService.SignIn(ctx_r14.email, ctx_r14.password)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginPageComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.authenticationService.SignUp(ctx_r16.email, ctx_r16.registerPassword, ctx_r16.displayName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginPageComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.registration = !ctx_r18.registration); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginPageComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Not registered? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_p_15_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.registration = !ctx_r20.registration); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Create an account!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class LoginPageComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.email = '';
        this.password = '';
        this.displayName = '';
        this.registration = false;
        this.registerPassword = '';
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
LoginPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 16, vars: 9, consts: [[1, "login-page", "m-auto", "w-full", "lg:w-4", "pt-8"], [1, "form", "w-10", "shadow-5", "m-auto", "p-8", "mt-8", "surface-0"], [1, "mb-6", "font-weight-light"], [4, "ngIf"], [1, "p-float-label", "mb-5"], ["id", "email", "type", "text", "pInputText", "", 1, "w-full", 3, "ngModel", "ngModelChange"], ["for", "email"], ["pButton", "", "pRipple", "", "type", "button", "class", "p-button-raised p-button-text placeholder transition-delay-100 mb-2 sign-in p-2 w-full", "label", "Sign In", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "class", "p-button-raised p-button-text placeholder transition-delay-100 mb-2 sign-in p-2 w-full", "label", "Sign Up", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "class", "p-button-raised p-button-text placeholder transition-delay-100 mb-2 sign-in p-2 w-full", "label", "Back to login", 3, "click", 4, "ngIf"], ["class", "message font-weight-light pt-2 cursor-pointer float-right", 4, "ngIf"], ["id", "displayName", "type", "test", "pInputText", "", 1, "w-full", 3, "ngModel", "ngModelChange"], ["for", "displayName"], [1, "p-float-label", "mb-4"], ["id", "password", "type", "password", "pInputText", "", 1, "w-full", 3, "ngModel", "keydown.enter", "ngModelChange"], ["for", "password"], ["id", "register-password", 3, "inputStyle", "ngModel", "toggleMask", "ngModelChange"], ["pButton", "", "pRipple", "", "type", "button", "label", "Sign In", 1, "p-button-raised", "p-button-text", "placeholder", "transition-delay-100", "mb-2", "sign-in", "p-2", "w-full", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Sign Up", 1, "p-button-raised", "p-button-text", "placeholder", "transition-delay-100", "mb-2", "sign-in", "p-2", "w-full", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Back to login", 1, "p-button-raised", "p-button-text", "placeholder", "transition-delay-100", "mb-2", "sign-in", "p-2", "w-full", 3, "click"], [1, "message", "font-weight-light", "pt-2", "cursor-pointer", "float-right"], [1, "text-blue-500", 3, "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LoginPageComponent_div_4_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "span", 4)(7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_7_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginPageComponent_div_10_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginPageComponent_div_11_Template, 5, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginPageComponent_button_12_Template, 1, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginPageComponent_button_13_Template, 1, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoginPageComponent_button_14_Template, 1, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginPageComponent_p_15_Template, 4, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.registration ? "Registration" : "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registration);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.registration);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registration);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.registration);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registration);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registration);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.registration);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_password__WEBPACK_IMPORTED_MODULE_7__.Password], styles: [".sign-in[_ngcontent-%COMP%] {\r\n    font-size: 0.9em;\r\n    outline: 0;\r\n    border: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztBQUNiIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLWluIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 298:
/*!*************************************************************!*\
  !*** ./src/app/authentication/guards/login-active.guard.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginActiveGuard": () => (/* binding */ LoginActiveGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication.service */ 7911);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class LoginActiveGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.authService.isLoggedIn) {
            this.router.navigate(['auth']);
        }
        return true;
    }
}
LoginActiveGuard.ɵfac = function LoginActiveGuard_Factory(t) { return new (t || LoginActiveGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoginActiveGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginActiveGuard, factory: LoginActiveGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7911:
/*!*******************************************************************!*\
  !*** ./src/app/authentication/services/authentication.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);





class AuthenticationService {
    constructor(afAuth, router, messageService) {
        this.afAuth = afAuth;
        this.router = router;
        this.messageService = messageService;
        this.afAuth.user.subscribe((user) => user ? this.setLocalUser(user) : this.removeLocalUser());
        this.afAuth.idToken.subscribe((idToken) => idToken ? this.setIdToken(idToken) : this.removeIdToken());
    }
    getLocalUser() {
        const user = JSON.parse(localStorage.getItem('user'));
        user.photoURL = user.photoURL ?? 'assets/profile/empty-profile.png';
        return user;
    }
    setLocalUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    removeLocalUser() {
        localStorage.removeItem('user');
    }
    getIdToken() {
        return localStorage.getItem('idToken');
    }
    setIdToken(idToken) {
        localStorage.setItem('idToken', idToken);
    }
    removeIdToken() {
        localStorage.removeItem('idToken');
    }
    get username() {
        return JSON.parse(localStorage.getItem('user'))?.displayName;
    }
    getProfile() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.afAuth.currentUser).subscribe({
            next: (user) => this.setLocalUser(user)
        });
    }
    setProfile(profile) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.afAuth.currentUser).subscribe({
            next: (user) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(user.updateProfile(profile)).subscribe({
                next: () => this.setLocalUser(user)
            })
        });
    }
    SignIn(email, password) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.afAuth.signInWithEmailAndPassword(email, password)).subscribe({
            next: (userCredential) => {
                this.setLocalUser(userCredential.user);
                this.router.navigate(['bucket']);
            },
            error: () => this.messageService.add({
                severity: 'error',
                summary: 'Login Failed!',
                detail: "Invalid email or password!"
            })
        });
    }
    // Sign up with email/password
    SignUp(email, password, displayName) {
        if (!email || !password || !displayName) {
            return this.messageService.add({
                severity: 'error',
                summary: 'Registration failed!',
                detail: 'Please complete all fields!'
            });
        }
        else {
            return this.afAuth
                .createUserWithEmailAndPassword(email, password)
                .then((result) => {
                /* Call the SendVerificationMail() function when new user sign
                up and returns promise */
                this.SendVerificationMail().then(() => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Registration success!',
                        detail: 'Welcome to your BucketList, please verify your email address!'
                    });
                });
                result.user?.updateProfile({
                    displayName: displayName
                });
            })
                .catch((error) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Registration failed!',
                    detail: error.message
                });
            });
        }
    }
    // Send email verification when new user sign up
    SendVerificationMail() {
        return this.afAuth.currentUser
            .then((u) => u.sendEmailVerification())
            .then(() => {
            //this.router.navigate(['verify-email-address']);
        });
    }
    SignOut() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.afAuth.signOut()).subscribe({
            complete: () => {
                this.removeLocalUser();
                this.router.navigate(['auth']);
            }
        });
    }
    // Returns true when user is logged in and email is verified
    get isLoggedIn() {
        return this.getLocalUser() !== null;
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9941:
/*!*********************************************************************!*\
  !*** ./src/app/authentication/services/bucket-list-item.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BucketListItemService": () => (/* binding */ BucketListItemService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



const baseURL = 'https://prod--bucketlistmakerservice--zw6v5p9k8vc6.code.run/bucket';
class BucketListItemService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    query(idToken, data) {
        return this.httpClient.post(`${baseURL}/query`, data, this.makeOptions(idToken));
    }
    read(idToken, id) {
        return this.httpClient.get(`${baseURL}/get/${id}`, this.makeOptions(idToken));
    }
    create(idToken, data) {
        return this.httpClient.post(`${baseURL}/create`, data, this.makeOptions(idToken));
    }
    update(idToken, data, id) {
        return this.httpClient.patch(`${baseURL}/modify/${id}`, data, this.makeOptions(idToken));
    }
    join(idToken, data) {
        return this.httpClient.post(`${baseURL}/join`, data, this.makeOptions(idToken));
    }
    delete(idToken, id) {
        return this.httpClient.delete(`${baseURL}/delete/${id}`, this.makeOptions(idToken));
    }
    makeOptions(idToken) {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
                'SessionIdToken': idToken
            })
        };
    }
}
BucketListItemService.ɵfac = function BucketListItemService_Factory(t) { return new (t || BucketListItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
BucketListItemService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BucketListItemService, factory: BucketListItemService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7126:
/*!****************************************************************************!*\
  !*** ./src/app/bucket/components/create-bucket/create-bucket.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBucketComponent": () => (/* binding */ CreateBucketComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../authentication/services/authentication.service */ 7911);
/* harmony import */ var _authentication_services_bucket_list_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/services/bucket-list-item.service */ 9941);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);











function CreateBucketComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateBucketComponent_ng_template_9_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.create()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { width: "35vw" }; };
class CreateBucketComponent {
    constructor(afAuth, authenticationService, bucketListItemService, messageService) {
        this.afAuth = afAuth;
        this.authenticationService = authenticationService;
        this.bucketListItemService = bucketListItemService;
        this.messageService = messageService;
        this.title = '';
        this.description = '';
        this.show = false;
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter;
    }
    create() {
        this.bucketListItemService.create(this.authenticationService.getIdToken() ?? '', {
            title: this.title,
            description: this.description
        }).subscribe({
            next: () => {
                this.title = '';
                this.description = '';
                this.show = false;
                this.onAdd.emit();
            },
            error: () => this.messageService.add({ severity: 'error', detail: 'Service Unavailable!' })
        });
    }
}
CreateBucketComponent.ɵfac = function CreateBucketComponent_Factory(t) { return new (t || CreateBucketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_authentication_services_bucket_list_item_service__WEBPACK_IMPORTED_MODULE_1__.BucketListItemService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService)); };
CreateBucketComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateBucketComponent, selectors: [["app-create-bucket"]], inputs: { show: "show" }, outputs: { onHide: "onHide", onAdd: "onAdd" }, decls: 10, vars: 11, consts: [["header", "Create", 3, "visible", "position", "modal", "draggable", "resizable", "visibleChange", "onHide"], [1, "p-float-label", "mt-4", "mb-4"], ["id", "title-input", "type", "text", "pInputText", "", 1, "w-full", 3, "ngModel", "ngModelChange"], ["for", "title-input"], [1, "p-float-label"], ["id", "description-input", "rows", "5", "cols", "30", "pInputTextarea", "", 1, "w-full", "h-auto", 3, "autoResize", "ngModel", "ngModelChange"], ["for", "description-input"], ["pTemplate", "footer"], ["icon", "pi pi-check", "label", "Save", "styleClass", "p-button-text", 3, "click"]], template: function CreateBucketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function CreateBucketComponent_Template_p_dialog_visibleChange_0_listener($event) { return ctx.show = $event; })("onHide", function CreateBucketComponent_Template_p_dialog_onHide_0_listener() { return ctx.onHide.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateBucketComponent_Template_input_ngModelChange_2_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 4)(6, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateBucketComponent_Template_textarea_ngModelChange_6_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CreateBucketComponent_ng_template_9_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.show)("position", "top")("modal", true)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoResize", true)("ngModel", ctx.description);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__.InputTextarea], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYnVja2V0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3420:
/*!************************************************************************!*\
  !*** ./src/app/bucket/components/join-bucket/join-bucket.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JoinBucketComponent": () => (/* binding */ JoinBucketComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _authentication_services_bucket_list_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../authentication/services/bucket-list-item.service */ 9941);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 1837);










function JoinBucketComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JoinBucketComponent_ng_template_5_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.join()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { width: "35vw" }; };
class JoinBucketComponent {
    constructor(afAuth, bucketListItemService, messageService) {
        this.afAuth = afAuth;
        this.bucketListItemService = bucketListItemService;
        this.messageService = messageService;
        this.inviteCode = '';
        this.show = false;
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter;
        this.onJoin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter;
    }
    ngOnInit() {
    }
    join() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.afAuth.idToken).subscribe({
            next: (idToken) => this.bucketListItemService.join(idToken ?? '', {
                inviteCode: this.inviteCode
            }).subscribe(() => {
                this.messageService.add({ severity: 'success', detail: 'Successfully joined this item!' });
                this.show = false;
                this.onJoin.emit();
                this.inviteCode = '';
            })
        });
    }
}
JoinBucketComponent.ɵfac = function JoinBucketComponent_Factory(t) { return new (t || JoinBucketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_services_bucket_list_item_service__WEBPACK_IMPORTED_MODULE_0__.BucketListItemService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService)); };
JoinBucketComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JoinBucketComponent, selectors: [["app-join-bucket"]], inputs: { show: "show" }, outputs: { onHide: "onHide", onJoin: "onJoin" }, decls: 6, vars: 9, consts: [["header", "Join", 3, "visible", "position", "modal", "draggable", "resizable", "visibleChange", "onHide"], [1, "p-float-label", "mt-4", "mb-4"], ["id", "title-input", "type", "text", "pInputText", "", "pattern", "^[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}$", 1, "w-full", 3, "ngModel", "ngModelChange"], ["for", "title-input"], ["pTemplate", "footer"], ["icon", "pi pi-check", "label", "Join", "styleClass", "p-button-text", 3, "click"]], template: function JoinBucketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function JoinBucketComponent_Template_p_dialog_visibleChange_0_listener($event) { return ctx.show = $event; })("onHide", function JoinBucketComponent_Template_p_dialog_onHide_0_listener() { return ctx.onHide.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JoinBucketComponent_Template_input_ngModelChange_2_listener($event) { return ctx.inviteCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "722AA0F5-D690-4DC1-BDC3-7A20C8B5D22B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, JoinBucketComponent_ng_template_5_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.show)("position", "top")("modal", true)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inviteCode);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2luLWJ1Y2tldC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3899:
/*!****************************************************************************!*\
  !*** ./src/app/bucket/components/modify-bucket/modify-bucket.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifyBucketComponent": () => (/* binding */ ModifyBucketComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _authentication_services_bucket_list_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../authentication/services/bucket-list-item.service */ 9941);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/togglebutton */ 5293);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 97);















const _c0 = function () { return { width: "50vw" }; };
function ModifyBucketComponent_p_dialog_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-confirmDialog", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModifyBucketComponent_p_dialog_0_ng_template_17_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.deleteItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModifyBucketComponent_p_dialog_0_ng_template_17_Template_p_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.show = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModifyBucketComponent_p_dialog_0_ng_template_17_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.putItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseZIndex", 10000);
} }
const _c1 = function () { return { "width": "100%" }; };
function ModifyBucketComponent_p_dialog_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dialog", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function ModifyBucketComponent_p_dialog_0_Template_p_dialog_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.show = $event); })("onHide", function ModifyBucketComponent_p_dialog_0_Template_p_dialog_onHide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.onHide.emit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 2)(2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModifyBucketComponent_p_dialog_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.bucketListItem.title = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5)(6, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModifyBucketComponent_p_dialog_0_Template_textarea_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.bucketListItem.description = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "span", 5)(12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModifyBucketComponent_p_dialog_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.bucketListItem.inviteCode = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Invite Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "p-toggleButton", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModifyBucketComponent_p_dialog_0_Template_p_toggleButton_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.bucketListItem.complete = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ModifyBucketComponent_p_dialog_0_ng_template_17_Template, 4, 4, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx_r0.show)("modal", true)("draggable", false)("resizable", false)("position", "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.bucketListItem.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoResize", true)("ngModel", ctx_r0.bucketListItem.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.bucketListItem.inviteCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.bucketListItem.complete);
} }
class ModifyBucketComponent {
    constructor(afAuth, bucketListItemService, confirmationService, messageService) {
        this.afAuth = afAuth;
        this.bucketListItemService = bucketListItemService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.show = false;
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter;
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter;
    }
    putItem() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.afAuth.idToken).subscribe({
            next: (idToken) => this.bucketListItemService.update(idToken ?? '', {
                title: this.bucketListItem.title,
                description: this.bucketListItem.description,
                complete: this.bucketListItem.complete
            }, this.bucketListItem.documentId).subscribe(() => {
                this.show = false;
                this.onUpdate.emit();
            })
        });
    }
    // deleteItem(event: Event) {
    //     this.confirmationService.confirm({
    //         target: event.target as EventTarget,
    //         message: "Are you sure that you want to delete this item?",
    //         icon: "pi pi-exclamation-triangle",
    //         accept: () => {
    //             from(this.afAuth.idToken).subscribe({
    //                 next: (idToken) => this.bucketListItemService.delete(idToken ?? '',
    //                     this.bucketListItem.documentId).subscribe(() => {
    //                     this.show = false
    //                     this.onUpdate.emit()
    //                 })
    //             });
    //         }
    //     });
    // }
    deleteItem() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this item?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.afAuth.idToken).subscribe({
                    next: (idToken) => this.bucketListItemService.delete(idToken ?? '', this.bucketListItem.documentId).subscribe(() => {
                        this.show = false;
                        this.onUpdate.emit();
                    })
                });
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Item deleted' });
            }
        });
    }
}
ModifyBucketComponent.ɵfac = function ModifyBucketComponent_Factory(t) { return new (t || ModifyBucketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_services_bucket_list_item_service__WEBPACK_IMPORTED_MODULE_0__.BucketListItemService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService)); };
ModifyBucketComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModifyBucketComponent, selectors: [["app-modify-bucket"]], inputs: { show: "show", bucketListItem: "bucketListItem" }, outputs: { onUpdate: "onUpdate", onHide: "onHide" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService])], decls: 1, vars: 1, consts: [["header", "Modify", "styleClass", "lg:w-4", 3, "visible", "modal", "draggable", "resizable", "position", "visibleChange", "onHide", 4, "ngIf"], ["header", "Modify", "styleClass", "lg:w-4", 3, "visible", "modal", "draggable", "resizable", "position", "visibleChange", "onHide"], [1, "p-float-label", "mt-4", "mb-4"], ["id", "title-input", "type", "text", "pInputText", "", 1, "w-full", 3, "ngModel", "ngModelChange"], ["for", "title-input"], [1, "p-float-label"], ["id", "description-input", "rows", "5", "cols", "30", "pInputTextarea", "", 1, "w-full", "h-auto", 3, "autoResize", "ngModel", "ngModelChange"], ["for", "description-input"], [1, "grid", "mt-4"], [1, "col-12", "lg:col-8"], ["pInputText", "", "id", "inviteCode-input", "type", "text", "disabled", "true", 1, "w-full", 3, "ngModel", "ngModelChange"], ["for", "inviteCode-input"], [1, "col-12", "lg:col-4"], ["onLabel", "Completed", "offLabel", "Pending", "onIcon", "pi pi-check", "offIcon", "pi pi-times", 3, "ngModel", "ngModelChange"], ["pTemplate", "footer"], ["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"], ["styleClass", "float-left p-button-text", "icon", "pi pi-trash", "label", "Delete", 3, "click"], ["icon", "pi pi-times", "label", "Cancel", "styleClass", "p-button-text", 3, "click"], ["icon", "pi pi-check", "label", "Save", "styleClass", "p-button-text", 3, "click"]], template: function ModifyBucketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModifyBucketComponent_p_dialog_0_Template, 18, 13, "p-dialog", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bucketListItem);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.Dialog, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__.InputTextarea, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_11__.ToggleButton, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RpZnktYnVja2V0LmNvbXBvbmVudC5jc3MifQ== */"] });
ModifyBucketComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModifyBucketComponent, factory: ModifyBucketComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6425:
/*!******************************************************************************!*\
  !*** ./src/app/bucket/components/pages/bucket-page/bucket-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BucketPageComponent": () => (/* binding */ BucketPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../authentication/services/authentication.service */ 7911);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _authentication_services_bucket_list_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../authentication/services/bucket-list-item.service */ 9941);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/chip */ 287);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/skeleton */ 2712);
/* harmony import */ var _create_bucket_create_bucket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../create-bucket/create-bucket.component */ 7126);
/* harmony import */ var _join_bucket_join_bucket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../join-bucket/join-bucket.component */ 3420);
/* harmony import */ var _modify_bucket_modify_bucket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modify-bucket/modify-bucket.component */ 3899);
/* harmony import */ var _authentication_components_modify_profile_modify_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../authentication/components/modify-profile/modify-profile.component */ 2658);
















function BucketPageComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "p-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BucketPageComponent_ng_template_2_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.showModifyProfile()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Bucket List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div")(8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BucketPageComponent_ng_template_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.showAddPanel = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BucketPageComponent_ng_template_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.showJoinPanel = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BucketPageComponent_ng_template_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.queryAction()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BucketPageComponent_ng_template_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.authenticationService.SignOut()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.authenticationService.getLocalUser().photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.authenticationService.username);
} }
function BucketPageComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function BucketPageComponent_ng_template_4_p_skeleton_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-skeleton", 24);
} }
function BucketPageComponent_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r10.title);
} }
function BucketPageComponent_ng_template_4_p_skeleton_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-skeleton", 24);
} }
function BucketPageComponent_ng_template_4_span_6_p_chip_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-chip", 26);
} if (rf & 2) {
    const member_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", member_r21);
} }
function BucketPageComponent_ng_template_4_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BucketPageComponent_ng_template_4_span_6_p_chip_1_Template, 1, 1, "p-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r10.members);
} }
function BucketPageComponent_ng_template_4_p_skeleton_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-skeleton", 24);
} }
function BucketPageComponent_ng_template_4_span_9_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 29);
} }
function BucketPageComponent_ng_template_4_span_9_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 30);
} }
function BucketPageComponent_ng_template_4_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BucketPageComponent_ng_template_4_span_9_i_1_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BucketPageComponent_ng_template_4_span_9_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r10.complete);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r10.complete);
} }
function BucketPageComponent_ng_template_4_p_skeleton_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-skeleton", 24);
} }
function BucketPageComponent_ng_template_4_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BucketPageComponent_ng_template_4_span_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.modifyAction(item_r10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function BucketPageComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BucketPageComponent_ng_template_4_p_skeleton_2_Template, 1, 0, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BucketPageComponent_ng_template_4_span_3_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, BucketPageComponent_ng_template_4_p_skeleton_5_Template, 1, 0, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BucketPageComponent_ng_template_4_span_6_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BucketPageComponent_ng_template_4_p_skeleton_8_Template, 1, 0, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, BucketPageComponent_ng_template_4_span_9_Template, 3, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, BucketPageComponent_ng_template_4_p_skeleton_11_Template, 1, 0, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, BucketPageComponent_ng_template_4_span_12_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loadSkeleton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loadSkeleton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loadSkeleton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loadSkeleton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loadSkeleton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loadSkeleton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loadSkeleton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loadSkeleton);
} }
function BucketPageComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" In total there are ", ctx_r3.bucketListItems ? ctx_r3.bucketListItems.length : 0, " items. ");
} }
class BucketPageComponent {
    constructor(authenticationService, afAuth, bucketListItemService, messageService) {
        this.authenticationService = authenticationService;
        this.afAuth = afAuth;
        this.bucketListItemService = bucketListItemService;
        this.messageService = messageService;
        this.bucketListItems = new Array(3);
        this.showAddPanel = false;
        this.showJoinPanel = false;
        this.showModifyPanel = false;
        this.showModifyProfilePanel = false;
        this.loadSkeleton = true;
        this.afAuth.authState.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe(() => this.queryAction());
    }
    queryAction() {
        this.bucketListItemService.query(this.authenticationService.getIdToken() ?? '', {}).subscribe({
            next: (bucketListQueryResponse) => {
                this.bucketListItems = bucketListQueryResponse;
                this.loadSkeleton = false;
            },
            error: () => this.messageService.add({ severity: 'error', detail: 'Service Unavailable!' })
        });
    }
    modifyAction(bucketListItem) {
        this.showModifyPanel = true;
        this.bucketListItemService.read(this.authenticationService.getIdToken() ?? '', bucketListItem.documentId).subscribe({
            next: (bucketListItem) => this.bucketListItem = bucketListItem,
            error: () => this.messageService.add({ severity: 'error', detail: 'Service Unavailable!' })
        });
    }
    showModifyProfile() {
        this.showModifyProfilePanel = true;
    }
    hideModifyProfile() {
        this.showModifyProfilePanel = false;
    }
}
BucketPageComponent.ɵfac = function BucketPageComponent_Factory(t) { return new (t || BucketPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_authentication_services_bucket_list_item_service__WEBPACK_IMPORTED_MODULE_1__.BucketListItemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService)); };
BucketPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BucketPageComponent, selectors: [["app-bucket-page"]], decls: 10, vars: 6, consts: [[1, "form", "shadow-8", "m-8", "p-6", "surface-0"], ["responsiveLayout", "scroll", 3, "value"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], [3, "showDialog", "onHide"], [3, "show", "onAdd", "onHide"], [3, "show", "onJoin", "onHide"], [3, "bucketListItem", "show", "onUpdate", "onHide"], [1, "flex", "align-items-center", "justify-content-between"], ["styleClass", "p-button-raised p-button-text placeholder transition-delay-100", 3, "click"], ["alt", "logo", 2, "width", "1.5rem", 3, "src"], [1, "ml-2", "font-bold"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-plus", 1, "p-button-raised", "p-button-text", "placeholder", "transition-delay-100", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-share-alt", 1, "p-button-raised", "p-button-text", "placeholder", "transition-delay-100", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-refresh", 1, "p-button-raised", "p-button-text", "placeholder", "transition-delay-100", "mr-4", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Sign out", 1, "p-button-raised", "p-button-text", "transition-delay-100", 3, "click"], [1, "w-1", "text-center"], [1, "w-1"], ["height", "2rem", 4, "ngIf"], [4, "ngIf"], [1, "text-center"], [1, "text-right"], ["height", "2rem"], ["image", "", "styleClass", "mr-2", 3, "label", 4, "ngFor", "ngForOf"], ["image", "", "styleClass", "mr-2", 3, "label"], ["class", "pi pi-check text-2xl text-success", 4, "ngIf"], ["class", "pi pi-times text-2xl text-danger", 4, "ngIf"], [1, "pi", "pi-check", "text-2xl", "text-success"], [1, "pi", "pi-times", "text-2xl", "text-danger"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-cog", 1, "p-button-rounded", "p-button-info", "p-button-outlined", 3, "click"]], template: function BucketPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BucketPageComponent_ng_template_2_Template, 12, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BucketPageComponent_ng_template_3_Template, 8, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, BucketPageComponent_ng_template_4_Template, 13, 8, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, BucketPageComponent_ng_template_5_Template, 2, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-modify-profile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onHide", function BucketPageComponent_Template_app_modify_profile_onHide_6_listener() { return ctx.hideModifyProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-create-bucket", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onAdd", function BucketPageComponent_Template_app_create_bucket_onAdd_7_listener() { return ctx.queryAction(); })("onHide", function BucketPageComponent_Template_app_create_bucket_onHide_7_listener() { return ctx.showAddPanel = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-join-bucket", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onJoin", function BucketPageComponent_Template_app_join_bucket_onJoin_8_listener() { return ctx.queryAction(); })("onHide", function BucketPageComponent_Template_app_join_bucket_onHide_8_listener() { return ctx.showJoinPanel = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "app-modify-bucket", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onUpdate", function BucketPageComponent_Template_app_modify_bucket_onUpdate_9_listener() { return ctx.queryAction(); })("onHide", function BucketPageComponent_Template_app_modify_bucket_onHide_9_listener() { return ctx.showModifyPanel = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.bucketListItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showDialog", ctx.showModifyProfilePanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("show", ctx.showAddPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("show", ctx.showJoinPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("bucketListItem", ctx.bucketListItem)("show", ctx.showModifyPanel);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_ripple__WEBPACK_IMPORTED_MODULE_13__.Ripple, primeng_chip__WEBPACK_IMPORTED_MODULE_14__.Chip, primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__.Skeleton, _create_bucket_create_bucket_component__WEBPACK_IMPORTED_MODULE_2__.CreateBucketComponent, _join_bucket_join_bucket_component__WEBPACK_IMPORTED_MODULE_3__.JoinBucketComponent, _modify_bucket_modify_bucket_component__WEBPACK_IMPORTED_MODULE_4__.ModifyBucketComponent, _authentication_components_modify_profile_modify_profile_component__WEBPACK_IMPORTED_MODULE_5__.ModifyProfileComponent], styles: ["[_nghost-%COMP%]     .p-splitbutton .p-button :last-child{\r\n    padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1Y2tldC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoiYnVja2V0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAucC1zcGxpdGJ1dHRvbiAucC1idXR0b24gOmxhc3QtY2hpbGR7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59Il19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// src/environments/environment.ts
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api',
    firebase: {
        apiKey: "AIzaSyCfh0IApkIajDLqK7urSHALmohpXtrLGzM",
        authDomain: "bucketlistmaker-7c432.firebaseapp.com",
        databaseURL: "https://bucketlistmaker-7c432-default-rtdb.firebaseio.com",
        projectId: "bucketlistmaker-7c432",
        storageBucket: "bucketlistmaker-7c432.appspot.com",
        messagingSenderId: "500239406286",
        appId: "1:500239406286:web:31260b128917e5573a6c9f"
    }
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
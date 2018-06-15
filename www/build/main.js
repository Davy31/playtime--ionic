webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__famille_famille__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, toastProvider, userProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastProvider = toastProvider;
        this.userProvider = userProvider;
        this.storage = storage;
        this.username = "username";
        this.email = "toto@enshort.com";
        this.password = "123456";
        this.passwordCopie = "123456";
        this.onSubmit = function (form) {
            // Teste le formulaire
            // si formulaire invalide affiche la première erreur
            if (form.controls['email'].invalid) {
                _this.toastProvider.presentToast('L\'adresse email est invalide !!!');
                return;
            }
            if (form.controls['password'].invalid) {
                _this.toastProvider.presentToast('Le mot de passe doit comporter au moins 6 caractères !!!');
                return;
            }
            if (form.controls['password'].value != form.controls['passwordCopie'].value) {
                _this.toastProvider.presentToast('Les mots de passe doivent être identiques !!!');
                return;
            }
            if (form.controls['username'].invalid) {
                _this.toastProvider.presentToast('Le pseudo doit comporter au moins 3 caractères !!!');
                return;
            }
            _this.userProvider.register(form.controls['email'].value, form.controls['password'].value, form.controls['username'].value)
                .subscribe(function (data) {
                if (data.success) {
                    // stocke les identifiants 
                    _this.storage.set('user_id', data.result.userId);
                    _this.storage.set('user_username', form.controls['username'].value);
                    _this.storage.set('user_email', form.controls['email'].value);
                    _this.toastProvider.presentToast('Inscription validée !!!');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__famille_famille__["a" /* FamillePage */]);
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                _this.toastProvider.presentToast('Inscription impossible :' + err);
                console.log(err);
            });
        };
    }
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\register\register.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inscription</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n<form (ngSubmit)="onSubmit(form)" #form="ngForm">\n\n  <ion-list>    \n\n    <ion-item>\n      <ion-label stacked>E-mail</ion-label>\n      <ion-input type="email" required email=true [(ngModel)]="email" name="email" ></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Mot de passe</ion-label>\n      <ion-input type="password" required minlength="6" [(ngModel)]="password" name="password" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Confirmation mot de passe</ion-label>\n      <ion-input type="password"  name="passwordCopie" [(ngModel)]="password"  ></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Nom Utilisateur</ion-label>\n        <ion-input type="text" required minlength="3" maxlength="50" name="username" [(ngModel)]="username" ></ion-input>\n      </ion-item>\n  \n  </ion-list>\n\n  <button ion-button full type="submit">Valider</button>\n\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChronoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_text_to_speech__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChronoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChronoPage = /** @class */ (function () {
    function ChronoPage(navCtrl, navParams, tts) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.isRunning = false;
        this.temps = __WEBPACK_IMPORTED_MODULE_2_moment__({ hour: 5, minute: 10, seconds: 20 });
        this.afficheTemps = this.temps.format("hh:mm:ss");
        this.onStartChrono = function () {
            _this.tts.speak({ text: 'Il vous reste 5 minutes', locale: 'fr-FR' })
                .then(function () { return console.log('Success'); })
                .catch(function (reason) { return console.log(reason); });
            _this.isRunning = true;
            _this.chrono = setInterval(function () {
                _this.temps.subtract(1, 's');
                _this.afficheTemps = _this.temps.format("hh:mm:ss");
            }, 1000);
        };
        this.onStopChrono = function () {
            clearInterval(_this.chrono);
            _this.isRunning = false;
        };
    }
    ChronoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChronoPage');
    };
    ChronoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chrono',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\chrono\chrono.html"*/'<!--\n  Generated template for the ChronoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title >\n        <img class="img-icon-header" float-start src="assets/imgs/icon-chrono.png"  />\n       LINE\n      <logout></logout>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n{{afficheTemps}}\n\n<ion-fab middle center *ngIf="!isRunning">\n    <button  ion-fab  (click)="onStartChrono()" color="secondary"><ion-icon >START</ion-icon></button>\n</ion-fab>\n<ion-fab middle center *ngIf="isRunning">\n  <button  ion-fab  (click)="onStopChrono()" color="danger"><ion-icon >STOP</ion-icon></button>\n</ion-fab>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n            <ion-col col-3 text-center>\n                <img class="img-icon-footer"   src="assets/imgs/icon-family.png"  />    \n            </ion-col>\n\n          <ion-col col-6 text-center>PLAYTIME</ion-col>\n\n            <ion-col col-3 text-center>\n                <img class="img-icon-footer"   src="assets/imgs/icon-tbb.png"  />\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    </ion-toolbar>            \n  </ion-footer>\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\chrono\chrono.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], ChronoPage);
    return ChronoPage;
}());

//# sourceMappingURL=chrono.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_base_action__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_base_dashboard__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_base_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_base_child__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, toastProvider, userProvider, childProvider, actionProvider, dashboardProvider, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastProvider = toastProvider;
        this.userProvider = userProvider;
        this.childProvider = childProvider;
        this.actionProvider = actionProvider;
        this.dashboardProvider = dashboardProvider;
        this.modalCtrl = modalCtrl;
        this.dashActions = [];
        this.listActions = [];
        this.listActionsFree = [];
        this.selectOptions = {
            title: 'Pizza Toppings',
            subTitle: 'Select your toppings',
            mode: 'md'
        };
        this.onOpenSelectAction = function () {
            _this.selectRef.open();
        };
        this.onAddRealisedAction = function () {
            _this.toastProvider.presentToast("ca marche");
            console.log("click +");
        };
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        if (this.navParams.get('id')) {
            this.childId = this.navParams.get('id');
        }
        else {
            this.childId = 1;
        }
        // Créé un array des actions non utilisées
        var actionId;
        this.dashActions = this.dashboardProvider.getListActionByChild(this.childId);
        //console.log(this.dashActions);
        this.listActions = this.actionProvider.getListAction();
        this.listActionsFree = this.listActions;
        //console.log(this.listActions);
        for (var i = 0, len = this.dashActions.length; i < len; i++) {
            actionId = (this.dashActions[i].idAction) - 1;
            //console.log('actionId=' + actionId);
            this.listActionsFree.splice(actionId, 1);
        }
        ;
        //console.log(this.listActionsFree);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('selectAction'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Select */])
    ], DashboardPage.prototype, "selectRef", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\dashboard\dashboard.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    \n      <ion-title r>\n      <img class="img-icon-header"  float-start src="assets/imgs/icon-tbb.png"  />\n      Line\n      <logout></logout>      \n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n    <ion-fab top right>\n        <button ion-fab (click)="onOpenSelectAction()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n\n    <ion-grid class="select-card">\n        <ion-row>\n  \n          <ion-col col-3 text-center >\n            <div class="badge-title-time-recap" >Gagné</div>\n            <ion-badge class="badge-time-recap">01h10</ion-badge>\n          </ion-col>\n      \n          <ion-col col-3  text-center >\n            <div class="badge-title-time-recap" >Utilisé</div>\n            <ion-badge class="badge-time-recap">01h10</ion-badge>\n          </ion-col>\n  \n          <ion-col col-3 text-center >\n            <div class="badge-title-time-recap" >Restant</div>\n            <ion-badge class="badge-time-recap">01h10</ion-badge>\n          </ion-col>\n  \n          </ion-row>   \n        </ion-grid>\n      \n  <ion-list>\n\n    <ion-item *ngFor="let dashActions of dashActions" >\n      <div class="line-action">\n        <div class="badge-time" [class.badge-positive]="dashActions.positive" [class.badge-negative]="!dashActions.positive">00h20</div>\n        <div class="text-action" text-wrap>{{dashActions.labelAction}}</div>          \n        <ion-badge class="badge-action-count" [class.badge-positive]="dashActions.positive" [class.badge-negative]="!dashActions.positive">{{dashActions.count}}</ion-badge>\n        <ion-icon  class="btn-plus" name="add-circle"  (click)="onAddRealisedAction()"></ion-icon>\n        <ion-icon class="btn-minus" name="remove-circle"  (click)="onRemoveRealisedAction()"></ion-icon>\n      </div> \n    </ion-item>\n  </ion-list>\n\n  <ion-item class="ion-select" >\n  <ion-select  #selectAction [(ngModel)]="action" (ionChange)="addAction()" [selectOptions]="selectOptions"\n  multiple="true" cancelText="Annuler" okText="Ajouter">\n  <ion-option *ngFor="let listAction of listActionsFree" [value]="listAction.id">{{listAction.label}}</ion-option >\n  </ion-select> \n</ion-item>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n            <ion-col col-3 text-center>\n                <img class="img-icon-footer"   src="assets/imgs/icon-family.png"  />    \n            </ion-col>\n\n          <ion-col col-6 text-center>PLAYTIME</ion-col>\n\n            <ion-col col-3 text-center>\n                <img class="img-icon-footer"   src="assets/imgs/icon-tbb.png"  />\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    </ion-toolbar>            \n  </ion-footer>'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_base_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_base_child__["a" /* ChildProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_base_action__["a" /* ActionProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_base_dashboard__["a" /* DashboardProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionProvider = /** @class */ (function () {
    function ActionProvider(http) {
        this.http = http;
        this.getListAction = function () {
            var actions = [
                { id: 1, label: "Mettre la table", positive: true },
                { id: 2, label: "Faire mes devoirs sans raler", positive: true },
                { id: 3, label: "Etre puni(e) à l'ecole", positive: false },
                { id: 4, label: "Embeter mon frère/ma soeur", positive: false },
                { id: 5, label: "Etre sérieux à l'entrainement", positive: true },
                { id: 6, label: "Me préparer tout seul", positive: true },
                { id: 7, label: "Faire un caprice", positive: false },
                { id: 8, label: "Parler mal", positive: false },
                { id: 9, label: "Ranger ma chambre", positive: true },
                { id: 10, label: "Manger sans raler", positive: true },
                { id: 11, label: "Oublier cahiers ou livres", positive: false },
                { id: 12, label: "Bonne note à l'ecole", positive: true }
            ];
            return actions;
        };
    }
    ActionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ActionProvider);
    return ActionProvider;
}());

//# sourceMappingURL=action.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardProvider = /** @class */ (function () {
    function DashboardProvider(http) {
        this.http = http;
        this.getListActionByChild = function (child_id) {
            var dashs = [
                { idChild: 1, idAction: 1, time: 10, count: 22, countMax: 10, labelAction: "Mettre la table", positive: true },
                { idChild: 1, idAction: 2, time: 10, count: 2, countMax: 6, labelAction: "Faire mes devoirs sans raler", positive: true },
                { idChild: 1, idAction: 2, time: 10, count: 2, countMax: 6, labelAction: "Faire mes devoirs sans raler", positive: true },
            ];
            return dashs;
        };
    }
    DashboardProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DashboardProvider);
    return DashboardProvider;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastProvider = /** @class */ (function () {
    function ToastProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.messagesErreurs = [
            {
                code: 'auth/email-already-in-use',
                messageEnglish: 'Thrown if there already exists an account with the given email address',
                messageFrench: 'Cette adresse email est déjà utilisé par un autre compte'
            },
            {
                code: 'auth/invalid-email',
                messageEnglish: 'Thrown if the email address is not valid',
                messageFrench: 'L\'adresse email est invalide'
            },
            {
                code: 'auth/operation-not-allowed',
                messageEnglish: 'Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab',
                messageFrench: 'L\'adresse email ou le mot de passe n\'est pas valide'
            },
            {
                code: 'auth/weak-password',
                messageEnglish: 'Thrown if the password is not strong enough',
                messageFrench: 'Le mot de passe doit contenir au moins 6 caractères'
            },
            {
                code: 'auth/user-disabled',
                messageEnglish: 'Thrown if the user corresponding to the given email has been disabled',
                messageFrench: 'Cet utilisateur est désactivé'
            },
            {
                code: 'auth/user-not-found',
                messageEnglish: 'Thrown if there is no user corresponding to the given email.',
                messageFrench: 'L\'adresse email et le mot de passe ne correspondent pas'
            },
            {
                code: 'auth/wrong-password',
                messageEnglish: 'Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set',
                messageFrench: 'L\'adresse email et le mot de passe ne correspondent pas'
            },
        ];
    }
    // Retourne les messages d'erreurs en français
    ToastProvider.prototype.get_messagesErreurs = function (param_message_erreur) {
        var result = this.messagesErreurs.filter(function (message) { return message.code === param_message_erreur; });
        if (result.length > 0) {
            this.messageErreur = result[0].messageFrench;
        }
        else {
            this.messageErreur = "Opération impossible";
        }
        return this.messageErreur;
    };
    ToastProvider.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top',
            dismissOnPageChange: false,
            cssClass: 'presentToast'
        });
        /*
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        
        */
        toast.present();
    };
    ToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_famille_famille__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_enfant_enfant__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_connexion_connexion__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chrono_chrono__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modal_action_modal_action__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_logout_logout__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_api_base_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_api_base_child__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_api_base_action__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_api_base_dashboard__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_text_to_speech__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_logout_logout__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_famille_famille__["a" /* FamillePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_enfant_enfant__["a" /* EnfantPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modal_action_modal_action__["a" /* ModalActionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chrono_chrono__["a" /* ChronoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_logout_logout__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_famille_famille__["a" /* FamillePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_enfant_enfant__["a" /* EnfantPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modal_action_modal_action__["a" /* ModalActionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chrono_chrono__["a" /* ChronoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_toast_toast__["a" /* ToastProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_api_base_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_api_base_child__["a" /* ChildProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_api_base_action__["a" /* ActionProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_api_base_dashboard__["a" /* DashboardProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_text_to_speech__["a" /* TextToSpeech */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_famille_famille__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_connexion_connexion__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chrono_chrono__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // page par défaut
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_chrono_chrono__["a" /* ChronoPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'Home', component: HomePage },
            // { title: 'List', component: ListPage },
            { title: 'Inscription', component: __WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */] },
            { title: 'Connexion', component: __WEBPACK_IMPORTED_MODULE_6__pages_connexion_connexion__["a" /* ConnexionPage */] },
            { title: 'Ma famille', component: __WEBPACK_IMPORTED_MODULE_5__pages_famille_famille__["a" /* FamillePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playTime\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playTime\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 209,
	"./af.js": 209,
	"./ar": 210,
	"./ar-dz": 211,
	"./ar-dz.js": 211,
	"./ar-kw": 212,
	"./ar-kw.js": 212,
	"./ar-ly": 213,
	"./ar-ly.js": 213,
	"./ar-ma": 214,
	"./ar-ma.js": 214,
	"./ar-sa": 215,
	"./ar-sa.js": 215,
	"./ar-tn": 216,
	"./ar-tn.js": 216,
	"./ar.js": 210,
	"./az": 217,
	"./az.js": 217,
	"./be": 218,
	"./be.js": 218,
	"./bg": 219,
	"./bg.js": 219,
	"./bm": 220,
	"./bm.js": 220,
	"./bn": 221,
	"./bn.js": 221,
	"./bo": 222,
	"./bo.js": 222,
	"./br": 223,
	"./br.js": 223,
	"./bs": 224,
	"./bs.js": 224,
	"./ca": 225,
	"./ca.js": 225,
	"./cs": 226,
	"./cs.js": 226,
	"./cv": 227,
	"./cv.js": 227,
	"./cy": 228,
	"./cy.js": 228,
	"./da": 229,
	"./da.js": 229,
	"./de": 230,
	"./de-at": 231,
	"./de-at.js": 231,
	"./de-ch": 232,
	"./de-ch.js": 232,
	"./de.js": 230,
	"./dv": 233,
	"./dv.js": 233,
	"./el": 234,
	"./el.js": 234,
	"./en-au": 235,
	"./en-au.js": 235,
	"./en-ca": 236,
	"./en-ca.js": 236,
	"./en-gb": 237,
	"./en-gb.js": 237,
	"./en-ie": 238,
	"./en-ie.js": 238,
	"./en-il": 239,
	"./en-il.js": 239,
	"./en-nz": 240,
	"./en-nz.js": 240,
	"./eo": 241,
	"./eo.js": 241,
	"./es": 242,
	"./es-do": 243,
	"./es-do.js": 243,
	"./es-us": 244,
	"./es-us.js": 244,
	"./es.js": 242,
	"./et": 245,
	"./et.js": 245,
	"./eu": 246,
	"./eu.js": 246,
	"./fa": 247,
	"./fa.js": 247,
	"./fi": 248,
	"./fi.js": 248,
	"./fo": 249,
	"./fo.js": 249,
	"./fr": 250,
	"./fr-ca": 251,
	"./fr-ca.js": 251,
	"./fr-ch": 252,
	"./fr-ch.js": 252,
	"./fr.js": 250,
	"./fy": 253,
	"./fy.js": 253,
	"./gd": 254,
	"./gd.js": 254,
	"./gl": 255,
	"./gl.js": 255,
	"./gom-latn": 256,
	"./gom-latn.js": 256,
	"./gu": 257,
	"./gu.js": 257,
	"./he": 258,
	"./he.js": 258,
	"./hi": 259,
	"./hi.js": 259,
	"./hr": 260,
	"./hr.js": 260,
	"./hu": 261,
	"./hu.js": 261,
	"./hy-am": 262,
	"./hy-am.js": 262,
	"./id": 263,
	"./id.js": 263,
	"./is": 264,
	"./is.js": 264,
	"./it": 265,
	"./it.js": 265,
	"./ja": 266,
	"./ja.js": 266,
	"./jv": 267,
	"./jv.js": 267,
	"./ka": 268,
	"./ka.js": 268,
	"./kk": 269,
	"./kk.js": 269,
	"./km": 270,
	"./km.js": 270,
	"./kn": 271,
	"./kn.js": 271,
	"./ko": 272,
	"./ko.js": 272,
	"./ky": 273,
	"./ky.js": 273,
	"./lb": 274,
	"./lb.js": 274,
	"./lo": 275,
	"./lo.js": 275,
	"./lt": 276,
	"./lt.js": 276,
	"./lv": 277,
	"./lv.js": 277,
	"./me": 278,
	"./me.js": 278,
	"./mi": 279,
	"./mi.js": 279,
	"./mk": 280,
	"./mk.js": 280,
	"./ml": 281,
	"./ml.js": 281,
	"./mn": 282,
	"./mn.js": 282,
	"./mr": 283,
	"./mr.js": 283,
	"./ms": 284,
	"./ms-my": 285,
	"./ms-my.js": 285,
	"./ms.js": 284,
	"./mt": 286,
	"./mt.js": 286,
	"./my": 287,
	"./my.js": 287,
	"./nb": 288,
	"./nb.js": 288,
	"./ne": 289,
	"./ne.js": 289,
	"./nl": 290,
	"./nl-be": 291,
	"./nl-be.js": 291,
	"./nl.js": 290,
	"./nn": 292,
	"./nn.js": 292,
	"./pa-in": 293,
	"./pa-in.js": 293,
	"./pl": 294,
	"./pl.js": 294,
	"./pt": 295,
	"./pt-br": 296,
	"./pt-br.js": 296,
	"./pt.js": 295,
	"./ro": 297,
	"./ro.js": 297,
	"./ru": 298,
	"./ru.js": 298,
	"./sd": 299,
	"./sd.js": 299,
	"./se": 300,
	"./se.js": 300,
	"./si": 301,
	"./si.js": 301,
	"./sk": 302,
	"./sk.js": 302,
	"./sl": 303,
	"./sl.js": 303,
	"./sq": 304,
	"./sq.js": 304,
	"./sr": 305,
	"./sr-cyrl": 306,
	"./sr-cyrl.js": 306,
	"./sr.js": 305,
	"./ss": 307,
	"./ss.js": 307,
	"./sv": 308,
	"./sv.js": 308,
	"./sw": 309,
	"./sw.js": 309,
	"./ta": 310,
	"./ta.js": 310,
	"./te": 311,
	"./te.js": 311,
	"./tet": 312,
	"./tet.js": 312,
	"./tg": 313,
	"./tg.js": 313,
	"./th": 314,
	"./th.js": 314,
	"./tl-ph": 315,
	"./tl-ph.js": 315,
	"./tlh": 316,
	"./tlh.js": 316,
	"./tr": 317,
	"./tr.js": 317,
	"./tzl": 318,
	"./tzl.js": 318,
	"./tzm": 319,
	"./tzm-latn": 320,
	"./tzm-latn.js": 320,
	"./tzm.js": 319,
	"./ug-cn": 321,
	"./ug-cn.js": 321,
	"./uk": 322,
	"./uk.js": 322,
	"./ur": 323,
	"./ur.js": 323,
	"./uz": 324,
	"./uz-latn": 325,
	"./uz-latn.js": 325,
	"./uz.js": 324,
	"./vi": 326,
	"./vi.js": 326,
	"./x-pseudo": 327,
	"./x-pseudo.js": 327,
	"./yo": 328,
	"./yo.js": 328,
	"./zh-cn": 329,
	"./zh-cn.js": 329,
	"./zh-hk": 330,
	"./zh-hk.js": 330,
	"./zh-tw": 331,
	"./zh-tw.js": 331
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 411;

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__famille_famille__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connexion_connexion__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () { };
    HomePage.prototype.onLienFamille = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__famille_famille__["a" /* FamillePage */]);
    };
    HomePage.prototype.onLienConnexion = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__connexion_connexion__["a" /* ConnexionPage */]);
    };
    HomePage.prototype.onLienInscription = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-title>PLAYTIME </ion-title>\n\n<ion-list>\n      \n  <ion-item>Gérer le temps de loisir de vos enfants</ion-item>  \n  \n  <ion-item *ngIf="isAuth"><button ion-button full (click)="onLienFamille()">Ma famille</button></ion-item>\n\n  <ion-item *ngIf="!isAuth"><button ion-button full (click)="onLienConnexion()">Connexion</button></ion-item>\n \n  <ion-item *ngIf="!isAuth"><button ion-button full (click)="onLienInscription()">Inscription</button></ion-item>\n    <logout></logout> <!-- bouton déconnexion-->\n  </ion-list> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnfantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__famille_famille__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EnfantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnfantPage = /** @class */ (function () {
    function EnfantPage(navCtrl, navParams, toastProvider, childProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastProvider = toastProvider;
        this.childProvider = childProvider;
        this.childSexe = 0;
        this.onSubmit = function (formChild) {
            if (formChild.controls['firstname'].invalid) {
                _this.toastProvider.presentToast('Le prénom doit être renseigné !!!');
                return;
            }
            /********Ajout de l'enfant sur la base de données mySql via l'api************* */
            _this.api_result = _this.childProvider.addChild(_this.userAuthId, formChild.controls['firstname'].value, formChild.controls['nickname'].value, formChild.controls['sexe'].value);
            if (_this.api_result[0].sucess) {
                _this.toastProvider.presentToast("Fiche enfant créee");
                //----------- Retour Home            
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__famille_famille__["a" /* FamillePage */]);
            }
            else {
                _this.toastProvider.presentToast("Création enfant impossible");
            }
        };
    }
    EnfantPage.prototype.ionViewDidLoad = function () {
        console.clear();
        console.log('ionViewDidLoad EnfantPage');
    };
    EnfantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enfant',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\enfant\enfant.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="Enfant"></ion-icon>\n    </button>\n    <ion-title>Enfant</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="onSubmit(formChild)" #formChild="ngForm">\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Prénom  </ion-label>\n      <ion-input type="text" required  ngModel name="firstname"  ></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Surnom</ion-label>\n      <ion-input type="text" ngModel name="nickname"></ion-input>\n    </ion-item>\n\n    <ion-list radio-group [(ngModel)]="childSexe" name=sexe>\n        <ion-label>Sexe</ion-label>\n      <ion-item>\n        <ion-label>Fille</ion-label>\n        <ion-radio value=0 ></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Garçon</ion-label>\n        <ion-radio value=1  ></ion-radio>\n      </ion-item>\n     \n    </ion-list>\n\n    \n  \n  </ion-list>\n\n  <button ion-button full type="submit" >Validation</button>\n\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\enfant\enfant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__["a" /* ChildProvider */]])
    ], EnfantPage);
    return EnfantPage;
}());

//# sourceMappingURL=enfant.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalActionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalActionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalActionPage = /** @class */ (function () {
    function ModalActionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalActionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalActionPage');
    };
    ModalActionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-action',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\modal-action\modal-action.html"*/'<!--\n  Generated template for the ModalActionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ajouter une action</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\modal-action\modal-action.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalActionPage);
    return ModalActionPage;
}());

//# sourceMappingURL=modal-action.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_connexion_connexion__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LogoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(navCtrl, navParams, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
    }
    LogoutComponent.prototype.onSigneOut = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Voulez-vous vraiment vous déconnecter ?',
            buttons: [
                {
                    text: 'Annuler',
                    handler: function () {
                        console.log('Annuler');
                    }
                },
                {
                    text: 'OUI',
                    handler: function () {
                        // vide les varirables locales et renvoi à la page de connexion
                        _this.storage.remove('playtime_user_id');
                        _this.storage.remove('playtime_user_username');
                        _this.storage.remove('playtime_user_email');
                        _this.isAuth = false;
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_connexion_connexion__["a" /* ConnexionPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'logout',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playTime\src\components\logout\logout.html"*/'<!-- Generated template for the LogoutComponent component -->\n\n<ion-icon float-end color=\'danger\' name="exit" (click)="onSigneOut()"></ion-icon> \n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playTime\src\components\logout\logout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LogoutComponent);
    return LogoutComponent;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        var _this = this;
        this.http = http;
        this.register = function (email, password, username) {
            var postData = new FormData();
            postData.append('email', email);
            postData.append('password', password);
            postData.append('username', username);
            var uri_api = 'http://localhost/playtime/user/user_add.php';
            var tab_retour = _this.http.post(uri_api, postData);
            return tab_retour;
        };
        this.login = function (email, password) {
            var postData = new FormData();
            postData.append('email', email);
            postData.append('password', password);
            var uri_api = 'http://localhost/playtime/user/user_connexion.php';
            var tab_retour = _this.http.post(uri_api, postData);
            return tab_retour;
        };
    }
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamillePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chrono_chrono__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_base_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_base_child__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the FamillePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FamillePage = /** @class */ (function () {
    function FamillePage(navCtrl, navParams, toastProvider, userProvider, childProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastProvider = toastProvider;
        this.userProvider = userProvider;
        this.childProvider = childProvider;
        this.storage = storage;
        this.onLinkChrono = function (childId) {
            console.log('childId:' + childId);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_chrono_chrono__["a" /* ChronoPage */], { id: childId });
        };
        this.onLinkDashboardChild = function (childId) {
            console.log('Dashboard id:' + childId);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__["a" /* DashboardPage */], { id: childId });
        };
        this.onLinkFormChild = function (childId) {
            console.log('Enfant id:' + childId);
            //this.navCtrl.push(EnfantPage, {id: childId});
        };
    }
    FamillePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.clear();
        this.storage.get('user_id').then(function (val) {
            if ((val == null)) {
                _this.toastProvider.presentToast("Vous n'êtes pas connecté");
                // this.navCtrl.setRoot( ConnexionPage );
            }
            else {
                _this.user_id = val;
                _this.isAuth = true;
            }
        }).catch(function (err) {
            _this.toastProvider.presentToast("Vous n'êtes pas connecté");
            // this.navCtrl.setRoot( ConnexionPage);
        });
        this.storage.get('user_username').then(function (val) {
            _this.user_username = val;
            console.log(_this.user_username);
        }).catch(function (err) {
            _this.toastProvider.presentToast("Vous n'êtes pas connecté");
            //this.navCtrl.setRoot( ConnexionPage);
        });
        this.childs = this.childProvider.getListChildByUser('1');
    };
    FamillePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-famille',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\famille\famille.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <!-->\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  -->\n\n    <ion-title text-center>\n\n        <img class="img-icon-header" float-start src="assets/imgs/icon-family.png"  />\n\n      <span>Famille</span>\n\n      <logout></logout>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding> \n\n    <ion-list >\n\n      <ion-col no-padding col-12 *ngFor="let child of childs">\n\n        <ion-item>\n\n            <ion-card color="card-color">\n\n\n\n                <ion-card-content no-padding>\n\n          <ion-grid no-padding>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                      <img class="img-family-child" src="assets/imgs/boy.png" *ngIf="child.sexe" />\n\n                      <img class="img-family-child" src="assets/imgs/girl.png" *ngIf="!child.sexe" />                    \n\n              </ion-col>\n\n              <ion-col col-8>\n\n                  <ion-grid>\n\n                      <ion-row>\n\n                          <ion-col col-12>\n\n                              <ion-card-title class="ion-card-title" no-padding text-center text-wrap *ngIf="!child.nickname">\n\n                                  {{child.firstname }}\n\n                                </ion-card-title>\n\n                                <ion-card-title class="ion-card-title" no-padding text-center *ngIf="child.nickname">\n\n                                  {{child.nickname }}\n\n                                </ion-card-title>\n\n                            </ion-col>\n\n                      </ion-row>\n\n                    <ion-row>\n\n                      <ion-col col-3>\n\n                        <img class="img-icon" src="assets/imgs/icon-tbb.png" (click)="onLinkDashboardChild(childs.id)"  />\n\n                      </ion-col>\n\n                      <ion-col col-3 class="vertical-align">                   \n\n                          {{child.playtime}}\n\n                      </ion-col>                   \n\n                      <ion-col col-3>   \n\n                        <img class="img-icon" src="assets/imgs/icon-chrono.png" (click)="onLinkChrono(childs.id)" /> \n\n                      </ion-col>\n\n                      <ion-col col-3>   \n\n                          <img class="img-icon" src="assets/imgs/icon-modif.png" (click)="onLinkChronoChild(childs.id)" /> \n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n              </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        </ion-card-content>\n\n        </ion-card>\n\n       </ion-item>\n\n      </ion-col> \n\n    </ion-list>\n\n    \n\n  <button ion-button full (click)="onLinkFormEnfant(0)">Ajouter un enfant</button>\n\n</ion-content>  \n\n  \n\n    \n\n  \n\n    \n\n  \n\n  \n\n  \n\n  \n\n  '/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\famille\famille.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_base_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_base_child__["a" /* ChildProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], FamillePage);
    return FamillePage;
}());

//# sourceMappingURL=famille.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildProvider = /** @class */ (function () {
    function ChildProvider(http) {
        this.http = http;
        this.addChild = function (user_auth_id, child_firstname, child_nickname, child_sexe) {
            /*
               const api_key = 25;
               const uri_movie = 'https://api.themoviedb.org/3/movie/'+ user_id +'?api_key=' + api_key;
                 return this.http.get(uri_movie);
               */
            //const tab_retour = [{sucess: true}];
            var tab_retour = [{ sucess: true }];
            //delete user sur fire base
            //this.afAuth.auth.currentUser.delete;
            return tab_retour;
        };
        this.getListChildByUser = function (user_auth_id) {
            /*
                const uri_child = 'http://localhost/playtime/child.php?id=1';
                let childs =  this.http.get(uri_child)
                .map( (resultat) => {
                  return resultat;
                })
                .catch(this.handleError)
              }
                */
            var childs = [
                { id: 1, firstname: "Pierre Henri Michel", nickname: null, sexe: 1, playtime: '01h10' },
                { id: 2, firstname: "Cèline", nickname: "Line", sexe: 0, playtime: '00h40' }
            ];
            return childs;
        };
        this.getDetailChild = function (child_id) {
            var child;
            if (child_id === 1) {
                child = { id: 1, firstname: "Pierre", nickname: null, sexe: 1, playtime: '01h10' };
            }
            else {
                child = { id: 2, firstname: "Cèline", nickname: "Line", sexe: 0, playtime: '00h40' };
            }
            return child;
        };
    }
    ChildProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ChildProvider);
    return ChildProvider;
}());

//# sourceMappingURL=child.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConnexionPage = /** @class */ (function () {
    function ConnexionPage(navCtrl, navParams, toastProvider, userProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastProvider = toastProvider;
        this.userProvider = userProvider;
        this.storage = storage;
        this.username = "username";
        this.email = "toto@enshort.com";
        this.password = "123456";
        this.passwordCopie = "123456";
        this.onSubmit = function (form) {
            // si formulaire invalide affiche la première erreur
            if (form.controls['email'].invalid) {
                _this.toastProvider.presentToast('L\'adresse email est invalide !!!');
                return;
            }
            if (form.controls['password'].invalid) {
                _this.toastProvider.presentToast('Le mot de passe doit comporter au moins 6 caractères !!!');
                return;
            }
            if (form.controls["passwordCopie"]) {
                /****************** Inscription ***************/
                if (form.controls['username'].invalid) {
                    _this.toastProvider.presentToast('Le pseudo doit comporter au moins 3 caractères !!!');
                    return;
                }
                if (form.controls['password'].value != form.controls['passwordCopie'].value) {
                    _this.toastProvider.presentToast('Les mots de passe doivent être identiques !!!');
                    return;
                }
                _this.userProvider.register(form.controls['email'].value, form.controls['password'].value, form.controls['username'].value)
                    .subscribe(function (data) {
                    if (data.success) {
                        // stocke les identifiants        
                        _this.storage.set('playtime_user_id', data.result.userId);
                        _this.storage.set('playtime_user_username', form.controls['username'].value);
                        _this.storage.set('playtime_user_email', form.controls['email'].value);
                        _this.toastProvider.presentToast('Inscription validée');
                    }
                    else {
                        _this.toastProvider.presentToast(data.message);
                    }
                }, function (err) {
                    _this.toastProvider.presentToast('Inscription impossible :' + err);
                    console.log(err);
                });
            }
            else {
                /***************** Connexion ****************/
                _this.userProvider.login(form.controls['email'].value, form.controls['password'].value)
                    .subscribe(function (data) {
                    if (data.success) {
                        // stocke les identifiants        
                        _this.storage.set('user_id', data.result.userId);
                        _this.storage.set('user_username', form.controls['username'].value);
                        _this.storage.set('user_email', form.controls['email'].value);
                        _this.toastProvider.presentToast('Vous êtes connecté');
                    }
                    else {
                        _this.toastProvider.presentToast(data.message);
                    }
                }, function (err) {
                    _this.toastProvider.presentToast('Connexion impossible :' + err);
                    console.log(err);
                });
            }
        };
    }
    ConnexionPage.prototype.ionViewDidLoad = function () {
        //efface les identifiants sur le device
        this.storage.clear();
    };
    ConnexionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connexion',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\connexion\connexion.html"*/'<!--\n\n  Generated template for the ConnexionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>LOGIN</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  \n\n\n\n  <form (ngSubmit)="onSubmit(formLogin)" #formLogin="ngForm">\n\n\n\n    <ion-list>\n\n      \n\n        <ion-item>\n\n            <ion-label stacked>E-mail</ion-label>\n\n            <ion-input type="email" required email=true ngModel name="email" ></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n            <ion-label stacked>Mot de passe</ion-label>\n\n            <ion-input type="password" required minlength="6" ngModel name="password" ></ion-input>\n\n          </ion-item>   \n\n    \n\n    </ion-list>\n\n  \n\n    <button ion-button full type="submit">Connexion</button>\n\n    \n\n    </form>\n\n\n\n\n\n    <form (ngSubmit)="onSubmit(formRegister)" #formRegister="ngForm">\n\n  \n\n      <ion-list>    \n\n    \n\n        <ion-item>\n\n          <ion-label stacked>E-mail</ion-label>\n\n          <ion-input type="email" required email=true [(ngModel)]="email" name="email" ></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Mot de passe</ion-label>\n\n          <ion-input type="password" required minlength="6" [(ngModel)]="password" name="password" ></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-label stacked>Confirmation mot de passe</ion-label>\n\n          <ion-input type="password"  name="passwordCopie" [(ngModel)]="password"  ></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n            <ion-label stacked>Nom Utilisateur</ion-label>\n\n            <ion-input type="text" required minlength="3" maxlength="50" name="username" [(ngModel)]="username" ></ion-input>\n\n          </ion-item>\n\n      \n\n      </ion-list>\n\n    \n\n      <button ion-button full type="submit">Inscription</button>\n\n    \n\n    </form>\n\n\n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playTime\src\pages\connexion\connexion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ConnexionPage);
    return ConnexionPage;
}());

//# sourceMappingURL=connexion.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map
webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
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
        var _this = this;
        this.http = http;
        this.getListActionByChild = function (child_id) {
            var uri_action_list = 'https://davy3165.000webhostapp.com/dashboard/dashboard_action_child.php?id=' + child_id;
            var tab_retour = _this.http.get(uri_action_list);
            console.log(' provider -liste action par enfant  : ' + uri_action_list);
            return tab_retour;
        };
        this.getListActionsNoSelected = function (child_id) {
            var uri_action_list = 'https://davy3165.000webhostapp.com/dashboard/dashboard_actions_child_noSelected.php?id=' + child_id;
            var tab_retour = _this.http.get(uri_action_list);
            console.log(' provider -actions non sélectionnées : ' + uri_action_list);
            //console.log(tab_retour);
            return tab_retour;
        };
        this.affectActionChild = function (child_id, actions) {
            console.log("provider Affecte");
            var i = 0;
            var postData = new FormData();
            postData.append('childId', child_id);
            actions.forEach(function (element) {
                i++;
                postData.append('action_' + i, element);
                postData.append('nb_action', i.toString());
            });
            var uri_api = 'https://davy3165.000webhostapp.com/dashboard/dashboard_affect.php';
            var tab_retour = _this.http.post(uri_api, postData);
            console.log(uri_api);
            console.log("i=" + i);
            console.log(tab_retour);
            return tab_retour;
        };
        this.deleteAffectation = function (action_id) {
            var uri_action_list = 'https://davy3165.000webhostapp.com/dashboard/dashboard_desaffecte.php?id=' + action_id;
            var tab_retour = _this.http.get(uri_action_list);
            console.log('provider - désaffectation : ' + uri_action_list);
            return tab_retour;
        };
        this.changeNbRealisedAction = function (action, action_id) {
            var uri_action_list = 'https://davy3165.000webhostapp.com/dashboard/dashboard_change_nbRealised.php?action=' + action + '&id=' + action_id;
            var tab_retour = _this.http.get(uri_action_list);
            console.log('provider - ' + action + ' action : ' + uri_action_list);
            return tab_retour;
        };
    }
    DashboardProvider.prototype.convertMinuteHeure = function (minute) {
        var signe = "";
        var heure;
        var min;
        if (minute < 0) {
            minute = -minute;
            console.log(minute);
            signe = "-";
        }
        var mm = minute % 60;
        var h = (minute - mm) / 60;
        if (h < 10) {
            heure = "0" + h;
        }
        else {
            heure = h;
        }
        if (mm < 10) {
            min = "0" + mm;
        }
        else {
            min = mm;
        }
        return (signe + heure + "H" + min);
    };
    DashboardProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], DashboardProvider);
    return DashboardProvider;
    var _a;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnfantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__famille_famille__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(47);
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
    function EnfantPage(navCtrl, navParams, toastProvider, childProvider, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastProvider = toastProvider;
        this.childProvider = childProvider;
        this.alertCtrl = alertCtrl;
        /******************************** Soummission Formulaire *********************************** */
        this.onSubmit = function (form) {
            // Teste le prénom
            if (form.controls['firstname'].invalid) {
                _this.toastProvider.presentToast('Le prénom doit être renseigné !!!');
                return;
            }
            if (_this.child_id === 0) {
                /******************** Ajout enfant ************************* */
                _this.childDetail = _this.childProvider.addChild(_this.user_id, form.controls['firstname'].value, form.controls['nickname'].value, form.controls['sexe'].value)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.toastProvider.presentToast('Enfant ajouté');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__famille_famille__["a" /* FamillePage */]);
                    }
                    else {
                        console.log(data);
                        _this.toastProvider.presentToast(data.message);
                    }
                }, function (err) {
                    _this.toastProvider.presentToast('ajout de l\'enfant impossible :' + err);
                });
            }
            else {
                /******************** Modif enfant ************************* */
                _this.childDetail = _this.childProvider.updateChild(_this.child_id, form.controls['firstname'].value, form.controls['nickname'].value, form.controls['sexe'].value)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.toastProvider.presentToast('Enfant modifié');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__famille_famille__["a" /* FamillePage */]);
                    }
                    else {
                        console.log(data);
                        _this.toastProvider.presentToast(data.message);
                    }
                }, function (err) {
                    _this.toastProvider.presentToast('Modification de l\'enfant impossible :' + err);
                });
            }
        };
        this.onChildDelete = function () {
            var confirm = _this.alertCtrl.create({
                title: 'Voulez-vous vraiment vous vraiment enlever  ' + _this.firstname + ' de \'application ?',
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
                            /******************** Modif enfant ************************* */
                            _this.childDetail = _this.childProvider.deleteChild(_this.child_id)
                                .subscribe(function (data) {
                                if (data.success) {
                                    _this.toastProvider.presentToast('Enfant enlevé de l\'application');
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__famille_famille__["a" /* FamillePage */]);
                                }
                                else {
                                    console.log(data);
                                    _this.toastProvider.presentToast(data.message);
                                }
                            }, function (err) {
                                _this.toastProvider.presentToast('Suppression de l\'enfant impossible :' + err);
                            });
                        }
                    }
                ]
            });
            confirm.present();
        };
        this.onLinkCancel = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__famille_famille__["a" /* FamillePage */]);
        };
        this.onLinkDashboard = function () {
            console.log('Dashboard id:' + _this.child_id);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */], { id: _this.child_id });
        };
        this.onLinkFamily = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__famille_famille__["a" /* FamillePage */]);
        };
    }
    EnfantPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.clear();
        console.log('ionViewDidLoad EnfantPage');
        console.log(this.navParams.get('childId'));
        console.log(this.navParams.get('userId'));
        // initialise le formulaire
        this.child_id = this.navParams.get('childId');
        this.user_id = this.navParams.get('userId');
        if (this.child_id === 0) {
            /******************** Ajout enfant ************************* */
            this.sexe = 'M';
        }
        else {
            /******************** Modif enfant ************************* */
            this.childDetail = this.childProvider.getDetailChild(this.child_id)
                .subscribe(function (data) {
                if (data.success) {
                    _this.childDetail = data.result[0];
                    _this.firstname = _this.childDetail.firstname;
                    _this.nickname = _this.childDetail.nickname;
                    _this.sexe = _this.childDetail.gender;
                }
                else {
                    console.log(data);
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                _this.toastProvider.presentToast('Inscription impossible :' + err);
                console.log(err);
            });
        }
    };
    EnfantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enfant',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\enfant\enfant.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-left>\n\n      <img class="img-icon-header" float-start src="assets/imgs/icon-child.png"  />\n\n    <span>Enfant</span>\n\n    <logout></logout>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <form (ngSubmit)="onSubmit(form)" #form="ngForm">\n\n\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Prénom </ion-label>\n\n        <ion-input type="text" required  [(ngModel)]=\'firstname\' name="firstname" minlength="3" maxlength="100" ></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label stacked>Surnom (non obligatoire)</ion-label>\n\n        <ion-input type="text" [(ngModel)]=\'nickname\' name="nickname" ngModel  minlength="3" maxlength="100"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-list radio-group [(ngModel)]="sexe" name=sexe>\n\n        <ion-label>Sexe</ion-label>\n\n        <ion-item>\n\n          <ion-label>Fille</ion-label>\n\n          <ion-radio value=\'F\'></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Garçon</ion-label>\n\n          <ion-radio value=\'M\' ></ion-radio>\n\n        </ion-item>     \n\n      </ion-list> \n\n\n\n    </ion-list>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-4 text-center>\n\n          <button ion-button  text-center class="btn-form" type="submit" float-start  >Validation</button>\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n          <button ion-button text-center class="btn-form"type="button" float-start (click)="onChildDelete()" color=danger >Suppression</button>\n\n        </ion-col>\n\n        <ion-col col-4 text-center>  \n\n          <button ion-button text-center class="btn-form" type="button" float-end  (click)="onLinkCancel()">Annuler  </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>  \n\n  </form>\n\n\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-3 text-center>\n\n                <img class="img-icon-footer" src="assets/imgs/icon-family.png" (click)="onLinkFamily()" />    \n\n            </ion-col>\n\n\n\n          <ion-col col-6 text-center>PLAYTIME</ion-col>\n\n\n\n            <ion-col col-3 text-center>\n\n                <img class="img-icon-footer" src="assets/imgs/icon-tbb.png" (click)="onLinkDashboard()" />\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    </ion-toolbar>            \n\n  </ion-footer>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\enfant\enfant.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__["a" /* ChildProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__["a" /* ChildProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], EnfantPage);
    return EnfantPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=enfant.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamillePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_enfant_enfant__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chrono_chrono__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_base_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_base_child__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(37);
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
        /**********recupere sur la base la liste des enfants************************************/
        this.getListChild = function (param_user_id) {
            _this.childProvider.getListChildByUser(param_user_id)
                .subscribe(function (data) {
                if (data.success) {
                    _this.childs = data.result;
                    console.log(data.result);
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                _this.toastProvider.presentToast('Pas d\'enfants :' + err);
                console.log(err);
            });
        };
        this.onLinkChrono = function (childId) {
            console.log('childId:' + childId);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_chrono_chrono__["a" /* ChronoPage */], { id: childId });
        };
        this.onLinkDashboardChild = function (childId) {
            console.log('Dashboard id:' + childId);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard__["a" /* DashboardPage */], { id: childId });
        };
        this.onLinkFormChild = function (param_childId) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_enfant_enfant__["a" /* EnfantPage */], { userId: _this.user_id, childId: param_childId });
        };
    }
    FamillePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.clear();
        console.log("famille");
        this.storage.get('playtime_user_id').then(function (val) {
            if ((val == null)) {
                _this.toastProvider.presentToast("Vous n'êtes pas connecté");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__["a" /* ConnexionPage */]);
            }
            else {
                /// *****Connecté *******************/
                _this.user_id = val;
                _this.isAuth = true;
                console.log("id= " + _this.user_id);
                _this.getListChild(_this.user_id);
            }
        }).catch(function (err) {
            _this.toastProvider.presentToast("Vous n'êtes pas connecté");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__["a" /* ConnexionPage */]);
        });
        this.storage.get('playtime_user_username').then(function (val) {
            _this.user_username = val;
            console.log(_this.user_username);
        }).catch(function (err) {
            _this.toastProvider.presentToast("Vous n'êtes pas connecté");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__["a" /* ConnexionPage */]);
        });
    };
    FamillePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-famille',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\famille\famille.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <!-->\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  -->\n\n    <ion-title text-left>\n\n        <img class="img-icon-header" float-start src="assets/imgs/icon-family.png"  />\n\n      <span>Famille</span>\n\n      <logout></logout>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding> \n\n    <ion-list >\n\n      <ion-col no-padding col-12 *ngFor="let child of childs">\n\n        <ion-item>\n\n            <ion-card color="card-color">\n\n\n\n                <ion-card-content no-padding>\n\n          <ion-grid no-padding>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                      <img class="img-family-child" src="assets/imgs/boy.png" *ngIf="child.gender==\'M\'" />\n\n                      <img class="img-family-child" src="assets/imgs/girl.png" *ngIf="child.gender==\'F\'" />                    \n\n              </ion-col>\n\n              <ion-col col-8>\n\n                  <ion-grid>\n\n                      <ion-row>\n\n                          <ion-col col-12>\n\n                              <ion-card-title class="ion-card-title" no-padding text-center text-wrap *ngIf="!child.nickname">\n\n                                  {{child.firstname }}\n\n                                </ion-card-title>\n\n                                <ion-card-title class="ion-card-title" no-padding text-center *ngIf="child.nickname">\n\n                                  {{child.nickname }}\n\n                                </ion-card-title>\n\n                            </ion-col>\n\n                      </ion-row>\n\n                    <ion-row>\n\n                      <ion-col col-3>\n\n                        <img class="img-icon" src="assets/imgs/icon-tbb.png" (click)="onLinkDashboardChild(child.id)"  />\n\n                      </ion-col>\n\n                      <ion-col col-3 class="vertical-align">                   \n\n                          {{child.playTime }}\n\n                      </ion-col>                   \n\n                      <ion-col col-3>   \n\n                        <img class="img-icon" src="assets/imgs/icon-chrono.png" (click)="onLinkChrono(child.id)" /> \n\n                      </ion-col>\n\n                      <ion-col col-3 col-bottom> \n\n                          <ion-icon name="person" float-end (click)="onLinkFormChild(child.id)"></ion-icon>  \n\n                          <!--<img class="img-icon" src="assets/imgs/icon-modif.png" (click)="onLinkChronoChild(childs.id)" /> -->\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n              </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        </ion-card-content>\n\n        </ion-card>\n\n       </ion-item>\n\n      </ion-col> \n\n    </ion-list>\n\n    \n\n  <button ion-button full (click)="onLinkFormChild(0)">Ajouter un enfant</button>\n\n</ion-content>  \n\n  \n\n    \n\n  \n\n    \n\n  \n\n  \n\n  \n\n  \n\n  '/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\famille\famille.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__providers_api_base_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_api_base_user__["a" /* UserProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__providers_api_base_child__["a" /* ChildProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_api_base_child__["a" /* ChildProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], FamillePage);
    return FamillePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=famille.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _a || Object])
    ], ToastProvider);
    return ToastProvider;
    var _a;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__famille_famille__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(37);
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
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\register\register.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Inscription</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<form (ngSubmit)="onSubmit(form)" #form="ngForm">\n\n\n\n  <ion-list>    \n\n\n\n    <ion-item>\n\n      <ion-label stacked>E-mail</ion-label>\n\n      <ion-input type="email" required email=true [(ngModel)]="email" name="email" ></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label stacked>Mot de passe</ion-label>\n\n      <ion-input type="password" required minlength="6" [(ngModel)]="password" name="password" ></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Confirmation mot de passe</ion-label>\n\n      <ion-input type="password"  name="passwordCopie" [(ngModel)]="password"  ></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label stacked>Nom Utilisateur</ion-label>\n\n        <ion-input type="text" required minlength="3" maxlength="50" name="username" [(ngModel)]="username" ></ion-input>\n\n      </ion-item>\n\n  \n\n  </ion-list>\n\n\n\n  <button ion-button full type="submit">Valider</button>\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__["a" /* UserProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=register.js.map

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

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_famille_famille__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_enfant_enfant__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_connexion_connexion__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chrono_chrono__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modal_action_modal_action__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_logout_logout__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_toast_toast__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_api_base_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_api_base_child__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_api_base_action__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_api_base_dashboard__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_text_to_speech__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_vibration__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_authent_authent__ = __webpack_require__(422);
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
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot()
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
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_toast_toast__["a" /* ToastProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_api_base_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_api_base_child__["a" /* ChildProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_api_base_action__["a" /* ActionProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_api_base_dashboard__["a" /* DashboardProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_26__providers_authent_authent__["a" /* AuthentProvider */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_famille_famille__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chrono_chrono__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(47);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_famille_famille__["a" /* FamillePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'Home', component: HomePage },
            // { title: 'List', component: ListPage },
            { title: 'Chrono', component: __WEBPACK_IMPORTED_MODULE_6__pages_chrono_chrono__["a" /* ChronoPage */] },
            { title: 'Connexion', component: __WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__["a" /* ConnexionPage */] },
            { title: 'Ma famille', component: __WEBPACK_IMPORTED_MODULE_4__pages_famille_famille__["a" /* FamillePage */] },
            { title: 'TBB', component: __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */] },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__famille_famille__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connexion_connexion__ = __webpack_require__(48);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-title>PLAYTIME </ion-title>\n\n\n\n<ion-list>\n\n      \n\n  <ion-item>Gérer le temps de loisir de vos enfants</ion-item>  \n\n  \n\n  <ion-item *ngIf="isAuth"><button ion-button full (click)="onLienFamille()">Ma famille</button></ion-item>\n\n\n\n  <ion-item *ngIf="!isAuth"><button ion-button full (click)="onLienConnexion()">Connexion</button></ion-item>\n\n \n\n  <ion-item *ngIf="!isAuth"><button ion-button full (click)="onLienInscription()">Inscription</button></ion-item>\n\n    <logout></logout> <!-- bouton déconnexion-->\n\n  </ion-list> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], ListPage);
    return ListPage;
    var ListPage_1, _a, _b;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalActionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-modal-action',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\modal-action\modal-action.html"*/'<!--\n\n  Generated template for the ModalActionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ajouter une action</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\modal-action\modal-action.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], ModalActionPage);
    return ModalActionPage;
    var _a, _b;
}());

//# sourceMappingURL=modal-action.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_connexion_connexion__ = __webpack_require__(48);
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
            selector: 'logout',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\components\logout\logout.html"*/'<!-- Generated template for the LogoutComponent component -->\n\n\n\n<ion-icon float-end color=\'danger\' name="close-circle" (click)="onSigneOut()"></ion-icon> \n\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\components\logout\logout.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
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
        var _this = this;
        this.http = http;
        this.getListActionsNoSelected = function () {
            var uri_action_list = 'https://davy3165.000webhostapp.com/action/action_list.php';
            var tab_retour = _this.http.get(uri_action_list);
            console.log(' provider -liste action : ' + uri_action_list);
            console.log(tab_retour);
            return tab_retour;
        };
    }
    ActionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ActionProvider);
    return ActionProvider;
    var _a;
}());

//# sourceMappingURL=action.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthentProvider = /** @class */ (function () {
    function AuthentProvider(http, toastProvider, storage) {
        this.http = http;
        this.toastProvider = toastProvider;
        this.storage = storage;
    }
    AuthentProvider.prototype.authentication = function () {
        var _this = this;
        this.storage.get('playtime_user_id').then(function (val) {
            if ((val == null)) {
                _this.toastProvider.presentToast("Vous n'êtes pas connecté");
                //this.navCtrl.setRoot( ConnexionPage );
                console.log("nul");
                return false;
            }
            else {
                _this.user_id = val;
                _this.isAuth = true;
                console.log("id= " + _this.user_id);
                return true;
            }
        }).catch(function (err) {
            _this.toastProvider.presentToast("Vous n'êtes pas connecté");
            //this.navCtrl.setRoot( ConnexionPage);
            console.log("erreur");
            return false;
        });
        /*
            this.storage.get('playtime_user_username').then((val) =>{
              this.user_username= val
            
            }).catch((err) =>{
              this.toastProvider.presentToast("Vous n'êtes pas connecté");
             // this.navCtrl.setRoot( ConnexionPage);
            })
          */
    };
    AuthentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
    ], AuthentProvider);
    return AuthentProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=authent.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
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
        var _this = this;
        this.http = http;
        this.addChild = function (user_id, child_firstname, child_nickname, child_sexe) {
            if (child_nickname === undefined) {
                child_nickname = "";
            }
            console.log(user_id);
            console.log(child_firstname);
            console.log(child_nickname);
            console.log(child_sexe);
            var postData = new FormData();
            postData.append('idUser', user_id);
            postData.append('firstname', child_firstname);
            postData.append('nickname', child_nickname);
            postData.append('gender', child_sexe);
            var uri_api = 'https://davy3165.000webhostapp.com/child/child_add.php';
            var tab_retour = _this.http.post(uri_api, postData);
            console.log('Provider - détail enfant : ' + user_id + " " + child_firstname + " " + child_nickname + " " + child_sexe + " " + uri_api);
            console.log(tab_retour);
            return tab_retour;
        };
        this.updateChild = function (child_id, child_firstname, child_nickname, child_sexe) {
            if (child_nickname === undefined) {
                child_nickname = "";
            }
            console.log('idChild= ' + child_id);
            console.log('firstname= ' + child_firstname);
            console.log('nickname= ' + child_nickname);
            console.log('sexe= ' + child_sexe);
            var postData = new FormData();
            postData.append('idChild', child_id);
            postData.append('firstname', child_firstname);
            postData.append('nickname', child_nickname);
            postData.append('gender', child_sexe);
            var uri_api = 'https://davy3165.000webhostapp.com/child/child_update.php';
            console.log(uri_api);
            var tab_retour = _this.http.post(uri_api, postData);
            console.log("Modif enfant");
            console.log(tab_retour);
            return tab_retour;
        };
        this.deleteChild = function (child_id) {
            var uri_child = 'https://davy3165.000webhostapp.com/child/child_delete.php?id=' + child_id;
            var tab_retour = _this.http.get(uri_child);
            console.log('provider suppression enfant : ' + uri_child);
            console.log(tab_retour);
            return tab_retour;
        };
        this.getListChildByUser = function (user_id) {
            var uri_child = 'https://davy3165.000webhostapp.com/child/child_list.php?id=' + user_id;
            var tab_retour = _this.http.get(uri_child);
            console.log(' provider -liste famille : ' + uri_child);
            console.log(tab_retour);
            return tab_retour;
        };
        this.getDetailChild = function (child_id) {
            var uri_child = 'https://davy3165.000webhostapp.com/child/child_detail.php?id=' + child_id;
            var tab_retour = _this.http.get(uri_child);
            console.log(' provider - détail enfant : ' + uri_child);
            console.log(tab_retour);
            return tab_retour;
        };
        /**Return le surnom si existe sinon le prénom */
        this.getName = function (detailsChild) {
            console.log(detailsChild);
            console.log(detailsChild[0].nickname);
            if (detailsChild[0].nickname !== null && detailsChild[0].nickname !== "") {
                return detailsChild[0].nickname;
            }
            else {
                return detailsChild[0].firstname;
            }
        };
        /**Retourne le temps en heure */
        this.convertHour = function (minute) {
            var temps = new Date();
            temps.setTime(minute * 1000 * 60);
            return (temps.getHours() - 1) + ":" + temps.getMinutes();
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_base_dashboard__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_famille_famille__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chrono_chrono__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
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
    function DashboardPage(navCtrl, navParams, toastProvider, dashboardProvider, childProvider, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastProvider = toastProvider;
        this.dashboardProvider = dashboardProvider;
        this.childProvider = childProvider;
        this.alertCtrl = alertCtrl;
        this.actionsSelected = [];
        this.actionsNoSelected = [];
        this.timeWin = __WEBPACK_IMPORTED_MODULE_7_moment__({ year: 0, month: 0, day: 0, hour: 0, minute: 0 }).format('HH:mm');
        this.selectOptions = {
            title: 'Selectionner  des actions',
            subTitle: '',
            mode: 'md'
        };
        //----------------- Rècupere les actions affectés à l'enfant --------------------------*
        this.getListActionsByChild = function () {
            _this.dashboardProvider.getListActionByChild(_this.childId)
                .subscribe(function (data) {
                if (data.success) {
                    _this.actionsSelected = data.result;
                    console.log(_this.actionsSelected);
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                console.log(err);
            });
        };
        //-----------------Récupère la liste des actions non affectées
        this.getListActionsNoSelected = function () {
            _this.dashboardProvider.getListActionsNoSelected(_this.childId)
                .subscribe(function (data) {
                if (data.success) {
                    _this.actionsNoSelected = data.result;
                    //console.log( this.actionsNoSelected )
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                console.log(err);
            });
        };
        this.onOpenSelectAction = function () {
            _this.selectRef.open();
        };
        this.onAffectAction = function () {
            _this.dashboardProvider.affectActionChild(_this.childId, _this.action)
                .subscribe(function (data) {
                if (data.success) {
                    console.log("Affectations faites");
                    console.log(data.message);
                    _this.navCtrl.setRoot(DashboardPage_1, { id: _this.childId });
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                console.log(err);
            });
        };
        this.onAddRealisedAction = function (action_id) {
            // Ajout 1 à l'action
            var resultat = _this.actionsSelected.find(function (action) { return action.id === action_id; });
            resultat.nbRealised++;
            _this.changeRealisedAction("add", action_id);
        };
        this.onRemoveRealisedAction = function (action_id) {
            var resultat = _this.actionsSelected.find(function (action) { return action.id === action_id; });
            if (resultat.nbRealised < 1) {
                console.log("ATTENTION");
                var confirm = _this.alertCtrl.create({
                    title: 'Voulez-vous vraiment enlever cettte  action du  dashboard de l\'enfant ?',
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
                                _this.deleteAffectation(action_id);
                            }
                        }
                    ]
                });
                confirm.present();
            }
            else {
                _this.changeRealisedAction("sub", action_id);
            }
        };
        this.deleteAffectation = function (action_id) {
            _this.dashboardProvider.deleteAffectation(action_id)
                .subscribe(function (data) {
                console.log("succes:" + data.success);
                if (data.success) {
                    console.log(data.message);
                    _this.navCtrl.setRoot(DashboardPage_1, { id: _this.childId });
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                console.log(err);
            });
        };
        this.changeRealisedAction = function (action, action_id) {
            _this.dashboardProvider.changeNbRealisedAction(action, action_id)
                .subscribe(function (data) {
                console.log("succes" + action_id + " :" + data.success);
                if (data.success) {
                    console.log(data.message);
                    _this.navCtrl.setRoot(DashboardPage_1, { id: _this.childId });
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                console.log(err);
            });
        };
        this.onLinkFamily = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_famille_famille__["a" /* FamillePage */]);
        };
        this.onLinkChrono = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_chrono_chrono__["a" /* ChronoPage */], { id: _this.childId });
        };
    }
    DashboardPage_1 = DashboardPage;
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.clear();
        console.log('Page dashboard');
        if (this.navParams.get('id')) {
            this.childId = this.navParams.get('id');
            console.log("childId=" + this.childId);
        }
        else {
            console.log("il manque le parametre id enfant");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_famille_famille__["a" /* FamillePage */]);
        }
        this.getListActionsByChild();
        this.getListActionsNoSelected();
        this.getDetailChild();
    };
    DashboardPage.prototype.getDetailChild = function () {
        var _this = this;
        this.childDetail = this.childProvider.getDetailChild(this.childId)
            .subscribe(function (data) {
            if (data.success) {
                // console.log(data.result);
                _this.childDetail = data.result;
                console.log(_this.childDetail);
                _this.name = _this.childProvider.getName(_this.childDetail);
                _this.winTime = _this.childDetail["0"].winTime;
                _this.playTime = _this.childDetail["0"].playTime;
                _this.winTime = _this.childDetail["0"].winTime;
                _this.remainingTime = _this.winTime - _this.playTime;
                _this.winTimeDisplay = _this.dashboardProvider.convertMinuteHeure(_this.winTime);
                _this.playTimeDisplay = _this.dashboardProvider.convertMinuteHeure(_this.playTime);
                _this.remainingTimeDisplay = _this.dashboardProvider.convertMinuteHeure(_this.remainingTime);
                console.log(data);
                console.log('wintime=' + _this.winTime);
            }
            else {
                console.log(data);
                _this.toastProvider.presentToast(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('selectAction'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Select */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Select */]) === "function" && _a || Object)
    ], DashboardPage.prototype, "selectRef", void 0);
    DashboardPage = DashboardPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\dashboard\dashboard.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <!-->\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  -->\n\n    <ion-title text-left>\n\n        <img class="img-icon-header"  float-start src="assets/imgs/icon-tbb.png"  />\n\n        \n\n      <span>{{name}}</span>\n\n      <logout></logout>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n    <!---\n\n    <ion-fab  edge right>\n\n        <button ion-fab mini (click)="onOpenSelectAction()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n  -->\n\n    <ion-grid class="select-card">\n\n      <ion-row>\n\n\n\n        <ion-col col-3 text-center >\n\n          <div class="badge-title-time-recap" >Gagné</div>\n\n          <ion-badge class="badge-time-recap">{{winTimeDisplay}}</ion-badge>\n\n        </ion-col>\n\n    \n\n        <ion-col col-3  text-center >\n\n          <div class="badge-title-time-recap" >Utilisé</div>\n\n          <ion-badge class="badge-time-recap">{{playTimeDisplay}}</ion-badge>\n\n        </ion-col>\n\n\n\n        <ion-col col-3 text-center >\n\n          <div class="badge-title-time-recap" >Restant</div>\n\n          <ion-badge class="badge-time-recap">{{remainingTimeDisplay}}</ion-badge>\n\n        </ion-col>\n\n\n\n        <ion-col col-3 text-center  >\n\n          <ion-icon class="icon-add-action" name="add-circle" (click)="onOpenSelectAction()"></ion-icon>\n\n        </ion-col>           \n\n        \n\n      </ion-row>   \n\n    </ion-grid>\n\n      \n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let actionSelected of actionsSelected" >\n\n      <div class="line-action"> \n\n        <div class="badge-time"  [class.badge-positive]="actionSelected.positive==\'P\'" [class.badge-negative]="actionSelected.positive==\'N\'">{{actionSelected.timep | slice:0:5}}</div>\n\n        <div class="text-action" text-wrap>{{actionSelected.label}}</div>          \n\n        <ion-badge class="badge-action-count" [class.badge-positive]="actionSelected.positive==\'N\'" [class.badge-negative]="actionSelected.positive==\'N\'">{{actionSelected.nbRealised}}</ion-badge>\n\n        <ion-icon class="btn-plus"  name="add-circle"  (click)="onAddRealisedAction(actionSelected.id);"></ion-icon>\n\n        <ion-icon class="btn-minus"  name="remove-circle" (click)="onRemoveRealisedAction(actionSelected.id)"></ion-icon>\n\n      </div> \n\n    </ion-item>\n\n      \n\n  </ion-list>\n\n  \n\n  <ion-item class="ion-select" >\n\n  <ion-select  #selectAction [(ngModel)]="action" (ionChange)="onAffectAction()" [selectOptions]="selectOptions"\n\n  multiple="true" cancelText="Annuler" okText="Ajouter">\n\n  <ion-option *ngFor="let actionNoSelected of actionsNoSelected" [value]="actionNoSelected.id">{{actionNoSelected.label}}</ion-option >\n\n  </ion-select> \n\n</ion-item>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n      <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-3 text-center>\n\n                <img class="img-icon-footer" src="assets/imgs/icon-family.png" (click)="onLinkFamily()" />    \n\n            </ion-col>\n\n\n\n          <ion-col col-6 text-center>PLAYTIME</ion-col>\n\n\n\n            <ion-col col-3 text-center>\n\n                <img class="img-icon-footer" src="assets/imgs/icon-chrono.png" (click)="onLinkChrono()"  />\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    </ion-toolbar>            \n\n  </ion-footer>'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_base_dashboard__["a" /* DashboardProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_base_dashboard__["a" /* DashboardProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__["a" /* ChildProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__["a" /* ChildProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object])
    ], DashboardPage);
    return DashboardPage;
    var DashboardPage_1, _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__famille_famille__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(37);
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
                        /******************** Inscription validée*********** */
                        // stocke les identifiants        
                        _this.storage.set('playtime_user_id', data.result.userId);
                        _this.storage.set('playtime_user_username', form.controls['username'].value);
                        _this.storage.set('playtime_user_email', form.controls['email'].value);
                        _this.toastProvider.presentToast('Inscription validée');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__famille_famille__["a" /* FamillePage */]);
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
                    console.log(data);
                    if (data.success) {
                        console.log(data.result[0].id + ' ' + data.result[0].username);
                        // stocke les identifiants         
                        _this.storage.set('playtime_user_id', data.result[0].id);
                        _this.storage.set('playtime_user_username', data.result[0].username);
                        _this.storage.set('playtime_user_email', form.controls['email'].value);
                        _this.toastProvider.presentToast('Vous êtes connecté');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__famille_famille__["a" /* FamillePage */]);
                    }
                    else {
                        console.log("pas succes");
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
        var _this = this;
        console.clear();
        this.storage.get('playtime_user_id')
            .then(function (val) {
            console.log('id =' + val);
        })
            .catch(function (err) {
            _this.toastProvider.presentToast("Vous n'êtes pas connecté");
            // this.navCtrl.setRoot( ConnexionPage);
        });
    };
    ConnexionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connexion',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\connexion\connexion.html"*/'<!--\n\n  Generated template for the ConnexionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>LOGIN</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  \n\n\n\n  <form (ngSubmit)="onSubmit(formLogin)" #formLogin="ngForm">\n\n\n\n    <ion-list>\n\n      \n\n        <ion-item>\n\n            <ion-label stacked>E-mail</ion-label>\n\n            <ion-input type="email" required email=true ngModel name="email" ></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n            <ion-label stacked>Mot de passe</ion-label>\n\n            <ion-input type="password" required minlength="6" ngModel name="password" ></ion-input>\n\n          </ion-item>   \n\n    \n\n    </ion-list>\n\n  \n\n    <button ion-button full type="submit">Connexion</button>\n\n    \n\n    </form>\n\n\n\n\n\n    <form (ngSubmit)="onSubmit(formRegister)" #formRegister="ngForm">\n\n  \n\n      <ion-list>    \n\n    \n\n        <ion-item>\n\n          <ion-label stacked>E-mail</ion-label>\n\n          <ion-input type="email" required email=true [(ngModel)]="email" name="email" ></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Mot de passe</ion-label>\n\n          <ion-input type="password" required minlength="6" [(ngModel)]="password" name="password" ></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-label stacked>Confirmation mot de passe</ion-label>\n\n          <ion-input type="password"  name="passwordCopie" [(ngModel)]="password"  ></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n            <ion-label stacked>Nom Utilisateur</ion-label>\n\n            <ion-input type="text" required minlength="3" maxlength="50" name="username" [(ngModel)]="username" ></ion-input>\n\n          </ion-item>\n\n      \n\n      </ion-list>\n\n    \n\n      <button ion-button full type="submit">Inscription</button>\n\n    \n\n    </form>\n\n\n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\connexion\connexion.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__["a" /* UserProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
    ], ConnexionPage);
    return ConnexionPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=connexion.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChronoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_famille_famille__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_base_dashboard__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_base_child__ = __webpack_require__(46);
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
    function ChronoPage(navCtrl, navParams, dashboardProvider, childProvider, vibration, toastProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dashboardProvider = dashboardProvider;
        this.childProvider = childProvider;
        this.vibration = vibration;
        this.toastProvider = toastProvider;
        this.isRunning = false;
        this.ionViewDidLoad = function () {
            //******** Controle le paramtre childId */
            console.clear();
            console.log('ionViewDidLoad ChronoPage');
            if (_this.navParams.get('id')) {
                _this.childId = _this.navParams.get('id');
                console.log("childId=" + _this.childId);
            }
            else {
                console.log("il manque le parametre id enfant");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_famille_famille__["a" /* FamillePage */]);
            }
            _this.getDetailChild();
        };
        this.onStartChrono = function () {
            _this.isRunning = true;
            _this.chrono = setInterval(function () {
                _this.remainingTime--;
                console.log(_this.remainingTime);
                _this.playTime++;
                _this.playTimeDisplay = _this.dashboardProvider.convertMinuteHeure(_this.playTime);
                _this.remainingTimeDisplay = _this.dashboardProvider.convertMinuteHeure(_this.remainingTime);
                if (_this.remainingTime == 0) {
                    _this.onStopChrono();
                }
            }, 1000);
        };
        this.onStopChrono = function () {
            clearInterval(_this.chrono);
            _this.isRunning = false;
        };
        this.onLinkFamily = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_famille_famille__["a" /* FamillePage */]);
        };
        this.onLinkDashboard = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */], { id: _this.childId });
        };
    }
    // arrete le chrono si on quitte la page sans l'arreter
    ChronoPage.prototype.ionViewDidLeave = function () {
        this.onStopChrono();
    };
    ChronoPage.prototype.getDetailChild = function () {
        var _this = this;
        this.childDetail = this.childProvider.getDetailChild(this.childId)
            .subscribe(function (data) {
            if (data.success) {
                _this.childDetail = data.result;
                console.log(_this.childDetail);
                _this.name = _this.childProvider.getName(_this.childDetail);
                _this.winTime = _this.childDetail["0"].winTime;
                _this.playTime = _this.childDetail["0"].playTime;
                _this.winTime = _this.childDetail["0"].winTime;
                _this.remainingTime = _this.winTime - _this.playTime;
                console.log("winTime=" + _this.winTime + " playTime=" + _this.playTime + " remainingTime=" + _this.remainingTime);
                //this.winTimeDisplay = this.dashboardProvider.convertMinuteHeure(this.winTime);
                //this.playTimeDisplay = this.dashboardProvider.convertMinuteHeure(this.playTime);
                _this.remainingTimeDisplay = _this.dashboardProvider.convertMinuteHeure(_this.remainingTime);
                //********* Controle qu'il reste du temps */
                console.log("temps restant:" + _this.remainingTime);
                if (_this.remainingTime <= 0) {
                    _this.toastProvider.presentToast("Il ne reste plus de temps!!!");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */], { id: _this.childId });
                }
            }
            else {
                console.log(data);
                _this.toastProvider.presentToast(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ChronoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chrono',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\chrono\chrono.html"*/'<!--\n\n  Generated template for the ChronoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title >\n\n      <img class="img-icon-header" float-start src="assets/imgs/icon-chrono.png"  />\n\n      <span>{{name}}</span>\n\n      <logout></logout>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n\n\n        <ion-row>\n\n            <ion-col col-12 text-center col-top class="display-text">{{remainingTimeDisplay}}</ion-col>        \n\n        </ion-row>\n\n\n\n        <ion-row>\n\n                <ion-col col-12 text-center col-top class="-text">{{playTimeDisplay}}</ion-col>        \n\n             </ion-row>\n\n        <ion-row>\n\n            <ion-col co-12 col-bottom>\n\n                <ion-fab  center *ngIf="!isRunning">\n\n                    <button  ion-fab  (click)="onStartChrono()" color="secondary"><ion-icon >START</ion-icon></button>\n\n                </ion-fab>\n\n                <ion-fab  center *ngIf="isRunning">\n\n                    <button  ion-fab  (click)="onStopChrono()" color="danger"><ion-icon >STOP</ion-icon></button>\n\n                </ion-fab>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n      \n\n\n\n    </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n      <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-3 text-center>\n\n                <img class="img-icon-footer" src="assets/imgs/icon-family.png" (click)="onLinkFamily()" />    \n\n            </ion-col>\n\n\n\n          <ion-col col-6 text-center>PLAYTIME</ion-col>\n\n\n\n            <ion-col col-3 text-center>\n\n                <img class="img-icon-footer" src="assets/imgs/icon-tbb.png" (click)="onLinkDashboard()" />\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    </ion-toolbar>            \n\n  </ion-footer>\n\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\chrono\chrono.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_api_base_dashboard__["a" /* DashboardProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_api_base_dashboard__["a" /* DashboardProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__providers_api_base_child__["a" /* ChildProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_api_base_child__["a" /* ChildProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _f || Object])
    ], ChronoPage);
    return ChronoPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=chrono.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
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
            var uri_api = 'https://davy3165.000webhostapp.com/user/user_add.php';
            var tab_retour = _this.http.post(uri_api, postData);
            return tab_retour;
        };
        this.login = function (email, password) {
            console.log("login");
            var postData = new FormData();
            postData.append('email', email);
            postData.append('password', password);
            var uri_api = 'https://davy3165.000webhostapp.com/user/user_connexion.php';
            var tab_retour = _this.http.post(uri_api, postData);
            console.log(tab_retour);
            return tab_retour;
        };
    }
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], UserProvider);
    return UserProvider;
    var _a;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map
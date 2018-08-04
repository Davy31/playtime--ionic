webpackJsonp([0],{

/***/ 107:
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
        this.resetTimeAction = function (child_id) {
            var uri_action_list = 'https://davy3165.000webhostapp.com/dashboard/dashboard_reset.php?id=' + child_id;
            var tab_retour = _this.http.get(uri_action_list);
            console.log(' provider -reset : ' + uri_action_list);
            console.log(tab_retour);
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
    DashboardProvider.prototype.convertSecondeHeure = function (seconde) {
        var addZero = function (v) { return v < 10 ? '0' + v : v; };
        var d = new Date(seconde * 1000); // js fonctionne en milisecondes
        var t = [];
        t.push(addZero(d.getHours() - 1));
        t.push(addZero(d.getMinutes()));
        t.push(addZero(d.getSeconds()));
        return t.join(':');
    };
    DashboardProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DashboardProvider);
    return DashboardProvider;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChronoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_famille_famille__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_base_dashboard__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_base_child__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








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
        //Gestion couleur chrono
        this.isColorRed = false;
        this.isColorOrange = false;
        this.isColorGreen = true;
        this.ionViewDidLoad = function () {
            //******** Controle le paramtre childId */
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
                _this.playTime++;
                _this.playTimeDisplay = _this.dashboardProvider.convertSecondeHeure(_this.playTime);
                _this.remainingTimeDisplay = _this.dashboardProvider.convertSecondeHeure(_this.remainingTime);
                // s'il ne reste plus que 5 minutes : Vibrations  courtes et couleur orange
                if (_this.remainingTime == 300) {
                    _this.vibration.vibrate([2000, 1000, 2000]);
                }
                //Gere couleur du chrono
                if (_this.remainingTime < 300) {
                    _this.isColorGreen = false;
                    _this.isColorOrange = true;
                    _this.isColorRed = false;
                }
                else {
                    _this.isColorGreen = true;
                    _this.isColorOrange = false;
                    _this.isColorRed = false;
                }
                // Fin du temps : longue vibration  + arret du chrono + couleur rouge
                if (_this.remainingTime == 0) {
                    _this.isColorGreen = false;
                    _this.isColorOrange = false;
                    _this.isColorRed = true;
                    _this.onStopChrono(true);
                    _this.vibration.vibrate([20000, 5000, 20000]);
                }
            }, 1000);
        };
        //arrete le chrono et enregistre le temps joué si record est vrai
        this.onStopChrono = function (record) {
            clearInterval(_this.chrono);
            if (record) {
                //Convertie en minutes par defaut
                var playTimeMinute = Math.trunc(_this.playTime / 60);
                _this.childProvider.recordPlaytime(_this.childId, playTimeMinute)
                    .subscribe(function (data) { }, function (err) { console.log(err); });
            }
            _this.isRunning = false;
        };
        // *********** Boutons de navigation ********
        this.onLinkFamily = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_famille_famille__["a" /* FamillePage */]);
        };
        this.onLinkDashboard = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */], { id: _this.childId });
        };
    }
    // arrete le chrono si on quitte la page sans l'arreter, on n'enregistre pas le temps joué
    ChronoPage.prototype.ionViewDidLeave = function () {
        this.onStopChrono(false);
    };
    // Recupère infos de l'enfant
    ChronoPage.prototype.getDetailChild = function () {
        var _this = this;
        this.childDetail = this.childProvider.getDetailChild(this.childId)
            .subscribe(function (data) {
            if (data.success) {
                _this.childDetail = data.result;
                _this.name = _this.childProvider.getName(_this.childDetail);
                _this.playTime = _this.childDetail["0"].playTime * 60;
                _this.winTime = _this.childDetail["0"].winTime * 60;
                _this.remainingTime = _this.winTime - _this.playTime;
                _this.playTimeDisplay = _this.dashboardProvider.convertSecondeHeure(_this.playTime);
                _this.remainingTimeDisplay = _this.dashboardProvider.convertSecondeHeure(_this.remainingTime);
                //********* Controle qu'il reste du temps */
                if (_this.remainingTime <= 0) {
                    _this.toastProvider.presentToast("Il ne reste plus de temps!!!");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */], { id: _this.childId });
                }
            }
            else {
                _this.toastProvider.presentToast(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ChronoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chrono',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\chrono\chrono.html"*/'<!--\n  Generated template for the ChronoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton >\n    <ion-title >\n      <img class="img-icon-header" float-start src="assets/imgs/icon-chrono.png"  />\n      <span>{{name}}</span>\n      <logout></logout>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n\n        <ion-row>\n            <ion-col col-12 text-center col-top class="display-text"\n            [class.colorOrange]="isColorOrange"\n            [class.colorGreen]="isColorGreen"\n            [class.colorRed]="isColorRed"\n\n            > {{remainingTimeDisplay}}</ion-col>        \n        </ion-row>\n\n       \n        <ion-row>\n            <ion-col co-12 col-bottom>\n                <ion-fab  center *ngIf="!isRunning">\n                    <button  ion-fab [disabled]="remainingTime<=0" (click)="onStartChrono()" color="secondary"><ion-icon >START</ion-icon></button>\n                </ion-fab>\n                <ion-fab  center *ngIf="isRunning">\n                    <button  ion-fab  (click)="onStopChrono(true)" color="danger"><ion-icon >STOP</ion-icon></button>\n                </ion-fab>\n            </ion-col>\n        </ion-row>\n        \n\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n            <ion-col col-3 text-center>\n                <img class="img-icon-footer" src="assets/imgs/icon-family.png" (click)="onLinkFamily()" />    \n            </ion-col>\n\n          <ion-col col-6 text-center>playTime</ion-col>\n\n            <ion-col col-3 text-center>\n                <img class="img-icon-footer" src="assets/imgs/icon-tbb.png" (click)="onLinkDashboard()" />\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    </ion-toolbar>            \n  </ion-footer>\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\chrono\chrono.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_base_dashboard__["a" /* DashboardProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_api_base_child__["a" /* ChildProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */]])
    ], ChronoPage);
    return ChronoPage;
}());

//# sourceMappingURL=chrono.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__famille_famille__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(56);
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
                        console.log('id =' + data.result.id);
                        // stocke les identifiants         
                        _this.storage.set('playtime_user_id', data.result.id);
                        _this.storage.set('playtime_user_username', data.result.username);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_base_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ConnexionPage);
    return ConnexionPage;
}());

//# sourceMappingURL=connexion.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnfantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__famille_famille__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(55);
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
            selector: 'page-enfant',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\enfant\enfant.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title text-left>\n      <img class="img-icon-header" float-start src="assets/imgs/icon-child.png"  />\n    <span>Enfant</span>\n    <logout></logout>\n  </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form (ngSubmit)="onSubmit(form)" #form="ngForm">\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Prénom </ion-label>\n        <ion-input type="text" required  [(ngModel)]=\'firstname\' name="firstname" minlength="3" maxlength="100" ></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label stacked>Surnom (non obligatoire)</ion-label>\n        <ion-input type="text" [(ngModel)]=\'nickname\' name="nickname" ngModel  minlength="3" maxlength="100"></ion-input>\n      </ion-item>\n\n      <ion-list radio-group [(ngModel)]="sexe" name=sexe>\n        <ion-label>Sexe</ion-label>\n        <ion-item>\n          <ion-label>Fille</ion-label>\n          <ion-radio value=\'F\'></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Garçon</ion-label>\n          <ion-radio value=\'M\' ></ion-radio>\n        </ion-item>     \n      </ion-list> \n\n    </ion-list>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 text-center>\n          <button ion-button  text-center class="btn-form" type="submit" float-start  >Validation</button>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <button ion-button text-center class="btn-form"type="button" float-start (click)="onChildDelete()" color=danger >Suppression</button>\n        </ion-col>\n        <ion-col col-4 text-center>  \n          <button ion-button text-center class="btn-form" type="button" float-end  (click)="onLinkCancel()">Annuler  </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>  \n  </form>\n\n\n  <!--\n  <ion-footer>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n            <ion-col col-3 text-center>\n                <img class="img-icon-footer" src="assets/imgs/icon-family.png" (click)="onLinkFamily()" />    \n            </ion-col>\n\n          <ion-col col-6 text-center>playTime</ion-col>\n\n            <ion-col col-3 text-center>\n                <img class="img-icon-footer" src="assets/imgs/icon-tbb.png" (click)="onLinkDashboard()" />\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    </ion-toolbar>            \n  </ion-footer>\n-->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\enfant\enfant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__["a" /* ChildProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EnfantPage);
    return EnfantPage;
}());

//# sourceMappingURL=enfant.js.map

/***/ }),

/***/ 207:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_famille_famille__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_enfant_enfant__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_connexion_connexion__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chrono_chrono__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_logout_logout__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_api_base_user__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_api_base_child__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_api_base_action__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_api_base_dashboard__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_text_to_speech__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_vibration__ = __webpack_require__(206);
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
                __WEBPACK_IMPORTED_MODULE_9__components_logout_logout__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_famille_famille__["a" /* FamillePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_enfant_enfant__["a" /* EnfantPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chrono_chrono__["a" /* ChronoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__components_logout_logout__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_famille_famille__["a" /* FamillePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_enfant_enfant__["a" /* EnfantPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chrono_chrono__["a" /* ChronoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_toast_toast__["a" /* ToastProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_api_base_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_api_base_child__["a" /* ChildProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_api_base_action__["a" /* ActionProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_api_base_dashboard__["a" /* DashboardProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_vibration__["a" /* Vibration */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_famille_famille__ = __webpack_require__(33);
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

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_connexion_connexion__ = __webpack_require__(109);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LogoutComponent);
    return LogoutComponent;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 290:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ActionProvider);
    return ActionProvider;
}());

//# sourceMappingURL=action.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamillePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_enfant_enfant__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chrono_chrono__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_base_child__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(56);
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
    function FamillePage(navCtrl, toastProvider, childProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastProvider = toastProvider;
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_chrono_chrono__["a" /* ChronoPage */], { id: childId });
        };
        this.onLinkDashboardChild = function (childId) {
            console.log('Dashboard id:' + childId);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard__["a" /* DashboardPage */], { id: childId });
        };
        this.onLinkFormChild = function (param_childId) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_enfant_enfant__["a" /* EnfantPage */], { userId: _this.user_id, childId: param_childId });
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
        }).catch(function (err) {
            _this.toastProvider.presentToast("Vous n'êtes pas connecté");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__["a" /* ConnexionPage */]);
        });
    };
    FamillePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-famille',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\famille\famille.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <!-->\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  -->\n\n    <ion-title text-left>\n\n        <img class="img-icon-header" float-start src="assets/imgs/icon-family.png"  />\n\n      <span>Famille</span>\n\n      <logout></logout>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding> \n\n    <ion-list >\n\n      <ion-col no-padding col-12 *ngFor="let child of childs">\n\n        <ion-item>\n\n            <ion-card color="card-color">\n\n\n\n                <ion-card-content no-padding>\n\n          <ion-grid no-padding>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                      <img class="img-family-child" src="assets/imgs/boy.png" *ngIf="child.gender==\'M\'" />\n\n                      <img class="img-family-child" src="assets/imgs/girl.png" *ngIf="child.gender==\'F\'" />                    \n\n              </ion-col>\n\n              <ion-col col-8>\n\n                  <ion-grid>\n\n                      <ion-row>\n\n                          <ion-col col-12>\n\n                              <ion-card-title class="ion-card-title" no-padding text-center text-wrap *ngIf="!child.nickname">\n\n                                  {{child.firstname }}\n\n                                </ion-card-title>\n\n                                <ion-card-title class="ion-card-title" no-padding text-center *ngIf="child.nickname">\n\n                                  {{child.nickname }}\n\n                                </ion-card-title>\n\n                            </ion-col>\n\n                      </ion-row>\n\n                    <ion-row>\n\n                      <ion-col col-3>\n\n                        <img class="img-icon" src="assets/imgs/icon-tbb.png" (click)="onLinkDashboardChild(child.id)"  />\n\n                      </ion-col>\n\n                      <ion-col col-3 class="vertical-align">                   \n\n                         \n\n                      </ion-col>                   \n\n                      <ion-col col-3>   \n\n                        <img class="img-icon" src="assets/imgs/icon-chrono.png" (click)="onLinkChrono(child.id)" /> \n\n                      </ion-col>\n\n                      <ion-col col-3 col-bottom> \n\n                          <ion-icon name="person" float-end (click)="onLinkFormChild(child.id)"></ion-icon>  \n\n                          <!--<img class="img-icon" src="assets/imgs/icon-modif.png" (click)="onLinkChronoChild(childs.id)" /> -->\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n              </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        </ion-card-content>\n\n        </ion-card>\n\n       </ion-item>\n\n      </ion-col> \n\n    </ion-list>\n\n    \n\n  <button ion-button full (click)="onLinkFormChild(0)">Ajouter un enfant</button>\n\n</ion-content>  \n\n  \n\n    \n\n  \n\n    \n\n  \n\n  \n\n  \n\n  \n\n  '/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\famille\famille.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_api_base_child__["a" /* ChildProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], FamillePage);
    return FamillePage;
}());

//# sourceMappingURL=famille.js.map

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 43:
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
        this.recordPlaytime = function (child_id, playtime) {
            var uri_action = 'https://davy3165.000webhostapp.com/child/child_update_playtime.php?idChild=' + child_id + "&playtime=" + playtime;
            var tab_retour = _this.http.get(uri_action);
            console.log('provider - enregistre playtime : ' + uri_action);
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

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_base_dashboard__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_famille_famille__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chrono_chrono__ = __webpack_require__(108);
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
 * Page Dashboard de l'enfant liste des actiosn et calcule du temps gagné

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
        this.isAction = true;
        this.displayBtnReset = true;
        this.isListActionsNotSelectedReady = false;
        this.selectOptions = {
            title: 'Sélectionnez  des actions',
            subTitle: '',
            mode: 'md'
        };
        // ******* Rècupere les actions affectés à l'enfant *******
        this.getListActionsByChild = function () {
            _this.dashboardProvider.getListActionByChild(_this.childId)
                .subscribe(function (data) {
                if (data.success) {
                    _this.actionsSelected = data.result;
                    if (data.result.length > 0) {
                        _this.isAction = true;
                    }
                    else {
                        _this.isAction = false;
                    }
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                console.log(err);
            });
        };
        // *******Récupère la liste des actions non affectées ************
        this.getListActionsNoSelected = function () {
            _this.dashboardProvider.getListActionsNoSelected(_this.childId)
                .subscribe(function (data) {
                if (data.success) {
                    _this.actionsNoSelected = data.result;
                    _this.isListActionsNotSelectedReady = true;
                    _this.manageDisplay();
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                console.log(err);
            });
        };
        // ******* gere l'affiche des elements ******
        this.manageDisplay = function () {
            // Affichage du bouton reset
            if (_this.isAction || _this.playTime != 0) {
                _this.displayBtnReset = true;
            }
            else {
                _this.displayBtnReset = false;
            }
        };
        // ******* Ouvre la liste des actions *******
        this.onOpenSelectAction = function () {
            _this.selectRef.open();
        };
        // ******* affecte  les actions *******
        this.onAffectAction = function () {
            _this.dashboardProvider.affectActionChild(_this.childId, _this.action)
                .subscribe(function (data) {
                if (data.success) {
                    _this.navCtrl.setRoot(DashboardPage_1, { id: _this.childId });
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                console.log(err);
            });
            _this.manageDisplay();
        };
        // ******* ajoute  1 au compteur d'une action *******
        this.onAddRealisedAction = function (action_id) {
            // Ajout 1 à l'action
            var resultat = _this.actionsSelected.find(function (action) { return action.id === action_id; });
            resultat.nbRealised++;
            _this.changeRealisedAction("add", action_id);
            _this.manageDisplay();
        };
        // ******* Controle le compteur si demande d'enlever 1 *******
        this.onRemoveRealisedAction = function (action_id) {
            var resultat = _this.actionsSelected.find(function (action) { return action.id === action_id; });
            // ******* si 0, demande confirmation d'enlever l'action *******
            if (resultat.nbRealised < 1) {
                var confirm_1 = _this.alertCtrl.create({
                    title: 'Voulez-vous vraiment enlever cettte  action du  dashboard de l\'enfant ?',
                    buttons: [
                        {
                            text: 'Annuler',
                            handler: function () {
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
                confirm_1.present();
            }
            else {
                _this.changeRealisedAction("sub", action_id);
            }
            _this.manageDisplay();
        };
        // ***** enleve l'action ********
        this.deleteAffectation = function (action_id) {
            _this.dashboardProvider.deleteAffectation(action_id)
                .subscribe(function (data) {
                if (data.success) {
                    _this.navCtrl.setRoot(DashboardPage_1, { id: _this.childId });
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                console.log(err);
            });
            _this.manageDisplay();
        };
        // ********* modifie le compteur d'une action *******
        this.changeRealisedAction = function (action, action_id) {
            _this.dashboardProvider.changeNbRealisedAction(action, action_id)
                .subscribe(function (data) {
                if (data.success) {
                    _this.navCtrl.setRoot(DashboardPage_1, { id: _this.childId });
                }
                else {
                    _this.toastProvider.presentToast(data.message);
                }
            }, function (err) {
                console.log(err);
            });
            _this.manageDisplay();
        };
        // **** reinitialise le temsp et les compteurs action apres confirmation
        this.onReset = function () {
            console.clear();
            var confirm = _this.alertCtrl.create({
                title: 'Voulez-vous vraiment mettre le temps et les actions à 0 ?',
                buttons: [
                    {
                        text: 'Annuler',
                        handler: function () { }
                    },
                    {
                        text: 'OUI',
                        handler: function () {
                            _this.dashboardProvider.resetTimeAction(_this.childId)
                                .subscribe(function (data) {
                                if (data.success) {
                                    console.log(data.message);
                                    _this.toastProvider.presentToast("Les actions et le temps ont étés remis à 0");
                                    _this.navCtrl.setRoot(DashboardPage_1, { id: _this.childId });
                                }
                                else {
                                    _this.toastProvider.presentToast(data.message);
                                }
                            }, function (err) {
                                console.log(err);
                            });
                        }
                    }
                ]
            });
            confirm.present();
        };
        // *********** Boutons de navigations ********
        this.onLinkFamily = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_famille_famille__["a" /* FamillePage */]);
        };
        this.onLinkChrono = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_chrono_chrono__["a" /* ChronoPage */], { id: _this.childId });
        };
    }
    DashboardPage_1 = DashboardPage;
    DashboardPage.prototype.ionViewDidLoad = function () {
        // ******* Contrôle si que l'identifiant enfant est bien envoyé *******
        if (this.navParams.get('id')) {
            this.childId = this.navParams.get('id');
        }
        else {
            console.log("il manque le parametre id enfant");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_famille_famille__["a" /* FamillePage */]);
        }
        this.getListActionsByChild();
        this.getListActionsNoSelected();
        this.getDetailChild();
        this.manageDisplay();
    };
    // ******* Rècupere les infos de l'enfant *******
    DashboardPage.prototype.getDetailChild = function () {
        var _this = this;
        this.childDetail = this.childProvider.getDetailChild(this.childId)
            .subscribe(function (data) {
            if (data.success) {
                _this.childDetail = data.result;
                _this.name = _this.childProvider.getName(_this.childDetail);
                _this.winTime = _this.childDetail["0"].winTime;
                _this.playTime = _this.childDetail["0"].playTime;
                _this.remainingTime = _this.winTime - _this.playTime;
                _this.winTimeDisplay = _this.dashboardProvider.convertMinuteHeure(_this.winTime);
                _this.playTimeDisplay = _this.dashboardProvider.convertMinuteHeure(_this.playTime);
                _this.remainingTimeDisplay = _this.dashboardProvider.convertMinuteHeure(_this.remainingTime);
                _this.manageDisplay();
            }
            else {
                _this.toastProvider.presentToast(data.message);
            }
        }, function (err) {
            console.log(err);
        });
        this.manageDisplay();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('selectAction'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Select */])
    ], DashboardPage.prototype, "selectRef", void 0);
    DashboardPage = DashboardPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\dashboard\dashboard.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton>\n    <!-->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  -->\n    <ion-title text-left>\n        <img class="img-icon-header"  float-start src="assets/imgs/icon-tbb.png"  />\n        \n      <span>{{name}}</span>\n      <logout></logout>\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <ion-grid class="select-card"> <!-- Bagdes recap-->\n    <ion-row>\n\n      <ion-col col-3 text-center >\n        <div class="badge-title-time-recap" >Gagné</div>\n        <ion-badge class="badge-time-recap">{{winTimeDisplay}}</ion-badge>\n      </ion-col>\n  \n      <ion-col col-3  text-center >\n        <div class="badge-title-time-recap" >Utilisé</div>\n        <ion-badge class="badge-time-recap">{{playTimeDisplay}}</ion-badge>\n      </ion-col>\n\n      <ion-col col-3 text-center >\n        <div class="badge-title-time-recap" >Restant</div>\n        <ion-badge class="badge-time-recap">{{remainingTimeDisplay}}</ion-badge>\n      </ion-col>\n\n      <ion-col col-3 text-center  >\n        <ion-icon class="icon-add-action" name="ios-list-box" (click)="onOpenSelectAction()"></ion-icon>\n      </ion-col>           \n      \n    </ion-row>   \n  </ion-grid>\n      \n  <ion-list>\n\n    <ion-item *ngFor="let actionSelected of actionsSelected" class="ionItem" >\n      <div class="line-action"> \n        <div class="div-badge" >\n          <div>\n            <ion-badge class="badge-time"\n              [class.badge-positive]="actionSelected.positive==\'P\'" \n              [class.badge-negative]="actionSelected.positive==\'N\'">{{actionSelected.nbRealised}}</ion-badge>\n           </div>\n           <div>\n            <ion-badge class="badge-time"  \n              [class.badge-positive]="actionSelected.positive==\'P\'" \n              [class.badge-negative]="actionSelected.positive==\'N\'">{{actionSelected.timep | slice:0:5}} mn</ion-badge>\n          </div> \n        </div> \n        <div class="text-action" text-wrap>{{actionSelected.label}}</div> \n        <ion-icon class="btn-plus"  name="add-circle"  (click)="onAddRealisedAction(actionSelected.id);"\n              [class.icon-positive]="actionSelected.positive==\'P\'"\n              [class.icon-negative]="actionSelected.positive==\'N\'"  ></ion-icon>\n        <ion-icon class="btn-minus"  name="remove-circle" (click)="onRemoveRealisedAction(actionSelected.id)"></ion-icon>\n      </div> \n    </ion-item>\n      \n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <button  *ngIf="displayBtnReset" ion-button full (click)="onReset()">Mettre le temps et les actions à 0</button>\n    </ion-item>\n  </ion-list>\n  \n\n  <!-- Liste des actions cachées-->\n  <ion-item class="ion-select" >\n    <ion-select  #selectAction [(ngModel)]="action" (ionChange)="onAffectAction()" [selectOptions]="selectOptions"\n  multiple="true" cancelText="Annuler" okText="Ajouter">\n      <ion-option *ngFor="let actionNoSelected of actionsNoSelected" [value]="actionNoSelected.id">{{actionNoSelected.label}}</ion-option >\n    </ion-select> \n  </ion-item>\n\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n            <ion-col col-3 text-center>\n                <img class="img-icon-footer" src="assets/imgs/icon-family.png" (click)="onLinkFamily()" />    \n            </ion-col>\n\n          <ion-col col-6 text-center>playTime</ion-col>\n\n            <ion-col col-3 text-center>\n                <img class="img-icon-footer" src="assets/imgs/icon-chrono.png" (click)="onLinkChrono()"  />\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    </ion-toolbar>            \n  </ion-footer>\n'/*ion-inline-end:"C:\Users\Aries\Desktop\ionic\playtime--ionic\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_base_dashboard__["a" /* DashboardProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_base_child__["a" /* ChildProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DashboardPage);
    return DashboardPage;
    var DashboardPage_1;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { FamillePage } from '../pages/famille/famille';
import { EnfantPage } from '../pages/enfant/enfant';
import { ConnexionPage } from '../pages/connexion/connexion';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ModalActionPage } from '../pages/modal-action/modal-action';
import { LogoutComponent } from '../components/logout/logout';
import { HttpClientModule} from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { ToastProvider } from '../providers/toast/toast';
import { UserProvider} from '../providers/api-base/user';
import { ChildProvider} from '../providers/api-base/child';
import { ActionProvider} from '../providers/api-base/action';
import { DashboardProvider} from '../providers/api-base/dashboard';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    LogoutComponent,
    FamillePage,
    EnfantPage,
    DashboardPage,
    ModalActionPage,
    ConnexionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    LogoutComponent,
    FamillePage,
    EnfantPage,
    DashboardPage,
    ModalActionPage,
    ConnexionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastProvider,
    UserProvider,
    ChildProvider,
    ActionProvider,
    DashboardProvider
  ]
})
export class AppModule {}

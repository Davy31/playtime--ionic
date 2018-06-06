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
import { LogoutComponent } from '../components/logout/logout';
import { HttpClientModule} from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ToastProvider } from '../providers/toast/toast';
import { UserProvider} from '../providers/api-base/user';
import { ChildProvider} from '../providers/api-base/child';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyC2FGz-B-J1IaLhbSqmbF59ET2Si2HJzuM",
  authDomain: "playtime-1974.firebaseapp.com",
  databaseURL: "https://playtime-1974.firebaseio.com",
  projectId: "playtime-1974",
  storageBucket: "playtime-1974.appspot.com",
  messagingSenderId: "350372660694"
};

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
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
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
    EnfantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastProvider,
    UserProvider,
    ChildProvider
  ]
})
export class AppModule {}

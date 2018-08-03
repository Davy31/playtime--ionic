import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { FamillePage } from '../pages/famille/famille';
import { EnfantPage } from '../pages/enfant/enfant';
import { ConnexionPage } from '../pages/connexion/connexion';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ChronoPage } from '../pages/chrono/chrono';
import { LogoutComponent } from '../components/logout/logout';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { ToastProvider } from '../providers/toast/toast';
import { UserProvider} from '../providers/api-base/user';
import { ChildProvider} from '../providers/api-base/child';
import { ActionProvider} from '../providers/api-base/action';
import { DashboardProvider} from '../providers/api-base/dashboard';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';



@NgModule({
  declarations: [
    MyApp,
    LogoutComponent,
    FamillePage,
    EnfantPage,
    DashboardPage,
    ConnexionPage,
    ChronoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LogoutComponent,
    FamillePage,
    EnfantPage,
    DashboardPage,
    ConnexionPage,
    ChronoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastProvider,
    UserProvider,
    ChildProvider,
    ActionProvider,
    DashboardProvider,
    TextToSpeech,
    Vibration,
    NativeAudio
    
  ]
})
export class AppModule {}

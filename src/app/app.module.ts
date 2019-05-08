import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { IngresoPage } from '../pages/ingreso/ingreso';
import { PrincipalPage } from '../pages/principal/principal';
import { ProximaPage } from '../pages/proxima/proxima';
import { FarrasPage } from '../pages/farras/farras';
import { MiPage } from '../pages/mi/mi';
import { DesahogoPage } from '../pages/desahogo/desahogo';
import { ListaPage } from '../pages/lista/lista';

//import {FIREBASE_CONFIG} from './app.firebase.config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
//import {environment} from '../environment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    IngresoPage,
    PrincipalPage,
    ProximaPage,
    FarrasPage,
    MiPage,
    DesahogoPage,
    ListaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    IngresoPage,
    PrincipalPage,
    ProximaPage,
    FarrasPage,
    MiPage,
    DesahogoPage,
    ListaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

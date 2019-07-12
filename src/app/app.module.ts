import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { RegistroPageModule } from '../pages/registro/registro.module';
import { IngresoPage } from '../pages/ingreso/ingreso';
import { IngresoPageModule } from '../pages/ingreso/ingreso.module';
import { PrincipalPage } from '../pages/principal/principal';
import { PrincipalPageModule } from '../pages/principal/principal.module';
import { ProximaPage } from '../pages/proxima/proxima';
import { ProximaPageModule } from '../pages/proxima/proxima.module';
import { FarrasPage } from '../pages/farras/farras';
import { FarrasPageModule } from '../pages/farras/farras.module';
import { MiPage } from '../pages/mi/mi';
import { MiPageModule } from '../pages/mi/mi.module';
import { DesahogoPage } from '../pages/desahogo/desahogo';
import { DesahogoPageModule } from '../pages/desahogo/desahogo.module';
import { ListaPage } from '../pages/lista/lista';
import {ListaPageModule} from '../pages/lista/lista.module';
import { CrPageModule} from '../pages/cr/cr.module';
import { CrPage } from '../pages/cr/cr';
//import {AngularFireAuthModule} from 'angularfire2/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import {AngularFireModule} from 'angularfire2';
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
    ListaPage,
    CrPage
  ],
  imports: [
    BrowserModule,
    CrPageModule,
    ListaPageModule,
    RegistroPageModule,
    IngresoPageModule,
    PrincipalPageModule,
    ProximaPageModule,
    FarrasPageModule,
    MiPageModule,
    DesahogoPageModule,
    IonicModule.forRoot(MyApp)
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireAuthModule
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
    ListaPage,
    CrPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
/*export const FIREBASE_CONFIG={
  apiKey: "xxxxxxxxxx",
  authomain: "your-domain-name.firebaseapp.com",
  databaseURL: "https://your-domain-name.firebaseio.com",
  storageBucket:"your-domain-name.appspot.com",
  messagingSenderId:"<your-messaging-sender-id>"
};*/

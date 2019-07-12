import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { IngresoPage } from '../pages/ingreso/ingreso';
import { PrincipalPage } from '../pages/principal/principal';
import { ProximaPage } from '../pages/proxima/proxima';
import { FarrasPage } from '../pages/farras/farras';
import { MiPage } from '../pages/mi/mi';
import { DesahogoPage } from '../pages/desahogo/desahogo';
import { ListaPage } from '../pages/lista/lista';
import { CrPage } from '../pages/cr/cr';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Registro', component: RegistroPage },
      { title: 'Ingreso', component: IngresoPage },
      { title: 'Principal', component: PrincipalPage },
      { title: 'Proxima', component: ProximaPage },
      { title: 'Farras', component: FarrasPage },
      { title: 'Mi', component: MiPage },
      { title: 'Desahogo', component: DesahogoPage },
      { title: 'Lista', component: ListaPage },
      //{ title: 'Cr', component: CrPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

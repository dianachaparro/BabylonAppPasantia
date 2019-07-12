import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {DesahogoPage} from '../desahogo/desahogo';
import {ProximaPage} from '../proxima/proxima';
import {MiPage} from '../mi/mi';
//import {ListaPage} from '../lista/lista';
import {FarrasPage} from '../farras/farras';


/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  abrird(){
    this.navCtrl.push(DesahogoPage);
  }
  abrirm(){
    this.navCtrl.push(MiPage);
  }
 /* abrirl(){
    this.navCtrl.push(ListaPage);
  }*/
  abrirp(){
    this.navCtrl.push(ProximaPage);
  }
  abrirf(){
    this.navCtrl.push(FarrasPage);
  }
  
  constructor(public navCtrl: NavController) {
  }
  

}

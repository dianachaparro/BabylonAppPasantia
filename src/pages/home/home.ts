import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegistroPage} from '../registro/registro';
import {IngresoPage} from '../ingreso/ingreso';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

abrirR(){
  this.navCtrl.push(RegistroPage);
}
abrirI(){
  this.navCtrl.push(IngresoPage);
}

  constructor(public navCtrl: NavController) {
  
    

}
}
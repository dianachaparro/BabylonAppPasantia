import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { ModalController } from "@ionic/angular";
import { ActionSheetController } from '@ionic/angular';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(
    public authservice : AuthService, 
    public actionSheetController: ActionSheetController,
    private modal : ModalController, public router:Router){}


  Onlogout(){
    this.authservice.logout();
  }

  ngOnInit(){
  }

//   abrird(){
//     this.navCtrl.push(DesahogoPage);
//   }
//   abrirm(){
//     this.navCtrl.push(MiPage);
//   }
//  /* abrirl(){
//     this.navCtrl.push(ListaPage);
//   }*/
//   abrirp(){
//     this.navCtrl.push(ProximaPage);
//   }
  abrirf(){
    this.router.navigate(['/farras']);
  }


}

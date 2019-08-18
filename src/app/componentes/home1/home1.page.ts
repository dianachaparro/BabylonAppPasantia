import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  abrirR(){
    this.router.navigate(['/registro']);
  }

  abrirI(){
    this.router.navigate(['/login']);
  }

}

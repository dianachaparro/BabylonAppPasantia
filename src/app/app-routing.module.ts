import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NoLoginGuard } from "./guards/no-login.guard";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate : [AuthGuard] },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate : [NoLoginGuard] },
  { path: 'registro', loadChildren: './componentes/registro/registro.module#RegistroPageModule', canActivate : [NoLoginGuard] },
  { path: 'home1', loadChildren: './componentes/home1/home1.module#Home1PageModule', canActivate: [NoLoginGuard] },
  { path: 'farras', loadChildren: './componentes/farras/farras.module#FarrasPageModule', canActivate : [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

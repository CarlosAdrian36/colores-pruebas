import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from '../components/sidenav/sidenav/sidenav.component';
import { AppComponent } from '../app.component';
import { PrincipalComponent } from '../components/principal/principal.component';
import { BentoComponent } from '../components/bento/bento.component';
import { AdminComponent } from '../components/admin/admin.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  
  {path: '',redirectTo:'Principal',pathMatch:'full'},
  {path: 'Principal',component:PrincipalComponent},
  {path: 'Filtros',component:SidenavComponent},
  {path: 'bento',component:BentoComponent},
  {path: 'Admin',component:AdminComponent},
  {path: 'Login',component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { activateGuard, activateGuardRol,activateGuardLog } from './guard/activate.guard';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { ProductoListadoPublicoComponent } from './componentes/producto-listado-publico/producto-listado-publico.component';
import { AbmContainerComponent } from './componentes/abm-container/abm-container.component';
import { CargarContainerComponent } from './componentes/cargar-container/cargar-container.component';

const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent,canActivate: [activateGuardLog]},
  {path:'productos',component:ProductoListadoPublicoComponent},
  {path:'altaProducto',component:AltaProductoComponent,canActivate: [activateGuard],},
  {path:'productoDetalle',component:ProductoDetalleComponent,canActivate: [activateGuard],},
  {path:'abmContainer',component:AbmContainerComponent,canActivate: [activateGuardRol],},
  {path:'cargarContainer',component:CargarContainerComponent,canActivate: [activateGuard],},
  { path: '**', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from '@coreui/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { ProductoListadoPublicoComponent } from './componentes/producto-listado-publico/producto-listado-publico.component';
import { TablaProductoComponent } from './componentes/tabla-producto/tabla-producto.component';
import { AbmContainerComponent } from './componentes/abm-container/abm-container.component';
import { TablaContainerComponent } from './componentes/tabla-container/tabla-container.component';
import { AltaContainerComponent } from './componentes/alta-container/alta-container.component';
import { ModificarContainerComponent } from './componentes/modificar-container/modificar-container.component';
import { BorrarContainerComponent } from './componentes/borrar-container/borrar-container.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AltaProductoComponent,
    TablaPaisesComponent,
    ProductoDetalleComponent,
    ProductoListadoPublicoComponent,
    TablaProductoComponent,
    AbmContainerComponent,
    TablaContainerComponent,
    AltaContainerComponent,
    ModificarContainerComponent,
    BorrarContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

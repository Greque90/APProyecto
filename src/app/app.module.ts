import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Componentes/1encabezado/encabezado.component';
import { InicioComponent } from './Componentes/2inicio/inicio.component';
import { NosotrosComponent } from './Componentes/3nosotros/nosotros.component';
import { ServiciosComponent } from './Componentes/4servicios/servicios.component';
import { ContactoComponent } from './Componentes/5contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landingComponent/landing/landing.component';
import { VetSidebarComponent } from './veterinario/vet-sidebar/vet-sidebar.component';
import { ClienteSidebarComponent } from './cliente/cliente-sidebar/cliente-sidebar.component';
import { ClienteSearchbarComponent } from './searchbar-mascota-nombre/searchbar-mascota-nombre.component';
import { ClientePerfilComponent } from './cliente/cliente-perfil/cliente-perfil.component';
import { ClienteMostrarMascotaComponent } from './cliente/cliente-mostrar-mascota/cliente-mostrar-mascota.component';
import { VetMostrarMascotaTodasComponent } from './veterinario/vet-mostrar-mascota-todas/vet-mostrar-mascota-todas.component';
import { VetRegistrarMascotaComponent } from './veterinario/vet-registrar-mascota/vet-registrar-mascota.component';
import { VetMostrarClienteComponent } from './veterinario/vet-mostrar-cliente/vet-mostrar-cliente.component';
import { VetMostrarClienteTodosComponent } from './veterinario/vet-mostrar-cliente-todos/vet-mostrar-cliente-todos.component';
import { VetRegistrarClienteComponent } from './veterinario/vet-registrar-cliente/vet-registrar-cliente.component';
import { VetModificarClienteComponent } from './veterinario/vet-modificar-cliente/vet-modificar-cliente.component';
import { VetMostrarMascotaComponent } from './veterinario/vet-mostrar-mascota/vet-mostrar-mascota.component';
import { VetModificarMascotaComponent } from './veterinario/vet-modificar-mascota/vet-modificar-mascota.component';
import { VetLoginComponent } from './veterinario/vet-login/vet-login.component';
import { ClienteLoginComponent } from './cliente/cliente-login/cliente-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    VetSidebarComponent,
    ClienteSidebarComponent,
    ClienteSearchbarComponent,
    ClientePerfilComponent,
    ClienteMostrarMascotaComponent,
    VetMostrarMascotaTodasComponent,
    VetRegistrarMascotaComponent,
    VetMostrarClienteComponent,
    VetMostrarClienteTodosComponent,
    VetRegistrarClienteComponent,
    VetModificarClienteComponent,
    VetMostrarMascotaComponent,
    VetModificarMascotaComponent,
    VetLoginComponent,
    ClienteLoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

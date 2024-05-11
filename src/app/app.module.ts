import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landingComponent/landing/landing.component';
import { VetSidebarComponent } from './veterinario/vet-sidebar/vet-sidebar.component';
import { ClienteSidebarComponent } from './cliente/cliente-sidebar/cliente-sidebar.component';
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
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { IdNotFoundComponent } from './errors/id-not-found/id-not-found.component';
import { AdministradorSidebarComponent } from './administrador/administrador-sidebar/administrador-sidebar.component';
import { AdministradorDashboardComponent } from './administrador/administrador-dashboard/administrador-dashboard.component';
import { AdminMostrarMascotasTodasComponent } from './administrador/admin-mostrar-mascotas-todas/admin-mostrar-mascotas-todas.component';
import { AdminMostrarMascotaComponent } from './administrador/admin-mostrar-mascota/admin-mostrar-mascota.component';
import { AdminModificarMascotaComponent } from './administrador/admin-modificar-mascota/admin-modificar-mascota.component';
import { AdminRegistrarMascotaComponent } from './administrador/admin-registrar-mascota/admin-registrar-mascota.component';
import { AdminMostrarClientesTodosComponent } from './administrador/admin-mostrar-clientes-todos/admin-mostrar-clientes-todos.component';
import { AdminMostrarClienteComponent } from './administrador/admin-mostrar-cliente/admin-mostrar-cliente.component';
import { AdminModificarClienteComponent } from './administrador/admin-modificar-cliente/admin-modificar-cliente.component';
import { AdminRegistrarClienteComponent } from './administrador/admin-registrar-cliente/admin-registrar-cliente.component';
import { AdminRegistrarVeterinarioComponent } from './administrador/admin-registrar-veterinario/admin-registrar-veterinario.component';
import { AdminMostrarVeterinariosTodosComponent } from './administrador/admin-mostrar-veterinarios-todos/admin-mostrar-veterinarios-todos.component';
import { AdminMostarVeterinarioComponent } from './administrador/admin-mostar-veterinario/admin-mostar-veterinario.component';
import { AdminModificarVeterinarioComponent } from './administrador/admin-modificar-veterinario/admin-modificar-veterinario.component';
import { AdminBarChartComponent } from './administrador/admin-bar-chart/admin-bar-chart.component';
import { IdNotFoundAdminComponent } from './errors/id-not-found-admin/id-not-found-admin.component';
import { ChatBotComponent } from './chatbot/chat-bot/chat-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    VetSidebarComponent,
    ClienteSidebarComponent,
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
    PageNotFoundComponent,
    IdNotFoundComponent,
    AdministradorSidebarComponent,
    AdministradorDashboardComponent,
    AdminMostrarMascotasTodasComponent,
    AdminMostrarMascotaComponent,
    AdminModificarMascotaComponent,
    AdminRegistrarMascotaComponent,
    AdminMostrarClientesTodosComponent,
    AdminMostrarClienteComponent,
    AdminModificarClienteComponent,
    AdminRegistrarClienteComponent,
    AdminRegistrarVeterinarioComponent,
    AdminMostrarVeterinariosTodosComponent,
    AdminMostarVeterinarioComponent,
    AdminModificarVeterinarioComponent,
    AdminBarChartComponent,
    IdNotFoundAdminComponent,
    ChatBotComponent
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

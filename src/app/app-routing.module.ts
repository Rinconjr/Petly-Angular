import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landingComponent/landing/landing.component';
import { ClienteLoginComponent } from './cliente/cliente-login/cliente-login.component';
import { VetLoginComponent } from './veterinario/vet-login/vet-login.component';
import { ClientePerfilComponent } from './cliente/cliente-perfil/cliente-perfil.component';
import { ClienteMostrarMascotaComponent } from './cliente/cliente-mostrar-mascota/cliente-mostrar-mascota.component';
import { VetMostrarMascotaTodasComponent } from './veterinario/vet-mostrar-mascota-todas/vet-mostrar-mascota-todas.component';
import { VetMostrarMascotaComponent } from './veterinario/vet-mostrar-mascota/vet-mostrar-mascota.component';
import { VetRegistrarMascotaComponent } from './veterinario/vet-registrar-mascota/vet-registrar-mascota.component';
import { VetModificarMascotaComponent } from './veterinario/vet-modificar-mascota/vet-modificar-mascota.component';
import { VetMostrarClienteTodosComponent } from './veterinario/vet-mostrar-cliente-todos/vet-mostrar-cliente-todos.component';
import { VetMostrarClienteComponent } from './veterinario/vet-mostrar-cliente/vet-mostrar-cliente.component';
import { VetRegistrarClienteComponent } from './veterinario/vet-registrar-cliente/vet-registrar-cliente.component';
import { VetModificarClienteComponent } from './veterinario/vet-modificar-cliente/vet-modificar-cliente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //Path para la landing page
  { path: '', component: LandingComponent },
  
  //Path para el login de cliente y veterinario
  { path: 'login/cliente', component: ClienteLoginComponent},
  { path: 'login/veterinario', component: VetLoginComponent},

  //Path para todo lo relacionado al veterinario
  //TODO: cambiar todo esto cuando haya login funcional del vetrinario
  //! todo lo de las mascotas
  { path: 'veterinario/mascotas/all', component:  VetMostrarMascotaTodasComponent },
  { path: 'veterinario/mascotas/find/:id', component:  VetMostrarMascotaComponent},
  { path: 'veterinario/mascotas/add', component: VetRegistrarMascotaComponent },
  { path: 'veterinario/mascotas/update/:id', component: VetModificarMascotaComponent},
  //! todo lo de los clientes
  { path: 'veterinario/clientes/all', component:  VetMostrarClienteTodosComponent },
  { path: 'veterinario/clientes/find/:id', component: VetMostrarClienteComponent },
  { path: 'veterinario/clientes/add', component: VetRegistrarClienteComponent },
  { path: 'veterinario/clientes/update/:id', component: VetModificarClienteComponent },
  
  //Path para todo lo relacionado al usuario
  { path: 'usuario/:id', component: ClientePerfilComponent },
  { path: 'usuario/:id/mascota/:id_mascota', component: ClienteMostrarMascotaComponent },
  
  //Path de la pagina de error
  //! Dejar siempre al final
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

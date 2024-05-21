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
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { IdNotFoundComponent } from './errors/id-not-found/id-not-found.component';
import { AdministradorDashboardComponent } from './administrador/administrador-dashboard/administrador-dashboard.component';
import { AdminMostrarMascotasTodasComponent } from './administrador/admin-mostrar-mascotas-todas/admin-mostrar-mascotas-todas.component';
import { AdminMostrarMascotaComponent } from './administrador/admin-mostrar-mascota/admin-mostrar-mascota.component';
import { AdminRegistrarMascotaComponent } from './administrador/admin-registrar-mascota/admin-registrar-mascota.component';
import { AdminModificarMascotaComponent } from './administrador/admin-modificar-mascota/admin-modificar-mascota.component';
import { AdminMostrarClientesTodosComponent } from './administrador/admin-mostrar-clientes-todos/admin-mostrar-clientes-todos.component';
import { AdminMostrarClienteComponent } from './administrador/admin-mostrar-cliente/admin-mostrar-cliente.component';
import { AdminRegistrarClienteComponent } from './administrador/admin-registrar-cliente/admin-registrar-cliente.component';
import { AdminModificarClienteComponent } from './administrador/admin-modificar-cliente/admin-modificar-cliente.component';
import { AdminMostrarVeterinariosTodosComponent } from './administrador/admin-mostrar-veterinarios-todos/admin-mostrar-veterinarios-todos.component';
import { AdminRegistrarVeterinarioComponent } from './administrador/admin-registrar-veterinario/admin-registrar-veterinario.component';
import { AdminMostarVeterinarioComponent } from './administrador/admin-mostar-veterinario/admin-mostar-veterinario.component';
import { AdminModificarVeterinarioComponent } from './administrador/admin-modificar-veterinario/admin-modificar-veterinario.component';
import { IdNotFoundAdminComponent } from './errors/id-not-found-admin/id-not-found-admin.component';

const routes: Routes = [
  //Path para la landing page
  { path: '', component: LandingComponent },
  
  //Path para el login de cliente y veterinario
  { path: 'login/cliente', component: ClienteLoginComponent},
  { path: 'login/veterinario', component: VetLoginComponent},

  //Path para todo lo relacionado al veterinario
  { path: 'veterinario/', component: VetMostrarMascotaTodasComponent},
  { path: 'veterinario/mascotas/all', component:  VetMostrarMascotaTodasComponent },
  { path: 'veterinario/:vet_id/mascotas/find/:id', component:  VetMostrarMascotaComponent},
  { path: 'veterinario/:vet_id/mascotas/add', component: VetRegistrarMascotaComponent },
  { path: 'veterinario/:vet_id/mascotas/update/:id', component: VetModificarMascotaComponent},
  { path: 'veterinario/:vet_id/clientes/all', component:  VetMostrarClienteTodosComponent },
  { path: 'veterinario/:vet_id/clientes/find/:id', component: VetMostrarClienteComponent },
  { path: 'veterinario/:vet_id/clientes/add', component: VetRegistrarClienteComponent },
  { path: 'veterinario/:vet_id/clientes/update/:id', component: VetModificarClienteComponent },
  
  //Path para todo lo relacionado al usuario
  { path: 'usuario', component: ClientePerfilComponent },
  { path: 'usuario/mascota/:id_mascota', component: ClienteMostrarMascotaComponent },

  //Path para todo lo relacionado al administrador
  { path: 'admin/dashboard', component: AdministradorDashboardComponent},
  { path: 'admin/mascotas/all', component: AdminMostrarMascotasTodasComponent },
  { path: 'admin/mascotas/find/:id', component: AdminMostrarMascotaComponent},
  { path: 'admin/mascotas/add', component: AdminRegistrarMascotaComponent},
  { path: 'admin/mascotas/update/:id', component: AdminModificarMascotaComponent},
  { path: 'admin/clientes/all', component:  AdminMostrarClientesTodosComponent},
  { path: 'admin/clientes/find/:id', component: AdminMostrarClienteComponent},
  { path: 'admin/clientes/add', component: AdminRegistrarClienteComponent},
  { path: 'admin/clientes/update/:id', component: AdminModificarClienteComponent},
  { path: 'admin/veterinarios/all', component: AdminMostrarVeterinariosTodosComponent},
  { path: 'admin/veterinarios/find/:id', component: AdminMostarVeterinarioComponent},
  { path: 'admin/veterinarios/add', component: AdminRegistrarVeterinarioComponent},
  { path: 'admin/veterinarios/update/:id', component: AdminModificarVeterinarioComponent},

  //Path para errores de id
  { path: 'id-not-found/:tipo/:id', component: IdNotFoundAdminComponent },
  { path: 'id-not-found/:vet_id/:tipo/:id', component: IdNotFoundComponent },
  
  //Path de la pagina de error
  //! Dejar siempre al final
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

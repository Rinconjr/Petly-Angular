import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-id-not-found',
  templateUrl: './id-not-found.component.html',
  styleUrls: ['./id-not-found.component.css']
})
export class IdNotFoundComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService,
  ) { }

  rol!: number;
  tipo!: string;
  id!: number;

  ngOnInit() {
    this.userService.encontrarRolToken().subscribe(
      (rol) => this.rol = rol
    );

    this.route.paramMap.subscribe(params => {
      this.tipo = String(params.get('tipo'));
      this.id = Number(params.get('id'));
    });
  }

  goBack() {
    if(this.rol== 1) {
      if(this.tipo === 'cliente')
        this.router.navigate(['/admin/clientes/all']);
      
      else if(this.tipo === 'mascota')
        this.router.navigate(['/admin/mascotas/all']);

      else if(this.tipo === 'veterinario')
        this.router.navigate(['/admin/veterinarios/all']);
    } else if(this.rol == 2) {
      if(this.tipo === 'cliente')
        this.router.navigate(['/veterinario/clientes/all']);
      
      else if(this.tipo === 'mascota')
        this.router.navigate(['/veterinario/mascotas/all']);
    } else if(this.rol == 3) {
      this.router.navigate(['/usuario']);
    }
  }
}

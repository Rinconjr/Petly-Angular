import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-id-not-found',
  templateUrl: './id-not-found.component.html',
  styleUrls: ['./id-not-found.component.css']
})
export class IdNotFoundComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  user!: string;
  tipo!: string;
  id!: string;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const user = String(params.get('user'));
      this.user = user;

      const tipo = String(params.get('tipo'));
      this.tipo = tipo;


      const id = String(params.get('id'));
      this.id = id;
    });
  }

  goBack() {
    if(this.user === 'admin')
    {
      if(this.tipo === 'cliente')
        this.router.navigate(['/admin/clientes/all']);
      else if(this.tipo === 'mascota')
        this.router.navigate(['/admin/mascotas/all']);
    }
    else if (this.user === 'veterinario')
    {
      if(this.tipo === 'cliente')
        this.router.navigate(['/veterinario/clientes/all']);
      else if(this.tipo === 'mascota')
        this.router.navigate(['/veterinario/mascotas/all']);
    }
  }
}

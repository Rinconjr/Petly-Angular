import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-id-not-found-admin',
  templateUrl: './id-not-found-admin.component.html',
  styleUrls: ['./id-not-found-admin.component.css']
})
export class IdNotFoundAdminComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  tipo!: string;
  id!: number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.tipo = String(params.get('tipo'));
      this.id = Number(params.get('id'));
    });
  }

  goBack() {
    if(this.tipo === 'cliente')
      this.router.navigate(['/admin/clientes/all']);
    
    else if(this.tipo === 'mascota')
      this.router.navigate(['/admin/mascotas/all']);

    else if(this.tipo === 'veterinario')
      this.router.navigate(['/admin/veterinarios/all']);
  }
}

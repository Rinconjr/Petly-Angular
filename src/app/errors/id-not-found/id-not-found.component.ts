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

  id!: string;
  tipo!: string;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));
      this.id = id;

      const tipo = String(params.get('tipo'));
      this.tipo = tipo;
    });
  }

  goBack() {
    if(this.tipo === 'cliente')
      this.router.navigate(['/veterinario/clientes/all']);
    else if(this.tipo === 'mascota')
      this.router.navigate(['/veterinario/mascotas/all']);
  }
}

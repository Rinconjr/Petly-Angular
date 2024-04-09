import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaErrorClienteComponent } from './pagina-error-cliente.component';

describe('PaginaErrorClienteComponent', () => {
  let component: PaginaErrorClienteComponent;
  let fixture: ComponentFixture<PaginaErrorClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaErrorClienteComponent]
    });
    fixture = TestBed.createComponent(PaginaErrorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

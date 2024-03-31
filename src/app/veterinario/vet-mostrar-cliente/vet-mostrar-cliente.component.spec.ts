import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetMostrarClienteComponent } from './vet-mostrar-cliente.component';

describe('VetMostrarClienteComponent', () => {
  let component: VetMostrarClienteComponent;
  let fixture: ComponentFixture<VetMostrarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetMostrarClienteComponent]
    });
    fixture = TestBed.createComponent(VetMostrarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

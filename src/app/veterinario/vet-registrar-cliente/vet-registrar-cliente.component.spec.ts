import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetRegistrarClienteComponent } from './vet-registrar-cliente.component';

describe('VetRegistrarClienteComponent', () => {
  let component: VetRegistrarClienteComponent;
  let fixture: ComponentFixture<VetRegistrarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetRegistrarClienteComponent]
    });
    fixture = TestBed.createComponent(VetRegistrarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

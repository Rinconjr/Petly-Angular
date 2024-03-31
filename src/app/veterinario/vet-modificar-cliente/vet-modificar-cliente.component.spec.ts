import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetModificarClienteComponent } from './vet-modificar-cliente.component';

describe('VetModificarClienteComponent', () => {
  let component: VetModificarClienteComponent;
  let fixture: ComponentFixture<VetModificarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetModificarClienteComponent]
    });
    fixture = TestBed.createComponent(VetModificarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

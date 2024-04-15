import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModificarClienteComponent } from './admin-modificar-cliente.component';

describe('AdminModificarClienteComponent', () => {
  let component: AdminModificarClienteComponent;
  let fixture: ComponentFixture<AdminModificarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminModificarClienteComponent]
    });
    fixture = TestBed.createComponent(AdminModificarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

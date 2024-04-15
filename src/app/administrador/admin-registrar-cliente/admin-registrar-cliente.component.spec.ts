import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistrarClienteComponent } from './admin-registrar-cliente.component';

describe('AdminRegistrarClienteComponent', () => {
  let component: AdminRegistrarClienteComponent;
  let fixture: ComponentFixture<AdminRegistrarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegistrarClienteComponent]
    });
    fixture = TestBed.createComponent(AdminRegistrarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

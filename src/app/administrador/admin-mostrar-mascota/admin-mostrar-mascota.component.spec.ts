import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMostrarMascotaComponent } from './admin-mostrar-mascota.component';

describe('AdminMostrarMascotaComponent', () => {
  let component: AdminMostrarMascotaComponent;
  let fixture: ComponentFixture<AdminMostrarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMostrarMascotaComponent]
    });
    fixture = TestBed.createComponent(AdminMostrarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

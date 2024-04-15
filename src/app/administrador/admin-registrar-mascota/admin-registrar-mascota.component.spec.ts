import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistrarMascotaComponent } from './admin-registrar-mascota.component';

describe('AdminRegistrarMascotaComponent', () => {
  let component: AdminRegistrarMascotaComponent;
  let fixture: ComponentFixture<AdminRegistrarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegistrarMascotaComponent]
    });
    fixture = TestBed.createComponent(AdminRegistrarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

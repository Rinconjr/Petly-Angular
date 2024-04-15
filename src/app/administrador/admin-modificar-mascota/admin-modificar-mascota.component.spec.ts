import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModificarMascotaComponent } from './admin-modificar-mascota.component';

describe('AdminModificarMascotaComponent', () => {
  let component: AdminModificarMascotaComponent;
  let fixture: ComponentFixture<AdminModificarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminModificarMascotaComponent]
    });
    fixture = TestBed.createComponent(AdminModificarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

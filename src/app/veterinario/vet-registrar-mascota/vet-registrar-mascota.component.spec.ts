import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetRegistrarMascotaComponent } from './vet-registrar-mascota.component';

describe('VetRegistrarMascotaComponent', () => {
  let component: VetRegistrarMascotaComponent;
  let fixture: ComponentFixture<VetRegistrarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetRegistrarMascotaComponent]
    });
    fixture = TestBed.createComponent(VetRegistrarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

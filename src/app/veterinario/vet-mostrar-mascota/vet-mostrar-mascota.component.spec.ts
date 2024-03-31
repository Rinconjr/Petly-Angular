import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetMostrarMascotaComponent } from './vet-mostrar-mascota.component';

describe('VetMostrarMascotaComponent', () => {
  let component: VetMostrarMascotaComponent;
  let fixture: ComponentFixture<VetMostrarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetMostrarMascotaComponent]
    });
    fixture = TestBed.createComponent(VetMostrarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

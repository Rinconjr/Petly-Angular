import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMostrarMascotaComponent } from './cliente-mostrar-mascota.component';

describe('ClienteMostrarMascotaComponent', () => {
  let component: ClienteMostrarMascotaComponent;
  let fixture: ComponentFixture<ClienteMostrarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteMostrarMascotaComponent]
    });
    fixture = TestBed.createComponent(ClienteMostrarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

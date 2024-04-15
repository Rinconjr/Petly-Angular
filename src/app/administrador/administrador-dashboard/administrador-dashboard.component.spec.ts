import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDashboardComponent } from './administrador-dashboard.component';

describe('AdministradorDashboardComponent', () => {
  let component: AdministradorDashboardComponent;
  let fixture: ComponentFixture<AdministradorDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorDashboardComponent]
    });
    fixture = TestBed.createComponent(AdministradorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

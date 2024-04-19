import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBarChartComponent } from './admin-bar-chart.component';

describe('AdminBarChartComponent', () => {
  let component: AdminBarChartComponent;
  let fixture: ComponentFixture<AdminBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBarChartComponent]
    });
    fixture = TestBed.createComponent(AdminBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

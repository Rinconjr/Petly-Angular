import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetSidebarComponent } from './vet-sidebar.component';

describe('VetSidebarComponent', () => {
  let component: VetSidebarComponent;
  let fixture: ComponentFixture<VetSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetSidebarComponent]
    });
    fixture = TestBed.createComponent(VetSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

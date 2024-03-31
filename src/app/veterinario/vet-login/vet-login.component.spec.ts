import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetLoginComponent } from './vet-login.component';

describe('VetLoginComponent', () => {
  let component: VetLoginComponent;
  let fixture: ComponentFixture<VetLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetLoginComponent]
    });
    fixture = TestBed.createComponent(VetLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

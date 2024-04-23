import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdNotFoundAdminComponent } from './id-not-found-admin.component';

describe('IdNotFoundAdminComponent', () => {
  let component: IdNotFoundAdminComponent;
  let fixture: ComponentFixture<IdNotFoundAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdNotFoundAdminComponent]
    });
    fixture = TestBed.createComponent(IdNotFoundAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

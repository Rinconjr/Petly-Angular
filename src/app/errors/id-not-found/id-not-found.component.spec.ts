import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdNotFoundComponent } from './id-not-found.component';

describe('IdNotFoundComponent', () => {
  let component: IdNotFoundComponent;
  let fixture: ComponentFixture<IdNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdNotFoundComponent]
    });
    fixture = TestBed.createComponent(IdNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

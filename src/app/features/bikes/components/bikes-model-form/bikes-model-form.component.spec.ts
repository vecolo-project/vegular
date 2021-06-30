import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesModelFormComponent } from './bikes-model-form.component';

describe('BikesModelFormComponent', () => {
  let component: BikesModelFormComponent;
  let fixture: ComponentFixture<BikesModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesModelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

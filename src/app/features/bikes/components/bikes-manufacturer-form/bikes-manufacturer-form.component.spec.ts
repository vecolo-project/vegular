import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BikesManufacturerFormComponent} from './bikes-manufacturer-form.component';

describe('BikesManufacturerFormComponent', () => {
  let component: BikesManufacturerFormComponent;
  let fixture: ComponentFixture<BikesManufacturerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesManufacturerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesManufacturerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

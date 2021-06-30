import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesManufacturerListComponent } from './bikes-manufacturer-list.component';

describe('BikesManufacturerListComponent', () => {
  let component: BikesManufacturerListComponent;
  let fixture: ComponentFixture<BikesManufacturerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesManufacturerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesManufacturerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

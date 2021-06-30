import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesModelListComponent } from './bikes-model-list.component';

describe('BikesModelListComponent', () => {
  let component: BikesModelListComponent;
  let fixture: ComponentFixture<BikesModelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesModelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesModelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

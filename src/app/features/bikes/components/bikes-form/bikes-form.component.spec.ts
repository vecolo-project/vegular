import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BikesFormComponent} from './bikes-form.component';

describe('BikesFormComponent', () => {
  let component: BikesFormComponent;
  let fixture: ComponentFixture<BikesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

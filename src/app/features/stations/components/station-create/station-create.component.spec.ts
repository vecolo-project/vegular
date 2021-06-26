import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationCreateComponent } from './station-create.component';

describe('StationCreateComponent', () => {
  let component: StationCreateComponent;
  let fixture: ComponentFixture<StationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

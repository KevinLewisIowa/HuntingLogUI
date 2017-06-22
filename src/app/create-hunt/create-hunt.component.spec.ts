import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHuntComponent } from './create-hunt.component';

describe('CreateHuntComponent', () => {
  let component: CreateHuntComponent;
  let fixture: ComponentFixture<CreateHuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHuntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

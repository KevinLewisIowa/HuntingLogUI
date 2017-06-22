import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotDuckListComponent } from './shot-duck-list.component';

describe('ShotDuckListComponent', () => {
  let component: ShotDuckListComponent;
  let fixture: ComponentFixture<ShotDuckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotDuckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotDuckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

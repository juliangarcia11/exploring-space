import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleInSpaceComponent } from './people-in-space.component';

describe('PeopleInSpaceComponent', () => {
  let component: PeopleInSpaceComponent;
  let fixture: ComponentFixture<PeopleInSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleInSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleInSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

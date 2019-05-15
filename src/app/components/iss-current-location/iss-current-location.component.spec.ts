import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssCurrentLocationComponent } from './iss-current-location.component';

describe('IssCurrentLocationComponent', () => {
  let component: IssCurrentLocationComponent;
  let fixture: ComponentFixture<IssCurrentLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssCurrentLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssCurrentLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

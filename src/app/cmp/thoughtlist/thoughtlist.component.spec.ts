import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtlistComponent } from './thoughtlist.component';

describe('ThoughtlistComponent', () => {
  let component: ThoughtlistComponent;
  let fixture: ComponentFixture<ThoughtlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

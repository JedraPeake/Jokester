import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeParentComponent } from './joke-parent.component';

describe('JokeParentComponent', () => {
  let component: JokeParentComponent;
  let fixture: ComponentFixture<JokeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

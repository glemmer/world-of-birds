import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBirdComponent } from './view-bird.component';

describe('ViewBirdComponent', () => {
  let component: ViewBirdComponent;
  let fixture: ComponentFixture<ViewBirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

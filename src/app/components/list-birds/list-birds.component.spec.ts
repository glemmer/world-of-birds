import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBirdsComponent } from './list-birds.component';

describe('ListBirdsComponent', () => {
  let component: ListBirdsComponent;
  let fixture: ComponentFixture<ListBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBirdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

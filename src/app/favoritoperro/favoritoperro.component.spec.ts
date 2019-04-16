import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritoperroComponent } from './favoritoperro.component';

describe('FavoritoperroComponent', () => {
  let component: FavoritoperroComponent;
  let fixture: ComponentFixture<FavoritoperroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritoperroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritoperroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

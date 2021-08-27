import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleButtonDateComponent } from './title-button-date.component';

describe('TitleButtonDateComponent', () => {
  let component: TitleButtonDateComponent;
  let fixture: ComponentFixture<TitleButtonDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleButtonDateComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleButtonDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

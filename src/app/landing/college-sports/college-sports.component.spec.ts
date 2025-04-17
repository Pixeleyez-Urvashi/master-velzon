import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeSportsComponent } from './college-sports.component';

describe('CollegeSportsComponent', () => {
  let component: CollegeSportsComponent;
  let fixture: ComponentFixture<CollegeSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollegeSportsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

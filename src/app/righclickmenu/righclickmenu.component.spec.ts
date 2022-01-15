import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RighclickmenuComponent } from './righclickmenu.component';

describe('RighclickmenuComponent', () => {
  let component: RighclickmenuComponent;
  let fixture: ComponentFixture<RighclickmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RighclickmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RighclickmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseMgmtComponent } from './case-mgmt.component';

describe('CaseMgmtComponent', () => {
  let component: CaseMgmtComponent;
  let fixture: ComponentFixture<CaseMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseMgmtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

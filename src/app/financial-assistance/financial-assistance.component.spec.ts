import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAssistanceComponent } from './financial-assistance.component';

describe('FinancialAssistanceComponent', () => {
  let component: FinancialAssistanceComponent;
  let fixture: ComponentFixture<FinancialAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialAssistanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

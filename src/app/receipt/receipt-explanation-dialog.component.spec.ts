import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptExplanationDialogComponent } from './receipt-explanation-dialog.component';

describe('ReceiptExplanationDialogComponent', () => {
  let component: ReceiptExplanationDialogComponent;
  let fixture: ComponentFixture<ReceiptExplanationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptExplanationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptExplanationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

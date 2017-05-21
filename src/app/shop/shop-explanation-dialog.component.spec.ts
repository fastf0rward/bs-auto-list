import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopExplanationDialogComponent } from './shop-explanation-dialog.component';

describe('ShopExplanationDialogComponent', () => {
  let component: ShopExplanationDialogComponent;
  let fixture: ComponentFixture<ShopExplanationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopExplanationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopExplanationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

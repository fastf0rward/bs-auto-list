import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserSuggestionsComponent } from './edit-user-suggestions.component';

describe('EditUserSuggestionsComponent', () => {
  let component: EditUserSuggestionsComponent;
  let fixture: ComponentFixture<EditUserSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

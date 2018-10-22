import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptviewComponent } from './receiptview.component';

describe('ReceiptviewComponent', () => {
  let component: ReceiptviewComponent;
  let fixture: ComponentFixture<ReceiptviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

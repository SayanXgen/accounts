import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesBillPage } from './sales-bill.page';

describe('SalesBillPage', () => {
  let component: SalesBillPage;
  let fixture: ComponentFixture<SalesBillPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherListPage } from './other-list.page';

describe('OtherListPage', () => {
  let component: OtherListPage;
  let fixture: ComponentFixture<OtherListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

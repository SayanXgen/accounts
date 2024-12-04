import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoiceModalPage } from './voice-modal.page';

describe('VoiceModalPage', () => {
  let component: VoiceModalPage;
  let fixture: ComponentFixture<VoiceModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

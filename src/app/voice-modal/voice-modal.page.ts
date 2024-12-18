import { Component, OnInit } from '@angular/core';
import { VoiceRecorder } from 'capacitor-voice-recorder';
@Component({
  selector: 'app-voice-modal',
  templateUrl: './voice-modal.page.html',
  styleUrls: ['./voice-modal.page.scss'],
})
export class VoiceModalPage implements OnInit {
  isRecording = false;
  audioFile: string | undefined;
  audioPlayer: HTMLAudioElement | null = null;
  isPlaying: boolean = false; // To track if the audio is playing
  constructor() { }

  ngOnInit() {
  }

  async checkPermission() {
    const status = await VoiceRecorder.requestAudioRecordingPermission();
    if (!status.value) {
      alert('Microphone permission is required for recording.');
    }
  }

  async startRecording() {
    await this.checkPermission();
    this.isRecording = true;

    await VoiceRecorder.startRecording();
    console.log('Recording started...');
  }

  async stopRecording() {
    const result = await VoiceRecorder.stopRecording();
    this.isRecording = false;

    if (result.value && result.value.recordDataBase64) {
      // Save the recording as a base64 string
      const base64Audio = result.value.recordDataBase64;
      this.audioFile = `data:audio/aac;base64,${base64Audio}`;
      console.log('Recording stopped and saved.');
    }
  }

  toggleAudio() {
    if (!this.audioFile) {
      alert('No audio file available.');
      return;
    }

    if (!this.audioPlayer) {
      this.audioPlayer = new Audio(this.audioFile);
    }

    if (this.isPlaying) {
      this.audioPlayer.pause();
      console.log('Audio playback paused.');
    } else {
      this.audioPlayer.play();
      console.log('Audio playback started.');
    }

    this.isPlaying = !this.isPlaying; // Toggle play/pause state
  }

}

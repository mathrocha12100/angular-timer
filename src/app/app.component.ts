import { Component } from '@angular/core';
import { convertSecondsToTime } from './app-component.functions';

let interval: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  time = 0;
  timerIsRunning = false;

  showTimerValue() {
    return convertSecondsToTime(this.time);
  }

  initializeTimer() {
    if (this.timerIsRunning) return;
    this.timerIsRunning = true;
    interval = setInterval(() => {
      this.time++;
    }, 1000);
  }

  stopTimer() {
    console.log('teste');
    clearInterval(interval);
    this.timerIsRunning = false;
  }

  restartTimer() {
    if (this.timerIsRunning) {
      clearInterval(interval);
    }
    this.time = 0;
    this.timerIsRunning = false;
  }
}

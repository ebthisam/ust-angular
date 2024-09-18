import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myspa';
  currentTime: string = '';
  location: string = '';

  constructor() {
    this.updateTime();
    this.updateLocation();
    setInterval(() => this.updateTime(), 1000);
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    this.currentTime = `${hours}:${minutes}:${seconds}`;
  }

  updateLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.location = `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
        },
        () => {
          this.location = 'Unable to retrieve location.';
        }
      );
    } else {
      this.location = 'Geolocation not supported.';
    }
  }

  setTheme(theme: string) {
    
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', theme);
  }
}

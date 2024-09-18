import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';

constructor(private router:Router){}

renderHome(): void {
  this.router.navigate(['/home']);
}

renderAboutus(): void {
  this.router.navigate(['/aboutus']);
}

renderRegister(): void {
  this.router.navigate(['/register']);
}
}

import { Component, signal } from '@angular/core';

interface AppInfo {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  purchaseUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  videoUrl?: string;
  featured?: boolean;
  iconColor: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('guevarra-studio');
  currentYear = new Date().getFullYear();

  menuOpen = false;
  readonly cookieBannerVisible = signal(true);

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  acceptCookies(): void {
    this.cookieBannerVisible.set(false);
  }
}

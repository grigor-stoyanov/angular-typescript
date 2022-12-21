import {Injectable} from '@angular/core';

// Shakable Providers (we dont have to manage providers arrays)
@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {
  title: string | null = 'Hello';

  showLoader(title: string): void {
    this.title = title;
  }

  hideLoader(): void {
    this.title = null;
  }

  constructor() {
  }
}

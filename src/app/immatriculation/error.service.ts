import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errorMessage: string = '';

  setErrorMessage(message: string) {
    this.errorMessage = message;
  }

  getErrorMessage() {
    const message = this.errorMessage;
    this.errorMessage = '';
    return message;
  }
}

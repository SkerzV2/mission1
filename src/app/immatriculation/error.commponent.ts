import { Component } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'div[error]',
  template: `<h1>{{message}}</h1>`
})
export class ErrorComponent {
  message: string;

  constructor(private errorService: ErrorService) {}

  ngOnInit() {
    this.message = this.errorService.getErrorMessage();
  }
}

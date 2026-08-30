
import { Component, inject, signal } from '@angular/core';
import { email, form , FormField, required} from '@angular/forms/signals';
import { CalculatorService } from '../Calculator/Calculator.service';

interface LoginData {
  email: string;
  password: string;
}
@Component({
  imports: [FormField],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
 loginModel = signal<LoginData>({
  email: '',
  password: '',
});
loginForm = form(this.loginModel,(schemaPath) => {
  required(schemaPath.email, {message: 'Email is required'});
  email(schemaPath.email, {message: 'Email is not valid'});
  required(schemaPath.password, {message: 'Password is required'});
});
onSubmit(event: Event) {
  event.preventDefault();
  console.log('Form submitted:', this.loginModel());
}
private calculator = inject(CalculatorService);
totalCost = this.calculator.add(10, 20);
}

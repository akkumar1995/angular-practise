import { Service } from "@angular/core";

@Service()
export class CalculatorService {
  add(a: number, b: number): number {
    return a + b;
  }
}
import { Component, computed, inject, Service, Signal, signal } from "@angular/core";

@Service()
export class CounterState{
    private readonly _count = signal(0);
    readonly count = this._count.asReadonly();
    increment(){
        this._count.update(c => c + 1);
    }
}
@Component({
    selector: 'app-awesome-counter',
    template: `
        <h1>Awesome Counter</h1>
        <p>Count: {{ count() }}</p>
        <p>Double Count: {{ doubleCount() }}</p>
        <button (click)="increment()">Increment</button>
    `,

})
export class AwesomeCounter {
    state = inject(CounterState);
    count = this.state.count;
    doubleCount:Signal<number> = computed(() => this.count() * 2);
    increment() {
        this.state.increment();
    }
}
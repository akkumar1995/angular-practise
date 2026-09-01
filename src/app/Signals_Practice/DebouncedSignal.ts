import { Component, debounced, resource, signal } from "@angular/core";

@Component({
    selector: 'app-debounced-signal',
    template: `
    <input (input)="query.set($event.target.value)" />
    @if(results.isLoading()){
        <p>Loading...</p>
    }
    @if(results.error()){
        <p>Error: {{results.error()}}</p>
    }
    @for(item of results.value();track item.id){
        <p>{{item.name}}</p>
    }
    `,
})
export class DebouncedSignal{
    query = signal('');
    debouncedQuery = debounced(this.query, 4000);
    results = resource({
        params:() => this.debouncedQuery.value(),
        loader: ({params}) => fetch(`/api/search?q=${params}`).then(res => res.json()),
    });
}
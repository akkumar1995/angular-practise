import { Component, linkedSignal, signal } from "@angular/core";

interface ShippingMethod {
  id: number;
  name: string;
}

@Component({
  selector: 'app-shipping-method-picker',
  template: `<ul>
    @for(option of shippingOptions();track option.id){
        <li>
            {{ option.name }}
        </li>
    }
  </ul>
  <p>Selected Shipping Method: {{ selectedOption().name }}</p>
  <button (click)="changeShippingOptions()">Change Shipping Options</button>
  `,
})
export class ShippingMethodPicker {
    constructor() {
        this.changeShipping(1);
    }

    shippingOptions= signal<ShippingMethod[]>([{id:0,name:'Standard'},{id:1,name:'Express'},{id:2,name:'Overnight'}]);
    selectedOption = linkedSignal<ShippingMethod[],ShippingMethod>({
        source: this.shippingOptions,
        computation: (options,prev) => {return options.find(o => o.id === prev?.value.id) ?? options[0];},
    });
    changeShipping(index:number){
        this.selectedOption.set(this.shippingOptions()[index]);
    }
    changeShippingOptions(){
        this.shippingOptions.set([{id:0,name:'Email'},{id:1,name:'Sea'},{id:2,name:'Postal Service'}]);
    }
}
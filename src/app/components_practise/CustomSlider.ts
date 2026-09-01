import { booleanAttribute, Component, input, model, output } from "@angular/core";

@Component({
  selector: 'ak-custom-slider',
  template: '',
})
export class CustomSlider {
    label = input('',{transform: trimString});
    disabled = input(false,{transform: booleanAttribute});
    value = model(0);
    panelClosed = output<string>();

    increment(){
        this.value.update((old) => old+1);
        this.panelClosed.emit("test output");
    }
    
}

 function trimString(value: string|undefined): string {
    return value?.trim() || '';
}
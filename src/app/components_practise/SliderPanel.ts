import { Component, output } from "@angular/core";
import { CustomSlider } from "./CustomSlider";

@Component({
    selector: 'ak-slider-panel',
    imports: [CustomSlider],
    template: '<ak-custom-slider label="Slider" [value]="0" [disabled]="false" (panelClosed)="logValue($event)"></ak-custom-slider>',
})
export class SliderPanel {
    logValue(event: any){
        console.log(event);
    }
}
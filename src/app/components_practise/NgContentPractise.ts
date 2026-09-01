import { Component } from "@angular/core";


@Component({
    selector: 'ak-card-title',
    template: '<ng-content>ak-card-title</ng-content>',
})
export class CardTitle{}

@Component({
    selector: 'ak-card-body',
    template: '<ng-content>ak-card-body</ng-content>',
})
export class CardBody{}

@Component({
  selector: 'ak-ngcontent-practise',
  template: `
  <div>
    <ng-content select="ak-card-title"/>
    <ng-content select="ak-card-body"/>
</div>
  `,
  imports: [],
})
export class NgContentPractise {
}
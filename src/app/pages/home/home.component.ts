import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    Home Page <br />
    <ng-container
      *ngTemplateOutlet="
        template1;
        context: { personData: person, orderData: order , $implicit:123}
      "
    >
    </ng-container>

    <ng-template
      #template1
      let-personData="personData"
      let-orderData="orderData"
      let-address
    >
      NGTEMPLATE İÇERİĞİ <br />
      person name: {{ personData.name }} <br />
      product: {{ orderData.product }} <br>
      address: {{ address }}
    </ng-template>
  `,
})
export class HomeComponent {
  person = { name: 'ali', surname: 'veli', id: '00001' };
  order = { product: 'Elma', amount: '1kg', price: 30, currency: 'TRY' };
  address=undefined
  // @ViewChild('template1',{read:TemplateRef}) template1:TemplateRef<any>;
  // constructor(private viewContainerRef:ViewContainerRef ){}

  // ngAfterViewInit(){
  //   this.viewContainerRef.createEmbeddedView(this.template1)
  // }
}

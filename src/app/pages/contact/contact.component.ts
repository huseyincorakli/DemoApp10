import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendmessageComponent } from '../components/sendmessage/sendmessage.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,SendmessageComponent],
  template:`
  Contact Page
  <app-sendmessage>
    <header>BURASI NGCONTENT HEADER</header>
    <body>BURASI NGCONTENT BODY</body>
    <footer>BURASI NGCONTENT FOOTER</footer>
    <div class="ozelIsimliContent">BURASI ÖZEL İSİMLİ NG CONTENT</div>
  </app-sendmessage>
  `
})
export class ContactComponent {

}

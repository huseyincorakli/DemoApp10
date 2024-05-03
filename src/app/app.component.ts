import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-root',
  template:`
  <h2>Server Side Rendering</h2>
  <p>ng add @nguniversal/express-engine server side rendering için yüklenmesi gereken paket</p>
  <p>bu paket yüklendikten sonra app.config.ts hatası verecektir ilgili dizinde app config dosyası oluşturarak main içerisini bu örnekte olduğu gibi taşımalıyız.</p>
  <hr>
  <h2>Advanced Components</h2>
  <h3>NgContent</h3>
  <p>bir componentin içeriğine parent componentte belirlememizi sağlayan ypaılanmadır.</p>
  <p>içeriği dışarıdan belirlenecek olan componnet içesisinde ng-content selectoru çağrılır</p>
  <p>parent componnette child componenetin selectorleri arasında içerik belirlenir.</p>
  <h3>NgContainer</h3>
  <p>NgIf NgFor gibi yapılanmaların kullanılırken şartı sağlamayan değerler içinde html elementi oluşturmayı engelleyen yapıdır.</p>
  <p>Örneğin bir obje içerisindeki değerleri belli bir şarta göre sayfaya basıyorsak şartı sağlamayan değerler içinde html elementleri basılacaktır. <br>
  bu durumu engellemek için ng-container selectoru kullanılır. örnek : aboutcomponent
  </p>
  <h3>NgTemplate</h3>
  örnek :homecomponent
  
  <hr>
  <a routerLink="" routerLinkActive="active">Home</a>|
  <a routerLink="about" routerLinkActive="active">About</a> |
  <a routerLink="contact" routerLinkActive="active">Contact</a> | 
  <hr>
  <router-outlet></router-outlet>
`,
  imports:[RouterModule]
})
export class AppComponent {
  title = 'DemoApp10';
  
}

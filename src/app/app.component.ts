import { Component } from '@angular/core';
import { ProductService } from './Product/product.service';

@Component({
  selector: 'app-root',
  template:`<nav class="navbar navbar-default">
  <ul class = 'nav navbar-nav'>
    <li><a [routerLink] = "['/welcome']"> Home Page </a></li>
    <li><a [routerLink] = "['/products']"> Product List </a></li>
    
  </ul>
  </nav>
  <div class = 'container'>
    <router-outlet></router-outlet>
  </div>
  `,
  
  //template:'<product-list></product-list>',
  providers:[ProductService]
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  //myname:string = "this is the angular sample app!!";
}

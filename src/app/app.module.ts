import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Product/product.component';
import { productFilterPipe } from './Product/productDataPipe';
import { ProductService } from './Product/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './Product/poduct-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardService } from './Product/product.guard.service';
import { StarComponent } from './Product/star-rating.component';
//import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent, ProductListComponent, productFilterPipe, ProductDetailComponent,WelcomeComponent, StarComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'products', component: ProductListComponent},     
      {path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent},
      {path: '', redirectTo:'welcome', pathMatch: 'full'},
      {path: '**', component: WelcomeComponent}
    ])
    ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

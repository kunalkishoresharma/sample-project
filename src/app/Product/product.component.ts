import { Component, OnInit, OnChanges } from "@angular/core";
import { IProduct } from "./IProduct";
import { ProductService } from "./product.service";

@Component({
    selector:'product-list',
    templateUrl: 'product.component.html'
    //template:'<div>{{title}}</div>'
})

export class ProductListComponent implements OnInit, OnChanges{
    title:string="Product List!!!!";
    imageWidth: number = 50;
    imageMargin: number = 10;
    listFilter: string;
    showImage:boolean = false;
    products: IProduct[];
    
    // products: IProduct[] = [
    //    {
    //        productName: "Pink Rose4",
    //        productCode: 111111,
    //        productAvailable: true,
    //        price: 30000,
    //        starRating: 2.5,
    //        imageUrl: 'https://openclipart.org/download/242106/Stylized-Rose-Enhanced-2.svg'
           
    //    },

    //    {
        // productName: "White Rose",
        // productCode: 22222,
        // productAvailable:false,
        // price:30000,
        // starRating: 2.5,
        // imageUrl: 'https://openclipart.org/download/242106/Stylized-Rose-Enhanced-2.svg'
        // },
        //  {
        //      productName: "Hammer Steel",
        //      productCode: 1234,
        //      productAvailable: true,
        //      price: 20.007,
        //      starRating: 2.4,
        //      imageUrl: 'https://openclipart.org/download/242106/Stylized-Rose-Enhanced-2.svg'
        //  },

        //  {
        //      productName: "Wood Hammer",
        //      productCode: 252525,
        //      productAvailable: false,
        //      price: 5000.78999,
        //      starRating: 4.4,
        //      imageUrl:'https://openclipart.org/download/258346/Ireland-Rose-silhouette-2-2016081348.svg'

        //  },

        //  {
        //      productName: "SteelWood Hammer",
        //      productCode: 45856,
        //      productAvailable: false,
        //      price: 2.3000,
        //      starRating: 4.4,
        //      imageUrl:'https://openclipart.org/download/217345/rose-5-2015042004.svg'

        //  },

        //  {
        //      productName: "plactic Roses",
        //      productCode: 567825,
        //      productAvailable: true,
        //      price: 5000,
        //      starRating: 3.9,
        //      imageUrl:'https://openclipart.org/download/221383/Rose-Silhouette.svg'

        //  }
        // ] 
     constructor(private _productService : ProductService){
        //this.products = _productService.getData();         
        //console.log('constructor calling')
     }
    
    toggleImage(): void{
        this.showImage = !this.showImage;
        //console.log('Button clicked')
    }

    ngOnInit(): void{       
         this._productService.getData()
        .subscribe(p => this.products = p);
        
        //console.log("Ranjeet");
    }
    ngOnChanges():void{
        console.log('change ranjeeet');
    }
    
}
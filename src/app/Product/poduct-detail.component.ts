import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    //selector:'product-detail',
    templateUrl:'./product-detail.component.html'
    //template:`{{pageTitle}}`
    
})
export class ProductDetailComponent implements OnInit{
    pageTitle: string = 'Product Details';
    
    constructor(private _route: ActivatedRoute, private _router: Router){
        console.log(this._route.snapshot.paramMap.get('id'));

    }
    ngOnInit(): void {
        let id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle += `:-${id}`
    }

    onBackClick(): void{
        this._router.navigate(['/products'])
    }


}
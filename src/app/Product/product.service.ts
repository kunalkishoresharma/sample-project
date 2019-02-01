import { IProduct } from "./IProduct";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'


@Injectable()
export class ProductService{
    private _productUrl = 'https://api.myjson.com/bins/164wvi';
    constructor(private _http: HttpClient){}

    getData() : Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log("All Error: " + JSON.stringify(data)))
        .catch(this.handleError);        
    };
    private handleError(err: HttpErrorResponse){
        console.log(err.message)
        return Observable.throw(err.message);
    }

    // getData() : IProduct[] {
    //     return [
    //         {            
    //             productName: "Pink Rose fresh",
    //             productCode: 111111,
    //             productAvailable: true,
    //             price: 30000,
    //             starRating: 2.5,
    //             imageUrl: 'https://openclipart.org/download/242106/Stylized-Rose-Enhanced-2.svg'
    //         },
    //         {            
    //             productName: "Lemon fresh",
    //             productCode: 111111,
    //             productAvailable: true,
    //             price: 3888,
    //             starRating: 2.5,
    //             imageUrl: 'https://openclipart.org/download/242106/Stylized-Rose-Enhanced-2.svg'
    //         }
    //     ];
    // }
}
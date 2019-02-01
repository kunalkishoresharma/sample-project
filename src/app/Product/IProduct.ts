import { getLocaleDateFormat } from "@angular/common";

export interface IProduct{
    productId: number,
    productName: string,
    productCode: number,
    productAvailable: boolean,
    price:number,
    starRating: number,
    imageUrl: string,
    //GetString(): string
}
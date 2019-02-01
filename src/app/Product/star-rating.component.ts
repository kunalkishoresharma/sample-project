import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector : 'star-comp',
    templateUrl:'./star-rating.component.html',
    styleUrls: ['./star-rating.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth : number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
     }
}
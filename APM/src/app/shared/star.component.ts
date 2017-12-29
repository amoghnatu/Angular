import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() onRatingClicked: EventEmitter<string>
     = new EventEmitter<string>();

    ngOnChanges(): void {
        console.log('In On changes method');
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.onRatingClicked.emit(`rating value of ${this.rating} is clicked`);
    }
}

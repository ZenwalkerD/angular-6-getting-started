import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<number> = new  EventEmitter<number>();

  buttonText: string = "Add comments";
  ngOnChanges(): void{
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void{
    this.ratingClicked.emit(this.rating);
  }
}

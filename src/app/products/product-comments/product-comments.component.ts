import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.css']
})
export class ProductCommentsComponent implements OnInit {

  constructor() { }

  @Input() productId : string;
  ngOnInit() {
    
  }

}
